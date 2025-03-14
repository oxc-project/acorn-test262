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
      "async": false,
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
              "raw": "null",
              "value": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 99,
          "end": 103,
          "decorators": [],
          "name": "x",
          "optional": false,
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 95,
        "end": 98,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 96,
            "end": 97,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
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
      "type": "VariableDeclaration",
      "start": 125,
      "end": 138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 137,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 130,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 133,
            "end": 137,
            "arguments": [
              {
                "type": "Literal",
                "start": 135,
                "end": 136,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "decorators": [],
              "name": "f",
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
      "start": 140,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 146,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 149,
            "end": 181,
            "async": false,
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
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 153,
                "end": 157,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
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
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 186,
            "end": 188,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 191,
            "end": 196,
            "arguments": [
              {
                "type": "Literal",
                "start": 194,
                "end": 195,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 191,
              "end": 193,
              "decorators": [],
              "name": "f2",
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
      "start": 199,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 203,
          "end": 224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 203,
            "end": 224,
            "decorators": [],
            "name": "f3",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 213,
                        "end": 217,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 209,
                      "end": 212,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 210,
                          "end": 211,
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 210,
                            "end": 211,
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
      "start": 225,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 231,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 234,
            "end": 239,
            "arguments": [
              {
                "type": "Literal",
                "start": 237,
                "end": 238,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 234,
              "end": 236,
              "decorators": [],
              "name": "f3",
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
      "type": "ClassDeclaration",
      "start": 242,
      "end": 300,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 250,
        "end": 300,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 256,
            "end": 298,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 257,
              "end": 298,
              "async": false,
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
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 261,
                  "end": 265,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 257,
                "end": 260,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 258,
                    "end": 259,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 248,
        "end": 249,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 307,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 310,
            "end": 324,
            "arguments": [
              {
                "type": "Literal",
                "start": 322,
                "end": 323,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 310,
              "end": 321,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 311,
                "end": 318,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 320,
                "end": 321,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 327,
      "end": 361,
      "body": {
        "type": "TSInterfaceBody",
        "start": 339,
        "end": 361,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 345,
            "end": 359,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 350,
                "end": 354,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 346,
              "end": 349,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 347,
                  "end": 348,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 348,
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
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 337,
        "end": 338,
        "decorators": [],
        "name": "I",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 370,
            "decorators": [],
            "name": "i",
            "optional": false,
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
                  "decorators": [],
                  "name": "I",
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
      "type": "VariableDeclaration",
      "start": 372,
      "end": 388,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 387,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 378,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 381,
            "end": 387,
            "arguments": [
              {
                "type": "Literal",
                "start": 385,
                "end": 386,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 381,
              "end": 384,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 381,
                "end": 382,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 383,
                "end": 384,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 390,
      "end": 449,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 402,
        "end": 449,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 408,
            "end": 447,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 408,
              "end": 409,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 409,
              "end": 447,
              "async": false,
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
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 410,
                  "end": 414,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 398,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 398,
        "end": 401,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 399,
            "end": 400,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 399,
              "end": 400,
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
      "type": "VariableDeclaration",
      "start": 450,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 459,
            "end": 474,
            "arguments": [
              {
                "type": "Literal",
                "start": 472,
                "end": 473,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 459,
              "end": 471,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 460,
                "end": 468,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 464,
                  "end": 466,
                  "decorators": [],
                  "name": "C2",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 470,
                "end": 471,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 477,
      "end": 512,
      "body": {
        "type": "TSInterfaceBody",
        "start": 493,
        "end": 512,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 499,
            "end": 510,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 499,
              "end": 500,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 501,
                "end": 505,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 487,
        "end": 489,
        "decorators": [],
        "name": "I2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 489,
        "end": 492,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 490,
            "end": 491,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 490,
              "end": 491,
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
      "type": "VariableDeclaration",
      "start": 513,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 517,
          "end": 531,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 517,
            "end": 531,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 519,
              "end": 531,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 521,
                "end": 531,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 521,
                  "end": 523,
                  "decorators": [],
                  "name": "I2",
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
      "type": "VariableDeclaration",
      "start": 533,
      "end": 550,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 537,
          "end": 549,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 537,
            "end": 539,
            "decorators": [],
            "name": "r7",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 542,
            "end": 549,
            "arguments": [
              {
                "type": "Literal",
                "start": 547,
                "end": 548,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 542,
              "end": 546,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 542,
                "end": 544,
                "decorators": [],
                "name": "i2",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
