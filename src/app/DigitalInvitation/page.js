'use client'
import styles from './page.module.scss'
import DetailEvent from "@/components/DigitalInvitation/DetailEvent"
import Introduction from "@/components/DigitalInvitation/Introduction"
import MapAddress from "@/components/DigitalInvitation/MapAddress"
import PhotoGallery from "@/components/DigitalInvitation/PhotoGallery"
import PresentForm from "@/components/DigitalInvitation/PresentForm"
import Testimony from "@/components/DigitalInvitation/Testimony"

const DigitalInvitationPage = () => {

    return <div className={styles.main}>
        <Introduction/>
        <PhotoGallery/>
        <DetailEvent/>
        <MapAddress/>
        <PresentForm/>
        <Testimony/>
    </div>
}

export default DigitalInvitationPage