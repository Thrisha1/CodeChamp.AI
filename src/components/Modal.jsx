"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";

function Modals({ correct, optionSelected }) {
  const [openModal, setOpenModal] = useState(false);

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
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {/*    if correct.correct is true then type that option selected is connected else option selected is wrong*/}
              {correct.correct
                ? `"${optionSelected}" is right answer`
                : `"${optionSelected}" is wrong answer and here is why : `}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <p className={"underline underline-offset-2"}>Explanation</p>
              {correct?.explanation}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              <p className={"underline underline-offset-2"}>Feedback</p>
              {correct.feedback}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
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
