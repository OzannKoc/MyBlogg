package com.MyBlog.Entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@Entity
@Table(name = "`user`")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id ;

    @NotNull
    @Size(min = 4,max = 255)
    private String username ;

    @NotNull
    @Size(min=4,max = 255)
    @Column(name = "display_name")
    private String displayName;

    @NotNull
    @Pattern(regexp = "^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$",message = "Geçerli bir email giriniz")
    private String email ;

    private String password ;
}
