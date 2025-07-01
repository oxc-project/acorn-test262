__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 24
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 25,
                      "end": 31
                    }
                  ],
                  "start": 24,
                  "end": 32
                },
                "start": 17,
                "end": 32
              },
              "start": 15,
              "end": 32
            },
            "start": 14,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 32
        }
      ],
      "declare": true,
      "start": 0,
      "end": 32
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 51,
                    "end": 55
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 58,
                      "end": 65
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 66,
                          "end": 72
                        }
                      ],
                      "start": 65,
                      "end": 73
                    },
                    "start": 58,
                    "end": 73
                  }
                ],
                "start": 51,
                "end": 73
              },
              "start": 49,
              "end": 73
            },
            "start": 47,
            "end": 73
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 73
        }
      ],
      "declare": true,
      "start": 33,
      "end": 73
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
            "name": "obj",
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 95,
                      "end": 96
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 105
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSUnknownKeyword",
                              "start": 106,
                              "end": 113
                            }
                          ],
                          "start": 105,
                          "end": 114
                        },
                        "start": 98,
                        "end": 114
                      },
                      "start": 96,
                      "end": 114
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 95,
                    "end": 114
                  }
                ],
                "start": 93,
                "end": 116
              },
              "start": 91,
              "end": 116
            },
            "start": 88,
            "end": 116
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 116
        }
      ],
      "declare": true,
      "start": 74,
      "end": 116
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pf",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 136
      },
      "generator": false,
      "async": false,
      "declare": true,
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
            "start": 140,
            "end": 147
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSBooleanKeyword",
                "start": 148,
                "end": 155
              }
            ],
            "start": 147,
            "end": 156
          },
          "start": 140,
          "end": 156
        },
        "start": 138,
        "end": 156
      },
      "body": null,
      "expression": false,
      "start": 117,
      "end": 156
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 174
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
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 190,
              "end": 192
            },
            "alternate": null,
            "start": 183,
            "end": 192
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 211
                },
                "prefix": true,
                "start": 209,
                "end": 211
              },
              "prefix": true,
              "start": 208,
              "end": 211
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 213,
              "end": 215
            },
            "alternate": null,
            "start": 204,
            "end": 215
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 234,
              "end": 236
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 238,
              "end": 240
            },
            "alternate": null,
            "start": 230,
            "end": 240
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 261
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 271
                },
                "optional": false,
                "computed": false,
                "start": 260,
                "end": 271
              },
              "alternate": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 275
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 285
                },
                "optional": false,
                "computed": false,
                "start": 274,
                "end": 285
              },
              "start": 256,
              "end": 285
            },
            "directive": null,
            "start": 256,
            "end": 286
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 293,
                    "end": 294
                  },
                  "prefix": true,
                  "start": 292,
                  "end": 294
                },
                "prefix": true,
                "start": 291,
                "end": 294
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 298
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 308
                },
                "optional": false,
                "computed": false,
                "start": 297,
                "end": 308
              },
              "alternate": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 312
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 322
                },
                "optional": false,
                "computed": false,
                "start": 311,
                "end": 322
              },
              "start": 291,
              "end": 322
            },
            "directive": null,
            "start": 291,
            "end": 323
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 330
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 334
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 344
                },
                "optional": false,
                "computed": false,
                "start": 333,
                "end": 344
              },
              "alternate": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 347,
                  "end": 348
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 358
                },
                "optional": false,
                "computed": false,
                "start": 347,
                "end": 358
              },
              "start": 328,
              "end": 358
            },
            "directive": null,
            "start": 328,
            "end": 359
          }
        ],
        "start": 177,
        "end": 361
      },
      "expression": false,
      "start": 158,
      "end": 361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 389
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
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 402,
              "end": 403
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 415,
                    "end": 416
                  },
                  "directive": null,
                  "start": 415,
                  "end": 417
                }
              ],
              "start": 405,
              "end": 423
            },
            "alternate": null,
            "start": 398,
            "end": 423
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 433
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 437,
                    "end": 438
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 443
                  },
                  "optional": false,
                  "computed": false,
                  "start": 437,
                  "end": 443
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 450
                },
                "optional": false,
                "computed": false,
                "start": 437,
                "end": 450
              },
              "start": 432,
              "end": 450
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 452,
              "end": 454
            },
            "alternate": null,
            "start": 428,
            "end": 454
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 463,
              "end": 464
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 481
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 501,
                          "end": 502
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "UnaryExpression",
                                "operator": "!",
                                "argument": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "AwaitExpression",
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 537,
                                      "end": 538
                                    },
                                    "start": 524,
                                    "end": 545
                                  },
                                  "prefix": true,
                                  "start": 523,
                                  "end": 545
                                },
                                "prefix": true,
                                "start": 522,
                                "end": 545
                              },
                              "directive": null,
                              "start": 522,
                              "end": 546
                            }
                          ],
                          "start": 504,
                          "end": 560
                        },
                        "alternate": null,
                        "start": 497,
                        "end": 560
                      }
                    ],
                    "start": 483,
                    "end": 570
                  },
                  "alternate": null,
                  "start": 476,
                  "end": 570
                }
              ],
              "start": 466,
              "end": 576
            },
            "alternate": null,
            "start": 459,
            "end": 576
          }
        ],
        "start": 392,
        "end": 578
      },
      "expression": false,
      "start": 373,
      "end": 578
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 596
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
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 612
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 614
              },
              "optional": false,
              "computed": false,
              "start": 609,
              "end": 614
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 616,
              "end": 618
            },
            "alternate": null,
            "start": 605,
            "end": 618
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 636,
                "end": 639
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 640,
                "end": 641
              },
              "optional": false,
              "computed": false,
              "start": 636,
              "end": 641
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 666,
                        "end": 669
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 670,
                        "end": 671
                      },
                      "optional": false,
                      "computed": false,
                      "start": 666,
                      "end": 671
                    },
                    "start": 660,
                    "end": 671
                  },
                  "directive": null,
                  "start": 660,
                  "end": 672
                }
              ],
              "start": 643,
              "end": 678
            },
            "alternate": null,
            "start": 632,
            "end": 678
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 687,
                  "end": 690
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 691,
                  "end": 692
                },
                "optional": false,
                "computed": false,
                "start": 687,
                "end": 692
              },
              "operator": "&&",
              "right": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 702,
                    "end": 705
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 706,
                    "end": 707
                  },
                  "optional": false,
                  "computed": false,
                  "start": 702,
                  "end": 707
                },
                "start": 696,
                "end": 707
              },
              "start": 687,
              "end": 707
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [],
              "start": 709,
              "end": 711
            },
            "alternate": null,
            "start": 683,
            "end": 711
          }
        ],
        "start": 599,
        "end": 719
      },
      "expression": false,
      "start": 580,
      "end": 719
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 736,
        "end": 737
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
            "start": 741,
            "end": 748
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 749,
                "end": 755
              }
            ],
            "start": 748,
            "end": 756
          },
          "start": 741,
          "end": 756
        },
        "start": 739,
        "end": 756
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "pf",
                "optional": false,
                "typeAnnotation": null,
                "start": 767,
                "end": 769
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 767,
              "end": 771
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": "true",
                    "raw": "\"true\"",
                    "start": 799,
                    "end": 805
                  },
                  "start": 792,
                  "end": 806
                }
              ],
              "start": 773,
              "end": 812
            },
            "alternate": null,
            "start": 763,
            "end": 812
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "pf",
                "optional": false,
                "typeAnnotation": null,
                "start": 821,
                "end": 823
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 821,
              "end": 825
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 846,
                          "end": 848
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 846,
                        "end": 850
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 851,
                        "end": 855
                      },
                      "optional": false,
                      "computed": false,
                      "start": 846,
                      "end": 855
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 846,
                    "end": 857
                  },
                  "directive": null,
                  "start": 846,
                  "end": 858
                }
              ],
              "start": 827,
              "end": 864
            },
            "alternate": null,
            "start": 817,
            "end": 864
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "false",
              "raw": "\"false\"",
              "start": 876,
              "end": 883
            },
            "start": 869,
            "end": 884
          }
        ],
        "start": 757,
        "end": 886
      },
      "expression": false,
      "start": 721,
      "end": 886
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 886
}
```
