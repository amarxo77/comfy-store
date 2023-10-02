import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text = 'submit' }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      className='btn btn-primary btn-block'
      type='submit'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner'></span>
          sending...
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitBtn;
