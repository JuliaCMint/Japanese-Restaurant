import styles from "./MealItemForm.module.css";
import Input from "./Input";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Quantity"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default MealItemForm;
