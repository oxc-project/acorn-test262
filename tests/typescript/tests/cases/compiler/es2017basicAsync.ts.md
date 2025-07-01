__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": false,
        "async": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 17
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSVoidKeyword",
                  "start": 18,
                  "end": 22
                }
              ],
              "start": 17,
              "end": 23
            },
            "start": 10,
            "end": 23
          },
          "start": 8,
          "end": 23
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 39,
                  "end": 40
                },
                "start": 33,
                "end": 40
              },
              "directive": null,
              "start": 33,
              "end": 41
            }
          ],
          "start": 27,
          "end": 43
        },
        "id": null,
        "generator": false,
        "start": 0,
        "end": 43
      },
      "directive": null,
      "start": 0,
      "end": 43
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncFunc",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 69
      },
      "generator": false,
      "async": true,
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
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 84,
                "end": 85
              },
              "start": 78,
              "end": 85
            },
            "directive": null,
            "start": 78,
            "end": 86
          }
        ],
        "start": 72,
        "end": 88
      },
      "expression": false,
      "start": 45,
      "end": 88
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "asyncArrowFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 110
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 130
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSVoidKeyword",
                      "start": 131,
                      "end": 135
                    }
                  ],
                  "start": 130,
                  "end": 136
                },
                "start": 123,
                "end": 136
              },
              "start": 121,
              "end": 136
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 152,
                      "end": 153
                    },
                    "start": 146,
                    "end": 153
                  },
                  "directive": null,
                  "start": 146,
                  "end": 154
                }
              ],
              "start": 140,
              "end": 156
            },
            "id": null,
            "generator": false,
            "start": 113,
            "end": 156
          },
          "definite": false,
          "start": 96,
          "end": 156
        }
      ],
      "declare": false,
      "start": 90,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncIIFE",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 182
      },
      "generator": false,
      "async": true,
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
              "type": "AwaitExpression",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 197,
                "end": 198
              },
              "start": 191,
              "end": 198
            },
            "directive": null,
            "start": 191,
            "end": 199
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 237
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 238,
                            "end": 242
                          }
                        ],
                        "start": 237,
                        "end": 243
                      },
                      "start": 230,
                      "end": 243
                    },
                    "start": 228,
                    "end": 243
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 260,
                            "end": 261
                          },
                          "start": 254,
                          "end": 261
                        },
                        "directive": null,
                        "start": 254,
                        "end": 262
                      }
                    ],
                    "start": 244,
                    "end": 268
                  },
                  "expression": false,
                  "start": 212,
                  "end": 268
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 211,
                "end": 271
              },
              "start": 205,
              "end": 271
            },
            "directive": null,
            "start": 205,
            "end": 272
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncNamedFunc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 318
                  },
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 329
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 330,
                            "end": 334
                          }
                        ],
                        "start": 329,
                        "end": 335
                      },
                      "start": 322,
                      "end": 335
                    },
                    "start": 320,
                    "end": 335
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 352,
                            "end": 353
                          },
                          "start": 346,
                          "end": 353
                        },
                        "directive": null,
                        "start": 346,
                        "end": 354
                      }
                    ],
                    "start": 336,
                    "end": 360
                  },
                  "expression": false,
                  "start": 289,
                  "end": 360
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 288,
                "end": 363
              },
              "start": 282,
              "end": 363
            },
            "directive": null,
            "start": 282,
            "end": 364
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 391,
                        "end": 398
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 399,
                            "end": 403
                          }
                        ],
                        "start": 398,
                        "end": 404
                      },
                      "start": 391,
                      "end": 404
                    },
                    "start": 389,
                    "end": 404
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 424,
                            "end": 425
                          },
                          "start": 418,
                          "end": 425
                        },
                        "directive": null,
                        "start": 418,
                        "end": 426
                      }
                    ],
                    "start": 408,
                    "end": 432
                  },
                  "id": null,
                  "generator": false,
                  "start": 381,
                  "end": 432
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 380,
                "end": 435
              },
              "start": 374,
              "end": 435
            },
            "directive": null,
            "start": 374,
            "end": 436
          }
        ],
        "start": 185,
        "end": 438
      },
      "expression": false,
      "start": 158,
      "end": 438
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 456
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
              "name": "asyncPropFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 476
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 504
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 505,
                        "end": 509
                      }
                    ],
                    "start": 504,
                    "end": 510
                  },
                  "start": 497,
                  "end": 510
                },
                "start": 495,
                "end": 510
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 527,
                        "end": 528
                      },
                      "start": 521,
                      "end": 528
                    },
                    "directive": null,
                    "start": 521,
                    "end": 529
                  }
                ],
                "start": 511,
                "end": 535
              },
              "expression": false,
              "start": 479,
              "end": 535
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 463,
            "end": 535
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncPropNamedFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 545,
              "end": 563
            },
            "typeAnnotation": null,
            "value": {
              "type": "FunctionExpression",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "namedFunc",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 590
              },
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 594,
                    "end": 601
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 602,
                        "end": 606
                      }
                    ],
                    "start": 601,
                    "end": 607
                  },
                  "start": 594,
                  "end": 607
                },
                "start": 592,
                "end": 607
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 624,
                        "end": 625
                      },
                      "start": 618,
                      "end": 625
                    },
                    "directive": null,
                    "start": 618,
                    "end": 626
                  }
                ],
                "start": 608,
                "end": 632
              },
              "expression": false,
              "start": 566,
              "end": 632
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 545,
            "end": 632
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncPropArrowFunc",
              "optional": false,
              "typeAnnotation": null,
              "start": 638,
              "end": 656
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 669,
                    "end": 676
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 677,
                        "end": 681
                      }
                    ],
                    "start": 676,
                    "end": 682
                  },
                  "start": 669,
                  "end": 682
                },
                "start": 667,
                "end": 682
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 702,
                        "end": 703
                      },
                      "start": 696,
                      "end": 703
                    },
                    "directive": null,
                    "start": 696,
                    "end": 704
                  }
                ],
                "start": 686,
                "end": 710
              },
              "id": null,
              "generator": false,
              "start": 659,
              "end": 710
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 638,
            "end": 710
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "asyncMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 733
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 737,
                    "end": 744
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSVoidKeyword",
                        "start": 745,
                        "end": 749
                      }
                    ],
                    "start": 744,
                    "end": 750
                  },
                  "start": 737,
                  "end": 750
                },
                "start": 735,
                "end": 750
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 767,
                        "end": 768
                      },
                      "start": 761,
                      "end": 768
                    },
                    "directive": null,
                    "start": 761,
                    "end": 769
                  }
                ],
                "start": 751,
                "end": 775
              },
              "expression": false,
              "start": 733,
              "end": 775
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 716,
            "end": 775
          }
        ],
        "start": 457,
        "end": 777
      },
      "abstract": false,
      "declare": false,
      "start": 440,
      "end": 777
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 777
}
```
