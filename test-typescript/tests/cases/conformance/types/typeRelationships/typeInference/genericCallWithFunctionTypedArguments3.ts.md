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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 150,
            "name": "a",
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
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 106,
                          "end": 115,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 108,
                            "end": 115
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 133,
                          "end": 141,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 135,
                            "end": 141
                          }
                        },
                        "decorators": [],
                        "optional": false
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
      "type": "FunctionDeclaration",
      "start": 152,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 161,
        "end": 165,
        "name": "foo4",
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
          "start": 172,
          "end": 187,
          "name": "cb",
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
                  "name": "x",
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
                    "name": "U",
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
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 189,
        "end": 220,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 195,
            "end": 204,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 199,
                "end": 203,
                "id": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 203,
                  "name": "u",
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
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
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
              "name": "u",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
            "start": 169,
            "end": 170,
            "name": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
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
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 222,
      "end": 238,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 226,
          "end": 237,
          "id": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 230,
            "end": 237,
            "callee": {
              "type": "Identifier",
              "start": 230,
              "end": 234,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "start": 322,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 376,
            "name": "b",
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
                        "start": 339,
                        "end": 349,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 340,
                          "end": 349,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 342,
                            "end": 349
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                        "start": 363,
                        "end": 367,
                        "name": "x",
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
      "start": 378,
      "end": 395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 384,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 387,
            "end": 394,
            "callee": {
              "type": "Identifier",
              "start": 387,
              "end": 391,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
