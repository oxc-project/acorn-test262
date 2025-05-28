__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 335,
  "end": 2413,
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
      "end": 469,
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
        "end": 426,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 411,
            "end": 425,
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
              "end": 425,
              "typeName": {
                "type": "Identifier",
                "start": 421,
                "end": 425,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 427,
        "end": 469,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 433,
            "end": 467,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 433,
              "end": 436,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 436,
              "end": 467,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 437,
                  "end": 441,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 438,
                    "end": 441,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 440,
                      "end": 441,
                      "typeName": {
                        "type": "Identifier",
                        "start": 440,
                        "end": 441,
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
                "start": 442,
                "end": 450,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 444,
                  "end": 450
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 451,
                "end": 467,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 453,
                    "end": 465,
                    "argument": {
                      "type": "Literal",
                      "start": 460,
                      "end": 464,
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
      "start": 471,
      "end": 538,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 478,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 478,
        "end": 494,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 479,
            "end": 493,
            "name": {
              "type": "Identifier",
              "start": 479,
              "end": 480,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 489,
              "end": 493,
              "typeName": {
                "type": "Identifier",
                "start": 489,
                "end": 493,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 495,
        "end": 538,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 501,
            "end": 536,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 501,
              "end": 504,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 504,
              "end": 536,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 505,
                  "end": 509,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
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
                "start": 510,
                "end": 519,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 512,
                  "end": 519
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 520,
                "end": 536,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 522,
                    "end": 534,
                    "argument": {
                      "type": "Literal",
                      "start": 529,
                      "end": 533,
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
      "start": 540,
      "end": 592,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 551,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 551,
        "end": 567,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 552,
            "end": 566,
            "name": {
              "type": "Identifier",
              "start": 552,
              "end": 553,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 562,
              "end": 566,
              "typeName": {
                "type": "Identifier",
                "start": 562,
                "end": 566,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 568,
        "end": 592,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 574,
            "end": 590,
            "key": {
              "type": "Identifier",
              "start": 574,
              "end": 577,
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
                "start": 578,
                "end": 582,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 579,
                  "end": 582,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 581,
                    "end": 582,
                    "typeName": {
                      "type": "Identifier",
                      "start": 581,
                      "end": 582,
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
              "start": 583,
              "end": 589,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 585,
                "end": 589,
                "typeName": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 589,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 594,
      "end": 649,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 606,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 607,
        "end": 649,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 613,
            "end": 647,
            "key": {
              "type": "Identifier",
              "start": 613,
              "end": 616,
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
              "start": 616,
              "end": 632,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 617,
                  "end": 631,
                  "name": {
                    "type": "Identifier",
                    "start": 617,
                    "end": 618,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 627,
                    "end": 631,
                    "typeName": {
                      "type": "Identifier",
                      "start": 627,
                      "end": 631,
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
                "start": 633,
                "end": 637,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 634,
                  "end": 637,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 636,
                    "end": 637,
                    "typeName": {
                      "type": "Identifier",
                      "start": 636,
                      "end": 637,
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
              "start": 638,
              "end": 646,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 640,
                "end": 646,
                "typeName": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 646,
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 651,
      "end": 690,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 690,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 656,
              "end": 690,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 658,
                "end": 690,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 660,
                    "end": 688,
                    "key": {
                      "type": "Identifier",
                      "start": 660,
                      "end": 663,
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
                      "start": 663,
                      "end": 679,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 664,
                          "end": 678,
                          "name": {
                            "type": "Identifier",
                            "start": 664,
                            "end": 665,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "start": 674,
                            "end": 678,
                            "typeName": {
                              "type": "Identifier",
                              "start": 674,
                              "end": 678,
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
                        "start": 680,
                        "end": 684,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 681,
                          "end": 684,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 683,
                            "end": 684,
                            "typeName": {
                              "type": "Identifier",
                              "start": 683,
                              "end": 684,
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
                      "start": 685,
                      "end": 688,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 687,
                        "end": 688,
                        "typeName": {
                          "type": "Identifier",
                          "start": 687,
                          "end": 688,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
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
      "start": 691,
      "end": 746,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 695,
          "end": 745,
          "id": {
            "type": "Identifier",
            "start": 695,
            "end": 696,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 699,
            "end": 745,
            "properties": [
              {
                "type": "Property",
                "start": 701,
                "end": 743,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 704,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 704,
                  "end": 743,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 704,
                    "end": 720,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 705,
                        "end": 719,
                        "name": {
                          "type": "Identifier",
                          "start": 705,
                          "end": 706,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 715,
                          "end": 719,
                          "typeName": {
                            "type": "Identifier",
                            "start": 715,
                            "end": 719,
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
                      "start": 721,
                      "end": 725,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 722,
                        "end": 725,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 724,
                          "end": 725,
                          "typeName": {
                            "type": "Identifier",
                            "start": 724,
                            "end": 725,
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
                    "start": 727,
                    "end": 743,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 729,
                        "end": 741,
                        "argument": {
                          "type": "Literal",
                          "start": 736,
                          "end": 740,
                          "value": null,
                          "raw": "null"
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
      "start": 748,
      "end": 768,
      "id": {
        "type": "Identifier",
        "start": 757,
        "end": 761,
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
          "start": 762,
          "end": 766,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 763,
            "end": 766,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 765,
              "end": 766,
              "typeName": {
                "type": "Identifier",
                "start": 765,
                "end": 766,
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
      "start": 769,
      "end": 789,
      "id": {
        "type": "Identifier",
        "start": 778,
        "end": 782,
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
          "start": 783,
          "end": 787,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 784,
            "end": 787,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 786,
              "end": 787,
              "typeName": {
                "type": "Identifier",
                "start": 786,
                "end": 787,
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
      "start": 799,
      "end": 824,
      "id": {
        "type": "Identifier",
        "start": 808,
        "end": 812,
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
          "start": 813,
          "end": 819,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 814,
            "end": 819,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 816,
              "end": 819
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 821,
        "end": 824,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 826,
      "end": 853,
      "id": {
        "type": "Identifier",
        "start": 835,
        "end": 840,
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
          "start": 841,
          "end": 851,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 842,
            "end": 851,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 844,
              "end": 851,
              "typeName": {
                "type": "Identifier",
                "start": 844,
                "end": 845,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 845,
                "end": 851,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 846,
                    "end": 850,
                    "typeName": {
                      "type": "Identifier",
                      "start": 846,
                      "end": 850,
                      "decorators": [],
                      "name": "Date",
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
      "start": 854,
      "end": 881,
      "id": {
        "type": "Identifier",
        "start": 863,
        "end": 868,
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
          "start": 869,
          "end": 879,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 870,
            "end": 879,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 872,
              "end": 879,
              "typeName": {
                "type": "Identifier",
                "start": 872,
                "end": 873,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 873,
                "end": 879,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 874,
                    "end": 878,
                    "typeName": {
                      "type": "Identifier",
                      "start": 874,
                      "end": 878,
                      "decorators": [],
                      "name": "Date",
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
      "start": 891,
      "end": 917,
      "id": {
        "type": "Identifier",
        "start": 900,
        "end": 905,
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
          "start": 906,
          "end": 912,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 907,
            "end": 912,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 909,
              "end": 912
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 914,
        "end": 917,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 919,
      "end": 946,
      "id": {
        "type": "Identifier",
        "start": 928,
        "end": 933,
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
          "start": 934,
          "end": 944,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 935,
            "end": 944,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 937,
              "end": 944,
              "typeName": {
                "type": "Identifier",
                "start": 937,
                "end": 938,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 938,
                "end": 944,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 939,
                    "end": 943,
                    "typeName": {
                      "type": "Identifier",
                      "start": 939,
                      "end": 943,
                      "decorators": [],
                      "name": "Date",
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
      "start": 947,
      "end": 974,
      "id": {
        "type": "Identifier",
        "start": 956,
        "end": 961,
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
          "start": 962,
          "end": 972,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 963,
            "end": 972,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 965,
              "end": 972,
              "typeName": {
                "type": "Identifier",
                "start": 965,
                "end": 966,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 966,
                "end": 972,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 967,
                    "end": 971,
                    "typeName": {
                      "type": "Identifier",
                      "start": 967,
                      "end": 971,
                      "decorators": [],
                      "name": "Date",
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
      "start": 984,
      "end": 1010,
      "id": {
        "type": "Identifier",
        "start": 993,
        "end": 998,
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
          "start": 999,
          "end": 1005,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1000,
            "end": 1005,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1002,
              "end": 1005
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1007,
        "end": 1010,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1012,
      "end": 1038,
      "id": {
        "type": "Identifier",
        "start": 1021,
        "end": 1025,
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
          "start": 1026,
          "end": 1036,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1027,
            "end": 1036,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1029,
              "end": 1036,
              "typeName": {
                "type": "Identifier",
                "start": 1029,
                "end": 1030,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1030,
                "end": 1036,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1031,
                    "end": 1035,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1031,
                      "end": 1035,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1039,
      "end": 1065,
      "id": {
        "type": "Identifier",
        "start": 1048,
        "end": 1052,
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
          "start": 1053,
          "end": 1063,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1054,
            "end": 1063,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1056,
              "end": 1063,
              "typeName": {
                "type": "Identifier",
                "start": 1056,
                "end": 1057,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1057,
                "end": 1063,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1058,
                    "end": 1062,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1058,
                      "end": 1062,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1075,
      "end": 1100,
      "id": {
        "type": "Identifier",
        "start": 1084,
        "end": 1088,
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
          "start": 1089,
          "end": 1095,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1090,
            "end": 1095,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1092,
              "end": 1095
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1097,
        "end": 1100,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1102,
      "end": 1129,
      "id": {
        "type": "Identifier",
        "start": 1111,
        "end": 1115,
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
          "start": 1116,
          "end": 1127,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1117,
            "end": 1127,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1119,
              "end": 1127,
              "exprName": {
                "type": "Identifier",
                "start": 1126,
                "end": 1127,
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
      "start": 1130,
      "end": 1157,
      "id": {
        "type": "Identifier",
        "start": 1139,
        "end": 1143,
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
          "start": 1144,
          "end": 1155,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1145,
            "end": 1155,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1147,
              "end": 1155,
              "exprName": {
                "type": "Identifier",
                "start": 1154,
                "end": 1155,
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
      "start": 1167,
      "end": 1192,
      "id": {
        "type": "Identifier",
        "start": 1176,
        "end": 1180,
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
          "start": 1181,
          "end": 1187,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1182,
            "end": 1187,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1184,
              "end": 1187
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1189,
        "end": 1192,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1194,
      "end": 1221,
      "id": {
        "type": "Identifier",
        "start": 1203,
        "end": 1207,
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
          "start": 1208,
          "end": 1219,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1209,
            "end": 1219,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1211,
              "end": 1219,
              "exprName": {
                "type": "Identifier",
                "start": 1218,
                "end": 1219,
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
      "start": 1222,
      "end": 1249,
      "id": {
        "type": "Identifier",
        "start": 1231,
        "end": 1235,
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
          "start": 1236,
          "end": 1247,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1237,
            "end": 1247,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1239,
              "end": 1247,
              "exprName": {
                "type": "Identifier",
                "start": 1246,
                "end": 1247,
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
      "start": 1259,
      "end": 1284,
      "id": {
        "type": "Identifier",
        "start": 1268,
        "end": 1272,
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
          "start": 1273,
          "end": 1279,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1274,
            "end": 1279,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1276,
              "end": 1279
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1281,
        "end": 1284,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1286,
      "end": 1306,
      "id": {
        "type": "Identifier",
        "start": 1295,
        "end": 1299,
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
          "start": 1300,
          "end": 1304,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1301,
            "end": 1304,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1303,
              "end": 1304,
              "typeName": {
                "type": "Identifier",
                "start": 1303,
                "end": 1304,
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
      "start": 1307,
      "end": 1333,
      "id": {
        "type": "Identifier",
        "start": 1316,
        "end": 1320,
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
          "start": 1321,
          "end": 1331,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1322,
            "end": 1331,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1324,
              "end": 1331,
              "typeName": {
                "type": "Identifier",
                "start": 1324,
                "end": 1325,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1325,
                "end": 1331,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1326,
                    "end": 1330,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1326,
                      "end": 1330,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1340,
      "end": 1365,
      "id": {
        "type": "Identifier",
        "start": 1349,
        "end": 1353,
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
          "start": 1354,
          "end": 1360,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1355,
            "end": 1360,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1357,
              "end": 1360
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1362,
        "end": 1365,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1367,
      "end": 1388,
      "id": {
        "type": "Identifier",
        "start": 1376,
        "end": 1381,
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
          "start": 1382,
          "end": 1386,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1383,
            "end": 1386,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1385,
              "end": 1386,
              "typeName": {
                "type": "Identifier",
                "start": 1385,
                "end": 1386,
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
      "start": 1389,
      "end": 1416,
      "id": {
        "type": "Identifier",
        "start": 1398,
        "end": 1403,
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
          "start": 1404,
          "end": 1414,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1405,
            "end": 1414,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1407,
              "end": 1414,
              "typeName": {
                "type": "Identifier",
                "start": 1407,
                "end": 1408,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1408,
                "end": 1414,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1409,
                    "end": 1413,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1409,
                      "end": 1413,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1423,
      "end": 1449,
      "id": {
        "type": "Identifier",
        "start": 1432,
        "end": 1437,
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
          "start": 1438,
          "end": 1444,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1439,
            "end": 1444,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1441,
              "end": 1444
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1446,
        "end": 1449,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1451,
      "end": 1471,
      "id": {
        "type": "Identifier",
        "start": 1460,
        "end": 1464,
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
          "start": 1465,
          "end": 1469,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1466,
            "end": 1469,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1468,
              "end": 1469,
              "typeName": {
                "type": "Identifier",
                "start": 1468,
                "end": 1469,
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
      "start": 1472,
      "end": 1498,
      "id": {
        "type": "Identifier",
        "start": 1481,
        "end": 1485,
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
          "start": 1486,
          "end": 1496,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1487,
            "end": 1496,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1489,
              "end": 1496,
              "typeName": {
                "type": "Identifier",
                "start": 1489,
                "end": 1490,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1490,
                "end": 1496,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1491,
                    "end": 1495,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1491,
                      "end": 1495,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1505,
      "end": 1530,
      "id": {
        "type": "Identifier",
        "start": 1514,
        "end": 1518,
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
          "start": 1519,
          "end": 1525,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1520,
            "end": 1525,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1522,
              "end": 1525
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1527,
        "end": 1530,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1532,
      "end": 1552,
      "id": {
        "type": "Identifier",
        "start": 1541,
        "end": 1545,
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
          "start": 1546,
          "end": 1550,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1547,
            "end": 1550,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1549,
              "end": 1550,
              "typeName": {
                "type": "Identifier",
                "start": 1549,
                "end": 1550,
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
      "start": 1553,
      "end": 1580,
      "id": {
        "type": "Identifier",
        "start": 1562,
        "end": 1566,
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
          "start": 1567,
          "end": 1578,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1568,
            "end": 1578,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1570,
              "end": 1578,
              "exprName": {
                "type": "Identifier",
                "start": 1577,
                "end": 1578,
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
      "start": 1587,
      "end": 1612,
      "id": {
        "type": "Identifier",
        "start": 1596,
        "end": 1600,
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
          "start": 1601,
          "end": 1607,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1602,
            "end": 1607,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1604,
              "end": 1607
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1609,
        "end": 1612,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1614,
      "end": 1640,
      "id": {
        "type": "Identifier",
        "start": 1623,
        "end": 1627,
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
          "start": 1628,
          "end": 1638,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1629,
            "end": 1638,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1631,
              "end": 1638,
              "typeName": {
                "type": "Identifier",
                "start": 1631,
                "end": 1632,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1632,
                "end": 1638,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1633,
                    "end": 1637,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1633,
                      "end": 1637,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1641,
      "end": 1667,
      "id": {
        "type": "Identifier",
        "start": 1650,
        "end": 1654,
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
          "start": 1655,
          "end": 1665,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1656,
            "end": 1665,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1658,
              "end": 1665,
              "typeName": {
                "type": "Identifier",
                "start": 1658,
                "end": 1659,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1659,
                "end": 1665,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1660,
                    "end": 1664,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1660,
                      "end": 1664,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1674,
      "end": 1699,
      "id": {
        "type": "Identifier",
        "start": 1683,
        "end": 1687,
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
          "start": 1688,
          "end": 1694,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1689,
            "end": 1694,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1691,
              "end": 1694
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1696,
        "end": 1699,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1701,
      "end": 1727,
      "id": {
        "type": "Identifier",
        "start": 1710,
        "end": 1714,
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
          "start": 1715,
          "end": 1725,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1716,
            "end": 1725,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1718,
              "end": 1725,
              "typeName": {
                "type": "Identifier",
                "start": 1718,
                "end": 1719,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1719,
                "end": 1725,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1720,
                    "end": 1724,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1720,
                      "end": 1724,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1728,
      "end": 1754,
      "id": {
        "type": "Identifier",
        "start": 1737,
        "end": 1741,
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
          "start": 1742,
          "end": 1752,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1743,
            "end": 1752,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1745,
              "end": 1752,
              "typeName": {
                "type": "Identifier",
                "start": 1745,
                "end": 1746,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1746,
                "end": 1752,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1747,
                    "end": 1751,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1747,
                      "end": 1751,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1761,
      "end": 1786,
      "id": {
        "type": "Identifier",
        "start": 1770,
        "end": 1774,
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
          "start": 1775,
          "end": 1781,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1776,
            "end": 1781,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1778,
              "end": 1781
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1783,
        "end": 1786,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1788,
      "end": 1815,
      "id": {
        "type": "Identifier",
        "start": 1797,
        "end": 1802,
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
          "start": 1803,
          "end": 1813,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1804,
            "end": 1813,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1806,
              "end": 1813,
              "typeName": {
                "type": "Identifier",
                "start": 1806,
                "end": 1807,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1807,
                "end": 1813,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1808,
                    "end": 1812,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1808,
                      "end": 1812,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1816,
      "end": 1844,
      "id": {
        "type": "Identifier",
        "start": 1825,
        "end": 1830,
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
          "start": 1831,
          "end": 1842,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1832,
            "end": 1842,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1834,
              "end": 1842,
              "exprName": {
                "type": "Identifier",
                "start": 1841,
                "end": 1842,
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
      "start": 1851,
      "end": 1877,
      "id": {
        "type": "Identifier",
        "start": 1860,
        "end": 1865,
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
          "start": 1866,
          "end": 1872,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1867,
            "end": 1872,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1869,
              "end": 1872
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1874,
        "end": 1877,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1879,
      "end": 1906,
      "id": {
        "type": "Identifier",
        "start": 1888,
        "end": 1893,
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
          "start": 1894,
          "end": 1904,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1895,
            "end": 1904,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1897,
              "end": 1904,
              "typeName": {
                "type": "Identifier",
                "start": 1897,
                "end": 1898,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1898,
                "end": 1904,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1899,
                    "end": 1903,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1899,
                      "end": 1903,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1907,
      "end": 1935,
      "id": {
        "type": "Identifier",
        "start": 1916,
        "end": 1921,
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
          "start": 1922,
          "end": 1933,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1923,
            "end": 1933,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1925,
              "end": 1933,
              "exprName": {
                "type": "Identifier",
                "start": 1932,
                "end": 1933,
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
      "start": 1942,
      "end": 1968,
      "id": {
        "type": "Identifier",
        "start": 1951,
        "end": 1956,
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
          "start": 1957,
          "end": 1963,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1958,
            "end": 1963,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1960,
              "end": 1963
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1965,
        "end": 1968,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1970,
      "end": 1997,
      "id": {
        "type": "Identifier",
        "start": 1979,
        "end": 1984,
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
          "start": 1985,
          "end": 1995,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1986,
            "end": 1995,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1988,
              "end": 1995,
              "typeName": {
                "type": "Identifier",
                "start": 1988,
                "end": 1989,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1989,
                "end": 1995,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1990,
                    "end": 1994,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1990,
                      "end": 1994,
                      "decorators": [],
                      "name": "Date",
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
      "start": 1998,
      "end": 2025,
      "id": {
        "type": "Identifier",
        "start": 2007,
        "end": 2012,
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
          "start": 2013,
          "end": 2023,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2014,
            "end": 2023,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2016,
              "end": 2023,
              "typeName": {
                "type": "Identifier",
                "start": 2016,
                "end": 2017,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2017,
                "end": 2023,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2018,
                    "end": 2022,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2018,
                      "end": 2022,
                      "decorators": [],
                      "name": "Date",
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
      "start": 2032,
      "end": 2058,
      "id": {
        "type": "Identifier",
        "start": 2041,
        "end": 2046,
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
          "start": 2047,
          "end": 2053,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2048,
            "end": 2053,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2050,
              "end": 2053
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2055,
        "end": 2058,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2060,
      "end": 2083,
      "id": {
        "type": "Identifier",
        "start": 2069,
        "end": 2075,
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
          "start": 2076,
          "end": 2081,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2077,
            "end": 2081,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2079,
              "end": 2081,
              "typeName": {
                "type": "Identifier",
                "start": 2079,
                "end": 2081,
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
      "start": 2084,
      "end": 2112,
      "id": {
        "type": "Identifier",
        "start": 2093,
        "end": 2099,
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
          "start": 2100,
          "end": 2110,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2101,
            "end": 2110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2103,
              "end": 2110,
              "typeName": {
                "type": "Identifier",
                "start": 2103,
                "end": 2104,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2104,
                "end": 2110,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2105,
                    "end": 2109,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2105,
                      "end": 2109,
                      "decorators": [],
                      "name": "Date",
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
      "start": 2119,
      "end": 2146,
      "id": {
        "type": "Identifier",
        "start": 2128,
        "end": 2134,
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
          "start": 2135,
          "end": 2141,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2136,
            "end": 2141,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2138,
              "end": 2141
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2143,
        "end": 2146,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2148,
      "end": 2175,
      "id": {
        "type": "Identifier",
        "start": 2157,
        "end": 2162,
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
          "start": 2163,
          "end": 2173,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2164,
            "end": 2173,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2166,
              "end": 2173,
              "typeName": {
                "type": "Identifier",
                "start": 2166,
                "end": 2167,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2167,
                "end": 2173,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2168,
                    "end": 2172,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2168,
                      "end": 2172,
                      "decorators": [],
                      "name": "Date",
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
      "start": 2176,
      "end": 2204,
      "id": {
        "type": "Identifier",
        "start": 2185,
        "end": 2190,
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
          "start": 2191,
          "end": 2202,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2192,
            "end": 2202,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2194,
              "end": 2202,
              "exprName": {
                "type": "Identifier",
                "start": 2201,
                "end": 2202,
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
      "start": 2211,
      "end": 2237,
      "id": {
        "type": "Identifier",
        "start": 2220,
        "end": 2225,
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
          "start": 2226,
          "end": 2232,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2227,
            "end": 2232,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2229,
              "end": 2232
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2234,
        "end": 2237,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2239,
      "end": 2266,
      "id": {
        "type": "Identifier",
        "start": 2248,
        "end": 2253,
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
          "start": 2254,
          "end": 2264,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2255,
            "end": 2264,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2257,
              "end": 2264,
              "typeName": {
                "type": "Identifier",
                "start": 2257,
                "end": 2258,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2258,
                "end": 2264,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2259,
                    "end": 2263,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2259,
                      "end": 2263,
                      "decorators": [],
                      "name": "Date",
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
      "start": 2267,
      "end": 2295,
      "id": {
        "type": "Identifier",
        "start": 2276,
        "end": 2281,
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
          "start": 2282,
          "end": 2293,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2283,
            "end": 2293,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2285,
              "end": 2293,
              "exprName": {
                "type": "Identifier",
                "start": 2292,
                "end": 2293,
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
      "start": 2302,
      "end": 2328,
      "id": {
        "type": "Identifier",
        "start": 2311,
        "end": 2316,
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
          "start": 2317,
          "end": 2323,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2318,
            "end": 2323,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2320,
              "end": 2323
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2325,
        "end": 2328,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 2330,
      "end": 2352,
      "id": {
        "type": "Identifier",
        "start": 2339,
        "end": 2344,
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
          "start": 2345,
          "end": 2350,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2346,
            "end": 2350,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2348,
              "end": 2350,
              "typeName": {
                "type": "Identifier",
                "start": 2348,
                "end": 2350,
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
      "start": 2353,
      "end": 2380,
      "id": {
        "type": "Identifier",
        "start": 2362,
        "end": 2367,
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
          "start": 2368,
          "end": 2378,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2369,
            "end": 2378,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2371,
              "end": 2378,
              "typeName": {
                "type": "Identifier",
                "start": 2371,
                "end": 2372,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2372,
                "end": 2378,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2373,
                    "end": 2377,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2373,
                      "end": 2377,
                      "decorators": [],
                      "name": "Date",
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
      "start": 2387,
      "end": 2413,
      "id": {
        "type": "Identifier",
        "start": 2396,
        "end": 2401,
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
          "start": 2402,
          "end": 2408,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2403,
            "end": 2408,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2405,
              "end": 2408
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2410,
        "end": 2413,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
