"use client";

import { useState } from "react";
import type { QuizItem } from "@/data/modules";

export function Quiz({ items }: { items: QuizItem[] }) {
  const [picked, setPicked] = useState<(number | null)[]>(() => items.map(() => null));
  const answered = picked.filter((p) => p !== null).length;
  const correct = picked.filter((p, i) => p === items[i].answer).length;

  return (
    <div>
      <ol className="space-y-8">
        {items.map((item, qi) => {
          const choice = picked[qi];
          const done = choice !== null;
          return (
            <li key={qi}>
              <fieldset>
                <legend className="font-bold">
                  {qi + 1}. {item.q}
                </legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {item.options.map((opt, oi) => {
                    const isAnswer = oi === item.answer;
                    const isChoice = oi === choice;
                    let style = "bg-paper hover:bg-warm";
                    if (done && isAnswer) style = "bg-leaf";
                    else if (done && isChoice) style = "bg-noggle text-paper";
                    else if (done) style = "bg-paper opacity-60";
                    return (
                      <button
                        key={oi}
                        type="button"
                        disabled={done}
                        onClick={() => setPicked((p) => p.map((v, i) => (i === qi ? oi : v)))}
                        className={`rounded-md border-[3px] border-ink px-4 py-2.5 text-left ${style}`}
                      >
                        {opt}
                        {done && isAnswer && <span className="sr-only"> (jawaban benar)</span>}
                        {done && isChoice && !isAnswer && <span className="sr-only"> (pilihanmu, kurang tepat)</span>}
                      </button>
                    );
                  })}
                </div>
                {done && (
                  <p className="mt-3 rounded-md bg-cool px-4 py-3" role="status">
                    <strong>{choice === item.answer ? "Benar." : "Belum tepat."}</strong> {item.explain}
                  </p>
                )}
              </fieldset>
            </li>
          );
        })}
      </ol>

      {answered === items.length && (
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-md border-[3px] border-ink bg-sun px-5 py-4">
          <p className="font-display text-3xl">
            Skor kamu {correct}/{items.length}
            {correct === items.length ? " ⌐◨-◨" : ""}
          </p>
          <button type="button" className="btn bg-paper" onClick={() => setPicked(items.map(() => null))}>
            Ulangi kuis
          </button>
        </div>
      )}
    </div>
  );
}
