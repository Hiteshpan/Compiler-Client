import React from 'react';
import "./pageStyles/grid.css"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';

const formSchema = z.object({
    userId: z.string(),
    password: z.string(),
});

export default function Login() {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userId: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function handleLogin(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className='__login grid-bg w-full h-[calc(100dvh-60px)] flex items-center justify-center'>
            <div className=' w-[24%] h-fit flex flex-col items-center justify-center gap-3 py-10 px-2 border-[1px] border-slate-800 rounded bg-black'>
                <h1 className='text-6xl font-mono'>Login</h1>
                <p className='text-base mt-2 font-mono w-[85%] text-center'>Welcome back fellow coder😁</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4 w-[80%]">
                        <FormField
                            control={form.control}
                            name="userId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className='w-full pr-12 py-5 text-left font-mono' placeholder="Username or Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input className='w-full pr-12 py-5 text-left font-mono' type='password' placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='w-full py-5 text-lg font-mono' type="submit">Login</Button>
                    </form>
                </Form>
                <small className="font-mono mt-2">Don't have an account? <Link className="hover:text-blue-500 hover:underline" to="/signup">Signup</Link></small>
            </div>
        </div>
    )
}
