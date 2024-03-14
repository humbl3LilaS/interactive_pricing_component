import Header from "@/components/custom/Header.tsx";
import RangeSelector from "@/components/custom/RangeSelector.tsx";
import Separator from "@/components/custom/Separator.tsx";
import Submit from "@/components/Submit.tsx";
import BackgroundWrapper from "@/components/custom/BackgroundWrapper.tsx";


function App() {


    return (

        <BackgroundWrapper>
            <Header/>
            <RangeSelector/>
            <Separator/>
            <Submit/>
        </BackgroundWrapper>

    );
}

export default App;
