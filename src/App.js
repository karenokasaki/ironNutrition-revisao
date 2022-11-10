import 'antd/dist/antd.css';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';

function App() {
  //useState é como o react quer que a gente crie nossas variáveis
  // const [variável, função que altera o valor da variável] = useState(valorInicial)
  //useState() é a descontrução de uma array
  const [allFoods, setAllFoods] = useState(foods);

  /* const [food, setFood] = useState({
    name: 'Orange',
    calories: 85,
    image: 'https://i.imgur.com/abKGOcv.jpg',
    servings: 1,
  }) */

  //return que fica na MESMA LINHA não precisa ()
  //No jsx PRECISA TER APENAS UM PAI!!!
  return (
    <div className="App">
      {/* JSX -> começa com HTML -> js -> html -> js  */}

      {/*  aqui eu estou renderizando apenas UM CARD
      <FoodBox
        food={food}
      />  */}

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* renderizando a lista de comidas */}
        {allFoods.map((food) => {
          return <FoodBox food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;
