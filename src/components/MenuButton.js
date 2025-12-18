function menuButton({ name }) {
  return (
    <button
      style={{
        width: '100%',
        padding: 10,
        marginBottom: 8,
        cursor: 'pointer'
      }}
    >
      {name}
    </button>
  );
}

export default menuButton;