import React from 'react'

// material-ui
import { Button } from '@material-ui/core/'

// formik
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

// エラー表示用のスタイル
const myErrStyle = {
    color: '#ff0000'
}

// 初期値
const initValues = {
    myText: 'aaa',
    myEmail: 'bbb',
    myColor: ''
}

// バリデーションスキーマ
const validationSchema = Yup.object().shape({
    myText: Yup.string()
        .min(2, '短すぎます')
        .max(10, '長すぎます')
        .required('入力してください'),
    myEmail: Yup.string()
        .email('メールアドレスとして認識できません')
        .required('入力してください'),
    myColor: Yup.string()
        .required('選択してください'),
})

// サブミット
const onSubmit = (values) => {
    alert(
        "Input1: " + values.myText + "\n" +
        "Input2: " + values.myEmail + "\n" +
        "Input3: " + values.myColor
    )
}

const Sample = () => {
    return (
        <div>
            <Formik
                initialValues={initValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <div>Input1:&nbsp;<Field name="myText" />&nbsp;必須入力＆2～10文字以内</div>
                            {errors.myText && touched.myText ? (
                                <div style={myErrStyle}>{errors.myText}</div>
                            ) : null}
                            <div>Input2:&nbsp;<Field name="myEmail" />&nbsp;必須入力＆メールアドレス</div>
                            {errors.myEmail && touched.myEmail ? (
                                <div style={myErrStyle}>{errors.myEmail}</div>
                            ) : null}
                            <div>
                                Input3:&nbsp;
                                <Field as="select" name="myColor">
                                    <option value="">未選択</option>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                            </div>
                            {errors.myColor && touched.myColor ? (
                                <div style={myErrStyle}>{errors.myColor}</div>
                            ) : null}
                            <div>
                                <Button type="submit" variant="contained" color="primary">入力されている値を表示</Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Sample