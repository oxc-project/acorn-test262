__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 335,
  "end": 2596,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 393,
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
        "end": 393,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 391,
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
              "end": 391,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 359,
                  "end": 363,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 360,
                    "end": 363,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 362,
                      "end": 363,
                      "typeName": {
                        "type": "Identifier",
                        "start": 362,
                        "end": 363,
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
                },
                {
                  "type": "Identifier",
                  "start": 365,
                  "end": 370,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 367,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 369,
                      "end": 370,
                      "typeName": {
                        "type": "Identifier",
                        "start": 369,
                        "end": 370,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 375,
                "end": 391,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 377,
                    "end": 389,
                    "argument": {
                      "type": "Literal",
                      "start": 384,
                      "end": 388,
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
                "end": 358,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 356,
                    "end": 357,
                    "name": {
                      "type": "Identifier",
                      "start": 356,
                      "end": 357,
                      "name": "U",
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
                "start": 371,
                "end": 374,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 373,
                  "end": 374,
                  "typeName": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 374,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "start": 395,
      "end": 453,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 402,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 453,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 415,
            "end": 451,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 415,
              "end": 418,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 418,
              "end": 451,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 419,
                  "end": 423,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 420,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 422,
                      "end": 423,
                      "typeName": {
                        "type": "Identifier",
                        "start": 422,
                        "end": 423,
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
                },
                {
                  "type": "Identifier",
                  "start": 425,
                  "end": 430,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 427,
                    "end": 430,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 429,
                      "end": 430,
                      "typeName": {
                        "type": "Identifier",
                        "start": 429,
                        "end": 430,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 435,
                "end": 451,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 437,
                    "end": 449,
                    "argument": {
                      "type": "Literal",
                      "start": 444,
                      "end": 448,
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
                "start": 431,
                "end": 434,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 433,
                  "end": 434,
                  "typeName": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "start": 402,
        "end": 408,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 403,
            "end": 404,
            "name": {
              "type": "Identifier",
              "start": 403,
              "end": 404,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 406,
            "end": 407,
            "name": {
              "type": "Identifier",
              "start": 406,
              "end": 407,
              "name": "U",
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
      "start": 455,
      "end": 513,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 462,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 469,
        "end": 513,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 475,
            "end": 511,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 475,
              "end": 478,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 478,
              "end": 511,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 479,
                  "end": 483,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 480,
                    "end": 483,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 482,
                      "end": 483,
                      "typeName": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 483,
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
                },
                {
                  "type": "Identifier",
                  "start": 485,
                  "end": 490,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 487,
                    "end": 490,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 489,
                      "end": 490,
                      "typeName": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 490,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 495,
                "end": 511,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 497,
                    "end": 509,
                    "argument": {
                      "type": "Literal",
                      "start": 504,
                      "end": 508,
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
                "start": 491,
                "end": 494,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 493,
                  "end": 494,
                  "typeName": {
                    "type": "Identifier",
                    "start": 493,
                    "end": 494,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "start": 462,
        "end": 468,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 463,
            "end": 464,
            "name": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 466,
            "end": 467,
            "name": {
              "type": "Identifier",
              "start": 466,
              "end": 467,
              "name": "U",
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
      "start": 515,
      "end": 561,
      "id": {
        "type": "Identifier",
        "start": 525,
        "end": 526,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 526,
        "end": 532,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 527,
            "end": 528,
            "name": {
              "type": "Identifier",
              "start": 527,
              "end": 528,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 530,
            "end": 531,
            "name": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
              "name": "U",
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
        "start": 533,
        "end": 561,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 539,
            "end": 559,
            "key": {
              "type": "Identifier",
              "start": 539,
              "end": 542,
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
                "start": 543,
                "end": 547,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 544,
                  "end": 547,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 546,
                    "end": 547,
                    "typeName": {
                      "type": "Identifier",
                      "start": 546,
                      "end": 547,
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
              },
              {
                "type": "Identifier",
                "start": 549,
                "end": 554,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 551,
                  "end": 554,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 553,
                    "end": 554,
                    "typeName": {
                      "type": "Identifier",
                      "start": 553,
                      "end": 554,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 555,
              "end": 558,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 557,
                "end": 558,
                "typeName": {
                  "type": "Identifier",
                  "start": 557,
                  "end": 558,
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
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 563,
      "end": 610,
      "id": {
        "type": "Identifier",
        "start": 573,
        "end": 575,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 576,
        "end": 610,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 582,
            "end": 608,
            "key": {
              "type": "Identifier",
              "start": 582,
              "end": 585,
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
              "start": 585,
              "end": 591,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 586,
                  "end": 587,
                  "name": {
                    "type": "Identifier",
                    "start": 586,
                    "end": 587,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 589,
                  "end": 590,
                  "name": {
                    "type": "Identifier",
                    "start": 589,
                    "end": 590,
                    "name": "U",
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
                "start": 592,
                "end": 596,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 593,
                  "end": 596,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 595,
                    "end": 596,
                    "typeName": {
                      "type": "Identifier",
                      "start": 595,
                      "end": 596,
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
              },
              {
                "type": "Identifier",
                "start": 598,
                "end": 603,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 600,
                  "end": 603,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 602,
                    "end": 603,
                    "typeName": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 603,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 604,
              "end": 607,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 606,
                "end": 607,
                "typeName": {
                  "type": "Identifier",
                  "start": 606,
                  "end": 607,
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
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 612,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 648,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 648,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 617,
              "end": 648,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 619,
                "end": 648,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 621,
                    "end": 646,
                    "key": {
                      "type": "Identifier",
                      "start": 621,
                      "end": 624,
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
                      "start": 624,
                      "end": 630,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 625,
                          "end": 626,
                          "name": {
                            "type": "Identifier",
                            "start": 625,
                            "end": 626,
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
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 628,
                          "end": 629,
                          "name": {
                            "type": "Identifier",
                            "start": 628,
                            "end": 629,
                            "name": "U",
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
                        "start": 631,
                        "end": 635,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 632,
                          "end": 635,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 634,
                            "end": 635,
                            "typeName": {
                              "type": "Identifier",
                              "start": 634,
                              "end": 635,
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
                      },
                      {
                        "type": "Identifier",
                        "start": 637,
                        "end": 642,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 639,
                          "end": 642,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 641,
                            "end": 642,
                            "typeName": {
                              "type": "Identifier",
                              "start": 641,
                              "end": 642,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 643,
                      "end": 646,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 645,
                        "end": 646,
                        "typeName": {
                          "type": "Identifier",
                          "start": 645,
                          "end": 646,
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
      "start": 649,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 653,
          "end": 697,
          "id": {
            "type": "Identifier",
            "start": 653,
            "end": 654,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 657,
            "end": 697,
            "properties": [
              {
                "type": "Property",
                "start": 659,
                "end": 695,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 662,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 662,
                  "end": 695,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 669,
                      "end": 673,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 670,
                        "end": 673,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 672,
                          "end": 673,
                          "typeName": {
                            "type": "Identifier",
                            "start": 672,
                            "end": 673,
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
                    },
                    {
                      "type": "Identifier",
                      "start": 675,
                      "end": 680,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 677,
                        "end": 680,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 679,
                          "end": 680,
                          "typeName": {
                            "type": "Identifier",
                            "start": 679,
                            "end": 680,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "decorators": [],
                      "optional": true
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 682,
                    "end": 695,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 684,
                        "end": 693,
                        "argument": {
                          "type": "Identifier",
                          "start": 691,
                          "end": 692,
                          "name": "x",
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
                    "start": 662,
                    "end": 668,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 663,
                        "end": 664,
                        "name": {
                          "type": "Identifier",
                          "start": 663,
                          "end": 664,
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
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 666,
                        "end": 667,
                        "name": {
                          "type": "Identifier",
                          "start": 666,
                          "end": 667,
                          "name": "U",
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
      "start": 700,
      "end": 720,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 713,
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
          "start": 714,
          "end": 718,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 715,
            "end": 718,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 717,
              "end": 718,
              "typeName": {
                "type": "Identifier",
                "start": 717,
                "end": 718,
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
      "start": 721,
      "end": 741,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 734,
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
          "start": 735,
          "end": 739,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 736,
            "end": 739,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 738,
              "end": 739,
              "typeName": {
                "type": "Identifier",
                "start": 738,
                "end": 739,
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
      "start": 751,
      "end": 776,
      "id": {
        "type": "Identifier",
        "start": 760,
        "end": 764,
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
          "start": 765,
          "end": 771,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 766,
            "end": 771,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 768,
              "end": 771
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 773,
        "end": 776,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 778,
      "end": 815,
      "id": {
        "type": "Identifier",
        "start": 787,
        "end": 792,
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
          "start": 793,
          "end": 813,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 794,
            "end": 813,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 796,
              "end": 813,
              "typeName": {
                "type": "Identifier",
                "start": 796,
                "end": 797,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 797,
                "end": 813,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 798,
                    "end": 804
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 806,
                    "end": 812
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
      "start": 816,
      "end": 853,
      "id": {
        "type": "Identifier",
        "start": 825,
        "end": 830,
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
          "start": 831,
          "end": 851,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 832,
            "end": 851,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 834,
              "end": 851,
              "typeName": {
                "type": "Identifier",
                "start": 834,
                "end": 835,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 835,
                "end": 851,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 836,
                    "end": 842
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 844,
                    "end": 850
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
      "start": 863,
      "end": 889,
      "id": {
        "type": "Identifier",
        "start": 872,
        "end": 877,
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
          "start": 878,
          "end": 884,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 879,
            "end": 884,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 881,
              "end": 884
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 886,
        "end": 889,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 891,
      "end": 928,
      "id": {
        "type": "Identifier",
        "start": 900,
        "end": 905,
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
          "start": 906,
          "end": 926,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 907,
            "end": 926,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 909,
              "end": 926,
              "typeName": {
                "type": "Identifier",
                "start": 909,
                "end": 910,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 910,
                "end": 926,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 911,
                    "end": 917
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 919,
                    "end": 925
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
      "start": 929,
      "end": 966,
      "id": {
        "type": "Identifier",
        "start": 938,
        "end": 943,
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
          "start": 944,
          "end": 964,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 945,
            "end": 964,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 947,
              "end": 964,
              "typeName": {
                "type": "Identifier",
                "start": 947,
                "end": 948,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 948,
                "end": 964,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 949,
                    "end": 955
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 957,
                    "end": 963
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
      "start": 976,
      "end": 1002,
      "id": {
        "type": "Identifier",
        "start": 985,
        "end": 990,
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
          "start": 991,
          "end": 997,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 992,
            "end": 997,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 994,
              "end": 997
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 999,
        "end": 1002,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1004,
      "end": 1040,
      "id": {
        "type": "Identifier",
        "start": 1013,
        "end": 1017,
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
          "start": 1018,
          "end": 1038,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1019,
            "end": 1038,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1021,
              "end": 1038,
              "typeName": {
                "type": "Identifier",
                "start": 1021,
                "end": 1022,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1022,
                "end": 1038,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1023,
                    "end": 1029
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1031,
                    "end": 1037
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
      "start": 1041,
      "end": 1077,
      "id": {
        "type": "Identifier",
        "start": 1050,
        "end": 1054,
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
          "start": 1055,
          "end": 1075,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1056,
            "end": 1075,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1058,
              "end": 1075,
              "typeName": {
                "type": "Identifier",
                "start": 1058,
                "end": 1059,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1059,
                "end": 1075,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1060,
                    "end": 1066
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1068,
                    "end": 1074
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
      "start": 1087,
      "end": 1112,
      "id": {
        "type": "Identifier",
        "start": 1096,
        "end": 1100,
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
          "start": 1101,
          "end": 1107,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1102,
            "end": 1107,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1104,
              "end": 1107
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1109,
        "end": 1112,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1114,
      "end": 1141,
      "id": {
        "type": "Identifier",
        "start": 1123,
        "end": 1127,
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
          "start": 1128,
          "end": 1139,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1129,
            "end": 1139,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1131,
              "end": 1139,
              "exprName": {
                "type": "Identifier",
                "start": 1138,
                "end": 1139,
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
      "start": 1142,
      "end": 1169,
      "id": {
        "type": "Identifier",
        "start": 1151,
        "end": 1155,
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
          "start": 1156,
          "end": 1167,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1157,
            "end": 1167,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1159,
              "end": 1167,
              "exprName": {
                "type": "Identifier",
                "start": 1166,
                "end": 1167,
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
      "start": 1179,
      "end": 1204,
      "id": {
        "type": "Identifier",
        "start": 1188,
        "end": 1192,
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
          "start": 1193,
          "end": 1199,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1194,
            "end": 1199,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1196,
              "end": 1199
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1201,
        "end": 1204,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1206,
      "end": 1233,
      "id": {
        "type": "Identifier",
        "start": 1215,
        "end": 1219,
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
          "start": 1220,
          "end": 1231,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1221,
            "end": 1231,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1223,
              "end": 1231,
              "exprName": {
                "type": "Identifier",
                "start": 1230,
                "end": 1231,
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
      "start": 1234,
      "end": 1261,
      "id": {
        "type": "Identifier",
        "start": 1243,
        "end": 1247,
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
          "start": 1248,
          "end": 1259,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1249,
            "end": 1259,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1251,
              "end": 1259,
              "exprName": {
                "type": "Identifier",
                "start": 1258,
                "end": 1259,
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
      "start": 1271,
      "end": 1296,
      "id": {
        "type": "Identifier",
        "start": 1280,
        "end": 1284,
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
          "start": 1285,
          "end": 1291,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1286,
            "end": 1291,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1288,
              "end": 1291
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1293,
        "end": 1296,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1298,
      "end": 1318,
      "id": {
        "type": "Identifier",
        "start": 1307,
        "end": 1311,
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
          "start": 1312,
          "end": 1316,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1313,
            "end": 1316,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1315,
              "end": 1316,
              "typeName": {
                "type": "Identifier",
                "start": 1315,
                "end": 1316,
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
      "start": 1319,
      "end": 1355,
      "id": {
        "type": "Identifier",
        "start": 1328,
        "end": 1332,
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
          "start": 1333,
          "end": 1353,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1334,
            "end": 1353,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1336,
              "end": 1353,
              "typeName": {
                "type": "Identifier",
                "start": 1336,
                "end": 1337,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1337,
                "end": 1353,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1338,
                    "end": 1344
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1346,
                    "end": 1352
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
      "start": 1362,
      "end": 1387,
      "id": {
        "type": "Identifier",
        "start": 1371,
        "end": 1375,
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
          "start": 1376,
          "end": 1382,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1377,
            "end": 1382,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1379,
              "end": 1382
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1384,
        "end": 1387,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1389,
      "end": 1410,
      "id": {
        "type": "Identifier",
        "start": 1398,
        "end": 1403,
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
          "start": 1404,
          "end": 1408,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1405,
            "end": 1408,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1407,
              "end": 1408,
              "typeName": {
                "type": "Identifier",
                "start": 1407,
                "end": 1408,
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
      "start": 1411,
      "end": 1448,
      "id": {
        "type": "Identifier",
        "start": 1420,
        "end": 1425,
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
          "start": 1426,
          "end": 1446,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1427,
            "end": 1446,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1429,
              "end": 1446,
              "typeName": {
                "type": "Identifier",
                "start": 1429,
                "end": 1430,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1430,
                "end": 1446,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1431,
                    "end": 1437
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1439,
                    "end": 1445
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
      "start": 1455,
      "end": 1481,
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
          "end": 1476,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1471,
            "end": 1476,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1473,
              "end": 1476
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1478,
        "end": 1481,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1483,
      "end": 1503,
      "id": {
        "type": "Identifier",
        "start": 1492,
        "end": 1496,
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
          "start": 1497,
          "end": 1501,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1498,
            "end": 1501,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1500,
              "end": 1501,
              "typeName": {
                "type": "Identifier",
                "start": 1500,
                "end": 1501,
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
      "start": 1504,
      "end": 1540,
      "id": {
        "type": "Identifier",
        "start": 1513,
        "end": 1517,
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
          "start": 1518,
          "end": 1538,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1519,
            "end": 1538,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1521,
              "end": 1538,
              "typeName": {
                "type": "Identifier",
                "start": 1521,
                "end": 1522,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1522,
                "end": 1538,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1523,
                    "end": 1529
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1531,
                    "end": 1537
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
      "start": 1547,
      "end": 1572,
      "id": {
        "type": "Identifier",
        "start": 1556,
        "end": 1560,
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
          "start": 1561,
          "end": 1567,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1562,
            "end": 1567,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1564,
              "end": 1567
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1569,
        "end": 1572,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1574,
      "end": 1594,
      "id": {
        "type": "Identifier",
        "start": 1583,
        "end": 1587,
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
          "start": 1588,
          "end": 1592,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1589,
            "end": 1592,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1591,
              "end": 1592,
              "typeName": {
                "type": "Identifier",
                "start": 1591,
                "end": 1592,
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
      "start": 1595,
      "end": 1622,
      "id": {
        "type": "Identifier",
        "start": 1604,
        "end": 1608,
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
          "start": 1609,
          "end": 1620,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1610,
            "end": 1620,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1612,
              "end": 1620,
              "exprName": {
                "type": "Identifier",
                "start": 1619,
                "end": 1620,
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
      "start": 1641,
      "end": 1666,
      "id": {
        "type": "Identifier",
        "start": 1650,
        "end": 1654,
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
          "start": 1655,
          "end": 1661,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1656,
            "end": 1661,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1658,
              "end": 1661
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1663,
        "end": 1666,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1668,
      "end": 1704,
      "id": {
        "type": "Identifier",
        "start": 1677,
        "end": 1681,
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
          "start": 1682,
          "end": 1702,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1683,
            "end": 1702,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1685,
              "end": 1702,
              "typeName": {
                "type": "Identifier",
                "start": 1685,
                "end": 1686,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1686,
                "end": 1702,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1687,
                    "end": 1693
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1695,
                    "end": 1701
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
      "start": 1705,
      "end": 1741,
      "id": {
        "type": "Identifier",
        "start": 1714,
        "end": 1718,
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
          "start": 1719,
          "end": 1739,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1720,
            "end": 1739,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1722,
              "end": 1739,
              "typeName": {
                "type": "Identifier",
                "start": 1722,
                "end": 1723,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1723,
                "end": 1739,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1724,
                    "end": 1730
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1732,
                    "end": 1738
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
      "start": 1751,
      "end": 1776,
      "id": {
        "type": "Identifier",
        "start": 1760,
        "end": 1764,
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
          "start": 1765,
          "end": 1771,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1766,
            "end": 1771,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1768,
              "end": 1771
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1773,
        "end": 1776,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1778,
      "end": 1814,
      "id": {
        "type": "Identifier",
        "start": 1787,
        "end": 1791,
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
          "start": 1792,
          "end": 1812,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1793,
            "end": 1812,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1795,
              "end": 1812,
              "typeName": {
                "type": "Identifier",
                "start": 1795,
                "end": 1796,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1796,
                "end": 1812,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1797,
                    "end": 1803
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1805,
                    "end": 1811
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
      "start": 1815,
      "end": 1851,
      "id": {
        "type": "Identifier",
        "start": 1824,
        "end": 1828,
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
          "start": 1829,
          "end": 1849,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1830,
            "end": 1849,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1832,
              "end": 1849,
              "typeName": {
                "type": "Identifier",
                "start": 1832,
                "end": 1833,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1833,
                "end": 1849,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1834,
                    "end": 1840
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1842,
                    "end": 1848
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
      "start": 1861,
      "end": 1886,
      "id": {
        "type": "Identifier",
        "start": 1870,
        "end": 1874,
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
          "start": 1875,
          "end": 1881,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1876,
            "end": 1881,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1878,
              "end": 1881
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1883,
        "end": 1886,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1888,
      "end": 1925,
      "id": {
        "type": "Identifier",
        "start": 1897,
        "end": 1902,
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
          "start": 1903,
          "end": 1923,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1904,
            "end": 1923,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1906,
              "end": 1923,
              "typeName": {
                "type": "Identifier",
                "start": 1906,
                "end": 1907,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1907,
                "end": 1923,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1908,
                    "end": 1914
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1916,
                    "end": 1922
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
      "start": 1926,
      "end": 1954,
      "id": {
        "type": "Identifier",
        "start": 1935,
        "end": 1940,
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
          "start": 1941,
          "end": 1952,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1942,
            "end": 1952,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1944,
              "end": 1952,
              "exprName": {
                "type": "Identifier",
                "start": 1951,
                "end": 1952,
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
      "start": 1961,
      "end": 1987,
      "id": {
        "type": "Identifier",
        "start": 1970,
        "end": 1975,
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
          "start": 1976,
          "end": 1982,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1977,
            "end": 1982,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1979,
              "end": 1982
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1984,
        "end": 1987,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1989,
      "end": 2026,
      "id": {
        "type": "Identifier",
        "start": 1998,
        "end": 2003,
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
          "start": 2004,
          "end": 2024,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2005,
            "end": 2024,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2007,
              "end": 2024,
              "typeName": {
                "type": "Identifier",
                "start": 2007,
                "end": 2008,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2008,
                "end": 2024,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2009,
                    "end": 2015
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2017,
                    "end": 2023
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
      "start": 2027,
      "end": 2055,
      "id": {
        "type": "Identifier",
        "start": 2036,
        "end": 2041,
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
          "start": 2042,
          "end": 2053,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2043,
            "end": 2053,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2045,
              "end": 2053,
              "exprName": {
                "type": "Identifier",
                "start": 2052,
                "end": 2053,
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
      "start": 2062,
      "end": 2088,
      "id": {
        "type": "Identifier",
        "start": 2071,
        "end": 2076,
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
          "start": 2077,
          "end": 2083,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2078,
            "end": 2083,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2080,
              "end": 2083
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2085,
        "end": 2088,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2090,
      "end": 2127,
      "id": {
        "type": "Identifier",
        "start": 2099,
        "end": 2104,
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
          "start": 2105,
          "end": 2125,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2106,
            "end": 2125,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2108,
              "end": 2125,
              "typeName": {
                "type": "Identifier",
                "start": 2108,
                "end": 2109,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2109,
                "end": 2125,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2110,
                    "end": 2116
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2118,
                    "end": 2124
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
      "start": 2128,
      "end": 2165,
      "id": {
        "type": "Identifier",
        "start": 2137,
        "end": 2142,
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
          "start": 2143,
          "end": 2163,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2144,
            "end": 2163,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2146,
              "end": 2163,
              "typeName": {
                "type": "Identifier",
                "start": 2146,
                "end": 2147,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2147,
                "end": 2163,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2148,
                    "end": 2154
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2156,
                    "end": 2162
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
      "start": 2175,
      "end": 2201,
      "id": {
        "type": "Identifier",
        "start": 2184,
        "end": 2189,
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
          "start": 2190,
          "end": 2196,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2191,
            "end": 2196,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2193,
              "end": 2196
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2198,
        "end": 2201,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2203,
      "end": 2226,
      "id": {
        "type": "Identifier",
        "start": 2212,
        "end": 2218,
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
          "start": 2219,
          "end": 2224,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2220,
            "end": 2224,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2222,
              "end": 2224,
              "typeName": {
                "type": "Identifier",
                "start": 2222,
                "end": 2224,
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
      "start": 2227,
      "end": 2265,
      "id": {
        "type": "Identifier",
        "start": 2236,
        "end": 2242,
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
          "start": 2243,
          "end": 2263,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2244,
            "end": 2263,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2246,
              "end": 2263,
              "typeName": {
                "type": "Identifier",
                "start": 2246,
                "end": 2247,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2247,
                "end": 2263,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2248,
                    "end": 2254
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2256,
                    "end": 2262
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
      "start": 2272,
      "end": 2299,
      "id": {
        "type": "Identifier",
        "start": 2281,
        "end": 2287,
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
          "start": 2288,
          "end": 2294,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2289,
            "end": 2294,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2291,
              "end": 2294
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2296,
        "end": 2299,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2301,
      "end": 2338,
      "id": {
        "type": "Identifier",
        "start": 2310,
        "end": 2315,
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
          "start": 2316,
          "end": 2336,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2317,
            "end": 2336,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2319,
              "end": 2336,
              "typeName": {
                "type": "Identifier",
                "start": 2319,
                "end": 2320,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2320,
                "end": 2336,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2321,
                    "end": 2327
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2329,
                    "end": 2335
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
      "start": 2339,
      "end": 2367,
      "id": {
        "type": "Identifier",
        "start": 2348,
        "end": 2353,
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
          "start": 2354,
          "end": 2365,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2355,
            "end": 2365,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2357,
              "end": 2365,
              "exprName": {
                "type": "Identifier",
                "start": 2364,
                "end": 2365,
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
      "start": 2374,
      "end": 2400,
      "id": {
        "type": "Identifier",
        "start": 2383,
        "end": 2388,
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
          "start": 2389,
          "end": 2395,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2390,
            "end": 2395,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2392,
              "end": 2395
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2397,
        "end": 2400,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2402,
      "end": 2439,
      "id": {
        "type": "Identifier",
        "start": 2411,
        "end": 2416,
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
          "start": 2417,
          "end": 2437,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2418,
            "end": 2437,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2420,
              "end": 2437,
              "typeName": {
                "type": "Identifier",
                "start": 2420,
                "end": 2421,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2421,
                "end": 2437,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2422,
                    "end": 2428
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2430,
                    "end": 2436
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
      "start": 2440,
      "end": 2468,
      "id": {
        "type": "Identifier",
        "start": 2449,
        "end": 2454,
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
          "start": 2455,
          "end": 2466,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2456,
            "end": 2466,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2458,
              "end": 2466,
              "exprName": {
                "type": "Identifier",
                "start": 2465,
                "end": 2466,
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
      "start": 2475,
      "end": 2501,
      "id": {
        "type": "Identifier",
        "start": 2484,
        "end": 2489,
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
          "start": 2490,
          "end": 2496,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2491,
            "end": 2496,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2493,
              "end": 2496
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2498,
        "end": 2501,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2503,
      "end": 2525,
      "id": {
        "type": "Identifier",
        "start": 2512,
        "end": 2517,
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
          "start": 2518,
          "end": 2523,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2519,
            "end": 2523,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2521,
              "end": 2523,
              "typeName": {
                "type": "Identifier",
                "start": 2521,
                "end": 2523,
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
      "start": 2526,
      "end": 2563,
      "id": {
        "type": "Identifier",
        "start": 2535,
        "end": 2540,
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
          "start": 2541,
          "end": 2561,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2542,
            "end": 2561,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2544,
              "end": 2561,
              "typeName": {
                "type": "Identifier",
                "start": 2544,
                "end": 2545,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2545,
                "end": 2561,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2546,
                    "end": 2552
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2554,
                    "end": 2560
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
      "start": 2570,
      "end": 2596,
      "id": {
        "type": "Identifier",
        "start": 2579,
        "end": 2584,
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
          "start": 2585,
          "end": 2591,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2586,
            "end": 2591,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2588,
              "end": 2591
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2593,
        "end": 2596,
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
