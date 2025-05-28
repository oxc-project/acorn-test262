__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 91,
  "end": 468,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 150,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 150,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 98,
                "end": 150,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 104,
                    "end": 126,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 105,
                        "end": 115,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 106,
                          "end": 115,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 108,
                            "end": 115
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 116,
                      "end": 125,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 118,
                        "end": 125
                      }
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 131,
                    "end": 148,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 132,
                        "end": 141,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 133,
                          "end": 141,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 135,
                            "end": 141
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 142,
                      "end": 147,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 144,
                        "end": 147
                      }
                    }
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
      "type": "FunctionDeclaration",
      "start": 152,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 165,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 165,
        "end": 171,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 166,
            "end": 167,
            "name": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
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
            "start": 169,
            "end": 170,
            "name": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
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
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 172,
          "end": 187,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 187,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 176,
              "end": 187,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 181,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 178,
                    "end": 181,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 180,
                      "end": 181,
                      "typeName": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 181,
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
                "start": 183,
                "end": 187,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 186,
                  "end": 187,
                  "typeName": {
                    "type": "Identifier",
                    "start": 186,
                    "end": 187,
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
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 189,
        "end": 220,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 195,
            "end": 204,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 199,
                "end": 203,
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 203,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 200,
                    "end": 203,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 202,
                      "end": 203,
                      "typeName": {
                        "type": "Identifier",
                        "start": 202,
                        "end": 203,
                        "decorators": [],
                        "name": "U",
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
            "type": "ReturnStatement",
            "start": 209,
            "end": 218,
            "argument": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 238,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 237,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 230,
            "end": 237,
            "callee": {
              "type": "Identifier",
              "start": 230,
              "end": 234,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "decorators": [],
                "name": "a",
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
      "start": 322,
      "end": 376,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 376,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 327,
              "end": 376,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 329,
                "end": 376,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 335,
                    "end": 354,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 335,
                      "end": 338,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 336,
                          "end": 337,
                          "name": {
                            "type": "Identifier",
                            "start": 336,
                            "end": 337,
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
                        "start": 339,
                        "end": 349,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 340,
                          "end": 349,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 342,
                            "end": 349
                          }
                        }
                      }
                    ],
                    "returnType": {
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
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 359,
                    "end": 374,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 359,
                      "end": 362,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 360,
                          "end": 361,
                          "name": {
                            "type": "Identifier",
                            "start": 360,
                            "end": 361,
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
                        "start": 363,
                        "end": 367,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 364,
                          "end": 367,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 366,
                            "end": 367,
                            "typeName": {
                              "type": "Identifier",
                              "start": 366,
                              "end": 367,
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
                      "start": 368,
                      "end": 373,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 370,
                        "end": 373
                      }
                    }
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
      "start": 378,
      "end": 395,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 384,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 387,
            "end": 394,
            "callee": {
              "type": "Identifier",
              "start": 387,
              "end": 391,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "decorators": [],
                "name": "b",
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
