import { View, Text,TextInput,StyleSheet,Pressable, Alert, TouchableOpacity, Image } from 'react-native'
import React, { useState,useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import Snackbar from "react-native-snackbar"

const Signup = () => {

    // NAVIGATION HOOK
  const navigator = useNavigation(); 

  // ALL DECLARED STATE HOOKS
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [cpass, setCpass] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [secureTextEntry2, setSecureTextEntry2] = useState(true)
  const [eyeImage, setEyeImage] = useState(`https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png`)
  const [eyeImage2, setEyeImage2] = useState(`https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png`)


  // DECLARED REGEX.
  const passwordReg= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   

    //FUNTION FOR THE SHOW AND HIDE PASSWORD
  const toggle = () => {
    setSecureTextEntry(!secureTextEntry)
    setEyeImage(secureTextEntry ? `https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png` : `https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png`)
  }
  
     
  const toggle1 = () => {
    setSecureTextEntry2(!secureTextEntry2)
    setEyeImage2(secureTextEntry2 ? `https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png` : `https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png`)
  }


  // ALL DECLARED REFRENCES
  const emailRef=useRef()
  const passRef=useRef()
  const cPassRef=useRef()

  // const validate=()=>{

    // const pReg= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    // const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  //   if(email == '' && pass == ''){
  //     Alert.alert("Form is not filled")
  //   }
  //   else if(!emailReg.test(email)){
  //     Alert.alert("Enter The Valid Email");
  //   }else if (!pReg.test(pass)) {
  //     Alert.alert('Please Enter valid Password');
  //   }else if (cpass!==pass) {
  //     Alert.alert('you have entered the wrong confirm password'); 
  //   }else {
  //     Alert.alert('Successfully Submitted');
  //   }

  // }

  
  // ACTIVE OPACITY VALIDATIONS
  const verifyUser = user.length > 0;
  const verifyEmail = emailReg.test(email);
  const verifyPassword = passwordReg.test(pass);
  const verifyCpassword = passwordReg.test(cpass);
  const verifyBothPass = (pass === cpass) ? 1 : 0

  const opacity= (verifyUser && verifyEmail && verifyPassword && verifyCpassword && verifyBothPass) ? styles.enable : styles.disable  ;


  // ONPRESS FUNCTION FOR LOGIN
  const onTap  = () => {
    console.log('clicked');
    Snackbar.show({
      text: 'Tap "OK" to get back to Login Screen',
      duration: Snackbar.LENGTH_INDEFINITE,
      numberOfLines: 2,
      textColor: '#fff',
      backgroundColor: '#41B225',
      action: {
        text: 'OK',
        textColor: '#fff',
        onPress: () => {
           Snackbar.dismiss();
           navigator.navigate('Login');
         } 

  }
});
    // navigator.navigate('Login');
  };

  return (
   
    // DECLARED INPUT FIELDS
    <View style={styles.container}>
       <Text style={styles.welcome}> SIGN UP HERE </Text>
      <Text style={styles.write}>' To create a new account, please enter your valid details '</Text> 
    

    <View style={styles.div}>

      <View  style={styles.field}>
        <Text  style={styles.fieldtext}>Username</Text>
        <TextInput placeholder="Enter Username" cursorColor={'black'} returnKeyType={"next"} blurOnSubmit={false} onSubmitEditing={()=>emailRef.current.focus()} placeholderTextColor="white" style={styles.fieldInput} onChangeText={(val)=>{setUser(val)}}></TextInput>
      </View>  

      <View  style={styles.email}>
        <Text  style={styles.emailtext}>Email</Text>
        <TextInput placeholder="Enter your email" cursorColor={'black'} returnKeyType={"next"} blurOnSubmit={false}  ref={emailRef}  keyboardType="email-address"  placeholderTextColor="white" style={styles.emailInput} onSubmitEditing={()=>passRef.current.focus()}  onChangeText={(val)=>{setEmail(val)}} ></TextInput>
      </View>   

      <View  style={styles.field}>
        <Text  style={styles.fieldtext}>Password</Text>
        <TextInput  secureTextEntry={secureTextEntry}placeholder="Enter password" onPress={toggle} cursorColor={'black'} returnKeyType={"next"} blurOnSubmit={false}  ref={passRef}   placeholderTextColor="white" style={styles.fieldInput} onSubmitEditing={()=>cPassRef.current.focus()} onChangeText={(val)=>{setPass(val)}}></TextInput>

        <TouchableOpacity onPress={toggle}>
          <Image style={styles.eye} source={{uri: eyeImage}} />
        </TouchableOpacity>
      </View> 

      <View  style={styles.Cpass}>
        <Text  style={styles.Cpasstext}>Re-Password</Text>
        <TextInput secureTextEntry={secureTextEntry2} onPress={toggle1}placeholder="Enter password again"  returnKeyType={'done'} cursorColor={'black'} placeholderTextColor="white" style={styles.CpassInput}  onChangeText={(val)=>{setCpass(val)}} ref={cPassRef}></TextInput>

        <TouchableOpacity onPress={toggle1}>
          <Image style={styles.eye} source={{uri: eyeImage2}} />
        </TouchableOpacity>
      </View>  

    </View>

    <TouchableOpacity style={styles.login} onPress={onTap}>
        <Text style={styles.loginText}>Log In</Text>
    </TouchableOpacity>
  
    <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btn, opacity]}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
    </View>
      
    </View>

  )
}

