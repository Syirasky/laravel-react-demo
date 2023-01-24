import ReactDOM from "react-dom";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
function AssignCards() {
    
  const [card , setCard] = useState({player_count: 0, remarks: ''})
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    function changeCardInfo(e){
      setCard({...card,[e.target.name]:e.target.value});
    }
    function onSubmit(e){
      axios.post('/api/cards', card)
      .then(response => {
        console.log("response")
        console.log(response)
        // redirect to the homepage
        navigate('/', { replace: true });
      })
      .catch(error => {
        console.log("error")
        console.log(error)
        alert("Error processing the cards assignment")
      })
    }
      
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header'>New cards assignment</div>
              <div className='card-body'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  
                  <div className='form-control'>
                    <label>
                      Player Count: 
                      <input
                        id='player_count'
                        type='number'
                        name='player_count' {...register("player_count",{
                          required: true,
                          min:{
                            value:1,
                            message:"Minimum player count is at least 0"
                          }
                        })}
                        value={card.player_count}
                        onChange={changeCardInfo}
                      />
                      {errors.player_count && <p className="errorMsg">{errors.player_count.message}</p>}
                    </label>
                  </div>
                  <div className='form-control'>
                    <label>
                      Cards remarks: 
                      <textarea
                        id='remarks'
                        name='remarks' {...register("remarks")}
                        rows='10'
                        value={card.remarks}
                        onChange={changeCardInfo}
                      />
                    </label>
                    
                  </div>
                  <div className='form-control'>
                    <button className='btn btn-primary'>Create</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
  }

  export default AssignCards