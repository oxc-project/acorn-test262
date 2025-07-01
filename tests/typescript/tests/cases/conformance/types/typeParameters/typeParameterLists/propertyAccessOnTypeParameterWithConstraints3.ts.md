__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 91
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 101
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 105,
                  "end": 111
                },
                "start": 103,
                "end": 111
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 121,
                      "end": 123
                    },
                    "start": 114,
                    "end": 124
                  }
                ],
                "start": 112,
                "end": 126
              },
              "expression": false,
              "start": 101,
              "end": 126
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 98,
            "end": 126
          }
        ],
        "start": 92,
        "end": 128
      },
      "abstract": false,
      "declare": false,
      "start": 84,
      "end": 128
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
      },
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 157
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 161,
                  "end": 167
                },
                "start": 159,
                "end": 167
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 185,
                      "end": 187
                    },
                    "start": 178,
                    "end": 188
                  }
                ],
                "start": 168,
                "end": 194
              },
              "expression": false,
              "start": 157,
              "end": 194
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 154,
            "end": 194
          }
        ],
        "start": 148,
        "end": 196
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 196
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
        "start": 204,
        "end": 205
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "typeArguments": null,
              "start": 216,
              "end": 217
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 206,
            "end": 217
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "typeArguments": null,
              "start": 229,
              "end": 230
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 219,
            "end": 230
          }
        ],
        "start": 205,
        "end": 231
      },
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
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
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 259,
                                "end": 260
                              },
                              "typeArguments": null,
                              "start": 259,
                              "end": 260
                            },
                            "start": 257,
                            "end": 260
                          },
                          "start": 256,
                          "end": 260
                        },
                        "init": null,
                        "definite": false,
                        "start": 256,
                        "end": 260
                      }
                    ],
                    "declare": false,
                    "start": 252,
                    "end": 261
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 296,
                          "end": 297
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 300,
                              "end": 301
                            },
                            "property": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "'foo'",
                              "start": 302,
                              "end": 307
                            },
                            "optional": false,
                            "computed": true,
                            "start": 300,
                            "end": 308
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 300,
                          "end": 310
                        },
                        "definite": false,
                        "start": 296,
                        "end": 310
                      }
                    ],
                    "declare": false,
                    "start": 292,
                    "end": 311
                  },
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
                        "start": 347,
                        "end": 348
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 351,
                            "end": 352
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 353,
                            "end": 356
                          },
                          "optional": false,
                          "computed": false,
                          "start": 351,
                          "end": 356
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 351,
                        "end": 358
                      },
                      "start": 347,
                      "end": 358
                    },
                    "start": 340,
                    "end": 359
                  }
                ],
                "start": 242,
                "end": 365
              },
              "expression": false,
              "start": 239,
              "end": 365
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 238,
            "end": 365
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 371,
              "end": 372
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 377
                      },
                      "typeArguments": null,
                      "start": 376,
                      "end": 377
                    },
                    "start": 374,
                    "end": 377
                  },
                  "start": 373,
                  "end": 377
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
                          "start": 415,
                          "end": 416
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 419,
                              "end": 420
                            },
                            "property": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "'foo'",
                              "start": 421,
                              "end": 426
                            },
                            "optional": false,
                            "computed": true,
                            "start": 419,
                            "end": 427
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 419,
                          "end": 429
                        },
                        "definite": false,
                        "start": 415,
                        "end": 429
                      }
                    ],
                    "declare": false,
                    "start": 411,
                    "end": 430
                  },
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
                        "start": 466,
                        "end": 467
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 470,
                            "end": 471
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 472,
                            "end": 475
                          },
                          "optional": false,
                          "computed": false,
                          "start": 470,
                          "end": 475
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 470,
                        "end": 477
                      },
                      "start": 466,
                      "end": 477
                    },
                    "start": 459,
                    "end": 478
                  }
                ],
                "start": 379,
                "end": 484
              },
              "expression": false,
              "start": 372,
              "end": 484
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 371,
            "end": 484
          }
        ],
        "start": 232,
        "end": 486
      },
      "abstract": false,
      "declare": false,
      "start": 198,
      "end": 486
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
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 495
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 503,
                  "end": 504
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 506
                      },
                      "typeArguments": null,
                      "start": 505,
                      "end": 506
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 509
                      },
                      "typeArguments": null,
                      "start": 508,
                      "end": 509
                    }
                  ],
                  "start": 504,
                  "end": 510
                },
                "arguments": [],
                "start": 499,
                "end": 512
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 515
              },
              "optional": false,
              "computed": false,
              "start": 498,
              "end": 515
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 498,
            "end": 517
          },
          "definite": false,
          "start": 492,
          "end": 517
        }
      ],
      "declare": false,
      "start": 488,
      "end": 518
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 526
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 535
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 536,
                        "end": 537
                      },
                      "typeArguments": null,
                      "start": 536,
                      "end": 537
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 539,
                        "end": 540
                      },
                      "typeArguments": null,
                      "start": 539,
                      "end": 540
                    }
                  ],
                  "start": 535,
                  "end": 541
                },
                "arguments": [],
                "start": 530,
                "end": 543
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null,
                "start": 545,
                "end": 546
              },
              "optional": false,
              "computed": false,
              "start": 529,
              "end": 546
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 551,
                  "end": 552
                },
                "typeArguments": null,
                "arguments": [],
                "start": 547,
                "end": 554
              }
            ],
            "optional": false,
            "start": 529,
            "end": 555
          },
          "definite": false,
          "start": 523,
          "end": 555
        }
      ],
      "declare": false,
      "start": 519,
      "end": 556
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 568,
        "end": 569
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 571
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 581
              },
              "typeArguments": null,
              "start": 580,
              "end": 581
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 570,
            "end": 581
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 594
              },
              "typeArguments": null,
              "start": 593,
              "end": 594
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 583,
            "end": 594
          }
        ],
        "start": 569,
        "end": 595
      },
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
              "start": 602,
              "end": 605
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 607,
                  "end": 608
                },
                "typeArguments": null,
                "start": 607,
                "end": 608
              },
              "start": 605,
              "end": 608
            },
            "accessibility": null,
            "static": false,
            "start": 602,
            "end": 609
          }
        ],
        "start": 596,
        "end": 611
      },
      "declare": false,
      "start": 558,
      "end": 611
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 619,
                  "end": 620
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 621,
                        "end": 622
                      },
                      "typeArguments": null,
                      "start": 621,
                      "end": 622
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 624,
                        "end": 625
                      },
                      "typeArguments": null,
                      "start": 624,
                      "end": 625
                    }
                  ],
                  "start": 620,
                  "end": 626
                },
                "start": 619,
                "end": 626
              },
              "start": 617,
              "end": 626
            },
            "start": 616,
            "end": 626
          },
          "init": null,
          "definite": false,
          "start": 616,
          "end": 626
        }
      ],
      "declare": false,
      "start": 612,
      "end": 627
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 632,
            "end": 634
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 638
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 642
                },
                "optional": false,
                "computed": false,
                "start": 637,
                "end": 642
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 646
              },
              "optional": false,
              "computed": false,
              "start": 637,
              "end": 646
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 637,
            "end": 648
          },
          "definite": false,
          "start": 632,
          "end": 648
        }
      ],
      "declare": false,
      "start": 628,
      "end": 649
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 657
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 660,
                  "end": 661
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 665
                },
                "optional": false,
                "computed": false,
                "start": 660,
                "end": 665
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 666,
                "end": 671
              },
              "optional": false,
              "computed": true,
              "start": 660,
              "end": 672
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 660,
            "end": 674
          },
          "definite": false,
          "start": 654,
          "end": 674
        }
      ],
      "declare": false,
      "start": 650,
      "end": 675
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 691,
                            "end": 692
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 701,
                              "end": 702
                            },
                            "typeArguments": null,
                            "start": 701,
                            "end": 702
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 691,
                          "end": 702
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 704,
                            "end": 705
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 714,
                              "end": 715
                            },
                            "typeArguments": null,
                            "start": 714,
                            "end": 715
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 704,
                          "end": 715
                        }
                      ],
                      "start": 690,
                      "end": 716
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 720,
                          "end": 721
                        },
                        "typeArguments": null,
                        "start": 720,
                        "end": 721
                      },
                      "start": 718,
                      "end": 721
                    },
                    "start": 690,
                    "end": 722
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 728,
                            "end": 729
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 738,
                              "end": 739
                            },
                            "typeArguments": null,
                            "start": 738,
                            "end": 739
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 728,
                          "end": 739
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 741,
                            "end": 742
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 751,
                              "end": 752
                            },
                            "typeArguments": null,
                            "start": 751,
                            "end": 752
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 741,
                          "end": 752
                        }
                      ],
                      "start": 727,
                      "end": 753
                    },
                    "params": [
                      {
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 757,
                              "end": 758
                            },
                            "typeArguments": null,
                            "start": 757,
                            "end": 758
                          },
                          "start": 755,
                          "end": 758
                        },
                        "start": 754,
                        "end": 758
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 761,
                          "end": 762
                        },
                        "typeArguments": null,
                        "start": 761,
                        "end": 762
                      },
                      "start": 759,
                      "end": 762
                    },
                    "start": 727,
                    "end": 763
                  }
                ],
                "start": 684,
                "end": 765
              },
              "start": 682,
              "end": 765
            },
            "start": 681,
            "end": 765
          },
          "init": null,
          "definite": false,
          "start": 681,
          "end": 765
        }
      ],
      "declare": false,
      "start": 677,
      "end": 765
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 770,
            "end": 772
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 776
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 775,
                "end": 778
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 782
              },
              "optional": false,
              "computed": false,
              "start": 775,
              "end": 782
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 775,
            "end": 784
          },
          "definite": false,
          "start": 770,
          "end": 784
        }
      ],
      "declare": false,
      "start": 766,
      "end": 785
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 853,
            "end": 856
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 859,
                  "end": 860
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 859,
                "end": 862
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 863,
                "end": 868
              },
              "optional": false,
              "computed": true,
              "start": 859,
              "end": 869
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 859,
            "end": 871
          },
          "definite": false,
          "start": 853,
          "end": 871
        }
      ],
      "declare": false,
      "start": 849,
      "end": 872
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
            "name": "r3c",
            "optional": false,
            "typeAnnotation": null,
            "start": 933,
            "end": 936
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 939,
                  "end": 940
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 945,
                      "end": 946
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 941,
                    "end": 948
                  }
                ],
                "optional": false,
                "start": 939,
                "end": 949
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 950,
                "end": 953
              },
              "optional": false,
              "computed": false,
              "start": 939,
              "end": 953
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 939,
            "end": 955
          },
          "definite": false,
          "start": 933,
          "end": 955
        }
      ],
      "declare": false,
      "start": 929,
      "end": 956
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
            "name": "r3d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1035,
            "end": 1038
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1041,
                  "end": 1042
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1047,
                      "end": 1048
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1043,
                    "end": 1050
                  }
                ],
                "optional": false,
                "start": 1041,
                "end": 1051
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 1052,
                "end": 1057
              },
              "optional": false,
              "computed": true,
              "start": 1041,
              "end": 1058
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1041,
            "end": 1060
          },
          "definite": false,
          "start": 1035,
          "end": 1060
        }
      ],
      "declare": false,
      "start": 1031,
      "end": 1061
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
            "start": 1141,
            "end": 1142
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
                  "start": 1151,
                  "end": 1154
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1157,
                          "end": 1158
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1167,
                            "end": 1168
                          },
                          "typeArguments": null,
                          "start": 1167,
                          "end": 1168
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1157,
                        "end": 1168
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1170,
                          "end": 1171
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1180,
                            "end": 1181
                          },
                          "typeArguments": null,
                          "start": 1180,
                          "end": 1181
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1170,
                        "end": 1181
                      }
                    ],
                    "start": 1156,
                    "end": 1182
                  },
                  "params": [
                    {
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1186,
                            "end": 1187
                          },
                          "typeArguments": null,
                          "start": 1186,
                          "end": 1187
                        },
                        "start": 1184,
                        "end": 1187
                      },
                      "start": 1183,
                      "end": 1187
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
                              "start": 1228,
                              "end": 1229
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1232,
                                  "end": 1233
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "'foo'",
                                  "start": 1234,
                                  "end": 1239
                                },
                                "optional": false,
                                "computed": true,
                                "start": 1232,
                                "end": 1240
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1232,
                              "end": 1242
                            },
                            "definite": false,
                            "start": 1228,
                            "end": 1242
                          }
                        ],
                        "declare": false,
                        "start": 1224,
                        "end": 1243
                      },
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
                            "start": 1279,
                            "end": 1280
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1283,
                                "end": 1284
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1285,
                                "end": 1288
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1283,
                              "end": 1288
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1283,
                            "end": 1290
                          },
                          "start": 1279,
                          "end": 1290
                        },
                        "start": 1272,
                        "end": 1291
                      }
                    ],
                    "start": 1192,
                    "end": 1297
                  },
                  "id": null,
                  "generator": false,
                  "start": 1156,
                  "end": 1297
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1151,
                "end": 1297
              }
            ],
            "start": 1145,
            "end": 1299
          },
          "definite": false,
          "start": 1141,
          "end": 1299
        }
      ],
      "declare": false,
      "start": 1137,
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 1305,
            "end": 1307
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1310,
                "end": 1311
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1312,
                "end": 1315
              },
              "optional": false,
              "computed": false,
              "start": 1310,
              "end": 1315
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1320,
                  "end": 1321
                },
                "typeArguments": null,
                "arguments": [],
                "start": 1316,
                "end": 1323
              }
            ],
            "optional": false,
            "start": 1310,
            "end": 1324
          },
          "definite": false,
          "start": 1305,
          "end": 1324
        }
      ],
      "declare": false,
      "start": 1301,
      "end": 1325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 84,
  "end": 1362
}
```
