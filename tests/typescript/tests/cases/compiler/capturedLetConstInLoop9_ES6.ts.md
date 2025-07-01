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
                              "start": 1331,
                              "end": 1332
                            },
                            "id": null,
                            "generator": false,
                            "start": 1325,
                            "end": 1332
                          },
                          "directive": null,
                          "start": 1325,
                          "end": 1332
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 100,
                            "raw": "100",
                            "start": 1352,
                            "end": 1355
                          },
                          "start": 1345,
                          "end": 1356
                        }
                      ],
                      "start": 1106,
                      "end": 1366
                    },
                    "start": 1088,
                    "end": 1366
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
                        "start": 1391,
                        "end": 1392
                      },
                      "id": null,
                      "generator": false,
                      "start": 1385,
                      "end": 1392
                    },
                    "directive": null,
                    "start": 1385,
                    "end": 1393
                  }
                ],
                "start": 573,
                "end": 1399
              },
              "start": 555,
              "end": 1399
            },
            "start": 547,
            "end": 1399
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
                "start": 1409,
                "end": 1412
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1413,
                  "end": 1414
                }
              ],
              "optional": false,
              "start": 1409,
              "end": 1415
            },
            "directive": null,
            "start": 1409,
            "end": 1416
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
                "start": 1421,
                "end": 1424
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1425,
                  "end": 1426
                }
              ],
              "optional": false,
              "start": 1421,
              "end": 1427
            },
            "directive": null,
            "start": 1421,
            "end": 1428
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
                "start": 1433,
                "end": 1436
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1437,
                  "end": 1439
                }
              ],
              "optional": false,
              "start": 1433,
              "end": 1440
            },
            "directive": null,
            "start": 1433,
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
                  "name": "z1",
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
          }
        ],
        "start": 541,
        "end": 1456
      },
      "expression": false,
      "start": 526,
      "end": 1456
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1467,
        "end": 1471
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
                    "start": 1489,
                    "end": 1490
                  },
                  "init": null,
                  "definite": false,
                  "start": 1489,
                  "end": 1490
                }
              ],
              "declare": false,
              "start": 1485,
              "end": 1490
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1494,
              "end": 1496
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
                      "start": 1512,
                      "end": 1513
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1518,
                      "end": 1519
                    },
                    "start": 1512,
                    "end": 1519
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 1535,
                        "end": 1541
                      }
                    ],
                    "start": 1521,
                    "end": 1551
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
                        "start": 1569,
                        "end": 1570
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1575,
                        "end": 1576
                      },
                      "start": 1569,
                      "end": 1576
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": null,
                          "start": 1592,
                          "end": 1601
                        }
                      ],
                      "start": 1578,
                      "end": 1611
                    },
                    "alternate": null,
                    "start": 1565,
                    "end": 1611
                  },
                  "start": 1508,
                  "end": 1611
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1636,
                      "end": 1637
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1642,
                      "end": 1643
                    },
                    "start": 1636,
                    "end": 1643
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
                          "start": 1663,
                          "end": 1664
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 1684,
                              "end": 1690
                            }
                          ],
                          "start": 1666,
                          "end": 1704
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ContinueStatement",
                              "label": null,
                              "start": 1740,
                              "end": 1749
                            }
                          ],
                          "start": 1722,
                          "end": 1763
                        },
                        "start": 1659,
                        "end": 1763
                      }
                    ],
                    "start": 1645,
                    "end": 1773
                  },
                  "start": 1629,
                  "end": 1773
                },
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1798,
                    "end": 1799
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1820,
                        "end": 1821
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 1823,
                          "end": 1829
                        }
                      ],
                      "start": 1815,
                      "end": 1829
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1847,
                        "end": 1848
                      },
                      "consequent": [
                        {
                          "type": "ContinueStatement",
                          "label": null,
                          "start": 1850,
                          "end": 1859
                        }
                      ],
                      "start": 1842,
                      "end": 1859
                    }
                  ],
                  "start": 1791,
                  "end": 1869
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
                          "start": 1896,
                          "end": 1897
                        },
                        "init": null,
                        "definite": false,
                        "start": 1896,
                        "end": 1897
                      }
                    ],
                    "declare": false,
                    "start": 1892,
                    "end": 1897
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 1901,
                    "end": 1903
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
                          "start": 1926,
                          "end": 1927
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1952,
                              "end": 1953
                            },
                            "consequent": [
                              {
                                "type": "BreakStatement",
                                "label": null,
                                "start": 1955,
                                "end": 1961
                              }
                            ],
                            "start": 1947,
                            "end": 1961
                          },
                          {
                            "type": "SwitchCase",
                            "test": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 1983,
                              "end": 1984
                            },
                            "consequent": [
                              {
                                "type": "ContinueStatement",
                                "label": null,
                                "start": 1986,
                                "end": 1995
                              }
                            ],
                            "start": 1978,
                            "end": 1995
                          }
                        ],
                        "start": 1919,
                        "end": 2009
                      }
                    ],
                    "start": 1905,
                    "end": 2019
                  },
                  "start": 1887,
                  "end": 2019
                }
              ],
              "start": 1498,
              "end": 2025
            },
            "start": 1480,
            "end": 2025
          }
        ],
        "start": 1474,
        "end": 2027
      },
      "expression": false,
      "start": 1458,
      "end": 2027
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
        "start": 2035,
        "end": 2036
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
              "start": 2043,
              "end": 2054
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
                        "start": 2066,
                        "end": 2072
                      },
                      "start": 2064,
                      "end": 2072
                    },
                    "start": 2063,
                    "end": 2072
                  },
                  "readonly": false,
                  "static": false,
                  "start": 2055,
                  "end": 2072
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2074,
                "end": 2077
              },
              "expression": false,
              "start": 2054,
              "end": 2077
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2043,
            "end": 2077
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
              "start": 2082,
              "end": 2085
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
                            "start": 2107,
                            "end": 2108
                          },
                          "init": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2111,
                            "end": 2112
                          },
                          "definite": false,
                          "start": 2107,
                          "end": 2112
                        }
                      ],
                      "declare": false,
                      "start": 2103,
                      "end": 2112
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2114,
                        "end": 2115
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 100,
                        "raw": "100",
                        "start": 2118,
                        "end": 2121
                      },
                      "start": 2114,
                      "end": 2121
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
                        "start": 2123,
                        "end": 2124
                      },
                      "start": 2123,
                      "end": 2126
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
                                "start": 2146,
                                "end": 2147
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
                                      "start": 2156,
                                      "end": 2160
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "N",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2161,
                                      "end": 2162
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2156,
                                    "end": 2162
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2165,
                                    "end": 2166
                                  },
                                  "start": 2156,
                                  "end": 2166
                                },
                                "id": null,
                                "generator": false,
                                "start": 2150,
                                "end": 2166
                              },
                              "definite": false,
                              "start": 2146,
                              "end": 2166
                            }
                          ],
                          "declare": false,
                          "start": 2142,
                          "end": 2167
                        }
                      ],
                      "start": 2128,
                      "end": 2177
                    },
                    "start": 2098,
                    "end": 2177
                  }
                ],
                "start": 2088,
                "end": 2183
              },
              "expression": false,
              "start": 2085,
              "end": 2183
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2082,
            "end": 2183
          }
        ],
        "start": 2037,
        "end": 2185
      },
      "abstract": false,
      "declare": false,
      "start": 2029,
      "end": 2185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 2196,
        "end": 2200
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
                  "start": 2214,
                  "end": 2215
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2218,
                    "end": 2227
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2228,
                    "end": 2234
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2218,
                  "end": 2234
                },
                "definite": false,
                "start": 2214,
                "end": 2234
              }
            ],
            "declare": false,
            "start": 2210,
            "end": 2235
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
                    "start": 2249,
                    "end": 2250
                  },
                  "init": null,
                  "definite": false,
                  "start": 2249,
                  "end": 2250
                }
              ],
              "declare": false,
              "start": 2245,
              "end": 2250
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2254,
              "end": 2256
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
                        "start": 2272,
                        "end": 2273
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2276,
                          "end": 2285
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2286,
                          "end": 2292
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2276,
                        "end": 2292
                      },
                      "definite": false,
                      "start": 2272,
                      "end": 2292
                    }
                  ],
                  "declare": false,
                  "start": 2268,
                  "end": 2293
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
                                "start": 2323,
                                "end": 2324
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2327,
                                "end": 2328
                              },
                              "start": 2323,
                              "end": 2328
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
                                "start": 2331,
                                "end": 2340
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2341,
                                "end": 2347
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2331,
                              "end": 2347
                            },
                            "start": 2323,
                            "end": 2347
                          },
                          "start": 2316,
                          "end": 2348
                        }
                      ],
                      "start": 2314,
                      "end": 2350
                    },
                    "expression": false,
                    "start": 2303,
                    "end": 2350
                  },
                  "directive": null,
                  "start": 2302,
                  "end": 2352
                }
              ],
              "start": 2258,
              "end": 2358
            },
            "start": 2240,
            "end": 2358
          }
        ],
        "start": 2204,
        "end": 2360
      },
      "expression": false,
      "start": 2187,
      "end": 2360
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2360
}
```
