import { Card } from "../../common/Card";
import { LayoutLabel } from "../../layout/LayoutLabel";
import { LayoutButton } from "../../layout/LayoutButton";
import { useCalculator } from "../../hooks/useCalculator";
import { CalculatorDetails } from "./CalculatorDetails";

export const CalculadorIBMApp = () => {
  const {inputs,handleInput,deleteInputs,calcularIMC} = useCalculator()

  return (
    <Card>
      <div>
        <LayoutLabel
          nameLabel="Peso (Kg)"
          name="peso"
          value={inputs.peso}
          onChange={handleInput}
        />
        <LayoutLabel
          nameLabel="Estatura (cm)"
          name="estatura"
          value={inputs.estatura}
          onChange={handleInput}
        />
        <div>
          <LayoutButton onClick={calcularIMC} title="Calcular" />
          <LayoutButton onClick={deleteInputs} title="Borrar" />
        </div>
      </div>
      <CalculatorDetails {...inputs} />
    </Card>
  );
};
