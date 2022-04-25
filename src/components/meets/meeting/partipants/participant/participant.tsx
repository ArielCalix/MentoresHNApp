import React from "react";
import Card from "../../../card/card";
import { faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../stylesParticipants.module.scss";

export const Participant = (props) => {
    const {
        curentIndex,
        currentParticipant,
        hideVideo,
        videoRef,
        showAvatar,
        currentUser,
    } = props;
    // console.log(showAvatar, hideVideo)
    if (!currentParticipant) return <></>;
    return (
        <div className={`${styles.participant} ${hideVideo ? styles.hide : ""}`}>
            <Card>
                <video
                    ref={videoRef}
                    className={styles.video}
                    id={`participantVideo${curentIndex}`}
                    autoPlay
                    playsInline
                />
                {!currentParticipant.audio && (
                    <FontAwesomeIcon
                        className={styles.muted}
                        icon={faMicrophoneSlash}
                        title="Muted"
                    />
                )}
                {showAvatar && (
                    <div
                        style={{ background: currentParticipant.avatarColor }}
                        className={styles.avatar}
                    >
                        {currentParticipant.name[0]}
                    </div>
                )}
                <div className={styles.name}>
                    {currentParticipant.name}
                    {currentUser ? "(You)" : ""}
                </div>
            </Card>
        </div>
    );
};
