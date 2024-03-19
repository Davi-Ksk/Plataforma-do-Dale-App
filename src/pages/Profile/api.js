export async function fetchStudentData(studentId) {
    try {
        const response = await fetch(`http://ec2-3-19-60-148.us-east-2.compute.amazonaws.com:8080/api${studentId}`);
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
  