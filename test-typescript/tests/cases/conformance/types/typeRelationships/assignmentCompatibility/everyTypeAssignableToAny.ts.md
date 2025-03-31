__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 736,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
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
      "type": "ClassDeclaration",
      "start": 13,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 39,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
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
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 32,
                "end": 38
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
      "start": 42,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "name": "ac",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
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
      "start": 53,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 65,
        "end": 85,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 71,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 74,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 82,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
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
      "start": 86,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 95,
            "name": "ai",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 95,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
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
      "start": 98,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 107,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
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
        "start": 105,
        "end": 110,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 107,
            "end": 108,
            "id": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
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
      "start": 111,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
            "name": "ae",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 120,
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
      "start": 123,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 136,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
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
      "start": 138,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 151,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 151,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 151,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 145,
                "end": 151
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
      "start": 153,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 167,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 167,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 160,
                "end": 167
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
      "start": 169,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 180,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 180,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 180,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 192,
            "name": "f",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 192,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 189,
                "end": 192
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
      "start": 194,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 205,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 205,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 201,
                "end": 205
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
      "start": 207,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 220,
            "name": "h",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 214,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 220,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 231,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 231,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 229,
                "end": 231,
                "members": []
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
      "start": 233,
      "end": 249,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 248,
            "name": "j",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 248,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 240,
                "end": 248,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 243,
                  "end": 248,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 246,
                    "end": 248,
                    "members": []
                  }
                }
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
      "start": 250,
      "end": 266,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 265,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 265,
            "name": "k",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 265,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 265,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 265,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 295,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 295,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 274,
                "end": 295,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 275,
                    "end": 284,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 286,
                  "end": 295,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 289,
                    "end": 295
                  }
                }
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
      "start": 297,
      "end": 313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 312,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 312,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 304,
                "end": 312,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 304,
                  "end": 310
                }
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
      "start": 314,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 336,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 319,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 321,
                "end": 336,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 323,
                    "end": 334,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 323,
                      "end": 326,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 326,
                      "end": 334,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 328,
                        "end": 334
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 360,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 359,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 359,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 345,
                "end": 359,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 345,
                  "end": 348,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 346,
                      "end": 347,
                      "name": {
                        "type": "Identifier",
                        "start": 346,
                        "end": 347,
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
                    "start": 349,
                    "end": 353,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 350,
                      "end": 353,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 352,
                        "end": 353,
                        "typeName": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 353,
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
                  "start": 355,
                  "end": 359,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 358,
                    "end": 359,
                    "typeName": {
                      "type": "Identifier",
                      "start": 358,
                      "end": 359,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 375,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 374,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 374,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 374,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 368,
                "end": 374,
                "typeName": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 374,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 376,
      "end": 390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 389,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 389,
            "name": "q",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 389,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 383,
                "end": 389,
                "typeName": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 389,
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 392,
      "end": 398,
      "expression": {
        "type": "AssignmentExpression",
        "start": 392,
        "end": 397,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 392,
          "end": 393,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 396,
          "end": 397,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 399,
      "end": 405,
      "expression": {
        "type": "AssignmentExpression",
        "start": 399,
        "end": 404,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 399,
          "end": 400,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 403,
          "end": 404,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 406,
      "end": 412,
      "expression": {
        "type": "AssignmentExpression",
        "start": 406,
        "end": 411,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 406,
          "end": 407,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 410,
          "end": 411,
          "name": "d",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 413,
      "end": 419,
      "expression": {
        "type": "AssignmentExpression",
        "start": 413,
        "end": 418,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 413,
          "end": 414,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 417,
          "end": 418,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 420,
      "end": 426,
      "expression": {
        "type": "AssignmentExpression",
        "start": 420,
        "end": 425,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 420,
          "end": 421,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 424,
          "end": 425,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 427,
      "end": 433,
      "expression": {
        "type": "AssignmentExpression",
        "start": 427,
        "end": 432,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 427,
          "end": 428,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 431,
          "end": 432,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 434,
      "end": 440,
      "expression": {
        "type": "AssignmentExpression",
        "start": 434,
        "end": 439,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 434,
          "end": 435,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 438,
          "end": 439,
          "name": "h",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 441,
      "end": 447,
      "expression": {
        "type": "AssignmentExpression",
        "start": 441,
        "end": 446,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 441,
          "end": 442,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 445,
          "end": 446,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 448,
      "end": 454,
      "expression": {
        "type": "AssignmentExpression",
        "start": 448,
        "end": 453,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 448,
          "end": 449,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 452,
          "end": 453,
          "name": "j",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 455,
      "end": 461,
      "expression": {
        "type": "AssignmentExpression",
        "start": 455,
        "end": 460,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 455,
          "end": 456,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 459,
          "end": 460,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 462,
      "end": 468,
      "expression": {
        "type": "AssignmentExpression",
        "start": 462,
        "end": 467,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 462,
          "end": 463,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 466,
          "end": 467,
          "name": "l",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 469,
      "end": 475,
      "expression": {
        "type": "AssignmentExpression",
        "start": 469,
        "end": 474,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 469,
          "end": 470,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 473,
          "end": 474,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 476,
      "end": 482,
      "expression": {
        "type": "AssignmentExpression",
        "start": 476,
        "end": 481,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 476,
          "end": 477,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 480,
          "end": 481,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 483,
      "end": 489,
      "expression": {
        "type": "AssignmentExpression",
        "start": 483,
        "end": 488,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 483,
          "end": 484,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 487,
          "end": 488,
          "name": "p",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 491,
      "end": 497,
      "expression": {
        "type": "AssignmentExpression",
        "start": 491,
        "end": 496,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 491,
          "end": 492,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 495,
          "end": 496,
          "name": "q",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 498,
      "end": 505,
      "expression": {
        "type": "AssignmentExpression",
        "start": 498,
        "end": 504,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 498,
          "end": 499,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 502,
          "end": 504,
          "name": "ac",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 506,
      "end": 513,
      "expression": {
        "type": "AssignmentExpression",
        "start": 506,
        "end": 512,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 506,
          "end": 507,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 510,
          "end": 512,
          "name": "ai",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 514,
      "end": 521,
      "expression": {
        "type": "AssignmentExpression",
        "start": 514,
        "end": 520,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 514,
          "end": 515,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 518,
          "end": 520,
          "name": "ae",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 523,
      "end": 626,
      "id": {
        "type": "Identifier",
        "start": 532,
        "end": 535,
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
          "start": 572,
          "end": 576,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 573,
            "end": 576,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 575,
              "end": 576,
              "typeName": {
                "type": "Identifier",
                "start": 575,
                "end": 576,
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
          "start": 578,
          "end": 582,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 579,
            "end": 582,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 581,
              "end": 582,
              "typeName": {
                "type": "Identifier",
                "start": 581,
                "end": 582,
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
          "start": 584,
          "end": 588,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 585,
            "end": 588,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 587,
              "end": 588,
              "typeName": {
                "type": "Identifier",
                "start": 587,
                "end": 588,
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
        "start": 590,
        "end": 626,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 596,
            "end": 602,
            "expression": {
              "type": "AssignmentExpression",
              "start": 596,
              "end": 601,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 596,
                "end": 597,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 600,
                "end": 601,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 607,
            "end": 613,
            "expression": {
              "type": "AssignmentExpression",
              "start": 607,
              "end": 612,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 607,
                "end": 608,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 611,
                "end": 612,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 618,
            "end": 624,
            "expression": {
              "type": "AssignmentExpression",
              "start": 618,
              "end": 623,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 618,
                "end": 619,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 622,
                "end": 623,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 535,
        "end": 571,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 536,
            "end": 537,
            "name": {
              "type": "Identifier",
              "start": 536,
              "end": 537,
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
            "start": 539,
            "end": 540,
            "name": {
              "type": "Identifier",
              "start": 539,
              "end": 540,
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
            "start": 556,
            "end": 570,
            "name": {
              "type": "Identifier",
              "start": 556,
              "end": 557,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 566,
              "end": 570,
              "typeName": {
                "type": "Identifier",
                "start": 566,
                "end": 570,
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
