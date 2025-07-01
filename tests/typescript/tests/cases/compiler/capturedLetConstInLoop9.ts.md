__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 13,
              "end": 14
            },
            "definite": false,
            "start": 9,
            "end": 14
          }
        ],
        "declare": false,
        "start": 5,
        "end": 14
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 17
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 20,
          "end": 21
        },
        "start": 16,
        "end": 21
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 26
        },
        "start": 23,
        "end": 26
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "init": null,
                "definite": false,
                "start": 38,
                "end": 39
              }
            ],
            "declare": false,
            "start": 34,
            "end": 40
          },
          {
            "type": "ExpressionStatement",
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 66,
                      "end": 67
                    },
                    "start": 59,
                    "end": 67
                  }
                ],
                "start": 57,
                "end": 69
              },
              "expression": false,
              "start": 46,
              "end": 69
            },
            "directive": null,
            "start": 45,
            "end": 71
          },
          {
            "type": "BlockStatement",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 90,
                      "end": 91
                    },
                    "init": null,
                    "definite": false,
                    "start": 90,
                    "end": 91
                  }
                ],
                "declare": false,
                "start": 86,
                "end": 92
              },
              {
                "type": "ExpressionStatement",
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 123
                        },
                        "start": 115,
                        "end": 123
                      }
                    ],
                    "start": 113,
                    "end": 125
                  },
                  "expression": false,
                  "start": 102,
                  "end": 125
                },
                "directive": null,
                "start": 101,
                "end": 127
              }
            ],
            "start": 76,
            "end": 133
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 143,
              "end": 146
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 159
              },
              "body": {
                "type": "BlockStatement",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 175,
                          "end": 176
                        },
                        "init": null,
                        "definite": false,
                        "start": 175,
                        "end": 176
                      }
                    ],
                    "declare": false,
                    "start": 171,
                    "end": 177
                  },
                  {
                    "type": "ExpressionStatement",
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 207,
                              "end": 208
                            },
                            "start": 200,
                            "end": 208
                          }
                        ],
                        "start": 198,
                        "end": 210
                      },
                      "expression": false,
                      "start": 187,
                      "end": 210
                    },
                    "directive": null,
                    "start": 186,
                    "end": 212
                  }
                ],
                "start": 161,
                "end": 218
              },
              "start": 151,
              "end": 218
            },
            "finalizer": null,
            "start": 139,
            "end": 218
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 233
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 250,
                  "end": 251
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 269,
                          "end": 270
                        },
                        "init": null,
                        "definite": false,
                        "start": 269,
                        "end": 270
                      }
                    ],
                    "declare": false,
                    "start": 265,
                    "end": 271
                  },
                  {
                    "type": "ExpressionStatement",
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 305,
                              "end": 306
                            },
                            "start": 298,
                            "end": 306
                          }
                        ],
                        "start": 296,
                        "end": 308
                      },
                      "expression": false,
                      "start": 285,
                      "end": 308
                    },
                    "directive": null,
                    "start": 284,
                    "end": 310
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 322,
                    "end": 328
                  }
                ],
                "start": 245,
                "end": 328
              }
            ],
            "start": 224,
            "end": 334
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 351,
                "end": 352
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 356,
                "end": 357
              },
              "start": 351,
              "end": 357
            },
            "body": {
              "type": "BlockStatement",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 374
                      },
                      "init": null,
                      "definite": false,
                      "start": 373,
                      "end": 374
                    }
                  ],
                  "declare": false,
                  "start": 369,
                  "end": 375
                },
                {
                  "type": "ExpressionStatement",
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 405,
                            "end": 406
                          },
                          "start": 398,
                          "end": 406
                        }
                      ],
                      "start": 396,
                      "end": 408
                    },
                    "expression": false,
                    "start": 385,
                    "end": 408
                  },
                  "directive": null,
                  "start": 384,
                  "end": 410
                }
              ],
              "start": 359,
              "end": 416
            },
            "start": 344,
            "end": 416
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 433
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
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 445
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 469,
                              "end": 470
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 473,
                              "end": 474
                            },
                            "start": 469,
                            "end": 474
                          },
                          "start": 462,
                          "end": 475
                        }
                      ],
                      "start": 448,
                      "end": 485
                    },
                    "expression": false,
                    "start": 445,
                    "end": 485
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 444,
                  "end": 485
                }
              ],
              "start": 434,
              "end": 491
            },
            "abstract": false,
            "declare": false,
            "start": 426,
            "end": 491
          }
        ],
        "start": 28,
        "end": 493
      },
      "start": 0,
      "end": 493
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 512,
        "end": 515
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
              "type": "TSAnyKeyword",
              "start": 519,
              "end": 522
            },
            "start": 517,
            "end": 522
          },
          "start": 516,
          "end": 522
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 495,
      "end": 524
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 535,
        "end": 538
      },
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
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "l0",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 549
            },
            "body": {
              "type": "ForOfStatement",
              "await": false,
              "left": {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 565
                    },
                    "init": null,
                    "definite": false,
                    "start": 564,
                    "end": 565
                  }
                ],
                "declare": false,
                "start": 560,
                "end": 565
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 569,
                "end": 571
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 596,
                        "end": 597
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 602,
                        "end": 603
                      },
                      "start": 596,
                      "end": 603
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 619,
                          "end": 625
                        }
                      ],
                      "start": 605,
                      "end": 635
                    },
                    "alternate": null,
                    "start": 592,
                    "end": 635
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 657,
                        "end": 658
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 663,
                        "end": 664
                      },
                      "start": 657,
                      "end": 664
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "l0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 686,
                            "end": 688
                          },
                          "start": 680,
                          "end": 689
                        }
                      ],
                      "start": 666,
                      "end": 699
                    },
                    "alternate": null,
                    "start": 653,
                    "end": 699
                  },
                  {
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 726,
                            "end": 727
                          },
                          "init": null,
                          "definite": false,
                          "start": 726,
                          "end": 727
                        }
                      ],
                      "declare": false,
                      "start": 722,
                      "end": 727
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 731,
                      "end": 733
                    },
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
                                "type": "ArrayPattern",
                                "decorators": [],
                                "elements": [
                                  {
                                    "type": "ObjectPattern",
                                    "decorators": [],
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
                                          "start": 755,
                                          "end": 756
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 755,
                                          "end": 756
                                        },
                                        "method": false,
                                        "shorthand": true,
                                        "computed": false,
                                        "optional": false,
                                        "start": 755,
                                        "end": 756
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
                                          "start": 758,
                                          "end": 759
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "z",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 760,
                                          "end": 761
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 758,
                                        "end": 761
                                      }
                                    ],
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 754,
                                    "end": 762
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 753,
                                "end": 763
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
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
                                          "start": 768,
                                          "end": 769
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 770,
                                          "end": 771
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 768,
                                        "end": 771
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
                                          "start": 773,
                                          "end": 774
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 2,
                                          "raw": "2",
                                          "start": 775,
                                          "end": 776
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 773,
                                        "end": 776
                                      }
                                    ],
                                    "start": 767,
                                    "end": 777
                                  }
                                ],
                                "start": 766,
                                "end": 778
                              },
                              "definite": false,
                              "start": 753,
                              "end": 778
                            }
                          ],
                          "declare": false,
                          "start": 749,
                          "end": 779
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 796,
                              "end": 797
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 802,
                              "end": 803
                            },
                            "start": 796,
                            "end": 803
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "BreakStatement",
                                "label": null,
                                "start": 823,
                                "end": 829
                              }
                            ],
                            "start": 805,
                            "end": 843
                          },
                          "alternate": null,
                          "start": 792,
                          "end": 843
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 886,
                              "end": 887
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 892,
                              "end": 893
                            },
                            "start": 886,
                            "end": 893
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "BreakStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "l0",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 919,
                                  "end": 921
                                },
                                "start": 913,
                                "end": 922
                              }
                            ],
                            "start": 895,
                            "end": 936
                          },
                          "alternate": null,
                          "start": 882,
                          "end": 936
                        },
                        {
                          "type": "LabeledStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "l1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 962,
                            "end": 964
                          },
                          "body": {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 982,
                                "end": 983
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 988,
                                "end": 989
                              },
                              "start": 982,
                              "end": 989
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "l1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1015,
                                    "end": 1017
                                  },
                                  "start": 1009,
                                  "end": 1018
                                }
                              ],
                              "start": 991,
                              "end": 1032
                            },
                            "alternate": null,
                            "start": 978,
                            "end": 1032
                          },
                          "start": 962,
                          "end": 1032
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 50,
                            "raw": "50",
                            "start": 1065,
                            "end": 1067
                          },
                          "start": 1058,
                          "end": 1068
                        }
                      ],
                      "start": 735,
                      "end": 1078
                    },
                    "start": 717,
                    "end": 1078
                  },
                  {
                    "type": "ForOfStatement",
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1097,
                            "end": 1098
                          },
                          "init": null,
                          "definite": false,
                          "start": 1097,
                          "end": 1098
                        }
                      ],
                      "declare": false,
                      "start": 1093,
                      "end": 1098
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 1102,
                      "end": 1104
                    },
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
                                "type": "ArrayPattern",
                                "decorators": [],
                                "elements": [
                                  {
                                    "type": "ObjectPattern",
                                    "decorators": [],
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1126,
                                          "end": 1128
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1126,
                                          "end": 1128
                                        },
                                        "method": false,
                                        "shorthand": true,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1126,
                                        "end": 1128
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
                                          "start": 1130,
                                          "end": 1131
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "z1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1132,
                                          "end": 1134
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1130,
                                        "end": 1134
                                      }
                                    ],
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1125,
                                    "end": 1135
                                  }
                                ],
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1124,
                                "end": 1136
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1141,
                                          "end": 1143
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 1144,
                                          "end": 1145
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1141,
                                        "end": 1145
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
                                          "start": 1147,
                                          "end": 1148
                                        },
                                        "value": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arguments",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1149,
                                            "end": 1158
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "length",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1159,
                                            "end": 1165
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1149,
                                          "end": 1165
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1147,
                                        "end": 1165
                                      }
                                    ],
                                    "start": 1140,
                                    "end": 1166
                                  }
                                ],
                                "start": 1139,
                                "end": 1167
                              },
                              "definite": false,
                              "start": 1124,
                              "end": 1167
                            }
                          ],
                          "declare": false,
                          "start": 1120,
                          "end": 1168
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1185,
                              "end": 1186
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1191,
                              "end": 1192
                            },
                            "start": 1185,
                            "end": 1192
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "BreakStatement",
                                "label": null,
                                "start": 1212,
                                "end": 1218
                              }
                            ],
                            "start": 1194,
                            "end": 1232
                          },
                          "alternate": null,
                          "start": 1181,
                          "end": 1232
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1262,
                              "end": 1263
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 1268,
                              "end": 1269
                            },
                            "start": 1262,
                            "end": 1269
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "BreakStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "l0",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1295,
                                  "end": 1297
                                },
                                "start": 1289,
                                "end": 1298
                              }
                            ],
                            "start": 1271,
                            "end": 1312
                          },
                          "alternate": null,
                          "start": 1258,
                          "end": 1312
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1344,
                              "end": 1345
                            },
                            "id": null,
                            "generator": false,
                            "start": 1338,
                            "end": 1345
                          },
                          "directive": null,
                          "start": 1338,
                          "end": 1345
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 100,
                            "raw": "100",
                            "start": 1365,
                            "end": 1368
                          },
                          "start": 1358,
                          "end": 1369
                        }
                      ],
                      "start": 1106,
                      "end": 1379
                    },
                    "start": 1088,
                    "end": 1379
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1404,
                        "end": 1405
                      },
                      "id": null,
                      "generator": false,
                      "start": 1398,
                      "end": 1405
                    },
                    "directive": null,
                    "start": 1398,
                    "end": 1406
                  }
                ],
                "start": 573,
                "end": 1412
              },
              "start": 555,
              "end": 1412
            },
            "start": 547,
            "end": 1412
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1422,
                "end": 1425
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1426,
                  "end": 1427
                }
              ],
              "optional": false,
              "start": 1422,
              "end": 1428
            },
            "directive": null,
            "start": 1422,
            "end": 1429
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1434,
                "end": 1437
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1438,
                  "end": 1439
                }
              ],
              "optional": false,
              "start": 1434,
              "end": 1440
            },
            "directive": null,
            "start": 1434,
            "end": 1441
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1446,
                "end": 1449
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1450,
                  "end": 1452
                }
              ],
              "optional": false,
              "start": 1446,
              "end": 1453
            },
            "directive": null,
            "start": 1446,
            "end": 1454
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1459,
                "end": 1462
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1463,
                  "end": 1465
                }
              ],
              "optional": false,
              "start": 1459,
              "end": 1466
            },
            "directive": null,
            "start": 1459,
            "end": 1467
          }
        ],
        "start": 541,
        "end": 1469
      },
      "expression": false,
      "start": 526,
      "end": 1469
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1480,
        "end": 1484
      },
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1502,
                    "end": 1503
                  },
                  "init": null,
                  "definite": false,
                  "start": 1502,
                  "end": 1503
                }
              ],
              "declare": false,
              "start": 1498,
              "end": 1503
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1507,
              "end": 1509
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1525,
                      "end": 1526
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1531,
                      "end": 1532
                    },
                    "start": 1525,
                    "end": 1532
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 1548,
                        "end": 1554
                      }
                    ],
                    "start": 1534,
                    "end": 1564
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1582,
                        "end": 1583
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1588,
                        "end": 1589
                      },
                      "start": 1582,
                      "end": 1589
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": null,
                          "start": 1605,
                          "end": 1614
                        }
                      ],
                      "start": 1591,
                      "end": 1624
                    },
                    "alternate": null,
                    "start": 1578,
                    "end": 1624
                  },
                  "start": 1521,
                  "end": 1624
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1649,
                      "end": 1650
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1655,
                      "end": 1656
                    },
                    "start": 1649,
                    "end": 1656
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1676,
                          "end": 1677
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 1697,
                              "end": 1703
                            }
                          ],
                          "start": 1679,
                          "end": 1717
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ContinueStatement",
                              "label": null,
                              "start": 1753,
                              "end": 1762
                            }
                          ],
                          "start": 1735,
                          "end": 1776
                        },
                        "start": 1672,
                        "end": 1776
                      }
                    ],
                    "start": 1658,
                    "end": 1786
                  },
                  "start": 1642,
                  "end": 1786
                },
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1811,
                    "end": 1812
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1833,
                        "end": 1834
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 1836,
                          "end": 1842
                        }
                      ],
                      "start": 1828,
                      "end": 1842
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1860,
                        "end": 1861
                      },
                      "consequent": [
                        {
                          "type": "ContinueStatement",
                          "label": null,
                          "start": 1863,
                          "end": 1872
                        }
                      ],
                      "start": 1855,
                      "end": 1872
                    }
                  ],
                  "start": 1804,
                  "end": 1882
                },
                {
                  "type": "ForOfStatement",
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1909,
                          "end": 1910
                        },
                        "init": null,
                        "definite": false,
                        "start": 1909,
                        "end": 1910
                      }
                    ],
                    "declare": false,
                    "start": 1905,
                    "end": 1910
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 1914,
                    "end": 1916
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "SwitchStatement",
                        "discriminant": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1939,
                          "end": 1940
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1965,
                              "end": 1966
                            },
                            "consequent": [
                              {
                                "type": "BreakStatement",
                                "label": null,
                                "start": 1968,
                                "end": 1974
                              }
                            ],
                            "start": 1960,
                            "end": 1974
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 1996,
                              "end": 1997
                            },
                            "consequent": [
                              {
                                "type": "ContinueStatement",
                                "label": null,
                                "start": 1999,
                                "end": 2008
                              }
                            ],
                            "start": 1991,
                            "end": 2008
                          }
                        ],
                        "start": 1932,
                        "end": 2022
                      }
                    ],
                    "start": 1918,
                    "end": 2032
                  },
                  "start": 1900,
                  "end": 2032
                }
              ],
              "start": 1511,
              "end": 2038
            },
            "start": 1493,
            "end": 2038
          }
        ],
        "start": 1487,
        "end": 2040
      },
      "expression": false,
      "start": 1471,
      "end": 2040
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
        "start": 2048,
        "end": 2049
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
              "start": 2056,
              "end": 2067
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
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2079,
                        "end": 2085
                      },
                      "start": 2077,
                      "end": 2085
                    },
                    "start": 2076,
                    "end": 2085
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2068,
                  "end": 2085
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2087,
                "end": 2090
              },
              "expression": false,
              "start": 2067,
              "end": 2090
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2056,
            "end": 2090
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 2095,
              "end": 2098
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
                    "type": "ForStatement",
                    "init": {
                      "type": "VariableDeclaration",
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2120,
                            "end": 2121
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2124,
                            "end": 2125
                          },
                          "definite": false,
                          "start": 2120,
                          "end": 2125
                        }
                      ],
                      "declare": false,
                      "start": 2116,
                      "end": 2125
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2127,
                        "end": 2128
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 100,
                        "raw": "100",
                        "start": 2131,
                        "end": 2134
                      },
                      "start": 2127,
                      "end": 2134
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
                        "start": 2136,
                        "end": 2137
                      },
                      "start": 2136,
                      "end": 2139
                    },
                    "body": {
                      "type": "BlockStatement",
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
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2159,
                                "end": 2160
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
                                "body": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2169,
                                      "end": 2173
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "N",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2174,
                                      "end": 2175
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2169,
                                    "end": 2175
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2178,
                                    "end": 2179
                                  },
                                  "start": 2169,
                                  "end": 2179
                                },
                                "id": null,
                                "generator": false,
                                "start": 2163,
                                "end": 2179
                              },
                              "definite": false,
                              "start": 2159,
                              "end": 2179
                            }
                          ],
                          "declare": false,
                          "start": 2155,
                          "end": 2180
                        }
                      ],
                      "start": 2141,
                      "end": 2190
                    },
                    "start": 2111,
                    "end": 2190
                  }
                ],
                "start": 2101,
                "end": 2196
              },
              "expression": false,
              "start": 2098,
              "end": 2196
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2095,
            "end": 2196
          }
        ],
        "start": 2050,
        "end": 2198
      },
      "abstract": false,
      "declare": false,
      "start": 2042,
      "end": 2198
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2209,
        "end": 2213
      },
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2227,
                  "end": 2228
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2231,
                    "end": 2240
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2241,
                    "end": 2247
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2231,
                  "end": 2247
                },
                "definite": false,
                "start": 2227,
                "end": 2247
              }
            ],
            "declare": false,
            "start": 2223,
            "end": 2248
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2262,
                    "end": 2263
                  },
                  "init": null,
                  "definite": false,
                  "start": 2262,
                  "end": 2263
                }
              ],
              "declare": false,
              "start": 2258,
              "end": 2263
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2267,
              "end": 2269
            },
            "body": {
              "type": "BlockStatement",
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2285,
                        "end": 2286
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2289,
                          "end": 2298
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2299,
                          "end": 2305
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2289,
                        "end": 2305
                      },
                      "definite": false,
                      "start": 2285,
                      "end": 2305
                    }
                  ],
                  "declare": false,
                  "start": 2281,
                  "end": 2306
                },
                {
                  "type": "ExpressionStatement",
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
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2336,
                                "end": 2337
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2340,
                                "end": 2341
                              },
                              "start": 2336,
                              "end": 2341
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arguments",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2344,
                                "end": 2353
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2354,
                                "end": 2360
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2344,
                              "end": 2360
                            },
                            "start": 2336,
                            "end": 2360
                          },
                          "start": 2329,
                          "end": 2361
                        }
                      ],
                      "start": 2327,
                      "end": 2363
                    },
                    "expression": false,
                    "start": 2316,
                    "end": 2363
                  },
                  "directive": null,
                  "start": 2315,
                  "end": 2365
                }
              ],
              "start": 2271,
              "end": 2371
            },
            "start": 2253,
            "end": 2371
          }
        ],
        "start": 2217,
        "end": 2373
      },
      "expression": false,
      "start": 2200,
      "end": 2373
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2373
}
```
