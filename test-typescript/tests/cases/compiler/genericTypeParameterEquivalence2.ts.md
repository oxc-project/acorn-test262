__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 41,
  "end": 1422,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 188,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 57,
        "name": "compose",
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
          "start": 67,
          "end": 81,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 81,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 70,
              "end": 81,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 71,
                  "end": 75,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 72,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 74,
                      "end": 75,
                      "typeName": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "name": "B",
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
                "start": 77,
                "end": 81,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 80,
                  "end": 81,
                  "typeName": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "name": "C",
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
        },
        {
          "type": "Identifier",
          "start": 83,
          "end": 96,
          "name": "g",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 96,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 86,
              "end": 96,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 90,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 88,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 89,
                      "end": 90,
                      "typeName": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 90,
                        "name": "A",
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
                "start": 92,
                "end": 96,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 95,
                  "end": 96,
                  "typeName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 96,
                    "name": "B",
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
        "start": 110,
        "end": 188,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 116,
            "end": 186,
            "argument": {
              "type": "FunctionExpression",
              "start": 123,
              "end": 185,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 133,
                  "end": 136,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 135,
                      "end": 136,
                      "typeName": {
                        "type": "Identifier",
                        "start": 135,
                        "end": 136,
                        "name": "A",
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
                "start": 142,
                "end": 185,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 152,
                    "end": 179,
                    "argument": {
                      "type": "CallExpression",
                      "start": 159,
                      "end": 178,
                      "callee": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 161,
                          "end": 177,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 161,
                            "end": 168,
                            "object": {
                              "type": "Identifier",
                              "start": 161,
                              "end": 162,
                              "name": "g",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 163,
                              "end": 168,
                              "name": "apply",
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
                              "start": 169,
                              "end": 173,
                              "value": null,
                              "raw": "null"
                            },
                            {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
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
                    "name": "C",
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
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 57,
        "end": 66,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 58,
            "end": 59,
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "name": "A",
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
            "start": 61,
            "end": 62,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "B",
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
            "start": 64,
            "end": 65,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "name": "C",
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
        "start": 97,
        "end": 109,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 99,
          "end": 109,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 101,
                "end": 103,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 102,
                  "end": 103,
                  "typeName": {
                    "type": "Identifier",
                    "start": 102,
                    "end": 103,
                    "name": "A",
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
            "start": 105,
            "end": 109,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 108,
              "end": 109,
              "typeName": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 227,
      "end": 372,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 243,
        "name": "forEach",
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
          "start": 247,
          "end": 256,
          "name": "list",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 251,
            "end": 256,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 253,
              "end": 256,
              "elementType": {
                "type": "TSTypeReference",
                "start": 253,
                "end": 254,
                "typeName": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 254,
                  "name": "A",
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
        },
        {
          "type": "Identifier",
          "start": 258,
          "end": 287,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 287,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 261,
              "end": 287,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 262,
                  "end": 266,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 263,
                    "end": 266,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 265,
                      "end": 266,
                      "typeName": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "name": "A",
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
                {
                  "type": "Identifier",
                  "start": 268,
                  "end": 278,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 270,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 272,
                      "end": 278
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 280,
                "end": 287,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 283,
                  "end": 287
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
        "start": 296,
        "end": 372,
        "body": [
          {
            "type": "ForStatement",
            "start": 302,
            "end": 370,
            "init": {
              "type": "VariableDeclaration",
              "start": 307,
              "end": 316,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 311,
                  "end": 316,
                  "id": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 315,
                    "end": 316,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 318,
              "end": 333,
              "left": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "MemberExpression",
                "start": 322,
                "end": 333,
                "object": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 326,
                  "name": "list",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 333,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 335,
              "end": 338,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 337,
                "end": 338,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 340,
              "end": 370,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 350,
                  "end": 364,
                  "expression": {
                    "type": "CallExpression",
                    "start": 350,
                    "end": 363,
                    "callee": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "name": "f",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 352,
                        "end": 359,
                        "object": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 356,
                          "name": "list",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 358,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 361,
                        "end": 362,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 243,
        "end": 246,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 244,
            "end": 245,
            "name": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "name": "A",
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
        "start": 289,
        "end": 295,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 291,
          "end": 295
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 411,
      "end": 596,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 426,
        "name": "filter",
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
          "start": 430,
          "end": 450,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 431,
            "end": 450,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 433,
              "end": 450,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 434,
                  "end": 438,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 435,
                    "end": 438,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 437,
                      "end": 438,
                      "typeName": {
                        "type": "Identifier",
                        "start": 437,
                        "end": 438,
                        "name": "A",
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
                "start": 440,
                "end": 450,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 443,
                  "end": 450
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 452,
          "end": 459,
          "name": "ar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 454,
            "end": 459,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 456,
              "end": 459,
              "elementType": {
                "type": "TSTypeReference",
                "start": 456,
                "end": 457,
                "typeName": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 457,
                  "name": "A",
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
      "body": {
        "type": "BlockStatement",
        "start": 466,
        "end": 596,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 472,
            "end": 485,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 476,
                "end": 484,
                "id": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 479,
                  "name": "ret",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 482,
                  "end": 484,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 490,
            "end": 577,
            "expression": {
              "type": "CallExpression",
              "start": 490,
              "end": 576,
              "callee": {
                "type": "Identifier",
                "start": 490,
                "end": 497,
                "name": "forEach",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 498,
                  "end": 500,
                  "name": "ar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 502,
                  "end": 574,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 503,
                      "end": 505,
                      "name": "el",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 510,
                    "end": 574,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 520,
                        "end": 568,
                        "test": {
                          "type": "CallExpression",
                          "start": 524,
                          "end": 529,
                          "callee": {
                            "type": "Identifier",
                            "start": 524,
                            "end": 525,
                            "name": "f",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 526,
                              "end": 528,
                              "name": "el",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 531,
                          "end": 568,
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "start": 545,
                              "end": 558,
                              "expression": {
                                "type": "CallExpression",
                                "start": 545,
                                "end": 557,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 545,
                                  "end": 553,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 545,
                                    "end": 548,
                                    "name": "ret",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 549,
                                    "end": 553,
                                    "name": "push",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 554,
                                    "end": 556,
                                    "name": "el",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              "directive": null
                            }
                          ]
                        },
                        "alternate": null
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 583,
            "end": 594,
            "argument": {
              "type": "Identifier",
              "start": 590,
              "end": 593,
              "name": "ret",
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
        "start": 426,
        "end": 429,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 427,
            "end": 428,
            "name": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "name": "A",
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
        "start": 460,
        "end": 465,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 462,
          "end": 465,
          "elementType": {
            "type": "TSTypeReference",
            "start": 462,
            "end": 463,
            "typeName": {
              "type": "Identifier",
              "start": 462,
              "end": 463,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 622,
      "end": 684,
      "id": {
        "type": "Identifier",
        "start": 631,
        "end": 638,
        "name": "length2",
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
          "start": 642,
          "end": 649,
          "name": "ar",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 644,
            "end": 649,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 646,
              "end": 649,
              "elementType": {
                "type": "TSTypeReference",
                "start": 646,
                "end": 647,
                "typeName": {
                  "type": "Identifier",
                  "start": 646,
                  "end": 647,
                  "name": "A",
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
      "body": {
        "type": "BlockStatement",
        "start": 659,
        "end": 684,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 665,
            "end": 682,
            "argument": {
              "type": "MemberExpression",
              "start": 672,
              "end": 681,
              "object": {
                "type": "Identifier",
                "start": 672,
                "end": 674,
                "name": "ar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 675,
                "end": 681,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 638,
        "end": 641,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 639,
            "end": 640,
            "name": {
              "type": "Identifier",
              "start": 639,
              "end": 640,
              "name": "A",
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
        "start": 650,
        "end": 658,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 652,
          "end": 658
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 725,
      "end": 912,
      "id": {
        "type": "Identifier",
        "start": 734,
        "end": 740,
        "name": "curry1",
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
          "start": 750,
          "end": 770,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 751,
            "end": 770,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 753,
              "end": 770,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 754,
                  "end": 758,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 755,
                    "end": 758,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 757,
                      "end": 758,
                      "typeName": {
                        "type": "Identifier",
                        "start": 757,
                        "end": 758,
                        "name": "A",
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
                {
                  "type": "Identifier",
                  "start": 760,
                  "end": 764,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 761,
                    "end": 764,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 763,
                      "end": 764,
                      "typeName": {
                        "type": "Identifier",
                        "start": 763,
                        "end": 764,
                        "name": "B",
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
                "start": 766,
                "end": 770,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 769,
                  "end": 770,
                  "typeName": {
                    "type": "Identifier",
                    "start": 769,
                    "end": 770,
                    "name": "C",
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
        "start": 797,
        "end": 912,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 803,
            "end": 910,
            "argument": {
              "type": "FunctionExpression",
              "start": 810,
              "end": 909,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 820,
                  "end": 825,
                  "name": "ay",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 822,
                    "end": 825,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 824,
                      "end": 825,
                      "typeName": {
                        "type": "Identifier",
                        "start": 824,
                        "end": 825,
                        "name": "A",
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
                "start": 827,
                "end": 909,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 837,
                    "end": 903,
                    "argument": {
                      "type": "FunctionExpression",
                      "start": 844,
                      "end": 902,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 854,
                          "end": 859,
                          "name": "by",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 856,
                            "end": 859,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 858,
                              "end": 859,
                              "typeName": {
                                "type": "Identifier",
                                "start": 858,
                                "end": 859,
                                "name": "B",
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
                        "start": 861,
                        "end": 902,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 875,
                            "end": 892,
                            "argument": {
                              "type": "CallExpression",
                              "start": 882,
                              "end": 891,
                              "callee": {
                                "type": "Identifier",
                                "start": 882,
                                "end": 883,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 884,
                                  "end": 886,
                                  "name": "ay",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 888,
                                  "end": 890,
                                  "name": "by",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 740,
        "end": 749,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 741,
            "end": 742,
            "name": {
              "type": "Identifier",
              "start": 741,
              "end": 742,
              "name": "A",
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
            "start": 744,
            "end": 745,
            "name": {
              "type": "Identifier",
              "start": 744,
              "end": 745,
              "name": "B",
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
            "start": 747,
            "end": 748,
            "name": {
              "type": "Identifier",
              "start": 747,
              "end": 748,
              "name": "C",
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
        "start": 771,
        "end": 796,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 773,
          "end": 796,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 774,
              "end": 779,
              "name": "ax",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 776,
                "end": 779,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 778,
                  "end": 779,
                  "typeName": {
                    "type": "Identifier",
                    "start": 778,
                    "end": 779,
                    "name": "A",
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
            "start": 781,
            "end": 796,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 784,
              "end": 796,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 785,
                  "end": 790,
                  "name": "bx",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 787,
                    "end": 790,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 789,
                      "end": 790,
                      "typeName": {
                        "type": "Identifier",
                        "start": 789,
                        "end": 790,
                        "name": "B",
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
                "start": 792,
                "end": 796,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 795,
                  "end": 796,
                  "typeName": {
                    "type": "Identifier",
                    "start": 795,
                    "end": 796,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 914,
      "end": 943,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 918,
          "end": 942,
          "id": {
            "type": "Identifier",
            "start": 918,
            "end": 925,
            "name": "cfilter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 928,
            "end": 942,
            "callee": {
              "type": "Identifier",
              "start": 928,
              "end": 934,
              "name": "curry1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 935,
                "end": 941,
                "name": "filter",
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
      "type": "FunctionDeclaration",
      "start": 1163,
      "end": 1280,
      "id": {
        "type": "Identifier",
        "start": 1172,
        "end": 1184,
        "name": "countWhere_1",
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
          "start": 1188,
          "end": 1211,
          "name": "pred",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1192,
            "end": 1211,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1194,
              "end": 1211,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1195,
                  "end": 1199,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1196,
                    "end": 1199,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1198,
                      "end": 1199,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1198,
                        "end": 1199,
                        "name": "A",
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
                "start": 1201,
                "end": 1211,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1204,
                  "end": 1211
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
        "start": 1233,
        "end": 1280,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1239,
            "end": 1278,
            "argument": {
              "type": "CallExpression",
              "start": 1246,
              "end": 1277,
              "callee": {
                "type": "Identifier",
                "start": 1246,
                "end": 1253,
                "name": "compose",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1261,
                  "name": "length2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "CallExpression",
                  "start": 1263,
                  "end": 1276,
                  "callee": {
                    "type": "Identifier",
                    "start": 1263,
                    "end": 1270,
                    "name": "cfilter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1271,
                      "end": 1275,
                      "name": "pred",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1184,
        "end": 1187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1185,
            "end": 1186,
            "name": {
              "type": "Identifier",
              "start": 1185,
              "end": 1186,
              "name": "A",
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
        "start": 1212,
        "end": 1232,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1214,
          "end": 1232,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1215,
              "end": 1221,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1216,
                "end": 1221,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1218,
                  "end": 1221,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1218,
                    "end": 1219,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1218,
                      "end": 1219,
                      "name": "A",
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
            "start": 1223,
            "end": 1232,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1226,
              "end": 1232
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1282,
      "end": 1422,
      "id": {
        "type": "Identifier",
        "start": 1291,
        "end": 1303,
        "name": "countWhere_2",
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
          "start": 1307,
          "end": 1330,
          "name": "pred",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1311,
            "end": 1330,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1313,
              "end": 1330,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1314,
                  "end": 1318,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1315,
                    "end": 1318,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1317,
                      "end": 1318,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1317,
                        "end": 1318,
                        "name": "A",
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
                "start": 1320,
                "end": 1330,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 1323,
                  "end": 1330
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
        "start": 1352,
        "end": 1422,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1358,
            "end": 1384,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1362,
                "end": 1383,
                "id": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1367,
                  "name": "where",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1370,
                  "end": 1383,
                  "callee": {
                    "type": "Identifier",
                    "start": 1370,
                    "end": 1377,
                    "name": "cfilter",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1378,
                      "end": 1382,
                      "name": "pred",
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
            "type": "ReturnStatement",
            "start": 1389,
            "end": 1420,
            "argument": {
              "type": "CallExpression",
              "start": 1396,
              "end": 1419,
              "callee": {
                "type": "Identifier",
                "start": 1396,
                "end": 1403,
                "name": "compose",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1404,
                  "end": 1411,
                  "name": "length2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1418,
                  "name": "where",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1303,
        "end": 1306,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1304,
            "end": 1305,
            "name": {
              "type": "Identifier",
              "start": 1304,
              "end": 1305,
              "name": "A",
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
        "start": 1331,
        "end": 1351,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1333,
          "end": 1351,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 1334,
              "end": 1340,
              "name": "a",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1335,
                "end": 1340,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1337,
                  "end": 1340,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1337,
                    "end": 1338,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1337,
                      "end": 1338,
                      "name": "A",
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
            "start": 1342,
            "end": 1351,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1345,
              "end": 1351
            }
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
