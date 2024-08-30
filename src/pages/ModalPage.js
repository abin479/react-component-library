import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionnBar = (
        <div>
            <Button primary onClick={handleClose}>I Accept</Button>
        </div>
    );

    const modal = <Modal onClose={handleClose} actionBar={actionnBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est ac enim pellentesque, in tempus neque viverra. Proin imperdiet augue ac leo tempor, laoreet pulvinar nisl blandit. Pellentesque sollicitudin libero sed urna finibus volutpat. Curabitur blandit, magna tristique maximus aliquam, magna tellus venenatis lorem, ac accumsan turpis enim ut sapien. Maecenas sed vulputate odio. Nullam viverra sagittis euismod. Donec placerat feugiat libero quis convallis. Fusce ac vulputate massa. Morbi felis est, gravida eget lacus nec, semper efficitur lectus. Proin a varius nulla. Sed dictum enim in sem scelerisque vestibulum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est ac enim pellentesque, in tempus neque viverra. Proin imperdiet augue ac leo tempor, laoreet pulvinar nisl blandit. Pellentesque sollicitudin libero sed urna finibus volutpat. Curabitur blandit, magna tristique maximus aliquam, magna tellus venenatis lorem, ac accumsan turpis enim ut sapien. Maecenas sed vulputate odio. Nullam viverra sagittis euismod. Donec placerat feugiat libero quis convallis. Fusce ac vulputate massa. Morbi felis est, gravida eget lacus nec, semper efficitur lectus. Proin a varius nulla. Sed dictum enim in sem scelerisque vestibulum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est ac enim pellentesque, in tempus neque viverra. Proin imperdiet augue ac leo tempor, laoreet pulvinar nisl blandit. Pellentesque sollicitudin libero sed urna finibus volutpat. Curabitur blandit, magna tristique maximus aliquam, magna tellus venenatis lorem, ac accumsan turpis enim ut sapien. Maecenas sed vulputate odio. Nullam viverra sagittis euismod. Donec placerat feugiat libero quis convallis. Fusce ac vulputate massa. Morbi felis est, gravida eget lacus nec, semper efficitur lectus. Proin a varius nulla. Sed dictum enim in sem scelerisque vestibulum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est ac enim pellentesque, in tempus neque viverra. Proin imperdiet augue ac leo tempor, laoreet pulvinar nisl blandit. Pellentesque sollicitudin libero sed urna finibus volutpat. Curabitur blandit, magna tristique maximus aliquam, magna tellus venenatis lorem, ac accumsan turpis enim ut sapien. Maecenas sed vulputate odio. Nullam viverra sagittis euismod. Donec placerat feugiat libero quis convallis. Fusce ac vulputate massa. Morbi felis est, gravida eget lacus nec, semper efficitur lectus. Proin a varius nulla. Sed dictum enim in sem scelerisque vestibulum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est ac enim pellentesque, in tempus neque viverra. Proin imperdiet augue ac leo tempor, laoreet pulvinar nisl blandit. Pellentesque sollicitudin libero sed urna finibus volutpat. Curabitur blandit, magna tristique maximus aliquam, magna tellus venenatis lorem, ac accumsan turpis enim ut sapien. Maecenas sed vulputate odio. Nullam viverra sagittis euismod. Donec placerat feugiat libero quis convallis. Fusce ac vulputate massa. Morbi felis est, gravida eget lacus nec, semper efficitur lectus. Proin a varius nulla. Sed dictum enim in sem scelerisque vestibulum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est ac enim pellentesque, in tempus neque viverra. Proin imperdiet augue ac leo tempor, laoreet pulvinar nisl blandit. Pellentesque sollicitudin libero sed urna finibus volutpat. Curabitur blandit, magna tristique maximus aliquam, magna tellus venenatis lorem, ac accumsan turpis enim ut sapien. Maecenas sed vulputate odio. Nullam viverra sagittis euismod. Donec placerat feugiat libero quis convallis. Fusce ac vulputate massa. Morbi felis est, gravida eget lacus nec, semper efficitur lectus. Proin a varius nulla. Sed dictum enim in sem scelerisque vestibulum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est ac enim pellentesque, in tempus neque viverra. Proin imperdiet augue ac leo tempor, laoreet pulvinar nisl blandit. Pellentesque sollicitudin libero sed urna finibus volutpat. Curabitur blandit, magna tristique maximus aliquam, magna tellus venenatis lorem, ac accumsan turpis enim ut sapien. Maecenas sed vulputate odio. Nullam viverra sagittis euismod. Donec placerat feugiat libero quis convallis. Fusce ac vulputate massa. Morbi felis est, gravida eget lacus nec, semper efficitur lectus. Proin a varius nulla. Sed dictum enim in sem scelerisque vestibulum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est ac enim pellentesque, in tempus neque viverra. Proin imperdiet augue ac leo tempor, laoreet pulvinar nisl blandit. Pellentesque sollicitudin libero sed urna finibus volutpat. Curabitur blandit, magna tristique maximus aliquam, magna tellus venenatis lorem, ac accumsan turpis enim ut sapien. Maecenas sed vulputate odio. Nullam viverra sagittis euismod. Donec placerat feugiat libero quis convallis. Fusce ac vulputate massa. Morbi felis est, gravida eget lacus nec, semper efficitur lectus. Proin a varius nulla. Sed dictum enim in sem scelerisque vestibulum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est ac enim pellentesque, in tempus neque viverra. Proin imperdiet augue ac leo tempor, laoreet pulvinar nisl blandit. Pellentesque sollicitudin libero sed urna finibus volutpat. Curabitur blandit, magna tristique maximus aliquam, magna tellus venenatis lorem, ac accumsan turpis enim ut sapien. Maecenas sed vulputate odio. Nullam viverra sagittis euismod. Donec placerat feugiat libero quis convallis. Fusce ac vulputate massa. Morbi felis est, gravida eget lacus nec, semper efficitur lectus. Proin a varius nulla. Sed dictum enim in sem scelerisque vestibulum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit est ac enim pellentesque, in tempus neque viverra. Proin imperdiet augue ac leo tempor, laoreet pulvinar nisl blandit. Pellentesque sollicitudin libero sed urna finibus volutpat. Curabitur blandit, magna tristique maximus aliquam, magna tellus venenatis lorem, ac accumsan turpis enim ut sapien. Maecenas sed vulputate odio. Nullam viverra sagittis euismod. Donec placerat feugiat libero quis convallis. Fusce ac vulputate massa. Morbi felis est, gravida eget lacus nec, semper efficitur lectus. Proin a varius nulla. Sed dictum enim in sem scelerisque vestibulum.
            </p>
        </div>
    )
}

export default ModalPage;