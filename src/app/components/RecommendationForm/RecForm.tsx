'use client'
import { CreatorProps } from '@/app/types/searchResults';
import { useState } from 'react';
import Header from '../HeaderSection/Header';
import './RecForm.css';

const initialProps: CreatorProps = {
        creatorname: '',
        speciality: '',
        handle: '',
        website: '',
        instagram: '',
        tiktok: ''
}

const RecommendationsForm: React.FC = () => {
    const [formState, updateForm] = useState<CreatorProps>(initialProps)  

    const addCreator = () => {
        fetch('/insertrecommendation', {
            method: "POST",
            body: JSON.stringify(formState)
        })  
        updateForm(initialProps)
    }

    const onUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateForm({
            ...formState,
            [e.target.name]: e.target.value
        }
        )
    }

    return (
        <div id='recommendationForm'>     
        <Header name="Recommend a Creator"/>  
            {/* <form id='form' onSubmit={addCreator}> */}
                <label>Name
                <input name='creatorname' type='text' value={formState.creatorname} onChange={onUpdate}></input>
                </label>

                <label>Handle
                <input type='text' name='handle' value={formState.handle}  onChange={onUpdate}></input>
                </label>

                <label>Website
                <input type='text' name='website' value={formState.website}  onChange={onUpdate}></input>
                </label>

                <label>Instagram
                <input type='text' name='instagram' value={formState.instagram}  onChange={onUpdate}></input>
                </label>

                <label>TikTok
                <input type='text' name='tiktok' value={formState.tiktok}  onChange={onUpdate}></input>
                </label>

                {/* <label>FullyVegan
                <input type='text' name='fullyvegan' onChange={onUpdate}></input>
                </label> */}

                <label>Speciality
                <input type='text' name='speciality' value={formState.speciality}  onChange={onUpdate}></input>
                </label>

                <button type='submit' onClick={addCreator} >Submit</button>
            {/* </form> */}
        </div>
    );
}

export default RecommendationsForm