export const JoinNode = ({ id }) => (
  <BaseNode 
    id={id} 
    label="Joiner" 
    handles={[
      { type: 'target', id: 'a', style: { top: '30%' } },
      { type: 'target', id: 'b', style: { top: '70%' } },
      { type: 'source', id: 'out' }
    ]}
  >
    <p style={{ fontSize: '10px' }}>Combines A + B strings</p>
  </BaseNode>
);