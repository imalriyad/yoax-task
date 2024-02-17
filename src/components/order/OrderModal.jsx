/* eslint-disable react/prop-types */
"use client";
import { Modal } from "keep-react";
import Orderform from "./Orderform";

const OrderModal = ({ onClickTwo, showModalX }) => {
  return (
    <div>
      {/* Modal */}
      <Modal size="md" show={showModalX} onClose={onClickTwo}>
        <Modal.Header >Create a order</Modal.Header>
        <Modal.Body >
          <div className="space-y-6">
            {/* integrating from to modal */}
            <Orderform></Orderform>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default OrderModal;
