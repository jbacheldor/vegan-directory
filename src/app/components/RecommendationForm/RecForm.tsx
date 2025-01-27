'use client'
import { CreatorProps } from '@/app/types/searchResults';
import { useState } from 'react';
import Header from '../HeaderSection/Header';
import './RecForm.css';
import addRecommendationQuery from './updateDb';

const creatorInit: CreatorProps = {
    creatorname: '',
    website: '',
    handle: '',
    instagram: '',
    tiktok: '',
    fullyVegan: false,
    speciality: ''
}

const RecommendationsForm: React.FC = () => {

    const [formState, updateForm] = useState({creatorInit})

    // smtihn smthing on submit go to this form and all someone in

    const addCreator = () => {
        console.log(formState)
        // addRecommendationQuery({
        //     creatorname: 'name',
        //     website: 'google.com',
        //     handle: 'hehehhoohoh',
        //     instagram: 'test',
        //     tiktok: 'test2',
        //     fullyVegan: false,
        //     speciality: 'not eggs'
        // })
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
            <form id='form'>
                <label>Name
                <input name='creatorname' type='text' onChange={onUpdate}></input>
                </label>

                <label>Handle
                <input type='text' name='handle' onChange={onUpdate}></input>
                </label>

                <label>Website
                <input type='text' name='website' onChange={onUpdate}></input>
                </label>

                <label>Instagram
                <input type='text' name='instagram' onChange={onUpdate}></input>
                </label>

                <label>TikTok
                <input type='text' name='tiktok' onChange={onUpdate}></input>
                </label>

                <label>FullyVegan
                <input type='text' name='fullyvegan' onChange={onUpdate}></input>
                </label>

                <label>Speciality
                <input type='text' name='speciality' onChange={onUpdate}></input>
                </label>

                <button onClick={addCreator}>Submit</button>
            </form>
        </div>
    );
}

export default RecommendationsForm