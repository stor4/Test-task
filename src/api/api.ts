export const fetchProjects = async (page:number, size:number) => {
    const API_URL = "https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects"
    const ACCESS_KEY = "A7gjfjj0WdBynt8d"
    const SECRET_KEY = "tGH5UlZcgNtAPrfq9MnmMhWji9j5vYXn"
  
    try {
      const response = await fetch(
        `${API_URL}?accessKey=${ACCESS_KEY}&secretKey=${SECRET_KEY}&isPagination=true&size=${size}&page=${page}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
  
      const responseData = await response.json()
  
      if (!response.ok) throw new Error(`Loading error: ${response.statusText}`)
  
      return responseData
    } catch (error) {
      console.error("API error:", error)
      return { projects: [], total: 0 }
    }
  };
  