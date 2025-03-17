__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1556,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "simpleVar",
            "typeAnnotation": null,
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
      "start": 16,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 35,
            "name": "anotherVar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 35,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
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
      "start": 37,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 66,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 66,
            "name": "varWithSimpleType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
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
      "start": 68,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 72,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 98,
            "name": "varWithArrayType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 98,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 90,
                "end": 98,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 90,
                  "end": 96
                }
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
      "start": 101,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 129,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 124,
            "name": "varWithInitialValue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 127,
            "end": 129,
            "value": 30,
            "raw": "30"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 156,
            "name": "withComplicatedValue",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 159,
            "end": 193,
            "properties": [
              {
                "type": "Property",
                "start": 161,
                "end": 166,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 164,
                  "end": 166,
                  "value": 30,
                  "raw": "30"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 168,
                "end": 173,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 171,
                  "end": 173,
                  "value": 70,
                  "raw": "70"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 175,
                "end": 191,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 179,
                  "name": "desc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 181,
                  "end": 191,
                  "value": "position",
                  "raw": "\"position\""
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
      "type": "VariableDeclaration",
      "start": 196,
      "end": 220,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 219,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 219,
            "name": "declaredVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 244,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 244,
            "name": "declareVar2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 246,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 270,
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 270,
            "name": "declaredVar3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 310,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 310,
            "name": "deckareVarWithType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 310,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 304,
                "end": 310
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 313,
      "end": 349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 317,
          "end": 348,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 335,
            "name": "arrayVar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 325,
              "end": 335,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 327,
                "end": 335,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 327,
                  "end": 333
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 338,
            "end": 348,
            "elements": [
              {
                "type": "Literal",
                "start": 339,
                "end": 342,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 344,
                "end": 347,
                "value": "b",
                "raw": "'b'"
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
      "type": "VariableDeclaration",
      "start": 351,
      "end": 405,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 403,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 403,
            "name": "complicatedArrayVar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 403,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 376,
                "end": 403,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 376,
                  "end": 401,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 378,
                      "end": 388,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 379,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 379,
                        "end": 387,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 381,
                          "end": 387
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 389,
                      "end": 399,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 390,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 390,
                        "end": 398,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 392,
                          "end": 398
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
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
      "type": "ExpressionStatement",
      "start": 406,
      "end": 461,
      "expression": {
        "type": "CallExpression",
        "start": 406,
        "end": 460,
        "callee": {
          "type": "MemberExpression",
          "start": 406,
          "end": 430,
          "object": {
            "type": "Identifier",
            "start": 406,
            "end": 425,
            "name": "complicatedArrayVar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 426,
            "end": 430,
            "name": "push",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 431,
            "end": 459,
            "properties": [
              {
                "type": "Property",
                "start": 433,
                "end": 438,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 436,
                  "end": 438,
                  "value": 30,
                  "raw": "30"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 440,
                "end": 457,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 441,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 444,
                  "end": 457,
                  "value": "hello world",
                  "raw": "'hello world'"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 463,
      "end": 496,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 467,
          "end": 495,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 495,
            "name": "n1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 469,
              "end": 495,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 471,
                "end": 495,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 473,
                    "end": 493,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 474,
                        "end": 483,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 475,
                          "end": 483,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 477,
                            "end": 483
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 484,
                      "end": 492,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 486,
                        "end": 492
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
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
      "start": 498,
      "end": 535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 502,
          "end": 535,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 535,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 504,
              "end": 535,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 506,
                "end": 535,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 516,
                    "end": 529,
                    "key": {
                      "type": "Identifier",
                      "start": 516,
                      "end": 519,
                      "name": "new",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 523,
                      "end": 528,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 525,
                        "end": 528
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
      "start": 537,
      "end": 588,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 588,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 588,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 542,
              "end": 588,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 544,
                "end": 588,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 550,
                    "end": 586,
                    "key": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 553,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": true,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 557,
                      "end": 585,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 559,
                        "end": 585,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 569,
                            "end": 579,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 569,
                              "end": 570,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 570,
                              "end": 578,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 572,
                                "end": 578
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
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
      "start": 590,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 594,
          "end": 659,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 659,
            "name": "d3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 596,
              "end": 659,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 598,
                "end": 659,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 604,
                    "end": 657,
                    "key": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 607,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 609,
                      "end": 656,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 611,
                        "end": 656,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 621,
                            "end": 631,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 621,
                              "end": 622,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 622,
                              "end": 630,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 624,
                                "end": 630
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 640,
                            "end": 650,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 640,
                              "end": 641,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 641,
                              "end": 649,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 643,
                                "end": 649
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
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
      "start": 661,
      "end": 712,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 665,
          "end": 712,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 712,
            "name": "d2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 667,
              "end": 712,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 669,
                "end": 712,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 675,
                    "end": 710,
                    "key": {
                      "type": "Identifier",
                      "start": 675,
                      "end": 678,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 681,
                      "end": 709,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 683,
                        "end": 709,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 693,
                            "end": 703,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 693,
                              "end": 694,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 694,
                              "end": 702,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 696,
                                "end": 702
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
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
      "start": 714,
      "end": 739,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 718,
          "end": 739,
          "id": {
            "type": "Identifier",
            "start": 718,
            "end": 739,
            "name": "n2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 720,
              "end": 739,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 722,
                "end": 739,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 728,
                    "end": 737,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 730,
                      "end": 736,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 732,
                        "end": 736
                      }
                    }
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
      "start": 740,
      "end": 768,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 744,
          "end": 767,
          "id": {
            "type": "Identifier",
            "start": 744,
            "end": 767,
            "name": "n4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 746,
              "end": 767,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 748,
                "end": 767,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 748,
                  "end": 765,
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "start": 754,
                      "end": 763,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 756,
                        "end": 762,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 758,
                          "end": 762
                        }
                      }
                    }
                  ]
                }
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
      "start": 770,
      "end": 878,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 774,
          "end": 878,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 878,
            "name": "d4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 776,
              "end": 878,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 778,
                "end": 878,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 784,
                    "end": 876,
                    "key": {
                      "type": "Identifier",
                      "start": 784,
                      "end": 787,
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
                        "start": 788,
                        "end": 797,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 789,
                          "end": 797,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 791,
                            "end": 797
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 799,
                        "end": 827,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 800,
                          "end": 827,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 802,
                            "end": 827,
                            "members": [
                              {
                                "type": "TSPropertySignature",
                                "start": 804,
                                "end": 814,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 804,
                                  "end": 805,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 805,
                                  "end": 813,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 807,
                                    "end": 813
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 815,
                                "end": 825,
                                "computed": false,
                                "optional": false,
                                "readonly": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 815,
                                  "end": 816,
                                  "name": "y",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 816,
                                  "end": 824,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 818,
                                    "end": 824
                                  }
                                },
                                "accessibility": null,
                                "static": false
                              }
                            ]
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 828,
                      "end": 875,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 830,
                        "end": 875,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 840,
                            "end": 850,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 840,
                              "end": 841,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 841,
                              "end": 849,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 843,
                                "end": 849
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 859,
                            "end": 869,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 859,
                              "end": 860,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 860,
                              "end": 868,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 862,
                                "end": 868
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
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
      "type": "TSModuleDeclaration",
      "start": 880,
      "end": 1296,
      "id": {
        "type": "Identifier",
        "start": 887,
        "end": 889,
        "name": "m2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 890,
        "end": 1296,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 897,
            "end": 930,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 904,
              "end": 930,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 908,
                  "end": 909,
                  "id": {
                    "type": "Identifier",
                    "start": 908,
                    "end": 909,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 911,
                  "end": 926,
                  "id": {
                    "type": "Identifier",
                    "start": 911,
                    "end": 921,
                    "name": "b2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 913,
                      "end": 921,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 915,
                        "end": 921
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 924,
                    "end": 926,
                    "value": 10,
                    "raw": "10"
                  },
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 928,
                  "end": 929,
                  "id": {
                    "type": "Identifier",
                    "start": 928,
                    "end": 929,
                    "name": "b",
                    "typeAnnotation": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 935,
            "end": 942,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 939,
                "end": 941,
                "id": {
                  "type": "Identifier",
                  "start": 939,
                  "end": 941,
                  "name": "m1",
                  "typeAnnotation": null,
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
            "start": 947,
            "end": 978,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 951,
                "end": 953,
                "id": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 953,
                  "name": "a2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 955,
                "end": 971,
                "id": {
                  "type": "Identifier",
                  "start": 955,
                  "end": 966,
                  "name": "b22",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 958,
                    "end": 966,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 960,
                      "end": 966
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 969,
                  "end": 971,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 973,
                "end": 977,
                "id": {
                  "type": "Identifier",
                  "start": 973,
                  "end": 977,
                  "name": "b222",
                  "typeAnnotation": null,
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
            "start": 983,
            "end": 990,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 987,
                "end": 989,
                "id": {
                  "type": "Identifier",
                  "start": 987,
                  "end": 989,
                  "name": "m3",
                  "typeAnnotation": null,
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
            "type": "ClassDeclaration",
            "start": 996,
            "end": 1054,
            "id": {
              "type": "Identifier",
              "start": 1002,
              "end": 1003,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 1004,
              "end": 1054,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1014,
                  "end": 1048,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1014,
                    "end": 1025,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1026,
                    "end": 1048,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 1027,
                        "end": 1035,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 1034,
                          "end": 1035,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 1037,
                      "end": 1048,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
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
            "type": "ExportNamedDeclaration",
            "start": 1060,
            "end": 1126,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1067,
              "end": 1126,
              "id": {
                "type": "Identifier",
                "start": 1073,
                "end": 1075,
                "name": "C2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 1076,
                "end": 1126,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1086,
                    "end": 1120,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1086,
                      "end": 1097,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1098,
                      "end": 1120,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 1099,
                          "end": 1107,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1106,
                            "end": 1107,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 1109,
                        "end": 1120,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 1131,
            "end": 1137,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1135,
                "end": 1136,
                "id": {
                  "type": "Identifier",
                  "start": 1135,
                  "end": 1136,
                  "name": "m",
                  "typeAnnotation": null,
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
            "start": 1142,
            "end": 1161,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1154,
                "end": 1156,
                "id": {
                  "type": "Identifier",
                  "start": 1154,
                  "end": 1156,
                  "name": "d1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1158,
                "end": 1160,
                "id": {
                  "type": "Identifier",
                  "start": 1158,
                  "end": 1160,
                  "name": "d2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": true
          },
          {
            "type": "VariableDeclaration",
            "start": 1166,
            "end": 1174,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1170,
                "end": 1173,
                "id": {
                  "type": "Identifier",
                  "start": 1170,
                  "end": 1173,
                  "name": "b23",
                  "typeAnnotation": null,
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
            "start": 1179,
            "end": 1194,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1191,
                "end": 1193,
                "id": {
                  "type": "Identifier",
                  "start": 1191,
                  "end": 1193,
                  "name": "v1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": true
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1199,
            "end": 1213,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1206,
              "end": 1213,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1210,
                  "end": 1212,
                  "id": {
                    "type": "Identifier",
                    "start": 1210,
                    "end": 1212,
                    "name": "mE",
                    "typeAnnotation": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1218,
            "end": 1246,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1225,
              "end": 1246,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1237,
                  "end": 1240,
                  "id": {
                    "type": "Identifier",
                    "start": 1237,
                    "end": 1240,
                    "name": "d1E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 1242,
                  "end": 1245,
                  "id": {
                    "type": "Identifier",
                    "start": 1242,
                    "end": 1245,
                    "name": "d2E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1251,
            "end": 1266,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1258,
              "end": 1266,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1262,
                  "end": 1265,
                  "id": {
                    "type": "Identifier",
                    "start": 1262,
                    "end": 1265,
                    "name": "b2E",
                    "typeAnnotation": null,
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1271,
            "end": 1294,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1278,
              "end": 1294,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1290,
                  "end": 1293,
                  "id": {
                    "type": "Identifier",
                    "start": 1290,
                    "end": 1293,
                    "name": "v1E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": true
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1298,
      "end": 1326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1302,
          "end": 1305,
          "id": {
            "type": "Identifier",
            "start": 1302,
            "end": 1305,
            "name": "a22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 1307,
          "end": 1315,
          "id": {
            "type": "Identifier",
            "start": 1307,
            "end": 1310,
            "name": "b22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1313,
            "end": 1315,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 1317,
          "end": 1325,
          "id": {
            "type": "Identifier",
            "start": 1317,
            "end": 1320,
            "name": "c22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1323,
            "end": 1325,
            "value": 30,
            "raw": "30"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1327,
      "end": 1334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1331,
          "end": 1333,
          "id": {
            "type": "Identifier",
            "start": 1331,
            "end": 1333,
            "name": "nn",
            "typeAnnotation": null,
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
      "start": 1336,
      "end": 1357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1348,
          "end": 1351,
          "id": {
            "type": "Identifier",
            "start": 1348,
            "end": 1351,
            "name": "da1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 1353,
          "end": 1356,
          "id": {
            "type": "Identifier",
            "start": 1353,
            "end": 1356,
            "name": "da2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1358,
      "end": 1372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1362,
          "end": 1371,
          "id": {
            "type": "Identifier",
            "start": 1362,
            "end": 1371,
            "name": "normalVar",
            "typeAnnotation": null,
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
      "start": 1373,
      "end": 1389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1385,
          "end": 1388,
          "id": {
            "type": "Identifier",
            "start": 1385,
            "end": 1388,
            "name": "dv1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1390,
      "end": 1397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1394,
          "end": 1396,
          "id": {
            "type": "Identifier",
            "start": 1394,
            "end": 1396,
            "name": "xl",
            "typeAnnotation": null,
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
      "start": 1398,
      "end": 1404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1402,
          "end": 1403,
          "id": {
            "type": "Identifier",
            "start": 1402,
            "end": 1403,
            "name": "x",
            "typeAnnotation": null,
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
      "start": 1405,
      "end": 1411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1409,
          "end": 1410,
          "id": {
            "type": "Identifier",
            "start": 1409,
            "end": 1410,
            "name": "z",
            "typeAnnotation": null,
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
      "type": "FunctionDeclaration",
      "start": 1413,
      "end": 1449,
      "id": {
        "type": "Identifier",
        "start": 1422,
        "end": 1425,
        "name": "foo",
        "typeAnnotation": null,
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
          "end": 1428,
          "name": "a2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1430,
        "end": 1449,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1436,
            "end": 1447,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1440,
                "end": 1446,
                "id": {
                  "type": "Identifier",
                  "start": 1440,
                  "end": 1441,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1444,
                  "end": 1446,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ForStatement",
      "start": 1451,
      "end": 1499,
      "init": {
        "type": "VariableDeclaration",
        "start": 1456,
        "end": 1472,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1460,
            "end": 1465,
            "id": {
              "type": "Identifier",
              "start": 1460,
              "end": 1461,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1464,
              "end": 1465,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 1467,
            "end": 1472,
            "id": {
              "type": "Identifier",
              "start": 1467,
              "end": 1468,
              "name": "j",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1471,
              "end": 1472,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1474,
        "end": 1480,
        "left": {
          "type": "Identifier",
          "start": 1474,
          "end": 1475,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1478,
          "end": 1480,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1482,
        "end": 1485,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1482,
          "end": 1483,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1487,
        "end": 1499,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1493,
            "end": 1497,
            "expression": {
              "type": "UpdateExpression",
              "start": 1493,
              "end": 1496,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 1493,
                "end": 1494,
                "name": "j",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1502,
      "end": 1543,
      "init": {
        "type": "VariableDeclaration",
        "start": 1507,
        "end": 1516,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1511,
            "end": 1516,
            "id": {
              "type": "Identifier",
              "start": 1511,
              "end": 1512,
              "name": "k",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1515,
              "end": 1516,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1518,
        "end": 1524,
        "left": {
          "type": "Identifier",
          "start": 1518,
          "end": 1519,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1522,
          "end": 1524,
          "value": 30,
          "raw": "30"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1526,
        "end": 1529,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 1526,
          "end": 1527,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1531,
        "end": 1543,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1537,
            "end": 1541,
            "expression": {
              "type": "UpdateExpression",
              "start": 1537,
              "end": 1540,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 1537,
                "end": 1538,
                "name": "k",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1544,
      "end": 1555,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1548,
          "end": 1554,
          "id": {
            "type": "Identifier",
            "start": 1548,
            "end": 1549,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1552,
            "end": 1554,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
