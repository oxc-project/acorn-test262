genericCallWithFunctionTypedArguments4.ts
```json
{
  "type": "Program",
  "start": 91,
  "end": 514,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 114,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 101,
            "end": 112,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 115,
      "end": 138,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 138,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 136,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 128,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 196,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 196,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 146,
                "end": 196,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 152,
                    "end": 171,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 156,
                        "end": 166,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 157,
                          "end": 166,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 159,
                            "end": 166
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
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
                          "name": "C",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 176,
                    "end": 194,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 180,
                        "end": 189,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 181,
                          "end": 189,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 183,
                            "end": 189
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 190,
                      "end": 193,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 192,
                        "end": 193,
                        "typeName": {
                          "type": "Identifier",
                          "start": 192,
                          "end": 193,
                          "decorators": [],
                          "name": "D",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 198,
      "end": 269,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 238,
        "end": 269,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 244,
            "end": 253,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 248,
                "end": 252,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 252,
                  "decorators": [],
                  "name": "u",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 249,
                    "end": 252,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 251,
                      "end": 252,
                      "typeName": {
                        "type": "Identifier",
                        "start": 251,
                        "end": 252,
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 258,
            "end": 267,
            "argument": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
              "decorators": [],
              "name": "u",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 211,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 218,
          "end": 236,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 220,
            "end": 236,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 222,
              "end": 236,
              "abstract": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 226,
                  "end": 230,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 230,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 229,
                      "end": 230,
                      "typeName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 232,
                "end": 236,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 235,
                  "end": 236,
                  "typeName": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 211,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 212,
            "end": 213,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 215,
            "end": 216,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 286,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 276,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 279,
            "end": 286,
            "arguments": [
              {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "decorators": [],
              "name": "foo4",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 362,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 422,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 422,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 422,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 369,
                "end": 422,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 375,
                    "end": 397,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 382,
                        "end": 392,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 383,
                          "end": 392,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 385,
                            "end": 392
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 393,
                      "end": 396,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 395,
                        "end": 396,
                        "typeName": {
                          "type": "Identifier",
                          "start": 395,
                          "end": 396,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 378,
                      "end": 381,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 379,
                          "end": 380,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 379,
                            "end": 380,
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
                    "type": "TSConstructSignatureDeclaration",
                    "start": 402,
                    "end": 420,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 409,
                        "end": 413,
                        "decorators": [],
                        "name": "x",
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
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 414,
                      "end": 419,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 416,
                        "end": 419
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 405,
                      "end": 408,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 406,
                          "end": 407,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 406,
                            "end": 407,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 424,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 428,
          "end": 440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 428,
            "end": 430,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 433,
            "end": 440,
            "arguments": [
              {
                "type": "Identifier",
                "start": 438,
                "end": 439,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 433,
              "end": 437,
              "decorators": [],
              "name": "foo4",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
