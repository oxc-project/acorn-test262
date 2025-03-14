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
      "async": false,
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
              "async": false,
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
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 161,
                          "end": 177,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 169,
                              "end": 173,
                              "raw": "null",
                              "value": null
                            },
                            {
                              "type": "Identifier",
                              "start": 175,
                              "end": 176,
                              "decorators": [],
                              "name": "a",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 161,
                            "end": 168,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 161,
                              "end": 162,
                              "decorators": [],
                              "name": "g",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 163,
                              "end": 168,
                              "decorators": [],
                              "name": "apply",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 160,
                        "decorators": [],
                        "name": "f",
                        "optional": false
                      },
                      "optional": false
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
                  "start": 133,
                  "end": 136,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                }
              ],
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
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
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
        "start": 50,
        "end": 57,
        "decorators": [],
        "name": "compose",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 67,
          "end": 81,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 68,
            "end": 81,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 70,
              "end": 81,
              "params": [
                {
                  "type": "Identifier",
                  "start": 71,
                  "end": 75,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
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
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  }
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
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 83,
          "end": 96,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 84,
            "end": 96,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 86,
              "end": 96,
              "params": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 90,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
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
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 97,
        "end": 109,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 99,
          "end": 109,
          "params": [
            {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "decorators": [],
              "name": "a",
              "optional": false,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
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
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 57,
        "end": 66,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 58,
            "end": 59,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 61,
            "end": 62,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 65,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 65,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 227,
      "end": 372,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 296,
        "end": 372,
        "body": [
          {
            "type": "ForStatement",
            "start": 302,
            "end": 370,
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
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 352,
                        "end": 359,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 356,
                          "decorators": [],
                          "name": "list",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 357,
                          "end": 358,
                          "decorators": [],
                          "name": "i",
                          "optional": false
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 361,
                        "end": 362,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 350,
                      "end": 351,
                      "decorators": [],
                      "name": "f",
                      "optional": false
                    },
                    "optional": false
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 307,
              "end": 316,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 311,
                  "end": 316,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 315,
                    "end": 316,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 318,
              "end": 333,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 322,
                "end": 333,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 326,
                  "decorators": [],
                  "name": "list",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 333,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 335,
              "end": 338,
              "argument": {
                "type": "Identifier",
                "start": 337,
                "end": 338,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 243,
        "decorators": [],
        "name": "forEach",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 247,
          "end": 256,
          "decorators": [],
          "name": "list",
          "optional": false,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 258,
          "end": 287,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 259,
            "end": 287,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 261,
              "end": 287,
              "params": [
                {
                  "type": "Identifier",
                  "start": 262,
                  "end": 266,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 268,
                  "end": 278,
                  "decorators": [],
                  "name": "n",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 270,
                    "end": 278,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 272,
                      "end": 278
                    }
                  }
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 289,
        "end": 295,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 291,
          "end": 295
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 243,
        "end": 246,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 244,
            "end": 245,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 411,
      "end": 596,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 479,
                  "decorators": [],
                  "name": "ret",
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 482,
                  "end": 484,
                  "elements": []
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 490,
            "end": 577,
            "expression": {
              "type": "CallExpression",
              "start": 490,
              "end": 576,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 498,
                  "end": 500,
                  "decorators": [],
                  "name": "ar",
                  "optional": false
                },
                {
                  "type": "ArrowFunctionExpression",
                  "start": 502,
                  "end": 574,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 510,
                    "end": 574,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 520,
                        "end": 568,
                        "alternate": null,
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
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "start": 554,
                                    "end": 556,
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 545,
                                  "end": 553,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 545,
                                    "end": 548,
                                    "decorators": [],
                                    "name": "ret",
                                    "optional": false
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 549,
                                    "end": 553,
                                    "decorators": [],
                                    "name": "push",
                                    "optional": false
                                  }
                                },
                                "optional": false
                              }
                            }
                          ]
                        },
                        "test": {
                          "type": "CallExpression",
                          "start": 524,
                          "end": 529,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 526,
                              "end": 528,
                              "decorators": [],
                              "name": "el",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 524,
                            "end": 525,
                            "decorators": [],
                            "name": "f",
                            "optional": false
                          },
                          "optional": false
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
                      "start": 503,
                      "end": 505,
                      "decorators": [],
                      "name": "el",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 490,
                "end": 497,
                "decorators": [],
                "name": "forEach",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 583,
            "end": 594,
            "argument": {
              "type": "Identifier",
              "start": 590,
              "end": 593,
              "decorators": [],
              "name": "ret",
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
        "start": 420,
        "end": 426,
        "decorators": [],
        "name": "filter",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 430,
          "end": 450,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 431,
            "end": 450,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 433,
              "end": 450,
              "params": [
                {
                  "type": "Identifier",
                  "start": 434,
                  "end": 438,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
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
          }
        },
        {
          "type": "Identifier",
          "start": 452,
          "end": 459,
          "decorators": [],
          "name": "ar",
          "optional": false,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        }
      ],
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
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 426,
        "end": 429,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 427,
            "end": 428,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 622,
      "end": 684,
      "async": false,
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
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 672,
                "end": 674,
                "decorators": [],
                "name": "ar",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 675,
                "end": 681,
                "decorators": [],
                "name": "length",
                "optional": false
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
        "start": 631,
        "end": 638,
        "decorators": [],
        "name": "length2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 642,
          "end": 649,
          "decorators": [],
          "name": "ar",
          "optional": false,
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
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 650,
        "end": 658,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 652,
          "end": 658
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 638,
        "end": 641,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 639,
            "end": 640,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 639,
              "end": 640,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 725,
      "end": 912,
      "async": false,
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
              "async": false,
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
                      "async": false,
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
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 884,
                                  "end": 886,
                                  "decorators": [],
                                  "name": "ay",
                                  "optional": false
                                },
                                {
                                  "type": "Identifier",
                                  "start": 888,
                                  "end": 890,
                                  "decorators": [],
                                  "name": "by",
                                  "optional": false
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 882,
                                "end": 883,
                                "decorators": [],
                                "name": "f",
                                "optional": false
                              },
                              "optional": false
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
                          "start": 854,
                          "end": 859,
                          "decorators": [],
                          "name": "by",
                          "optional": false,
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
                                "decorators": [],
                                "name": "B",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
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
                  "start": 820,
                  "end": 825,
                  "decorators": [],
                  "name": "ay",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 734,
        "end": 740,
        "decorators": [],
        "name": "curry1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 750,
          "end": 770,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 751,
            "end": 770,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 753,
              "end": 770,
              "params": [
                {
                  "type": "Identifier",
                  "start": 754,
                  "end": 758,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 760,
                  "end": 764,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
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
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  }
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
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 771,
        "end": 796,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 773,
          "end": 796,
          "params": [
            {
              "type": "Identifier",
              "start": 774,
              "end": 779,
              "decorators": [],
              "name": "ax",
              "optional": false,
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
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 785,
                  "end": 790,
                  "decorators": [],
                  "name": "bx",
                  "optional": false,
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
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  }
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
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 740,
        "end": 749,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 741,
            "end": 742,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 741,
              "end": 742,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 744,
            "end": 745,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 744,
              "end": 745,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 747,
            "end": 748,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 747,
              "end": 748,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 918,
            "end": 925,
            "decorators": [],
            "name": "cfilter",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 928,
            "end": 942,
            "arguments": [
              {
                "type": "Identifier",
                "start": 935,
                "end": 941,
                "decorators": [],
                "name": "filter",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 928,
              "end": 934,
              "decorators": [],
              "name": "curry1",
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
      "type": "FunctionDeclaration",
      "start": 1163,
      "end": 1280,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1254,
                  "end": 1261,
                  "decorators": [],
                  "name": "length2",
                  "optional": false
                },
                {
                  "type": "CallExpression",
                  "start": 1263,
                  "end": 1276,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1271,
                      "end": 1275,
                      "decorators": [],
                      "name": "pred",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1263,
                    "end": 1270,
                    "decorators": [],
                    "name": "cfilter",
                    "optional": false
                  },
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1246,
                "end": 1253,
                "decorators": [],
                "name": "compose",
                "optional": false
              },
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
        "start": 1172,
        "end": 1184,
        "decorators": [],
        "name": "countWhere_1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1188,
          "end": 1211,
          "decorators": [],
          "name": "pred",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1192,
            "end": 1211,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1194,
              "end": 1211,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1195,
                  "end": 1199,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1212,
        "end": 1232,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1214,
          "end": 1232,
          "params": [
            {
              "type": "Identifier",
              "start": 1215,
              "end": 1221,
              "decorators": [],
              "name": "a",
              "optional": false,
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
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
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
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1184,
        "end": 1187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1185,
            "end": 1186,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1185,
              "end": 1186,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1282,
      "end": 1422,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1367,
                  "decorators": [],
                  "name": "where",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1370,
                  "end": 1383,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1378,
                      "end": 1382,
                      "decorators": [],
                      "name": "pred",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1370,
                    "end": 1377,
                    "decorators": [],
                    "name": "cfilter",
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
            "type": "ReturnStatement",
            "start": 1389,
            "end": 1420,
            "argument": {
              "type": "CallExpression",
              "start": 1396,
              "end": 1419,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1404,
                  "end": 1411,
                  "decorators": [],
                  "name": "length2",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1418,
                  "decorators": [],
                  "name": "where",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1396,
                "end": 1403,
                "decorators": [],
                "name": "compose",
                "optional": false
              },
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
        "start": 1291,
        "end": 1303,
        "decorators": [],
        "name": "countWhere_2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1307,
          "end": 1330,
          "decorators": [],
          "name": "pred",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1311,
            "end": 1330,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1313,
              "end": 1330,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1314,
                  "end": 1318,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  }
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1331,
        "end": 1351,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 1333,
          "end": 1351,
          "params": [
            {
              "type": "Identifier",
              "start": 1334,
              "end": 1340,
              "decorators": [],
              "name": "a",
              "optional": false,
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
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
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
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1303,
        "end": 1306,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1304,
            "end": 1305,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1304,
              "end": 1305,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
