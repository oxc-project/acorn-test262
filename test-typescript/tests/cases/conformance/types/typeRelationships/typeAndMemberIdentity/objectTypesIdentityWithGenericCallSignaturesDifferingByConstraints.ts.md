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
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 342,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 343,
        "end": 401,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 399,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 352,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 399,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 369,
                  "end": 373,
                  "name": "x",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 363,
                      "end": 367,
                      "typeName": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 367,
                        "name": "Date",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 374,
                "end": 382,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 376,
                  "end": 382
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
      "type": "ClassDeclaration",
      "start": 403,
      "end": 478,
      "id": {
        "type": "Identifier",
        "start": 409,
        "end": 410,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 436,
        "end": 478,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 442,
            "end": 476,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 445,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 445,
              "end": 476,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 446,
                  "end": 450,
                  "name": "x",
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
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 451,
                "end": 459,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 453,
                  "end": 459
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 421,
              "end": 434,
              "typeName": {
                "type": "Identifier",
                "start": 421,
                "end": 426,
                "name": "Array",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 480,
      "end": 548,
      "id": {
        "type": "Identifier",
        "start": 486,
        "end": 487,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 506,
        "end": 548,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 512,
            "end": 546,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 512,
              "end": 515,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 515,
              "end": 546,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 516,
                  "end": 520,
                  "name": "x",
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
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 521,
                "end": 529,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 523,
                  "end": 529
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 498,
              "end": 504,
              "typeName": {
                "type": "Identifier",
                "start": 498,
                "end": 504,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 550,
      "end": 606,
      "id": {
        "type": "Identifier",
        "start": 560,
        "end": 561,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 572,
              "end": 578,
              "typeName": {
                "type": "Identifier",
                "start": 572,
                "end": 578,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "foo",
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
                "start": 590,
                "end": 594,
                "name": "x",
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
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 641,
                    "end": 648,
                    "typeName": {
                      "type": "Identifier",
                      "start": 641,
                      "end": 648,
                      "name": "Boolean",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                "name": "x",
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 672,
          "end": 721,
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 721,
            "name": "a",
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
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 691,
                            "end": 704,
                            "typeName": {
                              "type": "Identifier",
                              "start": 691,
                              "end": 696,
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                        "name": "x",
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
      "start": 722,
      "end": 777,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 726,
          "end": 776,
          "id": {
            "type": "Identifier",
            "start": 726,
            "end": 727,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 732,
                  "end": 735,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 735,
                  "end": 774,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 754,
                      "end": 758,
                      "name": "x",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 746,
                          "end": 752,
                          "typeName": {
                            "type": "Identifier",
                            "start": 746,
                            "end": 752,
                            "name": "RegExp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "foo1",
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
          "start": 793,
          "end": 797,
          "name": "x",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 800,
      "end": 820,
      "id": {
        "type": "Identifier",
        "start": 809,
        "end": 813,
        "name": "foo1",
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
          "start": 814,
          "end": 818,
          "name": "x",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 830,
      "end": 855,
      "id": {
        "type": "Identifier",
        "start": 839,
        "end": 843,
        "name": "foo1",
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
          "start": 844,
          "end": 850,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 845,
            "end": 850,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 847,
              "end": 850
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 852,
        "end": 855,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 857,
      "end": 893,
      "id": {
        "type": "Identifier",
        "start": 866,
        "end": 871,
        "name": "foo1b",
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
          "start": 872,
          "end": 891,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 894,
      "end": 930,
      "id": {
        "type": "Identifier",
        "start": 903,
        "end": 908,
        "name": "foo1b",
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
          "start": 909,
          "end": 928,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 940,
      "end": 966,
      "id": {
        "type": "Identifier",
        "start": 949,
        "end": 954,
        "name": "foo1b",
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
          "start": 955,
          "end": 961,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 956,
            "end": 961,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 958,
              "end": 961
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 963,
        "end": 966,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 968,
      "end": 997,
      "id": {
        "type": "Identifier",
        "start": 977,
        "end": 982,
        "name": "foo1c",
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
          "start": 983,
          "end": 995,
          "name": "x",
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "String",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 998,
      "end": 1027,
      "id": {
        "type": "Identifier",
        "start": 1007,
        "end": 1012,
        "name": "foo1c",
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
          "start": 1013,
          "end": 1025,
          "name": "x",
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "String",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1037,
      "end": 1063,
      "id": {
        "type": "Identifier",
        "start": 1046,
        "end": 1051,
        "name": "foo1c",
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
          "start": 1052,
          "end": 1058,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1053,
            "end": 1058,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1055,
              "end": 1058
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1060,
        "end": 1063,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1065,
      "end": 1093,
      "id": {
        "type": "Identifier",
        "start": 1074,
        "end": 1078,
        "name": "foo2",
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
          "start": 1079,
          "end": 1091,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1094,
      "end": 1122,
      "id": {
        "type": "Identifier",
        "start": 1103,
        "end": 1107,
        "name": "foo2",
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
          "start": 1108,
          "end": 1120,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1132,
      "end": 1157,
      "id": {
        "type": "Identifier",
        "start": 1141,
        "end": 1145,
        "name": "foo2",
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
          "start": 1146,
          "end": 1152,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1147,
            "end": 1152,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1149,
              "end": 1152
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1154,
        "end": 1157,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1159,
      "end": 1186,
      "id": {
        "type": "Identifier",
        "start": 1168,
        "end": 1172,
        "name": "foo3",
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
          "start": 1173,
          "end": 1184,
          "name": "x",
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
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1187,
      "end": 1214,
      "id": {
        "type": "Identifier",
        "start": 1196,
        "end": 1200,
        "name": "foo3",
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
          "start": 1201,
          "end": 1212,
          "name": "x",
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
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1224,
      "end": 1249,
      "id": {
        "type": "Identifier",
        "start": 1233,
        "end": 1237,
        "name": "foo3",
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
          "start": 1238,
          "end": 1244,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1239,
            "end": 1244,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1241,
              "end": 1244
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1246,
        "end": 1249,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1251,
      "end": 1278,
      "id": {
        "type": "Identifier",
        "start": 1260,
        "end": 1264,
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
          "start": 1265,
          "end": 1276,
          "name": "x",
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
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1279,
      "end": 1306,
      "id": {
        "type": "Identifier",
        "start": 1288,
        "end": 1292,
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
          "start": 1293,
          "end": 1304,
          "name": "x",
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
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1316,
      "end": 1341,
      "id": {
        "type": "Identifier",
        "start": 1325,
        "end": 1329,
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
          "start": 1330,
          "end": 1336,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1331,
            "end": 1336,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1333,
              "end": 1336
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1338,
        "end": 1341,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1343,
      "end": 1363,
      "id": {
        "type": "Identifier",
        "start": 1352,
        "end": 1356,
        "name": "foo5",
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
          "start": 1357,
          "end": 1361,
          "name": "x",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1364,
      "end": 1399,
      "id": {
        "type": "Identifier",
        "start": 1373,
        "end": 1377,
        "name": "foo5",
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
          "start": 1378,
          "end": 1397,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1406,
      "end": 1431,
      "id": {
        "type": "Identifier",
        "start": 1415,
        "end": 1419,
        "name": "foo5",
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
          "start": 1420,
          "end": 1426,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1421,
            "end": 1426,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1423,
              "end": 1426
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1428,
        "end": 1431,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1433,
      "end": 1454,
      "id": {
        "type": "Identifier",
        "start": 1442,
        "end": 1447,
        "name": "foo5b",
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
          "start": 1448,
          "end": 1452,
          "name": "x",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1455,
      "end": 1484,
      "id": {
        "type": "Identifier",
        "start": 1464,
        "end": 1469,
        "name": "foo5b",
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
          "start": 1470,
          "end": 1482,
          "name": "x",
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "String",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1491,
      "end": 1517,
      "id": {
        "type": "Identifier",
        "start": 1500,
        "end": 1505,
        "name": "foo5b",
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
          "start": 1506,
          "end": 1512,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1507,
            "end": 1512,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1509,
              "end": 1512
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1514,
        "end": 1517,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1519,
      "end": 1539,
      "id": {
        "type": "Identifier",
        "start": 1528,
        "end": 1532,
        "name": "foo6",
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
          "start": 1533,
          "end": 1537,
          "name": "x",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1540,
      "end": 1568,
      "id": {
        "type": "Identifier",
        "start": 1549,
        "end": 1553,
        "name": "foo6",
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
          "start": 1554,
          "end": 1566,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1575,
      "end": 1600,
      "id": {
        "type": "Identifier",
        "start": 1584,
        "end": 1588,
        "name": "foo6",
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
          "start": 1589,
          "end": 1595,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1590,
            "end": 1595,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1592,
              "end": 1595
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1597,
        "end": 1600,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1602,
      "end": 1622,
      "id": {
        "type": "Identifier",
        "start": 1611,
        "end": 1615,
        "name": "foo7",
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
          "start": 1616,
          "end": 1620,
          "name": "x",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1623,
      "end": 1650,
      "id": {
        "type": "Identifier",
        "start": 1632,
        "end": 1636,
        "name": "foo7",
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
          "start": 1637,
          "end": 1648,
          "name": "x",
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
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1657,
      "end": 1682,
      "id": {
        "type": "Identifier",
        "start": 1666,
        "end": 1670,
        "name": "foo7",
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
          "start": 1671,
          "end": 1677,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1672,
            "end": 1677,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1674,
              "end": 1677
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1679,
        "end": 1682,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1684,
      "end": 1719,
      "id": {
        "type": "Identifier",
        "start": 1693,
        "end": 1697,
        "name": "foo8",
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
          "start": 1698,
          "end": 1717,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1720,
      "end": 1748,
      "id": {
        "type": "Identifier",
        "start": 1729,
        "end": 1733,
        "name": "foo8",
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
          "start": 1734,
          "end": 1746,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1755,
      "end": 1780,
      "id": {
        "type": "Identifier",
        "start": 1764,
        "end": 1768,
        "name": "foo8",
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
          "start": 1769,
          "end": 1775,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1770,
            "end": 1775,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1772,
              "end": 1775
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1777,
        "end": 1780,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1782,
      "end": 1817,
      "id": {
        "type": "Identifier",
        "start": 1791,
        "end": 1795,
        "name": "foo9",
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
          "start": 1796,
          "end": 1815,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1818,
      "end": 1846,
      "id": {
        "type": "Identifier",
        "start": 1827,
        "end": 1831,
        "name": "foo9",
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
          "start": 1832,
          "end": 1844,
          "name": "x",
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "String",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1853,
      "end": 1878,
      "id": {
        "type": "Identifier",
        "start": 1862,
        "end": 1866,
        "name": "foo9",
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
          "start": 1867,
          "end": 1873,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1868,
            "end": 1873,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1870,
              "end": 1873
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1875,
        "end": 1878,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1880,
      "end": 1916,
      "id": {
        "type": "Identifier",
        "start": 1889,
        "end": 1894,
        "name": "foo10",
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
          "start": 1895,
          "end": 1914,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1917,
      "end": 1945,
      "id": {
        "type": "Identifier",
        "start": 1926,
        "end": 1931,
        "name": "foo10",
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
          "start": 1932,
          "end": 1943,
          "name": "x",
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
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1952,
      "end": 1978,
      "id": {
        "type": "Identifier",
        "start": 1961,
        "end": 1966,
        "name": "foo10",
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
          "start": 1967,
          "end": 1973,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1968,
            "end": 1973,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1970,
              "end": 1973
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1975,
        "end": 1978,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1980,
      "end": 2016,
      "id": {
        "type": "Identifier",
        "start": 1989,
        "end": 1994,
        "name": "foo11",
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
          "start": 1995,
          "end": 2014,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Array",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2017,
      "end": 2045,
      "id": {
        "type": "Identifier",
        "start": 2026,
        "end": 2031,
        "name": "foo11",
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
          "start": 2032,
          "end": 2043,
          "name": "x",
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
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2052,
      "end": 2078,
      "id": {
        "type": "Identifier",
        "start": 2061,
        "end": 2066,
        "name": "foo11",
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
          "start": 2067,
          "end": 2073,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2068,
            "end": 2073,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2070,
              "end": 2073
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2075,
        "end": 2078,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2080,
      "end": 2109,
      "id": {
        "type": "Identifier",
        "start": 2089,
        "end": 2094,
        "name": "foo12",
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
          "start": 2095,
          "end": 2107,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2110,
      "end": 2139,
      "id": {
        "type": "Identifier",
        "start": 2119,
        "end": 2124,
        "name": "foo12",
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
          "start": 2125,
          "end": 2137,
          "name": "x",
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "String",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2146,
      "end": 2172,
      "id": {
        "type": "Identifier",
        "start": 2155,
        "end": 2160,
        "name": "foo12",
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
          "start": 2161,
          "end": 2167,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2162,
            "end": 2167,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2164,
              "end": 2167
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2169,
        "end": 2172,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2174,
      "end": 2197,
      "id": {
        "type": "Identifier",
        "start": 2183,
        "end": 2189,
        "name": "foo12b",
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
          "start": 2190,
          "end": 2195,
          "name": "x",
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
                "name": "I2",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2198,
      "end": 2228,
      "id": {
        "type": "Identifier",
        "start": 2207,
        "end": 2213,
        "name": "foo12b",
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
          "start": 2214,
          "end": 2226,
          "name": "x",
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "String",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2235,
      "end": 2262,
      "id": {
        "type": "Identifier",
        "start": 2244,
        "end": 2250,
        "name": "foo12b",
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
          "start": 2251,
          "end": 2257,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2252,
            "end": 2257,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2254,
              "end": 2257
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2259,
        "end": 2262,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2264,
      "end": 2293,
      "id": {
        "type": "Identifier",
        "start": 2273,
        "end": 2278,
        "name": "foo13",
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
          "start": 2279,
          "end": 2291,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2294,
      "end": 2322,
      "id": {
        "type": "Identifier",
        "start": 2303,
        "end": 2308,
        "name": "foo13",
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
          "start": 2309,
          "end": 2320,
          "name": "x",
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
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2329,
      "end": 2355,
      "id": {
        "type": "Identifier",
        "start": 2338,
        "end": 2343,
        "name": "foo13",
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
          "start": 2344,
          "end": 2350,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2345,
            "end": 2350,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2347,
              "end": 2350
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2352,
        "end": 2355,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2357,
      "end": 2386,
      "id": {
        "type": "Identifier",
        "start": 2366,
        "end": 2371,
        "name": "foo14",
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
          "start": 2372,
          "end": 2384,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Number",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2387,
      "end": 2415,
      "id": {
        "type": "Identifier",
        "start": 2396,
        "end": 2401,
        "name": "foo14",
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
          "start": 2402,
          "end": 2413,
          "name": "x",
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
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2422,
      "end": 2448,
      "id": {
        "type": "Identifier",
        "start": 2431,
        "end": 2436,
        "name": "foo14",
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
          "start": 2437,
          "end": 2443,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2438,
            "end": 2443,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2440,
              "end": 2443
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2445,
        "end": 2448,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2450,
      "end": 2472,
      "id": {
        "type": "Identifier",
        "start": 2459,
        "end": 2464,
        "name": "foo15",
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
          "start": 2465,
          "end": 2470,
          "name": "x",
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
                "name": "I2",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2473,
      "end": 2502,
      "id": {
        "type": "Identifier",
        "start": 2482,
        "end": 2487,
        "name": "foo15",
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
          "start": 2488,
          "end": 2500,
          "name": "x",
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "String",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2509,
      "end": 2535,
      "id": {
        "type": "Identifier",
        "start": 2518,
        "end": 2523,
        "name": "foo15",
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
          "start": 2524,
          "end": 2530,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2525,
            "end": 2530,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2527,
              "end": 2530
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2532,
        "end": 2535,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
