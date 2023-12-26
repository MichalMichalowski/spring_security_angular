package mm.app.auth.services;

import lombok.RequiredArgsConstructor;
import mm.app.auth.classes.UserCredentialsDTO;
import mm.app.auth.classes.UserDTO;
import mm.app.auth.entities.UserEntity;
import mm.app.auth.exceptions.UserValidationException;
import mm.app.auth.mappers.UserMapper;
import mm.app.auth.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserDTO login (UserCredentialsDTO credentials) {
        UserEntity user = userRepository.findUserByLogin(credentials.login())
                .orElseThrow( () -> new UserValidationException("User not found", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentials.password()), user.getPassword())) {
            return userMapper.convertToUserDTO(user);
        } else {
            throw new UserValidationException("Password incorrect", HttpStatus.BAD_REQUEST);
        }
    }
}
