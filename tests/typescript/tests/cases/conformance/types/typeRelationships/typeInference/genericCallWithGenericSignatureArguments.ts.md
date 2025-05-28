__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 305,
  "end": 1524,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 305,
      "end": 394,
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
          "end": 335,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 335,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 324,
              "end": 335,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 325,
                  "end": 329,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 326,
                    "end": 329,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 328,
                      "end": 329,
                      "typeName": {
                        "type": "Identifier",
                        "start": 328,
                        "end": 329,
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
                "start": 331,
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
          }
        },
        {
          "type": "Identifier",
          "start": 337,
          "end": 351,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 338,
            "end": 351,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 340,
              "end": 351,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 341,
                  "end": 345,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 342,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 345,
                      "typeName": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 345,
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
                "start": 347,
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
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 353,
        "end": 394,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 359,
            "end": 378,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 363,
                "end": 377,
                "id": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 377,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 364,
                    "end": 377,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 366,
                      "end": 377,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 367,
                          "end": 371,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 368,
                            "end": 371,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 370,
                              "end": 371,
                              "typeName": {
                                "type": "Identifier",
                                "start": 370,
                                "end": 371,
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
                        "start": 373,
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
            "start": 383,
            "end": 392,
            "argument": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
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
      "start": 458,
      "end": 493,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 492,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 465,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 468,
            "end": 492,
            "callee": {
              "type": "Identifier",
              "start": 468,
              "end": 471,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 472,
                "end": 480,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 479,
                  "end": 480,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 482,
                "end": 491,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 489,
                  "end": 491,
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
      "start": 506,
      "end": 559,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 510,
          "end": 558,
          "id": {
            "type": "Identifier",
            "start": 510,
            "end": 512,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 515,
            "end": 558,
            "callee": {
              "type": "Identifier",
              "start": 515,
              "end": 518,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 519,
                "end": 538,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 520,
                    "end": 529,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 521,
                      "end": 529,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 523,
                        "end": 529,
                        "typeName": {
                          "type": "Identifier",
                          "start": 523,
                          "end": 529,
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
                  "start": 534,
                  "end": 538,
                  "value": null,
                  "raw": "null"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 540,
                "end": 557,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 541,
                    "end": 550,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 542,
                      "end": 550,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 544,
                        "end": 550
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 555,
                  "end": 557,
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
      "start": 580,
      "end": 632,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 584,
          "end": 631,
          "id": {
            "type": "Identifier",
            "start": 584,
            "end": 586,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 589,
            "end": 631,
            "callee": {
              "type": "Identifier",
              "start": 589,
              "end": 592,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 593,
                "end": 609,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 594,
                    "end": 603,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 595,
                      "end": 603,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 597,
                        "end": 603
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 608,
                  "end": 609,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 611,
                "end": 630,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 612,
                    "end": 621,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 613,
                      "end": 621,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 615,
                        "end": 621,
                        "typeName": {
                          "type": "Identifier",
                          "start": 615,
                          "end": 621,
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
                  "start": 626,
                  "end": 630,
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
      "start": 653,
      "end": 704,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 657,
          "end": 703,
          "id": {
            "type": "Identifier",
            "start": 657,
            "end": 661,
            "decorators": [],
            "name": "r3ii",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 664,
            "end": 703,
            "callee": {
              "type": "Identifier",
              "start": 664,
              "end": 667,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 668,
                "end": 684,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 669,
                    "end": 678,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 670,
                      "end": 678,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 672,
                        "end": 678
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 683,
                  "end": 684,
                  "value": 1,
                  "raw": "1"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 686,
                "end": 702,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 687,
                    "end": 696,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 688,
                      "end": 696,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 690,
                        "end": 696
                      }
                    }
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 701,
                  "end": 702,
                  "value": 1,
                  "raw": "1"
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
      "start": 726,
      "end": 760,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 730,
          "end": 759,
          "id": {
            "type": "Identifier",
            "start": 730,
            "end": 759,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 731,
              "end": 759,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 733,
                "end": 759,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 735,
                    "end": 745,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 735,
                      "end": 736,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 736,
                      "end": 744,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 738,
                        "end": 744
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 746,
                    "end": 757,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 746,
                      "end": 747,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 748,
                      "end": 756,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 750,
                        "end": 756
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 761,
      "end": 795,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 765,
          "end": 794,
          "id": {
            "type": "Identifier",
            "start": 765,
            "end": 794,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 766,
              "end": 794,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 768,
                "end": 794,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 770,
                    "end": 780,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 770,
                      "end": 771,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 771,
                      "end": 779,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 773,
                        "end": 779
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 781,
                    "end": 792,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 781,
                      "end": 782,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 783,
                      "end": 791,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 785,
                        "end": 791
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "start": 797,
      "end": 850,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 801,
          "end": 849,
          "id": {
            "type": "Identifier",
            "start": 801,
            "end": 803,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 806,
            "end": 849,
            "callee": {
              "type": "Identifier",
              "start": 806,
              "end": 809,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 810,
                "end": 828,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 811,
                    "end": 822,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 812,
                      "end": 822,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 814,
                        "end": 822,
                        "exprName": {
                          "type": "Identifier",
                          "start": 821,
                          "end": 822,
                          "decorators": [],
                          "name": "a",
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
                  "type": "Identifier",
                  "start": 827,
                  "end": 828,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 830,
                "end": 848,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 831,
                    "end": 842,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 832,
                      "end": 842,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 834,
                        "end": 842,
                        "exprName": {
                          "type": "Identifier",
                          "start": 841,
                          "end": 842,
                          "decorators": [],
                          "name": "b",
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
                  "type": "Identifier",
                  "start": 847,
                  "end": 848,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 875,
      "end": 928,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 879,
          "end": 927,
          "id": {
            "type": "Identifier",
            "start": 879,
            "end": 881,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 884,
            "end": 927,
            "callee": {
              "type": "Identifier",
              "start": 884,
              "end": 887,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 888,
                "end": 906,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 889,
                    "end": 900,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 890,
                      "end": 900,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 892,
                        "end": 900,
                        "exprName": {
                          "type": "Identifier",
                          "start": 899,
                          "end": 900,
                          "decorators": [],
                          "name": "b",
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
                  "type": "Identifier",
                  "start": 905,
                  "end": 906,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 908,
                "end": 926,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 909,
                    "end": 920,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 910,
                      "end": 920,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 912,
                        "end": 920,
                        "exprName": {
                          "type": "Identifier",
                          "start": 919,
                          "end": 920,
                          "decorators": [],
                          "name": "a",
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
                  "type": "Identifier",
                  "start": 925,
                  "end": 926,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 954,
      "end": 1086,
      "id": {
        "type": "Identifier",
        "start": 963,
        "end": 968,
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 968,
        "end": 971,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 969,
            "end": 970,
            "name": {
              "type": "Identifier",
              "start": 969,
              "end": 970,
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
          "start": 972,
          "end": 976,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 973,
            "end": 976,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 975,
              "end": 976,
              "typeName": {
                "type": "Identifier",
                "start": 975,
                "end": 976,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 978,
        "end": 1086,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 984,
            "end": 1023,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 988,
                "end": 1022,
                "id": {
                  "type": "Identifier",
                  "start": 988,
                  "end": 990,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 993,
                  "end": 1022,
                  "callee": {
                    "type": "Identifier",
                    "start": 993,
                    "end": 996,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 997,
                      "end": 1008,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 998,
                          "end": 1002,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 999,
                            "end": 1002,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1001,
                              "end": 1002,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1001,
                                "end": 1002,
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
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1007,
                        "end": 1008,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1010,
                      "end": 1021,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1011,
                          "end": 1015,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1012,
                            "end": 1015,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1014,
                              "end": 1015,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1014,
                                "end": 1015,
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
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1020,
                        "end": 1021,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 1038,
            "end": 1072,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1042,
                "end": 1071,
                "id": {
                  "type": "Identifier",
                  "start": 1042,
                  "end": 1045,
                  "decorators": [],
                  "name": "r6b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1048,
                  "end": 1071,
                  "callee": {
                    "type": "Identifier",
                    "start": 1048,
                    "end": 1051,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1052,
                      "end": 1060,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1053,
                          "end": 1054,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1059,
                        "end": 1060,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1062,
                      "end": 1070,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1063,
                          "end": 1064,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1069,
                        "end": 1070,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
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
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1088,
      "end": 1306,
      "id": {
        "type": "Identifier",
        "start": 1097,
        "end": 1103,
        "decorators": [],
        "name": "other2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1103,
        "end": 1119,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1104,
            "end": 1118,
            "name": {
              "type": "Identifier",
              "start": 1104,
              "end": 1105,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1114,
              "end": 1118,
              "typeName": {
                "type": "Identifier",
                "start": 1114,
                "end": 1118,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 1120,
          "end": 1124,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1121,
            "end": 1124,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1123,
              "end": 1124,
              "typeName": {
                "type": "Identifier",
                "start": 1123,
                "end": 1124,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1126,
        "end": 1306,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1132,
            "end": 1171,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1136,
                "end": 1170,
                "id": {
                  "type": "Identifier",
                  "start": 1136,
                  "end": 1138,
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1141,
                  "end": 1170,
                  "callee": {
                    "type": "Identifier",
                    "start": 1141,
                    "end": 1144,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1145,
                      "end": 1156,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1146,
                          "end": 1150,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1147,
                            "end": 1150,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1149,
                              "end": 1150,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1149,
                                "end": 1150,
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
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1155,
                        "end": 1156,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1158,
                      "end": 1169,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1159,
                          "end": 1163,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1160,
                            "end": 1163,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1162,
                              "end": 1163,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1162,
                                "end": 1163,
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
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1168,
                        "end": 1169,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 1186,
            "end": 1220,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1190,
                "end": 1219,
                "id": {
                  "type": "Identifier",
                  "start": 1190,
                  "end": 1193,
                  "decorators": [],
                  "name": "r7b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1196,
                  "end": 1219,
                  "callee": {
                    "type": "Identifier",
                    "start": 1196,
                    "end": 1199,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1200,
                      "end": 1208,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1201,
                          "end": 1202,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1207,
                        "end": 1208,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1210,
                      "end": 1218,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1211,
                          "end": 1212,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1217,
                        "end": 1218,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
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
            "start": 1237,
            "end": 1255,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1241,
                "end": 1254,
                "id": {
                  "type": "Identifier",
                  "start": 1241,
                  "end": 1243,
                  "decorators": [],
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1246,
                  "end": 1254,
                  "callee": {
                    "type": "Identifier",
                    "start": 1246,
                    "end": 1248,
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1249,
                      "end": 1253,
                      "value": null,
                      "raw": "null"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1309,
      "end": 1412,
      "id": {
        "type": "Identifier",
        "start": 1318,
        "end": 1322,
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
        "start": 1322,
        "end": 1338,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1323,
            "end": 1337,
            "name": {
              "type": "Identifier",
              "start": 1323,
              "end": 1324,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1333,
              "end": 1337,
              "typeName": {
                "type": "Identifier",
                "start": 1333,
                "end": 1337,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 1339,
          "end": 1353,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1340,
            "end": 1353,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1342,
              "end": 1353,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1343,
                  "end": 1347,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1344,
                    "end": 1347,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1346,
                      "end": 1347,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1346,
                        "end": 1347,
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
                "start": 1349,
                "end": 1353,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1352,
                  "end": 1353,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1352,
                    "end": 1353,
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
          "start": 1355,
          "end": 1369,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1356,
            "end": 1369,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1358,
              "end": 1369,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1359,
                  "end": 1363,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1360,
                    "end": 1363,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1362,
                      "end": 1363,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1362,
                        "end": 1363,
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
                "start": 1365,
                "end": 1369,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1368,
                  "end": 1369,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1368,
                    "end": 1369,
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
        "start": 1371,
        "end": 1412,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1377,
            "end": 1396,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1381,
                "end": 1395,
                "id": {
                  "type": "Identifier",
                  "start": 1381,
                  "end": 1395,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1382,
                    "end": 1395,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1384,
                      "end": 1395,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1385,
                          "end": 1389,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1386,
                            "end": 1389,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1388,
                              "end": 1389,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1388,
                                "end": 1389,
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
                        "start": 1391,
                        "end": 1395,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1394,
                          "end": 1395,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1394,
                            "end": 1395,
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
            "start": 1401,
            "end": 1410,
            "argument": {
              "type": "Identifier",
              "start": 1408,
              "end": 1409,
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
      "type": "FunctionDeclaration",
      "start": 1414,
      "end": 1524,
      "id": {
        "type": "Identifier",
        "start": 1423,
        "end": 1429,
        "decorators": [],
        "name": "other3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1429,
        "end": 1447,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1430,
            "end": 1446,
            "name": {
              "type": "Identifier",
              "start": 1430,
              "end": 1431,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1440,
              "end": 1446,
              "typeName": {
                "type": "Identifier",
                "start": 1440,
                "end": 1446,
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 1448,
          "end": 1452,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1449,
            "end": 1452,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1451,
              "end": 1452,
              "typeName": {
                "type": "Identifier",
                "start": 1451,
                "end": 1452,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1454,
        "end": 1524,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1460,
            "end": 1506,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1464,
                "end": 1505,
                "id": {
                  "type": "Identifier",
                  "start": 1464,
                  "end": 1466,
                  "decorators": [],
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1469,
                  "end": 1505,
                  "callee": {
                    "type": "Identifier",
                    "start": 1469,
                    "end": 1473,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1474,
                      "end": 1488,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1475,
                          "end": 1482,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1476,
                            "end": 1482,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1478,
                              "end": 1482,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1478,
                                "end": 1482,
                                "decorators": [],
                                "name": "Date",
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
                        "type": "Identifier",
                        "start": 1487,
                        "end": 1488,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1490,
                      "end": 1504,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1491,
                          "end": 1498,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1492,
                            "end": 1498,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1494,
                              "end": 1498,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1494,
                                "end": 1498,
                                "decorators": [],
                                "name": "Date",
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
                        "type": "Identifier",
                        "start": 1503,
                        "end": 1504,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
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
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
