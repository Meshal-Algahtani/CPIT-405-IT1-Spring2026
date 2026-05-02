import React, { useState, useEffect } from "react";


const API_KEY = "89d4780a17174bf0a7a82125bcc8139e";


  // STYLES

const s = {
  /* layout */
  page: { minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: "'Segoe UI', sans-serif" },
  nav: { backgroundColor: "#e53e3e", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" },
  navTitle: { color: "#fff", fontSize: "1.5rem", fontWeight: "700", cursor: "pointer", margin: 0 },
  navSub: { color: "#fecaca", fontSize: "0.85rem" },

  /* hero / search */
  hero: { backgroundColor: "#e53e3e", padding: "40px 20px 60px", textAlign: "center" },
  heroTitle: { color: "#fff", fontSize: "2.2rem", fontWeight: "700", marginBottom: "8px" },
  heroSub: { color: "#fecaca", marginBottom: "24px", fontSize: "1rem" },
  searchRow: { display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" },
  searchInput: { padding: "12px 18px", fontSize: "1rem", borderRadius: "8px", border: "none", width: "320px", outline: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" },
  searchBtn: { padding: "12px 24px", backgroundColor: "#fff", color: "#e53e3e", fontWeight: "700", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" },

  /* content */
  content: { maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" },
  sectionTitle: { fontSize: "1.3rem", fontWeight: "600", color: "#1a202c", marginBottom: "20px" },

  /* grid */
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" },
  card: { backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", cursor: "pointer", transition: "transform 0.2s", border: "1px solid #e2e8f0" },
  cardImg: { width: "100%", height: "160px", objectFit: "cover" },
  cardBody: { padding: "14px" },
  cardTitle: { fontSize: "0.95rem", fontWeight: "600", color: "#2d3748", marginBottom: "8px", lineHeight: "1.4" },
  cardMeta: { display: "flex", gap: "12px", fontSize: "0.8rem", color: "#718096" },
  badge: { backgroundColor: "#fed7d7", color: "#c53030", padding: "2px 8px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: "600" },

  /* detail */
  backBtn: { background: "none", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "8px 16px", cursor: "pointer", marginBottom: "24px", color: "#4a5568", fontSize: "0.9rem" },
  detailCard: { backgroundColor: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" },
  detailImg: { width: "100%", maxHeight: "360px", objectFit: "cover" },
  detailBody: { padding: "28px" },
  detailTitle: { fontSize: "1.8rem", fontWeight: "700", color: "#1a202c", marginBottom: "12px" },
  detailMeta: { display: "flex", gap: "20px", marginBottom: "24px", flexWrap: "wrap" },
  metaItem: { backgroundColor: "#f7fafc", borderRadius: "8px", padding: "10px 16px", textAlign: "center" },
  metaVal: { fontSize: "1.2rem", fontWeight: "700", color: "#e53e3e" },
  metaLabel: { fontSize: "0.75rem", color: "#718096" },
  h3: { fontSize: "1.1rem", fontWeight: "600", color: "#2d3748", marginBottom: "12px", borderBottom: "2px solid #fed7d7", paddingBottom: "6px" },
  ingredientList: { listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "8px" },
  ingredientItem: { backgroundColor: "#f7fafc", borderRadius: "6px", padding: "8px 12px", fontSize: "0.85rem", color: "#4a5568" },
  instructions: { lineHeight: "1.8", color: "#4a5568", fontSize: "0.95rem" },

  /* states */
  center: { textAlign: "center", padding: "60px 20px", color: "#718096" },
  spinner: { fontSize: "2rem", marginBottom: "12px" },
  error: { backgroundColor: "#fff5f5", border: "1px solid #fed7d7", borderRadius: "8px", padding: "16px", color: "#c53030", marginBottom: "20px" },

  /* popular */
  popularGrid: { display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" },
  popularBtn: { padding: "8px 16px", backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "20px", cursor: "pointer", fontSize: "0.85rem", color: "#4a5568" },
};

/* ─────────────────────────────────────────
   APP
───────────────────────────────────────── */
export default function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const popular = ["Pasta", "Pizza", "Salad", "Sushi", "Soup", "Chicken", "Tacos", "Burger"];

  // fetch recipe list
  const searchRecipes = async (q) => {
    const term = q || query;
    if (!term.trim()) return;
    setLoading(true);
    setError("");
    setSelected(null);
    setDetail(null);
    setSearched(true);
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${encodeURIComponent(term)}&number=12&addRecipeInformation=true`
      );
      if (!res.ok) throw new Error("API error – check your API key.");
      const data = await res.json();
      setRecipes(data.results || []);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  // fetch recipe detail — useEffect triggers when selected changes
  useEffect(() => {
    if (!selected) return;
    const fetchDetail = async () => {
      setDetailLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/${selected}/information?apiKey=${API_KEY}`
        );
        if (!res.ok) throw new Error("Could not load recipe details.");
        const data = await res.json();
        setDetail(data);
      } catch (e) {
        setError(e.message);
      }
      setDetailLoading(false);
    };
    fetchDetail();
  }, [selected]);

  const handleKey = (e) => { if (e.key === "Enter") searchRecipes(); };
  const goBack = () => { setSelected(null); setDetail(null); };

  // strip html tags from instructions
  const stripHtml = (html) => html ? html.replace(/<[^>]+>/g, "") : "";

  return (
    <div style={s.page}>
      {/* NAV */}
      <nav style={s.nav}>
        <p style={s.navTitle} onClick={goBack}>🍽️ Recipe Finder</p>
        <span style={s.navSub}>Powered by Spoonacular API</span>
      </nav>

      {/* HERO */}
      <div style={s.hero}>
        <h1 style={s.heroTitle}>Find Delicious Recipes</h1>
        <p style={s.heroSub}>Search from thousands of recipes using ingredients or dish names</p>
        <div style={s.searchRow}>
          <input
            style={s.searchInput}
            type="text"
            placeholder="Search recipes… e.g. pasta, tacos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
          />
          <button style={s.searchBtn} onClick={() => searchRecipes()}>Search</button>
        </div>
      </div>

      {/* CONTENT */}
      <div style={s.content}>

        {error && <div style={s.error}>⚠️ {error}</div>}

        {/* DETAIL VIEW */}
        {selected && (
          <div>
            <button style={s.backBtn} onClick={goBack}>← Back to results</button>
            {detailLoading ? (
              <div style={s.center}><div style={s.spinner}>⏳</div><p>Loading recipe…</p></div>
            ) : detail && (
              <div style={s.detailCard}>
                <img src={detail.image} alt={detail.title} style={s.detailImg} />
                <div style={s.detailBody}>
                  <h2 style={s.detailTitle}>{detail.title}</h2>
                  <div style={s.detailMeta}>
                    <div style={s.metaItem}><div style={s.metaVal}>{detail.readyInMinutes}</div><div style={s.metaLabel}>Minutes</div></div>
                    <div style={s.metaItem}><div style={s.metaVal}>{detail.servings}</div><div style={s.metaLabel}>Servings</div></div>
                    <div style={s.metaItem}><div style={s.metaVal}>{detail.healthScore}</div><div style={s.metaLabel}>Health Score</div></div>
                    {detail.vegetarian && <span style={{ ...s.badge, alignSelf: "center" }}>🥦 Vegetarian</span>}
                    {detail.glutenFree && <span style={{ ...s.badge, alignSelf: "center" }}>🌾 Gluten Free</span>}
                  </div>

                  <h3 style={s.h3}>🛒 Ingredients</h3>
                  <ul style={s.ingredientList}>
                    {detail.extendedIngredients?.map((ing) => (
                      <li key={ing.id} style={s.ingredientItem}>• {ing.original}</li>
                    ))}
                  </ul>

                  <h3 style={{ ...s.h3, marginTop: "24px" }}>📋 Instructions</h3>
                  {detail.analyzedInstructions?.[0]?.steps?.length > 0 ? (
                    <ol style={{ paddingLeft: "20px", color: "#4a5568", lineHeight: "2" }}>
                      {detail.analyzedInstructions[0].steps.map((step) => (
                        <li key={step.number} style={{ marginBottom: "8px" }}>{step.step}</li>
                      ))}
                    </ol>
                  ) : (
                    <p style={s.instructions}>{stripHtml(detail.instructions) || "No instructions available."}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* SEARCH RESULTS */}
        {!selected && (
          <>
            {/* Popular quick searches */}
            {!searched && (
              <div>
                <p style={s.sectionTitle}>🔥 Popular Searches</p>
                <div style={s.popularGrid}>
                  {popular.map((p) => (
                    <button key={p} style={s.popularBtn} onClick={() => { setQuery(p); searchRecipes(p); }}>{p}</button>
                  ))}
                </div>
              </div>
            )}

            {loading && (
              <div style={s.center}><div style={s.spinner}>🔍</div><p>Searching recipes…</p></div>
            )}

            {!loading && searched && recipes.length === 0 && (
              <div style={s.center}><div style={s.spinner}>😕</div><p>No recipes found. Try another search.</p></div>
            )}

            {!loading && recipes.length > 0 && (
              <>
                <p style={s.sectionTitle}>Found {recipes.length} recipes for "{query}"</p>
                <div style={s.grid}>
                  {recipes.map((r) => (
                    <div key={r.id} style={s.card} onClick={() => setSelected(r.id)}>
                      <img src={r.image} alt={r.title} style={s.cardImg} />
                      <div style={s.cardBody}>
                        <p style={s.cardTitle}>{r.title}</p>
                        <div style={s.cardMeta}>
                          {r.readyInMinutes && <span>⏱ {r.readyInMinutes} min</span>}
                          {r.servings && <span>👤 {r.servings} servings</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {!searched && !loading && (
              <div style={s.center}>
                <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🍳</div>
                <p style={{ fontSize: "1.1rem" }}>Search for a recipe above to get started!</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
