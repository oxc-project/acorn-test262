__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 36
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              },
              "start": 44,
              "end": 52
            },
            "accessibility": null,
            "static": false,
            "start": 43,
            "end": 53
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
              },
              "start": 59,
              "end": 67
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 68
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 78,
                    "end": 84
                  },
                  "start": 76,
                  "end": 84
                },
                "start": 75,
                "end": 84
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  },
                  "start": 87,
                  "end": 95
                },
                "start": 86,
                "end": 95
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 98,
                "end": 104
              },
              "start": 96,
              "end": 104
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 73,
            "end": 105
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 113,
                  "end": 119
                },
                "start": 113,
                "end": 121
              },
              "start": 111,
              "end": 121
            },
            "accessibility": null,
            "static": false,
            "start": 110,
            "end": 122
          }
        ],
        "start": 37,
        "end": 124
      },
      "declare": false,
      "start": 22,
      "end": 124
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IBar",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 140
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 150
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 152,
                  "end": 156
                },
                "typeArguments": null,
                "start": 152,
                "end": 156
              },
              "start": 150,
              "end": 156
            },
            "accessibility": null,
            "static": false,
            "start": 147,
            "end": 157
          }
        ],
        "start": 141,
        "end": 159
      },
      "declare": false,
      "start": 126,
      "end": 159
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 210
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 220
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 226,
                        "end": 232
                      },
                      "start": 224,
                      "end": 232
                    },
                    "start": 223,
                    "end": 232
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
                      },
                      "start": 235,
                      "end": 243
                    },
                    "start": 234,
                    "end": 243
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 248,
                    "end": 254
                  },
                  "start": 245,
                  "end": 254
                },
                "start": 222,
                "end": 254
              },
              "start": 220,
              "end": 254
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 267
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 286,
                      "end": 287
                    },
                    "start": 279,
                    "end": 288
                  }
                ],
                "start": 269,
                "end": 294
              },
              "expression": false,
              "start": 257,
              "end": 294
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 217,
            "end": 294
          }
        ],
        "start": 211,
        "end": 296
      },
      "abstract": false,
      "declare": false,
      "start": 200,
      "end": 296
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 349
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 376,
                                "end": 382
                              },
                              "start": 374,
                              "end": 382
                            },
                            "start": 373,
                            "end": 382
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 387,
                                "end": 393
                              },
                              "start": 385,
                              "end": 393
                            },
                            "start": 384,
                            "end": 393
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 398,
                            "end": 404
                          },
                          "start": 395,
                          "end": 404
                        },
                        "start": 372,
                        "end": 404
                      },
                      "start": 370,
                      "end": 404
                    },
                    "start": 367,
                    "end": 404
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 416,
                        "end": 417
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 437
                          },
                          "start": 429,
                          "end": 438
                        }
                      ],
                      "start": 419,
                      "end": 444
                    },
                    "expression": false,
                    "start": 407,
                    "end": 444
                  },
                  "definite": false,
                  "start": 367,
                  "end": 444
                }
              ],
              "declare": false,
              "start": 363,
              "end": 444
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 356,
            "end": 444
          }
        ],
        "start": 350,
        "end": 446
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 338,
      "end": 446
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 495,
                        "end": 501
                      },
                      "start": 493,
                      "end": 501
                    },
                    "start": 492,
                    "end": 501
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 506,
                    "end": 512
                  },
                  "start": 503,
                  "end": 512
                },
                "start": 491,
                "end": 512
              },
              "start": 489,
              "end": 512
            },
            "start": 485,
            "end": 512
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 526
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 537,
                    "end": 538
                  },
                  "start": 530,
                  "end": 538
                }
              ],
              "start": 528,
              "end": 540
            },
            "expression": false,
            "start": 516,
            "end": 540
          },
          "definite": false,
          "start": 485,
          "end": 541
        }
      ],
      "declare": false,
      "start": 481,
      "end": 542
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 547,
            "end": 551
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 559
              },
              "typeArguments": null,
              "start": 555,
              "end": 559
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 567,
                    "end": 568
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 570,
                    "end": 571
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 567,
                  "end": 571
                }
              ],
              "start": 561,
              "end": 573
            },
            "start": 554,
            "end": 574
          },
          "definite": false,
          "start": 547,
          "end": 574
        }
      ],
      "declare": false,
      "start": 543,
      "end": 574
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 585,
                  "end": 591
                },
                "start": 585,
                "end": 593
              },
              "start": 583,
              "end": 593
            },
            "start": 579,
            "end": 593
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 596,
            "end": 598
          },
          "definite": false,
          "start": 579,
          "end": 598
        }
      ],
      "declare": false,
      "start": 575,
      "end": 599
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 616,
                      "end": 620
                    },
                    "typeArguments": null,
                    "start": 616,
                    "end": 620
                  },
                  "start": 613,
                  "end": 620
                },
                "start": 610,
                "end": 620
              },
              "start": 608,
              "end": 620
            },
            "start": 604,
            "end": 620
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 644,
                        "end": 648
                      },
                      "typeArguments": null,
                      "start": 644,
                      "end": 648
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 650,
                      "end": 652
                    },
                    "start": 643,
                    "end": 653
                  },
                  "start": 636,
                  "end": 653
                }
              ],
              "start": 634,
              "end": 655
            },
            "expression": false,
            "start": 623,
            "end": 655
          },
          "definite": false,
          "start": 604,
          "end": 655
        }
      ],
      "declare": false,
      "start": 600,
      "end": 656
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 671,
                        "end": 677
                      },
                      "start": 669,
                      "end": 677
                    },
                    "start": 668,
                    "end": 677
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 682,
                      "end": 686
                    },
                    "typeArguments": null,
                    "start": 682,
                    "end": 686
                  },
                  "start": 679,
                  "end": 686
                },
                "start": 667,
                "end": 686
              },
              "start": 665,
              "end": 686
            },
            "start": 661,
            "end": 686
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 699
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 711,
                        "end": 715
                      },
                      "typeArguments": null,
                      "start": 711,
                      "end": 715
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 717,
                      "end": 719
                    },
                    "start": 710,
                    "end": 720
                  },
                  "start": 703,
                  "end": 720
                }
              ],
              "start": 701,
              "end": 722
            },
            "expression": false,
            "start": 689,
            "end": 722
          },
          "definite": false,
          "start": 661,
          "end": 722
        }
      ],
      "declare": false,
      "start": 657,
      "end": 723
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 738,
                        "end": 744
                      },
                      "start": 736,
                      "end": 744
                    },
                    "start": 735,
                    "end": 744
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 749,
                        "end": 755
                      },
                      "start": 747,
                      "end": 755
                    },
                    "start": 746,
                    "end": 755
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 760,
                      "end": 764
                    },
                    "typeArguments": null,
                    "start": 760,
                    "end": 764
                  },
                  "start": 757,
                  "end": 764
                },
                "start": 734,
                "end": 764
              },
              "start": 732,
              "end": 764
            },
            "start": 728,
            "end": 764
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 777
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 780
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 792,
                        "end": 796
                      },
                      "typeArguments": null,
                      "start": 792,
                      "end": 796
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 798,
                      "end": 800
                    },
                    "start": 791,
                    "end": 801
                  },
                  "start": 784,
                  "end": 801
                }
              ],
              "start": 782,
              "end": 803
            },
            "expression": false,
            "start": 767,
            "end": 803
          },
          "definite": false,
          "start": 728,
          "end": 803
        }
      ],
      "declare": false,
      "start": 724,
      "end": 804
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 825,
                            "end": 831
                          },
                          "start": 823,
                          "end": 831
                        },
                        "start": 822,
                        "end": 831
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 834,
                        "end": 840
                      },
                      "start": 832,
                      "end": 840
                    },
                    "start": 821,
                    "end": 841
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 855,
                            "end": 861
                          },
                          "start": 853,
                          "end": 861
                        },
                        "start": 851,
                        "end": 861
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 864,
                        "end": 870
                      },
                      "start": 862,
                      "end": 870
                    },
                    "start": 850,
                    "end": 871
                  }
                ],
                "start": 815,
                "end": 873
              },
              "start": 813,
              "end": 873
            },
            "start": 809,
            "end": 873
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 885,
                "end": 886
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 897,
                    "end": 898
                  },
                  "start": 890,
                  "end": 899
                }
              ],
              "start": 888,
              "end": 901
            },
            "expression": false,
            "start": 876,
            "end": 901
          },
          "definite": false,
          "start": 809,
          "end": 901
        }
      ],
      "declare": false,
      "start": 805,
      "end": 902
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 918,
                        "end": 924
                      },
                      "start": 916,
                      "end": 924
                    },
                    "start": 915,
                    "end": 924
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 929,
                        "end": 935
                      },
                      "start": 927,
                      "end": 935
                    },
                    "start": 926,
                    "end": 935
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 940,
                    "end": 946
                  },
                  "start": 937,
                  "end": 946
                },
                "start": 914,
                "end": 946
              },
              "start": 912,
              "end": 946
            },
            "start": 908,
            "end": 946
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 958,
                "end": 959
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 970,
                    "end": 971
                  },
                  "start": 963,
                  "end": 972
                }
              ],
              "start": 961,
              "end": 974
            },
            "expression": false,
            "start": 949,
            "end": 974
          },
          "definite": false,
          "start": 908,
          "end": 974
        }
      ],
      "declare": false,
      "start": 904,
      "end": 975
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 986,
                    "end": 992
                  },
                  "start": 986,
                  "end": 994
                },
                "start": 986,
                "end": 996
              },
              "start": 984,
              "end": 996
            },
            "start": 980,
            "end": 996
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1000,
                "end": 1002
              },
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 1003,
                "end": 1005
              }
            ],
            "start": 999,
            "end": 1006
          },
          "definite": false,
          "start": 980,
          "end": 1006
        }
      ],
      "declare": false,
      "start": 976,
      "end": 1007
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1019,
                    "end": 1023
                  },
                  "typeArguments": null,
                  "start": 1019,
                  "end": 1023
                },
                "start": 1019,
                "end": 1025
              },
              "start": 1017,
              "end": 1025
            },
            "start": 1012,
            "end": 1025
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1030,
                    "end": 1034
                  },
                  "typeArguments": null,
                  "start": 1030,
                  "end": 1034
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1036,
                  "end": 1038
                },
                "start": 1029,
                "end": 1039
              },
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1041,
                    "end": 1045
                  },
                  "typeArguments": null,
                  "start": 1041,
                  "end": 1045
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 1047,
                  "end": 1049
                },
                "start": 1040,
                "end": 1050
              }
            ],
            "start": 1028,
            "end": 1051
          },
          "definite": false,
          "start": 1012,
          "end": 1051
        }
      ],
      "declare": false,
      "start": 1008,
      "end": 1052
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1069,
                              "end": 1075
                            },
                            "start": 1067,
                            "end": 1075
                          },
                          "start": 1066,
                          "end": 1075
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1080,
                              "end": 1086
                            },
                            "start": 1078,
                            "end": 1086
                          },
                          "start": 1077,
                          "end": 1086
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1089,
                          "end": 1095
                        },
                        "start": 1087,
                        "end": 1095
                      },
                      "start": 1065,
                      "end": 1096
                    }
                  ],
                  "start": 1064,
                  "end": 1097
                },
                "start": 1064,
                "end": 1099
              },
              "start": 1062,
              "end": 1099
            },
            "start": 1057,
            "end": 1099
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1112,
                    "end": 1113
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1115,
                    "end": 1116
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1127,
                        "end": 1128
                      },
                      "start": 1120,
                      "end": 1129
                    }
                  ],
                  "start": 1118,
                  "end": 1131
                },
                "expression": false,
                "start": 1103,
                "end": 1131
              }
            ],
            "start": 1102,
            "end": 1132
          },
          "definite": false,
          "start": 1057,
          "end": 1132
        }
      ],
      "declare": false,
      "start": 1053,
      "end": 1133
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1145,
                  "end": 1149
                },
                "typeArguments": null,
                "start": 1145,
                "end": 1149
              },
              "start": 1143,
              "end": 1149
            },
            "start": 1138,
            "end": 1149
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1158,
                  "end": 1161
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1164,
                      "end": 1168
                    },
                    "typeArguments": null,
                    "start": 1164,
                    "end": 1168
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 1170,
                    "end": 1172
                  },
                  "start": 1163,
                  "end": 1173
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1158,
                "end": 1173
              }
            ],
            "start": 1152,
            "end": 1175
          },
          "definite": false,
          "start": 1138,
          "end": 1175
        }
      ],
      "declare": false,
      "start": 1134,
      "end": 1175
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1180,
            "end": 1185
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1189,
                "end": 1193
              },
              "typeArguments": null,
              "start": 1189,
              "end": 1193
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1201,
                    "end": 1202
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1213,
                        "end": 1214
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1216,
                        "end": 1217
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1228,
                            "end": 1229
                          },
                          "start": 1221,
                          "end": 1230
                        }
                      ],
                      "start": 1219,
                      "end": 1232
                    },
                    "expression": false,
                    "start": 1204,
                    "end": 1232
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1201,
                  "end": 1232
                }
              ],
              "start": 1195,
              "end": 1234
            },
            "start": 1188,
            "end": 1235
          },
          "definite": false,
          "start": 1180,
          "end": 1235
        }
      ],
      "declare": false,
      "start": 1176,
      "end": 1235
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3t14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1240,
            "end": 1245
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1249,
                "end": 1253
              },
              "typeArguments": null,
              "start": 1249,
              "end": 1253
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1261,
                    "end": 1262
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 1264,
                    "end": 1266
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1261,
                  "end": 1266
                }
              ],
              "start": 1255,
              "end": 1268
            },
            "start": 1248,
            "end": 1269
          },
          "definite": false,
          "start": 1240,
          "end": 1269
        }
      ],
      "declare": false,
      "start": 1236,
      "end": 1269
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1315,
        "end": 1319
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1326,
              "end": 1329
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1335,
                        "end": 1341
                      },
                      "start": 1333,
                      "end": 1341
                    },
                    "start": 1332,
                    "end": 1341
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1346,
                        "end": 1352
                      },
                      "start": 1344,
                      "end": 1352
                    },
                    "start": 1343,
                    "end": 1352
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1357,
                    "end": 1363
                  },
                  "start": 1354,
                  "end": 1363
                },
                "start": 1331,
                "end": 1363
              },
              "start": 1329,
              "end": 1363
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1326,
            "end": 1364
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 1369,
              "end": 1380
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1393,
                          "end": 1397
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1398,
                          "end": 1401
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1393,
                        "end": 1401
                      },
                      "right": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1413,
                            "end": 1414
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1416,
                            "end": 1417
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1440,
                                "end": 1441
                              },
                              "start": 1433,
                              "end": 1442
                            }
                          ],
                          "start": 1419,
                          "end": 1452
                        },
                        "expression": false,
                        "start": 1404,
                        "end": 1452
                      },
                      "start": 1393,
                      "end": 1452
                    },
                    "directive": null,
                    "start": 1393,
                    "end": 1452
                  }
                ],
                "start": 1383,
                "end": 1458
              },
              "expression": false,
              "start": 1380,
              "end": 1458
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1369,
            "end": 1458
          }
        ],
        "start": 1320,
        "end": 1460
      },
      "abstract": false,
      "declare": false,
      "start": 1309,
      "end": 1460
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1508,
        "end": 1512
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1539,
                                "end": 1545
                              },
                              "start": 1537,
                              "end": 1545
                            },
                            "start": 1536,
                            "end": 1545
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1550,
                                "end": 1556
                              },
                              "start": 1548,
                              "end": 1556
                            },
                            "start": 1547,
                            "end": 1556
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1561,
                            "end": 1567
                          },
                          "start": 1558,
                          "end": 1567
                        },
                        "start": 1535,
                        "end": 1567
                      },
                      "start": 1533,
                      "end": 1567
                    },
                    "start": 1530,
                    "end": 1567
                  },
                  "init": null,
                  "definite": false,
                  "start": 1530,
                  "end": 1567
                }
              ],
              "declare": false,
              "start": 1526,
              "end": 1568
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1519,
            "end": 1568
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1573,
                "end": 1576
              },
              "right": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1588,
                    "end": 1589
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1591,
                    "end": 1592
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1611,
                        "end": 1612
                      },
                      "start": 1604,
                      "end": 1613
                    }
                  ],
                  "start": 1594,
                  "end": 1619
                },
                "expression": false,
                "start": 1579,
                "end": 1619
              },
              "start": 1573,
              "end": 1619
            },
            "directive": null,
            "start": 1573,
            "end": 1619
          }
        ],
        "start": 1513,
        "end": 1621
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1501,
      "end": 1621
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c6t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1669,
                        "end": 1675
                      },
                      "start": 1667,
                      "end": 1675
                    },
                    "start": 1666,
                    "end": 1675
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1680,
                      "end": 1684
                    },
                    "typeArguments": null,
                    "start": 1680,
                    "end": 1684
                  },
                  "start": 1677,
                  "end": 1684
                },
                "start": 1665,
                "end": 1684
              },
              "start": 1663,
              "end": 1684
            },
            "start": 1659,
            "end": 1684
          },
          "init": null,
          "definite": false,
          "start": 1659,
          "end": 1684
        }
      ],
      "declare": false,
      "start": 1655,
      "end": 1685
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c6t5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1686,
          "end": 1690
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1698,
                    "end": 1704
                  },
                  "start": 1696,
                  "end": 1704
                },
                "start": 1695,
                "end": 1704
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1709,
                  "end": 1713
                },
                "typeArguments": null,
                "start": 1709,
                "end": 1713
              },
              "start": 1706,
              "end": 1713
            },
            "start": 1694,
            "end": 1713
          },
          "expression": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 1723,
                "end": 1724
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1736,
                        "end": 1740
                      },
                      "typeArguments": null,
                      "start": 1736,
                      "end": 1740
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 1742,
                      "end": 1744
                    },
                    "start": 1735,
                    "end": 1745
                  },
                  "start": 1728,
                  "end": 1745
                }
              ],
              "start": 1726,
              "end": 1747
            },
            "expression": false,
            "start": 1714,
            "end": 1747
          },
          "start": 1693,
          "end": 1747
        },
        "start": 1686,
        "end": 1747
      },
      "directive": null,
      "start": 1686,
      "end": 1748
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c7t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1795,
                    "end": 1799
                  },
                  "typeArguments": null,
                  "start": 1795,
                  "end": 1799
                },
                "start": 1795,
                "end": 1801
              },
              "start": 1793,
              "end": 1801
            },
            "start": 1789,
            "end": 1801
          },
          "init": null,
          "definite": false,
          "start": 1789,
          "end": 1801
        }
      ],
      "declare": false,
      "start": 1785,
      "end": 1802
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c7t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1803,
            "end": 1807
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1808,
            "end": 1809
          },
          "optional": false,
          "computed": true,
          "start": 1803,
          "end": 1810
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1814,
              "end": 1818
            },
            "typeArguments": null,
            "start": 1814,
            "end": 1818
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1821,
                  "end": 1822
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1824,
                  "end": 1825
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1821,
                "end": 1825
              }
            ],
            "start": 1820,
            "end": 1826
          },
          "start": 1813,
          "end": 1827
        },
        "start": 1803,
        "end": 1827
      },
      "directive": null,
      "start": 1803,
      "end": 1828
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPlaceHolder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1879,
        "end": 1891
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1898,
              "end": 1900
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1906,
                        "end": 1912
                      },
                      "start": 1904,
                      "end": 1912
                    },
                    "start": 1903,
                    "end": 1912
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1917,
                    "end": 1923
                  },
                  "start": 1914,
                  "end": 1923
                },
                "start": 1902,
                "end": 1923
              },
              "start": 1900,
              "end": 1923
            },
            "accessibility": null,
            "static": false,
            "start": 1898,
            "end": 1924
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1929,
              "end": 1931
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1933,
                  "end": 1937
                },
                "typeArguments": null,
                "start": 1933,
                "end": 1937
              },
              "start": 1931,
              "end": 1937
            },
            "accessibility": null,
            "static": false,
            "start": 1929,
            "end": 1938
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1943,
              "end": 1945
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1947,
                  "end": 1953
                },
                "start": 1947,
                "end": 1955
              },
              "start": 1945,
              "end": 1955
            },
            "accessibility": null,
            "static": false,
            "start": 1943,
            "end": 1956
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1961,
              "end": 1963
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1971,
                      "end": 1975
                    },
                    "typeArguments": null,
                    "start": 1971,
                    "end": 1975
                  },
                  "start": 1968,
                  "end": 1975
                },
                "start": 1965,
                "end": 1975
              },
              "start": 1963,
              "end": 1975
            },
            "accessibility": null,
            "static": false,
            "start": 1961,
            "end": 1976
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 1981,
              "end": 1983
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1989,
                        "end": 1995
                      },
                      "start": 1987,
                      "end": 1995
                    },
                    "start": 1986,
                    "end": 1995
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2000,
                      "end": 2004
                    },
                    "typeArguments": null,
                    "start": 2000,
                    "end": 2004
                  },
                  "start": 1997,
                  "end": 2004
                },
                "start": 1985,
                "end": 2004
              },
              "start": 1983,
              "end": 2004
            },
            "accessibility": null,
            "static": false,
            "start": 1981,
            "end": 2005
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2010,
              "end": 2012
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2018,
                        "end": 2024
                      },
                      "start": 2016,
                      "end": 2024
                    },
                    "start": 2015,
                    "end": 2024
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2029,
                        "end": 2035
                      },
                      "start": 2027,
                      "end": 2035
                    },
                    "start": 2026,
                    "end": 2035
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2040,
                      "end": 2044
                    },
                    "typeArguments": null,
                    "start": 2040,
                    "end": 2044
                  },
                  "start": 2037,
                  "end": 2044
                },
                "start": 2014,
                "end": 2044
              },
              "start": 2012,
              "end": 2044
            },
            "accessibility": null,
            "static": false,
            "start": 2010,
            "end": 2045
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2050,
              "end": 2052
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2072,
                            "end": 2078
                          },
                          "start": 2070,
                          "end": 2078
                        },
                        "start": 2069,
                        "end": 2078
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2083,
                            "end": 2089
                          },
                          "start": 2081,
                          "end": 2089
                        },
                        "start": 2080,
                        "end": 2089
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2092,
                        "end": 2098
                      },
                      "start": 2090,
                      "end": 2098
                    },
                    "start": 2068,
                    "end": 2099
                  }
                ],
                "start": 2054,
                "end": 2161
              },
              "start": 2052,
              "end": 2161
            },
            "accessibility": null,
            "static": false,
            "start": 2050,
            "end": 2162
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t8",
              "optional": false,
              "typeAnnotation": null,
              "start": 2167,
              "end": 2169
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2175,
                        "end": 2181
                      },
                      "start": 2173,
                      "end": 2181
                    },
                    "start": 2172,
                    "end": 2181
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2186,
                        "end": 2192
                      },
                      "start": 2184,
                      "end": 2192
                    },
                    "start": 2183,
                    "end": 2192
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2197,
                    "end": 2203
                  },
                  "start": 2194,
                  "end": 2203
                },
                "start": 2171,
                "end": 2203
              },
              "start": 2169,
              "end": 2203
            },
            "accessibility": null,
            "static": false,
            "start": 2167,
            "end": 2204
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t9",
              "optional": false,
              "typeAnnotation": null,
              "start": 2209,
              "end": 2211
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 2213,
                    "end": 2219
                  },
                  "start": 2213,
                  "end": 2221
                },
                "start": 2213,
                "end": 2223
              },
              "start": 2211,
              "end": 2223
            },
            "accessibility": null,
            "static": false,
            "start": 2209,
            "end": 2224
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t10",
              "optional": false,
              "typeAnnotation": null,
              "start": 2229,
              "end": 2232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2234,
                    "end": 2238
                  },
                  "typeArguments": null,
                  "start": 2234,
                  "end": 2238
                },
                "start": 2234,
                "end": 2240
              },
              "start": 2232,
              "end": 2240
            },
            "accessibility": null,
            "static": false,
            "start": 2229,
            "end": 2241
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2246,
              "end": 2249
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2256,
                              "end": 2262
                            },
                            "start": 2254,
                            "end": 2262
                          },
                          "start": 2253,
                          "end": 2262
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 2267,
                              "end": 2273
                            },
                            "start": 2265,
                            "end": 2273
                          },
                          "start": 2264,
                          "end": 2273
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2276,
                          "end": 2282
                        },
                        "start": 2274,
                        "end": 2282
                      },
                      "start": 2252,
                      "end": 2283
                    }
                  ],
                  "start": 2251,
                  "end": 2284
                },
                "start": 2251,
                "end": 2286
              },
              "start": 2249,
              "end": 2286
            },
            "accessibility": null,
            "static": false,
            "start": 2246,
            "end": 2287
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t12",
              "optional": false,
              "typeAnnotation": null,
              "start": 2292,
              "end": 2295
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IBar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2297,
                  "end": 2301
                },
                "typeArguments": null,
                "start": 2297,
                "end": 2301
              },
              "start": 2295,
              "end": 2301
            },
            "accessibility": null,
            "static": false,
            "start": 2292,
            "end": 2302
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t13",
              "optional": false,
              "typeAnnotation": null,
              "start": 2307,
              "end": 2310
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2312,
                  "end": 2316
                },
                "typeArguments": null,
                "start": 2312,
                "end": 2316
              },
              "start": 2310,
              "end": 2316
            },
            "accessibility": null,
            "static": false,
            "start": 2307,
            "end": 2317
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t14",
              "optional": false,
              "typeAnnotation": null,
              "start": 2322,
              "end": 2325
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2327,
                  "end": 2331
                },
                "typeArguments": null,
                "start": 2327,
                "end": 2331
              },
              "start": 2325,
              "end": 2331
            },
            "accessibility": null,
            "static": false,
            "start": 2322,
            "end": 2332
          }
        ],
        "start": 1892,
        "end": 2338
      },
      "declare": false,
      "start": 1869,
      "end": 2338
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2357,
                      "end": 2359
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2365,
                                "end": 2371
                              },
                              "start": 2363,
                              "end": 2371
                            },
                            "start": 2362,
                            "end": 2371
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2376,
                            "end": 2382
                          },
                          "start": 2373,
                          "end": 2382
                        },
                        "start": 2361,
                        "end": 2382
                      },
                      "start": 2359,
                      "end": 2382
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2357,
                    "end": 2383
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2388,
                      "end": 2390
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2392,
                          "end": 2396
                        },
                        "typeArguments": null,
                        "start": 2392,
                        "end": 2396
                      },
                      "start": 2390,
                      "end": 2396
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2388,
                    "end": 2397
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2402,
                      "end": 2404
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 2406,
                          "end": 2412
                        },
                        "start": 2406,
                        "end": 2414
                      },
                      "start": 2404,
                      "end": 2414
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2402,
                    "end": 2415
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2420,
                      "end": 2422
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2430,
                              "end": 2434
                            },
                            "typeArguments": null,
                            "start": 2430,
                            "end": 2434
                          },
                          "start": 2427,
                          "end": 2434
                        },
                        "start": 2424,
                        "end": 2434
                      },
                      "start": 2422,
                      "end": 2434
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2420,
                    "end": 2435
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2440,
                      "end": 2442
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2448,
                                "end": 2454
                              },
                              "start": 2446,
                              "end": 2454
                            },
                            "start": 2445,
                            "end": 2454
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2459,
                              "end": 2463
                            },
                            "typeArguments": null,
                            "start": 2459,
                            "end": 2463
                          },
                          "start": 2456,
                          "end": 2463
                        },
                        "start": 2444,
                        "end": 2463
                      },
                      "start": 2442,
                      "end": 2463
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2440,
                    "end": 2464
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t6",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2469,
                      "end": 2471
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2477,
                                "end": 2483
                              },
                              "start": 2475,
                              "end": 2483
                            },
                            "start": 2474,
                            "end": 2483
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2488,
                                "end": 2494
                              },
                              "start": 2486,
                              "end": 2494
                            },
                            "start": 2485,
                            "end": 2494
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IFoo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2499,
                              "end": 2503
                            },
                            "typeArguments": null,
                            "start": 2499,
                            "end": 2503
                          },
                          "start": 2496,
                          "end": 2503
                        },
                        "start": 2473,
                        "end": 2503
                      },
                      "start": 2471,
                      "end": 2503
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2469,
                    "end": 2504
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2509,
                      "end": 2511
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2531,
                                    "end": 2537
                                  },
                                  "start": 2529,
                                  "end": 2537
                                },
                                "start": 2528,
                                "end": 2537
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2542,
                                    "end": 2548
                                  },
                                  "start": 2540,
                                  "end": 2548
                                },
                                "start": 2539,
                                "end": 2548
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2551,
                                "end": 2557
                              },
                              "start": 2549,
                              "end": 2557
                            },
                            "start": 2527,
                            "end": 2558
                          }
                        ],
                        "start": 2513,
                        "end": 2620
                      },
                      "start": 2511,
                      "end": 2620
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2509,
                    "end": 2621
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2626,
                      "end": 2628
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2634,
                                "end": 2640
                              },
                              "start": 2632,
                              "end": 2640
                            },
                            "start": 2631,
                            "end": 2640
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2645,
                                "end": 2651
                              },
                              "start": 2643,
                              "end": 2651
                            },
                            "start": 2642,
                            "end": 2651
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2656,
                            "end": 2662
                          },
                          "start": 2653,
                          "end": 2662
                        },
                        "start": 2630,
                        "end": 2662
                      },
                      "start": 2628,
                      "end": 2662
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2626,
                    "end": 2663
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t9",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2668,
                      "end": 2670
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 2672,
                            "end": 2678
                          },
                          "start": 2672,
                          "end": 2680
                        },
                        "start": 2672,
                        "end": 2682
                      },
                      "start": 2670,
                      "end": 2682
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2668,
                    "end": 2683
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2688,
                      "end": 2691
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2693,
                            "end": 2697
                          },
                          "typeArguments": null,
                          "start": 2693,
                          "end": 2697
                        },
                        "start": 2693,
                        "end": 2699
                      },
                      "start": 2691,
                      "end": 2699
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2688,
                    "end": 2700
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2705,
                      "end": 2708
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSCallSignatureDeclaration",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "n",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 2715,
                                      "end": 2721
                                    },
                                    "start": 2713,
                                    "end": 2721
                                  },
                                  "start": 2712,
                                  "end": 2721
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 2726,
                                      "end": 2732
                                    },
                                    "start": 2724,
                                    "end": 2732
                                  },
                                  "start": 2723,
                                  "end": 2732
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2735,
                                  "end": 2741
                                },
                                "start": 2733,
                                "end": 2741
                              },
                              "start": 2711,
                              "end": 2742
                            }
                          ],
                          "start": 2710,
                          "end": 2743
                        },
                        "start": 2710,
                        "end": 2745
                      },
                      "start": 2708,
                      "end": 2745
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2705,
                    "end": 2746
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2751,
                      "end": 2754
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IBar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2756,
                          "end": 2760
                        },
                        "typeArguments": null,
                        "start": 2756,
                        "end": 2760
                      },
                      "start": 2754,
                      "end": 2760
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2751,
                    "end": 2761
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t13",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2766,
                      "end": 2769
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2771,
                          "end": 2775
                        },
                        "typeArguments": null,
                        "start": 2771,
                        "end": 2775
                      },
                      "start": 2769,
                      "end": 2775
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2766,
                    "end": 2776
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t14",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2781,
                      "end": 2784
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2786,
                          "end": 2790
                        },
                        "typeArguments": null,
                        "start": 2786,
                        "end": 2790
                      },
                      "start": 2784,
                      "end": 2790
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2781,
                    "end": 2791
                  }
                ],
                "start": 2351,
                "end": 2793
              },
              "start": 2349,
              "end": 2793
            },
            "start": 2344,
            "end": 2793
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IPlaceHolder",
                "optional": false,
                "typeAnnotation": null,
                "start": 2797,
                "end": 2809
              },
              "typeArguments": null,
              "start": 2797,
              "end": 2809
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 2811,
              "end": 2813
            },
            "start": 2796,
            "end": 2814
          },
          "definite": false,
          "start": 2344,
          "end": 2814
        }
      ],
      "declare": false,
      "start": 2340,
      "end": 2815
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2817,
            "end": 2822
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2823,
            "end": 2825
          },
          "optional": false,
          "computed": false,
          "start": 2817,
          "end": 2825
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 2838,
              "end": 2839
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2850,
                  "end": 2851
                },
                "start": 2843,
                "end": 2851
              }
            ],
            "start": 2841,
            "end": 2853
          },
          "expression": false,
          "start": 2829,
          "end": 2853
        },
        "start": 2817,
        "end": 2854
      },
      "directive": null,
      "start": 2817,
      "end": 2855
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2856,
            "end": 2861
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2862,
            "end": 2864
          },
          "optional": false,
          "computed": false,
          "start": 2856,
          "end": 2864
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2868,
              "end": 2872
            },
            "typeArguments": null,
            "start": 2868,
            "end": 2872
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2880,
                  "end": 2881
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2883,
                  "end": 2884
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2880,
                "end": 2884
              }
            ],
            "start": 2874,
            "end": 2886
          },
          "start": 2867,
          "end": 2887
        },
        "start": 2856,
        "end": 2887
      },
      "directive": null,
      "start": 2856,
      "end": 2888
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2889,
            "end": 2894
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2895,
            "end": 2897
          },
          "optional": false,
          "computed": false,
          "start": 2889,
          "end": 2897
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [],
          "start": 2900,
          "end": 2902
        },
        "start": 2889,
        "end": 2902
      },
      "directive": null,
      "start": 2889,
      "end": 2903
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2904,
            "end": 2909
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 2910,
            "end": 2912
          },
          "optional": false,
          "computed": false,
          "start": 2904,
          "end": 2912
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2936,
                      "end": 2940
                    },
                    "typeArguments": null,
                    "start": 2936,
                    "end": 2940
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 2942,
                    "end": 2944
                  },
                  "start": 2935,
                  "end": 2945
                },
                "start": 2928,
                "end": 2945
              }
            ],
            "start": 2926,
            "end": 2947
          },
          "expression": false,
          "start": 2915,
          "end": 2947
        },
        "start": 2904,
        "end": 2947
      },
      "directive": null,
      "start": 2904,
      "end": 2948
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2949,
            "end": 2954
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 2955,
            "end": 2957
          },
          "optional": false,
          "computed": false,
          "start": 2949,
          "end": 2957
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 2969,
              "end": 2970
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2982,
                      "end": 2986
                    },
                    "typeArguments": null,
                    "start": 2982,
                    "end": 2986
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 2988,
                    "end": 2990
                  },
                  "start": 2981,
                  "end": 2991
                },
                "start": 2974,
                "end": 2991
              }
            ],
            "start": 2972,
            "end": 2993
          },
          "expression": false,
          "start": 2960,
          "end": 2993
        },
        "start": 2949,
        "end": 2993
      },
      "directive": null,
      "start": 2949,
      "end": 2994
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 2995,
            "end": 3000
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 3001,
            "end": 3003
          },
          "optional": false,
          "computed": false,
          "start": 2995,
          "end": 3003
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3015,
              "end": 3016
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 3018,
              "end": 3019
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3031,
                      "end": 3035
                    },
                    "typeArguments": null,
                    "start": 3031,
                    "end": 3035
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 3037,
                    "end": 3039
                  },
                  "start": 3030,
                  "end": 3040
                },
                "start": 3023,
                "end": 3040
              }
            ],
            "start": 3021,
            "end": 3042
          },
          "expression": false,
          "start": 3006,
          "end": 3042
        },
        "start": 2995,
        "end": 3042
      },
      "directive": null,
      "start": 2995,
      "end": 3043
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3044,
            "end": 3049
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 3050,
            "end": 3052
          },
          "optional": false,
          "computed": false,
          "start": 3044,
          "end": 3052
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3067,
                  "end": 3073
                },
                "start": 3065,
                "end": 3073
              },
              "start": 3064,
              "end": 3073
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3084,
                  "end": 3085
                },
                "start": 3077,
                "end": 3085
              }
            ],
            "start": 3075,
            "end": 3087
          },
          "expression": false,
          "start": 3055,
          "end": 3087
        },
        "start": 3044,
        "end": 3087
      },
      "directive": null,
      "start": 3044,
      "end": 3088
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3090,
            "end": 3095
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3096,
            "end": 3098
          },
          "optional": false,
          "computed": false,
          "start": 3090,
          "end": 3098
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 3110,
              "end": 3111
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3122,
                  "end": 3123
                },
                "start": 3115,
                "end": 3124
              }
            ],
            "start": 3113,
            "end": 3126
          },
          "expression": false,
          "start": 3101,
          "end": 3126
        },
        "start": 3090,
        "end": 3126
      },
      "directive": null,
      "start": 3090,
      "end": 3127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3128,
            "end": 3133
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 3134,
            "end": 3136
          },
          "optional": false,
          "computed": false,
          "start": 3128,
          "end": 3136
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "ArrayExpression",
              "elements": [],
              "start": 3140,
              "end": 3142
            },
            {
              "type": "ArrayExpression",
              "elements": [],
              "start": 3143,
              "end": 3145
            }
          ],
          "start": 3139,
          "end": 3146
        },
        "start": 3128,
        "end": 3146
      },
      "directive": null,
      "start": 3128,
      "end": 3147
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3148,
            "end": 3153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 3154,
            "end": 3157
          },
          "optional": false,
          "computed": false,
          "start": 3148,
          "end": 3157
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3162,
                  "end": 3166
                },
                "typeArguments": null,
                "start": 3162,
                "end": 3166
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 3168,
                "end": 3170
              },
              "start": 3161,
              "end": 3171
            },
            {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3173,
                  "end": 3177
                },
                "typeArguments": null,
                "start": 3173,
                "end": 3177
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 3179,
                "end": 3181
              },
              "start": 3172,
              "end": 3182
            }
          ],
          "start": 3160,
          "end": 3183
        },
        "start": 3148,
        "end": 3183
      },
      "directive": null,
      "start": 3148,
      "end": 3184
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3185,
            "end": 3190
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t11",
            "optional": false,
            "typeAnnotation": null,
            "start": 3191,
            "end": 3194
          },
          "optional": false,
          "computed": false,
          "start": 3185,
          "end": 3194
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3207,
                  "end": 3208
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3210,
                  "end": 3211
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3222,
                      "end": 3223
                    },
                    "start": 3215,
                    "end": 3224
                  }
                ],
                "start": 3213,
                "end": 3226
              },
              "expression": false,
              "start": 3198,
              "end": 3226
            }
          ],
          "start": 3197,
          "end": 3227
        },
        "start": 3185,
        "end": 3227
      },
      "directive": null,
      "start": 3185,
      "end": 3228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3229,
            "end": 3234
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t12",
            "optional": false,
            "typeAnnotation": null,
            "start": 3235,
            "end": 3238
          },
          "optional": false,
          "computed": false,
          "start": 3229,
          "end": 3238
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3247,
                "end": 3250
              },
              "value": {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3253,
                    "end": 3257
                  },
                  "typeArguments": null,
                  "start": 3253,
                  "end": 3257
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 3259,
                  "end": 3261
                },
                "start": 3252,
                "end": 3262
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 3247,
              "end": 3262
            }
          ],
          "start": 3241,
          "end": 3264
        },
        "start": 3229,
        "end": 3264
      },
      "directive": null,
      "start": 3229,
      "end": 3264
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3265,
            "end": 3270
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t13",
            "optional": false,
            "typeAnnotation": null,
            "start": 3271,
            "end": 3274
          },
          "optional": false,
          "computed": false,
          "start": 3265,
          "end": 3274
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3278,
              "end": 3282
            },
            "typeArguments": null,
            "start": 3278,
            "end": 3282
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3290,
                  "end": 3291
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3302,
                      "end": 3303
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3305,
                      "end": 3306
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3317,
                          "end": 3318
                        },
                        "start": 3310,
                        "end": 3319
                      }
                    ],
                    "start": 3308,
                    "end": 3321
                  },
                  "expression": false,
                  "start": 3293,
                  "end": 3321
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3290,
                "end": 3321
              }
            ],
            "start": 3284,
            "end": 3323
          },
          "start": 3277,
          "end": 3324
        },
        "start": 3265,
        "end": 3324
      },
      "directive": null,
      "start": 3265,
      "end": 3324
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objc8",
            "optional": false,
            "typeAnnotation": null,
            "start": 3325,
            "end": 3330
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t14",
            "optional": false,
            "typeAnnotation": null,
            "start": 3331,
            "end": 3334
          },
          "optional": false,
          "computed": false,
          "start": 3325,
          "end": 3334
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "IFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3338,
              "end": 3342
            },
            "typeArguments": null,
            "start": 3338,
            "end": 3342
          },
          "expression": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3350,
                  "end": 3351
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 3353,
                  "end": 3355
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3350,
                "end": 3355
              }
            ],
            "start": 3344,
            "end": 3357
          },
          "start": 3337,
          "end": 3358
        },
        "start": 3325,
        "end": 3358
      },
      "directive": null,
      "start": 3325,
      "end": 3358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c9t5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3394,
        "end": 3398
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3406,
                      "end": 3412
                    },
                    "start": 3404,
                    "end": 3412
                  },
                  "start": 3403,
                  "end": 3412
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3417,
                    "end": 3421
                  },
                  "typeArguments": null,
                  "start": 3417,
                  "end": 3421
                },
                "start": 3414,
                "end": 3421
              },
              "start": 3402,
              "end": 3421
            },
            "start": 3400,
            "end": 3421
          },
          "start": 3399,
          "end": 3421
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3423,
        "end": 3425
      },
      "expression": false,
      "start": 3385,
      "end": 3425
    },
    {
      "type": "EmptyStatement",
      "start": 3425,
      "end": 3426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "c9t5",
          "optional": false,
          "typeAnnotation": null,
          "start": 3427,
          "end": 3431
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3441,
                "end": 3442
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3458,
                        "end": 3462
                      },
                      "typeArguments": null,
                      "start": 3458,
                      "end": 3462
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 3464,
                      "end": 3466
                    },
                    "start": 3457,
                    "end": 3467
                  },
                  "start": 3450,
                  "end": 3468
                }
              ],
              "start": 3444,
              "end": 3470
            },
            "expression": false,
            "start": 3432,
            "end": 3470
          }
        ],
        "optional": false,
        "start": 3427,
        "end": 3471
      },
      "directive": null,
      "start": 3427,
      "end": 3472
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c10t5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3524,
                            "end": 3530
                          },
                          "start": 3522,
                          "end": 3530
                        },
                        "start": 3521,
                        "end": 3530
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3535,
                          "end": 3539
                        },
                        "typeArguments": null,
                        "start": 3535,
                        "end": 3539
                      },
                      "start": 3532,
                      "end": 3539
                    },
                    "start": 3520,
                    "end": 3539
                  },
                  "start": 3517,
                  "end": 3539
                },
                "start": 3514,
                "end": 3539
              },
              "start": 3512,
              "end": 3539
            },
            "start": 3507,
            "end": 3539
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3571,
                        "end": 3572
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "TSTypeAssertion",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IFoo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3584,
                                "end": 3588
                              },
                              "typeArguments": null,
                              "start": 3584,
                              "end": 3588
                            },
                            "expression": {
                              "type": "ObjectExpression",
                              "properties": [],
                              "start": 3590,
                              "end": 3592
                            },
                            "start": 3583,
                            "end": 3593
                          },
                          "start": 3576,
                          "end": 3593
                        }
                      ],
                      "start": 3574,
                      "end": 3595
                    },
                    "expression": false,
                    "start": 3562,
                    "end": 3595
                  },
                  "start": 3555,
                  "end": 3595
                }
              ],
              "start": 3553,
              "end": 3597
            },
            "expression": false,
            "start": 3542,
            "end": 3597
          },
          "definite": false,
          "start": 3507,
          "end": 3597
        }
      ],
      "declare": false,
      "start": 3503,
      "end": 3598
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C11t5",
        "optional": false,
        "typeAnnotation": null,
        "start": 3633,
        "end": 3638
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3641,
              "end": 3652
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3660,
                              "end": 3666
                            },
                            "start": 3658,
                            "end": 3666
                          },
                          "start": 3657,
                          "end": 3666
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3671,
                            "end": 3675
                          },
                          "typeArguments": null,
                          "start": 3671,
                          "end": 3675
                        },
                        "start": 3668,
                        "end": 3675
                      },
                      "start": 3656,
                      "end": 3675
                    },
                    "start": 3654,
                    "end": 3675
                  },
                  "start": 3653,
                  "end": 3675
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3677,
                "end": 3680
              },
              "expression": false,
              "start": 3652,
              "end": 3680
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3641,
            "end": 3680
          }
        ],
        "start": 3639,
        "end": 3682
      },
      "abstract": false,
      "declare": false,
      "start": 3627,
      "end": 3682
    },
    {
      "type": "EmptyStatement",
      "start": 3682,
      "end": 3683
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 3688,
            "end": 3689
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C11t5",
              "optional": false,
              "typeAnnotation": null,
              "start": 3696,
              "end": 3701
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3711,
                    "end": 3712
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSTypeAssertion",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IFoo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3724,
                            "end": 3728
                          },
                          "typeArguments": null,
                          "start": 3724,
                          "end": 3728
                        },
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 3730,
                          "end": 3732
                        },
                        "start": 3723,
                        "end": 3733
                      },
                      "start": 3716,
                      "end": 3733
                    }
                  ],
                  "start": 3714,
                  "end": 3735
                },
                "expression": false,
                "start": 3702,
                "end": 3735
              }
            ],
            "start": 3692,
            "end": 3736
          },
          "definite": false,
          "start": 3688,
          "end": 3736
        }
      ],
      "declare": false,
      "start": 3684,
      "end": 3737
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 3781,
            "end": 3786
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3794,
                      "end": 3800
                    },
                    "start": 3792,
                    "end": 3800
                  },
                  "start": 3791,
                  "end": 3800
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3805,
                  "end": 3811
                },
                "start": 3802,
                "end": 3811
              },
              "start": 3790,
              "end": 3811
            },
            "expression": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3823,
                  "end": 3824
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3835,
                      "end": 3836
                    },
                    "start": 3828,
                    "end": 3836
                  }
                ],
                "start": 3826,
                "end": 3838
              },
              "expression": false,
              "start": 3814,
              "end": 3838
            },
            "start": 3789,
            "end": 3839
          },
          "definite": false,
          "start": 3781,
          "end": 3839
        }
      ],
      "declare": false,
      "start": 3777,
      "end": 3840
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3845,
            "end": 3850
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 3854,
                "end": 3858
              },
              "typeArguments": null,
              "start": 3854,
              "end": 3858
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3867,
                    "end": 3868
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3870,
                    "end": 3871
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 3867,
                  "end": 3871
                }
              ],
              "start": 3861,
              "end": 3873
            },
            "start": 3853,
            "end": 3874
          },
          "definite": false,
          "start": 3845,
          "end": 3874
        }
      ],
      "declare": false,
      "start": 3841,
      "end": 3875
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t3",
            "optional": false,
            "typeAnnotation": null,
            "start": 3880,
            "end": 3885
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 3889,
                "end": 3895
              },
              "start": 3889,
              "end": 3897
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 3899,
              "end": 3901
            },
            "start": 3888,
            "end": 3901
          },
          "definite": false,
          "start": 3880,
          "end": 3901
        }
      ],
      "declare": false,
      "start": 3876,
      "end": 3902
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t4",
            "optional": false,
            "typeAnnotation": null,
            "start": 3907,
            "end": 3912
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3922,
                    "end": 3926
                  },
                  "typeArguments": null,
                  "start": 3922,
                  "end": 3926
                },
                "start": 3919,
                "end": 3926
              },
              "start": 3916,
              "end": 3926
            },
            "expression": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3949,
                          "end": 3953
                        },
                        "typeArguments": null,
                        "start": 3949,
                        "end": 3953
                      },
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 3955,
                        "end": 3957
                      },
                      "start": 3948,
                      "end": 3958
                    },
                    "start": 3941,
                    "end": 3958
                  }
                ],
                "start": 3939,
                "end": 3960
              },
              "expression": false,
              "start": 3928,
              "end": 3960
            },
            "start": 3915,
            "end": 3960
          },
          "definite": false,
          "start": 3907,
          "end": 3960
        }
      ],
      "declare": false,
      "start": 3903,
      "end": 3961
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t5",
            "optional": false,
            "typeAnnotation": null,
            "start": 3966,
            "end": 3971
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3979,
                      "end": 3985
                    },
                    "start": 3977,
                    "end": 3985
                  },
                  "start": 3976,
                  "end": 3985
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3990,
                    "end": 3994
                  },
                  "typeArguments": null,
                  "start": 3990,
                  "end": 3994
                },
                "start": 3987,
                "end": 3994
              },
              "start": 3975,
              "end": 3994
            },
            "expression": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4005,
                  "end": 4006
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4018,
                          "end": 4022
                        },
                        "typeArguments": null,
                        "start": 4018,
                        "end": 4022
                      },
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 4024,
                        "end": 4026
                      },
                      "start": 4017,
                      "end": 4027
                    },
                    "start": 4010,
                    "end": 4027
                  }
                ],
                "start": 4008,
                "end": 4029
              },
              "expression": false,
              "start": 3996,
              "end": 4029
            },
            "start": 3974,
            "end": 4029
          },
          "definite": false,
          "start": 3966,
          "end": 4029
        }
      ],
      "declare": false,
      "start": 3962,
      "end": 4030
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t6",
            "optional": false,
            "typeAnnotation": null,
            "start": 4035,
            "end": 4040
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4048,
                      "end": 4054
                    },
                    "start": 4046,
                    "end": 4054
                  },
                  "start": 4045,
                  "end": 4054
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4059,
                      "end": 4065
                    },
                    "start": 4057,
                    "end": 4065
                  },
                  "start": 4056,
                  "end": 4065
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4070,
                    "end": 4074
                  },
                  "typeArguments": null,
                  "start": 4070,
                  "end": 4074
                },
                "start": 4067,
                "end": 4074
              },
              "start": 4044,
              "end": 4074
            },
            "expression": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4085,
                  "end": 4086
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4088,
                  "end": 4089
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSTypeAssertion",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IFoo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4101,
                          "end": 4105
                        },
                        "typeArguments": null,
                        "start": 4101,
                        "end": 4105
                      },
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 4107,
                        "end": 4109
                      },
                      "start": 4100,
                      "end": 4110
                    },
                    "start": 4093,
                    "end": 4110
                  }
                ],
                "start": 4091,
                "end": 4112
              },
              "expression": false,
              "start": 4076,
              "end": 4112
            },
            "start": 4043,
            "end": 4112
          },
          "definite": false,
          "start": 4035,
          "end": 4112
        }
      ],
      "declare": false,
      "start": 4031,
      "end": 4113
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t7",
            "optional": false,
            "typeAnnotation": null,
            "start": 4118,
            "end": 4123
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 4137,
                          "end": 4143
                        },
                        "start": 4135,
                        "end": 4143
                      },
                      "start": 4134,
                      "end": 4143
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 4148,
                          "end": 4154
                        },
                        "start": 4146,
                        "end": 4154
                      },
                      "start": 4145,
                      "end": 4154
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4157,
                      "end": 4163
                    },
                    "start": 4155,
                    "end": 4163
                  },
                  "start": 4133,
                  "end": 4164
                }
              ],
              "start": 4127,
              "end": 4210
            },
            "expression": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4223,
                      "end": 4229
                    },
                    "start": 4222,
                    "end": 4229
                  },
                  "start": 4221,
                  "end": 4229
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4240,
                      "end": 4241
                    },
                    "start": 4233,
                    "end": 4241
                  }
                ],
                "start": 4231,
                "end": 4243
              },
              "expression": false,
              "start": 4212,
              "end": 4243
            },
            "start": 4126,
            "end": 4243
          },
          "definite": false,
          "start": 4118,
          "end": 4243
        }
      ],
      "declare": false,
      "start": 4114,
      "end": 4244
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t8",
            "optional": false,
            "typeAnnotation": null,
            "start": 4250,
            "end": 4255
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4263,
                      "end": 4269
                    },
                    "start": 4261,
                    "end": 4269
                  },
                  "start": 4260,
                  "end": 4269
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4274,
                      "end": 4280
                    },
                    "start": 4272,
                    "end": 4280
                  },
                  "start": 4271,
                  "end": 4280
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4285,
                  "end": 4291
                },
                "start": 4282,
                "end": 4291
              },
              "start": 4259,
              "end": 4291
            },
            "expression": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4302,
                  "end": 4303
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4314,
                      "end": 4315
                    },
                    "start": 4307,
                    "end": 4316
                  }
                ],
                "start": 4305,
                "end": 4318
              },
              "expression": false,
              "start": 4293,
              "end": 4318
            },
            "start": 4258,
            "end": 4318
          },
          "definite": false,
          "start": 4250,
          "end": 4318
        }
      ],
      "declare": false,
      "start": 4246,
      "end": 4319
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t9",
            "optional": false,
            "typeAnnotation": null,
            "start": 4324,
            "end": 4329
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 4333,
                  "end": 4339
                },
                "start": 4333,
                "end": 4341
              },
              "start": 4333,
              "end": 4343
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 4346,
                  "end": 4348
                },
                {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 4349,
                  "end": 4351
                }
              ],
              "start": 4345,
              "end": 4352
            },
            "start": 4332,
            "end": 4352
          },
          "definite": false,
          "start": 4324,
          "end": 4352
        }
      ],
      "declare": false,
      "start": 4320,
      "end": 4353
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t10",
            "optional": false,
            "typeAnnotation": null,
            "start": 4358,
            "end": 4364
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4368,
                  "end": 4372
                },
                "typeArguments": null,
                "start": 4368,
                "end": 4372
              },
              "start": 4368,
              "end": 4374
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4378,
                      "end": 4382
                    },
                    "typeArguments": null,
                    "start": 4378,
                    "end": 4382
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 4384,
                    "end": 4386
                  },
                  "start": 4377,
                  "end": 4387
                },
                {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IFoo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4389,
                      "end": 4393
                    },
                    "typeArguments": null,
                    "start": 4389,
                    "end": 4393
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 4395,
                    "end": 4397
                  },
                  "start": 4388,
                  "end": 4398
                }
              ],
              "start": 4376,
              "end": 4399
            },
            "start": 4367,
            "end": 4399
          },
          "definite": false,
          "start": 4358,
          "end": 4399
        }
      ],
      "declare": false,
      "start": 4354,
      "end": 4400
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t11",
            "optional": false,
            "typeAnnotation": null,
            "start": 4405,
            "end": 4411
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 4420,
                            "end": 4426
                          },
                          "start": 4418,
                          "end": 4426
                        },
                        "start": 4417,
                        "end": 4426
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 4431,
                            "end": 4437
                          },
                          "start": 4429,
                          "end": 4437
                        },
                        "start": 4428,
                        "end": 4437
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 4440,
                        "end": 4446
                      },
                      "start": 4438,
                      "end": 4446
                    },
                    "start": 4416,
                    "end": 4447
                  }
                ],
                "start": 4415,
                "end": 4448
              },
              "start": 4415,
              "end": 4450
            },
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4462,
                      "end": 4463
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4465,
                      "end": 4466
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4477,
                          "end": 4478
                        },
                        "start": 4470,
                        "end": 4479
                      }
                    ],
                    "start": 4468,
                    "end": 4481
                  },
                  "expression": false,
                  "start": 4453,
                  "end": 4481
                }
              ],
              "start": 4452,
              "end": 4482
            },
            "start": 4414,
            "end": 4482
          },
          "definite": false,
          "start": 4405,
          "end": 4482
        }
      ],
      "declare": false,
      "start": 4401,
      "end": 4483
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t12",
            "optional": false,
            "typeAnnotation": null,
            "start": 4488,
            "end": 4494
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 4498,
                "end": 4502
              },
              "typeArguments": null,
              "start": 4498,
              "end": 4502
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4510,
                    "end": 4513
                  },
                  "value": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4516,
                        "end": 4520
                      },
                      "typeArguments": null,
                      "start": 4516,
                      "end": 4520
                    },
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 4522,
                      "end": 4524
                    },
                    "start": 4515,
                    "end": 4525
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4510,
                  "end": 4525
                }
              ],
              "start": 4504,
              "end": 4527
            },
            "start": 4497,
            "end": 4527
          },
          "definite": false,
          "start": 4488,
          "end": 4527
        }
      ],
      "declare": false,
      "start": 4484,
      "end": 4527
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t13",
            "optional": false,
            "typeAnnotation": null,
            "start": 4532,
            "end": 4538
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4542,
                "end": 4546
              },
              "typeArguments": null,
              "start": 4542,
              "end": 4546
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4555,
                    "end": 4556
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4567,
                        "end": 4568
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4570,
                        "end": 4571
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4582,
                            "end": 4583
                          },
                          "start": 4575,
                          "end": 4584
                        }
                      ],
                      "start": 4573,
                      "end": 4586
                    },
                    "expression": false,
                    "start": 4558,
                    "end": 4586
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4555,
                  "end": 4586
                }
              ],
              "start": 4549,
              "end": 4588
            },
            "start": 4541,
            "end": 4589
          },
          "definite": false,
          "start": 4532,
          "end": 4589
        }
      ],
      "declare": false,
      "start": 4528,
      "end": 4589
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c12t14",
            "optional": false,
            "typeAnnotation": null,
            "start": 4594,
            "end": 4600
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IFoo",
                "optional": false,
                "typeAnnotation": null,
                "start": 4604,
                "end": 4608
              },
              "typeArguments": null,
              "start": 4604,
              "end": 4608
            },
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4617,
                    "end": 4618
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 4620,
                    "end": 4622
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 4617,
                  "end": 4622
                }
              ],
              "start": 4611,
              "end": 4624
            },
            "start": 4603,
            "end": 4625
          },
          "definite": false,
          "start": 4594,
          "end": 4625
        }
      ],
      "declare": false,
      "start": 4590,
      "end": 4625
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4733,
        "end": 4736
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4739,
              "end": 4745
            },
            "start": 4738,
            "end": 4745
          },
          "start": 4737,
          "end": 4745
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4749,
              "end": 4755
            },
            "start": 4748,
            "end": 4755
          },
          "start": 4747,
          "end": 4755
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 4757,
          "end": 4763
        },
        "start": 4756,
        "end": 4763
      },
      "body": null,
      "expression": false,
      "start": 4716,
      "end": 4764
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EF1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4775,
        "end": 4778
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 4779,
          "end": 4780
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 4781,
          "end": 4782
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 4793,
                "end": 4794
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 4795,
                "end": 4796
              },
              "start": 4793,
              "end": 4796
            },
            "start": 4786,
            "end": 4797
          }
        ],
        "start": 4784,
        "end": 4799
      },
      "expression": false,
      "start": 4766,
      "end": 4799
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "efv",
            "optional": false,
            "typeAnnotation": null,
            "start": 4805,
            "end": 4808
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "EF1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4811,
              "end": 4814
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4815,
                "end": 4816
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 4817,
                "end": 4818
              }
            ],
            "optional": false,
            "start": 4811,
            "end": 4819
          },
          "definite": false,
          "start": 4805,
          "end": 4819
        }
      ],
      "declare": false,
      "start": 4801,
      "end": 4820
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 4892,
        "end": 4897
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4906,
              "end": 4917
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4921,
                      "end": 4927
                    },
                    "start": 4919,
                    "end": 4927
                  },
                  "start": 4918,
                  "end": 4927
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4932,
                      "end": 4938
                    },
                    "start": 4930,
                    "end": 4938
                  },
                  "start": 4929,
                  "end": 4938
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 4917,
              "end": 4940
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4906,
            "end": 4940
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4947,
              "end": 4948
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4950,
                "end": 4956
              },
              "start": 4948,
              "end": 4956
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4947,
            "end": 4957
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4964,
              "end": 4965
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4967,
                "end": 4973
              },
              "start": 4965,
              "end": 4973
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4964,
            "end": 4974
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 4981,
              "end": 4984
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dx",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4989,
                      "end": 4995
                    },
                    "start": 4987,
                    "end": 4995
                  },
                  "start": 4985,
                  "end": 4995
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dy",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5001,
                      "end": 5007
                    },
                    "start": 4999,
                    "end": 5007
                  },
                  "start": 4997,
                  "end": 5007
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5010,
                    "end": 5015
                  },
                  "typeArguments": null,
                  "start": 5010,
                  "end": 5015
                },
                "start": 5008,
                "end": 5015
              },
              "body": null,
              "expression": false,
              "start": 4984,
              "end": 5016
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4981,
            "end": 5016
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 5030,
              "end": 5036
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5038,
                  "end": 5043
                },
                "typeArguments": null,
                "start": 5038,
                "end": 5043
              },
              "start": 5036,
              "end": 5043
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 5023,
            "end": 5044
          }
        ],
        "start": 4898,
        "end": 5047
      },
      "abstract": false,
      "declare": true,
      "start": 4878,
      "end": 5047
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 5049,
            "end": 5054
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "origin",
            "optional": false,
            "typeAnnotation": null,
            "start": 5055,
            "end": 5061
          },
          "optional": false,
          "computed": false,
          "start": 5049,
          "end": 5061
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 5068,
            "end": 5073
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 5074,
              "end": 5075
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 5077,
              "end": 5078
            }
          ],
          "start": 5064,
          "end": 5079
        },
        "start": 5049,
        "end": 5079
      },
      "directive": null,
      "start": 5049,
      "end": 5080
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 5082,
              "end": 5087
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 5088,
              "end": 5097
            },
            "optional": false,
            "computed": false,
            "start": 5082,
            "end": 5097
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 5098,
            "end": 5101
          },
          "optional": false,
          "computed": false,
          "start": 5082,
          "end": 5101
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "dx",
              "optional": false,
              "typeAnnotation": null,
              "start": 5113,
              "end": 5115
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "dy",
              "optional": false,
              "typeAnnotation": null,
              "start": 5117,
              "end": 5119
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5138,
                    "end": 5143
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 5144,
                          "end": 5148
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5149,
                          "end": 5150
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5144,
                        "end": 5150
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dx",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5153,
                        "end": 5155
                      },
                      "start": 5144,
                      "end": 5155
                    },
                    {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 5157,
                          "end": 5161
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5162,
                          "end": 5163
                        },
                        "optional": false,
                        "computed": false,
                        "start": 5157,
                        "end": 5163
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dy",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5166,
                        "end": 5168
                      },
                      "start": 5157,
                      "end": 5168
                    }
                  ],
                  "start": 5134,
                  "end": 5169
                },
                "start": 5127,
                "end": 5170
              }
            ],
            "start": 5121,
            "end": 5172
          },
          "expression": false,
          "start": 5104,
          "end": 5172
        },
        "start": 5082,
        "end": 5172
      },
      "directive": null,
      "start": 5082,
      "end": 5173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 5175,
            "end": 5180
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 5181,
            "end": 5190
          },
          "optional": false,
          "computed": false,
          "start": 5175,
          "end": 5190
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5199,
                "end": 5200
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 5202,
                "end": 5203
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 5199,
              "end": 5203
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 5209,
                "end": 5210
              },
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 5212,
                "end": 5213
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 5209,
              "end": 5213
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null,
                "start": 5219,
                "end": 5222
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dx",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5233,
                    "end": 5235
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dy",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5237,
                    "end": 5239
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5262,
                          "end": 5267
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5268,
                                "end": 5272
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5273,
                                "end": 5274
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5268,
                              "end": 5274
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5277,
                              "end": 5279
                            },
                            "start": 5268,
                            "end": 5279
                          },
                          {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 5281,
                                "end": 5285
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5286,
                                "end": 5287
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5281,
                              "end": 5287
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5290,
                              "end": 5292
                            },
                            "start": 5281,
                            "end": 5292
                          }
                        ],
                        "start": 5258,
                        "end": 5293
                      },
                      "start": 5251,
                      "end": 5294
                    }
                  ],
                  "start": 5241,
                  "end": 5300
                },
                "expression": false,
                "start": 5224,
                "end": 5300
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 5219,
              "end": 5300
            }
          ],
          "start": 5193,
          "end": 5302
        },
        "start": 5175,
        "end": 5302
      },
      "directive": null,
      "start": 5175,
      "end": 5303
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5315,
        "end": 5316
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 5319,
              "end": 5320
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5322,
                "end": 5328
              },
              "start": 5320,
              "end": 5328
            },
            "accessibility": null,
            "static": false,
            "start": 5319,
            "end": 5329
          }
        ],
        "start": 5317,
        "end": 5331
      },
      "declare": false,
      "start": 5305,
      "end": 5331
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 5342,
        "end": 5343
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 5352,
            "end": 5353
          },
          "typeArguments": null,
          "start": 5352,
          "end": 5353
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 5354,
        "end": 5357
      },
      "declare": false,
      "start": 5332,
      "end": 5357
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5365,
                  "end": 5366
                },
                "typeArguments": null,
                "start": 5365,
                "end": 5366
              },
              "start": 5363,
              "end": 5366
            },
            "start": 5362,
            "end": 5366
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 5369,
            "end": 5372
          },
          "definite": false,
          "start": 5362,
          "end": 5372
        }
      ],
      "declare": false,
      "start": 5358,
      "end": 5373
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 5373
}
```
