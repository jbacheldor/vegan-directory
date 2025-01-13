import Header from '../HeaderSection/Header';
import './RecForm.css';

const RecommendationsForm: React.FC = () => {

    return (
        <div id='recommendationForm'>     
        <Header name="Recommend a Creator"/>  
            <form id='form'>
                <label>Name</label>
                <input type='text'></input>

                <label>Handle</label>
                <input type='text'></input>

                <label>Instagram</label>
                <input type='text'></input>

                <label>Website</label>
                <input type='text'></input>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default RecommendationsForm