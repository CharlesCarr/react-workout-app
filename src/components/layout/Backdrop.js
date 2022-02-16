function Backdrop(props) {

//   closing modal for NewPlanModal.js
  const closeModal = () => {
    props.setWorkoutModalIsOpen(false);
  };

  return (
    <div className="backdrop" onClick={props.onClick} onClick={closeModal} />
  );
}
export default Backdrop;
