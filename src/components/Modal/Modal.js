import * as S from "./Modal.style";
export const Modal = ({ open, close, callback }) =>
  open ? (
    <S.Overlay>
      <S.Modal>
        Deseja mesmo excluir esse item?
        <button
          onClick={() => {
            callback();
            close();
          }}
        >
          Sim
        </button>
        <button onClick={close}>Não</button>
      </S.Modal>
    </S.Overlay>
  ) : null;

export default Modal;
