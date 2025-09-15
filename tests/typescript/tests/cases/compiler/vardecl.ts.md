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
        "start": 890,
        "end": 892
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
                    "start": 911,
                    "end": 912
                  },
                  "init": null,
                  "definite": false,
                  "start": 911,
                  "end": 912
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
                        "start": 918,
                        "end": 924
                      },
                      "start": 916,
                      "end": 924
                    },
                    "start": 914,
                    "end": 924
                  },
                  "init": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 927,
                    "end": 929
                  },
                  "definite": false,
                  "start": 914,
                  "end": 929
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 931,
                    "end": 932
                  },
                  "init": null,
                  "definite": false,
                  "start": 931,
                  "end": 932
                }
              ],
              "declare": false,
              "start": 907,
              "end": 933
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 900,
            "end": 933
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
                  "start": 942,
                  "end": 944
                },
                "init": null,
                "definite": false,
                "start": 942,
                "end": 944
              }
            ],
            "declare": false,
            "start": 938,
            "end": 945
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
                  "start": 954,
                  "end": 956
                },
                "init": null,
                "definite": false,
                "start": 954,
                "end": 956
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
                      "start": 963,
                      "end": 969
                    },
                    "start": 961,
                    "end": 969
                  },
                  "start": 958,
                  "end": 969
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 972,
                  "end": 974
                },
                "definite": false,
                "start": 958,
                "end": 974
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b222",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 980
                },
                "init": null,
                "definite": false,
                "start": 976,
                "end": 980
              }
            ],
            "declare": false,
            "start": 950,
            "end": 981
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
                  "start": 990,
                  "end": 992
                },
                "init": null,
                "definite": false,
                "start": 990,
                "end": 992
              }
            ],
            "declare": false,
            "start": 986,
            "end": 993
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
              "start": 1005,
              "end": 1006
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
                    "start": 1017,
                    "end": 1028
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
                          "start": 1037,
                          "end": 1038
                        },
                        "readonly": false,
                        "static": false,
                        "start": 1030,
                        "end": 1038
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1040,
                      "end": 1051
                    },
                    "expression": false,
                    "start": 1029,
                    "end": 1051
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1017,
                  "end": 1051
                }
              ],
              "start": 1007,
              "end": 1057
            },
            "abstract": false,
            "declare": false,
            "start": 999,
            "end": 1057
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
                "start": 1076,
                "end": 1078
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
                      "start": 1089,
                      "end": 1100
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
                            "start": 1109,
                            "end": 1110
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1102,
                          "end": 1110
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1112,
                        "end": 1123
                      },
                      "expression": false,
                      "start": 1101,
                      "end": 1123
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1089,
                    "end": 1123
                  }
                ],
                "start": 1079,
                "end": 1129
              },
              "abstract": false,
              "declare": false,
              "start": 1070,
              "end": 1129
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1063,
            "end": 1129
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
                  "start": 1138,
                  "end": 1139
                },
                "init": null,
                "definite": false,
                "start": 1138,
                "end": 1139
              }
            ],
            "declare": false,
            "start": 1134,
            "end": 1140
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
                  "start": 1157,
                  "end": 1159
                },
                "init": null,
                "definite": false,
                "start": 1157,
                "end": 1159
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1161,
                  "end": 1163
                },
                "init": null,
                "definite": false,
                "start": 1161,
                "end": 1163
              }
            ],
            "declare": true,
            "start": 1145,
            "end": 1164
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
                  "start": 1173,
                  "end": 1176
                },
                "init": null,
                "definite": false,
                "start": 1173,
                "end": 1176
              }
            ],
            "declare": false,
            "start": 1169,
            "end": 1177
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
                  "start": 1194,
                  "end": 1196
                },
                "init": null,
                "definite": false,
                "start": 1194,
                "end": 1196
              }
            ],
            "declare": true,
            "start": 1182,
            "end": 1197
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
                    "start": 1213,
                    "end": 1215
                  },
                  "init": null,
                  "definite": false,
                  "start": 1213,
                  "end": 1215
                }
              ],
              "declare": false,
              "start": 1209,
              "end": 1216
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1202,
            "end": 1216
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
                    "start": 1240,
                    "end": 1243
                  },
                  "init": null,
                  "definite": false,
                  "start": 1240,
                  "end": 1243
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d2E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1245,
                    "end": 1248
                  },
                  "init": null,
                  "definite": false,
                  "start": 1245,
                  "end": 1248
                }
              ],
              "declare": true,
              "start": 1228,
              "end": 1249
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1221,
            "end": 1249
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
                    "start": 1265,
                    "end": 1268
                  },
                  "init": null,
                  "definite": false,
                  "start": 1265,
                  "end": 1268
                }
              ],
              "declare": false,
              "start": 1261,
              "end": 1269
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1254,
            "end": 1269
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
                    "start": 1293,
                    "end": 1296
                  },
                  "init": null,
                  "definite": false,
                  "start": 1293,
                  "end": 1296
                }
              ],
              "declare": true,
              "start": 1281,
              "end": 1297
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1274,
            "end": 1297
          }
        ],
        "start": 893,
        "end": 1299
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 880,
      "end": 1299
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
            "start": 1305,
            "end": 1308
          },
          "init": null,
          "definite": false,
          "start": 1305,
          "end": 1308
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1310,
            "end": 1313
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1316,
            "end": 1318
          },
          "definite": false,
          "start": 1310,
          "end": 1318
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1320,
            "end": 1323
          },
          "init": {
            "type": "Literal",
            "value": 30,
            "raw": "30",
            "start": 1326,
            "end": 1328
          },
          "definite": false,
          "start": 1320,
          "end": 1328
        }
      ],
      "declare": false,
      "start": 1301,
      "end": 1329
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
            "start": 1334,
            "end": 1336
          },
          "init": null,
          "definite": false,
          "start": 1334,
          "end": 1336
        }
      ],
      "declare": false,
      "start": 1330,
      "end": 1337
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
            "start": 1351,
            "end": 1354
          },
          "init": null,
          "definite": false,
          "start": 1351,
          "end": 1354
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "da2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1356,
            "end": 1359
          },
          "init": null,
          "definite": false,
          "start": 1356,
          "end": 1359
        }
      ],
      "declare": true,
      "start": 1339,
      "end": 1360
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
            "start": 1365,
            "end": 1374
          },
          "init": null,
          "definite": false,
          "start": 1365,
          "end": 1374
        }
      ],
      "declare": false,
      "start": 1361,
      "end": 1375
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
            "start": 1388,
            "end": 1391
          },
          "init": null,
          "definite": false,
          "start": 1388,
          "end": 1391
        }
      ],
      "declare": true,
      "start": 1376,
      "end": 1392
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
            "start": 1397,
            "end": 1399
          },
          "init": null,
          "definite": false,
          "start": 1397,
          "end": 1399
        }
      ],
      "declare": false,
      "start": 1393,
      "end": 1400
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
            "start": 1405,
            "end": 1406
          },
          "init": null,
          "definite": false,
          "start": 1405,
          "end": 1406
        }
      ],
      "declare": false,
      "start": 1401,
      "end": 1407
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
            "start": 1412,
            "end": 1413
          },
          "init": null,
          "definite": false,
          "start": 1412,
          "end": 1413
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1414
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1425,
        "end": 1428
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
          "start": 1429,
          "end": 1431
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
                  "start": 1443,
                  "end": 1444
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1447,
                  "end": 1449
                },
                "definite": false,
                "start": 1443,
                "end": 1449
              }
            ],
            "declare": false,
            "start": 1439,
            "end": 1450
          }
        ],
        "start": 1433,
        "end": 1452
      },
      "expression": false,
      "start": 1416,
      "end": 1452
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
              "start": 1463,
              "end": 1464
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1467,
              "end": 1468
            },
            "definite": false,
            "start": 1463,
            "end": 1468
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null,
              "start": 1470,
              "end": 1471
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1474,
              "end": 1475
            },
            "definite": false,
            "start": 1470,
            "end": 1475
          }
        ],
        "declare": false,
        "start": 1459,
        "end": 1475
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 1477,
          "end": 1478
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 1481,
          "end": 1483
        },
        "start": 1477,
        "end": 1483
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
          "start": 1485,
          "end": 1486
        },
        "start": 1485,
        "end": 1488
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
                "start": 1496,
                "end": 1497
              },
              "start": 1496,
              "end": 1499
            },
            "directive": null,
            "start": 1496,
            "end": 1500
          }
        ],
        "start": 1490,
        "end": 1502
      },
      "start": 1454,
      "end": 1502
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
              "start": 1514,
              "end": 1515
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1518,
              "end": 1519
            },
            "definite": false,
            "start": 1514,
            "end": 1519
          }
        ],
        "declare": false,
        "start": 1510,
        "end": 1519
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1521,
          "end": 1522
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 30,
          "raw": "30",
          "start": 1525,
          "end": 1527
        },
        "start": 1521,
        "end": 1527
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
          "start": 1529,
          "end": 1530
        },
        "start": 1529,
        "end": 1532
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
                "start": 1540,
                "end": 1541
              },
              "start": 1540,
              "end": 1543
            },
            "directive": null,
            "start": 1540,
            "end": 1544
          }
        ],
        "start": 1534,
        "end": 1546
      },
      "start": 1505,
      "end": 1546
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
            "start": 1551,
            "end": 1552
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 1555,
            "end": 1557
          },
          "definite": false,
          "start": 1551,
          "end": 1557
        }
      ],
      "declare": false,
      "start": 1547,
      "end": 1558
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1558
}
```
