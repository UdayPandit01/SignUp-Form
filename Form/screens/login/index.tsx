import { View, Text,StyleSheet,TextInput,Pressable,Image, TouchableOpacity,Alert } from 'react-native'
import React, { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigator = useNavigation(); 

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [eyeImage, setEyeImage] = useState(`https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png`)
   

  const passRef=useRef()

  const onClick = () => {
    console.log('clicked');
    navigator.navigate('Signup');
  };

  const toggle = () => {
    setSecureTextEntry(!secureTextEntry)
    setEyeImage(secureTextEntry ? `https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png` : `https://static-00.iconduck.com/assets.00/eye-password-hide-icon-512x512-iv45hct9.png`)
  }
  
  const validate=()=>{

    const pReg= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(email == '' && pass == ''){
      Alert.alert("Form is not filled")
    }
    else if(!emailReg.test(email)){
      Alert.alert("Enter The Valid Email");
    }else if (!pReg.test(pass)) {
      Alert.alert('Please Enter valid Password');
    }else if (cpass==pass) {
      Alert.alert('you have entered the wrong confirm password'); 
    }else {
      Alert.alert('Successfully Submitted');
    }

  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.hey}>WELCOME</Text>
      <Text style={styles.write}>'To proceed with an order, please log in or register an account '</Text>

      <View style={styles.icon}>
        <Image   style={{height:130,width:130}} source={{uri:'data:image/png;base64,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'}}/>
      </View>
        {/* <Image source={require('./assets/Icon.png')} /> */}
        {/* <Image source={require('../assets/Icon.png')} /> */}
      

      <View style={styles.email}>
        <Text  style={styles.emailtext}>Email</Text>
        <TextInput placeholder="Enter your email" cursorColor={'black'} returnKeyType={'next'} keyboardType="email-address" onSubmitEditing={()=>passRef.current.focus()} placeholderTextColor="white" style={styles.emailInput} blurOnSubmit={false}  onChangeText={(val)=>{setEmail(val)}}></TextInput>
      </View> 

      <View style={styles.pass}>
        <Text  style={styles.passtext}>Password</Text>
        <TextInput  secureTextEntry={secureTextEntry} placeholder="Enter your password" cursorColor={'black'} ref={passRef} placeholderTextColor="white"  style={styles.passInput}  returnKeyType={'done'} onChangeText={(val)=>{setPass(val)}} blurOnSubmit={false}  ></TextInput>
        <TouchableOpacity onPress={toggle}>

        <Image style={styles.eye} source={{uri: eyeImage}} />
        </TouchableOpacity>
      </View>

      
      <Pressable style={styles.forgotPwdDiv}>
        <Text style={styles.forgotpwdText}>Forgot Password?</Text>
      </Pressable>

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={validate} >
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.account}>
        <Text style={styles.accountText}>Create New Account?</Text>
      </View>

      <Pressable style={styles.sign} onPress={onClick}>
        <Text style={styles.signText}>SignUp</Text>
      </Pressable>
      

    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#18191E',
        // backgroundColor:'grey',
        // flex:1, 
        height:'100%',
        width:'100%',
    },

    hey:{
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
        marginTop: '18%',
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