__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 98,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 114,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 101,
            "end": 112,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
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
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
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
      "type": "ClassDeclaration",
      "start": 115,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 138,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 136,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 128,
              "name": "bar",
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
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
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
      "start": 139,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 196,
            "name": "a",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 156,
                        "end": 166,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 157,
                          "end": 166,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 159,
                            "end": 166
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "C",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 176,
                    "end": 194,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 180,
                        "end": 189,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 181,
                          "end": 189,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 183,
                            "end": 189
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                          "name": "D",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
      "start": 198,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 207,
        "end": 211,
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
          "start": 218,
          "end": 236,
          "name": "cb",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 220,
            "end": 236,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 222,
              "end": 236,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 226,
                  "end": 230,
                  "name": "x",
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
                "id": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 252,
                  "name": "u",
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
            "start": 258,
            "end": 267,
            "argument": {
              "type": "Identifier",
              "start": 265,
              "end": 266,
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
        "start": 211,
        "end": 217,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 212,
            "end": 213,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
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
            "start": 215,
            "end": 216,
            "name": {
              "type": "Identifier",
              "start": 215,
              "end": 216,
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
      "start": 271,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 286,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 276,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 279,
            "end": 286,
            "callee": {
              "type": "Identifier",
              "start": 279,
              "end": 283,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 284,
                "end": 285,
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
      "start": 362,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 422,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 422,
            "name": "b",
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
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 378,
                      "end": 381,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 379,
                          "end": 380,
                          "name": {
                            "type": "Identifier",
                            "start": 379,
                            "end": 380,
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
                        "start": 382,
                        "end": 392,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 383,
                          "end": 392,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 385,
                            "end": 392
                          }
                        },
                        "decorators": [],
                        "optional": false
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
                    "type": "TSConstructSignatureDeclaration",
                    "start": 402,
                    "end": 420,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 405,
                      "end": 408,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 406,
                          "end": 407,
                          "name": {
                            "type": "Identifier",
                            "start": 406,
                            "end": 407,
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
                        "start": 409,
                        "end": 413,
                        "name": "x",
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
                      "start": 414,
                      "end": 419,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 416,
                        "end": 419
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
      "start": 424,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 428,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 428,
            "end": 430,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 433,
            "end": 440,
            "callee": {
              "type": "Identifier",
              "start": 433,
              "end": 437,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 438,
                "end": 439,
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
