import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

export default function VideoPopup({ text, cls }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <a onClick={() => setOpen(true)} className={`popup-video ${cls}`} data-animation="fadeInRight" data-delay=".6s">
                {text}<i className="fas fa-play pulse" />
            </a>
            <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="bixR-KIJKYM"
                onClose={() => setOpen(false)}
            />
        </>
    );
}
