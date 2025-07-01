__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 115
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 125
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 127,
                  "end": 128
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 124,
                "end": 128
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 135
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 155,
                            "end": 159
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 160,
                            "end": 161
                          },
                          "optional": false,
                          "computed": false,
                          "start": 155,
                          "end": 161
                        },
                        "start": 148,
                        "end": 162
                      }
                    ],
                    "start": 138,
                    "end": 168
                  },
                  "expression": false,
                  "start": 135,
                  "end": 168
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 134,
                "end": 168
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 175
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 177,
                  "end": 184
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 174,
                "end": 184
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 191
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 204
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
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 221,
                                    "end": 225
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "g",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 226,
                                    "end": 227
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 221,
                                  "end": 227
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 221,
                                "end": 229
                              },
                              "directive": null,
                              "start": 221,
                              "end": 230
                            }
                          ],
                          "start": 207,
                          "end": 240
                        },
                        "expression": false,
                        "start": 204,
                        "end": 240
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 203,
                      "end": 240
                    }
                  ],
                  "start": 193,
                  "end": 246
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 190,
                "end": 246
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 257
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 277,
                            "end": 281
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 282,
                            "end": 283
                          },
                          "optional": false,
                          "computed": false,
                          "start": 277,
                          "end": 283
                        },
                        "start": 270,
                        "end": 284
                      }
                    ],
                    "start": 260,
                    "end": 290
                  },
                  "expression": false,
                  "start": 257,
                  "end": 290
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 252,
                "end": 290
              },
              {
                "type": "Property",
                "kind": "get",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 301
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 321,
                            "end": 325
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 326,
                            "end": 327
                          },
                          "optional": false,
                          "computed": false,
                          "start": 321,
                          "end": 327
                        },
                        "start": 314,
                        "end": 328
                      }
                    ],
                    "start": 304,
                    "end": 334
                  },
                  "expression": false,
                  "start": 301,
                  "end": 334
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 296,
                "end": 334
              },
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 345
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 346,
                      "end": 351
                    }
                  ],
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
                              "start": 363,
                              "end": 367
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 368,
                              "end": 369
                            },
                            "optional": false,
                            "computed": false,
                            "start": 363,
                            "end": 369
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 372,
                            "end": 377
                          },
                          "start": 363,
                          "end": 377
                        },
                        "directive": null,
                        "start": 363,
                        "end": 378
                      }
                    ],
                    "start": 353,
                    "end": 384
                  },
                  "expression": false,
                  "start": 345,
                  "end": 384
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 340,
                "end": 384
              }
            ],
            "start": 118,
            "end": 386
          },
          "definite": false,
          "start": 111,
          "end": 386
        }
      ],
      "declare": false,
      "start": 107,
      "end": 387
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 489,
        "end": 494
      },
      "typeParameters": null,
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
              "start": 503,
              "end": 504
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 506,
                "end": 512
              },
              "start": 504,
              "end": 512
            },
            "accessibility": null,
            "static": false,
            "start": 503,
            "end": 513
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
              "start": 518,
              "end": 519
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 521,
                "end": 527
              },
              "start": 519,
              "end": 527
            },
            "accessibility": null,
            "static": false,
            "start": 518,
            "end": 528
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 534
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 537,
                "end": 543
              },
              "start": 535,
              "end": 543
            },
            "accessibility": null,
            "static": false,
            "start": 533,
            "end": 544
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "moveBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 549,
              "end": 555
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 560,
                    "end": 566
                  },
                  "start": 558,
                  "end": 566
                },
                "start": 556,
                "end": 566
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
                    "start": 572,
                    "end": 578
                  },
                  "start": 570,
                  "end": 578
                },
                "start": 568,
                "end": 578
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "dz",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 585,
                    "end": 591
                  },
                  "start": 583,
                  "end": 591
                },
                "start": 580,
                "end": 591
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 594,
                "end": 598
              },
              "start": 592,
              "end": 598
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 549,
            "end": 599
          }
        ],
        "start": 497,
        "end": 601
      },
      "declare": false,
      "start": 484,
      "end": 601
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p1",
            "optional": false,
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
                  "start": 611,
                  "end": 616
                },
                "typeArguments": null,
                "start": 611,
                "end": 616
              },
              "start": 609,
              "end": 616
            },
            "start": 607,
            "end": 616
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
                  "start": 625,
                  "end": 626
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 628,
                  "end": 630
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 625,
                "end": 630
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
                  "start": 636,
                  "end": 637
                },
                "value": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 639,
                  "end": 641
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 636,
                "end": 641
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 647,
                  "end": 653
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
                      "start": 654,
                      "end": 656
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 658,
                      "end": 660
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 662,
                      "end": 664
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 676,
                              "end": 680
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 681,
                              "end": 682
                            },
                            "optional": false,
                            "computed": false,
                            "start": 676,
                            "end": 682
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 686,
                            "end": 688
                          },
                          "start": 676,
                          "end": 688
                        },
                        "directive": null,
                        "start": 676,
                        "end": 689
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 698,
                              "end": 702
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 703,
                              "end": 704
                            },
                            "optional": false,
                            "computed": false,
                            "start": 698,
                            "end": 704
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 708,
                            "end": 710
                          },
                          "start": 698,
                          "end": 710
                        },
                        "directive": null,
                        "start": 698,
                        "end": 711
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 724,
                              "end": 728
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 729,
                              "end": 730
                            },
                            "optional": false,
                            "computed": false,
                            "start": 724,
                            "end": 730
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 734,
                            "end": 736
                          },
                          "start": 724,
                          "end": 736
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 752,
                                    "end": 756
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 757,
                                    "end": 758
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 752,
                                  "end": 758
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 762,
                                  "end": 764
                                },
                                "start": 752,
                                "end": 764
                              },
                              "directive": null,
                              "start": 752,
                              "end": 765
                            }
                          ],
                          "start": 738,
                          "end": 775
                        },
                        "alternate": null,
                        "start": 720,
                        "end": 775
                      }
                    ],
                    "start": 666,
                    "end": 781
                  },
                  "expression": false,
                  "start": 653,
                  "end": 781
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 647,
                "end": 781
              }
            ],
            "start": 619,
            "end": 783
          },
          "definite": false,
          "start": 607,
          "end": 783
        }
      ],
      "declare": false,
      "start": 603,
      "end": 784
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 794,
                      "end": 799
                    },
                    "typeArguments": null,
                    "start": 794,
                    "end": 799
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 802,
                    "end": 806
                  }
                ],
                "start": 794,
                "end": 806
              },
              "start": 792,
              "end": 806
            },
            "start": 790,
            "end": 806
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
                  "start": 815,
                  "end": 816
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 818,
                  "end": 820
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 815,
                "end": 820
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
                  "start": 826,
                  "end": 827
                },
                "value": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 829,
                  "end": 831
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 826,
                "end": 831
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 843
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
                      "start": 844,
                      "end": 846
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 848,
                      "end": 850
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 852,
                      "end": 854
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 866,
                              "end": 870
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 871,
                              "end": 872
                            },
                            "optional": false,
                            "computed": false,
                            "start": 866,
                            "end": 872
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 876,
                            "end": 878
                          },
                          "start": 866,
                          "end": 878
                        },
                        "directive": null,
                        "start": 866,
                        "end": 879
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 888,
                              "end": 892
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 893,
                              "end": 894
                            },
                            "optional": false,
                            "computed": false,
                            "start": 888,
                            "end": 894
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 898,
                            "end": 900
                          },
                          "start": 888,
                          "end": 900
                        },
                        "directive": null,
                        "start": 888,
                        "end": 901
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 914,
                              "end": 918
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 919,
                              "end": 920
                            },
                            "optional": false,
                            "computed": false,
                            "start": 914,
                            "end": 920
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 924,
                            "end": 926
                          },
                          "start": 914,
                          "end": 926
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 942,
                                    "end": 946
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 947,
                                    "end": 948
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 942,
                                  "end": 948
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 952,
                                  "end": 954
                                },
                                "start": 942,
                                "end": 954
                              },
                              "directive": null,
                              "start": 942,
                              "end": 955
                            }
                          ],
                          "start": 928,
                          "end": 965
                        },
                        "alternate": null,
                        "start": 910,
                        "end": 965
                      }
                    ],
                    "start": 856,
                    "end": 971
                  },
                  "expression": false,
                  "start": 843,
                  "end": 971
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 837,
                "end": 971
              }
            ],
            "start": 809,
            "end": 973
          },
          "definite": false,
          "start": 790,
          "end": 973
        }
      ],
      "declare": false,
      "start": 786,
      "end": 974
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 984,
                      "end": 989
                    },
                    "typeArguments": null,
                    "start": 984,
                    "end": 989
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 992,
                    "end": 1001
                  }
                ],
                "start": 984,
                "end": 1001
              },
              "start": 982,
              "end": 1001
            },
            "start": 980,
            "end": 1001
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
                  "start": 1010,
                  "end": 1011
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1013,
                  "end": 1015
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1010,
                "end": 1015
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
                  "start": 1021,
                  "end": 1022
                },
                "value": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 1024,
                  "end": 1026
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1021,
                "end": 1026
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1032,
                  "end": 1038
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
                      "start": 1039,
                      "end": 1041
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1043,
                      "end": 1045
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1047,
                      "end": 1049
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1061,
                              "end": 1065
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1066,
                              "end": 1067
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1061,
                            "end": 1067
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1071,
                            "end": 1073
                          },
                          "start": 1061,
                          "end": 1073
                        },
                        "directive": null,
                        "start": 1061,
                        "end": 1074
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1083,
                              "end": 1087
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1088,
                              "end": 1089
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1083,
                            "end": 1089
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1093,
                            "end": 1095
                          },
                          "start": 1083,
                          "end": 1095
                        },
                        "directive": null,
                        "start": 1083,
                        "end": 1096
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1109,
                              "end": 1113
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1114,
                              "end": 1115
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1109,
                            "end": 1115
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1119,
                            "end": 1121
                          },
                          "start": 1109,
                          "end": 1121
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1137,
                                    "end": 1141
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1142,
                                    "end": 1143
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1137,
                                  "end": 1143
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1147,
                                  "end": 1149
                                },
                                "start": 1137,
                                "end": 1149
                              },
                              "directive": null,
                              "start": 1137,
                              "end": 1150
                            }
                          ],
                          "start": 1123,
                          "end": 1160
                        },
                        "alternate": null,
                        "start": 1105,
                        "end": 1160
                      }
                    ],
                    "start": 1051,
                    "end": 1166
                  },
                  "expression": false,
                  "start": 1038,
                  "end": 1166
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1032,
                "end": 1166
              }
            ],
            "start": 1004,
            "end": 1168
          },
          "definite": false,
          "start": 980,
          "end": 1168
        }
      ],
      "declare": false,
      "start": 976,
      "end": 1169
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1179,
                      "end": 1184
                    },
                    "typeArguments": null,
                    "start": 1179,
                    "end": 1184
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 1187,
                    "end": 1191
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1194,
                    "end": 1203
                  }
                ],
                "start": 1179,
                "end": 1203
              },
              "start": 1177,
              "end": 1203
            },
            "start": 1175,
            "end": 1203
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
                  "start": 1212,
                  "end": 1213
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1215,
                  "end": 1217
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1212,
                "end": 1217
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
                  "start": 1223,
                  "end": 1224
                },
                "value": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 1226,
                  "end": 1228
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1223,
                "end": 1228
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1234,
                  "end": 1240
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
                      "start": 1241,
                      "end": 1243
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1245,
                      "end": 1247
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1249,
                      "end": 1251
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1263,
                              "end": 1267
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1268,
                              "end": 1269
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1263,
                            "end": 1269
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1273,
                            "end": 1275
                          },
                          "start": 1263,
                          "end": 1275
                        },
                        "directive": null,
                        "start": 1263,
                        "end": 1276
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1285,
                              "end": 1289
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1290,
                              "end": 1291
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1285,
                            "end": 1291
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1295,
                            "end": 1297
                          },
                          "start": 1285,
                          "end": 1297
                        },
                        "directive": null,
                        "start": 1285,
                        "end": 1298
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1311,
                              "end": 1315
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1316,
                              "end": 1317
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1311,
                            "end": 1317
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1321,
                            "end": 1323
                          },
                          "start": 1311,
                          "end": 1323
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1339,
                                    "end": 1343
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1344,
                                    "end": 1345
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1339,
                                  "end": 1345
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1349,
                                  "end": 1351
                                },
                                "start": 1339,
                                "end": 1351
                              },
                              "directive": null,
                              "start": 1339,
                              "end": 1352
                            }
                          ],
                          "start": 1325,
                          "end": 1362
                        },
                        "alternate": null,
                        "start": 1307,
                        "end": 1362
                      }
                    ],
                    "start": 1253,
                    "end": 1368
                  },
                  "expression": false,
                  "start": 1240,
                  "end": 1368
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1234,
                "end": 1368
              }
            ],
            "start": 1206,
            "end": 1370
          },
          "definite": false,
          "start": 1175,
          "end": 1370
        }
      ],
      "declare": false,
      "start": 1171,
      "end": 1371
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1390,
        "end": 1392
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
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
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 1396,
                "end": 1401
              },
              "typeArguments": null,
              "start": 1396,
              "end": 1401
            },
            "start": 1394,
            "end": 1401
          },
          "start": 1393,
          "end": 1401
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1404,
          "end": 1408
        },
        "start": 1402,
        "end": 1408
      },
      "body": null,
      "expression": false,
      "start": 1373,
      "end": 1409
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1411,
          "end": 1413
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
                  "start": 1420,
                  "end": 1421
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1423,
                  "end": 1425
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1420,
                "end": 1425
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
                  "start": 1431,
                  "end": 1432
                },
                "value": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 1434,
                  "end": 1436
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1431,
                "end": 1436
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1442,
                  "end": 1448
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
                      "start": 1449,
                      "end": 1451
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1455
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1457,
                      "end": 1459
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1471,
                              "end": 1475
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1476,
                              "end": 1477
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1471,
                            "end": 1477
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1481,
                            "end": 1483
                          },
                          "start": 1471,
                          "end": 1483
                        },
                        "directive": null,
                        "start": 1471,
                        "end": 1484
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1493,
                              "end": 1497
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1498,
                              "end": 1499
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1493,
                            "end": 1499
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1503,
                            "end": 1505
                          },
                          "start": 1493,
                          "end": 1505
                        },
                        "directive": null,
                        "start": 1493,
                        "end": 1506
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1519,
                              "end": 1523
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1524,
                              "end": 1525
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1519,
                            "end": 1525
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1529,
                            "end": 1531
                          },
                          "start": 1519,
                          "end": 1531
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1547,
                                    "end": 1551
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1552,
                                    "end": 1553
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1547,
                                  "end": 1553
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1557,
                                  "end": 1559
                                },
                                "start": 1547,
                                "end": 1559
                              },
                              "directive": null,
                              "start": 1547,
                              "end": 1560
                            }
                          ],
                          "start": 1533,
                          "end": 1570
                        },
                        "alternate": null,
                        "start": 1515,
                        "end": 1570
                      }
                    ],
                    "start": 1461,
                    "end": 1576
                  },
                  "expression": false,
                  "start": 1448,
                  "end": 1576
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1442,
                "end": 1576
              }
            ],
            "start": 1414,
            "end": 1578
          }
        ],
        "optional": false,
        "start": 1411,
        "end": 1579
      },
      "directive": null,
      "start": 1411,
      "end": 1580
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1599,
        "end": 1601
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1605,
                    "end": 1610
                  },
                  "typeArguments": null,
                  "start": 1605,
                  "end": 1610
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1613,
                  "end": 1617
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1620,
                  "end": 1629
                }
              ],
              "start": 1605,
              "end": 1629
            },
            "start": 1603,
            "end": 1629
          },
          "start": 1602,
          "end": 1629
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1632,
          "end": 1636
        },
        "start": 1630,
        "end": 1636
      },
      "body": null,
      "expression": false,
      "start": 1582,
      "end": 1637
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1639,
          "end": 1641
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
                  "start": 1648,
                  "end": 1649
                },
                "value": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 1651,
                  "end": 1653
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1648,
                "end": 1653
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
                  "start": 1659,
                  "end": 1660
                },
                "value": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 1662,
                  "end": 1664
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1659,
                "end": 1664
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "moveBy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1670,
                  "end": 1676
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
                      "start": 1677,
                      "end": 1679
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1681,
                      "end": 1683
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1685,
                      "end": 1687
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1699,
                              "end": 1703
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1704,
                              "end": 1705
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1699,
                            "end": 1705
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dx",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1709,
                            "end": 1711
                          },
                          "start": 1699,
                          "end": 1711
                        },
                        "directive": null,
                        "start": 1699,
                        "end": 1712
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1721,
                              "end": 1725
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1726,
                              "end": 1727
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1721,
                            "end": 1727
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1731,
                            "end": 1733
                          },
                          "start": 1721,
                          "end": 1733
                        },
                        "directive": null,
                        "start": 1721,
                        "end": 1734
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 1747,
                              "end": 1751
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1752,
                              "end": 1753
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1747,
                            "end": 1753
                          },
                          "operator": "&&",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1757,
                            "end": 1759
                          },
                          "start": 1747,
                          "end": 1759
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "+=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1775,
                                    "end": 1779
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1780,
                                    "end": 1781
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1775,
                                  "end": 1781
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "dz",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1785,
                                  "end": 1787
                                },
                                "start": 1775,
                                "end": 1787
                              },
                              "directive": null,
                              "start": 1775,
                              "end": 1788
                            }
                          ],
                          "start": 1761,
                          "end": 1798
                        },
                        "alternate": null,
                        "start": 1743,
                        "end": 1798
                      }
                    ],
                    "start": 1689,
                    "end": 1804
                  },
                  "expression": false,
                  "start": 1676,
                  "end": 1804
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1670,
                "end": 1804
              }
            ],
            "start": 1642,
            "end": 1806
          }
        ],
        "optional": false,
        "start": 1639,
        "end": 1807
      },
      "directive": null,
      "start": 1639,
      "end": 1808
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectDescriptor",
        "optional": false,
        "typeAnnotation": null,
        "start": 1930,
        "end": 1946
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1947,
              "end": 1948
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1947,
            "end": 1948
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1950,
              "end": 1951
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1950,
            "end": 1951
          }
        ],
        "start": 1946,
        "end": 1952
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 1961,
              "end": 1965
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1968,
                  "end": 1969
                },
                "typeArguments": null,
                "start": 1968,
                "end": 1969
              },
              "start": 1966,
              "end": 1969
            },
            "accessibility": null,
            "static": false,
            "start": 1961,
            "end": 1970
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methods",
              "optional": false,
              "typeAnnotation": null,
              "start": 1975,
              "end": 1982
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1985,
                      "end": 1986
                    },
                    "typeArguments": null,
                    "start": 1985,
                    "end": 1986
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThisType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1989,
                      "end": 1997
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "D",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1998,
                                "end": 1999
                              },
                              "typeArguments": null,
                              "start": 1998,
                              "end": 1999
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2002,
                                "end": 2003
                              },
                              "typeArguments": null,
                              "start": 2002,
                              "end": 2003
                            }
                          ],
                          "start": 1998,
                          "end": 2003
                        }
                      ],
                      "start": 1997,
                      "end": 2004
                    },
                    "start": 1989,
                    "end": 2004
                  }
                ],
                "start": 1985,
                "end": 2004
              },
              "start": 1983,
              "end": 2004
            },
            "accessibility": null,
            "static": false,
            "start": 1975,
            "end": 2005
          }
        ],
        "start": 1955,
        "end": 2046
      },
      "declare": false,
      "start": 1925,
      "end": 2046
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 2065,
        "end": 2075
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 2076,
              "end": 2077
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2076,
            "end": 2077
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 2079,
              "end": 2080
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2079,
            "end": 2080
          }
        ],
        "start": 2075,
        "end": 2081
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "desc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 2088,
                "end": 2104
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2105,
                      "end": 2106
                    },
                    "typeArguments": null,
                    "start": 2105,
                    "end": 2106
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2108,
                      "end": 2109
                    },
                    "typeArguments": null,
                    "start": 2108,
                    "end": 2109
                  }
                ],
                "start": 2104,
                "end": 2110
              },
              "start": 2088,
              "end": 2110
            },
            "start": 2086,
            "end": 2110
          },
          "start": 2082,
          "end": 2110
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 2113,
                "end": 2114
              },
              "typeArguments": null,
              "start": 2113,
              "end": 2114
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 2117,
                "end": 2118
              },
              "typeArguments": null,
              "start": 2117,
              "end": 2118
            }
          ],
          "start": 2113,
          "end": 2118
        },
        "start": 2111,
        "end": 2118
      },
      "body": null,
      "expression": false,
      "start": 2048,
      "end": 2119
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2125,
            "end": 2127
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 2130,
              "end": 2140
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
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2147,
                      "end": 2151
                    },
                    "value": {
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
                            "start": 2155,
                            "end": 2156
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2158,
                            "end": 2159
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2155,
                          "end": 2159
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
                            "start": 2161,
                            "end": 2162
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2164,
                            "end": 2165
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2161,
                          "end": 2165
                        }
                      ],
                      "start": 2153,
                      "end": 2167
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2147,
                    "end": 2167
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2173,
                      "end": 2180
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "moveBy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2192,
                            "end": 2198
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
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2203,
                                    "end": 2209
                                  },
                                  "start": 2201,
                                  "end": 2209
                                },
                                "start": 2199,
                                "end": 2209
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
                                    "start": 2215,
                                    "end": 2221
                                  },
                                  "start": 2213,
                                  "end": 2221
                                },
                                "start": 2211,
                                "end": 2221
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2237,
                                        "end": 2241
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2242,
                                        "end": 2243
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2237,
                                      "end": 2243
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "dx",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2247,
                                      "end": 2249
                                    },
                                    "start": 2237,
                                    "end": 2249
                                  },
                                  "directive": null,
                                  "start": 2237,
                                  "end": 2250
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2287,
                                        "end": 2291
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2292,
                                        "end": 2293
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2287,
                                      "end": 2293
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "dy",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2297,
                                      "end": 2299
                                    },
                                    "start": 2287,
                                    "end": 2299
                                  },
                                  "directive": null,
                                  "start": 2287,
                                  "end": 2300
                                }
                              ],
                              "start": 2223,
                              "end": 2334
                            },
                            "expression": false,
                            "start": 2198,
                            "end": 2334
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2192,
                          "end": 2334
                        }
                      ],
                      "start": 2182,
                      "end": 2340
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2173,
                    "end": 2340
                  }
                ],
                "start": 2141,
                "end": 2342
              }
            ],
            "optional": false,
            "start": 2130,
            "end": 2343
          },
          "definite": false,
          "start": 2125,
          "end": 2343
        }
      ],
      "declare": false,
      "start": 2121,
      "end": 2344
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectDescriptor2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2476,
        "end": 2493
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 2494,
              "end": 2495
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2494,
            "end": 2495
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 2497,
              "end": 2498
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2497,
            "end": 2498
          }
        ],
        "start": 2493,
        "end": 2499
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 2502,
              "end": 2510
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2511,
                        "end": 2512
                      },
                      "typeArguments": null,
                      "start": 2511,
                      "end": 2512
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2515,
                        "end": 2516
                      },
                      "typeArguments": null,
                      "start": 2515,
                      "end": 2516
                    }
                  ],
                  "start": 2511,
                  "end": 2516
                }
              ],
              "start": 2510,
              "end": 2517
            },
            "start": 2502,
            "end": 2517
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2526,
                  "end": 2530
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2533,
                      "end": 2534
                    },
                    "typeArguments": null,
                    "start": 2533,
                    "end": 2534
                  },
                  "start": 2531,
                  "end": 2534
                },
                "accessibility": null,
                "static": false,
                "start": 2526,
                "end": 2535
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2540,
                  "end": 2547
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2550,
                      "end": 2551
                    },
                    "typeArguments": null,
                    "start": 2550,
                    "end": 2551
                  },
                  "start": 2548,
                  "end": 2551
                },
                "accessibility": null,
                "static": false,
                "start": 2540,
                "end": 2552
              }
            ],
            "start": 2520,
            "end": 2554
          }
        ],
        "start": 2502,
        "end": 2554
      },
      "declare": false,
      "start": 2471,
      "end": 2554
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeObject2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2573,
        "end": 2584
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 2585,
              "end": 2586
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2585,
            "end": 2586
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 2588,
              "end": 2589
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2588,
            "end": 2589
          }
        ],
        "start": 2584,
        "end": 2590
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "desc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjectDescriptor",
                "optional": false,
                "typeAnnotation": null,
                "start": 2597,
                "end": 2613
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2614,
                      "end": 2615
                    },
                    "typeArguments": null,
                    "start": 2614,
                    "end": 2615
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2617,
                      "end": 2618
                    },
                    "typeArguments": null,
                    "start": 2617,
                    "end": 2618
                  }
                ],
                "start": 2613,
                "end": 2619
              },
              "start": 2597,
              "end": 2619
            },
            "start": 2595,
            "end": 2619
          },
          "start": 2591,
          "end": 2619
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 2622,
                "end": 2623
              },
              "typeArguments": null,
              "start": 2622,
              "end": 2623
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 2626,
                "end": 2627
              },
              "typeArguments": null,
              "start": 2626,
              "end": 2627
            }
          ],
          "start": 2622,
          "end": 2627
        },
        "start": 2620,
        "end": 2627
      },
      "body": null,
      "expression": false,
      "start": 2556,
      "end": 2628
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2634,
            "end": 2636
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeObject2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2639,
              "end": 2650
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
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2657,
                      "end": 2661
                    },
                    "value": {
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
                            "start": 2665,
                            "end": 2666
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2668,
                            "end": 2669
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2665,
                          "end": 2669
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
                            "start": 2671,
                            "end": 2672
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2674,
                            "end": 2675
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2671,
                          "end": 2675
                        }
                      ],
                      "start": 2663,
                      "end": 2677
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2657,
                    "end": 2677
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2683,
                      "end": 2690
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "moveBy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2702,
                            "end": 2708
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
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 2713,
                                    "end": 2719
                                  },
                                  "start": 2711,
                                  "end": 2719
                                },
                                "start": 2709,
                                "end": 2719
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
                                    "start": 2725,
                                    "end": 2731
                                  },
                                  "start": 2723,
                                  "end": 2731
                                },
                                "start": 2721,
                                "end": 2731
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2747,
                                        "end": 2751
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2752,
                                        "end": 2753
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2747,
                                      "end": 2753
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "dx",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2757,
                                      "end": 2759
                                    },
                                    "start": 2747,
                                    "end": 2759
                                  },
                                  "directive": null,
                                  "start": 2747,
                                  "end": 2760
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "+=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 2797,
                                        "end": 2801
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2802,
                                        "end": 2803
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 2797,
                                      "end": 2803
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "dy",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2807,
                                      "end": 2809
                                    },
                                    "start": 2797,
                                    "end": 2809
                                  },
                                  "directive": null,
                                  "start": 2797,
                                  "end": 2810
                                }
                              ],
                              "start": 2733,
                              "end": 2844
                            },
                            "expression": false,
                            "start": 2708,
                            "end": 2844
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2702,
                          "end": 2844
                        }
                      ],
                      "start": 2692,
                      "end": 2850
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2683,
                    "end": 2850
                  }
                ],
                "start": 2651,
                "end": 2852
              }
            ],
            "optional": false,
            "start": 2639,
            "end": 2853
          },
          "definite": false,
          "start": 2634,
          "end": 2853
        }
      ],
      "declare": false,
      "start": 2630,
      "end": 2854
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropDesc",
        "optional": false,
        "typeAnnotation": null,
        "start": 2940,
        "end": 2948
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2949,
              "end": 2950
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2949,
            "end": 2950
          }
        ],
        "start": 2948,
        "end": 2951
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2960,
              "end": 2965
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
                  "start": 2968,
                  "end": 2969
                },
                "typeArguments": null,
                "start": 2968,
                "end": 2969
              },
              "start": 2966,
              "end": 2969
            },
            "accessibility": null,
            "static": false,
            "start": 2960,
            "end": 2970
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 2975,
              "end": 2978
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
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
                  "start": 2983,
                  "end": 2984
                },
                "typeArguments": null,
                "start": 2983,
                "end": 2984
              },
              "start": 2981,
              "end": 2984
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2975,
            "end": 2985
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 2990,
              "end": 2993
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 3002,
                      "end": 3003
                    },
                    "typeArguments": null,
                    "start": 3002,
                    "end": 3003
                  },
                  "start": 3000,
                  "end": 3003
                },
                "start": 2995,
                "end": 3003
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3006,
                "end": 3010
              },
              "start": 3004,
              "end": 3010
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2990,
            "end": 3011
          }
        ],
        "start": 2954,
        "end": 3013
      },
      "declare": false,
      "start": 2935,
      "end": 3013
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropDescMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 3020,
        "end": 3031
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3032,
              "end": 3033
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3032,
            "end": 3033
          }
        ],
        "start": 3031,
        "end": 3034
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 3044,
          "end": 3045
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3055,
              "end": 3056
            },
            "typeArguments": null,
            "start": 3055,
            "end": 3056
          },
          "start": 3049,
          "end": 3056
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PropDesc",
            "optional": false,
            "typeAnnotation": null,
            "start": 3059,
            "end": 3067
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3068,
                    "end": 3069
                  },
                  "typeArguments": null,
                  "start": 3068,
                  "end": 3069
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3070,
                    "end": 3071
                  },
                  "typeArguments": null,
                  "start": 3070,
                  "end": 3071
                },
                "start": 3068,
                "end": 3072
              }
            ],
            "start": 3067,
            "end": 3073
          },
          "start": 3059,
          "end": 3073
        },
        "optional": false,
        "readonly": null,
        "start": 3037,
        "end": 3076
      },
      "declare": false,
      "start": 3015,
      "end": 3076
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 3095,
        "end": 3105
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3106,
              "end": 3107
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3106,
            "end": 3107
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3109,
              "end": 3110
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3119,
              "end": 3125
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3109,
            "end": 3125
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3127,
              "end": 3128
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3127,
            "end": 3128
          }
        ],
        "start": 3105,
        "end": 3129
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 3135,
                "end": 3136
              },
              "typeArguments": null,
              "start": 3135,
              "end": 3136
            },
            "start": 3133,
            "end": 3136
          },
          "start": 3130,
          "end": 3136
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3144,
                "end": 3145
              },
              "typeArguments": null,
              "start": 3144,
              "end": 3145
            },
            "start": 3142,
            "end": 3145
          },
          "start": 3138,
          "end": 3145
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "desc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropDesc",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3153,
                    "end": 3161
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3162,
                          "end": 3163
                        },
                        "typeArguments": null,
                        "start": 3162,
                        "end": 3163
                      }
                    ],
                    "start": 3161,
                    "end": 3164
                  },
                  "start": 3153,
                  "end": 3164
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThisType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3167,
                    "end": 3175
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3176,
                          "end": 3177
                        },
                        "typeArguments": null,
                        "start": 3176,
                        "end": 3177
                      }
                    ],
                    "start": 3175,
                    "end": 3178
                  },
                  "start": 3167,
                  "end": 3178
                }
              ],
              "start": 3153,
              "end": 3178
            },
            "start": 3151,
            "end": 3178
          },
          "start": 3147,
          "end": 3178
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3181,
                "end": 3182
              },
              "typeArguments": null,
              "start": 3181,
              "end": 3182
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3185,
                "end": 3191
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3192,
                      "end": 3193
                    },
                    "typeArguments": null,
                    "start": 3192,
                    "end": 3193
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3195,
                      "end": 3196
                    },
                    "typeArguments": null,
                    "start": 3195,
                    "end": 3196
                  }
                ],
                "start": 3191,
                "end": 3197
              },
              "start": 3185,
              "end": 3197
            }
          ],
          "start": 3181,
          "end": 3197
        },
        "start": 3179,
        "end": 3197
      },
      "body": null,
      "expression": false,
      "start": 3078,
      "end": 3198
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3217,
        "end": 3228
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3229,
              "end": 3230
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3229,
            "end": 3230
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3232,
              "end": 3233
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3232,
            "end": 3233
          }
        ],
        "start": 3228,
        "end": 3234
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 3240,
                "end": 3241
              },
              "typeArguments": null,
              "start": 3240,
              "end": 3241
            },
            "start": 3238,
            "end": 3241
          },
          "start": 3235,
          "end": 3241
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "descs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropDescMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3250,
                    "end": 3261
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3262,
                          "end": 3263
                        },
                        "typeArguments": null,
                        "start": 3262,
                        "end": 3263
                      }
                    ],
                    "start": 3261,
                    "end": 3264
                  },
                  "start": 3250,
                  "end": 3264
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThisType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3267,
                    "end": 3275
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3276,
                          "end": 3277
                        },
                        "typeArguments": null,
                        "start": 3276,
                        "end": 3277
                      }
                    ],
                    "start": 3275,
                    "end": 3278
                  },
                  "start": 3267,
                  "end": 3278
                }
              ],
              "start": 3250,
              "end": 3278
            },
            "start": 3248,
            "end": 3278
          },
          "start": 3243,
          "end": 3278
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3281,
                "end": 3282
              },
              "typeArguments": null,
              "start": 3281,
              "end": 3282
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 3285,
                "end": 3286
              },
              "typeArguments": null,
              "start": 3285,
              "end": 3286
            }
          ],
          "start": 3281,
          "end": 3286
        },
        "start": 3279,
        "end": 3286
      },
      "body": null,
      "expression": false,
      "start": 3200,
      "end": 3287
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p10",
            "optional": false,
            "typeAnnotation": null,
            "start": 3293,
            "end": 3296
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 3299,
              "end": 3309
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3310,
                "end": 3312
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 3314,
                "end": 3319
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3323,
                      "end": 3328
                    },
                    "value": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 3330,
                      "end": 3332
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3323,
                    "end": 3332
                  }
                ],
                "start": 3321,
                "end": 3334
              }
            ],
            "optional": false,
            "start": 3299,
            "end": 3335
          },
          "definite": false,
          "start": 3293,
          "end": 3335
        }
      ],
      "declare": false,
      "start": 3289,
      "end": 3336
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
            "name": "p10",
            "optional": false,
            "typeAnnotation": null,
            "start": 3337,
            "end": 3340
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3341,
            "end": 3344
          },
          "optional": false,
          "computed": false,
          "start": 3337,
          "end": 3344
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p10",
              "optional": false,
              "typeAnnotation": null,
              "start": 3347,
              "end": 3350
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3351,
              "end": 3354
            },
            "optional": false,
            "computed": false,
            "start": 3347,
            "end": 3354
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3357,
            "end": 3358
          },
          "start": 3347,
          "end": 3358
        },
        "start": 3337,
        "end": 3358
      },
      "directive": null,
      "start": 3337,
      "end": 3359
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p11",
            "optional": false,
            "typeAnnotation": null,
            "start": 3365,
            "end": 3368
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 3371,
              "end": 3381
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3382,
                "end": 3384
              },
              {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 3386,
                "end": 3391
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3399,
                      "end": 3402
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
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3422,
                                "end": 3426
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3427,
                                "end": 3428
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3422,
                              "end": 3428
                            },
                            "start": 3415,
                            "end": 3429
                          }
                        ],
                        "start": 3405,
                        "end": 3435
                      },
                      "expression": false,
                      "start": 3402,
                      "end": 3435
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3399,
                    "end": 3435
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3441,
                      "end": 3444
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3452,
                              "end": 3458
                            },
                            "start": 3450,
                            "end": 3458
                          },
                          "start": 3445,
                          "end": 3458
                        }
                      ],
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
                                  "start": 3470,
                                  "end": 3474
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3475,
                                  "end": 3476
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3470,
                                "end": 3476
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3479,
                                "end": 3484
                              },
                              "start": 3470,
                              "end": 3484
                            },
                            "directive": null,
                            "start": 3470,
                            "end": 3485
                          }
                        ],
                        "start": 3460,
                        "end": 3491
                      },
                      "expression": false,
                      "start": 3444,
                      "end": 3491
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3441,
                    "end": 3491
                  }
                ],
                "start": 3393,
                "end": 3493
              }
            ],
            "optional": false,
            "start": 3371,
            "end": 3494
          },
          "definite": false,
          "start": 3365,
          "end": 3494
        }
      ],
      "declare": false,
      "start": 3361,
      "end": 3495
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
            "name": "p11",
            "optional": false,
            "typeAnnotation": null,
            "start": 3496,
            "end": 3499
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3500,
            "end": 3503
          },
          "optional": false,
          "computed": false,
          "start": 3496,
          "end": 3503
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p11",
              "optional": false,
              "typeAnnotation": null,
              "start": 3506,
              "end": 3509
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 3510,
              "end": 3513
            },
            "optional": false,
            "computed": false,
            "start": 3506,
            "end": 3513
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3516,
            "end": 3517
          },
          "start": 3506,
          "end": 3517
        },
        "start": 3496,
        "end": 3517
      },
      "directive": null,
      "start": 3496,
      "end": 3518
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p12",
            "optional": false,
            "typeAnnotation": null,
            "start": 3524,
            "end": 3527
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 3530,
              "end": 3541
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3542,
                "end": 3544
              },
              {
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
                      "start": 3552,
                      "end": 3555
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3567,
                            "end": 3572
                          },
                          "value": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 3574,
                            "end": 3576
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3567,
                          "end": 3576
                        }
                      ],
                      "start": 3557,
                      "end": 3582
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3552,
                    "end": 3582
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3588,
                      "end": 3591
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3603,
                            "end": 3606
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
                                "type": "TSNumberKeyword",
                                "start": 3610,
                                "end": 3616
                              },
                              "start": 3608,
                              "end": 3616
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 3638,
                                      "end": 3642
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3643,
                                      "end": 3644
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 3638,
                                    "end": 3644
                                  },
                                  "start": 3631,
                                  "end": 3645
                                }
                              ],
                              "start": 3617,
                              "end": 3655
                            },
                            "expression": false,
                            "start": 3606,
                            "end": 3655
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3603,
                          "end": 3655
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "set",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3665,
                            "end": 3668
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
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 3676,
                                    "end": 3682
                                  },
                                  "start": 3674,
                                  "end": 3682
                                },
                                "start": 3669,
                                "end": 3682
                              }
                            ],
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
                                        "start": 3698,
                                        "end": 3702
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3703,
                                        "end": 3704
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3698,
                                      "end": 3704
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3707,
                                      "end": 3712
                                    },
                                    "start": 3698,
                                    "end": 3712
                                  },
                                  "directive": null,
                                  "start": 3698,
                                  "end": 3713
                                }
                              ],
                              "start": 3684,
                              "end": 3723
                            },
                            "expression": false,
                            "start": 3668,
                            "end": 3723
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 3665,
                          "end": 3723
                        }
                      ],
                      "start": 3593,
                      "end": 3729
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 3588,
                    "end": 3729
                  }
                ],
                "start": 3546,
                "end": 3731
              }
            ],
            "optional": false,
            "start": 3530,
            "end": 3732
          },
          "definite": false,
          "start": 3524,
          "end": 3732
        }
      ],
      "declare": false,
      "start": 3520,
      "end": 3733
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
            "name": "p12",
            "optional": false,
            "typeAnnotation": null,
            "start": 3734,
            "end": 3737
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 3738,
            "end": 3741
          },
          "optional": false,
          "computed": false,
          "start": 3734,
          "end": 3741
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p12",
              "optional": false,
              "typeAnnotation": null,
              "start": 3744,
              "end": 3747
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3748,
              "end": 3751
            },
            "optional": false,
            "computed": false,
            "start": 3744,
            "end": 3751
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3754,
            "end": 3755
          },
          "start": 3744,
          "end": 3755
        },
        "start": 3734,
        "end": 3755
      },
      "directive": null,
      "start": 3734,
      "end": 3756
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
            "name": "p12",
            "optional": false,
            "typeAnnotation": null,
            "start": 3757,
            "end": 3760
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 3761,
            "end": 3764
          },
          "optional": false,
          "computed": false,
          "start": 3757,
          "end": 3764
        },
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p12",
              "optional": false,
              "typeAnnotation": null,
              "start": 3767,
              "end": 3770
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 3771,
              "end": 3774
            },
            "optional": false,
            "computed": false,
            "start": 3767,
            "end": 3774
          },
          "operator": "+",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 3777,
            "end": 3778
          },
          "start": 3767,
          "end": 3778
        },
        "start": 3757,
        "end": 3778
      },
      "directive": null,
      "start": 3757,
      "end": 3779
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Accessors",
        "optional": false,
        "typeAnnotation": null,
        "start": 3828,
        "end": 3837
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3838,
              "end": 3839
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3838,
            "end": 3839
          }
        ],
        "start": 3837,
        "end": 3840
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 3846,
          "end": 3847
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3857,
              "end": 3858
            },
            "typeArguments": null,
            "start": 3857,
            "end": 3858
          },
          "start": 3851,
          "end": 3858
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3868,
                      "end": 3869
                    },
                    "typeArguments": null,
                    "start": 3868,
                    "end": 3869
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3870,
                      "end": 3871
                    },
                    "typeArguments": null,
                    "start": 3870,
                    "end": 3871
                  },
                  "start": 3868,
                  "end": 3872
                },
                "start": 3865,
                "end": 3872
              },
              "start": 3862,
              "end": 3872
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Computed",
                "optional": false,
                "typeAnnotation": null,
                "start": 3876,
                "end": 3884
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3885,
                        "end": 3886
                      },
                      "typeArguments": null,
                      "start": 3885,
                      "end": 3886
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3887,
                        "end": 3888
                      },
                      "typeArguments": null,
                      "start": 3887,
                      "end": 3888
                    },
                    "start": 3885,
                    "end": 3889
                  }
                ],
                "start": 3884,
                "end": 3890
              },
              "start": 3876,
              "end": 3890
            }
          ],
          "start": 3861,
          "end": 3890
        },
        "optional": false,
        "readonly": null,
        "start": 3843,
        "end": 3892
      },
      "declare": false,
      "start": 3823,
      "end": 3893
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 3900,
        "end": 3910
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3911,
              "end": 3912
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3911,
            "end": 3912
          }
        ],
        "start": 3910,
        "end": 3913
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3922,
                    "end": 3928
                  },
                  "start": 3920,
                  "end": 3928
                },
                "start": 3919,
                "end": 3928
              }
            ],
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
                  "start": 3931,
                  "end": 3932
                },
                "typeArguments": null,
                "start": 3931,
                "end": 3932
              },
              "start": 3929,
              "end": 3932
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3918,
            "end": 3932
          }
        ],
        "start": 3916,
        "end": 3934
      },
      "declare": false,
      "start": 3895,
      "end": 3934
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "typeAnnotation": null,
        "start": 3941,
        "end": 3949
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3950,
              "end": 3951
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3950,
            "end": 3951
          }
        ],
        "start": 3949,
        "end": 3952
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 3961,
              "end": 3964
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
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
                  "start": 3969,
                  "end": 3970
                },
                "typeArguments": null,
                "start": 3969,
                "end": 3970
              },
              "start": 3967,
              "end": 3970
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3961,
            "end": 3971
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 3976,
              "end": 3979
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 3988,
                      "end": 3989
                    },
                    "typeArguments": null,
                    "start": 3988,
                    "end": 3989
                  },
                  "start": 3986,
                  "end": 3989
                },
                "start": 3981,
                "end": 3989
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 3992,
                "end": 3996
              },
              "start": 3990,
              "end": 3996
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3976,
            "end": 3997
          }
        ],
        "start": 3955,
        "end": 3999
      },
      "declare": false,
      "start": 3936,
      "end": 3999
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VueOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 4006,
        "end": 4016
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 4017,
              "end": 4018
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4017,
            "end": 4018
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 4020,
              "end": 4021
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4020,
            "end": 4021
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 4023,
              "end": 4024
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4023,
            "end": 4024
          }
        ],
        "start": 4016,
        "end": 4025
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 4028,
              "end": 4036
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4037,
                        "end": 4038
                      },
                      "typeArguments": null,
                      "start": 4037,
                      "end": 4038
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4041,
                        "end": 4042
                      },
                      "typeArguments": null,
                      "start": 4041,
                      "end": 4042
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4045,
                        "end": 4046
                      },
                      "typeArguments": null,
                      "start": 4045,
                      "end": 4046
                    }
                  ],
                  "start": 4037,
                  "end": 4046
                }
              ],
              "start": 4036,
              "end": 4047
            },
            "start": 4028,
            "end": 4047
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4056,
                  "end": 4060
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4063,
                          "end": 4064
                        },
                        "typeArguments": null,
                        "start": 4063,
                        "end": 4064
                      },
                      {
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
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4074,
                              "end": 4075
                            },
                            "typeArguments": null,
                            "start": 4074,
                            "end": 4075
                          },
                          "start": 4071,
                          "end": 4075
                        },
                        "start": 4068,
                        "end": 4075
                      }
                    ],
                    "start": 4063,
                    "end": 4076
                  },
                  "start": 4061,
                  "end": 4076
                },
                "accessibility": null,
                "static": false,
                "start": 4056,
                "end": 4077
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "methods",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4082,
                  "end": 4089
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4092,
                      "end": 4093
                    },
                    "typeArguments": null,
                    "start": 4092,
                    "end": 4093
                  },
                  "start": 4090,
                  "end": 4093
                },
                "accessibility": null,
                "static": false,
                "start": 4082,
                "end": 4094
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4099,
                  "end": 4107
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Accessors",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4110,
                      "end": 4119
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4120,
                            "end": 4121
                          },
                          "typeArguments": null,
                          "start": 4120,
                          "end": 4121
                        }
                      ],
                      "start": 4119,
                      "end": 4122
                    },
                    "start": 4110,
                    "end": 4122
                  },
                  "start": 4108,
                  "end": 4122
                },
                "accessibility": null,
                "static": false,
                "start": 4099,
                "end": 4123
              }
            ],
            "start": 4050,
            "end": 4125
          }
        ],
        "start": 4028,
        "end": 4125
      },
      "declare": false,
      "start": 4001,
      "end": 4125
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
            "name": "Vue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4151,
                        "end": 4152
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4151,
                      "end": 4152
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4154,
                        "end": 4155
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4154,
                      "end": 4155
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4157,
                        "end": 4158
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4157,
                      "end": 4158
                    }
                  ],
                  "start": 4150,
                  "end": 4159
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "VueOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4169,
                          "end": 4179
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "D",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4180,
                                "end": 4181
                              },
                              "typeArguments": null,
                              "start": 4180,
                              "end": 4181
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4183,
                                "end": 4184
                              },
                              "typeArguments": null,
                              "start": 4183,
                              "end": 4184
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4186,
                                "end": 4187
                              },
                              "typeArguments": null,
                              "start": 4186,
                              "end": 4187
                            }
                          ],
                          "start": 4179,
                          "end": 4188
                        },
                        "start": 4169,
                        "end": 4188
                      },
                      "start": 4167,
                      "end": 4188
                    },
                    "start": 4160,
                    "end": 4188
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4193,
                          "end": 4194
                        },
                        "typeArguments": null,
                        "start": 4193,
                        "end": 4194
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "M",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4197,
                          "end": 4198
                        },
                        "typeArguments": null,
                        "start": 4197,
                        "end": 4198
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4201,
                          "end": 4202
                        },
                        "typeArguments": null,
                        "start": 4201,
                        "end": 4202
                      }
                    ],
                    "start": 4193,
                    "end": 4202
                  },
                  "start": 4190,
                  "end": 4202
                },
                "start": 4146,
                "end": 4202
              },
              "start": 4144,
              "end": 4202
            },
            "start": 4141,
            "end": 4202
          },
          "init": null,
          "definite": false,
          "start": 4141,
          "end": 4202
        }
      ],
      "declare": true,
      "start": 4127,
      "end": 4203
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "vue",
            "optional": false,
            "typeAnnotation": null,
            "start": 4209,
            "end": 4212
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Vue",
              "optional": false,
              "typeAnnotation": null,
              "start": 4219,
              "end": 4222
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
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4229,
                      "end": 4233
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
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
                              "start": 4244,
                              "end": 4245
                            },
                            "value": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 4247,
                              "end": 4248
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4244,
                            "end": 4248
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
                              "start": 4250,
                              "end": 4251
                            },
                            "value": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 4253,
                              "end": 4254
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4250,
                            "end": 4254
                          }
                        ],
                        "start": 4242,
                        "end": 4256
                      },
                      "id": null,
                      "generator": false,
                      "start": 4235,
                      "end": 4257
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4229,
                    "end": 4257
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "methods",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4263,
                      "end": 4270
                    },
                    "value": {
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
                            "start": 4282,
                            "end": 4283
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
                                    "type": "TSStringKeyword",
                                    "start": 4287,
                                    "end": 4293
                                  },
                                  "start": 4285,
                                  "end": 4293
                                },
                                "start": 4284,
                                "end": 4293
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 4316,
                                      "end": 4320
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4321,
                                      "end": 4322
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4316,
                                    "end": 4322
                                  },
                                  "start": 4309,
                                  "end": 4323
                                }
                              ],
                              "start": 4295,
                              "end": 4333
                            },
                            "expression": false,
                            "start": 4283,
                            "end": 4333
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4282,
                          "end": 4333
                        }
                      ],
                      "start": 4272,
                      "end": 4339
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4263,
                    "end": 4339
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "computed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4345,
                      "end": 4353
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4365,
                            "end": 4369
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
                                "type": "TSNumberKeyword",
                                "start": 4373,
                                "end": 4379
                              },
                              "start": 4371,
                              "end": 4379
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 4401,
                                      "end": 4405
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4406,
                                      "end": 4407
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4401,
                                    "end": 4407
                                  },
                                  "start": 4394,
                                  "end": 4408
                                }
                              ],
                              "start": 4380,
                              "end": 4418
                            },
                            "expression": false,
                            "start": 4369,
                            "end": 4418
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4365,
                          "end": 4418
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "hello",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4428,
                            "end": 4433
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "get",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4449,
                                  "end": 4452
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
                                        "type": "ReturnStatement",
                                        "argument": {
                                          "type": "Literal",
                                          "value": "hi",
                                          "raw": "\"hi\"",
                                          "start": 4480,
                                          "end": 4484
                                        },
                                        "start": 4473,
                                        "end": 4485
                                      }
                                    ],
                                    "start": 4455,
                                    "end": 4499
                                  },
                                  "expression": false,
                                  "start": 4452,
                                  "end": 4499
                                },
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 4449,
                                "end": 4499
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "set",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4513,
                                  "end": 4516
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
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 4524,
                                          "end": 4530
                                        },
                                        "start": 4522,
                                        "end": 4530
                                      },
                                      "start": 4517,
                                      "end": 4530
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 4532,
                                    "end": 4547
                                  },
                                  "expression": false,
                                  "start": 4516,
                                  "end": 4547
                                },
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 4513,
                                "end": 4547
                              }
                            ],
                            "start": 4435,
                            "end": 4557
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4428,
                          "end": 4557
                        }
                      ],
                      "start": 4355,
                      "end": 4563
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4345,
                    "end": 4563
                  }
                ],
                "start": 4223,
                "end": 4565
              }
            ],
            "start": 4215,
            "end": 4566
          },
          "definite": false,
          "start": 4209,
          "end": 4566
        }
      ],
      "declare": false,
      "start": 4205,
      "end": 4567
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "vue",
        "optional": false,
        "typeAnnotation": null,
        "start": 4569,
        "end": 4572
      },
      "directive": null,
      "start": 4569,
      "end": 4573
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "vue",
          "optional": false,
          "typeAnnotation": null,
          "start": 4574,
          "end": 4577
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 4578,
          "end": 4579
        },
        "optional": false,
        "computed": false,
        "start": 4574,
        "end": 4579
      },
      "directive": null,
      "start": 4574,
      "end": 4580
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
            "name": "vue",
            "optional": false,
            "typeAnnotation": null,
            "start": 4581,
            "end": 4584
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 4585,
            "end": 4586
          },
          "optional": false,
          "computed": false,
          "start": 4581,
          "end": 4586
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "abc",
            "raw": "\"abc\"",
            "start": 4587,
            "end": 4592
          }
        ],
        "optional": false,
        "start": 4581,
        "end": 4593
      },
      "directive": null,
      "start": 4581,
      "end": 4594
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "vue",
          "optional": false,
          "typeAnnotation": null,
          "start": 4595,
          "end": 4598
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 4599,
          "end": 4603
        },
        "optional": false,
        "computed": false,
        "start": 4595,
        "end": 4603
      },
      "directive": null,
      "start": 4595,
      "end": 4604
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "vue",
          "optional": false,
          "typeAnnotation": null,
          "start": 4605,
          "end": 4608
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "hello",
          "optional": false,
          "typeAnnotation": null,
          "start": 4609,
          "end": 4614
        },
        "optional": false,
        "computed": false,
        "start": 4605,
        "end": 4614
      },
      "directive": null,
      "start": 4605,
      "end": 4615
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 107,
  "end": 4615
}
```
