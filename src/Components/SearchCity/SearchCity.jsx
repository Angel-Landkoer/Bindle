import { useForm } from "../../utils/useForm";

export function SearchCity({ stylesSearch }) {
  const {
    discover: { input, placeHolder },
  } = stylesSearch;

  const { handleSubmitWord, handleChangeAll, state } = useForm();

  return (
    <section className="searchCity w-full lg:hidden">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmitWord}
      >
        <label>
          <input
            className={`${input}`}
            type="search"
            placeholder={`${placeHolder}`}
            onChange={handleChangeAll}
            value={state.word}
          />
        </label>
      </form>
    </section>
  );
}
