// Contacto
import React, { useState } from 'react';
import supabase from '../supabaseClient';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('contacts')
            .insert([{ name, email, message }]);

        if (error) {
            console.error('Error:', error);
        } else {
            alert('¡Gracias por contactarme!');
        }
    };

    return (
        <section id="contact">
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Mensaje</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                <button type="submit">
                    <span class="transition"></span>
                    <span class="gradient"></span>
                    <span class="label">Enviar</span>
                </button>
            </form>
        </section>
    );
};

export default Contact;
