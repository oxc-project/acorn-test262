__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 335,
  "end": 2587,
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
      "end": 452,
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
        "end": 452,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 415,
            "end": 450,
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
              "end": 450,
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
                  "end": 429,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 426,
                    "end": 429,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 428,
                      "end": 429,
                      "typeName": {
                        "type": "Identifier",
                        "start": 428,
                        "end": 429,
                        "name": "U",
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
                "start": 434,
                "end": 450,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 436,
                    "end": 448,
                    "argument": {
                      "type": "Literal",
                      "start": 443,
                      "end": 447,
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
                "start": 430,
                "end": 433,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 432,
                  "end": 433,
                  "typeName": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
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
      "start": 454,
      "end": 512,
      "id": {
        "type": "Identifier",
        "start": 460,
        "end": 461,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 468,
        "end": 512,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 474,
            "end": 510,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 474,
              "end": 477,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 477,
              "end": 510,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 478,
                  "end": 482,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 479,
                    "end": 482,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 481,
                      "end": 482,
                      "typeName": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 482,
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
                  "start": 484,
                  "end": 489,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 486,
                    "end": 489,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 488,
                      "end": 489,
                      "typeName": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 489,
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
                "start": 494,
                "end": 510,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 496,
                    "end": 508,
                    "argument": {
                      "type": "Literal",
                      "start": 503,
                      "end": 507,
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
                "start": 490,
                "end": 493,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 492,
                  "end": 493,
                  "typeName": {
                    "type": "Identifier",
                    "start": 492,
                    "end": 493,
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
        "start": 461,
        "end": 467,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 462,
            "end": 463,
            "name": {
              "type": "Identifier",
              "start": 462,
              "end": 463,
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
            "start": 465,
            "end": 466,
            "name": {
              "type": "Identifier",
              "start": 465,
              "end": 466,
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
      "start": 514,
      "end": 560,
      "id": {
        "type": "Identifier",
        "start": 524,
        "end": 525,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 525,
        "end": 531,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 526,
            "end": 527,
            "name": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
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
            "start": 529,
            "end": 530,
            "name": {
              "type": "Identifier",
              "start": 529,
              "end": 530,
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
        "start": 532,
        "end": 560,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 538,
            "end": 558,
            "key": {
              "type": "Identifier",
              "start": 538,
              "end": 541,
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
                "start": 542,
                "end": 546,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 543,
                  "end": 546,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 545,
                    "end": 546,
                    "typeName": {
                      "type": "Identifier",
                      "start": 545,
                      "end": 546,
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
                "start": 548,
                "end": 553,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 550,
                  "end": 553,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 552,
                    "end": 553,
                    "typeName": {
                      "type": "Identifier",
                      "start": 552,
                      "end": 553,
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
              "start": 554,
              "end": 557,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 556,
                "end": 557,
                "typeName": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 557,
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
      "start": 562,
      "end": 608,
      "id": {
        "type": "Identifier",
        "start": 572,
        "end": 574,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 575,
        "end": 608,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 581,
            "end": 606,
            "key": {
              "type": "Identifier",
              "start": 581,
              "end": 584,
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
              "start": 584,
              "end": 590,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 585,
                  "end": 586,
                  "name": {
                    "type": "Identifier",
                    "start": 585,
                    "end": 586,
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
                  "start": 588,
                  "end": 589,
                  "name": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 589,
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
                "start": 591,
                "end": 595,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 592,
                  "end": 595,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 594,
                    "end": 595,
                    "typeName": {
                      "type": "Identifier",
                      "start": 594,
                      "end": 595,
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
                "start": 597,
                "end": 601,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 598,
                  "end": 601,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 600,
                    "end": 601,
                    "typeName": {
                      "type": "Identifier",
                      "start": 600,
                      "end": 601,
                      "name": "U",
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
              "start": 602,
              "end": 605,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 604,
                "end": 605,
                "typeName": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 605,
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
      "start": 610,
      "end": 646,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 614,
          "end": 646,
          "id": {
            "type": "Identifier",
            "start": 614,
            "end": 646,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 615,
              "end": 646,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 617,
                "end": 646,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 619,
                    "end": 644,
                    "key": {
                      "type": "Identifier",
                      "start": 619,
                      "end": 622,
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
                      "start": 622,
                      "end": 628,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 623,
                          "end": 624,
                          "name": {
                            "type": "Identifier",
                            "start": 623,
                            "end": 624,
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
                          "start": 626,
                          "end": 627,
                          "name": {
                            "type": "Identifier",
                            "start": 626,
                            "end": 627,
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
                        "start": 629,
                        "end": 633,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 630,
                          "end": 633,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 632,
                            "end": 633,
                            "typeName": {
                              "type": "Identifier",
                              "start": 632,
                              "end": 633,
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
                        "start": 635,
                        "end": 640,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 637,
                          "end": 640,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 639,
                            "end": 640,
                            "typeName": {
                              "type": "Identifier",
                              "start": 639,
                              "end": 640,
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
                      "start": 641,
                      "end": 644,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 643,
                        "end": 644,
                        "typeName": {
                          "type": "Identifier",
                          "start": 643,
                          "end": 644,
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
      "start": 647,
      "end": 695,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 694,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 652,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 655,
            "end": 694,
            "properties": [
              {
                "type": "Property",
                "start": 657,
                "end": 692,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 657,
                  "end": 660,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 660,
                  "end": 692,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 667,
                      "end": 671,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 668,
                        "end": 671,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 670,
                          "end": 671,
                          "typeName": {
                            "type": "Identifier",
                            "start": 670,
                            "end": 671,
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
                      "start": 673,
                      "end": 677,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 674,
                        "end": 677,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 676,
                          "end": 677,
                          "typeName": {
                            "type": "Identifier",
                            "start": 676,
                            "end": 677,
                            "name": "U",
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
                    "start": 679,
                    "end": 692,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 681,
                        "end": 690,
                        "argument": {
                          "type": "Identifier",
                          "start": 688,
                          "end": 689,
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
                    "start": 660,
                    "end": 666,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 661,
                        "end": 662,
                        "name": {
                          "type": "Identifier",
                          "start": 661,
                          "end": 662,
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
                        "start": 664,
                        "end": 665,
                        "name": {
                          "type": "Identifier",
                          "start": 664,
                          "end": 665,
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
      "start": 697,
      "end": 717,
      "id": {
        "type": "Identifier",
        "start": 706,
        "end": 710,
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
          "start": 711,
          "end": 715,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 712,
            "end": 715,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 714,
              "end": 715,
              "typeName": {
                "type": "Identifier",
                "start": 714,
                "end": 715,
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
      "start": 718,
      "end": 738,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 731,
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
          "start": 732,
          "end": 736,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 733,
            "end": 736,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 735,
              "end": 736,
              "typeName": {
                "type": "Identifier",
                "start": 735,
                "end": 736,
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
      "start": 748,
      "end": 773,
      "id": {
        "type": "Identifier",
        "start": 757,
        "end": 761,
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
          "start": 762,
          "end": 768,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 763,
            "end": 768,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 765,
              "end": 768
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 770,
        "end": 773,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 775,
      "end": 812,
      "id": {
        "type": "Identifier",
        "start": 784,
        "end": 789,
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
          "start": 790,
          "end": 810,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 791,
            "end": 810,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 793,
              "end": 810,
              "typeName": {
                "type": "Identifier",
                "start": 793,
                "end": 794,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 794,
                "end": 810,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 795,
                    "end": 801
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 803,
                    "end": 809
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
      "start": 813,
      "end": 850,
      "id": {
        "type": "Identifier",
        "start": 822,
        "end": 827,
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
          "start": 828,
          "end": 848,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 829,
            "end": 848,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 831,
              "end": 848,
              "typeName": {
                "type": "Identifier",
                "start": 831,
                "end": 832,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 832,
                "end": 848,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 833,
                    "end": 839
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 841,
                    "end": 847
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
      "start": 860,
      "end": 886,
      "id": {
        "type": "Identifier",
        "start": 869,
        "end": 874,
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
          "start": 875,
          "end": 881,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 876,
            "end": 881,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 878,
              "end": 881
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 883,
        "end": 886,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 888,
      "end": 925,
      "id": {
        "type": "Identifier",
        "start": 897,
        "end": 902,
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
          "start": 903,
          "end": 923,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 904,
            "end": 923,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 906,
              "end": 923,
              "typeName": {
                "type": "Identifier",
                "start": 906,
                "end": 907,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 907,
                "end": 923,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 908,
                    "end": 914
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 916,
                    "end": 922
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
      "start": 926,
      "end": 963,
      "id": {
        "type": "Identifier",
        "start": 935,
        "end": 940,
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
          "start": 941,
          "end": 961,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 942,
            "end": 961,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 944,
              "end": 961,
              "typeName": {
                "type": "Identifier",
                "start": 944,
                "end": 945,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 945,
                "end": 961,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 946,
                    "end": 952
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 954,
                    "end": 960
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
      "start": 973,
      "end": 999,
      "id": {
        "type": "Identifier",
        "start": 982,
        "end": 987,
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
          "start": 988,
          "end": 994,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 989,
            "end": 994,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 991,
              "end": 994
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 996,
        "end": 999,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1001,
      "end": 1037,
      "id": {
        "type": "Identifier",
        "start": 1010,
        "end": 1014,
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
          "start": 1015,
          "end": 1035,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1016,
            "end": 1035,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1018,
              "end": 1035,
              "typeName": {
                "type": "Identifier",
                "start": 1018,
                "end": 1019,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1019,
                "end": 1035,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1020,
                    "end": 1026
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1028,
                    "end": 1034
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
      "start": 1038,
      "end": 1074,
      "id": {
        "type": "Identifier",
        "start": 1047,
        "end": 1051,
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
          "start": 1052,
          "end": 1072,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1053,
            "end": 1072,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1055,
              "end": 1072,
              "typeName": {
                "type": "Identifier",
                "start": 1055,
                "end": 1056,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1056,
                "end": 1072,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1057,
                    "end": 1063
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1065,
                    "end": 1071
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
      "start": 1084,
      "end": 1109,
      "id": {
        "type": "Identifier",
        "start": 1093,
        "end": 1097,
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
          "start": 1098,
          "end": 1104,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1099,
            "end": 1104,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1101,
              "end": 1104
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1106,
        "end": 1109,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1111,
      "end": 1138,
      "id": {
        "type": "Identifier",
        "start": 1120,
        "end": 1124,
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
          "start": 1125,
          "end": 1136,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1126,
            "end": 1136,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1128,
              "end": 1136,
              "exprName": {
                "type": "Identifier",
                "start": 1135,
                "end": 1136,
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
      "start": 1139,
      "end": 1166,
      "id": {
        "type": "Identifier",
        "start": 1148,
        "end": 1152,
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
          "start": 1153,
          "end": 1164,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1154,
            "end": 1164,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1156,
              "end": 1164,
              "exprName": {
                "type": "Identifier",
                "start": 1163,
                "end": 1164,
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
      "start": 1176,
      "end": 1201,
      "id": {
        "type": "Identifier",
        "start": 1185,
        "end": 1189,
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
          "start": 1190,
          "end": 1196,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1191,
            "end": 1196,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1193,
              "end": 1196
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1198,
        "end": 1201,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1203,
      "end": 1230,
      "id": {
        "type": "Identifier",
        "start": 1212,
        "end": 1216,
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
          "start": 1217,
          "end": 1228,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1218,
            "end": 1228,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1220,
              "end": 1228,
              "exprName": {
                "type": "Identifier",
                "start": 1227,
                "end": 1228,
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
      "start": 1231,
      "end": 1258,
      "id": {
        "type": "Identifier",
        "start": 1240,
        "end": 1244,
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
          "start": 1245,
          "end": 1256,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1246,
            "end": 1256,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1248,
              "end": 1256,
              "exprName": {
                "type": "Identifier",
                "start": 1255,
                "end": 1256,
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
      "start": 1268,
      "end": 1293,
      "id": {
        "type": "Identifier",
        "start": 1277,
        "end": 1281,
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
          "start": 1282,
          "end": 1288,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1283,
            "end": 1288,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1285,
              "end": 1288
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1290,
        "end": 1293,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1295,
      "end": 1315,
      "id": {
        "type": "Identifier",
        "start": 1304,
        "end": 1308,
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
          "start": 1309,
          "end": 1313,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1310,
            "end": 1313,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1312,
              "end": 1313,
              "typeName": {
                "type": "Identifier",
                "start": 1312,
                "end": 1313,
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
      "start": 1316,
      "end": 1352,
      "id": {
        "type": "Identifier",
        "start": 1325,
        "end": 1329,
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
          "start": 1330,
          "end": 1350,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1331,
            "end": 1350,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1333,
              "end": 1350,
              "typeName": {
                "type": "Identifier",
                "start": 1333,
                "end": 1334,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1334,
                "end": 1350,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1335,
                    "end": 1341
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1343,
                    "end": 1349
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
      "start": 1359,
      "end": 1384,
      "id": {
        "type": "Identifier",
        "start": 1368,
        "end": 1372,
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
          "start": 1373,
          "end": 1379,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1374,
            "end": 1379,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1376,
              "end": 1379
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1381,
        "end": 1384,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1386,
      "end": 1407,
      "id": {
        "type": "Identifier",
        "start": 1395,
        "end": 1400,
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
          "start": 1401,
          "end": 1405,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1402,
            "end": 1405,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1404,
              "end": 1405,
              "typeName": {
                "type": "Identifier",
                "start": 1404,
                "end": 1405,
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
      "start": 1408,
      "end": 1445,
      "id": {
        "type": "Identifier",
        "start": 1417,
        "end": 1422,
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
          "start": 1423,
          "end": 1443,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1424,
            "end": 1443,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1426,
              "end": 1443,
              "typeName": {
                "type": "Identifier",
                "start": 1426,
                "end": 1427,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1427,
                "end": 1443,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1428,
                    "end": 1434
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1436,
                    "end": 1442
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
      "start": 1452,
      "end": 1478,
      "id": {
        "type": "Identifier",
        "start": 1461,
        "end": 1466,
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
          "start": 1467,
          "end": 1473,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1468,
            "end": 1473,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1470,
              "end": 1473
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1475,
        "end": 1478,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1480,
      "end": 1500,
      "id": {
        "type": "Identifier",
        "start": 1489,
        "end": 1493,
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
          "start": 1494,
          "end": 1498,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1495,
            "end": 1498,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1497,
              "end": 1498,
              "typeName": {
                "type": "Identifier",
                "start": 1497,
                "end": 1498,
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
      "start": 1501,
      "end": 1537,
      "id": {
        "type": "Identifier",
        "start": 1510,
        "end": 1514,
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
          "start": 1515,
          "end": 1535,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1516,
            "end": 1535,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1518,
              "end": 1535,
              "typeName": {
                "type": "Identifier",
                "start": 1518,
                "end": 1519,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1519,
                "end": 1535,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1520,
                    "end": 1526
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1528,
                    "end": 1534
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
      "start": 1544,
      "end": 1569,
      "id": {
        "type": "Identifier",
        "start": 1553,
        "end": 1557,
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
          "start": 1558,
          "end": 1564,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1559,
            "end": 1564,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1561,
              "end": 1564
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1566,
        "end": 1569,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1571,
      "end": 1591,
      "id": {
        "type": "Identifier",
        "start": 1580,
        "end": 1584,
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
          "start": 1585,
          "end": 1589,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1586,
            "end": 1589,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1588,
              "end": 1589,
              "typeName": {
                "type": "Identifier",
                "start": 1588,
                "end": 1589,
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
      "start": 1592,
      "end": 1619,
      "id": {
        "type": "Identifier",
        "start": 1601,
        "end": 1605,
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
          "start": 1606,
          "end": 1617,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1607,
            "end": 1617,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1609,
              "end": 1617,
              "exprName": {
                "type": "Identifier",
                "start": 1616,
                "end": 1617,
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
      "start": 1638,
      "end": 1663,
      "id": {
        "type": "Identifier",
        "start": 1647,
        "end": 1651,
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
          "start": 1652,
          "end": 1658,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1653,
            "end": 1658,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1655,
              "end": 1658
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1660,
        "end": 1663,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1665,
      "end": 1701,
      "id": {
        "type": "Identifier",
        "start": 1674,
        "end": 1678,
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
          "start": 1679,
          "end": 1699,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1680,
            "end": 1699,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1682,
              "end": 1699,
              "typeName": {
                "type": "Identifier",
                "start": 1682,
                "end": 1683,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1683,
                "end": 1699,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1684,
                    "end": 1690
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1692,
                    "end": 1698
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
      "start": 1702,
      "end": 1738,
      "id": {
        "type": "Identifier",
        "start": 1711,
        "end": 1715,
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
          "start": 1716,
          "end": 1736,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1717,
            "end": 1736,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1719,
              "end": 1736,
              "typeName": {
                "type": "Identifier",
                "start": 1719,
                "end": 1720,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1720,
                "end": 1736,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1721,
                    "end": 1727
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1729,
                    "end": 1735
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
      "start": 1745,
      "end": 1770,
      "id": {
        "type": "Identifier",
        "start": 1754,
        "end": 1758,
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
          "start": 1759,
          "end": 1765,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1760,
            "end": 1765,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1762,
              "end": 1765
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1767,
        "end": 1770,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1772,
      "end": 1808,
      "id": {
        "type": "Identifier",
        "start": 1781,
        "end": 1785,
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
          "start": 1786,
          "end": 1806,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1787,
            "end": 1806,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1789,
              "end": 1806,
              "typeName": {
                "type": "Identifier",
                "start": 1789,
                "end": 1790,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1790,
                "end": 1806,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1791,
                    "end": 1797
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1799,
                    "end": 1805
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
      "start": 1809,
      "end": 1845,
      "id": {
        "type": "Identifier",
        "start": 1818,
        "end": 1822,
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
          "start": 1823,
          "end": 1843,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1824,
            "end": 1843,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1826,
              "end": 1843,
              "typeName": {
                "type": "Identifier",
                "start": 1826,
                "end": 1827,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1827,
                "end": 1843,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1828,
                    "end": 1834
                  },
                  {
                    "type": "TSNumberKeyword",
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
      "type": "FunctionDeclaration",
      "start": 1852,
      "end": 1877,
      "id": {
        "type": "Identifier",
        "start": 1861,
        "end": 1865,
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
          "start": 1866,
          "end": 1872,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1867,
            "end": 1872,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1869,
              "end": 1872
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1874,
        "end": 1877,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1879,
      "end": 1916,
      "id": {
        "type": "Identifier",
        "start": 1888,
        "end": 1893,
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
          "start": 1894,
          "end": 1914,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1895,
            "end": 1914,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1897,
              "end": 1914,
              "typeName": {
                "type": "Identifier",
                "start": 1897,
                "end": 1898,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1898,
                "end": 1914,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1899,
                    "end": 1905
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1907,
                    "end": 1913
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
      "end": 2017,
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
          "end": 2015,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1996,
            "end": 2015,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1998,
              "end": 2015,
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
                "end": 2015,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2000,
                    "end": 2006
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2008,
                    "end": 2014
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
      "start": 2018,
      "end": 2046,
      "id": {
        "type": "Identifier",
        "start": 2027,
        "end": 2032,
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
          "start": 2033,
          "end": 2044,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2034,
            "end": 2044,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2036,
              "end": 2044,
              "exprName": {
                "type": "Identifier",
                "start": 2043,
                "end": 2044,
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
      "start": 2053,
      "end": 2079,
      "id": {
        "type": "Identifier",
        "start": 2062,
        "end": 2067,
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
          "start": 2068,
          "end": 2074,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2069,
            "end": 2074,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2071,
              "end": 2074
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2076,
        "end": 2079,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2081,
      "end": 2118,
      "id": {
        "type": "Identifier",
        "start": 2090,
        "end": 2095,
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
          "start": 2096,
          "end": 2116,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2097,
            "end": 2116,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2099,
              "end": 2116,
              "typeName": {
                "type": "Identifier",
                "start": 2099,
                "end": 2100,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2100,
                "end": 2116,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2101,
                    "end": 2107
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2109,
                    "end": 2115
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
      "start": 2119,
      "end": 2156,
      "id": {
        "type": "Identifier",
        "start": 2128,
        "end": 2133,
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
          "start": 2134,
          "end": 2154,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2135,
            "end": 2154,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2137,
              "end": 2154,
              "typeName": {
                "type": "Identifier",
                "start": 2137,
                "end": 2138,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2138,
                "end": 2154,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2139,
                    "end": 2145
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2147,
                    "end": 2153
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
      "start": 2166,
      "end": 2192,
      "id": {
        "type": "Identifier",
        "start": 2175,
        "end": 2180,
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
          "start": 2181,
          "end": 2187,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2182,
            "end": 2187,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2184,
              "end": 2187
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2189,
        "end": 2192,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2194,
      "end": 2217,
      "id": {
        "type": "Identifier",
        "start": 2203,
        "end": 2209,
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
          "start": 2210,
          "end": 2215,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2211,
            "end": 2215,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2213,
              "end": 2215,
              "typeName": {
                "type": "Identifier",
                "start": 2213,
                "end": 2215,
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
      "start": 2218,
      "end": 2256,
      "id": {
        "type": "Identifier",
        "start": 2227,
        "end": 2233,
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
          "start": 2234,
          "end": 2254,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2235,
            "end": 2254,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2237,
              "end": 2254,
              "typeName": {
                "type": "Identifier",
                "start": 2237,
                "end": 2238,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2238,
                "end": 2254,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2239,
                    "end": 2245
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2247,
                    "end": 2253
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
      "start": 2263,
      "end": 2290,
      "id": {
        "type": "Identifier",
        "start": 2272,
        "end": 2278,
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
          "start": 2279,
          "end": 2285,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2280,
            "end": 2285,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2282,
              "end": 2285
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2287,
        "end": 2290,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2292,
      "end": 2329,
      "id": {
        "type": "Identifier",
        "start": 2301,
        "end": 2306,
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
          "start": 2307,
          "end": 2327,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2308,
            "end": 2327,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2310,
              "end": 2327,
              "typeName": {
                "type": "Identifier",
                "start": 2310,
                "end": 2311,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2311,
                "end": 2327,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2312,
                    "end": 2318
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2320,
                    "end": 2326
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
      "start": 2330,
      "end": 2358,
      "id": {
        "type": "Identifier",
        "start": 2339,
        "end": 2344,
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
          "start": 2345,
          "end": 2356,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2346,
            "end": 2356,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2348,
              "end": 2356,
              "exprName": {
                "type": "Identifier",
                "start": 2355,
                "end": 2356,
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
      "start": 2365,
      "end": 2391,
      "id": {
        "type": "Identifier",
        "start": 2374,
        "end": 2379,
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
          "start": 2380,
          "end": 2386,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2381,
            "end": 2386,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2383,
              "end": 2386
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2388,
        "end": 2391,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2393,
      "end": 2430,
      "id": {
        "type": "Identifier",
        "start": 2402,
        "end": 2407,
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
          "start": 2408,
          "end": 2428,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2409,
            "end": 2428,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2411,
              "end": 2428,
              "typeName": {
                "type": "Identifier",
                "start": 2411,
                "end": 2412,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2412,
                "end": 2428,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2413,
                    "end": 2419
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2421,
                    "end": 2427
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
      "start": 2431,
      "end": 2459,
      "id": {
        "type": "Identifier",
        "start": 2440,
        "end": 2445,
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
          "start": 2446,
          "end": 2457,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2447,
            "end": 2457,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2449,
              "end": 2457,
              "exprName": {
                "type": "Identifier",
                "start": 2456,
                "end": 2457,
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
      "start": 2466,
      "end": 2492,
      "id": {
        "type": "Identifier",
        "start": 2475,
        "end": 2480,
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
          "start": 2481,
          "end": 2487,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2482,
            "end": 2487,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2484,
              "end": 2487
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2489,
        "end": 2492,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2494,
      "end": 2516,
      "id": {
        "type": "Identifier",
        "start": 2503,
        "end": 2508,
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
          "start": 2509,
          "end": 2514,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2510,
            "end": 2514,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2512,
              "end": 2514,
              "typeName": {
                "type": "Identifier",
                "start": 2512,
                "end": 2514,
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
      "start": 2517,
      "end": 2554,
      "id": {
        "type": "Identifier",
        "start": 2526,
        "end": 2531,
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
          "start": 2532,
          "end": 2552,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2533,
            "end": 2552,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2535,
              "end": 2552,
              "typeName": {
                "type": "Identifier",
                "start": 2535,
                "end": 2536,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2536,
                "end": 2552,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2537,
                    "end": 2543
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2545,
                    "end": 2551
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
      "start": 2561,
      "end": 2587,
      "id": {
        "type": "Identifier",
        "start": 2570,
        "end": 2575,
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
          "start": 2576,
          "end": 2582,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2577,
            "end": 2582,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2579,
              "end": 2582
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2584,
        "end": 2587,
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
