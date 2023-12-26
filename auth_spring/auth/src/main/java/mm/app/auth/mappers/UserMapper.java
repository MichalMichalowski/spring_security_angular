package mm.app.auth.mappers;

import mm.app.auth.classes.UserDTO;
import mm.app.auth.entities.UserEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDTO convertToUserDTO (UserEntity user);
}
