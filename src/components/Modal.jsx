"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";

function Modals({ correct, optionSelected }) {
  const [openModal, setOpenModal] = useState(false);
  console.log("correct", correct);

  return (
    <>
      <button
        className="text-red-500 animate-pulse underline text-lg mt-4"
        onClick={(e) => {
          e.preventDefault();
          setOpenModal(true);
        }}
      >
        Need to know more
      </button>
      <Modal
        className="w-full flex justify-center px-32 bg-black bg-opacity-35"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>{correct.question}</Modal.Header>
        <Modal.Body className="">
          <div className="space-y-6 text-black">
            <p className="text-base leading-relaxed ">
              {/*    if correct.correct is true then type that option selected is connected else option selected is wrong*/}
              {correct.correct
                ? `"${optionSelected}" is right answer`
                : `"${optionSelected}" is wrong answer and here is why : `}
            </p>
            <p className="text-base leading-relaxed ">
              <p className={"underline underline-offset-2"}>Explanation</p>
              {correct?.explanation}
            </p>
            {correct.code_snippet && (
              <div className="">
                <p className={"underline underline-offset-2"}>Code Snippet</p>
                <p className="bg-black px-3 py-2 text-base leading-relaxed text-yellow-500">
                  {correct?.code_snippet}
                </p>
              </div>
            )}
            <p className="text-base leading-relaxed ">
              <p className={"underline underline-offset-2"}>Feedback</p>
              {correct.feedback}
            </p>
            <p className="text-base leading-relaxed ">
              <a
                href={correct.resource}
                target={"_blank"}
                className={"underline underline-offset-2"}
              >
                Additional Resource
              </a>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/*<Button onClick={() => setOpenModal(false)}>I accept</Button>*/}
          <Button color="gray" onClick={() => setOpenModal(false)}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
