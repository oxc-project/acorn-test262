__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3305,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 25,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 25,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 23,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
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
      "type": "TSInterfaceDeclaration",
      "start": 26,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 46,
          "end": 47,
          "expression": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 48,
        "end": 61,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 59,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 59,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 53,
                "end": 59
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
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 82,
          "end": 83,
          "expression": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 84,
        "end": 97,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 86,
            "end": 95,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
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
      "type": "TSDeclareFunction",
      "start": 99,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 120,
        "decorators": [],
        "name": "cast",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 120,
        "end": 136,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 122,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
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
            "start": 124,
            "end": 135,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 134,
              "end": 135,
              "typeName": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "T",
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
          "start": 137,
          "end": 141,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 138,
            "end": 141,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 140,
              "end": 141,
              "typeName": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
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
          "start": 143,
          "end": 165,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 147,
            "end": 165,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 149,
              "end": 165,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 150,
                  "end": 154,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 153,
                      "end": 154,
                      "typeName": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 154,
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
                "start": 156,
                "end": 165,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 159,
                  "end": 165,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 164,
                    "end": 165,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 164,
                      "end": 165,
                      "typeName": {
                        "type": "Identifier",
                        "start": 164,
                        "end": 165,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 166,
        "end": 169,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 168,
          "end": 169,
          "typeName": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 172,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 192,
        "decorators": [],
        "name": "isC",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 193,
          "end": 197,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 194,
            "end": 197,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 196,
              "end": 197,
              "typeName": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "A",
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
        "start": 198,
        "end": 206,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 200,
          "end": 206,
          "parameterName": {
            "type": "Identifier",
            "start": 200,
            "end": 201,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 205,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 209,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 220,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 221,
          "end": 225,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 222,
            "end": 225,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 225,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 225,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 227,
          "end": 231,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 228,
            "end": 231,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 230,
              "end": 231,
              "typeName": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "decorators": [],
                "name": "B",
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
        "start": 233,
        "end": 324,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 239,
            "end": 263,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 245,
                "end": 262,
                "id": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 247,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 250,
                  "end": 262,
                  "callee": {
                    "type": "Identifier",
                    "start": 250,
                    "end": 254,
                    "decorators": [],
                    "name": "cast",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 255,
                      "end": 256,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 258,
                      "end": 261,
                      "decorators": [],
                      "name": "isC",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 283,
            "end": 307,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 289,
                "end": 306,
                "id": {
                  "type": "Identifier",
                  "start": 289,
                  "end": 291,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 294,
                  "end": 306,
                  "callee": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 298,
                    "decorators": [],
                    "name": "cast",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 302,
                      "end": 305,
                      "decorators": [],
                      "name": "isC",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 326,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 347,
        "decorators": [],
        "name": "useA",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 348,
          "end": 352,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 349,
            "end": 352,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 351,
              "end": 352,
              "typeName": {
                "type": "Identifier",
                "start": 351,
                "end": 352,
                "decorators": [],
                "name": "A",
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
        "start": 353,
        "end": 359,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 355,
          "end": 359
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 362,
      "end": 440,
      "id": {
        "type": "Identifier",
        "start": 379,
        "end": 386,
        "decorators": [],
        "name": "consume",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 386,
        "end": 402,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 387,
            "end": 388,
            "name": {
              "type": "Identifier",
              "start": 387,
              "end": 388,
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
            "start": 390,
            "end": 401,
            "name": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 400,
              "end": 401,
              "typeName": {
                "type": "Identifier",
                "start": 400,
                "end": 401,
                "decorators": [],
                "name": "T",
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
          "start": 403,
          "end": 407,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 404,
            "end": 407,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 406,
              "end": 407,
              "typeName": {
                "type": "Identifier",
                "start": 406,
                "end": 407,
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
          "start": 409,
          "end": 413,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 410,
            "end": 413,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 412,
              "end": 413,
              "typeName": {
                "type": "Identifier",
                "start": 412,
                "end": 413,
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
          "start": 415,
          "end": 432,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 416,
            "end": 432,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 418,
              "end": 432,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 419,
                  "end": 423,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 420,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 422,
                      "end": 423,
                      "typeName": {
                        "type": "Identifier",
                        "start": 422,
                        "end": 423,
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
                "start": 425,
                "end": 432,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 428,
                  "end": 432
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 433,
        "end": 439,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 435,
          "end": 439
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 442,
      "end": 641,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 453,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 454,
          "end": 458,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 455,
            "end": 458,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 457,
              "end": 458,
              "typeName": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 460,
          "end": 464,
          "decorators": [],
          "name": "c",
          "optional": false,
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
                "decorators": [],
                "name": "C",
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
        "start": 466,
        "end": 641,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 472,
            "end": 492,
            "expression": {
              "type": "CallExpression",
              "start": 472,
              "end": 491,
              "callee": {
                "type": "Identifier",
                "start": 472,
                "end": 479,
                "decorators": [],
                "name": "consume",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 480,
                  "end": 481,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 483,
                  "end": 484,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 486,
                  "end": 490,
                  "decorators": [],
                  "name": "useA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 515,
            "end": 535,
            "expression": {
              "type": "CallExpression",
              "start": 515,
              "end": 534,
              "callee": {
                "type": "Identifier",
                "start": 515,
                "end": 522,
                "decorators": [],
                "name": "consume",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 523,
                  "end": 524,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 526,
                  "end": 527,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 529,
                  "end": 533,
                  "decorators": [],
                  "name": "useA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 558,
            "end": 578,
            "expression": {
              "type": "CallExpression",
              "start": 558,
              "end": 577,
              "callee": {
                "type": "Identifier",
                "start": 558,
                "end": 565,
                "decorators": [],
                "name": "consume",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 566,
                  "end": 567,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 569,
                  "end": 570,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 572,
                  "end": 576,
                  "decorators": [],
                  "name": "useA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 601,
            "end": 621,
            "expression": {
              "type": "CallExpression",
              "start": 601,
              "end": 620,
              "callee": {
                "type": "Identifier",
                "start": 601,
                "end": 608,
                "decorators": [],
                "name": "consume",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 609,
                  "end": 610,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 612,
                  "end": 613,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 615,
                  "end": 619,
                  "decorators": [],
                  "name": "useA",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 643,
      "end": 747,
      "id": {
        "type": "Identifier",
        "start": 660,
        "end": 665,
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 665,
        "end": 681,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 666,
            "end": 667,
            "name": {
              "type": "Identifier",
              "start": 666,
              "end": 667,
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
            "start": 669,
            "end": 680,
            "name": {
              "type": "Identifier",
              "start": 669,
              "end": 670,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 679,
              "end": 680,
              "typeName": {
                "type": "Identifier",
                "start": 679,
                "end": 680,
                "decorators": [],
                "name": "T",
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
          "start": 682,
          "end": 701,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 687,
            "end": 701,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 689,
              "end": 701,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 698,
                "end": 701,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 698,
                  "end": 699,
                  "typeName": {
                    "type": "Identifier",
                    "start": 698,
                    "end": 699,
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
        {
          "type": "Identifier",
          "start": 703,
          "end": 722,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 704,
            "end": 722,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 706,
              "end": 722,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 707,
                  "end": 711,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 708,
                    "end": 711,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 710,
                      "end": 711,
                      "typeName": {
                        "type": "Identifier",
                        "start": 710,
                        "end": 711,
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
                "start": 713,
                "end": 722,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 716,
                  "end": 722,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 716,
                    "end": 717,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 721,
                    "end": 722,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 721,
                      "end": 722,
                      "typeName": {
                        "type": "Identifier",
                        "start": 721,
                        "end": 722,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 723,
        "end": 746,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 725,
          "end": 746,
          "parameterName": {
            "type": "Identifier",
            "start": 725,
            "end": 730,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 734,
            "end": 746,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 734,
              "end": 746,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 743,
                "end": 746,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 743,
                  "end": 744,
                  "typeName": {
                    "type": "Identifier",
                    "start": 743,
                    "end": 744,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 749,
      "end": 906,
      "id": {
        "type": "Identifier",
        "start": 758,
        "end": 760,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 761,
          "end": 793,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 764,
            "end": 793,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 766,
              "end": 793,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 766,
                  "end": 778,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 775,
                    "end": 778,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 775,
                      "end": 776,
                      "typeName": {
                        "type": "Identifier",
                        "start": 775,
                        "end": 776,
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 781,
                  "end": 793,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 790,
                    "end": 793,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 790,
                      "end": 791,
                      "typeName": {
                        "type": "Identifier",
                        "start": 790,
                        "end": 791,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 795,
        "end": 906,
        "body": [
          {
            "type": "IfStatement",
            "start": 801,
            "end": 904,
            "test": {
              "type": "CallExpression",
              "start": 805,
              "end": 820,
              "callee": {
                "type": "Identifier",
                "start": 805,
                "end": 810,
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 811,
                  "end": 814,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 816,
                  "end": 819,
                  "decorators": [],
                  "name": "isC",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 822,
              "end": 858,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 832,
                  "end": 836,
                  "expression": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 835,
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 868,
              "end": 904,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 878,
                  "end": 882,
                  "expression": {
                    "type": "Identifier",
                    "start": 878,
                    "end": 881,
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 930,
      "end": 1041,
      "id": {
        "type": "Identifier",
        "start": 935,
        "end": 945,
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 946,
        "end": 1041,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 952,
            "end": 957,
            "id": {
              "type": "Identifier",
              "start": 952,
              "end": 957,
              "decorators": [],
              "name": "Block",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 963,
            "end": 973,
            "id": {
              "type": "Identifier",
              "start": 963,
              "end": 973,
              "decorators": [],
              "name": "Identifier",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 979,
            "end": 989,
            "id": {
              "type": "Identifier",
              "start": 979,
              "end": 989,
              "decorators": [],
              "name": "CaseClause",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 995,
            "end": 1013,
            "id": {
              "type": "Identifier",
              "start": 995,
              "end": 1013,
              "decorators": [],
              "name": "FunctionExpression",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 1019,
            "end": 1038,
            "id": {
              "type": "Identifier",
              "start": 1019,
              "end": 1038,
              "decorators": [],
              "name": "FunctionDeclaration",
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
      "type": "TSInterfaceDeclaration",
      "start": 1043,
      "end": 1079,
      "id": {
        "type": "Identifier",
        "start": 1053,
        "end": 1057,
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1058,
        "end": 1079,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1060,
            "end": 1077,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1060,
              "end": 1064,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1064,
              "end": 1076,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1066,
                "end": 1076,
                "typeName": {
                  "type": "Identifier",
                  "start": 1066,
                  "end": 1076,
                  "decorators": [],
                  "name": "SyntaxKind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 1080,
      "end": 1140,
      "id": {
        "type": "Identifier",
        "start": 1090,
        "end": 1100,
        "decorators": [],
        "name": "Expression",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1109,
          "end": 1113,
          "expression": {
            "type": "Identifier",
            "start": 1109,
            "end": 1113,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1114,
        "end": 1140,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1116,
            "end": 1138,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1116,
              "end": 1132,
              "decorators": [],
              "name": "_expressionBrand",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1132,
              "end": 1137,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1134,
                "end": 1137
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
      "type": "TSInterfaceDeclaration",
      "start": 1141,
      "end": 1203,
      "id": {
        "type": "Identifier",
        "start": 1151,
        "end": 1162,
        "decorators": [],
        "name": "Declaration",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1171,
          "end": 1175,
          "expression": {
            "type": "Identifier",
            "start": 1171,
            "end": 1175,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1176,
        "end": 1203,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1178,
            "end": 1201,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1178,
              "end": 1195,
              "decorators": [],
              "name": "_declarationBrand",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1195,
              "end": 1200,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1197,
                "end": 1200
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
      "type": "TSInterfaceDeclaration",
      "start": 1204,
      "end": 1260,
      "id": {
        "type": "Identifier",
        "start": 1214,
        "end": 1219,
        "decorators": [],
        "name": "Block",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1228,
          "end": 1232,
          "expression": {
            "type": "Identifier",
            "start": 1228,
            "end": 1232,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1233,
        "end": 1260,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1235,
            "end": 1258,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1235,
              "end": 1239,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1239,
              "end": 1257,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1241,
                "end": 1257,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1241,
                  "end": 1257,
                  "left": {
                    "type": "Identifier",
                    "start": 1241,
                    "end": 1251,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1252,
                    "end": 1257,
                    "decorators": [],
                    "name": "Block",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 1261,
      "end": 1346,
      "id": {
        "type": "Identifier",
        "start": 1271,
        "end": 1281,
        "decorators": [],
        "name": "Identifier",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1290,
          "end": 1300,
          "expression": {
            "type": "Identifier",
            "start": 1290,
            "end": 1300,
            "decorators": [],
            "name": "Expression",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 1302,
          "end": 1313,
          "expression": {
            "type": "Identifier",
            "start": 1302,
            "end": 1313,
            "decorators": [],
            "name": "Declaration",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1314,
        "end": 1346,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1316,
            "end": 1344,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1316,
              "end": 1320,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1320,
              "end": 1343,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1322,
                "end": 1343,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1322,
                  "end": 1343,
                  "left": {
                    "type": "Identifier",
                    "start": 1322,
                    "end": 1332,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1333,
                    "end": 1343,
                    "decorators": [],
                    "name": "Identifier",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 1347,
      "end": 1413,
      "id": {
        "type": "Identifier",
        "start": 1357,
        "end": 1367,
        "decorators": [],
        "name": "CaseClause",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1376,
          "end": 1380,
          "expression": {
            "type": "Identifier",
            "start": 1376,
            "end": 1380,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1381,
        "end": 1413,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1383,
            "end": 1411,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1383,
              "end": 1387,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1387,
              "end": 1410,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1389,
                "end": 1410,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1389,
                  "end": 1410,
                  "left": {
                    "type": "Identifier",
                    "start": 1389,
                    "end": 1399,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1400,
                    "end": 1410,
                    "decorators": [],
                    "name": "CaseClause",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 1414,
      "end": 1505,
      "id": {
        "type": "Identifier",
        "start": 1424,
        "end": 1443,
        "decorators": [],
        "name": "FunctionDeclaration",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1452,
          "end": 1463,
          "expression": {
            "type": "Identifier",
            "start": 1452,
            "end": 1463,
            "decorators": [],
            "name": "Declaration",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1464,
        "end": 1505,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1466,
            "end": 1503,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1466,
              "end": 1470,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1470,
              "end": 1502,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1472,
                "end": 1502,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1472,
                  "end": 1502,
                  "left": {
                    "type": "Identifier",
                    "start": 1472,
                    "end": 1482,
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1483,
                    "end": 1502,
                    "decorators": [],
                    "name": "FunctionDeclaration",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 1507,
      "end": 1552,
      "id": {
        "type": "Identifier",
        "start": 1512,
        "end": 1521,
        "decorators": [],
        "name": "HasLocals",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1524,
        "end": 1551,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1524,
            "end": 1529,
            "typeName": {
              "type": "Identifier",
              "start": 1524,
              "end": 1529,
              "decorators": [],
              "name": "Block",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1532,
            "end": 1551,
            "typeName": {
              "type": "Identifier",
              "start": 1532,
              "end": 1551,
              "decorators": [],
              "name": "FunctionDeclaration",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1553,
      "end": 1615,
      "id": {
        "type": "Identifier",
        "start": 1570,
        "end": 1583,
        "decorators": [],
        "name": "canHaveLocals",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1584,
          "end": 1594,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1588,
            "end": 1594,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1590,
              "end": 1594,
              "typeName": {
                "type": "Identifier",
                "start": 1590,
                "end": 1594,
                "decorators": [],
                "name": "Node",
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
        "start": 1595,
        "end": 1614,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1597,
          "end": 1614,
          "parameterName": {
            "type": "Identifier",
            "start": 1597,
            "end": 1601,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1605,
            "end": 1614,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1605,
              "end": 1614,
              "typeName": {
                "type": "Identifier",
                "start": 1605,
                "end": 1614,
                "decorators": [],
                "name": "HasLocals",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1617,
      "end": 1744,
      "id": {
        "type": "Identifier",
        "start": 1634,
        "end": 1644,
        "decorators": [],
        "name": "assertNode",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1644,
        "end": 1673,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1645,
            "end": 1659,
            "name": {
              "type": "Identifier",
              "start": 1645,
              "end": 1646,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1655,
              "end": 1659,
              "typeName": {
                "type": "Identifier",
                "start": 1655,
                "end": 1659,
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1661,
            "end": 1672,
            "name": {
              "type": "Identifier",
              "start": 1661,
              "end": 1662,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1671,
              "end": 1672,
              "typeName": {
                "type": "Identifier",
                "start": 1671,
                "end": 1672,
                "decorators": [],
                "name": "T",
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
          "start": 1674,
          "end": 1693,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1678,
            "end": 1693,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1680,
              "end": 1693,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1680,
                  "end": 1681,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1680,
                    "end": 1681,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1684,
                  "end": 1693
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1695,
          "end": 1723,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1699,
            "end": 1723,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1701,
              "end": 1723,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1702,
                  "end": 1709,
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1706,
                    "end": 1709,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1708,
                      "end": 1709,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1708,
                        "end": 1709,
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
                "start": 1711,
                "end": 1723,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1714,
                  "end": 1723,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1714,
                    "end": 1718,
                    "decorators": [],
                    "name": "node",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1722,
                    "end": 1723,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1722,
                      "end": 1723,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1722,
                        "end": 1723,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1724,
        "end": 1743,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1726,
          "end": 1743,
          "parameterName": {
            "type": "Identifier",
            "start": 1734,
            "end": 1738,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1742,
            "end": 1743,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1742,
              "end": 1743,
              "typeName": {
                "type": "Identifier",
                "start": 1742,
                "end": 1743,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1745,
      "end": 1848,
      "id": {
        "type": "Identifier",
        "start": 1762,
        "end": 1772,
        "decorators": [],
        "name": "assertNode",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1773,
          "end": 1795,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1777,
            "end": 1795,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1779,
              "end": 1795,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1779,
                  "end": 1783,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1779,
                    "end": 1783,
                    "decorators": [],
                    "name": "Node",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1786,
                  "end": 1795
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1797,
          "end": 1840,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1801,
            "end": 1840,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1803,
              "end": 1840,
              "types": [
                {
                  "type": "TSFunctionType",
                  "start": 1804,
                  "end": 1827,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1805,
                      "end": 1815,
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1809,
                        "end": 1815,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1811,
                          "end": 1815,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1811,
                            "end": 1815,
                            "decorators": [],
                            "name": "Node",
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
                    "start": 1817,
                    "end": 1827,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1820,
                      "end": 1827
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1831,
                  "end": 1840
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1841,
        "end": 1847,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1843,
          "end": 1847
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1850,
      "end": 2009,
      "id": {
        "type": "Identifier",
        "start": 1859,
        "end": 1862,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1863,
          "end": 1901,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1867,
            "end": 1901,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1869,
              "end": 1901,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1869,
                  "end": 1888,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1869,
                    "end": 1888,
                    "decorators": [],
                    "name": "FunctionDeclaration",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1891,
                  "end": 1901,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1891,
                    "end": 1901,
                    "decorators": [],
                    "name": "CaseClause",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1903,
        "end": 2009,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1909,
            "end": 1941,
            "expression": {
              "type": "CallExpression",
              "start": 1909,
              "end": 1940,
              "callee": {
                "type": "Identifier",
                "start": 1909,
                "end": 1919,
                "decorators": [],
                "name": "assertNode",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1920,
                  "end": 1924,
                  "decorators": [],
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1926,
                  "end": 1939,
                  "decorators": [],
                  "name": "canHaveLocals",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1978,
            "end": 1983,
            "expression": {
              "type": "Identifier",
              "start": 1978,
              "end": 1982,
              "decorators": [],
              "name": "node",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2011,
      "end": 2073,
      "id": {
        "type": "Identifier",
        "start": 2028,
        "end": 2040,
        "decorators": [],
        "name": "isExpression",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2041,
          "end": 2051,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2045,
            "end": 2051,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2047,
              "end": 2051,
              "typeName": {
                "type": "Identifier",
                "start": 2047,
                "end": 2051,
                "decorators": [],
                "name": "Node",
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
        "start": 2052,
        "end": 2072,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2054,
          "end": 2072,
          "parameterName": {
            "type": "Identifier",
            "start": 2054,
            "end": 2058,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2062,
            "end": 2072,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2062,
              "end": 2072,
              "typeName": {
                "type": "Identifier",
                "start": 2062,
                "end": 2072,
                "decorators": [],
                "name": "Expression",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2075,
      "end": 2196,
      "id": {
        "type": "Identifier",
        "start": 2092,
        "end": 2099,
        "decorators": [],
        "name": "tryCast",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2099,
        "end": 2128,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2100,
            "end": 2116,
            "name": {
              "type": "Identifier",
              "start": 2100,
              "end": 2104,
              "decorators": [],
              "name": "TOut",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2113,
              "end": 2116,
              "typeName": {
                "type": "Identifier",
                "start": 2113,
                "end": 2116,
                "decorators": [],
                "name": "TIn",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2118,
            "end": 2127,
            "name": {
              "type": "Identifier",
              "start": 2118,
              "end": 2121,
              "decorators": [],
              "name": "TIn",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 2124,
              "end": 2127
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2129,
          "end": 2151,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2134,
            "end": 2151,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2136,
              "end": 2151,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2136,
                  "end": 2139,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2136,
                    "end": 2139,
                    "decorators": [],
                    "name": "TIn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2142,
                  "end": 2151
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2153,
          "end": 2188,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2157,
            "end": 2188,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2159,
              "end": 2188,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2160,
                  "end": 2170,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2165,
                    "end": 2170,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2167,
                      "end": 2170,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2167,
                        "end": 2170,
                        "decorators": [],
                        "name": "TIn",
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
                "start": 2172,
                "end": 2188,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 2175,
                  "end": 2188,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 2175,
                    "end": 2180,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2184,
                    "end": 2188,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2184,
                      "end": 2188,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2184,
                        "end": 2188,
                        "decorators": [],
                        "name": "TOut",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2189,
        "end": 2195,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2191,
          "end": 2195,
          "typeName": {
            "type": "Identifier",
            "start": 2191,
            "end": 2195,
            "decorators": [],
            "name": "TOut",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2198,
      "end": 2327,
      "id": {
        "type": "Identifier",
        "start": 2207,
        "end": 2210,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2211,
          "end": 2249,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2215,
            "end": 2249,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2217,
              "end": 2249,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2217,
                  "end": 2227,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2217,
                    "end": 2227,
                    "decorators": [],
                    "name": "Identifier",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 2230,
                  "end": 2249,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2230,
                    "end": 2249,
                    "decorators": [],
                    "name": "FunctionDeclaration",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2251,
        "end": 2327,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2257,
            "end": 2295,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2263,
                "end": 2294,
                "id": {
                  "type": "Identifier",
                  "start": 2263,
                  "end": 2264,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2267,
                  "end": 2294,
                  "callee": {
                    "type": "Identifier",
                    "start": 2267,
                    "end": 2274,
                    "decorators": [],
                    "name": "tryCast",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 2275,
                      "end": 2279,
                      "decorators": [],
                      "name": "node",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 2281,
                      "end": 2293,
                      "decorators": [],
                      "name": "isExpression",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 2351,
      "end": 2418,
      "id": {
        "type": "Identifier",
        "start": 2362,
        "end": 2373,
        "decorators": [],
        "name": "SyntaxKind1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 2374,
        "end": 2418,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 2380,
            "end": 2395,
            "id": {
              "type": "Identifier",
              "start": 2380,
              "end": 2395,
              "decorators": [],
              "name": "ClassExpression",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 2401,
            "end": 2415,
            "id": {
              "type": "Identifier",
              "start": 2401,
              "end": 2415,
              "decorators": [],
              "name": "ClassStatement",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2420,
      "end": 2462,
      "id": {
        "type": "Identifier",
        "start": 2430,
        "end": 2435,
        "decorators": [],
        "name": "Node1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2436,
        "end": 2462,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2442,
            "end": 2460,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2442,
              "end": 2446,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2446,
              "end": 2459,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2448,
                "end": 2459,
                "typeName": {
                  "type": "Identifier",
                  "start": 2448,
                  "end": 2459,
                  "decorators": [],
                  "name": "SyntaxKind1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 2464,
      "end": 2528,
      "id": {
        "type": "Identifier",
        "start": 2474,
        "end": 2484,
        "decorators": [],
        "name": "Statement1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2493,
          "end": 2498,
          "expression": {
            "type": "Identifier",
            "start": 2493,
            "end": 2498,
            "decorators": [],
            "name": "Node1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2499,
        "end": 2528,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2505,
            "end": 2526,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2505,
              "end": 2520,
              "decorators": [],
              "name": "_statementBrand",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2520,
              "end": 2525,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2522,
                "end": 2525
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
      "type": "TSInterfaceDeclaration",
      "start": 2530,
      "end": 2613,
      "id": {
        "type": "Identifier",
        "start": 2540,
        "end": 2556,
        "decorators": [],
        "name": "ClassExpression1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2565,
          "end": 2570,
          "expression": {
            "type": "Identifier",
            "start": 2565,
            "end": 2570,
            "decorators": [],
            "name": "Node1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2571,
        "end": 2613,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2577,
            "end": 2611,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2577,
              "end": 2581,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2581,
              "end": 2610,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2583,
                "end": 2610,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2583,
                  "end": 2610,
                  "left": {
                    "type": "Identifier",
                    "start": 2583,
                    "end": 2594,
                    "decorators": [],
                    "name": "SyntaxKind1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2595,
                    "end": 2610,
                    "decorators": [],
                    "name": "ClassExpression",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 2615,
      "end": 2701,
      "id": {
        "type": "Identifier",
        "start": 2625,
        "end": 2640,
        "decorators": [],
        "name": "ClassStatement1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2649,
          "end": 2659,
          "expression": {
            "type": "Identifier",
            "start": 2649,
            "end": 2659,
            "decorators": [],
            "name": "Statement1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2660,
        "end": 2701,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2666,
            "end": 2699,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2666,
              "end": 2670,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2670,
              "end": 2698,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2672,
                "end": 2698,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 2672,
                  "end": 2698,
                  "left": {
                    "type": "Identifier",
                    "start": 2672,
                    "end": 2683,
                    "decorators": [],
                    "name": "SyntaxKind1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2684,
                    "end": 2698,
                    "decorators": [],
                    "name": "ClassStatement",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 2703,
      "end": 2756,
      "id": {
        "type": "Identifier",
        "start": 2708,
        "end": 2718,
        "decorators": [],
        "name": "ClassLike1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2721,
        "end": 2755,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2721,
            "end": 2737,
            "typeName": {
              "type": "Identifier",
              "start": 2721,
              "end": 2737,
              "decorators": [],
              "name": "ClassExpression1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 2740,
            "end": 2755,
            "typeName": {
              "type": "Identifier",
              "start": 2740,
              "end": 2755,
              "decorators": [],
              "name": "ClassStatement1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2758,
      "end": 2820,
      "id": {
        "type": "Identifier",
        "start": 2775,
        "end": 2786,
        "decorators": [],
        "name": "isClassLike",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2787,
          "end": 2798,
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2791,
            "end": 2798,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2793,
              "end": 2798,
              "typeName": {
                "type": "Identifier",
                "start": 2793,
                "end": 2798,
                "decorators": [],
                "name": "Node1",
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
        "start": 2799,
        "end": 2819,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2801,
          "end": 2819,
          "parameterName": {
            "type": "Identifier",
            "start": 2801,
            "end": 2805,
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2809,
            "end": 2819,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2809,
              "end": 2819,
              "typeName": {
                "type": "Identifier",
                "start": 2809,
                "end": 2819,
                "decorators": [],
                "name": "ClassLike1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2822,
      "end": 2870,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2836,
          "end": 2869,
          "id": {
            "type": "Identifier",
            "start": 2836,
            "end": 2869,
            "decorators": [],
            "name": "statement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2845,
              "end": 2869,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2847,
                "end": 2869,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2847,
                    "end": 2857,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2847,
                      "end": 2857,
                      "decorators": [],
                      "name": "Statement1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2860,
                    "end": 2869
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2872,
      "end": 2932,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2878,
          "end": 2931,
          "id": {
            "type": "Identifier",
            "start": 2878,
            "end": 2897,
            "decorators": [],
            "name": "maybeClassStatement",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2900,
            "end": 2931,
            "callee": {
              "type": "Identifier",
              "start": 2900,
              "end": 2907,
              "decorators": [],
              "name": "tryCast",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2908,
                "end": 2917,
                "decorators": [],
                "name": "statement",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2919,
                "end": 2930,
                "decorators": [],
                "name": "isClassLike",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2971,
      "end": 3028,
      "id": {
        "type": "Identifier",
        "start": 2981,
        "end": 2989,
        "decorators": [],
        "name": "TypeNode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 2998,
          "end": 3002,
          "expression": {
            "type": "Identifier",
            "start": 2998,
            "end": 3002,
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3003,
        "end": 3028,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3009,
            "end": 3026,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3009,
              "end": 3017,
              "decorators": [],
              "name": "typeInfo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3017,
              "end": 3025,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3019,
                "end": 3025
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
      "type": "TSInterfaceDeclaration",
      "start": 3030,
      "end": 3108,
      "id": {
        "type": "Identifier",
        "start": 3040,
        "end": 3049,
        "decorators": [],
        "name": "NodeArray",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3049,
        "end": 3065,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3050,
            "end": 3064,
            "name": {
              "type": "Identifier",
              "start": 3050,
              "end": 3051,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3060,
              "end": 3064,
              "typeName": {
                "type": "Identifier",
                "start": 3060,
                "end": 3064,
                "decorators": [],
                "name": "Node",
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 3074,
          "end": 3082,
          "expression": {
            "type": "Identifier",
            "start": 3074,
            "end": 3079,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3079,
            "end": 3082,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3080,
                "end": 3081,
                "typeName": {
                  "type": "Identifier",
                  "start": 3080,
                  "end": 3081,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3083,
        "end": 3108,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3089,
            "end": 3106,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3089,
              "end": 3097,
              "decorators": [],
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3097,
              "end": 3105,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3099,
                "end": 3105
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
      "type": "TSDeclareFunction",
      "start": 3110,
      "end": 3199,
      "id": {
        "type": "Identifier",
        "start": 3127,
        "end": 3138,
        "decorators": [],
        "name": "isNodeArray",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3138,
        "end": 3154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3139,
            "end": 3153,
            "name": {
              "type": "Identifier",
              "start": 3139,
              "end": 3140,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3149,
              "end": 3153,
              "typeName": {
                "type": "Identifier",
                "start": 3149,
                "end": 3153,
                "decorators": [],
                "name": "Node",
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
          "start": 3155,
          "end": 3174,
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3160,
            "end": 3174,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 3162,
              "end": 3174,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3171,
                "end": 3174,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 3171,
                  "end": 3172,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3171,
                    "end": 3172,
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
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3175,
        "end": 3198,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 3177,
          "end": 3198,
          "parameterName": {
            "type": "Identifier",
            "start": 3177,
            "end": 3182,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3186,
            "end": 3198,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3186,
              "end": 3198,
              "typeName": {
                "type": "Identifier",
                "start": 3186,
                "end": 3195,
                "decorators": [],
                "name": "NodeArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3195,
                "end": 3198,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3196,
                    "end": 3197,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3196,
                      "end": 3197,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3201,
      "end": 3242,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3215,
          "end": 3241,
          "id": {
            "type": "Identifier",
            "start": 3215,
            "end": 3241,
            "decorators": [],
            "name": "types",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3220,
              "end": 3241,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 3222,
                "end": 3241,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 3231,
                  "end": 3241,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 3231,
                    "end": 3239,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3231,
                      "end": 3239,
                      "decorators": [],
                      "name": "TypeNode",
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3244,
      "end": 3282,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3250,
          "end": 3281,
          "id": {
            "type": "Identifier",
            "start": 3250,
            "end": 3251,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3254,
            "end": 3281,
            "callee": {
              "type": "Identifier",
              "start": 3254,
              "end": 3261,
              "decorators": [],
              "name": "tryCast",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3262,
                "end": 3267,
                "decorators": [],
                "name": "types",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3269,
                "end": 3280,
                "decorators": [],
                "name": "isNodeArray",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
