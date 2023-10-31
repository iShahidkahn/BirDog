export default function Select(props) {
  return (
    <>
      <div className="w-56 h-20 flex-col justify-start items-start gap-4 flex mb-8">
        <div className="City self-stretch text-slate-400 text-xs uppercase">
          {props.label}
        </div>
        <select id="countries" className="select-btn">
          <option selected="">Choose an Option...</option>
          <option value="one">{props.option_one}</option>
          <option value="two">{props.option_two}</option>
          <option value="three">{props.option_three}</option>
          <option value="four">{props.option_four}</option>
        </select>
      </div>
    </>
  );
}
