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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 41,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 41,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 39,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 52,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "decorators": [],
            "name": "ac",
            "optional": false,
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
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 95,
            "decorators": [],
            "name": "ai",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 121,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 120,
            "decorators": [],
            "name": "ae",
            "optional": false,
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
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 137,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 136,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 152,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 151,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 151,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 151,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 145,
                "end": 151
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 153,
      "end": 168,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 157,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 157,
            "end": 167,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 167,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 160,
                "end": 167
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 181,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 180,
            "decorators": [],
            "name": "e",
            "optional": false,
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
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 193,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 192,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 192,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 189,
                "end": 192
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 206,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 198,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 198,
            "end": 205,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 205,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 201,
                "end": 205
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 221,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 211,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 211,
            "end": 220,
            "decorators": [],
            "name": "h",
            "optional": false,
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
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 232,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 231,
            "decorators": [],
            "name": "i",
            "optional": false,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 249,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 248,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 248,
            "decorators": [],
            "name": "j",
            "optional": false,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 250,
      "end": 266,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 254,
          "end": 265,
          "id": {
            "type": "Identifier",
            "start": 254,
            "end": 265,
            "decorators": [],
            "name": "k",
            "optional": false,
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
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 267,
      "end": 296,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 271,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 271,
            "end": 295,
            "decorators": [],
            "name": "l",
            "optional": false,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 276,
                      "end": 284,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      }
                    }
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 297,
      "end": 313,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 312,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 312,
            "decorators": [],
            "name": "m",
            "optional": false,
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 337,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 336,
            "decorators": [],
            "name": "n",
            "optional": false,
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
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 360,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 359,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 359,
            "decorators": [],
            "name": "o",
            "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 361,
      "end": 375,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 374,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 374,
            "decorators": [],
            "name": "p",
            "optional": false,
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
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 376,
      "end": 390,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 389,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 389,
            "decorators": [],
            "name": "q",
            "optional": false,
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
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 396,
          "end": 397,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 403,
          "end": 404,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 410,
          "end": 411,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 417,
          "end": 418,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 424,
          "end": 425,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 431,
          "end": 432,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 438,
          "end": 439,
          "decorators": [],
          "name": "h",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 445,
          "end": 446,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 452,
          "end": 453,
          "decorators": [],
          "name": "j",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 459,
          "end": 460,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 466,
          "end": 467,
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 473,
          "end": 474,
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 480,
          "end": 481,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 487,
          "end": 488,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 495,
          "end": 496,
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 502,
          "end": 504,
          "decorators": [],
          "name": "ac",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 510,
          "end": 512,
          "decorators": [],
          "name": "ai",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 518,
          "end": 520,
          "decorators": [],
          "name": "ae",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 566,
              "end": 570,
              "typeName": {
                "type": "Identifier",
                "start": 566,
                "end": 570,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 572,
          "end": 576,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 578,
          "end": 582,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 584,
          "end": 588,
          "decorators": [],
          "name": "z",
          "optional": false,
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
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 600,
                "end": 601,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 611,
                "end": 612,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 622,
                "end": 623,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
