export async function GET(request) {
  return Response.json({
    message: "Teste de Variáveis de Ambiente",
    GEMINI_API_KEY: {
      exists: !!process.env.GEMINI_API_KEY,
      length: process.env.GEMINI_API_KEY?.length || 0
    },
    OPENROUTER_API_KEY: {
      exists: !!process.env.OPENROUTER_API_KEY,
      length: process.env.OPENROUTER_API_KEY?.length || 0
    },
    all_env_keys: Object.keys(process.env).filter(k => k.includes("API_KEY") || k.includes("GEMINI") || k.includes("OPENROUTER"))
  });
}