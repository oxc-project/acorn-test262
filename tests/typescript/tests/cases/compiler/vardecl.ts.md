__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "simpleVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
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
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              },
              "start": 30,
              "end": 35
            },
            "start": 20,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 20,
          "end": 35
        }
      ],
      "declare": false,
      "start": 16,
      "end": 36
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
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              },
              "start": 58,
              "end": 66
            },
            "start": 41,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 66
        }
      ],
      "declare": false,
      "start": 37,
      "end": 67
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
            "name": "varWithArrayType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 90,
                  "end": 96
                },
                "start": 90,
                "end": 98
              },
              "start": 88,
              "end": 98
            },
            "start": 72,
            "end": 98
          },
          "init": null,
          "definite": false,
          "start": 72,
          "end": 98
        }
      ],
      "declare": false,
      "start": 68,
      "end": 99
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
            "name": "varWithInitialValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 124
          },
          "init": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 127,
            "end": 129
          },
          "definite": false,
          "start": 105,
          "end": 129
        }
      ],
      "declare": false,
      "start": 101,
      "end": 130
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
            "name": "withComplicatedValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 156
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 162
                },
                "value": {
                  "type": "Literal",
                  "value": 30,
                  "raw": "30",
                  "start": 164,
                  "end": 166
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 161,
                "end": 166
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
                  "start": 168,
                  "end": 169
                },
                "value": {
                  "type": "Literal",
                  "value": 70,
                  "raw": "70",
                  "start": 171,
                  "end": 173
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 168,
                "end": 173
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 179
                },
                "value": {
                  "type": "Literal",
                  "value": "position",
                  "raw": "\"position\"",
                  "start": 181,
                  "end": 191
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 175,
                "end": 191
              }
            ],
            "start": 159,
            "end": 193
          },
          "definite": false,
          "start": 136,
          "end": 193
        }
      ],
      "declare": false,
      "start": 132,
      "end": 194
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
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 219
          },
          "init": null,
          "definite": false,
          "start": 208,
          "end": 219
        }
      ],
      "declare": true,
      "start": 196,
      "end": 220
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
            "name": "declareVar2",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 244
          },
          "init": null,
          "definite": false,
          "start": 233,
          "end": 244
        }
      ],
      "declare": true,
      "start": 221,
      "end": 244
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
            "name": "declaredVar3",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 270
          },
          "init": null,
          "definite": false,
          "start": 258,
          "end": 270
        }
      ],
      "declare": true,
      "start": 246,
      "end": 271
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
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 304,
                "end": 310
              },
              "start": 302,
              "end": 310
            },
            "start": 284,
            "end": 310
          },
          "init": null,
          "definite": false,
          "start": 284,
          "end": 310
        }
      ],
      "declare": true,
      "start": 272,
      "end": 311
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
            "name": "arrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 327,
                  "end": 333
                },
                "start": 327,
                "end": 335
              },
              "start": 325,
              "end": 335
            },
            "start": 317,
            "end": 335
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 339,
                "end": 342
              },
              {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 344,
                "end": 347
              }
            ],
            "start": 338,
            "end": 348
          },
          "definite": false,
          "start": 317,
          "end": 348
        }
      ],
      "declare": false,
      "start": 313,
      "end": 349
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
            "name": "complicatedArrayVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 378,
                        "end": 379
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 381,
                          "end": 387
                        },
                        "start": 379,
                        "end": 387
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 378,
                      "end": 388
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 390
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 392,
                          "end": 398
                        },
                        "start": 390,
                        "end": 398
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 389,
                      "end": 399
                    }
                  ],
                  "start": 376,
                  "end": 401
                },
                "start": 376,
                "end": 403
              },
              "start": 374,
              "end": 403
            },
            "start": 355,
            "end": 403
          },
          "init": null,
          "definite": false,
          "start": 355,
          "end": 403
        }
      ],
      "declare": false,
      "start": 351,
      "end": 405
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "complicatedArrayVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 425
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 426,
            "end": 430
          },
          "optional": false,
          "computed": false,
          "start": 406,
          "end": 430
        },
        "typeArguments": null,
        "arguments": [
          {
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
                  "start": 433,
                  "end": 434
                },
                "value": {
                  "type": "Literal",
                  "value": 30,
                  "raw": "30",
                  "start": 436,
                  "end": 438
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 433,
                "end": 438
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
                  "start": 440,
                  "end": 441
                },
                "value": {
                  "type": "Literal",
                  "value": "hello world",
                  "raw": "'hello world'",
                  "start": 444,
                  "end": 457
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 440,
                "end": 457
              }
            ],
            "start": 431,
            "end": 459
          }
        ],
        "optional": false,
        "start": 406,
        "end": 460
      },
      "directive": null,
      "start": 406,
      "end": 461
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
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 477,
                            "end": 483
                          },
                          "start": 475,
                          "end": 483
                        },
                        "start": 474,
                        "end": 483
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 486,
                        "end": 492
                      },
                      "start": 484,
                      "end": 492
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 473,
                    "end": 493
                  }
                ],
                "start": 471,
                "end": 495
              },
              "start": 469,
              "end": 495
            },
            "start": 467,
            "end": 495
          },
          "init": null,
          "definite": false,
          "start": 467,
          "end": 495
        }
      ],
      "declare": false,
      "start": 463,
      "end": 496
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "new",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 519
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 525,
                        "end": 528
                      },
                      "start": 523,
                      "end": 528
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 516,
                    "end": 529
                  }
                ],
                "start": 506,
                "end": 535
              },
              "start": 504,
              "end": 535
            },
            "start": 502,
            "end": 535
          },
          "init": null,
          "definite": false,
          "start": 502,
          "end": 535
        }
      ],
      "declare": false,
      "start": 498,
      "end": 535
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 553
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 569,
                              "end": 570
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 572,
                                "end": 578
                              },
                              "start": 570,
                              "end": 578
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 569,
                            "end": 579
                          }
                        ],
                        "start": 559,
                        "end": 585
                      },
                      "start": 557,
                      "end": 585
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 550,
                    "end": 586
                  }
                ],
                "start": 544,
                "end": 588
              },
              "start": 542,
              "end": 588
            },
            "start": 541,
            "end": 588
          },
          "init": null,
          "definite": false,
          "start": 541,
          "end": 588
        }
      ],
      "declare": false,
      "start": 537,
      "end": 588
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
            "name": "d3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 607
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 621,
                              "end": 622
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 624,
                                "end": 630
                              },
                              "start": 622,
                              "end": 630
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 621,
                            "end": 631
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 640,
                              "end": 641
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 643,
                                "end": 649
                              },
                              "start": 641,
                              "end": 649
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 640,
                            "end": 650
                          }
                        ],
                        "start": 611,
                        "end": 656
                      },
                      "start": 609,
                      "end": 656
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 604,
                    "end": 657
                  }
                ],
                "start": 598,
                "end": 659
              },
              "start": 596,
              "end": 659
            },
            "start": 594,
            "end": 659
          },
          "init": null,
          "definite": false,
          "start": 594,
          "end": 659
        }
      ],
      "declare": false,
      "start": 590,
      "end": 659
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 678
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 693,
                              "end": 694
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 696,
                                "end": 702
                              },
                              "start": 694,
                              "end": 702
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 693,
                            "end": 703
                          }
                        ],
                        "start": 683,
                        "end": 709
                      },
                      "start": 681,
                      "end": 709
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 675,
                    "end": 710
                  }
                ],
                "start": 669,
                "end": 712
              },
              "start": 667,
              "end": 712
            },
            "start": 665,
            "end": 712
          },
          "init": null,
          "definite": false,
          "start": 665,
          "end": 712
        }
      ],
      "declare": false,
      "start": 661,
      "end": 712
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 732,
                        "end": 736
                      },
                      "start": 730,
                      "end": 736
                    },
                    "start": 728,
                    "end": 737
                  }
                ],
                "start": 722,
                "end": 739
              },
              "start": 720,
              "end": 739
            },
            "start": 718,
            "end": 739
          },
          "init": null,
          "definite": false,
          "start": 718,
          "end": 739
        }
      ],
      "declare": false,
      "start": 714,
      "end": 739
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
            "name": "n4",
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
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 758,
                          "end": 762
                        },
                        "start": 756,
                        "end": 762
                      },
                      "start": 754,
                      "end": 763
                    }
                  ],
                  "start": 748,
                  "end": 765
                },
                "start": 748,
                "end": 767
              },
              "start": 746,
              "end": 767
            },
            "start": 744,
            "end": 767
          },
          "init": null,
          "definite": false,
          "start": 744,
          "end": 767
        }
      ],
      "declare": false,
      "start": 740,
      "end": 768
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
            "name": "d4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 784,
                      "end": 787
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "type": "TSStringKeyword",
                            "start": 791,
                            "end": 797
                          },
                          "start": 789,
                          "end": 797
                        },
                        "start": 788,
                        "end": 797
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 804,
                                  "end": 805
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 807,
                                    "end": 813
                                  },
                                  "start": 805,
                                  "end": 813
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 804,
                                "end": 814
                              },
                              {
                                "type": "TSPropertySignature",
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 815,
                                  "end": 816
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 818,
                                    "end": 824
                                  },
                                  "start": 816,
                                  "end": 824
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 815,
                                "end": 825
                              }
                            ],
                            "start": 802,
                            "end": 827
                          },
                          "start": 800,
                          "end": 827
                        },
                        "start": 799,
                        "end": 827
                      }
                    ],
                    "returnType": {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 840,
                              "end": 841
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 843,
                                "end": 849
                              },
                              "start": 841,
                              "end": 849
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 840,
                            "end": 850
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 859,
                              "end": 860
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 862,
                                "end": 868
                              },
                              "start": 860,
                              "end": 868
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 859,
                            "end": 869
                          }
                        ],
                        "start": 830,
                        "end": 875
                      },
                      "start": 828,
                      "end": 875
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 784,
                    "end": 876
                  }
                ],
                "start": 778,
                "end": 878
              },
              "start": 776,
              "end": 878
            },
            "start": 774,
            "end": 878
          },
          "init": null,
          "definite": false,
          "start": 774,
          "end": 878
        }
      ],
      "declare": false,
      "start": 770,
      "end": 878
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 887,
        "end": 889
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 908,
                    "end": 909
                  },
                  "init": null,
                  "definite": false,
                  "start": 908,
                  "end": 909
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 915,
                        "end": 921
                      },
                      "start": 913,
                      "end": 921
                    },
                    "start": 911,
                    "end": 921
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 924,
                    "end": 926
                  },
                  "definite": false,
                  "start": 911,
                  "end": 926
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 928,
                    "end": 929
                  },
                  "init": null,
                  "definite": false,
                  "start": 928,
                  "end": 929
                }
              ],
              "declare": false,
              "start": 904,
              "end": 930
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 897,
            "end": 930
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
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 939,
                  "end": 941
                },
                "init": null,
                "definite": false,
                "start": 939,
                "end": 941
              }
            ],
            "declare": false,
            "start": 935,
            "end": 942
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 953
                },
                "init": null,
                "definite": false,
                "start": 951,
                "end": 953
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b22",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 960,
                      "end": 966
                    },
                    "start": 958,
                    "end": 966
                  },
                  "start": 955,
                  "end": 966
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 969,
                  "end": 971
                },
                "definite": false,
                "start": 955,
                "end": 971
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b222",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 973,
                  "end": 977
                },
                "init": null,
                "definite": false,
                "start": 973,
                "end": 977
              }
            ],
            "declare": false,
            "start": 947,
            "end": 978
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
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 987,
                  "end": 989
                },
                "init": null,
                "definite": false,
                "start": 987,
                "end": 989
              }
            ],
            "declare": false,
            "start": 983,
            "end": 990
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1003
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
                    "start": 1014,
                    "end": 1025
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
                        "type": "TSParameterProperty",
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1034,
                          "end": 1035
                        },
                        "readonly": false,
                        "static": false,
                        "start": 1027,
                        "end": 1035
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1037,
                      "end": 1048
                    },
                    "expression": false,
                    "start": 1026,
                    "end": 1048
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1014,
                  "end": 1048
                }
              ],
              "start": 1004,
              "end": 1054
            },
            "abstract": false,
            "declare": false,
            "start": 996,
            "end": 1054
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1075
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
                      "start": 1086,
                      "end": 1097
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
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1106,
                            "end": 1107
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1099,
                          "end": 1107
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1109,
                        "end": 1120
                      },
                      "expression": false,
                      "start": 1098,
                      "end": 1120
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1086,
                    "end": 1120
                  }
                ],
                "start": 1076,
                "end": 1126
              },
              "abstract": false,
              "declare": false,
              "start": 1067,
              "end": 1126
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1060,
            "end": 1126
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1135,
                  "end": 1136
                },
                "init": null,
                "definite": false,
                "start": 1135,
                "end": 1136
              }
            ],
            "declare": false,
            "start": 1131,
            "end": 1137
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
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1154,
                  "end": 1156
                },
                "init": null,
                "definite": false,
                "start": 1154,
                "end": 1156
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1158,
                  "end": 1160
                },
                "init": null,
                "definite": false,
                "start": 1158,
                "end": 1160
              }
            ],
            "declare": true,
            "start": 1142,
            "end": 1161
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
                  "name": "b23",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1170,
                  "end": 1173
                },
                "init": null,
                "definite": false,
                "start": 1170,
                "end": 1173
              }
            ],
            "declare": false,
            "start": 1166,
            "end": 1174
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
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1191,
                  "end": 1193
                },
                "init": null,
                "definite": false,
                "start": 1191,
                "end": 1193
              }
            ],
            "declare": true,
            "start": 1179,
            "end": 1194
          },
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
                    "name": "mE",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1210,
                    "end": 1212
                  },
                  "init": null,
                  "definite": false,
                  "start": 1210,
                  "end": 1212
                }
              ],
              "declare": false,
              "start": 1206,
              "end": 1213
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1199,
            "end": 1213
          },
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
                    "name": "d1E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1237,
                    "end": 1240
                  },
                  "init": null,
                  "definite": false,
                  "start": 1237,
                  "end": 1240
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d2E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1242,
                    "end": 1245
                  },
                  "init": null,
                  "definite": false,
                  "start": 1242,
                  "end": 1245
                }
              ],
              "declare": true,
              "start": 1225,
              "end": 1246
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1218,
            "end": 1246
          },
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
                    "name": "b2E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1262,
                    "end": 1265
                  },
                  "init": null,
                  "definite": false,
                  "start": 1262,
                  "end": 1265
                }
              ],
              "declare": false,
              "start": 1258,
              "end": 1266
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1251,
            "end": 1266
          },
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
                    "name": "v1E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1290,
                    "end": 1293
                  },
                  "init": null,
                  "definite": false,
                  "start": 1290,
                  "end": 1293
                }
              ],
              "declare": true,
              "start": 1278,
              "end": 1294
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1271,
            "end": 1294
          }
        ],
        "start": 890,
        "end": 1296
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 880,
      "end": 1296
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
            "name": "a22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1302,
            "end": 1305
          },
          "init": null,
          "definite": false,
          "start": 1302,
          "end": 1305
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1307,
            "end": 1310
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1313,
            "end": 1315
          },
          "definite": false,
          "start": 1307,
          "end": 1315
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1317,
            "end": 1320
          },
          "init": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 1323,
            "end": 1325
          },
          "definite": false,
          "start": 1317,
          "end": 1325
        }
      ],
      "declare": false,
      "start": 1298,
      "end": 1326
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
            "name": "nn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1331,
            "end": 1333
          },
          "init": null,
          "definite": false,
          "start": 1331,
          "end": 1333
        }
      ],
      "declare": false,
      "start": 1327,
      "end": 1334
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
            "name": "da1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1348,
            "end": 1351
          },
          "init": null,
          "definite": false,
          "start": 1348,
          "end": 1351
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "da2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1353,
            "end": 1356
          },
          "init": null,
          "definite": false,
          "start": 1353,
          "end": 1356
        }
      ],
      "declare": true,
      "start": 1336,
      "end": 1357
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
            "name": "normalVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 1362,
            "end": 1371
          },
          "init": null,
          "definite": false,
          "start": 1362,
          "end": 1371
        }
      ],
      "declare": false,
      "start": 1358,
      "end": 1372
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
            "name": "dv1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1385,
            "end": 1388
          },
          "init": null,
          "definite": false,
          "start": 1385,
          "end": 1388
        }
      ],
      "declare": true,
      "start": 1373,
      "end": 1389
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
            "name": "xl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1394,
            "end": 1396
          },
          "init": null,
          "definite": false,
          "start": 1394,
          "end": 1396
        }
      ],
      "declare": false,
      "start": 1390,
      "end": 1397
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
            "typeAnnotation": null,
            "start": 1402,
            "end": 1403
          },
          "init": null,
          "definite": false,
          "start": 1402,
          "end": 1403
        }
      ],
      "declare": false,
      "start": 1398,
      "end": 1404
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 1409,
            "end": 1410
          },
          "init": null,
          "definite": false,
          "start": 1409,
          "end": 1410
        }
      ],
      "declare": false,
      "start": 1405,
      "end": 1411
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1422,
        "end": 1425
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1426,
          "end": 1428
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1440,
                  "end": 1441
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1444,
                  "end": 1446
                },
                "definite": false,
                "start": 1440,
                "end": 1446
              }
            ],
            "declare": false,
            "start": 1436,
            "end": 1447
          }
        ],
        "start": 1430,
        "end": 1449
      },
      "expression": false,
      "start": 1413,
      "end": 1449
    },
    {
      "type": "ForStatement",
      "init": {
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
              "start": 1460,
              "end": 1461
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1464,
              "end": 1465
            },
            "definite": false,
            "start": 1460,
            "end": 1465
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 1467,
              "end": 1468
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1471,
              "end": 1472
            },
            "definite": false,
            "start": 1467,
            "end": 1472
          }
        ],
        "declare": false,
        "start": 1456,
        "end": 1472
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1474,
          "end": 1475
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1478,
          "end": 1480
        },
        "start": 1474,
        "end": 1480
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1482,
          "end": 1483
        },
        "start": 1482,
        "end": 1485
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null,
                "start": 1493,
                "end": 1494
              },
              "start": 1493,
              "end": 1496
            },
            "directive": null,
            "start": 1493,
            "end": 1497
          }
        ],
        "start": 1487,
        "end": 1499
      },
      "start": 1451,
      "end": 1499
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 1511,
              "end": 1512
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1515,
              "end": 1516
            },
            "definite": false,
            "start": 1511,
            "end": 1516
          }
        ],
        "declare": false,
        "start": 1507,
        "end": 1516
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1518,
          "end": 1519
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 30,
          "raw": "30",
          "start": 1522,
          "end": 1524
        },
        "start": 1518,
        "end": 1524
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1526,
          "end": 1527
        },
        "start": 1526,
        "end": 1529
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 1537,
                "end": 1538
              },
              "start": 1537,
              "end": 1540
            },
            "directive": null,
            "start": 1537,
            "end": 1541
          }
        ],
        "start": 1531,
        "end": 1543
      },
      "start": 1502,
      "end": 1543
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1548,
            "end": 1549
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1552,
            "end": 1554
          },
          "definite": false,
          "start": 1548,
          "end": 1554
        }
      ],
      "declare": false,
      "start": 1544,
      "end": 1555
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1555
}
```
