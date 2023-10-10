import Alert from './Alert';

function App() {
  return (
    <div className="App">
      <h1>Alertas en React</h1>
      <Alert text="¡Esta es una alerta de éxito!" color="success" />
      <Alert text="¡Esta es una alerta de advertencia!" color="warning" />
      <Alert text="¡Esta es una alerta de error!" color="danger" className="custom-alert" />
    </div>
  );
}

export default App;







