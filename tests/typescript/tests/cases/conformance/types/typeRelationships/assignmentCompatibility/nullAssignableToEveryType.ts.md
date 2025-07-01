__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              },
              "start": 17,
              "end": 25
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 26
          }
        ],
        "start": 8,
        "end": 28
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ac",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "typeArguments": null,
                "start": 37,
                "end": 38
              },
              "start": 35,
              "end": 38
            },
            "start": 33,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 33,
          "end": 38
        }
      ],
      "declare": false,
      "start": 29,
      "end": 39
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              },
              "start": 61,
              "end": 69
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 70
          }
        ],
        "start": 52,
        "end": 72
      },
      "declare": false,
      "start": 40,
      "end": 72
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ai",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 82
                },
                "typeArguments": null,
                "start": 81,
                "end": 82
              },
              "start": 79,
              "end": 82
            },
            "start": 77,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 77,
          "end": 82
        }
      ],
      "declare": false,
      "start": 73,
      "end": 83
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 91
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "initializer": null,
            "computed": false,
            "start": 94,
            "end": 95
          }
        ],
        "start": 92,
        "end": 97
      },
      "const": false,
      "declare": false,
      "start": 85,
      "end": 97
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ae",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 107
                },
                "typeArguments": null,
                "start": 106,
                "end": 107
              },
              "start": 104,
              "end": 107
            },
            "start": 102,
            "end": 107
          },
          "init": null,
          "definite": false,
          "start": 102,
          "end": 107
        }
      ],
      "declare": false,
      "start": 98,
      "end": 108
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              },
              "start": 115,
              "end": 123
            },
            "start": 114,
            "end": 123
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 126,
            "end": 130
          },
          "definite": false,
          "start": 114,
          "end": 130
        }
      ],
      "declare": false,
      "start": 110,
      "end": 131
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
              },
              "start": 137,
              "end": 145
            },
            "start": 136,
            "end": 145
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 148,
            "end": 152
          },
          "definite": false,
          "start": 136,
          "end": 152
        }
      ],
      "declare": false,
      "start": 132,
      "end": 153
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 161,
                "end": 168
              },
              "start": 159,
              "end": 168
            },
            "start": 158,
            "end": 168
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 171,
            "end": 175
          },
          "definite": false,
          "start": 158,
          "end": 175
        }
      ],
      "declare": false,
      "start": 154,
      "end": 176
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 188
                },
                "typeArguments": null,
                "start": 184,
                "end": 188
              },
              "start": 182,
              "end": 188
            },
            "start": 181,
            "end": 188
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 191,
            "end": 195
          },
          "definite": false,
          "start": 181,
          "end": 195
        }
      ],
      "declare": false,
      "start": 177,
      "end": 196
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 204,
                "end": 207
              },
              "start": 202,
              "end": 207
            },
            "start": 201,
            "end": 207
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 210,
            "end": 214
          },
          "definite": false,
          "start": 201,
          "end": 214
        }
      ],
      "declare": false,
      "start": 197,
      "end": 215
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 223,
                "end": 227
              },
              "start": 221,
              "end": 227
            },
            "start": 220,
            "end": 227
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 230,
            "end": 234
          },
          "definite": false,
          "start": 220,
          "end": 234
        }
      ],
      "declare": false,
      "start": 216,
      "end": 235
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 249
                },
                "typeArguments": null,
                "start": 243,
                "end": 249
              },
              "start": 241,
              "end": 249
            },
            "start": 240,
            "end": 249
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 252,
            "end": 256
          },
          "definite": false,
          "start": 240,
          "end": 256
        }
      ],
      "declare": false,
      "start": 236,
      "end": 257
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 265,
                "end": 267
              },
              "start": 263,
              "end": 267
            },
            "start": 262,
            "end": 267
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 270,
            "end": 274
          },
          "definite": false,
          "start": 262,
          "end": 274
        }
      ],
      "declare": false,
      "start": 258,
      "end": 275
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 289,
                    "end": 291
                  },
                  "start": 286,
                  "end": 291
                },
                "start": 283,
                "end": 291
              },
              "start": 281,
              "end": 291
            },
            "start": 280,
            "end": 291
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 294,
            "end": 298
          },
          "definite": false,
          "start": 280,
          "end": 298
        }
      ],
      "declare": false,
      "start": 276,
      "end": 299
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 307,
                  "end": 315
                },
                "typeArguments": null,
                "start": 307,
                "end": 315
              },
              "start": 305,
              "end": 315
            },
            "start": 304,
            "end": 315
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 318,
            "end": 322
          },
          "definite": false,
          "start": 304,
          "end": 322
        }
      ],
      "declare": false,
      "start": 300,
      "end": 323
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 335,
                        "end": 341
                      },
                      "start": 333,
                      "end": 341
                    },
                    "start": 332,
                    "end": 341
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 346,
                    "end": 352
                  },
                  "start": 343,
                  "end": 352
                },
                "start": 331,
                "end": 352
              },
              "start": 329,
              "end": 352
            },
            "start": 328,
            "end": 352
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 355,
            "end": 359
          },
          "definite": false,
          "start": 328,
          "end": 359
        }
      ],
      "declare": false,
      "start": 324,
      "end": 360
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ac",
          "optional": false,
          "typeAnnotation": null,
          "start": 361,
          "end": 363
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 366,
          "end": 370
        },
        "start": 361,
        "end": 370
      },
      "directive": null,
      "start": 361,
      "end": 371
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ai",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 374
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 377,
          "end": 381
        },
        "start": 372,
        "end": 381
      },
      "directive": null,
      "start": 372,
      "end": 382
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "ae",
          "optional": false,
          "typeAnnotation": null,
          "start": 383,
          "end": 385
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 388,
          "end": 392
        },
        "start": 383,
        "end": 392
      },
      "directive": null,
      "start": 383,
      "end": 393
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 401,
                  "end": 407
                },
                "start": 401,
                "end": 409
              },
              "start": 399,
              "end": 409
            },
            "start": 398,
            "end": 409
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 412,
            "end": 416
          },
          "definite": false,
          "start": 398,
          "end": 416
        }
      ],
      "declare": false,
      "start": 394,
      "end": 417
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 427,
                      "end": 430
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 432,
                        "end": 438
                      },
                      "start": 430,
                      "end": 438
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 427,
                    "end": 438
                  }
                ],
                "start": 425,
                "end": 440
              },
              "start": 423,
              "end": 440
            },
            "start": 422,
            "end": 440
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 443,
            "end": 447
          },
          "definite": false,
          "start": 422,
          "end": 447
        }
      ],
      "declare": false,
      "start": 418,
      "end": 448
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 457,
                        "end": 458
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 457,
                      "end": 458
                    }
                  ],
                  "start": 456,
                  "end": 459
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 463,
                          "end": 464
                        },
                        "typeArguments": null,
                        "start": 463,
                        "end": 464
                      },
                      "start": 461,
                      "end": 464
                    },
                    "start": 460,
                    "end": 464
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 470
                    },
                    "typeArguments": null,
                    "start": 469,
                    "end": 470
                  },
                  "start": 466,
                  "end": 470
                },
                "start": 456,
                "end": 470
              },
              "start": 454,
              "end": 470
            },
            "start": 453,
            "end": 470
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 473,
            "end": 477
          },
          "definite": false,
          "start": 453,
          "end": 477
        }
      ],
      "declare": false,
      "start": 449,
      "end": 478
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 486,
                  "end": 492
                },
                "typeArguments": null,
                "start": 486,
                "end": 492
              },
              "start": 484,
              "end": 492
            },
            "start": 483,
            "end": 492
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 495,
            "end": 499
          },
          "definite": false,
          "start": 483,
          "end": 499
        }
      ],
      "declare": false,
      "start": 479,
      "end": 500
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 514
                },
                "typeArguments": null,
                "start": 508,
                "end": 514
              },
              "start": 506,
              "end": 514
            },
            "start": 505,
            "end": 514
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 517,
            "end": 521
          },
          "definite": false,
          "start": 505,
          "end": 521
        }
      ],
      "declare": false,
      "start": 501,
      "end": 522
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 536
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 537,
            "end": 538
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 540,
              "end": 541
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 540,
            "end": 541
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 544
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 557
              },
              "typeArguments": null,
              "start": 553,
              "end": 557
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 543,
            "end": 557
          }
        ],
        "start": 536,
        "end": 558
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 563
              },
              "typeArguments": null,
              "start": 562,
              "end": 563
            },
            "start": 560,
            "end": 563
          },
          "start": 559,
          "end": 563
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 568,
                "end": 569
              },
              "typeArguments": null,
              "start": 568,
              "end": 569
            },
            "start": 566,
            "end": 569
          },
          "start": 565,
          "end": 569
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 575
              },
              "typeArguments": null,
              "start": 574,
              "end": 575
            },
            "start": 572,
            "end": 575
          },
          "start": 571,
          "end": 575
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 583,
                "end": 584
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 587,
                "end": 591
              },
              "start": 583,
              "end": 591
            },
            "directive": null,
            "start": 583,
            "end": 592
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 598
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 601,
                "end": 605
              },
              "start": 597,
              "end": 605
            },
            "directive": null,
            "start": 597,
            "end": 606
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 612
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 615,
                "end": 619
              },
              "start": 611,
              "end": 619
            },
            "directive": null,
            "start": 611,
            "end": 620
          }
        ],
        "start": 577,
        "end": 622
      },
      "expression": false,
      "start": 524,
      "end": 622
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 742
}
```
