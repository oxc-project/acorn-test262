__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 801,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 118,
      "body": {
        "type": "TSInterfaceBody",
        "start": 26,
        "end": 118,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 32,
            "end": 116,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 36,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 49,
                "end": 95,
                "decorators": [],
                "name": "onFulfilled",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 60,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 62,
                    "end": 95,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 75,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 68,
                          "end": 75,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 70,
                            "end": 75,
                            "typeName": {
                              "type": "Identifier",
                              "start": 70,
                              "end": 75,
                              "decorators": [],
                              "name": "Value",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 80,
                        "end": 95,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 80,
                            "end": 81,
                            "typeName": {
                              "type": "Identifier",
                              "start": 80,
                              "end": 81,
                              "decorators": [],
                              "name": "V",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 84,
                            "end": 95,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 92,
                              "end": 95,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 93,
                                  "end": 94,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 93,
                                    "end": 94,
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 84,
                              "end": 92,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 104,
                "end": 115,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 112,
                  "end": 115,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 113,
                      "end": 114,
                      "typeName": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 114,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 112,
                  "decorators": [],
                  "name": "Thenable",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 36,
              "end": 39,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 37,
                  "end": 38,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "decorators": [],
                    "name": "V",
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
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "Thenable",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 24,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 24,
              "decorators": [],
              "name": "Value",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 476,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 136,
            "decorators": [],
            "name": "toThenable",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 139,
            "end": 476,
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 211,
              "end": 476,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 247,
                "end": 476,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 257,
                    "end": 281,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 263,
                        "end": 281,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 269,
                          "decorators": [],
                          "name": "result",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 272,
                          "end": 281,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 275,
                              "end": 280,
                              "decorators": [],
                              "name": "input",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 272,
                            "end": 274,
                            "decorators": [],
                            "name": "fn",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 290,
                    "end": 470,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 297,
                      "end": 469,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 311,
                          "end": 459,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 311,
                            "end": 315,
                            "decorators": [],
                            "name": "then",
                            "optional": false
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 315,
                            "end": 459,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 368,
                              "end": 459,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 386,
                                  "end": 445,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 393,
                                    "end": 445,
                                    "arguments": [
                                      {
                                        "type": "TSAsExpression",
                                        "start": 428,
                                        "end": 444,
                                        "expression": {
                                          "type": "Identifier",
                                          "start": 428,
                                          "end": 434,
                                          "decorators": [],
                                          "name": "result",
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 438,
                                          "end": 444,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 438,
                                            "end": 444,
                                            "decorators": [],
                                            "name": "Result",
                                            "optional": false
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "CallExpression",
                                      "start": 393,
                                      "end": 427,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 415,
                                          "end": 426,
                                          "decorators": [],
                                          "name": "onFulfilled",
                                          "optional": false
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 393,
                                        "end": 403,
                                        "decorators": [],
                                        "name": "toThenable",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "start": 403,
                                        "end": 414,
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 404,
                                            "end": 405,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 404,
                                              "end": 405,
                                              "decorators": [],
                                              "name": "V",
                                              "optional": false
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 407,
                                            "end": 413,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 407,
                                              "end": 413,
                                              "decorators": [],
                                              "name": "Result",
                                              "optional": false
                                            }
                                          }
                                        ]
                                      }
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
                                "start": 319,
                                "end": 366,
                                "decorators": [],
                                "name": "onFulfilled",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 330,
                                  "end": 366,
                                  "typeAnnotation": {
                                    "type": "TSFunctionType",
                                    "start": 332,
                                    "end": 366,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "start": 333,
                                        "end": 346,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "start": 338,
                                          "end": 346,
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 340,
                                            "end": 346,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 340,
                                              "end": 346,
                                              "decorators": [],
                                              "name": "Result",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "start": 348,
                                      "end": 366,
                                      "typeAnnotation": {
                                        "type": "TSUnionType",
                                        "start": 351,
                                        "end": 366,
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "start": 351,
                                            "end": 352,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 351,
                                              "end": 352,
                                              "decorators": [],
                                              "name": "V",
                                              "optional": false
                                            }
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "start": 355,
                                            "end": 366,
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "start": 363,
                                              "end": 366,
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "start": 364,
                                                  "end": 365,
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "start": 364,
                                                    "end": 365,
                                                    "decorators": [],
                                                    "name": "V",
                                                    "optional": false
                                                  }
                                                }
                                              ]
                                            },
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 355,
                                              "end": 363,
                                              "decorators": [],
                                              "name": "Thenable",
                                              "optional": false
                                            }
                                          }
                                        ]
                                      }
                                    }
                                  }
                                }
                              }
                            ],
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 315,
                              "end": 318,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 316,
                                  "end": 317,
                                  "const": false,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 316,
                                    "end": 317,
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false
                                  },
                                  "out": false
                                }
                              ]
                            }
                          }
                        }
                      ]
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
                  "start": 212,
                  "end": 224,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 217,
                    "end": 224,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 219,
                      "end": 224,
                      "typeName": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 224,
                        "decorators": [],
                        "name": "Input",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 225,
                "end": 243,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 227,
                  "end": 243,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 235,
                    "end": 243,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 236,
                        "end": 242,
                        "typeName": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 242,
                          "decorators": [],
                          "name": "Result",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 235,
                    "decorators": [],
                    "name": "Thenable",
                    "optional": false
                  }
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 155,
                "end": 202,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 157,
                  "end": 202,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 159,
                    "end": 202,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 160,
                        "end": 172,
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 165,
                          "end": 172,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 167,
                            "end": 172,
                            "typeName": {
                              "type": "Identifier",
                              "start": 167,
                              "end": 172,
                              "decorators": [],
                              "name": "Input",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 174,
                      "end": 202,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 177,
                        "end": 202,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 177,
                            "end": 183,
                            "typeName": {
                              "type": "Identifier",
                              "start": 177,
                              "end": 183,
                              "decorators": [],
                              "name": "Result",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 186,
                            "end": 202,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 194,
                              "end": 202,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 195,
                                  "end": 201,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 195,
                                    "end": 201,
                                    "decorators": [],
                                    "name": "Result",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 186,
                              "end": 194,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 139,
              "end": 154,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 140,
                  "end": 146,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 146,
                    "decorators": [],
                    "name": "Result",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 148,
                  "end": 153,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 153,
                    "decorators": [],
                    "name": "Input",
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
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 800,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 484,
          "end": 800,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 484,
            "end": 502,
            "decorators": [],
            "name": "toThenableInferred",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 505,
            "end": 800,
            "async": false,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 577,
              "end": 800,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 613,
                "end": 800,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 623,
                    "end": 647,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 629,
                        "end": 647,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 629,
                          "end": 635,
                          "decorators": [],
                          "name": "result",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 638,
                          "end": 647,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 641,
                              "end": 646,
                              "decorators": [],
                              "name": "input",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 638,
                            "end": 640,
                            "decorators": [],
                            "name": "fn",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 656,
                    "end": 794,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 663,
                      "end": 793,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 677,
                          "end": 783,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 677,
                            "end": 681,
                            "decorators": [],
                            "name": "then",
                            "optional": false
                          },
                          "kind": "init",
                          "method": true,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 681,
                            "end": 783,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 695,
                              "end": 783,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 713,
                                  "end": 769,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 720,
                                    "end": 769,
                                    "arguments": [
                                      {
                                        "type": "TSAsExpression",
                                        "start": 752,
                                        "end": 768,
                                        "expression": {
                                          "type": "Identifier",
                                          "start": 752,
                                          "end": 758,
                                          "decorators": [],
                                          "name": "result",
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 762,
                                          "end": 768,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 762,
                                            "end": 768,
                                            "decorators": [],
                                            "name": "Result",
                                            "optional": false
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "CallExpression",
                                      "start": 720,
                                      "end": 751,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "start": 739,
                                          "end": 750,
                                          "decorators": [],
                                          "name": "onFulfilled",
                                          "optional": false
                                        }
                                      ],
                                      "callee": {
                                        "type": "Identifier",
                                        "start": 720,
                                        "end": 738,
                                        "decorators": [],
                                        "name": "toThenableInferred",
                                        "optional": false
                                      },
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
                                "start": 682,
                                "end": 693,
                                "decorators": [],
                                "name": "onFulfilled",
                                "optional": false
                              }
                            ]
                          }
                        }
                      ]
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
                  "start": 578,
                  "end": 590,
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 583,
                    "end": 590,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 585,
                      "end": 590,
                      "typeName": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 590,
                        "decorators": [],
                        "name": "Input",
                        "optional": false
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 591,
                "end": 609,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 593,
                  "end": 609,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 601,
                    "end": 609,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 602,
                        "end": 608,
                        "typeName": {
                          "type": "Identifier",
                          "start": 602,
                          "end": 608,
                          "decorators": [],
                          "name": "Result",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 593,
                    "end": 601,
                    "decorators": [],
                    "name": "Thenable",
                    "optional": false
                  }
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 521,
                "end": 568,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 523,
                  "end": 568,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 525,
                    "end": 568,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 526,
                        "end": 538,
                        "decorators": [],
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 531,
                          "end": 538,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 533,
                            "end": 538,
                            "typeName": {
                              "type": "Identifier",
                              "start": 533,
                              "end": 538,
                              "decorators": [],
                              "name": "Input",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 540,
                      "end": 568,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 543,
                        "end": 568,
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "start": 543,
                            "end": 549,
                            "typeName": {
                              "type": "Identifier",
                              "start": 543,
                              "end": 549,
                              "decorators": [],
                              "name": "Result",
                              "optional": false
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 552,
                            "end": 568,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 560,
                              "end": 568,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 561,
                                  "end": 567,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 561,
                                    "end": 567,
                                    "decorators": [],
                                    "name": "Result",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 552,
                              "end": 560,
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false
                            }
                          }
                        ]
                      }
                    }
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 505,
              "end": 520,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 506,
                  "end": 512,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 512,
                    "decorators": [],
                    "name": "Result",
                    "optional": false
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 514,
                  "end": 519,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 519,
                    "decorators": [],
                    "name": "Input",
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
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
