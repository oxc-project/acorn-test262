__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 335,
  "end": 2407,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 390,
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
        "end": 390,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 388,
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
              "end": 388,
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
                },
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 367,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 364,
                    "end": 367,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 366,
                      "end": 367,
                      "typeName": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 367,
                        "name": "T",
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
                "start": 372,
                "end": 388,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 374,
                    "end": 386,
                    "argument": {
                      "type": "Literal",
                      "start": 381,
                      "end": 385,
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
      "start": 392,
      "end": 447,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 399,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 403,
        "end": 447,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 409,
            "end": 445,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 412,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 412,
              "end": 445,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 413,
                  "end": 417,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 414,
                    "end": 417,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 416,
                      "end": 417,
                      "typeName": {
                        "type": "Identifier",
                        "start": 416,
                        "end": 417,
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
                  "start": 419,
                  "end": 424,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 421,
                    "end": 424,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 423,
                      "end": 424,
                      "typeName": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 424,
                        "name": "T",
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
                "start": 429,
                "end": 445,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 431,
                    "end": 443,
                    "argument": {
                      "type": "Literal",
                      "start": 438,
                      "end": 442,
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
                "start": 425,
                "end": 428,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 427,
                  "end": 428,
                  "typeName": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 428,
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
        "start": 399,
        "end": 402,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 400,
            "end": 401,
            "name": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
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
      "start": 449,
      "end": 504,
      "id": {
        "type": "Identifier",
        "start": 455,
        "end": 456,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 460,
        "end": 504,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 466,
            "end": 502,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 466,
              "end": 469,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 469,
              "end": 502,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 470,
                  "end": 474,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 471,
                    "end": 474,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 473,
                      "end": 474,
                      "typeName": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 474,
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
                  "start": 476,
                  "end": 481,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 478,
                    "end": 481,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 480,
                      "end": 481,
                      "typeName": {
                        "type": "Identifier",
                        "start": 480,
                        "end": 481,
                        "name": "T",
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
                "start": 486,
                "end": 502,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 488,
                    "end": 500,
                    "argument": {
                      "type": "Literal",
                      "start": 495,
                      "end": 499,
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
                "start": 482,
                "end": 485,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 484,
                  "end": 485,
                  "typeName": {
                    "type": "Identifier",
                    "start": 484,
                    "end": 485,
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
        "start": 456,
        "end": 459,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 457,
            "end": 458,
            "name": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
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
      "start": 506,
      "end": 549,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 517,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 517,
        "end": 520,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 518,
            "end": 519,
            "name": {
              "type": "Identifier",
              "start": 518,
              "end": 519,
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
        "start": 521,
        "end": 549,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 527,
            "end": 547,
            "key": {
              "type": "Identifier",
              "start": 527,
              "end": 530,
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
                "start": 531,
                "end": 535,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 532,
                  "end": 535,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 534,
                    "end": 535,
                    "typeName": {
                      "type": "Identifier",
                      "start": 534,
                      "end": 535,
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
                "start": 537,
                "end": 542,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 539,
                  "end": 542,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 541,
                    "end": 542,
                    "typeName": {
                      "type": "Identifier",
                      "start": 541,
                      "end": 542,
                      "name": "T",
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
      "start": 551,
      "end": 595,
      "id": {
        "type": "Identifier",
        "start": 561,
        "end": 563,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 564,
        "end": 595,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 570,
            "end": 593,
            "key": {
              "type": "Identifier",
              "start": 570,
              "end": 573,
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
              "start": 573,
              "end": 576,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 574,
                  "end": 575,
                  "name": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 575,
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
                "start": 577,
                "end": 581,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 578,
                  "end": 581,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 580,
                    "end": 581,
                    "typeName": {
                      "type": "Identifier",
                      "start": 580,
                      "end": 581,
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
                "start": 583,
                "end": 588,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 585,
                  "end": 588,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 587,
                    "end": 588,
                    "typeName": {
                      "type": "Identifier",
                      "start": 587,
                      "end": 588,
                      "name": "T",
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
              "start": 589,
              "end": 592,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 591,
                "end": 592,
                "typeName": {
                  "type": "Identifier",
                  "start": 591,
                  "end": 592,
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
      "start": 597,
      "end": 630,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 601,
          "end": 630,
          "id": {
            "type": "Identifier",
            "start": 601,
            "end": 630,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 602,
              "end": 630,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 604,
                "end": 630,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 606,
                    "end": 628,
                    "key": {
                      "type": "Identifier",
                      "start": 606,
                      "end": 609,
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
                      "start": 609,
                      "end": 612,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 610,
                          "end": 611,
                          "name": {
                            "type": "Identifier",
                            "start": 610,
                            "end": 611,
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
                        "start": 613,
                        "end": 617,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 614,
                          "end": 617,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 616,
                            "end": 617,
                            "typeName": {
                              "type": "Identifier",
                              "start": 616,
                              "end": 617,
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
                        "start": 619,
                        "end": 624,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 621,
                          "end": 624,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 623,
                            "end": 624,
                            "typeName": {
                              "type": "Identifier",
                              "start": 623,
                              "end": 624,
                              "name": "T",
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
                      "start": 625,
                      "end": 628,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 627,
                        "end": 628,
                        "typeName": {
                          "type": "Identifier",
                          "start": 627,
                          "end": 628,
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
      "start": 631,
      "end": 677,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 635,
          "end": 676,
          "id": {
            "type": "Identifier",
            "start": 635,
            "end": 636,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 639,
            "end": 676,
            "properties": [
              {
                "type": "Property",
                "start": 641,
                "end": 674,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 644,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 644,
                  "end": 674,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 648,
                      "end": 652,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 649,
                        "end": 652,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 651,
                          "end": 652,
                          "typeName": {
                            "type": "Identifier",
                            "start": 651,
                            "end": 652,
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
                      "start": 654,
                      "end": 659,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 656,
                        "end": 659,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 658,
                          "end": 659,
                          "typeName": {
                            "type": "Identifier",
                            "start": 658,
                            "end": 659,
                            "name": "T",
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
                    "start": 661,
                    "end": 674,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 663,
                        "end": 672,
                        "argument": {
                          "type": "Identifier",
                          "start": 670,
                          "end": 671,
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
                    "start": 644,
                    "end": 647,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 645,
                        "end": 646,
                        "name": {
                          "type": "Identifier",
                          "start": 645,
                          "end": 646,
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
      "start": 679,
      "end": 699,
      "id": {
        "type": "Identifier",
        "start": 688,
        "end": 692,
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
          "start": 693,
          "end": 697,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 694,
            "end": 697,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 696,
              "end": 697,
              "typeName": {
                "type": "Identifier",
                "start": 696,
                "end": 697,
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
      "type": "FunctionDeclaration",
      "start": 730,
      "end": 755,
      "id": {
        "type": "Identifier",
        "start": 739,
        "end": 743,
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
          "start": 744,
          "end": 750,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 745,
            "end": 750,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 747,
              "end": 750
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 752,
        "end": 755,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 757,
      "end": 786,
      "id": {
        "type": "Identifier",
        "start": 766,
        "end": 771,
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
          "start": 772,
          "end": 784,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 773,
            "end": 784,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 775,
              "end": 784,
              "typeName": {
                "type": "Identifier",
                "start": 775,
                "end": 776,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 776,
                "end": 784,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 777,
                    "end": 783
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
      "start": 787,
      "end": 816,
      "id": {
        "type": "Identifier",
        "start": 796,
        "end": 801,
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
          "start": 802,
          "end": 814,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 803,
            "end": 814,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 805,
              "end": 814,
              "typeName": {
                "type": "Identifier",
                "start": 805,
                "end": 806,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 806,
                "end": 814,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 807,
                    "end": 813
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
      "start": 826,
      "end": 852,
      "id": {
        "type": "Identifier",
        "start": 835,
        "end": 840,
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
          "start": 841,
          "end": 847,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 842,
            "end": 847,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 844,
              "end": 847
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 849,
        "end": 852,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 854,
      "end": 883,
      "id": {
        "type": "Identifier",
        "start": 863,
        "end": 868,
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
          "start": 869,
          "end": 881,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 870,
            "end": 881,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 872,
              "end": 881,
              "typeName": {
                "type": "Identifier",
                "start": 872,
                "end": 873,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 873,
                "end": 881,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 874,
                    "end": 880
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
      "start": 884,
      "end": 913,
      "id": {
        "type": "Identifier",
        "start": 893,
        "end": 898,
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
          "start": 899,
          "end": 911,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 900,
            "end": 911,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 902,
              "end": 911,
              "typeName": {
                "type": "Identifier",
                "start": 902,
                "end": 903,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 903,
                "end": 911,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 904,
                    "end": 910
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
      "start": 923,
      "end": 949,
      "id": {
        "type": "Identifier",
        "start": 932,
        "end": 937,
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
          "start": 938,
          "end": 944,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 939,
            "end": 944,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 941,
              "end": 944
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 946,
        "end": 949,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 951,
      "end": 979,
      "id": {
        "type": "Identifier",
        "start": 960,
        "end": 964,
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
          "start": 965,
          "end": 977,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 966,
            "end": 977,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 968,
              "end": 977,
              "typeName": {
                "type": "Identifier",
                "start": 968,
                "end": 969,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 969,
                "end": 977,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 970,
                    "end": 976
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
      "start": 980,
      "end": 1008,
      "id": {
        "type": "Identifier",
        "start": 989,
        "end": 993,
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
          "start": 994,
          "end": 1006,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 995,
            "end": 1006,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 997,
              "end": 1006,
              "typeName": {
                "type": "Identifier",
                "start": 997,
                "end": 998,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 998,
                "end": 1006,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 999,
                    "end": 1005
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
      "start": 1018,
      "end": 1043,
      "id": {
        "type": "Identifier",
        "start": 1027,
        "end": 1031,
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
          "start": 1032,
          "end": 1038,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1033,
            "end": 1038,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1035,
              "end": 1038
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1040,
        "end": 1043,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1045,
      "end": 1072,
      "id": {
        "type": "Identifier",
        "start": 1054,
        "end": 1058,
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
          "start": 1059,
          "end": 1070,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1060,
            "end": 1070,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1062,
              "end": 1070,
              "exprName": {
                "type": "Identifier",
                "start": 1069,
                "end": 1070,
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
      "start": 1073,
      "end": 1100,
      "id": {
        "type": "Identifier",
        "start": 1082,
        "end": 1086,
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
          "start": 1087,
          "end": 1098,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1088,
            "end": 1098,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1090,
              "end": 1098,
              "exprName": {
                "type": "Identifier",
                "start": 1097,
                "end": 1098,
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
      "start": 1110,
      "end": 1135,
      "id": {
        "type": "Identifier",
        "start": 1119,
        "end": 1123,
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
          "start": 1124,
          "end": 1130,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1125,
            "end": 1130,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1127,
              "end": 1130
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1132,
        "end": 1135,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1137,
      "end": 1164,
      "id": {
        "type": "Identifier",
        "start": 1146,
        "end": 1150,
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
          "start": 1151,
          "end": 1162,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1152,
            "end": 1162,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1154,
              "end": 1162,
              "exprName": {
                "type": "Identifier",
                "start": 1161,
                "end": 1162,
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
      "start": 1165,
      "end": 1192,
      "id": {
        "type": "Identifier",
        "start": 1174,
        "end": 1178,
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
          "start": 1179,
          "end": 1190,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1180,
            "end": 1190,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1182,
              "end": 1190,
              "exprName": {
                "type": "Identifier",
                "start": 1189,
                "end": 1190,
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
      "start": 1202,
      "end": 1227,
      "id": {
        "type": "Identifier",
        "start": 1211,
        "end": 1215,
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
          "start": 1216,
          "end": 1222,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1217,
            "end": 1222,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1219,
              "end": 1222
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1224,
        "end": 1227,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1229,
      "end": 1249,
      "id": {
        "type": "Identifier",
        "start": 1238,
        "end": 1242,
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
          "start": 1243,
          "end": 1247,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1244,
            "end": 1247,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1246,
              "end": 1247,
              "typeName": {
                "type": "Identifier",
                "start": 1246,
                "end": 1247,
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
      "start": 1250,
      "end": 1278,
      "id": {
        "type": "Identifier",
        "start": 1259,
        "end": 1263,
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
          "start": 1264,
          "end": 1276,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1265,
            "end": 1276,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1267,
              "end": 1276,
              "typeName": {
                "type": "Identifier",
                "start": 1267,
                "end": 1268,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1268,
                "end": 1276,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1269,
                    "end": 1275
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
      "start": 1285,
      "end": 1310,
      "id": {
        "type": "Identifier",
        "start": 1294,
        "end": 1298,
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
          "start": 1299,
          "end": 1305,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1300,
            "end": 1305,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1302,
              "end": 1305
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1307,
        "end": 1310,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1312,
      "end": 1333,
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
          "end": 1331,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1328,
            "end": 1331,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1330,
              "end": 1331,
              "typeName": {
                "type": "Identifier",
                "start": 1330,
                "end": 1331,
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
      "start": 1334,
      "end": 1363,
      "id": {
        "type": "Identifier",
        "start": 1343,
        "end": 1348,
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
          "start": 1349,
          "end": 1361,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1350,
            "end": 1361,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1352,
              "end": 1361,
              "typeName": {
                "type": "Identifier",
                "start": 1352,
                "end": 1353,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1353,
                "end": 1361,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1354,
                    "end": 1360
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
      "start": 1370,
      "end": 1396,
      "id": {
        "type": "Identifier",
        "start": 1379,
        "end": 1384,
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
          "start": 1385,
          "end": 1391,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1386,
            "end": 1391,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1388,
              "end": 1391
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1393,
        "end": 1396,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1398,
      "end": 1418,
      "id": {
        "type": "Identifier",
        "start": 1407,
        "end": 1411,
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
          "start": 1412,
          "end": 1416,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1413,
            "end": 1416,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1415,
              "end": 1416,
              "typeName": {
                "type": "Identifier",
                "start": 1415,
                "end": 1416,
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
      "start": 1419,
      "end": 1447,
      "id": {
        "type": "Identifier",
        "start": 1428,
        "end": 1432,
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
          "start": 1433,
          "end": 1445,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1434,
            "end": 1445,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1436,
              "end": 1445,
              "typeName": {
                "type": "Identifier",
                "start": 1436,
                "end": 1437,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1437,
                "end": 1445,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1438,
                    "end": 1444
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
      "start": 1454,
      "end": 1479,
      "id": {
        "type": "Identifier",
        "start": 1463,
        "end": 1467,
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
          "start": 1468,
          "end": 1474,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1469,
            "end": 1474,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1471,
              "end": 1474
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1476,
        "end": 1479,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1481,
      "end": 1501,
      "id": {
        "type": "Identifier",
        "start": 1490,
        "end": 1494,
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
          "start": 1495,
          "end": 1499,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1496,
            "end": 1499,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1498,
              "end": 1499,
              "typeName": {
                "type": "Identifier",
                "start": 1498,
                "end": 1499,
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
      "start": 1502,
      "end": 1529,
      "id": {
        "type": "Identifier",
        "start": 1511,
        "end": 1515,
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
          "start": 1516,
          "end": 1527,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1517,
            "end": 1527,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1519,
              "end": 1527,
              "exprName": {
                "type": "Identifier",
                "start": 1526,
                "end": 1527,
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
      "start": 1548,
      "end": 1573,
      "id": {
        "type": "Identifier",
        "start": 1557,
        "end": 1561,
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
          "start": 1562,
          "end": 1568,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1563,
            "end": 1568,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1565,
              "end": 1568
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1570,
        "end": 1573,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1575,
      "end": 1603,
      "id": {
        "type": "Identifier",
        "start": 1584,
        "end": 1588,
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
          "start": 1589,
          "end": 1601,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1590,
            "end": 1601,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1592,
              "end": 1601,
              "typeName": {
                "type": "Identifier",
                "start": 1592,
                "end": 1593,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1593,
                "end": 1601,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1594,
                    "end": 1600
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
      "start": 1604,
      "end": 1632,
      "id": {
        "type": "Identifier",
        "start": 1613,
        "end": 1617,
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
          "start": 1618,
          "end": 1630,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1619,
            "end": 1630,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1621,
              "end": 1630,
              "typeName": {
                "type": "Identifier",
                "start": 1621,
                "end": 1622,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1622,
                "end": 1630,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1623,
                    "end": 1629
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
      "start": 1642,
      "end": 1667,
      "id": {
        "type": "Identifier",
        "start": 1651,
        "end": 1655,
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
          "start": 1656,
          "end": 1662,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1657,
            "end": 1662,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1659,
              "end": 1662
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1664,
        "end": 1667,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1669,
      "end": 1697,
      "id": {
        "type": "Identifier",
        "start": 1678,
        "end": 1682,
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
          "start": 1683,
          "end": 1695,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1684,
            "end": 1695,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1686,
              "end": 1695,
              "typeName": {
                "type": "Identifier",
                "start": 1686,
                "end": 1687,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1687,
                "end": 1695,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1688,
                    "end": 1694
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
      "start": 1698,
      "end": 1726,
      "id": {
        "type": "Identifier",
        "start": 1707,
        "end": 1711,
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
          "start": 1712,
          "end": 1724,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1713,
            "end": 1724,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1715,
              "end": 1724,
              "typeName": {
                "type": "Identifier",
                "start": 1715,
                "end": 1716,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1716,
                "end": 1724,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1717,
                    "end": 1723
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
      "start": 1736,
      "end": 1761,
      "id": {
        "type": "Identifier",
        "start": 1745,
        "end": 1749,
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
          "start": 1750,
          "end": 1756,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1751,
            "end": 1756,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1753,
              "end": 1756
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1758,
        "end": 1761,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1763,
      "end": 1792,
      "id": {
        "type": "Identifier",
        "start": 1772,
        "end": 1777,
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
          "start": 1778,
          "end": 1790,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1779,
            "end": 1790,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1781,
              "end": 1790,
              "typeName": {
                "type": "Identifier",
                "start": 1781,
                "end": 1782,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1782,
                "end": 1790,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1783,
                    "end": 1789
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
      "start": 1793,
      "end": 1821,
      "id": {
        "type": "Identifier",
        "start": 1802,
        "end": 1807,
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
          "start": 1808,
          "end": 1819,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1809,
            "end": 1819,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1811,
              "end": 1819,
              "exprName": {
                "type": "Identifier",
                "start": 1818,
                "end": 1819,
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
      "start": 1828,
      "end": 1854,
      "id": {
        "type": "Identifier",
        "start": 1837,
        "end": 1842,
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
          "start": 1843,
          "end": 1849,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1844,
            "end": 1849,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1846,
              "end": 1849
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1851,
        "end": 1854,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1856,
      "end": 1885,
      "id": {
        "type": "Identifier",
        "start": 1865,
        "end": 1870,
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
          "start": 1871,
          "end": 1883,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1872,
            "end": 1883,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1874,
              "end": 1883,
              "typeName": {
                "type": "Identifier",
                "start": 1874,
                "end": 1875,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1875,
                "end": 1883,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1876,
                    "end": 1882
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
      "start": 1886,
      "end": 1914,
      "id": {
        "type": "Identifier",
        "start": 1895,
        "end": 1900,
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
          "start": 1901,
          "end": 1912,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1902,
            "end": 1912,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1904,
              "end": 1912,
              "exprName": {
                "type": "Identifier",
                "start": 1911,
                "end": 1912,
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
      "start": 1921,
      "end": 1947,
      "id": {
        "type": "Identifier",
        "start": 1930,
        "end": 1935,
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
          "start": 1936,
          "end": 1942,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1937,
            "end": 1942,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1939,
              "end": 1942
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1944,
        "end": 1947,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1949,
      "end": 1978,
      "id": {
        "type": "Identifier",
        "start": 1958,
        "end": 1963,
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
          "start": 1964,
          "end": 1976,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1965,
            "end": 1976,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1967,
              "end": 1976,
              "typeName": {
                "type": "Identifier",
                "start": 1967,
                "end": 1968,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1968,
                "end": 1976,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1969,
                    "end": 1975
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
      "start": 1979,
      "end": 2008,
      "id": {
        "type": "Identifier",
        "start": 1988,
        "end": 1993,
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
          "start": 1994,
          "end": 2006,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1995,
            "end": 2006,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1997,
              "end": 2006,
              "typeName": {
                "type": "Identifier",
                "start": 1997,
                "end": 1998,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1998,
                "end": 2006,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1999,
                    "end": 2005
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
      "start": 2018,
      "end": 2044,
      "id": {
        "type": "Identifier",
        "start": 2027,
        "end": 2032,
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
          "start": 2033,
          "end": 2039,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2034,
            "end": 2039,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2036,
              "end": 2039
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2041,
        "end": 2044,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2046,
      "end": 2069,
      "id": {
        "type": "Identifier",
        "start": 2055,
        "end": 2061,
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
          "start": 2062,
          "end": 2067,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2063,
            "end": 2067,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2065,
              "end": 2067,
              "typeName": {
                "type": "Identifier",
                "start": 2065,
                "end": 2067,
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
      "start": 2070,
      "end": 2100,
      "id": {
        "type": "Identifier",
        "start": 2079,
        "end": 2085,
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
          "start": 2086,
          "end": 2098,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2087,
            "end": 2098,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2089,
              "end": 2098,
              "typeName": {
                "type": "Identifier",
                "start": 2089,
                "end": 2090,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2090,
                "end": 2098,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2091,
                    "end": 2097
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
      "start": 2107,
      "end": 2134,
      "id": {
        "type": "Identifier",
        "start": 2116,
        "end": 2122,
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
          "start": 2123,
          "end": 2129,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2124,
            "end": 2129,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2126,
              "end": 2129
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2131,
        "end": 2134,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2136,
      "end": 2165,
      "id": {
        "type": "Identifier",
        "start": 2145,
        "end": 2150,
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
          "start": 2151,
          "end": 2163,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2152,
            "end": 2163,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2154,
              "end": 2163,
              "typeName": {
                "type": "Identifier",
                "start": 2154,
                "end": 2155,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2155,
                "end": 2163,
                "params": [
                  {
                    "type": "TSStringKeyword",
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
      "type": "TSDeclareFunction",
      "start": 2166,
      "end": 2194,
      "id": {
        "type": "Identifier",
        "start": 2175,
        "end": 2180,
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
          "start": 2181,
          "end": 2192,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2182,
            "end": 2192,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2184,
              "end": 2192,
              "exprName": {
                "type": "Identifier",
                "start": 2191,
                "end": 2192,
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
      "start": 2201,
      "end": 2227,
      "id": {
        "type": "Identifier",
        "start": 2210,
        "end": 2215,
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
          "start": 2216,
          "end": 2222,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2217,
            "end": 2222,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2219,
              "end": 2222
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2224,
        "end": 2227,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2229,
      "end": 2258,
      "id": {
        "type": "Identifier",
        "start": 2238,
        "end": 2243,
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
          "start": 2244,
          "end": 2256,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2245,
            "end": 2256,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2247,
              "end": 2256,
              "typeName": {
                "type": "Identifier",
                "start": 2247,
                "end": 2248,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2248,
                "end": 2256,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2249,
                    "end": 2255
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
      "start": 2259,
      "end": 2287,
      "id": {
        "type": "Identifier",
        "start": 2268,
        "end": 2273,
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
          "start": 2274,
          "end": 2285,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2275,
            "end": 2285,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2277,
              "end": 2285,
              "exprName": {
                "type": "Identifier",
                "start": 2284,
                "end": 2285,
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
      "start": 2294,
      "end": 2320,
      "id": {
        "type": "Identifier",
        "start": 2303,
        "end": 2308,
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
          "start": 2309,
          "end": 2315,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2310,
            "end": 2315,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2312,
              "end": 2315
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2317,
        "end": 2320,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2322,
      "end": 2344,
      "id": {
        "type": "Identifier",
        "start": 2331,
        "end": 2336,
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
          "start": 2337,
          "end": 2342,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2338,
            "end": 2342,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2340,
              "end": 2342,
              "typeName": {
                "type": "Identifier",
                "start": 2340,
                "end": 2342,
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
      "start": 2345,
      "end": 2374,
      "id": {
        "type": "Identifier",
        "start": 2354,
        "end": 2359,
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
          "start": 2360,
          "end": 2372,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2361,
            "end": 2372,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2363,
              "end": 2372,
              "typeName": {
                "type": "Identifier",
                "start": 2363,
                "end": 2364,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2364,
                "end": 2372,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2365,
                    "end": 2371
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
      "start": 2381,
      "end": 2407,
      "id": {
        "type": "Identifier",
        "start": 2390,
        "end": 2395,
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
          "start": 2396,
          "end": 2402,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2397,
            "end": 2402,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2399,
              "end": 2402
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2404,
        "end": 2407,
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
