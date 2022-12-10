import { useForm } from "../../utils/useForm";

export function ContainerSearchF() {
  const { handleSubmitEmail, handleChangeAll, state } = useForm();

  return (
    <>
      <section className="containerSearchF flex flex-col items-center pt-9 text-white lg:col-start-8 lg:col-span-5 lg:row-start-2 lg:row-span-2 lg:justify-self-end 2xl:justify-self-end">
        <h3 className="p-4 lg:hidden">Subscribe to our newsletter</h3>
        <form onSubmit={handleSubmitEmail} className="relative">
          <label>
            <input
              className="w-80 h-11 text-xs bg-colorBgInput rounded-md placeholder:text-white placeholder:ml-2 placeholder:px-4 lg:w-405 lg:h-14"
              type="email"
              placeholder="Enter your email address"
              onChange={handleChangeAll}
              value={state.email}
            />
          </label>
          <button className="absolute bottom-2 right-3 w-16 h-[1.73rem] py-1 px-3 text-xs rounded-sm bg-colorOptional lg:w-20 lg:h-9 lg:bottom-20% lg:right-4%">
            Send
          </button>
        </form>
      </section>
    </>
  );
}
