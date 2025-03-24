__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 335,
  "end": 2364,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 388,
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
        "end": 388,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 386,
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
              "end": 386,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 356,
                  "end": 360,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 357,
                    "end": 360,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 359,
                      "end": 360,
                      "typeName": {
                        "type": "Identifier",
                        "start": 359,
                        "end": 360,
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
                "start": 370,
                "end": 386,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 372,
                    "end": 384,
                    "argument": {
                      "type": "Literal",
                      "start": 379,
                      "end": 383,
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
                "end": 355,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 353,
                    "end": 354,
                    "name": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 354,
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
                "start": 361,
                "end": 369,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 363,
                  "end": 369
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
      "start": 390,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 396,
        "end": 397,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 401,
        "end": 443,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 407,
            "end": 441,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 407,
              "end": 410,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 410,
              "end": 441,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 411,
                  "end": 415,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 412,
                    "end": 415,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 414,
                      "end": 415,
                      "typeName": {
                        "type": "Identifier",
                        "start": 414,
                        "end": 415,
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
                "start": 425,
                "end": 441,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 427,
                    "end": 439,
                    "argument": {
                      "type": "Literal",
                      "start": 434,
                      "end": 438,
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
                "start": 416,
                "end": 424,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 418,
                  "end": 424
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
        "start": 397,
        "end": 400,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 398,
            "end": 399,
            "name": {
              "type": "Identifier",
              "start": 398,
              "end": 399,
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
      "type": "ClassDeclaration",
      "start": 445,
      "end": 499,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 452,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 456,
        "end": 499,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 462,
            "end": 497,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 462,
              "end": 465,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 465,
              "end": 497,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 466,
                  "end": 470,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 467,
                    "end": 470,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 469,
                      "end": 470,
                      "typeName": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 470,
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
                "start": 481,
                "end": 497,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 483,
                    "end": 495,
                    "argument": {
                      "type": "Literal",
                      "start": 490,
                      "end": 494,
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
                "start": 471,
                "end": 480,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 473,
                  "end": 480
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
        "start": 452,
        "end": 455,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 453,
            "end": 454,
            "name": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
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
      "type": "TSInterfaceDeclaration",
      "start": 501,
      "end": 540,
      "id": {
        "type": "Identifier",
        "start": 511,
        "end": 512,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 512,
        "end": 515,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 513,
            "end": 514,
            "name": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
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
        "start": 516,
        "end": 540,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 522,
            "end": 538,
            "key": {
              "type": "Identifier",
              "start": 522,
              "end": 525,
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
                "start": 526,
                "end": 530,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 527,
                  "end": 530,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 529,
                    "end": 530,
                    "typeName": {
                      "type": "Identifier",
                      "start": 529,
                      "end": 530,
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
              "start": 531,
              "end": 537,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 533,
                "end": 537,
                "typeName": {
                  "type": "Identifier",
                  "start": 533,
                  "end": 537,
                  "name": "Date",
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
      "type": "TSInterfaceDeclaration",
      "start": 542,
      "end": 584,
      "id": {
        "type": "Identifier",
        "start": 552,
        "end": 554,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 555,
        "end": 584,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 561,
            "end": 582,
            "key": {
              "type": "Identifier",
              "start": 561,
              "end": 564,
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
              "start": 564,
              "end": 567,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 565,
                  "end": 566,
                  "name": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 566,
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
                "start": 568,
                "end": 572,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 569,
                  "end": 572,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 571,
                    "end": 572,
                    "typeName": {
                      "type": "Identifier",
                      "start": 571,
                      "end": 572,
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
              "start": 573,
              "end": 581,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 575,
                "end": 581,
                "typeName": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 581,
                  "name": "RegExp",
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
      "start": 586,
      "end": 612,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 612,
          "id": {
            "type": "Identifier",
            "start": 590,
            "end": 612,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 591,
              "end": 612,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 593,
                "end": 612,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 595,
                    "end": 610,
                    "key": {
                      "type": "Identifier",
                      "start": 595,
                      "end": 598,
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
                      "start": 598,
                      "end": 601,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 599,
                          "end": 600,
                          "name": {
                            "type": "Identifier",
                            "start": 599,
                            "end": 600,
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
                        "start": 602,
                        "end": 606,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 603,
                          "end": 606,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 605,
                            "end": 606,
                            "typeName": {
                              "type": "Identifier",
                              "start": 605,
                              "end": 606,
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
                      "start": 607,
                      "end": 610,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 609,
                        "end": 610,
                        "typeName": {
                          "type": "Identifier",
                          "start": 609,
                          "end": 610,
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
      "start": 613,
      "end": 655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 617,
          "end": 654,
          "id": {
            "type": "Identifier",
            "start": 617,
            "end": 618,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 621,
            "end": 654,
            "properties": [
              {
                "type": "Property",
                "start": 623,
                "end": 652,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 626,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 626,
                  "end": 652,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 630,
                      "end": 634,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 631,
                        "end": 634,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 633,
                          "end": 634,
                          "typeName": {
                            "type": "Identifier",
                            "start": 633,
                            "end": 634,
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
                    "start": 636,
                    "end": 652,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 638,
                        "end": 650,
                        "argument": {
                          "type": "Literal",
                          "start": 645,
                          "end": 649,
                          "value": null,
                          "raw": "null"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 626,
                    "end": 629,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 627,
                        "end": 628,
                        "name": {
                          "type": "Identifier",
                          "start": 627,
                          "end": 628,
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
      "start": 657,
      "end": 677,
      "id": {
        "type": "Identifier",
        "start": 666,
        "end": 670,
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
          "start": 671,
          "end": 675,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 672,
            "end": 675,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 674,
              "end": 675,
              "typeName": {
                "type": "Identifier",
                "start": 674,
                "end": 675,
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
      "start": 678,
      "end": 698,
      "id": {
        "type": "Identifier",
        "start": 687,
        "end": 691,
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
          "start": 692,
          "end": 696,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 693,
            "end": 696,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 695,
              "end": 696,
              "typeName": {
                "type": "Identifier",
                "start": 695,
                "end": 696,
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
      "start": 708,
      "end": 733,
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 721,
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
          "start": 722,
          "end": 728,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 723,
            "end": 728,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 725,
              "end": 728
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 730,
        "end": 733,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 735,
      "end": 764,
      "id": {
        "type": "Identifier",
        "start": 744,
        "end": 749,
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
          "start": 750,
          "end": 762,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 751,
            "end": 762,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 753,
              "end": 762,
              "typeName": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 754,
                "end": 762,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 755,
                    "end": 761
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
      "start": 765,
      "end": 794,
      "id": {
        "type": "Identifier",
        "start": 774,
        "end": 779,
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
          "start": 780,
          "end": 792,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 781,
            "end": 792,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 783,
              "end": 792,
              "typeName": {
                "type": "Identifier",
                "start": 783,
                "end": 784,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 784,
                "end": 792,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 785,
                    "end": 791
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
      "start": 804,
      "end": 830,
      "id": {
        "type": "Identifier",
        "start": 813,
        "end": 818,
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
          "start": 819,
          "end": 825,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 820,
            "end": 825,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 822,
              "end": 825
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 827,
        "end": 830,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 832,
      "end": 861,
      "id": {
        "type": "Identifier",
        "start": 841,
        "end": 846,
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
          "start": 847,
          "end": 859,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 848,
            "end": 859,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 850,
              "end": 859,
              "typeName": {
                "type": "Identifier",
                "start": 850,
                "end": 851,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 851,
                "end": 859,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 852,
                    "end": 858
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
      "start": 862,
      "end": 891,
      "id": {
        "type": "Identifier",
        "start": 871,
        "end": 876,
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
          "start": 877,
          "end": 889,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 878,
            "end": 889,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 880,
              "end": 889,
              "typeName": {
                "type": "Identifier",
                "start": 880,
                "end": 881,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 881,
                "end": 889,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 882,
                    "end": 888
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
      "start": 901,
      "end": 927,
      "id": {
        "type": "Identifier",
        "start": 910,
        "end": 915,
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
          "start": 916,
          "end": 922,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 917,
            "end": 922,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 919,
              "end": 922
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 924,
        "end": 927,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 929,
      "end": 957,
      "id": {
        "type": "Identifier",
        "start": 938,
        "end": 942,
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
          "start": 943,
          "end": 955,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 944,
            "end": 955,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 946,
              "end": 955,
              "typeName": {
                "type": "Identifier",
                "start": 946,
                "end": 947,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 947,
                "end": 955,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 948,
                    "end": 954
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
      "start": 958,
      "end": 986,
      "id": {
        "type": "Identifier",
        "start": 967,
        "end": 971,
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
          "start": 972,
          "end": 984,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 973,
            "end": 984,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 975,
              "end": 984,
              "typeName": {
                "type": "Identifier",
                "start": 975,
                "end": 976,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 976,
                "end": 984,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 977,
                    "end": 983
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
      "start": 996,
      "end": 1021,
      "id": {
        "type": "Identifier",
        "start": 1005,
        "end": 1009,
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
          "start": 1010,
          "end": 1016,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1011,
            "end": 1016,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1013,
              "end": 1016
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1018,
        "end": 1021,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1023,
      "end": 1050,
      "id": {
        "type": "Identifier",
        "start": 1032,
        "end": 1036,
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
          "start": 1037,
          "end": 1048,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1038,
            "end": 1048,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1040,
              "end": 1048,
              "exprName": {
                "type": "Identifier",
                "start": 1047,
                "end": 1048,
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
      "start": 1051,
      "end": 1078,
      "id": {
        "type": "Identifier",
        "start": 1060,
        "end": 1064,
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
          "start": 1065,
          "end": 1076,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1066,
            "end": 1076,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1068,
              "end": 1076,
              "exprName": {
                "type": "Identifier",
                "start": 1075,
                "end": 1076,
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
      "start": 1088,
      "end": 1113,
      "id": {
        "type": "Identifier",
        "start": 1097,
        "end": 1101,
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
          "start": 1102,
          "end": 1108,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1103,
            "end": 1108,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1105,
              "end": 1108
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1110,
        "end": 1113,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1115,
      "end": 1142,
      "id": {
        "type": "Identifier",
        "start": 1124,
        "end": 1128,
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
          "start": 1129,
          "end": 1140,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1130,
            "end": 1140,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1132,
              "end": 1140,
              "exprName": {
                "type": "Identifier",
                "start": 1139,
                "end": 1140,
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
      "start": 1143,
      "end": 1170,
      "id": {
        "type": "Identifier",
        "start": 1152,
        "end": 1156,
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
          "start": 1157,
          "end": 1168,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1158,
            "end": 1168,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1160,
              "end": 1168,
              "exprName": {
                "type": "Identifier",
                "start": 1167,
                "end": 1168,
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
      "start": 1180,
      "end": 1205,
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1193,
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
          "start": 1194,
          "end": 1200,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1195,
            "end": 1200,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1197,
              "end": 1200
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1202,
        "end": 1205,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1207,
      "end": 1227,
      "id": {
        "type": "Identifier",
        "start": 1216,
        "end": 1220,
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
          "start": 1221,
          "end": 1225,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1222,
            "end": 1225,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1224,
              "end": 1225,
              "typeName": {
                "type": "Identifier",
                "start": 1224,
                "end": 1225,
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
      "start": 1228,
      "end": 1256,
      "id": {
        "type": "Identifier",
        "start": 1237,
        "end": 1241,
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
          "start": 1242,
          "end": 1254,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1243,
            "end": 1254,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1245,
              "end": 1254,
              "typeName": {
                "type": "Identifier",
                "start": 1245,
                "end": 1246,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1246,
                "end": 1254,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1247,
                    "end": 1253
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
      "start": 1263,
      "end": 1288,
      "id": {
        "type": "Identifier",
        "start": 1272,
        "end": 1276,
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
          "start": 1277,
          "end": 1283,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1278,
            "end": 1283,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1280,
              "end": 1283
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1285,
        "end": 1288,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1290,
      "end": 1311,
      "id": {
        "type": "Identifier",
        "start": 1299,
        "end": 1304,
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
          "start": 1305,
          "end": 1309,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1306,
            "end": 1309,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1308,
              "end": 1309,
              "typeName": {
                "type": "Identifier",
                "start": 1308,
                "end": 1309,
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
      "start": 1312,
      "end": 1341,
      "id": {
        "type": "Identifier",
        "start": 1321,
        "end": 1326,
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
          "start": 1327,
          "end": 1339,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1328,
            "end": 1339,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1330,
              "end": 1339,
              "typeName": {
                "type": "Identifier",
                "start": 1330,
                "end": 1331,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1331,
                "end": 1339,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1332,
                    "end": 1338
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
      "start": 1348,
      "end": 1374,
      "id": {
        "type": "Identifier",
        "start": 1357,
        "end": 1362,
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
          "start": 1363,
          "end": 1369,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1364,
            "end": 1369,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1366,
              "end": 1369
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1371,
        "end": 1374,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1376,
      "end": 1396,
      "id": {
        "type": "Identifier",
        "start": 1385,
        "end": 1389,
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
          "start": 1390,
          "end": 1394,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1391,
            "end": 1394,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1393,
              "end": 1394,
              "typeName": {
                "type": "Identifier",
                "start": 1393,
                "end": 1394,
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
      "start": 1397,
      "end": 1425,
      "id": {
        "type": "Identifier",
        "start": 1406,
        "end": 1410,
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
          "start": 1411,
          "end": 1423,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1412,
            "end": 1423,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1414,
              "end": 1423,
              "typeName": {
                "type": "Identifier",
                "start": 1414,
                "end": 1415,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1415,
                "end": 1423,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1416,
                    "end": 1422
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
      "start": 1432,
      "end": 1457,
      "id": {
        "type": "Identifier",
        "start": 1441,
        "end": 1445,
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
          "start": 1446,
          "end": 1452,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1447,
            "end": 1452,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1449,
              "end": 1452
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1454,
        "end": 1457,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1459,
      "end": 1479,
      "id": {
        "type": "Identifier",
        "start": 1468,
        "end": 1472,
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
          "start": 1473,
          "end": 1477,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1474,
            "end": 1477,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1476,
              "end": 1477,
              "typeName": {
                "type": "Identifier",
                "start": 1476,
                "end": 1477,
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
      "start": 1480,
      "end": 1507,
      "id": {
        "type": "Identifier",
        "start": 1489,
        "end": 1493,
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
          "start": 1494,
          "end": 1505,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1495,
            "end": 1505,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1497,
              "end": 1505,
              "exprName": {
                "type": "Identifier",
                "start": 1504,
                "end": 1505,
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
      "start": 1514,
      "end": 1539,
      "id": {
        "type": "Identifier",
        "start": 1523,
        "end": 1527,
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
          "start": 1528,
          "end": 1534,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1529,
            "end": 1534,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1531,
              "end": 1534
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1536,
        "end": 1539,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1541,
      "end": 1569,
      "id": {
        "type": "Identifier",
        "start": 1550,
        "end": 1554,
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
          "start": 1555,
          "end": 1567,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1556,
            "end": 1567,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1558,
              "end": 1567,
              "typeName": {
                "type": "Identifier",
                "start": 1558,
                "end": 1559,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1559,
                "end": 1567,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1560,
                    "end": 1566
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
      "start": 1570,
      "end": 1598,
      "id": {
        "type": "Identifier",
        "start": 1579,
        "end": 1583,
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
          "start": 1584,
          "end": 1596,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1585,
            "end": 1596,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1587,
              "end": 1596,
              "typeName": {
                "type": "Identifier",
                "start": 1587,
                "end": 1588,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1588,
                "end": 1596,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1589,
                    "end": 1595
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
      "start": 1605,
      "end": 1630,
      "id": {
        "type": "Identifier",
        "start": 1614,
        "end": 1618,
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
          "start": 1619,
          "end": 1625,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1620,
            "end": 1625,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1622,
              "end": 1625
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1627,
        "end": 1630,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1632,
      "end": 1660,
      "id": {
        "type": "Identifier",
        "start": 1641,
        "end": 1645,
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
          "start": 1646,
          "end": 1658,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1647,
            "end": 1658,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1649,
              "end": 1658,
              "typeName": {
                "type": "Identifier",
                "start": 1649,
                "end": 1650,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1650,
                "end": 1658,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1651,
                    "end": 1657
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
      "start": 1661,
      "end": 1689,
      "id": {
        "type": "Identifier",
        "start": 1670,
        "end": 1674,
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
          "start": 1675,
          "end": 1687,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1676,
            "end": 1687,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1678,
              "end": 1687,
              "typeName": {
                "type": "Identifier",
                "start": 1678,
                "end": 1679,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1679,
                "end": 1687,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1680,
                    "end": 1686
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
      "start": 1696,
      "end": 1721,
      "id": {
        "type": "Identifier",
        "start": 1705,
        "end": 1709,
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
          "start": 1710,
          "end": 1716,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1711,
            "end": 1716,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1713,
              "end": 1716
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1718,
        "end": 1721,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1723,
      "end": 1752,
      "id": {
        "type": "Identifier",
        "start": 1732,
        "end": 1737,
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
          "start": 1738,
          "end": 1750,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1739,
            "end": 1750,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1741,
              "end": 1750,
              "typeName": {
                "type": "Identifier",
                "start": 1741,
                "end": 1742,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1742,
                "end": 1750,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1743,
                    "end": 1749
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
      "start": 1753,
      "end": 1781,
      "id": {
        "type": "Identifier",
        "start": 1762,
        "end": 1767,
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
          "start": 1768,
          "end": 1779,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1769,
            "end": 1779,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1771,
              "end": 1779,
              "exprName": {
                "type": "Identifier",
                "start": 1778,
                "end": 1779,
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
      "start": 1788,
      "end": 1814,
      "id": {
        "type": "Identifier",
        "start": 1797,
        "end": 1802,
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
          "start": 1803,
          "end": 1809,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1804,
            "end": 1809,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1806,
              "end": 1809
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1811,
        "end": 1814,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1816,
      "end": 1845,
      "id": {
        "type": "Identifier",
        "start": 1825,
        "end": 1830,
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
          "start": 1831,
          "end": 1843,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1832,
            "end": 1843,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1834,
              "end": 1843,
              "typeName": {
                "type": "Identifier",
                "start": 1834,
                "end": 1835,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1835,
                "end": 1843,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1836,
                    "end": 1842
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
      "start": 1846,
      "end": 1874,
      "id": {
        "type": "Identifier",
        "start": 1855,
        "end": 1860,
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
          "start": 1861,
          "end": 1872,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1862,
            "end": 1872,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1864,
              "end": 1872,
              "exprName": {
                "type": "Identifier",
                "start": 1871,
                "end": 1872,
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
      "start": 1881,
      "end": 1907,
      "id": {
        "type": "Identifier",
        "start": 1890,
        "end": 1895,
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
          "start": 1896,
          "end": 1902,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1897,
            "end": 1902,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1899,
              "end": 1902
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1904,
        "end": 1907,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1909,
      "end": 1938,
      "id": {
        "type": "Identifier",
        "start": 1918,
        "end": 1923,
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
          "start": 1924,
          "end": 1936,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1925,
            "end": 1936,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1927,
              "end": 1936,
              "typeName": {
                "type": "Identifier",
                "start": 1927,
                "end": 1928,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1928,
                "end": 1936,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1929,
                    "end": 1935
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
      "start": 1939,
      "end": 1968,
      "id": {
        "type": "Identifier",
        "start": 1948,
        "end": 1953,
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
          "start": 1954,
          "end": 1966,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1955,
            "end": 1966,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1957,
              "end": 1966,
              "typeName": {
                "type": "Identifier",
                "start": 1957,
                "end": 1958,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1958,
                "end": 1966,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1959,
                    "end": 1965
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
      "start": 1975,
      "end": 2001,
      "id": {
        "type": "Identifier",
        "start": 1984,
        "end": 1989,
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
          "start": 1990,
          "end": 1996,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1991,
            "end": 1996,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1993,
              "end": 1996
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1998,
        "end": 2001,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2003,
      "end": 2026,
      "id": {
        "type": "Identifier",
        "start": 2012,
        "end": 2018,
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
          "start": 2019,
          "end": 2024,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2020,
            "end": 2024,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2022,
              "end": 2024,
              "typeName": {
                "type": "Identifier",
                "start": 2022,
                "end": 2024,
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
      "start": 2027,
      "end": 2057,
      "id": {
        "type": "Identifier",
        "start": 2036,
        "end": 2042,
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
          "start": 2043,
          "end": 2055,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2044,
            "end": 2055,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2046,
              "end": 2055,
              "typeName": {
                "type": "Identifier",
                "start": 2046,
                "end": 2047,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2047,
                "end": 2055,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2048,
                    "end": 2054
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
      "start": 2064,
      "end": 2091,
      "id": {
        "type": "Identifier",
        "start": 2073,
        "end": 2079,
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
          "start": 2080,
          "end": 2086,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2081,
            "end": 2086,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2083,
              "end": 2086
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2088,
        "end": 2091,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2093,
      "end": 2122,
      "id": {
        "type": "Identifier",
        "start": 2102,
        "end": 2107,
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
          "start": 2108,
          "end": 2120,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2109,
            "end": 2120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2111,
              "end": 2120,
              "typeName": {
                "type": "Identifier",
                "start": 2111,
                "end": 2112,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2112,
                "end": 2120,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2113,
                    "end": 2119
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
      "start": 2123,
      "end": 2151,
      "id": {
        "type": "Identifier",
        "start": 2132,
        "end": 2137,
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
          "start": 2138,
          "end": 2149,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2139,
            "end": 2149,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2141,
              "end": 2149,
              "exprName": {
                "type": "Identifier",
                "start": 2148,
                "end": 2149,
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
      "start": 2158,
      "end": 2184,
      "id": {
        "type": "Identifier",
        "start": 2167,
        "end": 2172,
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
          "start": 2173,
          "end": 2179,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2174,
            "end": 2179,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2176,
              "end": 2179
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2181,
        "end": 2184,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2186,
      "end": 2215,
      "id": {
        "type": "Identifier",
        "start": 2195,
        "end": 2200,
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
          "start": 2201,
          "end": 2213,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2202,
            "end": 2213,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2204,
              "end": 2213,
              "typeName": {
                "type": "Identifier",
                "start": 2204,
                "end": 2205,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2205,
                "end": 2213,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2206,
                    "end": 2212
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
      "start": 2216,
      "end": 2244,
      "id": {
        "type": "Identifier",
        "start": 2225,
        "end": 2230,
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
          "start": 2231,
          "end": 2242,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2232,
            "end": 2242,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2234,
              "end": 2242,
              "exprName": {
                "type": "Identifier",
                "start": 2241,
                "end": 2242,
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
      "start": 2251,
      "end": 2277,
      "id": {
        "type": "Identifier",
        "start": 2260,
        "end": 2265,
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
          "start": 2266,
          "end": 2272,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2267,
            "end": 2272,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2269,
              "end": 2272
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2274,
        "end": 2277,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2279,
      "end": 2301,
      "id": {
        "type": "Identifier",
        "start": 2288,
        "end": 2293,
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
          "start": 2294,
          "end": 2299,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2295,
            "end": 2299,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2297,
              "end": 2299,
              "typeName": {
                "type": "Identifier",
                "start": 2297,
                "end": 2299,
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
      "start": 2302,
      "end": 2331,
      "id": {
        "type": "Identifier",
        "start": 2311,
        "end": 2316,
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
          "start": 2317,
          "end": 2329,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2318,
            "end": 2329,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2320,
              "end": 2329,
              "typeName": {
                "type": "Identifier",
                "start": 2320,
                "end": 2321,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2321,
                "end": 2329,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2322,
                    "end": 2328
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
      "start": 2338,
      "end": 2364,
      "id": {
        "type": "Identifier",
        "start": 2347,
        "end": 2352,
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
          "start": 2353,
          "end": 2359,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2354,
            "end": 2359,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2356,
              "end": 2359
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2361,
        "end": 2364,
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
