import z from "zod"; 

export function validateUserRegister(data){
    const errors = []
    const user = z.object({ 
        name: z.string().min(3,"El nombre debe tener al menos 3 caracteres"),
        lastname: z.string().min(3,"El apellido debe tener al menos 3 caracteres"),
        email: z.email("Debe ser un mail válido"),
        password: z.string().min(8,"La contraseña debe tener al menos 8 caracteres")
    });

    const result = user.safeParse(data)

    if(!result.success){
        const errorList = result.error.issues        
        for(const error of errorList){            
            errors.push({
                name: error.path[0],
                message: error.message
            })
        }

        return {errors}
        
    }else{
        return result
    }
}

[
    {
    "code": "too_small", 
    "inclusive": true, 
    "message": "Too small: expected string to have >=3 characters", 
    "minimum": 3, 
    "origin": "string", 
    "path": ["name"]
}, 
    {
        "code": "too_small", 
        "inclusive": true, "message": "Too small: expected string to have >=3 characters", "minimum": 3, "origin": "string", "path": ["lastname"]}, {"code": "invalid_format", "format": "email", "message": "Invalid email address", "origin": "string", "path": ["email"], "pattern": "/^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$/"}, {"code": "too_small", "inclusive": true, "message": "Too small: expected string to have >=8 characters", "minimum": 8, "origin": "string", "path": ["password"]}]

