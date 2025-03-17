__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 742,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 38,
            "name": "ac",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 40,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 72,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 70,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 69,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 63,
                "end": 69
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 82,
            "name": "ai",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 82,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 81,
                "end": 82,
                "typeName": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 82,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 85,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 94,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 92,
        "end": 97,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 94,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 94,
              "end": 95,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 108,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 107,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 107,
            "name": "ae",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 107,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 123,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 126,
            "end": 130,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 145,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 145,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 139,
                "end": 145
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 148,
            "end": 152,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 168,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 159,
              "end": 168,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 161,
                "end": 168
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 171,
            "end": 175,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 177,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 181,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 181,
            "end": 188,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 184,
                "end": 188,
                "typeName": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 188,
                  "name": "Date",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 191,
            "end": 195,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 207,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 202,
              "end": 207,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 204,
                "end": 207
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 210,
            "end": 214,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 235,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 234,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 227,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 227,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 223,
                "end": 227
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 230,
            "end": 234,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 236,
      "end": 257,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 240,
          "end": 256,
          "id": {
            "type": "Identifier",
            "start": 240,
            "end": 249,
            "name": "h",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 249,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 249,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 249,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 252,
            "end": 256,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 258,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 262,
            "end": 267,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 265,
                "end": 267,
                "members": []
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 270,
            "end": 274,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 298,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 291,
            "name": "j",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 281,
              "end": 291,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 283,
                "end": 291,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 286,
                  "end": 291,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 289,
                    "end": 291,
                    "members": []
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 294,
            "end": 298,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 315,
            "name": "k",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 305,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 307,
                "end": 315,
                "typeName": {
                  "type": "Identifier",
                  "start": 307,
                  "end": 315,
                  "name": "Function",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 318,
            "end": 322,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 324,
      "end": 360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 328,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 328,
            "end": 352,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 329,
              "end": 352,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 331,
                "end": 352,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 332,
                    "end": 341,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 333,
                      "end": 341,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 335,
                        "end": 341
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 343,
                  "end": 352,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 346,
                    "end": 352
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 355,
            "end": 359,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 361,
      "end": 371,
      "expression": {
        "type": "AssignmentExpression",
        "start": 361,
        "end": 370,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 361,
          "end": 363,
          "name": "ac",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 366,
          "end": 370,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 372,
      "end": 382,
      "expression": {
        "type": "AssignmentExpression",
        "start": 372,
        "end": 381,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 372,
          "end": 374,
          "name": "ai",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 377,
          "end": 381,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 383,
      "end": 393,
      "expression": {
        "type": "AssignmentExpression",
        "start": 383,
        "end": 392,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 383,
          "end": 385,
          "name": "ae",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 388,
          "end": 392,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 394,
      "end": 417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 416,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 409,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 399,
              "end": 409,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 401,
                "end": 409,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 401,
                  "end": 407
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 412,
            "end": 416,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 418,
      "end": 448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 447,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 440,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 440,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 425,
                "end": 440,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 427,
                    "end": 438,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 430,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 430,
                      "end": 438,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 432,
                        "end": 438
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 443,
            "end": 447,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 449,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 470,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 454,
              "end": 470,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 456,
                "end": 470,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 456,
                  "end": 459,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 457,
                      "end": 458,
                      "name": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 458,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 460,
                    "end": 464,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 461,
                      "end": 464,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 463,
                        "end": 464,
                        "typeName": {
                          "type": "Identifier",
                          "start": 463,
                          "end": 464,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 466,
                  "end": 470,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 469,
                    "end": 470,
                    "typeName": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 470,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 473,
            "end": 477,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 479,
      "end": 500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 499,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 492,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 484,
              "end": 492,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 486,
                "end": 492,
                "typeName": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 492,
                  "name": "Number",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 495,
            "end": 499,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 521,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 514,
            "name": "q",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 506,
              "end": 514,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 508,
                "end": 514,
                "typeName": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 514,
                  "name": "String",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 517,
            "end": 521,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 524,
      "end": 622,
      "id": {
        "type": "Identifier",
        "start": 533,
        "end": 536,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 559,
          "end": 563,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 560,
            "end": 563,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 562,
              "end": 563,
              "typeName": {
                "type": "Identifier",
                "start": 562,
                "end": 563,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 565,
          "end": 569,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 566,
            "end": 569,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 568,
              "end": 569,
              "typeName": {
                "type": "Identifier",
                "start": 568,
                "end": 569,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 571,
          "end": 575,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 572,
            "end": 575,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 574,
              "end": 575,
              "typeName": {
                "type": "Identifier",
                "start": 574,
                "end": 575,
                "name": "V",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 577,
        "end": 622,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 583,
            "end": 592,
            "expression": {
              "type": "AssignmentExpression",
              "start": 583,
              "end": 591,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 583,
                "end": 584,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 587,
                "end": 591,
                "value": null,
                "raw": "null"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 597,
            "end": 606,
            "expression": {
              "type": "AssignmentExpression",
              "start": 597,
              "end": 605,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 597,
                "end": 598,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 601,
                "end": 605,
                "value": null,
                "raw": "null"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 611,
            "end": 620,
            "expression": {
              "type": "AssignmentExpression",
              "start": 611,
              "end": 619,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 611,
                "end": 612,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 615,
                "end": 619,
                "value": null,
                "raw": "null"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 536,
        "end": 558,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 537,
            "end": 538,
            "name": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 540,
            "end": 541,
            "name": {
              "type": "Identifier",
              "start": 540,
              "end": 541,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 543,
            "end": 557,
            "name": {
              "type": "Identifier",
              "start": 543,
              "end": 544,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 553,
              "end": 557,
              "typeName": {
                "type": "Identifier",
                "start": 553,
                "end": 557,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
