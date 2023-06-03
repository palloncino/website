import React from 'react';
import styles from '../style/FirstPage.module.css';

function FirstPage() {
    return (
        <div className={styles.firstpage_background}>
            <div className={styles.firstpage_container}>
                <div className={styles.listhead}>
                    I should get a good CV (I have it) and look for:
                </div>
                <div className={styles.listitem}>
                    <span className={styles.boldtext}>Animal shelters or rescue organizations:</span> Many animal shelters and rescue organizations hire individuals who have a genuine passion for animals. These roles often involve caring for and providing basic medical attention to animals in need. Starting at an entry-level position in a local shelter can provide you with valuable experience and insight into animal care.
                </div>
                <div className={styles.listitem}>
                    <span className={styles.boldtext}>Wildlife rehabilitation centers:</span> Wildlife rehabilitation centers work to rescue, rehabilitate, and release injured or orphaned wild animals. These centers often offer volunteer opportunities or internships that can help you gain hands-on experience working with various species.
                </div>
                <div className={styles.listitem}>
                    <span className={styles.boldtext}>Zoos and aquariums:</span> Zoos and aquariums employ a wide range of professionals, including animal caretakers, educators, and curators. While some positions may require specialized degrees or experience, there are often entry-level roles available that focus on animal care and husbandry. Starting as a zookeeper assistant or animal keeper can be a good way to get your foot in the door.
                </div>
                <div className={styles.listitem}>
                    <span className={styles.boldtext}>Wildlife conservation organizations:</span> Conservation organizations, both local and international, work to protect and conserve wildlife and their habitats. These organizations often hire individuals for fieldwork, research, or community outreach. While specific positions may require advanced degrees, there could be entry-level opportunities that align with your interests.
                </div>
                <div className={styles.listitem}>
                    <span className={styles.boldtext}>Volunteer and internships:</span> Volunteering or interning with organizations that work with animals can provide valuable experience and help you network within the industry. Look for opportunities at animal sanctuaries, nature centers, research institutions, or even veterinary clinics. Animal shelters or rescue organizations
                </div>
            </div>
        </div>
    );
}

export default FirstPage;