__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2360,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 493,
      "init": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 14,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 13,
              "end": 14,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 16,
        "end": 21,
        "left": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 20,
          "end": 21,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 23,
        "end": 26,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 25,
          "end": 26,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 28,
        "end": 493,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 34,
            "end": 40,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 38,
                "end": 39,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 45,
            "end": 71,
            "expression": {
              "type": "FunctionExpression",
              "start": 46,
              "end": 69,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 69,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 59,
                    "end": 67,
                    "argument": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 76,
            "end": 133,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 86,
                "end": 92,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 90,
                    "end": 91,
                    "id": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 91,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "let",
                "declare": false
              },
              {
                "type": "ExpressionStatement",
                "start": 101,
                "end": 127,
                "expression": {
                  "type": "FunctionExpression",
                  "start": 102,
                  "end": 125,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 113,
                    "end": 125,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 115,
                        "end": 123,
                        "argument": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 123,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "directive": null
              }
            ]
          },
          {
            "type": "TryStatement",
            "start": 139,
            "end": 218,
            "block": {
              "type": "BlockStatement",
              "start": 143,
              "end": 146,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 151,
              "end": 218,
              "param": {
                "type": "Identifier",
                "start": 158,
                "end": 159,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 218,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 171,
                    "end": 177,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 175,
                        "end": 176,
                        "id": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 176,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 186,
                    "end": 212,
                    "expression": {
                      "type": "FunctionExpression",
                      "start": 187,
                      "end": 210,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 198,
                        "end": 210,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 200,
                            "end": 208,
                            "argument": {
                              "type": "Identifier",
                              "start": 207,
                              "end": 208,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              }
            },
            "finalizer": null
          },
          {
            "type": "SwitchStatement",
            "start": 224,
            "end": 334,
            "discriminant": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 245,
                "end": 328,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 265,
                    "end": 271,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 269,
                        "end": 270,
                        "id": {
                          "type": "Identifier",
                          "start": 269,
                          "end": 270,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 284,
                    "end": 310,
                    "expression": {
                      "type": "FunctionExpression",
                      "start": 285,
                      "end": 308,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 296,
                        "end": 308,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 298,
                            "end": 306,
                            "argument": {
                              "type": "Identifier",
                              "start": 305,
                              "end": 306,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 322,
                    "end": 328,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 250,
                  "end": 251,
                  "value": 1,
                  "raw": "1"
                }
              }
            ]
          },
          {
            "type": "WhileStatement",
            "start": 344,
            "end": 416,
            "test": {
              "type": "BinaryExpression",
              "start": 351,
              "end": 357,
              "left": {
                "type": "Literal",
                "start": 351,
                "end": 352,
                "value": 1,
                "raw": "1"
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 356,
                "end": 357,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 359,
              "end": 416,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 369,
                  "end": 375,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 373,
                      "end": 374,
                      "id": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 384,
                  "end": 410,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 385,
                    "end": 408,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 396,
                      "end": 408,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 398,
                          "end": 406,
                          "argument": {
                            "type": "Identifier",
                            "start": 405,
                            "end": 406,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 426,
            "end": 491,
            "id": {
              "type": "Identifier",
              "start": 432,
              "end": 433,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 434,
              "end": 491,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 444,
                  "end": 485,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 445,
                    "end": 485,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 448,
                      "end": 485,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 462,
                          "end": 475,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 469,
                            "end": 474,
                            "left": {
                              "type": "Identifier",
                              "start": 469,
                              "end": 470,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "+",
                            "right": {
                              "type": "Literal",
                              "start": 473,
                              "end": 474,
                              "value": 1,
                              "raw": "1"
                            }
                          }
                        }
                      ]
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
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 495,
      "end": 524,
      "id": {
        "type": "Identifier",
        "start": 512,
        "end": 515,
        "name": "use",
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
          "start": 516,
          "end": 522,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 517,
            "end": 522,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 519,
              "end": 522
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 526,
      "end": 1456,
      "id": {
        "type": "Identifier",
        "start": 535,
        "end": 538,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 541,
        "end": 1456,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 547,
            "end": 1399,
            "body": {
              "type": "ForOfStatement",
              "start": 555,
              "end": 1399,
              "await": false,
              "left": {
                "type": "VariableDeclaration",
                "start": 560,
                "end": 565,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 564,
                    "end": 565,
                    "id": {
                      "type": "Identifier",
                      "start": 564,
                      "end": 565,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "let",
                "declare": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 569,
                "end": 571,
                "elements": []
              },
              "body": {
                "type": "BlockStatement",
                "start": 573,
                "end": 1399,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 592,
                    "end": 635,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 596,
                      "end": 603,
                      "left": {
                        "type": "Identifier",
                        "start": 596,
                        "end": 597,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 602,
                        "end": 603,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 605,
                      "end": 635,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 619,
                          "end": 625,
                          "label": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 653,
                    "end": 699,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 657,
                      "end": 664,
                      "left": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 658,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 663,
                        "end": 664,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 666,
                      "end": 699,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 680,
                          "end": 689,
                          "label": {
                            "type": "Identifier",
                            "start": 686,
                            "end": 688,
                            "name": "l0",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ForOfStatement",
                    "start": 717,
                    "end": 1078,
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 722,
                      "end": 727,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 726,
                          "end": 727,
                          "id": {
                            "type": "Identifier",
                            "start": 726,
                            "end": 727,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 731,
                      "end": 733,
                      "elements": []
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 735,
                      "end": 1078,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 749,
                          "end": 779,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 753,
                              "end": 778,
                              "id": {
                                "type": "ArrayPattern",
                                "start": 753,
                                "end": 763,
                                "elements": [
                                  {
                                    "type": "ObjectPattern",
                                    "start": 754,
                                    "end": 762,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 755,
                                        "end": 756,
                                        "method": false,
                                        "shorthand": true,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 755,
                                          "end": 756,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 755,
                                          "end": 756,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 758,
                                        "end": 761,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 758,
                                          "end": 759,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 760,
                                          "end": 761,
                                          "name": "z",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ],
                                    "decorators": [],
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 766,
                                "end": 778,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 767,
                                    "end": 777,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 768,
                                        "end": 771,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 768,
                                          "end": 769,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 770,
                                          "end": 771,
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 773,
                                        "end": 776,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 773,
                                          "end": 774,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 775,
                                          "end": 776,
                                          "value": 2,
                                          "raw": "2"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
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
                          "type": "IfStatement",
                          "start": 792,
                          "end": 843,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 796,
                            "end": 803,
                            "left": {
                              "type": "Identifier",
                              "start": 796,
                              "end": 797,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 802,
                              "end": 803,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 805,
                            "end": 843,
                            "body": [
                              {
                                "type": "BreakStatement",
                                "start": 823,
                                "end": 829,
                                "label": null
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "IfStatement",
                          "start": 882,
                          "end": 936,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 886,
                            "end": 893,
                            "left": {
                              "type": "Identifier",
                              "start": 886,
                              "end": 887,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 892,
                              "end": 893,
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 895,
                            "end": 936,
                            "body": [
                              {
                                "type": "BreakStatement",
                                "start": 913,
                                "end": 922,
                                "label": {
                                  "type": "Identifier",
                                  "start": 919,
                                  "end": 921,
                                  "name": "l0",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "LabeledStatement",
                          "start": 962,
                          "end": 1032,
                          "body": {
                            "type": "IfStatement",
                            "start": 978,
                            "end": 1032,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 982,
                              "end": 989,
                              "left": {
                                "type": "Identifier",
                                "start": 982,
                                "end": 983,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "start": 988,
                                "end": 989,
                                "value": 3,
                                "raw": "3"
                              }
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 991,
                              "end": 1032,
                              "body": [
                                {
                                  "type": "BreakStatement",
                                  "start": 1009,
                                  "end": 1018,
                                  "label": {
                                    "type": "Identifier",
                                    "start": 1015,
                                    "end": 1017,
                                    "name": "l1",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          },
                          "label": {
                            "type": "Identifier",
                            "start": 962,
                            "end": 964,
                            "name": "l1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 1058,
                          "end": 1068,
                          "argument": {
                            "type": "Literal",
                            "start": 1065,
                            "end": 1067,
                            "value": 50,
                            "raw": "50"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ForOfStatement",
                    "start": 1088,
                    "end": 1366,
                    "await": false,
                    "left": {
                      "type": "VariableDeclaration",
                      "start": 1093,
                      "end": 1098,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1097,
                          "end": 1098,
                          "id": {
                            "type": "Identifier",
                            "start": 1097,
                            "end": 1098,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "start": 1102,
                      "end": 1104,
                      "elements": []
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 1106,
                      "end": 1366,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 1120,
                          "end": 1168,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1124,
                              "end": 1167,
                              "id": {
                                "type": "ArrayPattern",
                                "start": 1124,
                                "end": 1136,
                                "elements": [
                                  {
                                    "type": "ObjectPattern",
                                    "start": 1125,
                                    "end": 1135,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1126,
                                        "end": 1128,
                                        "method": false,
                                        "shorthand": true,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1126,
                                          "end": 1128,
                                          "name": "x1",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1126,
                                          "end": 1128,
                                          "name": "x1",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1130,
                                        "end": 1134,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1130,
                                          "end": 1131,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1132,
                                          "end": 1134,
                                          "name": "z1",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ],
                                    "decorators": [],
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrayExpression",
                                "start": 1139,
                                "end": 1167,
                                "elements": [
                                  {
                                    "type": "ObjectExpression",
                                    "start": 1140,
                                    "end": 1166,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1141,
                                        "end": 1145,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1141,
                                          "end": 1143,
                                          "name": "x1",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1144,
                                          "end": 1145,
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1147,
                                        "end": 1165,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1147,
                                          "end": 1148,
                                          "name": "y",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "value": {
                                          "type": "MemberExpression",
                                          "start": 1149,
                                          "end": 1165,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1149,
                                            "end": 1158,
                                            "name": "arguments",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1159,
                                            "end": 1165,
                                            "name": "length",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ]
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
                          "type": "IfStatement",
                          "start": 1181,
                          "end": 1232,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 1185,
                            "end": 1192,
                            "left": {
                              "type": "Identifier",
                              "start": 1185,
                              "end": 1186,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 1191,
                              "end": 1192,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 1194,
                            "end": 1232,
                            "body": [
                              {
                                "type": "BreakStatement",
                                "start": 1212,
                                "end": 1218,
                                "label": null
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "IfStatement",
                          "start": 1258,
                          "end": 1312,
                          "test": {
                            "type": "BinaryExpression",
                            "start": 1262,
                            "end": 1269,
                            "left": {
                              "type": "Identifier",
                              "start": 1262,
                              "end": 1263,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "start": 1268,
                              "end": 1269,
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "start": 1271,
                            "end": 1312,
                            "body": [
                              {
                                "type": "BreakStatement",
                                "start": 1289,
                                "end": 1298,
                                "label": {
                                  "type": "Identifier",
                                  "start": 1295,
                                  "end": 1297,
                                  "name": "l0",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "alternate": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1325,
                          "end": 1332,
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "start": 1325,
                            "end": 1332,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "Identifier",
                              "start": 1331,
                              "end": 1332,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeParameters": null,
                            "returnType": null
                          },
                          "directive": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 1345,
                          "end": 1356,
                          "argument": {
                            "type": "Literal",
                            "start": 1352,
                            "end": 1355,
                            "value": 100,
                            "raw": "100"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1385,
                    "end": 1393,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1385,
                      "end": 1392,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 1391,
                        "end": 1392,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  }
                ]
              }
            },
            "label": {
              "type": "Identifier",
              "start": 547,
              "end": 549,
              "name": "l0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1409,
            "end": 1416,
            "expression": {
              "type": "CallExpression",
              "start": 1409,
              "end": 1415,
              "callee": {
                "type": "Identifier",
                "start": 1409,
                "end": 1412,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1414,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1421,
            "end": 1428,
            "expression": {
              "type": "CallExpression",
              "start": 1421,
              "end": 1427,
              "callee": {
                "type": "Identifier",
                "start": 1421,
                "end": 1424,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1425,
                  "end": 1426,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1433,
            "end": 1441,
            "expression": {
              "type": "CallExpression",
              "start": 1433,
              "end": 1440,
              "callee": {
                "type": "Identifier",
                "start": 1433,
                "end": 1436,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1437,
                  "end": 1439,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1446,
            "end": 1454,
            "expression": {
              "type": "CallExpression",
              "start": 1446,
              "end": 1453,
              "callee": {
                "type": "Identifier",
                "start": 1446,
                "end": 1449,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1452,
                  "name": "z1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1458,
      "end": 2027,
      "id": {
        "type": "Identifier",
        "start": 1467,
        "end": 1471,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1474,
        "end": 2027,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1480,
            "end": 2025,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 1485,
              "end": 1490,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1489,
                  "end": 1490,
                  "id": {
                    "type": "Identifier",
                    "start": 1489,
                    "end": 1490,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 1494,
              "end": 1496,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 1498,
              "end": 2025,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1508,
                  "end": 1611,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1512,
                    "end": 1519,
                    "left": {
                      "type": "Identifier",
                      "start": 1512,
                      "end": 1513,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1518,
                      "end": 1519,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1521,
                    "end": 1551,
                    "body": [
                      {
                        "type": "BreakStatement",
                        "start": 1535,
                        "end": 1541,
                        "label": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "start": 1565,
                    "end": 1611,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1569,
                      "end": 1576,
                      "left": {
                        "type": "Identifier",
                        "start": 1569,
                        "end": 1570,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 1575,
                        "end": 1576,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1578,
                      "end": 1611,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 1592,
                          "end": 1601,
                          "label": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                },
                {
                  "type": "WhileStatement",
                  "start": 1629,
                  "end": 1773,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1636,
                    "end": 1643,
                    "left": {
                      "type": "Literal",
                      "start": 1636,
                      "end": 1637,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1642,
                      "end": 1643,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 1645,
                    "end": 1773,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 1659,
                        "end": 1763,
                        "test": {
                          "type": "Identifier",
                          "start": 1663,
                          "end": 1664,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1666,
                          "end": 1704,
                          "body": [
                            {
                              "type": "BreakStatement",
                              "start": 1684,
                              "end": 1690,
                              "label": null
                            }
                          ]
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "start": 1722,
                          "end": 1763,
                          "body": [
                            {
                              "type": "ContinueStatement",
                              "start": 1740,
                              "end": 1749,
                              "label": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "SwitchStatement",
                  "start": 1791,
                  "end": 1869,
                  "discriminant": {
                    "type": "Identifier",
                    "start": 1798,
                    "end": 1799,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 1815,
                      "end": 1829,
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "start": 1823,
                          "end": 1829,
                          "label": null
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 1820,
                        "end": 1821,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 1842,
                      "end": 1859,
                      "consequent": [
                        {
                          "type": "ContinueStatement",
                          "start": 1850,
                          "end": 1859,
                          "label": null
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 1847,
                        "end": 1848,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  ]
                },
                {
                  "type": "ForOfStatement",
                  "start": 1887,
                  "end": 2019,
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 1892,
                    "end": 1897,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1896,
                        "end": 1897,
                        "id": {
                          "type": "Identifier",
                          "start": 1896,
                          "end": 1897,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "kind": "let",
                    "declare": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 1901,
                    "end": 1903,
                    "elements": []
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 1905,
                    "end": 2019,
                    "body": [
                      {
                        "type": "SwitchStatement",
                        "start": 1919,
                        "end": 2009,
                        "discriminant": {
                          "type": "Identifier",
                          "start": 1926,
                          "end": 1927,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "start": 1947,
                            "end": 1961,
                            "consequent": [
                              {
                                "type": "BreakStatement",
                                "start": 1955,
                                "end": 1961,
                                "label": null
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "start": 1952,
                              "end": 1953,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          {
                            "type": "SwitchCase",
                            "start": 1978,
                            "end": 1995,
                            "consequent": [
                              {
                                "type": "ContinueStatement",
                                "start": 1986,
                                "end": 1995,
                                "label": null
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "start": 1983,
                              "end": 1984,
                              "value": 2,
                              "raw": "2"
                            }
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 2029,
      "end": 2185,
      "id": {
        "type": "Identifier",
        "start": 2035,
        "end": 2036,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2037,
        "end": 2185,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2043,
            "end": 2077,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2043,
              "end": 2054,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2054,
              "end": 2077,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 2055,
                  "end": 2072,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 2063,
                    "end": 2072,
                    "name": "N",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2064,
                      "end": 2072,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2066,
                        "end": 2072
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 2074,
                "end": 2077,
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
          },
          {
            "type": "MethodDefinition",
            "start": 2082,
            "end": 2183,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2082,
              "end": 2085,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2085,
              "end": 2183,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2088,
                "end": 2183,
                "body": [
                  {
                    "type": "ForStatement",
                    "start": 2098,
                    "end": 2177,
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 2103,
                      "end": 2112,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 2107,
                          "end": 2112,
                          "id": {
                            "type": "Identifier",
                            "start": 2107,
                            "end": 2108,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 2111,
                            "end": 2112,
                            "value": 0,
                            "raw": "0"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "let",
                      "declare": false
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 2114,
                      "end": 2121,
                      "left": {
                        "type": "Identifier",
                        "start": 2114,
                        "end": 2115,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 2118,
                        "end": 2121,
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 2123,
                      "end": 2126,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 2123,
                        "end": 2124,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 2128,
                      "end": 2177,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 2142,
                          "end": 2167,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2146,
                              "end": 2166,
                              "id": {
                                "type": "Identifier",
                                "start": 2146,
                                "end": 2147,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "start": 2150,
                                "end": 2166,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BinaryExpression",
                                  "start": 2156,
                                  "end": 2166,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 2156,
                                    "end": 2162,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2156,
                                      "end": 2160
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2161,
                                      "end": 2162,
                                      "name": "N",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 2165,
                                    "end": 2166,
                                    "name": "i",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeParameters": null,
                                "returnType": null
                              },
                              "definite": false
                            }
                          ],
                          "kind": "let",
                          "declare": false
                        }
                      ]
                    }
                  }
                ]
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
      "type": "FunctionDeclaration",
      "start": 2187,
      "end": 2360,
      "id": {
        "type": "Identifier",
        "start": 2196,
        "end": 2200,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2204,
        "end": 2360,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2210,
            "end": 2235,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2214,
                "end": 2234,
                "id": {
                  "type": "Identifier",
                  "start": 2214,
                  "end": 2215,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2218,
                  "end": 2234,
                  "object": {
                    "type": "Identifier",
                    "start": 2218,
                    "end": 2227,
                    "name": "arguments",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2228,
                    "end": 2234,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 2240,
            "end": 2358,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2245,
              "end": 2250,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2249,
                  "end": 2250,
                  "id": {
                    "type": "Identifier",
                    "start": 2249,
                    "end": 2250,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 2254,
              "end": 2256,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2258,
              "end": 2358,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2268,
                  "end": 2293,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2272,
                      "end": 2292,
                      "id": {
                        "type": "Identifier",
                        "start": 2272,
                        "end": 2273,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2276,
                        "end": 2292,
                        "object": {
                          "type": "Identifier",
                          "start": 2276,
                          "end": 2285,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2286,
                          "end": 2292,
                          "name": "length",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2302,
                  "end": 2352,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2303,
                    "end": 2350,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2314,
                      "end": 2350,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2316,
                          "end": 2348,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2323,
                            "end": 2347,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 2323,
                              "end": 2328,
                              "left": {
                                "type": "Identifier",
                                "start": 2323,
                                "end": 2324,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 2327,
                                "end": 2328,
                                "name": "z",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "start": 2331,
                              "end": 2347,
                              "object": {
                                "type": "Identifier",
                                "start": 2331,
                                "end": 2340,
                                "name": "arguments",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2341,
                                "end": 2347,
                                "name": "length",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
