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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "simpleVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 35,
            "decorators": [],
            "name": "anotherVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 35,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 66,
            "decorators": [],
            "name": "varWithSimpleType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 72,
            "end": 98,
            "decorators": [],
            "name": "varWithArrayType",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 124,
            "decorators": [],
            "name": "varWithInitialValue",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 127,
            "end": 129,
            "raw": "30",
            "value": 30
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 156,
            "decorators": [],
            "name": "withComplicatedValue",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 164,
                  "end": 166,
                  "raw": "30",
                  "value": 30
                }
              },
              {
                "type": "Property",
                "start": 168,
                "end": 173,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 171,
                  "end": 173,
                  "raw": "70",
                  "value": 70
                }
              },
              {
                "type": "Property",
                "start": 175,
                "end": 191,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 179,
                  "decorators": [],
                  "name": "desc",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 181,
                  "end": 191,
                  "raw": "\"position\"",
                  "value": "position"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 219,
            "decorators": [],
            "name": "declaredVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 244,
            "decorators": [],
            "name": "declareVar2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 270,
            "decorators": [],
            "name": "declaredVar3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 310,
            "decorators": [],
            "name": "deckareVarWithType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 310,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 304,
                "end": 310
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 317,
            "end": 335,
            "decorators": [],
            "name": "arrayVar",
            "optional": false,
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
            }
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
                "raw": "'a'",
                "value": "a"
              },
              {
                "type": "Literal",
                "start": 344,
                "end": 347,
                "raw": "'b'",
                "value": "b"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 403,
            "decorators": [],
            "name": "complicatedArrayVar",
            "optional": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 378,
                        "end": 379,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 379,
                        "end": 387,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 381,
                          "end": 387
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 389,
                      "end": 399,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 390,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 390,
                        "end": 398,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 392,
                          "end": 398
                        }
                      }
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 406,
      "end": 461,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 406,
        "end": 460,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 436,
                  "end": 438,
                  "raw": "30",
                  "value": 30
                }
              },
              {
                "type": "Property",
                "start": 440,
                "end": 457,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 440,
                  "end": 441,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 444,
                  "end": 457,
                  "raw": "'hello world'",
                  "value": "hello world"
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 406,
          "end": 430,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 406,
            "end": 425,
            "decorators": [],
            "name": "complicatedArrayVar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 426,
            "end": 430,
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 467,
            "end": 495,
            "decorators": [],
            "name": "n1",
            "optional": false,
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
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 474,
                        "end": 483,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 475,
                          "end": 483,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 477,
                            "end": 483
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 484,
                      "end": 492,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 486,
                        "end": 492
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 502,
            "end": 535,
            "decorators": [],
            "name": "c",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 516,
                      "end": 519,
                      "decorators": [],
                      "name": "new",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
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
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 588,
            "decorators": [],
            "name": "d",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 553,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [],
                    "readonly": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 569,
                              "end": 570,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 570,
                              "end": 578,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 572,
                                "end": 578
                              }
                            }
                          }
                        ]
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 594,
            "end": 659,
            "decorators": [],
            "name": "d3",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 604,
                      "end": 607,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 621,
                              "end": 622,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 622,
                              "end": 630,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 624,
                                "end": 630
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 640,
                            "end": 650,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 640,
                              "end": 641,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 641,
                              "end": 649,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 643,
                                "end": 649
                              }
                            }
                          }
                        ]
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 712,
            "decorators": [],
            "name": "d2",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 675,
                      "end": 678,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 693,
                              "end": 694,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 694,
                              "end": 702,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 696,
                                "end": 702
                              }
                            }
                          }
                        ]
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 718,
            "end": 739,
            "decorators": [],
            "name": "n2",
            "optional": false,
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
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 744,
            "end": 767,
            "decorators": [],
            "name": "n4",
            "optional": false,
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
                      },
                      "typeParameters": null
                    }
                  ]
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 774,
            "end": 878,
            "decorators": [],
            "name": "d4",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 784,
                      "end": 787,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 788,
                        "end": 797,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 789,
                          "end": 797,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 791,
                            "end": 797
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 799,
                        "end": 827,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
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
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 804,
                                  "end": 805,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 805,
                                  "end": 813,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 807,
                                    "end": 813
                                  }
                                }
                              },
                              {
                                "type": "TSPropertySignature",
                                "start": 815,
                                "end": 825,
                                "accessibility": null,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 815,
                                  "end": 816,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 816,
                                  "end": 824,
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 818,
                                    "end": 824
                                  }
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 840,
                              "end": 841,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 841,
                              "end": 849,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 843,
                                "end": 849
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 859,
                            "end": 869,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 859,
                              "end": 860,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 860,
                              "end": 868,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 862,
                                "end": 868
                              }
                            }
                          }
                        ]
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 880,
      "end": 1296,
      "body": {
        "type": "TSModuleBlock",
        "start": 890,
        "end": 1296,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 897,
            "end": 930,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 904,
              "end": 930,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 908,
                  "end": 909,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 908,
                    "end": 909,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "start": 911,
                  "end": 926,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 911,
                    "end": 921,
                    "decorators": [],
                    "name": "b2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 913,
                      "end": 921,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 915,
                        "end": 921
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "start": 924,
                    "end": 926,
                    "raw": "10",
                    "value": 10
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "start": 928,
                  "end": 929,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 928,
                    "end": 929,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 939,
                  "end": 941,
                  "decorators": [],
                  "name": "m1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 951,
                  "end": 953,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 955,
                "end": 971,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 955,
                  "end": 966,
                  "decorators": [],
                  "name": "b22",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 958,
                    "end": 966,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 960,
                      "end": 966
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 969,
                  "end": 971,
                  "raw": "10",
                  "value": 10
                }
              },
              {
                "type": "VariableDeclarator",
                "start": 973,
                "end": 977,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 973,
                  "end": 977,
                  "decorators": [],
                  "name": "b222",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 987,
                  "end": 989,
                  "decorators": [],
                  "name": "m3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ClassDeclaration",
            "start": 996,
            "end": 1054,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1004,
              "end": 1054,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 1014,
                  "end": 1048,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 1014,
                    "end": 1025,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "constructor",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1026,
                    "end": 1048,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1037,
                      "end": 1048,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1002,
              "end": 1003,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1060,
            "end": 1126,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1067,
              "end": 1126,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 1076,
                "end": 1126,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1086,
                    "end": 1120,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1086,
                      "end": 1097,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1098,
                      "end": 1120,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1109,
                        "end": 1120,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
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
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1073,
                "end": 1075,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1135,
                  "end": 1136,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1154,
                  "end": 1156,
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 1158,
                "end": 1160,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1158,
                  "end": 1160,
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": true,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1170,
                  "end": 1173,
                  "decorators": [],
                  "name": "b23",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1191,
                  "end": 1193,
                  "decorators": [],
                  "name": "v1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": true,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1199,
            "end": 1213,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1206,
              "end": 1213,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1210,
                  "end": 1212,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1210,
                    "end": 1212,
                    "decorators": [],
                    "name": "mE",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1218,
            "end": 1246,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1225,
              "end": 1246,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1237,
                  "end": 1240,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1237,
                    "end": 1240,
                    "decorators": [],
                    "name": "d1E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "start": 1242,
                  "end": 1245,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1242,
                    "end": 1245,
                    "decorators": [],
                    "name": "d2E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": true,
              "kind": "var"
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1251,
            "end": 1266,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1258,
              "end": 1266,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1262,
                  "end": 1265,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1262,
                    "end": 1265,
                    "decorators": [],
                    "name": "b2E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1271,
            "end": 1294,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 1278,
              "end": 1294,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1290,
                  "end": 1293,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1290,
                    "end": 1293,
                    "decorators": [],
                    "name": "v1E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": true,
              "kind": "var"
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 887,
        "end": 889,
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1302,
            "end": 1305,
            "decorators": [],
            "name": "a22",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 1307,
          "end": 1315,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1307,
            "end": 1310,
            "decorators": [],
            "name": "b22",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1313,
            "end": 1315,
            "raw": "10",
            "value": 10
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 1317,
          "end": 1325,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1317,
            "end": 1320,
            "decorators": [],
            "name": "c22",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1323,
            "end": 1325,
            "raw": "30",
            "value": 30
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1331,
            "end": 1333,
            "decorators": [],
            "name": "nn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1348,
            "end": 1351,
            "decorators": [],
            "name": "da1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 1353,
          "end": 1356,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1353,
            "end": 1356,
            "decorators": [],
            "name": "da2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1362,
            "end": 1371,
            "decorators": [],
            "name": "normalVar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1385,
            "end": 1388,
            "decorators": [],
            "name": "dv1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1394,
            "end": 1396,
            "decorators": [],
            "name": "xl",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1402,
            "end": 1403,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1409,
            "end": 1410,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1413,
      "end": 1449,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1440,
                  "end": 1441,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1444,
                  "end": 1446,
                  "raw": "10",
                  "value": 10
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1422,
        "end": 1425,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1426,
          "end": 1428,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ForStatement",
      "start": 1451,
      "end": 1499,
      "body": {
        "type": "BlockStatement",
        "start": 1487,
        "end": 1499,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1493,
            "end": 1497,
            "directive": null,
            "expression": {
              "type": "UpdateExpression",
              "start": 1493,
              "end": 1496,
              "argument": {
                "type": "Identifier",
                "start": 1493,
                "end": 1494,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 1456,
        "end": 1472,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1460,
            "end": 1465,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1460,
              "end": 1461,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1464,
              "end": 1465,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 1467,
            "end": 1472,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1467,
              "end": 1468,
              "decorators": [],
              "name": "j",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1471,
              "end": 1472,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1474,
        "end": 1480,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1474,
          "end": 1475,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1478,
          "end": 1480,
          "raw": "10",
          "value": 10
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1482,
        "end": 1485,
        "argument": {
          "type": "Identifier",
          "start": 1482,
          "end": 1483,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
      }
    },
    {
      "type": "ForStatement",
      "start": 1502,
      "end": 1543,
      "body": {
        "type": "BlockStatement",
        "start": 1531,
        "end": 1543,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1537,
            "end": 1541,
            "directive": null,
            "expression": {
              "type": "UpdateExpression",
              "start": 1537,
              "end": 1540,
              "argument": {
                "type": "Identifier",
                "start": 1537,
                "end": 1538,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 1507,
        "end": 1516,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1511,
            "end": 1516,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1511,
              "end": 1512,
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1515,
              "end": 1516,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1518,
        "end": 1524,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1518,
          "end": 1519,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1522,
          "end": 1524,
          "raw": "30",
          "value": 30
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1526,
        "end": 1529,
        "argument": {
          "type": "Identifier",
          "start": 1526,
          "end": 1527,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": false
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1548,
            "end": 1549,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1552,
            "end": 1554,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
