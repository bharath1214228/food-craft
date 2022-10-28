function marketingOptIn(event,form,succesCallback){event.preventDefault()
event.stopPropagation()
let data={email:form.ue.value}
if(form.firstname)data.first_name=form.firstname.value;if(form.lastname)data.last_name=form.lastname.value;if(form["__form_id"])data.collection="form_"+form["__form_id"].value;if(form["@add_to_lists"])data.add_to_lists=form["@add_to_lists"].value
fetch("https://nr-api.craftginclub.co.uk/public/marketing/opt-in",{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json",}}).then(function(response){}).catch(function(error){}).finally(function(){if(window.ometria){ometria.identify(data.email)}
localStorage.setItem("mailing_list",(new Date()).getTime())
if(succesCallback){succesCallback(event,form)}
else{let thanksEl=document.createElement("div")
thanksEl.className="marketing-optin-success"
thanksEl.innerText="Thank you for subscribing!"
form.after(thanksEl)
form.style.display="none"}})
return false}