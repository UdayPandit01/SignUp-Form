import { View, Text,StyleSheet,TextInput,Image, TouchableOpacity,Alert } from 'react-native'
import React, { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import Snackbar from "react-native-snackbar"


const Login = () => {
  
  //NAVIGATION STATE DECLARED 
  const navigator = useNavigation(); 

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [eyeImage, setEyeImage] = useState(`https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png`)
  const [acitve,setActive]=useState(0.5)


  //ACTIVE OPACITY VALIDATION  DECLARED 
  const opacity=()=>{
   
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
   ( pReg.test(pass)&& emailReg.test(email))?setActive(1):setActive(0.5);


  }

   
  //REFRENCE DECLARED 
  const passRef=useRef()

  // ONPRESS FUNCTIONS
  const onClick = () => {
    console.log('clicked');
    navigator.navigate('Signup');
  };

  // HIDE AND SHOW PASSWORD FUNCTIONS
  const toggle = () => {
    setSecureTextEntry(!secureTextEntry)
    setEyeImage(secureTextEntry ? `https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png` : `https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png`)
  }

  
  // INPUT VALIDATIONS
  const validate=()=>{

    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if(email == '' && pass == ''){
      Alert.alert("Form is not filled")
    }
    else if(!emailReg.test(email)){
      Alert.alert("Enter The Valid Email");
    }else if (!pReg.test(pass)) {
      Alert.alert('Please Enter valid Password');
    }else {
      // Alert.alert('Welcome to Dashboard');
      
    Snackbar.show({
      text: 'Wait for a while, Your"re getting logged in',
      duration: Snackbar.LENGTH_INDEFINITE,
      numberOfLines: 2,
      textColor: '#fff',
      backgroundColor: '#41B225',
      action: {
        text: 'OK',
        textColor: '#fff',
        onPress: () => {
           Snackbar.dismiss();
         } 

  }
});
      
    }

//     Snackbar.show({
//       text: 'you are logged in successfully',
//       duration: Snackbar.LENGTH_INDEFINITE,
//       numberOfLines: 2,
//       textColor: '#fff',
//       backgroundColor: '#41B225',
//       action: {
//         text: 'OK',
//         textColor: '#fff',
//         onPress: () => {
//            Snackbar.dismiss();
//          } 

//   }
// });

  }

  

  return (

    // DECLARED INPUTS
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME</Text>
      <Text style={styles.write}>'To proceed with an order, please log in or register an account '</Text>

      
       <View style={styles.icon}>
        {/* <Image   style={{height:130,width:130}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm2fmKVxObx6S1S87K3_FwX35IIwAPqgGs0A&usqp=CAU'}}/> */}
        <Image   style={{height:130,width:130}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU'}}/>

      </View>
        {/* <Image source={require('./assets/Icon.png')} /> */}
        {/* <Image source={require('../assets/Icon.png')} /> */}

      <View style={styles.email}>
        <Text  style={styles.emailtext}>Email</Text>
        <TextInput placeholder="Enter your email" cursorColor={'black'} returnKeyType={'next'} keyboardType="email-address" onSubmitEditing={()=>passRef.current.focus()} placeholderTextColor="white" style={styles.emailInput} blurOnSubmit={false}  onChangeText={(val)=>{setEmail(val)}}></TextInput>
      </View> 

      <View style={styles.pass}>
        <Text  style={styles.passtext}>Password</Text>
        <TextInput  secureTextEntry={secureTextEntry} placeholder="Enter your password" cursorColor={'black'} ref={passRef} placeholderTextColor="white"  style={styles.passInput}  returnKeyType={'done'} onChangeText={(val)=>{setPass(val);opacity()}}  blurOnSubmit={false}  ></TextInput>
        <TouchableOpacity onPress={toggle}>

        <Image style={styles.eye} source={{uri: eyeImage}} />
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.forgotPwdDiv}>
        <Text style={styles.forgotpwdText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btn,{opacity:acitve}]} onPress={validate} >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.account}>
        <Text style={styles.accountText}>Create New Account?</Text>
      </View>

      <TouchableOpacity style={styles.sign} onPress={onClick}>
        <Text style={styles.signText}>SignUp</Text>
      </TouchableOpacity>
      

    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#18191E',
        // backgroundColor:'#050E15',
        // backgroundColor:'grey',
        // flex:1, 
        height:'100%',
        width:'100%',
    },

    welcome:{
        color:'white',
        fontSize:50,
        marginTop:25,
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
        // backgroundColor:"#41B225",
        // backgroundColor:"#08C4AC",
        // margin:10,
        padding:5,
    },

    icon:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:50,
    },

    email: {
        flexDirection: 'row',
        marginTop: '20%',
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
        // fontFamily:'Roboto-BlackItalic',
        // backgroundColor: 'grey',
        fontSize: 18,
      },

      emailInput: {
        borderBottomColor: '#41B225', 
        borderBottomWidth: 1,
        width: '50%',
        marginLeft: '8.5%',
        color:"white",
        
      },

      pass:{
        flexDirection: 'row',
        marginTop: '5%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor:"green",s
      },

      passtext:{
        marginHorizontal: '9.5%',
        color:'white',
        // backgroundColor: 'grey',
        fontSize: 18,
      },

      passInput:{ 
        borderBottomColor: '#41B225',
        borderBottomWidth: 1,
        width: '50%',
        marginLeft: '1%',
        color:"white",
      },

      
      forgotPwdDiv: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: '3%',
      },
      
      forgotpwdText: {
        marginHorizontal: '8%',
        // color:"#41B225",
        color:"#F5DAA7",
        // backgroundColor: 'grey',
        fontSize: 14,
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

      account:{
        justifyContent:'flex-end',
        // alignItems:'center',
        marginTop:37,
      },

      accountText:{
        color:"white",
        fontSize:15,
        textAlign:"right",
        marginHorizontal: '6%',
      },


      sign:{
        justifyContent:'flex-end',
        // alignItems:'center',
        marginTop:13,
      },

      signText:{
        color:"#F5DAA7",
        fontSize:15,
        textAlign:"right",
        marginHorizontal: '6%',
      },
      eye: {
        height: 35,
        width: 35,
        marginHorizontal: -30,
      },
    
})