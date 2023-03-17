import { View, Text,StyleSheet,TextInput,Pressable } from 'react-native'
import React from 'react'

const login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hey}>WELCOME</Text>
      <Text style={styles.write}>'To proceed with an order, please log in or register an account '</Text>

      <View style={styles.email}>
        <Text  style={styles.emailtext}>Email</Text>
        <TextInput placeholder="Enter your email" cursorColor={'black'} placeholderTextColor="white" style={styles.emailInput}></TextInput>
      </View> 

      <View style={styles.pass}>
        <Text  style={styles.passtext}>Password</Text>
        <TextInput placeholder="Enter your passwprd" cursorColor={'black'}  placeholderTextColor="white"  style={styles.passInput} ></TextInput>
      </View>

      
      <Pressable style={styles.forgotPwdDiv}>
        <Text style={styles.forgotpwdText}>Forgot Password?</Text>
      </Pressable>

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} >
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </View>

      <Pressable style={styles.sign}>
        <Text style={styles.signText}>SignUp</Text>
      </Pressable>
      

    </View>
  );
}

export default login;

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
        marginTop:40,
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
        padding:12,
    },

    email: {
        flexDirection: 'row',
        marginTop: '55%',
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

      // signText:{
      //   color:"white",
      // },

    
})