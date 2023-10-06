import Swal from "sweetalert2";

export default function Alert() {
    Swal.fire({
        title: "Oops...",
        text: "Type the message first",
    });
}
