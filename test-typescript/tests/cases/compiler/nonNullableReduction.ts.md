nonNullableReduction.ts
```json
{
  "type": "Program",
  "start": 23,
  "end": 508,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 108,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 38,
        "decorators": [],
        "name": "Transform1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 44,
        "end": 107,
        "types": [
          {
            "type": "TSFunctionType",
            "start": 45,
            "end": 65,
            "params": [
              {
                "type": "Identifier",
                "start": 46,
                "end": 59,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 51,
                  "end": 59,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 53,
                    "end": 59
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSConditionalType",
            "start": 70,
            "end": 106,
            "checkType": {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 86,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 101,
              "end": 106
            },
            "trueType": {
              "type": "TSUndefinedKeyword",
              "start": 89,
              "end": 98
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 38,
        "end": 41,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 40,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 109,
      "end": 207,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 124,
        "decorators": [],
        "name": "Transform2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 130,
        "end": 206,
        "checkType": {
          "type": "TSStringKeyword",
          "start": 130,
          "end": 136
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 145,
          "end": 146,
          "typeName": {
            "type": "Identifier",
            "start": 145,
            "end": 146,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSFunctionType",
          "start": 186,
          "end": 206,
          "params": [
            {
              "type": "Identifier",
              "start": 187,
              "end": 200,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 192,
                "end": 200,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 194,
                  "end": 200
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 202,
            "end": 206,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 205,
              "end": 206,
              "typeName": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 149,
          "end": 183,
          "types": [
            {
              "type": "TSFunctionType",
              "start": 150,
              "end": 170,
              "params": [
                {
                  "type": "Identifier",
                  "start": 151,
                  "end": 164,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 164,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 166,
                "end": 170,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 170,
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 174,
              "end": 183
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 124,
        "end": 127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 126,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 209,
      "end": 305,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 305,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 270,
            "end": 284,
            "expression": {
              "type": "ChainExpression",
              "start": 270,
              "end": 283,
              "expression": {
                "type": "CallExpression",
                "start": 270,
                "end": 283,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 275,
                    "end": 282,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 272,
                  "decorators": [],
                  "name": "f1",
                  "optional": false
                },
                "optional": true
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 289,
            "end": 303,
            "expression": {
              "type": "ChainExpression",
              "start": 289,
              "end": 302,
              "expression": {
                "type": "CallExpression",
                "start": 289,
                "end": 302,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 294,
                    "end": 301,
                    "raw": "\"hello\"",
                    "value": "hello"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 291,
                  "decorators": [],
                  "name": "f2",
                  "optional": false
                },
                "optional": true
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 222,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 226,
          "end": 243,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 228,
            "end": 243,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 230,
              "end": 243,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 240,
                "end": 243,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 241,
                    "end": 242,
                    "typeName": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 242,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 230,
                "end": 240,
                "decorators": [],
                "name": "Transform1",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 245,
          "end": 262,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 247,
            "end": 262,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 249,
              "end": 262,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 259,
                "end": 262,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 260,
                    "end": 261,
                    "typeName": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 261,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 249,
                "end": 259,
                "decorators": [],
                "name": "Transform2",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 222,
        "end": 225,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 224,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 307,
      "end": 414,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 376,
        "end": 414,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 382,
            "end": 393,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 386,
                "end": 392,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 387,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "start": 390,
                  "end": 392,
                  "expression": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 391,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 318,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 322,
          "end": 374,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 323,
            "end": 374,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 325,
              "end": 374,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 325,
                  "end": 326,
                  "typeName": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 326,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSConditionalType",
                  "start": 330,
                  "end": 373,
                  "checkType": {
                    "type": "TSStringKeyword",
                    "start": 330,
                    "end": 336
                  },
                  "extendsType": {
                    "type": "TSTypeReference",
                    "start": 345,
                    "end": 346,
                    "typeName": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 346,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 368,
                    "end": 373
                  },
                  "trueType": {
                    "type": "TSUnionType",
                    "start": 349,
                    "end": 365,
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "start": 349,
                        "end": 353
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 356,
                        "end": 365
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 318,
        "end": 321,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 319,
            "end": 320,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 416,
      "end": 507,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 469,
        "end": 507,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 475,
            "end": 486,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 479,
                "end": 485,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 479,
                  "end": 480,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "init": {
                  "type": "TSNonNullExpression",
                  "start": 483,
                  "end": 485,
                  "expression": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 427,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 459,
          "end": 467,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 460,
            "end": 467,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 462,
              "end": 467,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 462,
                  "end": 463,
                  "typeName": {
                    "type": "Identifier",
                    "start": 462,
                    "end": 463,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 466,
                  "end": 467,
                  "typeName": {
                    "type": "Identifier",
                    "start": 466,
                    "end": 467,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 427,
        "end": 458,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 428,
            "end": 429,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 431,
            "end": 457,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 441,
              "end": 457,
              "types": [
                {
                  "type": "TSNullKeyword",
                  "start": 441,
                  "end": 445
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 448,
                  "end": 457
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
