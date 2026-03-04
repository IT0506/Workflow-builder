export const DatabaseNode = ({ id }) => (
  <BaseNode id={id} label="Database" handles={[{ type: 'source', id: 'query' }]}>
    <select>
      <option>Users_DB</option>
      <option>Orders_DB</option>
    </select>
    <button onClick={() => alert('Connected!')}>Test Connection</button>
  </BaseNode>
);