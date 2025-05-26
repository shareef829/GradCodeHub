export default function MCQQuestion() {
  return (
    <div>
      <h4 className="font-semibold mb-2">Sample MCQ Question</h4>
      <p className="mb-2">What is the output of 2 + 2?</p>
      <ul className="space-y-1">
        <li><input type="radio" name="mcq" /> 3</li>
        <li><input type="radio" name="mcq" /> 4</li>
        <li><input type="radio" name="mcq" /> 5</li>
      </ul>
    </div>
  );
}
