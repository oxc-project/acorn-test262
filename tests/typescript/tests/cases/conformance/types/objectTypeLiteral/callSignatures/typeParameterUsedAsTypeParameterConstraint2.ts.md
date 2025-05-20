__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 103,
  "end": 1408,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 103,
      "end": 315,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 144,
        "end": 315,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 150,
            "end": 313,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 191,
              "end": 313,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 201,
                  "end": 307,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 255,
                    "end": 307,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 269,
                        "end": 275,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 269,
                          "end": 274,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 269,
                            "end": 270,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 273,
                            "end": 274,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 288,
                        "end": 297,
                        "argument": {
                          "type": "Identifier",
                          "start": 295,
                          "end": 296,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 213,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 240,
                      "end": 244,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 241,
                        "end": 244,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 243,
                          "end": 244,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 243,
                            "end": 244,
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 246,
                      "end": 250,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 247,
                        "end": 250,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 249,
                          "end": 250,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 250,
                            "decorators": [],
                            "name": "Y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 251,
                    "end": 254,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 253,
                      "end": 254,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 213,
                    "end": 239,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 214,
                        "end": 225,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 224,
                          "end": 225,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 225,
                            "decorators": [],
                            "name": "W",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 215,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 227,
                        "end": 238,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 237,
                          "end": 238,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 238,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 227,
                          "end": 228,
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
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
              "start": 159,
              "end": 162,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 162,
              "end": 188,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 163,
                  "end": 174,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 173,
                    "end": 174,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 164,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 176,
                  "end": 187,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 186,
                    "end": 187,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 186,
                      "end": 187,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
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
        "start": 112,
        "end": 115,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 132,
          "end": 136,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 133,
            "end": 136,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 135,
              "end": 136,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 138,
          "end": 142,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 139,
            "end": 142,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 141,
              "end": 142,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 117,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 119,
            "end": 130,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 129,
              "end": 130,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 317,
      "end": 530,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 359,
        "end": 530,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 365,
            "end": 528,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 406,
              "end": 528,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 416,
                  "end": 522,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 470,
                    "end": 522,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 484,
                        "end": 490,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 484,
                          "end": 489,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 484,
                            "end": 485,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 488,
                            "end": 489,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 503,
                        "end": 512,
                        "argument": {
                          "type": "Identifier",
                          "start": 510,
                          "end": 511,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 428,
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 455,
                      "end": 459,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 456,
                        "end": 459,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 458,
                          "end": 459,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 459,
                            "decorators": [],
                            "name": "X",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "start": 461,
                      "end": 465,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 462,
                        "end": 465,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 464,
                          "end": 465,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 464,
                            "end": 465,
                            "decorators": [],
                            "name": "Y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 466,
                    "end": 469,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 468,
                      "end": 469,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 468,
                        "end": 469,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 428,
                    "end": 454,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 429,
                        "end": 440,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 439,
                          "end": 440,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 439,
                            "end": 440,
                            "decorators": [],
                            "name": "W",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 429,
                          "end": 430,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 442,
                        "end": 453,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 452,
                          "end": 453,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 452,
                            "end": 453,
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 442,
                          "end": 443,
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
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
              "start": 374,
              "end": 377,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 377,
              "end": 403,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 378,
                  "end": 389,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 388,
                    "end": 389,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 388,
                      "end": 389,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 379,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 391,
                  "end": 402,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 401,
                    "end": 402,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 402,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 392,
                    "decorators": [],
                    "name": "W",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
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
        "start": 326,
        "end": 330,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 347,
          "end": 351,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 348,
            "end": 351,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 350,
              "end": 351,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 350,
                "end": 351,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 353,
          "end": 357,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 354,
            "end": 357,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 356,
              "end": 357,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 330,
        "end": 346,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 331,
            "end": 342,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 341,
              "end": 342,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 331,
              "end": 332,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 344,
            "end": 345,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 532,
      "end": 754,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 536,
          "end": 754,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 536,
            "end": 537,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 540,
            "end": 754,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 578,
              "end": 754,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 584,
                  "end": 752,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 625,
                    "end": 752,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 635,
                        "end": 746,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 639,
                            "end": 746,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 639,
                              "end": 640,
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "FunctionExpression",
                              "start": 643,
                              "end": 746,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 694,
                                "end": 746,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 708,
                                    "end": 714,
                                    "directive": null,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 708,
                                      "end": 713,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 708,
                                        "end": 709,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 712,
                                        "end": 713,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 727,
                                    "end": 736,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 734,
                                      "end": 735,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                  "start": 679,
                                  "end": 683,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 680,
                                    "end": 683,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 682,
                                      "end": 683,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 682,
                                        "end": 683,
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 685,
                                  "end": 689,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 686,
                                    "end": 689,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 688,
                                      "end": 689,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 688,
                                        "end": 689,
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 690,
                                "end": 693,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 692,
                                  "end": 693,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 692,
                                    "end": 693,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 652,
                                "end": 678,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 653,
                                    "end": 664,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 663,
                                      "end": 664,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 663,
                                        "end": 664,
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "default": null,
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 653,
                                      "end": 654,
                                      "decorators": [],
                                      "name": "X",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "out": false
                                  },
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 666,
                                    "end": 677,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 676,
                                      "end": 677,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 676,
                                        "end": 677,
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "default": null,
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 666,
                                      "end": 667,
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null
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
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 593,
                    "end": 596,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": null,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 596,
                    "end": 622,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 597,
                        "end": 608,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 607,
                          "end": 608,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 607,
                            "end": 608,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 597,
                          "end": 598,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 610,
                        "end": 621,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 620,
                          "end": 621,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 620,
                            "end": 621,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 610,
                          "end": 611,
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
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
                "start": 566,
                "end": 570,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 567,
                  "end": 570,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 569,
                    "end": 570,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 569,
                      "end": 570,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 572,
                "end": 576,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 573,
                  "end": 576,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 575,
                    "end": 576,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 576,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 549,
              "end": 565,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 550,
                  "end": 551,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 550,
                    "end": 551,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 553,
                  "end": 564,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 563,
                    "end": 564,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 563,
                      "end": 564,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 553,
                    "end": 554,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 756,
      "end": 982,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 760,
          "end": 982,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 760,
            "end": 762,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 765,
            "end": 982,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 803,
              "end": 982,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 809,
                  "end": 980,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 850,
                    "end": 980,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 860,
                        "end": 974,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 864,
                            "end": 974,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 864,
                              "end": 865,
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "FunctionExpression",
                              "start": 868,
                              "end": 974,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 922,
                                "end": 974,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 936,
                                    "end": 942,
                                    "directive": null,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 936,
                                      "end": 941,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 936,
                                        "end": 937,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 940,
                                        "end": 941,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 955,
                                    "end": 964,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 962,
                                      "end": 963,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": {
                                "type": "Identifier",
                                "start": 877,
                                "end": 880,
                                "decorators": [],
                                "name": "baz",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 907,
                                  "end": 911,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 908,
                                    "end": 911,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 910,
                                      "end": 911,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 910,
                                        "end": 911,
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 913,
                                  "end": 917,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 914,
                                    "end": 917,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 916,
                                      "end": 917,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 916,
                                        "end": 917,
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 918,
                                "end": 921,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 920,
                                  "end": 921,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 920,
                                    "end": 921,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 880,
                                "end": 906,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 881,
                                    "end": 892,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 891,
                                      "end": 892,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 891,
                                        "end": 892,
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "default": null,
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 881,
                                      "end": 882,
                                      "decorators": [],
                                      "name": "X",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "out": false
                                  },
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 894,
                                    "end": 905,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 904,
                                      "end": 905,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 904,
                                        "end": 905,
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "default": null,
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 894,
                                      "end": 895,
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null
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
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 818,
                    "end": 821,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": null,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 821,
                    "end": 847,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 822,
                        "end": 833,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 832,
                          "end": 833,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 832,
                            "end": 833,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 822,
                          "end": 823,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 835,
                        "end": 846,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 845,
                          "end": 846,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 845,
                            "end": 846,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 835,
                          "end": 836,
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
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
                "start": 791,
                "end": 795,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 792,
                  "end": 795,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 794,
                    "end": 795,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 794,
                      "end": 795,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 797,
                "end": 801,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 798,
                  "end": 801,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 800,
                    "end": 801,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 800,
                      "end": 801,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 774,
              "end": 790,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 775,
                  "end": 786,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 785,
                    "end": 786,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 785,
                      "end": 786,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 775,
                    "end": 776,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 788,
                  "end": 789,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 788,
                    "end": 789,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 984,
      "end": 1195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 988,
          "end": 1195,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 988,
            "end": 990,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 993,
            "end": 1195,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1025,
              "end": 1195,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 1031,
                  "end": 1193,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1072,
                    "end": 1193,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1082,
                        "end": 1187,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1086,
                            "end": 1187,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1086,
                              "end": 1087,
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "start": 1090,
                              "end": 1187,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 1135,
                                "end": 1187,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1149,
                                    "end": 1155,
                                    "directive": null,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 1149,
                                      "end": 1154,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1149,
                                        "end": 1150,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1153,
                                        "end": 1154,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1168,
                                    "end": 1177,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 1175,
                                      "end": 1176,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                  "start": 1117,
                                  "end": 1121,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1118,
                                    "end": 1121,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1120,
                                      "end": 1121,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1120,
                                        "end": 1121,
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1123,
                                  "end": 1127,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1124,
                                    "end": 1127,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1126,
                                      "end": 1127,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1126,
                                        "end": 1127,
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1128,
                                "end": 1131,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1130,
                                  "end": 1131,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1130,
                                    "end": 1131,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1090,
                                "end": 1116,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1091,
                                    "end": 1102,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1101,
                                      "end": 1102,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1101,
                                        "end": 1102,
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "default": null,
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1091,
                                      "end": 1092,
                                      "decorators": [],
                                      "name": "X",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "out": false
                                  },
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1104,
                                    "end": 1115,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1114,
                                      "end": 1115,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1114,
                                        "end": 1115,
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "default": null,
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1104,
                                      "end": 1105,
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null
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
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1040,
                    "end": 1043,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": null,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1043,
                    "end": 1069,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1044,
                        "end": 1055,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1054,
                          "end": 1055,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1054,
                            "end": 1055,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1044,
                          "end": 1045,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1057,
                        "end": 1068,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1067,
                          "end": 1068,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1067,
                            "end": 1068,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1057,
                          "end": 1058,
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
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
                "start": 1010,
                "end": 1014,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1011,
                  "end": 1014,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1013,
                    "end": 1014,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1013,
                      "end": 1014,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1016,
                "end": 1020,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1017,
                  "end": 1020,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1019,
                    "end": 1020,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1019,
                      "end": 1020,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 993,
              "end": 1009,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 994,
                  "end": 995,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 994,
                    "end": 995,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 997,
                  "end": 1008,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1007,
                    "end": 1008,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1007,
                      "end": 1008,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 997,
                    "end": 998,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
      "start": 1197,
      "end": 1408,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1201,
          "end": 1408,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1201,
            "end": 1203,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1206,
            "end": 1408,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1238,
              "end": 1408,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 1244,
                  "end": 1406,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1285,
                    "end": 1406,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1295,
                        "end": 1400,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1299,
                            "end": 1400,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1299,
                              "end": 1300,
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "start": 1303,
                              "end": 1400,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 1348,
                                "end": 1400,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 1362,
                                    "end": 1368,
                                    "directive": null,
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "start": 1362,
                                      "end": 1367,
                                      "operator": "=",
                                      "left": {
                                        "type": "Identifier",
                                        "start": 1362,
                                        "end": 1363,
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 1366,
                                        "end": 1367,
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  },
                                  {
                                    "type": "ReturnStatement",
                                    "start": 1381,
                                    "end": 1390,
                                    "argument": {
                                      "type": "Identifier",
                                      "start": 1388,
                                      "end": 1389,
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null
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
                                  "start": 1330,
                                  "end": 1334,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1331,
                                    "end": 1334,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1333,
                                      "end": 1334,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1333,
                                        "end": 1334,
                                        "decorators": [],
                                        "name": "X",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1336,
                                  "end": 1340,
                                  "decorators": [],
                                  "name": "b",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1337,
                                    "end": 1340,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1339,
                                      "end": 1340,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1339,
                                        "end": 1340,
                                        "decorators": [],
                                        "name": "Y",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1341,
                                "end": 1344,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1343,
                                  "end": 1344,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1343,
                                    "end": 1344,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1303,
                                "end": 1329,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1304,
                                    "end": 1315,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1314,
                                      "end": 1315,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1314,
                                        "end": 1315,
                                        "decorators": [],
                                        "name": "W",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "default": null,
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1304,
                                      "end": 1305,
                                      "decorators": [],
                                      "name": "X",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "out": false
                                  },
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1317,
                                    "end": 1328,
                                    "const": false,
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1327,
                                      "end": 1328,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1327,
                                        "end": 1328,
                                        "decorators": [],
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "default": null,
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1317,
                                      "end": 1318,
                                      "decorators": [],
                                      "name": "Y",
                                      "optional": false,
                                      "typeAnnotation": null
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
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1253,
                    "end": 1256,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": null,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1256,
                    "end": 1282,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1257,
                        "end": 1268,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1267,
                          "end": 1268,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1267,
                            "end": 1268,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1257,
                          "end": 1258,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 1270,
                        "end": 1281,
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1280,
                          "end": 1281,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1280,
                            "end": 1281,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "default": null,
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 1270,
                          "end": 1271,
                          "decorators": [],
                          "name": "W",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "out": false
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
                "start": 1223,
                "end": 1227,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1224,
                  "end": 1227,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1226,
                    "end": 1227,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1226,
                      "end": 1227,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1229,
                "end": 1233,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1230,
                  "end": 1233,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1232,
                    "end": 1233,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1232,
                      "end": 1233,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1206,
              "end": 1222,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1207,
                  "end": 1218,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1217,
                    "end": 1218,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1217,
                      "end": 1218,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1207,
                    "end": 1208,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1220,
                  "end": 1221,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1220,
                    "end": 1221,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
