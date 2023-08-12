import { Stack, Button, CircularProgress, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import TextFormField from "../../reusable/TextFormField";
import { useMemo, useState } from "react";
import { RegisterProps, WinnerProps } from "../../../services/interfaces/RegisterService";
import * as yup from 'yup'
import { createWinner } from "../../../services/Register.Service";
import { RulesDialog } from "../../chunks/RulesDialog";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterForm: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const initialValues: RegisterProps = useMemo(() => ({ nome: "", email: "", telefone: "", perfil: "" }), [])
    const [details, setDetails] = useState<WinnerProps | null>(null);

    const validationSchema = yup.object({
        nome: yup.string().required('campo obrigatorio'),
        email: yup.string().required('campo obrigatorio'),
        telefone: yup.string().required('campo obrigatorio'),
        perfil: yup.string().required('campo obrigatorio'),
    })

    const notifyError = () => toast.error('Não foi possível realizar essa operação!', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const onSubmit = async (payload: RegisterProps) => {

        try {
            console.log(">>>>[ENVIANDO REQ]<<<<");
            const response = await createWinner(payload);

            console.log(response);
            setIsOpen(true);

            setDetails(response);
            console.log(">>>>[RECEBIDO RES]<<<<");
        } catch (error: any) {
            notifyError();
        }
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting, isValid, dirty }) => (
                <Form>
                    <ToastContainer />

                    <Stack gap={3}>
                        <Stack alignItems={"center"}>
                            <Typography
                                mb={3} variant="h1" color={'secondary'} >
                                Sorteio Bicicleta Flipper
                            </Typography>
                        </Stack>

                        <Field
                            component={TextFormField}
                            size="large"
                            required
                            name="nome"
                            label="Nome"
                            top="32"
                        />
                        <Field
                            component={TextFormField}
                            size="large"
                            required
                            type="email"
                            name="email"
                            label="E-mail"
                            top="32"
                        />
                        <Field
                            component={TextFormField}
                            size="large"
                            required
                            type="tel"
                            name="telefone"
                            label="Telefone"
                            top="32"
                        />

                        <Field
                            component={TextFormField}
                            size="large"
                            required
                            name="perfil"
                            label="Perfil do Instagram"
                            top="32"
                        />

                        <Button
                            disabled={isSubmitting || !isValid || !dirty}
                            variant="contained"
                            size="large"
                            sx={{ mt: 1 }}
                            color="primary"
                            type="submit"
                            endIcon={isSubmitting ? <CircularProgress size={16} /> : undefined}
                            fullWidth >

                            {isSubmitting ? 'Enviando Cadastro... ' : 'Participar do Sorteio'}

                        </Button>
                        {
                            isOpen ? <RulesDialog open={isOpen} onClose={() => setIsOpen(false)} data={details} /> : <></>
                        }

                    </Stack>
                </Form>
            )}

        </Formik>
    );
}