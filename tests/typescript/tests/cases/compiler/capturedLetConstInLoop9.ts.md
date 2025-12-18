__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5,
    "end": 8,
    "range": [
      5,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15,
    "range": [
      14,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 16,
    "end": 17,
    "range": [
      16,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 23,
    "end": 25,
    "range": [
      23,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 34,
    "end": 37,
    "range": [
      34,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54,
    "range": [
      46,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 59,
    "end": 65,
    "range": [
      59,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 86,
    "end": 89,
    "range": [
      86,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110,
    "range": [
      102,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 139,
    "end": 142,
    "range": [
      139,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 151,
    "end": 156,
    "range": [
      151,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 171,
    "end": 174,
    "range": [
      171,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 187,
    "end": 195,
    "range": [
      187,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 200,
    "end": 206,
    "range": [
      200,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 224,
    "end": 230,
    "range": [
      224,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 245,
    "end": 249,
    "range": [
      245,
      249
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 265,
    "end": 268,
    "range": [
      265,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 285,
    "end": 293,
    "range": [
      285,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 298,
    "end": 304,
    "range": [
      298,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 322,
    "end": 327,
    "range": [
      322,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 344,
    "end": 349,
    "range": [
      344,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 353,
    "end": 355,
    "range": [
      353,
      355
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 356,
    "end": 357,
    "range": [
      356,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 369,
    "end": 372,
    "range": [
      369,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 385,
    "end": 393,
    "range": [
      385,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 398,
    "end": 404,
    "range": [
      398,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 426,
    "end": 431,
    "range": [
      426,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 462,
    "end": 468,
    "range": [
      462,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 495,
    "end": 502,
    "range": [
      495,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 503,
    "end": 511,
    "range": [
      503,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 512,
    "end": 515,
    "range": [
      512,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 519,
    "end": 522,
    "range": [
      519,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 526,
    "end": 534,
    "range": [
      526,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 535,
    "end": 538,
    "range": [
      535,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 547,
    "end": 549,
    "range": [
      547,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 555,
    "end": 558,
    "range": [
      555,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 560,
    "end": 563,
    "range": [
      560,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 566,
    "end": 568,
    "range": [
      566,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 592,
    "end": 594,
    "range": [
      592,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 598,
    "end": 601,
    "range": [
      598,
      601
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 619,
    "end": 624,
    "range": [
      619,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 653,
    "end": 655,
    "range": [
      653,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 659,
    "end": 662,
    "range": [
      659,
      662
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 680,
    "end": 685,
    "range": [
      680,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 686,
    "end": 688,
    "range": [
      686,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 717,
    "end": 720,
    "range": [
      717,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 722,
    "end": 725,
    "range": [
      722,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 728,
    "end": 730,
    "range": [
      728,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 749,
    "end": 752,
    "range": [
      749,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 792,
    "end": 794,
    "range": [
      792,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 798,
    "end": 801,
    "range": [
      798,
      801
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 823,
    "end": 828,
    "range": [
      823,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 882,
    "end": 884,
    "range": [
      882,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 888,
    "end": 891,
    "range": [
      888,
      891
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 913,
    "end": 918,
    "range": [
      913,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 919,
    "end": 921,
    "range": [
      919,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 962,
    "end": 964,
    "range": [
      962,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 978,
    "end": 980,
    "range": [
      978,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 984,
    "end": 987,
    "range": [
      984,
      987
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1009,
    "end": 1014,
    "range": [
      1009,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 1015,
    "end": 1017,
    "range": [
      1015,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018,
    "range": [
      1017,
      1018
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1058,
    "end": 1064,
    "range": [
      1058,
      1064
    ]
  },
  {
    "type": "Numeric",
    "value": "50",
    "start": 1065,
    "end": 1067,
    "range": [
      1065,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1088,
    "end": 1091,
    "range": [
      1088,
      1091
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1093,
    "end": 1096,
    "range": [
      1093,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1099,
    "end": 1101,
    "range": [
      1099,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1103,
    "end": 1104,
    "range": [
      1103,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1120,
    "end": 1123,
    "range": [
      1120,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1125,
    "end": 1126,
    "range": [
      1125,
      1126
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1126,
    "end": 1128,
    "range": [
      1126,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132,
    "range": [
      1131,
      1132
    ]
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 1132,
    "end": 1134,
    "range": [
      1132,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1141,
    "end": 1143,
    "range": [
      1141,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1145,
    "end": 1146,
    "range": [
      1145,
      1146
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1147,
    "end": 1148,
    "range": [
      1147,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 1149,
    "end": 1158,
    "range": [
      1149,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1159,
    "end": 1165,
    "range": [
      1159,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1181,
    "end": 1183,
    "range": [
      1181,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1187,
    "end": 1190,
    "range": [
      1187,
      1190
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1212,
    "end": 1217,
    "range": [
      1212,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1258,
    "end": 1260,
    "range": [
      1258,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1264,
    "end": 1267,
    "range": [
      1264,
      1267
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1289,
    "end": 1294,
    "range": [
      1289,
      1294
    ]
  },
  {
    "type": "Identifier",
    "value": "l0",
    "start": 1295,
    "end": 1297,
    "range": [
      1295,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1341,
    "end": 1343,
    "range": [
      1341,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1358,
    "end": 1364,
    "range": [
      1358,
      1364
    ]
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1365,
    "end": 1368,
    "range": [
      1365,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1401,
    "end": 1403,
    "range": [
      1401,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406,
    "range": [
      1405,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1422,
    "end": 1425,
    "range": [
      1422,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1434,
    "end": 1437,
    "range": [
      1434,
      1437
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1446,
    "end": 1449,
    "range": [
      1446,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1450,
    "end": 1452,
    "range": [
      1450,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 1459,
    "end": 1462,
    "range": [
      1459,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "z1",
    "start": 1463,
    "end": 1465,
    "range": [
      1463,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1466,
    "end": 1467,
    "range": [
      1466,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1471,
    "end": 1479,
    "range": [
      1471,
      1479
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1480,
    "end": 1484,
    "range": [
      1480,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1493,
    "end": 1496,
    "range": [
      1493,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1498,
    "end": 1501,
    "range": [
      1498,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1504,
    "end": 1506,
    "range": [
      1504,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1521,
    "end": 1523,
    "range": [
      1521,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1524,
    "end": 1525,
    "range": [
      1524,
      1525
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1527,
    "end": 1530,
    "range": [
      1527,
      1530
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1534,
    "end": 1535,
    "range": [
      1534,
      1535
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1548,
    "end": 1553,
    "range": [
      1548,
      1553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1573,
    "end": 1577,
    "range": [
      1573,
      1577
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1578,
    "end": 1580,
    "range": [
      1578,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1581,
    "end": 1582,
    "range": [
      1581,
      1582
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1584,
    "end": 1587,
    "range": [
      1584,
      1587
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1589,
    "end": 1590,
    "range": [
      1589,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1605,
    "end": 1613,
    "range": [
      1605,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1642,
    "end": 1647,
    "range": [
      1642,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1651,
    "end": 1654,
    "range": [
      1651,
      1654
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1672,
    "end": 1674,
    "range": [
      1672,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1697,
    "end": 1702,
    "range": [
      1697,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1730,
    "end": 1734,
    "range": [
      1730,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1735,
    "end": 1736,
    "range": [
      1735,
      1736
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1753,
    "end": 1761,
    "range": [
      1753,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1804,
    "end": 1810,
    "range": [
      1804,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1828,
    "end": 1832,
    "range": [
      1828,
      1832
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1836,
    "end": 1841,
    "range": [
      1836,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1855,
    "end": 1859,
    "range": [
      1855,
      1859
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1863,
    "end": 1871,
    "range": [
      1863,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 1900,
    "end": 1903,
    "range": [
      1900,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1905,
    "end": 1908,
    "range": [
      1905,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 1911,
    "end": 1913,
    "range": [
      1911,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1932,
    "end": 1938,
    "range": [
      1932,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1942,
    "end": 1943,
    "range": [
      1942,
      1943
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1960,
    "end": 1964,
    "range": [
      1960,
      1964
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 1968,
    "end": 1973,
    "range": [
      1968,
      1973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1991,
    "end": 1995,
    "range": [
      1991,
      1995
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Keyword",
    "value": "continue",
    "start": 1999,
    "end": 2007,
    "range": [
      1999,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2042,
    "end": 2047,
    "range": [
      2042,
      2047
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2056,
    "end": 2067,
    "range": [
      2056,
      2067
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2068,
    "end": 2075,
    "range": [
      2068,
      2075
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2079,
    "end": 2085,
    "range": [
      2079,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2085,
    "end": 2086,
    "range": [
      2085,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2087,
    "end": 2088,
    "range": [
      2087,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2089,
    "end": 2090,
    "range": [
      2089,
      2090
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2095,
    "end": 2098,
    "range": [
      2095,
      2098
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2111,
    "end": 2114,
    "range": [
      2111,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2116,
    "end": 2119,
    "range": [
      2116,
      2119
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2120,
    "end": 2121,
    "range": [
      2120,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 2131,
    "end": 2134,
    "range": [
      2131,
      2134
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 2137,
    "end": 2139,
    "range": [
      2137,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2141,
    "end": 2142,
    "range": [
      2141,
      2142
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2155,
    "end": 2158,
    "range": [
      2155,
      2158
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2161,
    "end": 2162,
    "range": [
      2161,
      2162
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2166,
    "end": 2168,
    "range": [
      2166,
      2168
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2169,
    "end": 2173,
    "range": [
      2169,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2195,
    "end": 2196,
    "range": [
      2195,
      2196
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2200,
    "end": 2208,
    "range": [
      2200,
      2208
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 2209,
    "end": 2213,
    "range": [
      2209,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2223,
    "end": 2226,
    "range": [
      2223,
      2226
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2231,
    "end": 2240,
    "range": [
      2231,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2241,
    "end": 2247,
    "range": [
      2241,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 2253,
    "end": 2256,
    "range": [
      2253,
      2256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2258,
    "end": 2261,
    "range": [
      2258,
      2261
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 2264,
    "end": 2266,
    "range": [
      2264,
      2266
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2267,
    "end": 2268,
    "range": [
      2267,
      2268
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2269,
    "end": 2270,
    "range": [
      2269,
      2270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2281,
    "end": 2284,
    "range": [
      2281,
      2284
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2289,
    "end": 2298,
    "range": [
      2289,
      2298
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2298,
    "end": 2299,
    "range": [
      2298,
      2299
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2299,
    "end": 2305,
    "range": [
      2299,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2316,
    "end": 2324,
    "range": [
      2316,
      2324
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2324,
    "end": 2325,
    "range": [
      2324,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2327,
    "end": 2328,
    "range": [
      2327,
      2328
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2329,
    "end": 2335,
    "range": [
      2329,
      2335
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2338,
    "end": 2339,
    "range": [
      2338,
      2339
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2344,
    "end": 2353,
    "range": [
      2344,
      2353
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2353,
    "end": 2354,
    "range": [
      2353,
      2354
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2354,
    "end": 2360,
    "range": [
      2354,
      2360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2360,
    "end": 2361,
    "range": [
      2360,
      2361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2362,
    "end": 2363,
    "range": [
      2362,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2363,
    "end": 2364,
    "range": [
      2363,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  }
]
```
