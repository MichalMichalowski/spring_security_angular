package mm.app.auth.mappers;

import mm.app.auth.classes.SignUpDTO;
import mm.app.auth.classes.UserDTO;
import mm.app.auth.entities.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDTO convertToUserDTO (UserEntity user);

    @Mapping(target = "password", ignore = true)
    UserEntity convertSignUpToUser(SignUpDTO signUpData);
}
