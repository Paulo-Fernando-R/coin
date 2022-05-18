import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent:{
        width:'95%',
        height:'auto',
        backgroundColor:'#000000',
        marginLeft:'3%',
        marginBottom:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        padding:10
    },

    logoBitcoin:{
        width:40,
        height:40,
        marginLeft:2
    },

    contextLeft:{
        width:'36%',
        alignItems:'flex-start'
    },

    dayCotation:{
        fontSize:16,
        paddingLeft:2,
        color:'#ffffff',
        fontWeight:'bold'
    },

    boxLogo:{
        flexDirection:'row',
        alignItems:'center'
    },

    contextRight:{
        width:'60%',
        alignItems:'flex-end',
    },

    price:{
        fontSize:18,
        color:'#ffffff',
        fontWeight:'bold'
    }

})

export default styles