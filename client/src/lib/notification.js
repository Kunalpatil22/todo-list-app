import { Notyf } from "notyf";
import "notyf/notyf.min.css"

const notification = new Notyf({
    duration: 5000,
    ripple: false,
    position: { x: 'right', y: 'bottom' }
});
export default notification;