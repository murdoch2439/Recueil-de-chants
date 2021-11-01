import {createContext, useContext} from 'react'

export interface ModalContextType {
    isVisible: boolean
    setIsVisible: (state:boolean) => void
    isSearchVisible : boolean
    setIsSearchVisible : (state:boolean) => void
    fontSize:number
    setFontSize:(state:number) =>void
    
}

export const MyModalContext = createContext<ModalContextType>({
    isVisible:false,
    setIsVisible: () =>{},
    isSearchVisible:false,
    setIsSearchVisible:()=>{},
    fontSize:0,
    setFontSize:()=>{}
})

export const useModalContext = () => useContext(MyModalContext)