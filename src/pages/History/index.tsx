import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Duração</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Explorer - Rocketseat</td>
              <td>50 minutos</td>
              <td>Há 1 dia</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>React ignite - Rocketseat</td>
              <td>50 minutos</td>
              <td>Há 2 dias</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Node - Rocketseat</td>
              <td>50 minutos</td>
              <td>Há 3 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Projeto - Beauty</td>
              <td>50 minutos</td>
              <td>Há 4 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Explorer - Rocketseat</td>
              <td>50 minutos</td>
              <td>Há 5 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
