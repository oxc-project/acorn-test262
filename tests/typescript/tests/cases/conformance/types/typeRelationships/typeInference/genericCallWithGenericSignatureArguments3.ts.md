__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 305,
  "end": 1479,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 305,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 317,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 317,
        "end": 320,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 318,
            "end": 319,
            "name": {
              "type": "Identifier",
              "start": 318,
              "end": 319,
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
          "start": 321,
          "end": 325,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 325,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 324,
              "end": 325,
              "typeName": {
                "type": "Identifier",
                "start": 324,
                "end": 325,
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
          "type": "Identifier",
          "start": 327,
          "end": 341,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 328,
            "end": 341,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 330,
              "end": 341,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 331,
                  "end": 335,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 332,
                    "end": 335,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 334,
                      "end": 335,
                      "typeName": {
                        "type": "Identifier",
                        "start": 334,
                        "end": 335,
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
                "start": 337,
                "end": 341,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 340,
                  "end": 341,
                  "typeName": {
                    "type": "Identifier",
                    "start": 340,
                    "end": 341,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 343,
          "end": 357,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 344,
            "end": 357,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 346,
              "end": 357,
              "typeParameters": null,
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 350,
                        "end": 351,
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
                "start": 353,
                "end": 357,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 356,
                  "end": 357,
                  "typeName": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 357,
                    "decorators": [],
                    "name": "T",
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
        "start": 359,
        "end": 400,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 365,
            "end": 384,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 369,
                "end": 383,
                "id": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 383,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 370,
                    "end": 383,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 372,
                      "end": 383,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 373,
                          "end": 377,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 374,
                            "end": 377,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 376,
                              "end": 377,
                              "typeName": {
                                "type": "Identifier",
                                "start": 376,
                                "end": 377,
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
                        "start": 379,
                        "end": 383,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 382,
                          "end": 383,
                          "typeName": {
                            "type": "Identifier",
                            "start": 382,
                            "end": 383,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
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
            "start": 389,
            "end": 398,
            "argument": {
              "type": "Identifier",
              "start": 396,
              "end": 397,
              "decorators": [],
              "name": "r",
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
      "start": 402,
      "end": 459,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 458,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 408,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 411,
            "end": 458,
            "callee": {
              "type": "Identifier",
              "start": 411,
              "end": 414,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 415,
                "end": 417,
                "value": "",
                "raw": "''"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 419,
                "end": 436,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 420,
                    "end": 429,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 421,
                      "end": 429,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 423,
                        "end": 429
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 434,
                  "end": 436,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 438,
                "end": 457,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 439,
                    "end": 448,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 440,
                      "end": 448,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 442,
                        "end": 448,
                        "typeName": {
                          "type": "Identifier",
                          "start": 442,
                          "end": 448,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 453,
                  "end": 457,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
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
      "start": 474,
      "end": 517,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 478,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 478,
            "end": 482,
            "decorators": [],
            "name": "r1ii",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 485,
            "end": 516,
            "callee": {
              "type": "Identifier",
              "start": 485,
              "end": 488,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 489,
                "end": 491,
                "value": "",
                "raw": "''"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 493,
                "end": 502,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 494,
                    "end": 495,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 500,
                  "end": 502,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 504,
                "end": 515,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 505,
                    "end": 506,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 511,
                  "end": 515,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
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
      "start": 538,
      "end": 593,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 542,
          "end": 592,
          "id": {
            "type": "Identifier",
            "start": 542,
            "end": 544,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 547,
            "end": 592,
            "callee": {
              "type": "Identifier",
              "start": 547,
              "end": 550,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 551,
                "end": 553,
                "value": "",
                "raw": "''"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 555,
                "end": 572,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 556,
                    "end": 565,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 557,
                      "end": 565,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 559,
                        "end": 565
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 570,
                  "end": 572,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 574,
                "end": 591,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 575,
                    "end": 584,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 576,
                      "end": 584,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 578,
                        "end": 584,
                        "typeName": {
                          "type": "Identifier",
                          "start": 578,
                          "end": 584,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 589,
                  "end": 591,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
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
      "start": 614,
      "end": 671,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 618,
          "end": 670,
          "id": {
            "type": "Identifier",
            "start": 618,
            "end": 620,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 623,
            "end": 670,
            "callee": {
              "type": "Identifier",
              "start": 623,
              "end": 626,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 627,
                "end": 631,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 633,
                "end": 650,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 634,
                    "end": 643,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 635,
                      "end": 643,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 637,
                        "end": 643,
                        "typeName": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 643,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 648,
                  "end": 650,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 652,
                "end": 669,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 653,
                    "end": 662,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 654,
                      "end": 662,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 656,
                        "end": 662
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 667,
                  "end": 669,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
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
      "start": 692,
      "end": 733,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 732,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 698,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 701,
            "end": 732,
            "callee": {
              "type": "Identifier",
              "start": 701,
              "end": 704,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 705,
                "end": 709,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 711,
                "end": 720,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 712,
                    "end": 713,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 718,
                  "end": 720,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 722,
                "end": 731,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 723,
                    "end": 724,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 729,
                  "end": 731,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
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
      "start": 748,
      "end": 797,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 752,
          "end": 796,
          "id": {
            "type": "Identifier",
            "start": 752,
            "end": 754,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 757,
            "end": 796,
            "callee": {
              "type": "Identifier",
              "start": 757,
              "end": 760,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 761,
                "end": 773,
                "callee": {
                  "type": "Identifier",
                  "start": 765,
                  "end": 771,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 775,
                "end": 784,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 776,
                    "end": 777,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 782,
                  "end": 784,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 786,
                "end": 795,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 787,
                    "end": 788,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 793,
                  "end": 795,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
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
      "type": "TSEnumDeclaration",
      "start": 819,
      "end": 831,
      "id": {
        "type": "Identifier",
        "start": 824,
        "end": 825,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 826,
        "end": 831,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 828,
            "end": 829,
            "id": {
              "type": "Identifier",
              "start": 828,
              "end": 829,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 832,
      "end": 844,
      "id": {
        "type": "Identifier",
        "start": 837,
        "end": 838,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 839,
        "end": 844,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 841,
            "end": 842,
            "id": {
              "type": "Identifier",
              "start": 841,
              "end": 842,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 846,
      "end": 899,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 850,
          "end": 898,
          "id": {
            "type": "Identifier",
            "start": 850,
            "end": 852,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 855,
            "end": 898,
            "callee": {
              "type": "Identifier",
              "start": 855,
              "end": 858,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 859,
                "end": 862,
                "object": {
                  "type": "Identifier",
                  "start": 859,
                  "end": 860,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 861,
                  "end": 862,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 864,
                "end": 882,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 865,
                    "end": 874,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 866,
                      "end": 874,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 868,
                        "end": 874
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "start": 879,
                  "end": 882,
                  "object": {
                    "type": "Identifier",
                    "start": 879,
                    "end": 880,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 881,
                    "end": 882,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 884,
                "end": 897,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 885,
                    "end": 889,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 886,
                      "end": 889,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 888,
                        "end": 889,
                        "typeName": {
                          "type": "Identifier",
                          "start": 888,
                          "end": 889,
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "start": 894,
                  "end": 897,
                  "object": {
                    "type": "Identifier",
                    "start": 894,
                    "end": 895,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 896,
                    "end": 897,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "id": null,
                "generator": false
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
      "type": "FunctionDeclaration",
      "start": 923,
      "end": 1022,
      "id": {
        "type": "Identifier",
        "start": 932,
        "end": 936,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 936,
        "end": 942,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 937,
            "end": 938,
            "name": {
              "type": "Identifier",
              "start": 937,
              "end": 938,
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
            "start": 940,
            "end": 941,
            "name": {
              "type": "Identifier",
              "start": 940,
              "end": 941,
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
          "start": 943,
          "end": 947,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 944,
            "end": 947,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 946,
              "end": 947,
              "typeName": {
                "type": "Identifier",
                "start": 946,
                "end": 947,
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
          "type": "Identifier",
          "start": 949,
          "end": 963,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 950,
            "end": 963,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 952,
              "end": 963,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 953,
                  "end": 957,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 954,
                    "end": 957,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 956,
                      "end": 957,
                      "typeName": {
                        "type": "Identifier",
                        "start": 956,
                        "end": 957,
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
                "start": 959,
                "end": 963,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 962,
                  "end": 963,
                  "typeName": {
                    "type": "Identifier",
                    "start": 962,
                    "end": 963,
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
        },
        {
          "type": "Identifier",
          "start": 965,
          "end": 979,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 966,
            "end": 979,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 968,
              "end": 979,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 969,
                  "end": 973,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 970,
                    "end": 973,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 972,
                      "end": 973,
                      "typeName": {
                        "type": "Identifier",
                        "start": 972,
                        "end": 973,
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
                "start": 975,
                "end": 979,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 978,
                  "end": 979,
                  "typeName": {
                    "type": "Identifier",
                    "start": 978,
                    "end": 979,
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
        "start": 981,
        "end": 1022,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 987,
            "end": 1006,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 991,
                "end": 1005,
                "id": {
                  "type": "Identifier",
                  "start": 991,
                  "end": 1005,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 992,
                    "end": 1005,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 994,
                      "end": 1005,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 995,
                          "end": 999,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 996,
                            "end": 999,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 998,
                              "end": 999,
                              "typeName": {
                                "type": "Identifier",
                                "start": 998,
                                "end": 999,
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
                        "start": 1001,
                        "end": 1005,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1004,
                          "end": 1005,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1004,
                            "end": 1005,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 1011,
            "end": 1020,
            "argument": {
              "type": "Identifier",
              "start": 1018,
              "end": 1019,
              "decorators": [],
              "name": "r",
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
      "start": 1024,
      "end": 1066,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1028,
          "end": 1065,
          "id": {
            "type": "Identifier",
            "start": 1028,
            "end": 1030,
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1033,
            "end": 1065,
            "callee": {
              "type": "Identifier",
              "start": 1033,
              "end": 1037,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1038,
                "end": 1040,
                "value": "",
                "raw": "''"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1042,
                "end": 1051,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1043,
                    "end": 1044,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1049,
                  "end": 1051,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1053,
                "end": 1064,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1054,
                    "end": 1055,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1060,
                  "end": 1064,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
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
      "start": 1087,
      "end": 1129,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1091,
          "end": 1128,
          "id": {
            "type": "Identifier",
            "start": 1091,
            "end": 1093,
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1096,
            "end": 1128,
            "callee": {
              "type": "Identifier",
              "start": 1096,
              "end": 1100,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1101,
                "end": 1105,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1107,
                "end": 1116,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1108,
                    "end": 1109,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1114,
                  "end": 1116,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1118,
                "end": 1127,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1120,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1125,
                  "end": 1127,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
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
      "start": 1144,
      "end": 1203,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1148,
          "end": 1202,
          "id": {
            "type": "Identifier",
            "start": 1148,
            "end": 1151,
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1154,
            "end": 1202,
            "callee": {
              "type": "Identifier",
              "start": 1154,
              "end": 1158,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1159,
                "end": 1163,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1165,
                "end": 1182,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1166,
                    "end": 1175,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1167,
                      "end": 1175,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1169,
                        "end": 1175,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1169,
                          "end": 1175,
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1180,
                  "end": 1182,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1184,
                "end": 1201,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1185,
                    "end": 1194,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1186,
                      "end": 1194,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1188,
                        "end": 1194
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1199,
                  "end": 1201,
                  "value": "",
                  "raw": "''"
                },
                "id": null,
                "generator": false
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
      "start": 1225,
      "end": 1255,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1229,
          "end": 1254,
          "id": {
            "type": "Identifier",
            "start": 1229,
            "end": 1254,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1230,
              "end": 1254,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1232,
                "end": 1254,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1233,
                    "end": 1242,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1234,
                      "end": 1242,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1236,
                        "end": 1242
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1244,
                  "end": 1254,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1247,
                    "end": 1254
                  }
                }
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
      "start": 1256,
      "end": 1357,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1260,
          "end": 1356,
          "id": {
            "type": "Identifier",
            "start": 1260,
            "end": 1263,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1266,
            "end": 1356,
            "callee": {
              "type": "Identifier",
              "start": 1266,
              "end": 1270,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1271,
                "end": 1272,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1274,
                "end": 1321,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1275,
                    "end": 1300,
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1277,
                      "end": 1300,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1279,
                        "end": 1300,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1280,
                            "end": 1289,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1281,
                              "end": 1289,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1283,
                                "end": 1289
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1291,
                          "end": 1300,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1294,
                            "end": 1300
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 1305,
                  "end": 1321,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1306,
                      "end": 1315,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1307,
                        "end": 1315,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1309,
                          "end": 1315,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1309,
                            "end": 1315,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 1320,
                    "end": 1321,
                    "value": 1,
                    "raw": "1"
                  },
                  "id": null,
                  "generator": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1323,
                "end": 1355,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1324,
                    "end": 1349,
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1326,
                      "end": 1349,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1328,
                        "end": 1349,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1329,
                            "end": 1338,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1330,
                              "end": 1338,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1332,
                                "end": 1338
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1340,
                          "end": 1349,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1343,
                            "end": 1349
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1354,
                  "end": 1355,
                  "value": 2,
                  "raw": "2"
                },
                "id": null,
                "generator": false
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
      "start": 1367,
      "end": 1470,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1371,
          "end": 1469,
          "id": {
            "type": "Identifier",
            "start": 1371,
            "end": 1374,
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1377,
            "end": 1469,
            "callee": {
              "type": "Identifier",
              "start": 1377,
              "end": 1381,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1382,
                "end": 1383,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1385,
                "end": 1433,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1386,
                    "end": 1412,
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1388,
                      "end": 1412,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1390,
                        "end": 1412,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1391,
                            "end": 1400,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1392,
                              "end": 1400,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1394,
                                "end": 1400
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1402,
                          "end": 1412,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1405,
                            "end": 1412
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 1417,
                  "end": 1433,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1418,
                      "end": 1427,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1419,
                        "end": 1427,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1421,
                          "end": 1427,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1421,
                            "end": 1427,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "start": 1432,
                    "end": 1433,
                    "value": 1,
                    "raw": "1"
                  },
                  "id": null,
                  "generator": false
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1435,
                "end": 1468,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1436,
                    "end": 1462,
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1438,
                      "end": 1462,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 1440,
                        "end": 1462,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1441,
                            "end": 1450,
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1442,
                              "end": 1450,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1444,
                                "end": 1450
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 1452,
                          "end": 1462,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1455,
                            "end": 1462
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 1467,
                  "end": 1468,
                  "value": 2,
                  "raw": "2"
                },
                "id": null,
                "generator": false
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
