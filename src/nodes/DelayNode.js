export const DelayNode = ({ id }) => (
  <BaseNode id={id} label="Timer/Delay" handles={[{ type: 'target', id: 'in' }, { type: 'source', id: 'out' }]}>
    <label style={{ fontSize: '12px' }}>
      Seconds: <input type="number" defaultValue={5} style={{ width: '40px' }} />
    </label>
  </BaseNode>
);