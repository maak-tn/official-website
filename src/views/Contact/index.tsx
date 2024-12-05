import { Button, Divider, Input, Snippet, Textarea } from "@nextui-org/react";
import { Helmet } from "react-helmet-async";
import CenteredLayout from "../../components/ui/centredLayout";

export default function Contact() {
    return (
        <div className="px-4 mt-16 lg:px-0">
            <Helmet>
                <title>Get in touch</title>
            </Helmet>

            <CenteredLayout>
                <div className="flex flex-col items-center gap-4">
                    <span>E-mail us @</span>
                    <Snippet variant="bordered" symbol="">contact@maak-corp.tn</Snippet>
                </div>

                <Divider className="my-12" />

                <form
                    name="maak-clients-submissions"
                    method="POST"
                    className='lg:max-w-[500px] w-full mx-auto'
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="maak-clients-submissions" />
                    <Input
                        type="text"
                        label="Name"
                        placeholder="Jhon Doe"
                        description="How should I refer to you or your business?"
                        className="w-full"
                        name="client-name"
                    />

                    <Textarea
                        variant="faded"
                        label="Description"
                        placeholder="I have a business opportunity that I would like to discuss with you..."
                        description="Tell me how I can be of help to you."
                        className="w-full my-4"
                        name='client-message'
                    />
                    <Button className='w-full' type="submit" color="warning">Send</Button>
                </form >
            </CenteredLayout>
        </div>
    )
}