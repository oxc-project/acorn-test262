__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 85,
  "end": 550,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "name": "f",
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
          "start": 99,
          "end": 103,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 103,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 102,
              "end": 103,
              "typeName": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
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
      "body": {
        "type": "BlockStatement",
        "start": 108,
        "end": 124,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 110,
            "end": 122,
            "argument": {
              "type": "Literal",
              "start": 117,
              "end": 121,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 95,
        "end": 98,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 96,
            "end": 97,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
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
      "returnType": {
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
      "type": "VariableDeclaration",
      "start": 125,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 133,
            "end": 137,
            "callee": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 135,
                "end": 136,
                "value": 1,
                "raw": "1"
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
      "start": 140,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 149,
            "end": 181,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 157,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 154,
                  "end": 157,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 156,
                    "end": 157,
                    "typeName": {
                      "type": "Identifier",
                      "start": 156,
                      "end": 157,
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
            "body": {
              "type": "BlockStatement",
              "start": 165,
              "end": 181,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 167,
                  "end": 179,
                  "argument": {
                    "type": "Literal",
                    "start": 174,
                    "end": 178,
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 149,
              "end": 152,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 150,
                  "end": 151,
                  "name": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
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
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 161,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 160,
                "end": 161,
                "typeName": {
                  "type": "Identifier",
                  "start": 160,
                  "end": 161,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 186,
          "end": 196,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 188,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 191,
            "end": 196,
            "callee": {
              "type": "Identifier",
              "start": 191,
              "end": 193,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 194,
                "end": 195,
                "value": 1,
                "raw": "1"
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
      "start": 199,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 224,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 224,
            "name": "f3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 224,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 207,
                "end": 224,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 209,
                    "end": 222,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 209,
                      "end": 212,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 210,
                          "end": 211,
                          "name": {
                            "type": "Identifier",
                            "start": 210,
                            "end": 211,
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
                        "start": 213,
                        "end": 217,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 214,
                          "end": 217,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 216,
                            "end": 217,
                            "typeName": {
                              "type": "Identifier",
                              "start": 216,
                              "end": 217,
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
                      "start": 218,
                      "end": 221,
                      "typeAnnotation": {
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
      "start": 225,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 231,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 234,
            "end": 239,
            "callee": {
              "type": "Identifier",
              "start": 234,
              "end": 236,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 237,
                "end": 238,
                "value": 1,
                "raw": "1"
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
      "type": "ClassDeclaration",
      "start": 242,
      "end": 300,
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 249,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 300,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 298,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 298,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 261,
                  "end": 265,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 262,
                    "end": 265,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 264,
                      "end": 265,
                      "typeName": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 265,
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
              "body": {
                "type": "BlockStatement",
                "start": 270,
                "end": 298,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 280,
                    "end": 292,
                    "argument": {
                      "type": "Literal",
                      "start": 287,
                      "end": 291,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 257,
                "end": 260,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 258,
                    "end": 259,
                    "name": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 266,
                "end": 269,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 268,
                  "end": 269,
                  "typeName": {
                    "type": "Identifier",
                    "start": 268,
                    "end": 269,
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
            "override": false,
            "optional": false,
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
      "start": 301,
      "end": 325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 324,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 307,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 310,
            "end": 324,
            "callee": {
              "type": "MemberExpression",
              "start": 310,
              "end": 321,
              "object": {
                "type": "NewExpression",
                "start": 311,
                "end": 318,
                "callee": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 320,
                "end": 321,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 322,
                "end": 323,
                "value": 1,
                "raw": "1"
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
      "type": "TSInterfaceDeclaration",
      "start": 327,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 338,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 339,
        "end": 361,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 345,
            "end": 359,
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 346,
              "end": 349,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 347,
                  "end": 348,
                  "name": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 348,
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
                "start": 350,
                "end": 354,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 351,
                  "end": 354,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 353,
                    "end": 354,
                    "typeName": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 354,
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
              "end": 358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 357,
                "end": 358,
                "typeName": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 358,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 362,
      "end": 371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 370,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 370,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 370,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 369,
                "end": 370,
                "typeName": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 370,
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
      "type": "VariableDeclaration",
      "start": 372,
      "end": 388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 387,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 378,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 381,
            "end": 387,
            "callee": {
              "type": "MemberExpression",
              "start": 381,
              "end": 384,
              "object": {
                "type": "Identifier",
                "start": 381,
                "end": 382,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 385,
                "end": 386,
                "value": 1,
                "raw": "1"
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
      "type": "ClassDeclaration",
      "start": 390,
      "end": 449,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 398,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 402,
        "end": 449,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 408,
            "end": 447,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 409,
              "end": 447,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 410,
                  "end": 414,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 411,
                    "end": 414,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 413,
                      "end": 414,
                      "typeName": {
                        "type": "Identifier",
                        "start": 413,
                        "end": 414,
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
              "body": {
                "type": "BlockStatement",
                "start": 419,
                "end": 447,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 429,
                    "end": 441,
                    "argument": {
                      "type": "Literal",
                      "start": 436,
                      "end": 440,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 415,
                "end": 418,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 417,
                  "end": 418,
                  "typeName": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
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
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 398,
        "end": 401,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 399,
            "end": 400,
            "name": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 450,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 459,
            "end": 474,
            "callee": {
              "type": "MemberExpression",
              "start": 459,
              "end": 471,
              "object": {
                "type": "NewExpression",
                "start": 460,
                "end": 468,
                "callee": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 466,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 470,
                "end": 471,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 472,
                "end": 473,
                "value": 1,
                "raw": "1"
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
      "type": "TSInterfaceDeclaration",
      "start": 477,
      "end": 512,
      "id": {
        "type": "Identifier",
        "start": 487,
        "end": 489,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 489,
        "end": 492,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 490,
            "end": 491,
            "name": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 493,
        "end": 512,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 499,
            "end": 510,
            "key": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 501,
                "end": 505,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 502,
                  "end": 505,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 504,
                    "end": 505,
                    "typeName": {
                      "type": "Identifier",
                      "start": 504,
                      "end": 505,
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
              "start": 506,
              "end": 509,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 508,
                "end": 509,
                "typeName": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 509,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 513,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 531,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 519,
              "end": 531,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 521,
                "end": 531,
                "typeName": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 523,
                  "name": "I2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 523,
                  "end": 531,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 524,
                      "end": 530
                    }
                  ]
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
      "start": 533,
      "end": 550,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 537,
          "end": 549,
          "id": {
            "type": "Identifier",
            "start": 537,
            "end": 539,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 542,
            "end": 549,
            "callee": {
              "type": "MemberExpression",
              "start": 542,
              "end": 546,
              "object": {
                "type": "Identifier",
                "start": 542,
                "end": 544,
                "name": "i2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 547,
                "end": 548,
                "value": 1,
                "raw": "1"
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
