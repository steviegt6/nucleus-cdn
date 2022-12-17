import Anchor from "../Anchor/anchor";
import Children from "../Children/children";
import Divider from "../Divider/divider";
import GeneralText from "../GeneralText/generalText";
import SectionTitle from "../SectionTitle/sectionTitle";
import SubSection from "../SubSection/subSection";
import SubPage from "./subPage";
import * as discord from "../../../styles/discord";

export default function MITLicenseSubPage({ categoryId, category }: { categoryId: string; category: string }) {
    return (
        <SubPage categoryId={categoryId} category={category}>
            <SectionTitle title="MIT License" />
            <Children>
                <SubSection>
                    <GeneralText>
                        Copyright (c) 2022 nucleus Developers and Contributors
                        <br />
                        Copyright (c) 2022 GooseNest
                        <div className={`${discord.marginBottom20}`} />
                    </GeneralText>
                </SubSection>
                <Divider />
                <SubSection>
                    <GeneralText>
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,
                        publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        <br />
                        <br />
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        <br />
                        <br />
                        THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
                        ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                    </GeneralText>
                </SubSection>
            </Children>
        </SubPage>
    );
}
