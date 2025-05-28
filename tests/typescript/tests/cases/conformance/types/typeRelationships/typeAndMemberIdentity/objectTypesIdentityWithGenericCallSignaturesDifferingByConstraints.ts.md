__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 335,
  "end": 2535,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 401,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 342,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 343,
        "end": 401,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 399,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 352,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 399,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 352,
                "end": 368,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 353,
                    "end": 367,
                    "name": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 354,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 363,
                      "end": 367,
                      "typeName": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 367,
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
                  "start": 369,
                  "end": 373,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 370,
                    "end": 373,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 372,
                      "end": 373,
                      "typeName": {
                        "type": "Identifier",
                        "start": 372,
                        "end": 373,
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
                "start": 374,
                "end": 382,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 376,
                  "end": 382
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 383,
                "end": 399,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 385,
                    "end": 397,
                    "argument": {
                      "type": "Literal",
                      "start": 392,
                      "end": 396,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 403,
      "end": 478,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 410,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 410,
        "end": 435,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 411,
            "end": 434,
            "name": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 421,
              "end": 434,
              "typeName": {
                "type": "Identifier",
                "start": 421,
                "end": 426,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 426,
                "end": 434,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 427,
                    "end": 433
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 436,
        "end": 478,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 442,
            "end": 476,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 445,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 445,
              "end": 476,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 446,
                  "end": 450,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 447,
                    "end": 450,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 449,
                      "end": 450,
                      "typeName": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 450,
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
                "start": 451,
                "end": 459,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 453,
                  "end": 459
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 460,
                "end": 476,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 462,
                    "end": 474,
                    "argument": {
                      "type": "Literal",
                      "start": 469,
                      "end": 473,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 480,
      "end": 548,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 486,
        "end": 487,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 487,
        "end": 505,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 488,
            "end": 504,
            "name": {
              "type": "Identifier",
              "start": 488,
              "end": 489,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 498,
              "end": 504,
              "typeName": {
                "type": "Identifier",
                "start": 498,
                "end": 504,
                "decorators": [],
                "name": "String",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 506,
        "end": 548,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 512,
            "end": 546,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 515,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 515,
              "end": 546,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 516,
                  "end": 520,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 517,
                    "end": 520,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 519,
                      "end": 520,
                      "typeName": {
                        "type": "Identifier",
                        "start": 519,
                        "end": 520,
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
                "start": 521,
                "end": 529,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 523,
                  "end": 529
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 530,
                "end": 546,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 532,
                    "end": 544,
                    "argument": {
                      "type": "Literal",
                      "start": 539,
                      "end": 543,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 550,
      "end": 606,
      "id": {
        "type": "Identifier",
        "start": 560,
        "end": 561,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 561,
        "end": 579,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 562,
            "end": 578,
            "name": {
              "type": "Identifier",
              "start": 562,
              "end": 563,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 572,
              "end": 578,
              "typeName": {
                "type": "Identifier",
                "start": 572,
                "end": 578,
                "decorators": [],
                "name": "Number",
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 580,
        "end": 606,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 586,
            "end": 604,
            "key": {
              "type": "Identifier",
              "start": 586,
              "end": 589,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 590,
                "end": 594,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 591,
                  "end": 594,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 593,
                    "end": 594,
                    "typeName": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 594,
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
              "start": 595,
              "end": 603,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 597,
                "end": 603
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
      "type": "TSInterfaceDeclaration",
      "start": 608,
      "end": 666,
      "id": {
        "type": "Identifier",
        "start": 618,
        "end": 620,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 621,
        "end": 666,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 627,
            "end": 664,
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 630,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 630,
              "end": 649,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 631,
                  "end": 648,
                  "name": {
                    "type": "Identifier",
                    "start": 631,
                    "end": 632,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 641,
                    "end": 648,
                    "typeName": {
                      "type": "Identifier",
                      "start": 641,
                      "end": 648,
                      "decorators": [],
                      "name": "Boolean",
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
                "start": 650,
                "end": 654,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 651,
                  "end": 654,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 653,
                    "end": 654,
                    "typeName": {
                      "type": "Identifier",
                      "start": 653,
                      "end": 654,
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
              "start": 655,
              "end": 663,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 657,
                "end": 663
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
      "start": 668,
      "end": 721,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 672,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 721,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 673,
              "end": 721,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 675,
                "end": 721,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 677,
                    "end": 719,
                    "key": {
                      "type": "Identifier",
                      "start": 677,
                      "end": 680,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 680,
                      "end": 705,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 681,
                          "end": 704,
                          "name": {
                            "type": "Identifier",
                            "start": 681,
                            "end": 682,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 691,
                            "end": 704,
                            "typeName": {
                              "type": "Identifier",
                              "start": 691,
                              "end": 696,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 696,
                              "end": 704,
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 697,
                                  "end": 703
                                }
                              ]
                            }
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
                        "start": 706,
                        "end": 710,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 707,
                          "end": 710,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 709,
                            "end": 710,
                            "typeName": {
                              "type": "Identifier",
                              "start": 709,
                              "end": 710,
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
                      "start": 711,
                      "end": 719,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 713,
                        "end": 719
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 722,
      "end": 777,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 726,
          "end": 776,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 727,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 730,
            "end": 776,
            "properties": [
              {
                "type": "Property",
                "start": 732,
                "end": 774,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 732,
                  "end": 735,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 735,
                  "end": 774,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 735,
                    "end": 753,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 736,
                        "end": 752,
                        "name": {
                          "type": "Identifier",
                          "start": 736,
                          "end": 737,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 746,
                          "end": 752,
                          "typeName": {
                            "type": "Identifier",
                            "start": 746,
                            "end": 752,
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
                      "start": 754,
                      "end": 758,
                      "decorators": [],
                      "name": "x",
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
                    "start": 760,
                    "end": 774,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 762,
                        "end": 772,
                        "argument": {
                          "type": "Literal",
                          "start": 769,
                          "end": 771,
                          "value": "",
                          "raw": "''"
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 779,
      "end": 799,
      "id": {
        "type": "Identifier",
        "start": 788,
        "end": 792,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 793,
          "end": 797,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 794,
            "end": 797,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 796,
              "end": 797,
              "typeName": {
                "type": "Identifier",
                "start": 796,
                "end": 797,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 800,
      "end": 820,
      "id": {
        "type": "Identifier",
        "start": 809,
        "end": 813,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 814,
          "end": 818,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 815,
            "end": 818,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 817,
              "end": 818,
              "typeName": {
                "type": "Identifier",
                "start": 817,
                "end": 818,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 830,
      "end": 855,
      "id": {
        "type": "Identifier",
        "start": 839,
        "end": 843,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 844,
          "end": 850,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 845,
            "end": 850,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 847,
              "end": 850
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 852,
        "end": 855,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 857,
      "end": 893,
      "id": {
        "type": "Identifier",
        "start": 866,
        "end": 871,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 872,
          "end": 891,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 873,
            "end": 891,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 875,
              "end": 891,
              "typeName": {
                "type": "Identifier",
                "start": 875,
                "end": 876,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 876,
                "end": 891,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 877,
                    "end": 890,
                    "typeName": {
                      "type": "Identifier",
                      "start": 877,
                      "end": 882,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 882,
                      "end": 890,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 883,
                          "end": 889
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 894,
      "end": 930,
      "id": {
        "type": "Identifier",
        "start": 903,
        "end": 908,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 909,
          "end": 928,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 910,
            "end": 928,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 912,
              "end": 928,
              "typeName": {
                "type": "Identifier",
                "start": 912,
                "end": 913,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 913,
                "end": 928,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 914,
                    "end": 927,
                    "typeName": {
                      "type": "Identifier",
                      "start": 914,
                      "end": 919,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 919,
                      "end": 927,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 920,
                          "end": 926
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 940,
      "end": 966,
      "id": {
        "type": "Identifier",
        "start": 949,
        "end": 954,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 955,
          "end": 961,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 956,
            "end": 961,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 958,
              "end": 961
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 963,
        "end": 966,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 968,
      "end": 997,
      "id": {
        "type": "Identifier",
        "start": 977,
        "end": 982,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 983,
          "end": 995,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 984,
            "end": 995,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 986,
              "end": 995,
              "typeName": {
                "type": "Identifier",
                "start": 986,
                "end": 987,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 987,
                "end": 995,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 988,
                    "end": 994,
                    "typeName": {
                      "type": "Identifier",
                      "start": 988,
                      "end": 994,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 998,
      "end": 1027,
      "id": {
        "type": "Identifier",
        "start": 1007,
        "end": 1012,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1013,
          "end": 1025,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1014,
            "end": 1025,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1016,
              "end": 1025,
              "typeName": {
                "type": "Identifier",
                "start": 1016,
                "end": 1017,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1017,
                "end": 1025,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1018,
                    "end": 1024,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1018,
                      "end": 1024,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1037,
      "end": 1063,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1051,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1052,
          "end": 1058,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1053,
            "end": 1058,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1055,
              "end": 1058
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1060,
        "end": 1063,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1065,
      "end": 1093,
      "id": {
        "type": "Identifier",
        "start": 1074,
        "end": 1078,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1079,
          "end": 1091,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1080,
            "end": 1091,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1082,
              "end": 1091,
              "typeName": {
                "type": "Identifier",
                "start": 1082,
                "end": 1083,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1083,
                "end": 1091,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1084,
                    "end": 1090,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1084,
                      "end": 1090,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1094,
      "end": 1122,
      "id": {
        "type": "Identifier",
        "start": 1103,
        "end": 1107,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1108,
          "end": 1120,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1109,
            "end": 1120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1111,
              "end": 1120,
              "typeName": {
                "type": "Identifier",
                "start": 1111,
                "end": 1112,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1112,
                "end": 1120,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1113,
                    "end": 1119,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1113,
                      "end": 1119,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1132,
      "end": 1157,
      "id": {
        "type": "Identifier",
        "start": 1141,
        "end": 1145,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1146,
          "end": 1152,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1147,
            "end": 1152,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1149,
              "end": 1152
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1154,
        "end": 1157,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1159,
      "end": 1186,
      "id": {
        "type": "Identifier",
        "start": 1168,
        "end": 1172,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1173,
          "end": 1184,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1174,
            "end": 1184,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1176,
              "end": 1184,
              "exprName": {
                "type": "Identifier",
                "start": 1183,
                "end": 1184,
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1187,
      "end": 1214,
      "id": {
        "type": "Identifier",
        "start": 1196,
        "end": 1200,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1201,
          "end": 1212,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1202,
            "end": 1212,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1204,
              "end": 1212,
              "exprName": {
                "type": "Identifier",
                "start": 1211,
                "end": 1212,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1224,
      "end": 1249,
      "id": {
        "type": "Identifier",
        "start": 1233,
        "end": 1237,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1238,
          "end": 1244,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1239,
            "end": 1244,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1241,
              "end": 1244
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1246,
        "end": 1249,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1251,
      "end": 1278,
      "id": {
        "type": "Identifier",
        "start": 1260,
        "end": 1264,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1265,
          "end": 1276,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1266,
            "end": 1276,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1268,
              "end": 1276,
              "exprName": {
                "type": "Identifier",
                "start": 1275,
                "end": 1276,
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1279,
      "end": 1306,
      "id": {
        "type": "Identifier",
        "start": 1288,
        "end": 1292,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1293,
          "end": 1304,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1294,
            "end": 1304,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1296,
              "end": 1304,
              "exprName": {
                "type": "Identifier",
                "start": 1303,
                "end": 1304,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1316,
      "end": 1341,
      "id": {
        "type": "Identifier",
        "start": 1325,
        "end": 1329,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1330,
          "end": 1336,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1331,
            "end": 1336,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1333,
              "end": 1336
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1338,
        "end": 1341,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1343,
      "end": 1363,
      "id": {
        "type": "Identifier",
        "start": 1352,
        "end": 1356,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1357,
          "end": 1361,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1358,
            "end": 1361,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1360,
              "end": 1361,
              "typeName": {
                "type": "Identifier",
                "start": 1360,
                "end": 1361,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1364,
      "end": 1399,
      "id": {
        "type": "Identifier",
        "start": 1373,
        "end": 1377,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1378,
          "end": 1397,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1379,
            "end": 1397,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1381,
              "end": 1397,
              "typeName": {
                "type": "Identifier",
                "start": 1381,
                "end": 1382,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1382,
                "end": 1397,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1383,
                    "end": 1396,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1383,
                      "end": 1388,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1388,
                      "end": 1396,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1389,
                          "end": 1395
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1406,
      "end": 1431,
      "id": {
        "type": "Identifier",
        "start": 1415,
        "end": 1419,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1420,
          "end": 1426,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1421,
            "end": 1426,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1423,
              "end": 1426
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1428,
        "end": 1431,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1433,
      "end": 1454,
      "id": {
        "type": "Identifier",
        "start": 1442,
        "end": 1447,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1455,
      "end": 1484,
      "id": {
        "type": "Identifier",
        "start": 1464,
        "end": 1469,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1470,
          "end": 1482,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1471,
            "end": 1482,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1473,
              "end": 1482,
              "typeName": {
                "type": "Identifier",
                "start": 1473,
                "end": 1474,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1474,
                "end": 1482,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1475,
                    "end": 1481,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1475,
                      "end": 1481,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1491,
      "end": 1517,
      "id": {
        "type": "Identifier",
        "start": 1500,
        "end": 1505,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1506,
          "end": 1512,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1507,
            "end": 1512,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1509,
              "end": 1512
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1514,
        "end": 1517,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1519,
      "end": 1539,
      "id": {
        "type": "Identifier",
        "start": 1528,
        "end": 1532,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1533,
          "end": 1537,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1534,
            "end": 1537,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1536,
              "end": 1537,
              "typeName": {
                "type": "Identifier",
                "start": 1536,
                "end": 1537,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1540,
      "end": 1568,
      "id": {
        "type": "Identifier",
        "start": 1549,
        "end": 1553,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1554,
          "end": 1566,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1555,
            "end": 1566,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1557,
              "end": 1566,
              "typeName": {
                "type": "Identifier",
                "start": 1557,
                "end": 1558,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1558,
                "end": 1566,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1559,
                    "end": 1565,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1559,
                      "end": 1565,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1575,
      "end": 1600,
      "id": {
        "type": "Identifier",
        "start": 1584,
        "end": 1588,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1589,
          "end": 1595,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1590,
            "end": 1595,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1592,
              "end": 1595
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1597,
        "end": 1600,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1602,
      "end": 1622,
      "id": {
        "type": "Identifier",
        "start": 1611,
        "end": 1615,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1616,
          "end": 1620,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1617,
            "end": 1620,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1619,
              "end": 1620,
              "typeName": {
                "type": "Identifier",
                "start": 1619,
                "end": 1620,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1623,
      "end": 1650,
      "id": {
        "type": "Identifier",
        "start": 1632,
        "end": 1636,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1637,
          "end": 1648,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1638,
            "end": 1648,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1640,
              "end": 1648,
              "exprName": {
                "type": "Identifier",
                "start": 1647,
                "end": 1648,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1657,
      "end": 1682,
      "id": {
        "type": "Identifier",
        "start": 1666,
        "end": 1670,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1671,
          "end": 1677,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1672,
            "end": 1677,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1674,
              "end": 1677
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1679,
        "end": 1682,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1684,
      "end": 1719,
      "id": {
        "type": "Identifier",
        "start": 1693,
        "end": 1697,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1698,
          "end": 1717,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1699,
            "end": 1717,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1701,
              "end": 1717,
              "typeName": {
                "type": "Identifier",
                "start": 1701,
                "end": 1702,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1702,
                "end": 1717,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1703,
                    "end": 1716,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1703,
                      "end": 1708,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1708,
                      "end": 1716,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1709,
                          "end": 1715
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1720,
      "end": 1748,
      "id": {
        "type": "Identifier",
        "start": 1729,
        "end": 1733,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1734,
          "end": 1746,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1735,
            "end": 1746,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1737,
              "end": 1746,
              "typeName": {
                "type": "Identifier",
                "start": 1737,
                "end": 1738,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1738,
                "end": 1746,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1739,
                    "end": 1745,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1739,
                      "end": 1745,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1755,
      "end": 1780,
      "id": {
        "type": "Identifier",
        "start": 1764,
        "end": 1768,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1769,
          "end": 1775,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1770,
            "end": 1775,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1772,
              "end": 1775
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1777,
        "end": 1780,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1782,
      "end": 1817,
      "id": {
        "type": "Identifier",
        "start": 1791,
        "end": 1795,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1796,
          "end": 1815,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1797,
            "end": 1815,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1799,
              "end": 1815,
              "typeName": {
                "type": "Identifier",
                "start": 1799,
                "end": 1800,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1800,
                "end": 1815,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1801,
                    "end": 1814,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1801,
                      "end": 1806,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1806,
                      "end": 1814,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1807,
                          "end": 1813
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1818,
      "end": 1846,
      "id": {
        "type": "Identifier",
        "start": 1827,
        "end": 1831,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1832,
          "end": 1844,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1833,
            "end": 1844,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1835,
              "end": 1844,
              "typeName": {
                "type": "Identifier",
                "start": 1835,
                "end": 1836,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1836,
                "end": 1844,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1837,
                    "end": 1843,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1837,
                      "end": 1843,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1853,
      "end": 1878,
      "id": {
        "type": "Identifier",
        "start": 1862,
        "end": 1866,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1867,
          "end": 1873,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1868,
            "end": 1873,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1870,
              "end": 1873
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1875,
        "end": 1878,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1880,
      "end": 1916,
      "id": {
        "type": "Identifier",
        "start": 1889,
        "end": 1894,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1895,
          "end": 1914,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1896,
            "end": 1914,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1898,
              "end": 1914,
              "typeName": {
                "type": "Identifier",
                "start": 1898,
                "end": 1899,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1899,
                "end": 1914,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1900,
                    "end": 1913,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1900,
                      "end": 1905,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1905,
                      "end": 1913,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1906,
                          "end": 1912
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1917,
      "end": 1945,
      "id": {
        "type": "Identifier",
        "start": 1926,
        "end": 1931,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1932,
          "end": 1943,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1933,
            "end": 1943,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1935,
              "end": 1943,
              "exprName": {
                "type": "Identifier",
                "start": 1942,
                "end": 1943,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1952,
      "end": 1978,
      "id": {
        "type": "Identifier",
        "start": 1961,
        "end": 1966,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1967,
          "end": 1973,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1968,
            "end": 1973,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1970,
              "end": 1973
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1975,
        "end": 1978,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1980,
      "end": 2016,
      "id": {
        "type": "Identifier",
        "start": 1989,
        "end": 1994,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1995,
          "end": 2014,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1996,
            "end": 2014,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1998,
              "end": 2014,
              "typeName": {
                "type": "Identifier",
                "start": 1998,
                "end": 1999,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1999,
                "end": 2014,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2000,
                    "end": 2013,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2000,
                      "end": 2005,
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 2005,
                      "end": 2013,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2006,
                          "end": 2012
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2017,
      "end": 2045,
      "id": {
        "type": "Identifier",
        "start": 2026,
        "end": 2031,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2032,
          "end": 2043,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2033,
            "end": 2043,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2035,
              "end": 2043,
              "exprName": {
                "type": "Identifier",
                "start": 2042,
                "end": 2043,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2052,
      "end": 2078,
      "id": {
        "type": "Identifier",
        "start": 2061,
        "end": 2066,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2067,
          "end": 2073,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2068,
            "end": 2073,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2070,
              "end": 2073
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2075,
        "end": 2078,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2080,
      "end": 2109,
      "id": {
        "type": "Identifier",
        "start": 2089,
        "end": 2094,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2095,
          "end": 2107,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2096,
            "end": 2107,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2098,
              "end": 2107,
              "typeName": {
                "type": "Identifier",
                "start": 2098,
                "end": 2099,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2099,
                "end": 2107,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2100,
                    "end": 2106,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2100,
                      "end": 2106,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2110,
      "end": 2139,
      "id": {
        "type": "Identifier",
        "start": 2119,
        "end": 2124,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2125,
          "end": 2137,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2126,
            "end": 2137,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2128,
              "end": 2137,
              "typeName": {
                "type": "Identifier",
                "start": 2128,
                "end": 2129,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2129,
                "end": 2137,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2130,
                    "end": 2136,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2130,
                      "end": 2136,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2146,
      "end": 2172,
      "id": {
        "type": "Identifier",
        "start": 2155,
        "end": 2160,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2161,
          "end": 2167,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2162,
            "end": 2167,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2164,
              "end": 2167
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2169,
        "end": 2172,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2174,
      "end": 2197,
      "id": {
        "type": "Identifier",
        "start": 2183,
        "end": 2189,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2190,
          "end": 2195,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2191,
            "end": 2195,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2193,
              "end": 2195,
              "typeName": {
                "type": "Identifier",
                "start": 2193,
                "end": 2195,
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2198,
      "end": 2228,
      "id": {
        "type": "Identifier",
        "start": 2207,
        "end": 2213,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2214,
          "end": 2226,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2215,
            "end": 2226,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2217,
              "end": 2226,
              "typeName": {
                "type": "Identifier",
                "start": 2217,
                "end": 2218,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2218,
                "end": 2226,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2219,
                    "end": 2225,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2219,
                      "end": 2225,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2235,
      "end": 2262,
      "id": {
        "type": "Identifier",
        "start": 2244,
        "end": 2250,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2251,
          "end": 2257,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2252,
            "end": 2257,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2254,
              "end": 2257
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2259,
        "end": 2262,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2264,
      "end": 2293,
      "id": {
        "type": "Identifier",
        "start": 2273,
        "end": 2278,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2279,
          "end": 2291,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2280,
            "end": 2291,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2282,
              "end": 2291,
              "typeName": {
                "type": "Identifier",
                "start": 2282,
                "end": 2283,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2283,
                "end": 2291,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2284,
                    "end": 2290,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2284,
                      "end": 2290,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2294,
      "end": 2322,
      "id": {
        "type": "Identifier",
        "start": 2303,
        "end": 2308,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2309,
          "end": 2320,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2310,
            "end": 2320,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2312,
              "end": 2320,
              "exprName": {
                "type": "Identifier",
                "start": 2319,
                "end": 2320,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2329,
      "end": 2355,
      "id": {
        "type": "Identifier",
        "start": 2338,
        "end": 2343,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2344,
          "end": 2350,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2345,
            "end": 2350,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2347,
              "end": 2350
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2352,
        "end": 2355,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2357,
      "end": 2386,
      "id": {
        "type": "Identifier",
        "start": 2366,
        "end": 2371,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2372,
          "end": 2384,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2373,
            "end": 2384,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2375,
              "end": 2384,
              "typeName": {
                "type": "Identifier",
                "start": 2375,
                "end": 2376,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2376,
                "end": 2384,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2377,
                    "end": 2383,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2377,
                      "end": 2383,
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2387,
      "end": 2415,
      "id": {
        "type": "Identifier",
        "start": 2396,
        "end": 2401,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2402,
          "end": 2413,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2403,
            "end": 2413,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2405,
              "end": 2413,
              "exprName": {
                "type": "Identifier",
                "start": 2412,
                "end": 2413,
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
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2422,
      "end": 2448,
      "id": {
        "type": "Identifier",
        "start": 2431,
        "end": 2436,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2437,
          "end": 2443,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2438,
            "end": 2443,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2440,
              "end": 2443
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2445,
        "end": 2448,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2450,
      "end": 2472,
      "id": {
        "type": "Identifier",
        "start": 2459,
        "end": 2464,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2465,
          "end": 2470,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2466,
            "end": 2470,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2468,
              "end": 2470,
              "typeName": {
                "type": "Identifier",
                "start": 2468,
                "end": 2470,
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2473,
      "end": 2502,
      "id": {
        "type": "Identifier",
        "start": 2482,
        "end": 2487,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2488,
          "end": 2500,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2489,
            "end": 2500,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2491,
              "end": 2500,
              "typeName": {
                "type": "Identifier",
                "start": 2491,
                "end": 2492,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2492,
                "end": 2500,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2493,
                    "end": 2499,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2493,
                      "end": 2499,
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2509,
      "end": 2535,
      "id": {
        "type": "Identifier",
        "start": 2518,
        "end": 2523,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2524,
          "end": 2530,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2525,
            "end": 2530,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2527,
              "end": 2530
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2532,
        "end": 2535,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
