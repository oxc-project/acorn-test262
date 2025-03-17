__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 828,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 122,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 19,
            "end": 39,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 20,
                "end": 29,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 21,
                  "end": 29,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 23,
                    "end": 29
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 44,
            "end": 77,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 54,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 48,
                    "end": 54
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 56,
                "end": 66,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 66,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 60,
                    "end": 66
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 76,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 69,
                "end": 76
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 82,
            "end": 98,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 83,
                "end": 90,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 84,
                  "end": 90,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 86,
                    "end": 90,
                    "typeName": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 90,
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
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 97,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 93,
                "end": 97
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 103,
            "end": 120,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 103,
              "end": 106,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 104,
                  "end": 105,
                  "name": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
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
                "start": 107,
                "end": 113,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 108,
                  "end": 113,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 110,
                    "end": 113,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 110,
                      "end": 111,
                      "typeName": {
                        "type": "Identifier",
                        "start": 110,
                        "end": 111,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 119,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 116,
                "end": 119,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 116,
                  "end": 117,
                  "typeName": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 124,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 134,
        "end": 135,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 136,
        "end": 232,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 142,
            "end": 162,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 143,
                "end": 152,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 144,
                  "end": 152,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 161,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 155,
                "end": 161
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 167,
            "end": 187,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 168,
                "end": 177,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 169,
                  "end": 177,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 171,
                    "end": 177
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 186,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 180,
                "end": 186
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 192,
            "end": 208,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 200,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 194,
                  "end": 200,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 196,
                    "end": 200,
                    "typeName": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 200,
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
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 207,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 203,
                "end": 207
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 213,
            "end": 230,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 213,
              "end": 216,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 214,
                  "end": 215,
                  "name": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
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
                "start": 217,
                "end": 223,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 218,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 220,
                    "end": 223,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 220,
                      "end": 221,
                      "typeName": {
                        "type": "Identifier",
                        "start": 220,
                        "end": 221,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 229,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 226,
                "end": 229,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 226,
                  "end": 227,
                  "typeName": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 234,
      "end": 349,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 245,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 246,
        "end": 349,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 252,
            "end": 288,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 253,
                "end": 262,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 254,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 256,
                    "end": 262
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 264,
                "end": 278,
                "argument": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 268,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 268,
                  "end": 278,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 270,
                    "end": 278,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 270,
                      "end": 276
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 279,
              "end": 287,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 281,
                "end": 287
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 293,
            "end": 325,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 294,
                "end": 303,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 295,
                  "end": 303,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 297,
                    "end": 303
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 305,
                "end": 315,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 307,
                  "end": 315,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 309,
                    "end": 315
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 316,
              "end": 324,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 318,
                "end": 324
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 330,
            "end": 347,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 330,
              "end": 333,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 331,
                  "end": 332,
                  "name": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 332,
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
                "start": 334,
                "end": 340,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 335,
                  "end": 340,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 337,
                    "end": 340,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 337,
                      "end": 338,
                      "typeName": {
                        "type": "Identifier",
                        "start": 337,
                        "end": 338,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 341,
              "end": 346,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 343,
                "end": 346,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 343,
                  "end": 344,
                  "typeName": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 344,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 369,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 368,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 368,
            "name": "f1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 368,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 359,
                "end": 368,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 359,
                    "end": 360,
                    "typeName": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 363,
                    "end": 364,
                    "typeName": {
                      "type": "Identifier",
                      "start": 363,
                      "end": 364,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 367,
                    "end": 368,
                    "typeName": {
                      "type": "Identifier",
                      "start": 367,
                      "end": 368,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "start": 370,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 385,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 376,
            "name": "n1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 379,
            "end": 385,
            "callee": {
              "type": "Identifier",
              "start": 379,
              "end": 381,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 382,
                "end": 384,
                "value": 42,
                "raw": "42"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 409,
      "end": 428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 413,
          "end": 427,
          "id": {
            "type": "Identifier",
            "start": 413,
            "end": 415,
            "name": "s1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 418,
            "end": 427,
            "callee": {
              "type": "Identifier",
              "start": 418,
              "end": 420,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 421,
                "end": 426,
                "value": "abc",
                "raw": "\"abc\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 467,
      "end": 494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 493,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 473,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 476,
            "end": 493,
            "callee": {
              "type": "Identifier",
              "start": 476,
              "end": 478,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 479,
                "end": 492,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 480,
                    "end": 484,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 486,
                    "end": 491,
                    "value": false,
                    "raw": "false"
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 510,
      "end": 528,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 527,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 527,
            "name": "f2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 516,
              "end": 527,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 518,
                "end": 527,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 518,
                    "end": 519,
                    "typeName": {
                      "type": "Identifier",
                      "start": 518,
                      "end": 519,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 522,
                    "end": 523,
                    "typeName": {
                      "type": "Identifier",
                      "start": 522,
                      "end": 523,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 526,
                    "end": 527,
                    "typeName": {
                      "type": "Identifier",
                      "start": 526,
                      "end": 527,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "start": 529,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 544,
          "id": {
            "type": "Identifier",
            "start": 533,
            "end": 535,
            "name": "n2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 538,
            "end": 544,
            "callee": {
              "type": "Identifier",
              "start": 538,
              "end": 540,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 541,
                "end": 543,
                "value": 42,
                "raw": "42"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 568,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 572,
          "end": 586,
          "id": {
            "type": "Identifier",
            "start": 572,
            "end": 574,
            "name": "s2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 577,
            "end": 586,
            "callee": {
              "type": "Identifier",
              "start": 577,
              "end": 579,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 580,
                "end": 585,
                "value": "abc",
                "raw": "\"abc\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 626,
      "end": 653,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 630,
          "end": 652,
          "id": {
            "type": "Identifier",
            "start": 630,
            "end": 632,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 635,
            "end": 652,
            "callee": {
              "type": "Identifier",
              "start": 635,
              "end": 637,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 638,
                "end": 651,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 639,
                    "end": 643,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 645,
                    "end": 650,
                    "value": false,
                    "raw": "false"
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 669,
      "end": 687,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 673,
          "end": 686,
          "id": {
            "type": "Identifier",
            "start": 673,
            "end": 686,
            "name": "f3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 686,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 677,
                "end": 686,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 677,
                    "end": 678,
                    "typeName": {
                      "type": "Identifier",
                      "start": 677,
                      "end": 678,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 681,
                    "end": 682,
                    "typeName": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 682,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 685,
                    "end": 686,
                    "typeName": {
                      "type": "Identifier",
                      "start": 685,
                      "end": 686,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
      "start": 688,
      "end": 704,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 692,
          "end": 703,
          "id": {
            "type": "Identifier",
            "start": 692,
            "end": 694,
            "name": "n3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 697,
            "end": 703,
            "callee": {
              "type": "Identifier",
              "start": 697,
              "end": 699,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 700,
                "end": 702,
                "value": 42,
                "raw": "42"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 727,
      "end": 746,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 731,
          "end": 745,
          "id": {
            "type": "Identifier",
            "start": 731,
            "end": 733,
            "name": "s3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 736,
            "end": 745,
            "callee": {
              "type": "Identifier",
              "start": 736,
              "end": 738,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 739,
                "end": 744,
                "value": "abc",
                "raw": "\"abc\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 785,
      "end": 812,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 789,
          "end": 811,
          "id": {
            "type": "Identifier",
            "start": 789,
            "end": 791,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 794,
            "end": 811,
            "callee": {
              "type": "Identifier",
              "start": 794,
              "end": 796,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 797,
                "end": 810,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 798,
                    "end": 802,
                    "value": true,
                    "raw": "true"
                  },
                  {
                    "type": "Literal",
                    "start": 804,
                    "end": 809,
                    "value": false,
                    "raw": "false"
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
