export async function fetchStudentData(studentId) {
    try {
        const response = await fetch(`https://api.plataformadodale.site/api/students/${studentId}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar dados do aluno');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro:', error);
        throw error;
    }
}
  