export default Signup;

const styles = StyleSheet.create({

  container:{
    backgroundColor:'#18191E',
    // backgroundColor:'grey',
    // flex:1, 
    height:'100%',
    width:'100%',
},

welcome:{
  color:'white',
  fontSize:50,
  marginTop:50,
  padding:20,
  textAlign:"center"
  // alignItems:"center",
  // justifyContent: 'center',
},

write:{
  color:'black',  
  fontSize:12,
  textAlign:'center',
  borderWidth:1,
  borderColor:"#41B225",
  borderRadius:10,
  width:"90%",
  marginHorizontal:25,
  marginVertical:10,
  backgroundColor:"#41B225",
  // margin:10,
  padding:5,
  marginTop:25,
},

div:{
  marginTop:70,

},

email: {
    flexDirection: 'row',
    marginTop: '7%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor:"green",
    // borderBottomColor: 'green',
    // backgroundColor: 'red',
    // marginHorizontal: '2%',
  },
  
  emailtext: {
    marginHorizontal: '10%',
    color:'white',
    // backgroundColor: 'grey',
    fontSize: 16,
  },

  emailInput: {
    borderBottomColor: '#41B225', 
    borderBottomWidth: 1,
    width: '50%',
    marginLeft: '8.5%',
    color:"white",
    
  },

  // userfield:{
  //   marginTop:10,

  // },

  field:{
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor:"green",s
  },

  fieldtext:{
    marginHorizontal: '9.5%',
    color:'white',
    // backgroundColor: 'grey',
    fontSize: 16,
  },

  fieldInput:{ 
    borderBottomColor: '#41B225',
    borderBottomWidth: 1,
    width: '50%',
    marginLeft: '1%',
    color:"white",
  },

  Cpass:{
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginRight:2,
    // backgroundColor:"green",s
  },

  Cpasstext:{
    marginHorizontal: '8%',
    color:'white',
    // backgroundColor: 'grey',
    fontSize: 16,
    marginLeft:25,
  },

  CpassInput:{ 
    borderBottomColor: '#41B225',
    borderBottomWidth: 1,
    width: '50%',
    marginLeft: '1%',
    color:"white",
  },

  
  login: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: '5%',
  },
  
  loginText: {
    marginHorizontal: '9%',
    // color:"#41B225",
    color:"#F5DAA7",
    // backgroundColor: 'grey',
    fontSize: 18,
  },


  
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  
  btn: {
    borderColor: '#41B225',
    // borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    padding: 8,
    backgroundColor: '#41B225',
    borderRadius: 10,
    textAlign: 'center',
  },

  btnText: {
    color: 'white',
    fontSize: 18,
    // fontWeight: 700,
  },

  enable: {
    opacity: 1,
  }, 
  disable: {
    opacity: 0.5,
  },

  eye: {
    height: 35,
    width: 35,
    marginHorizontal: -30,
  },


})