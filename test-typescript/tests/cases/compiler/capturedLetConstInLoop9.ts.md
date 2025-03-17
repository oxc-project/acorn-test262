__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2373,
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
      "end": 1469,
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
        "end": 1469,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 547,
            "end": 1412,
            "body": {
              "type": "ForOfStatement",
              "start": 555,
              "end": 1412,
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
                "end": 1412,
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
                    "end": 1379,
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
                      "end": 1379,
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
                          "start": 1338,
                          "end": 1345,
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "start": 1338,
                            "end": 1345,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "Identifier",
                              "start": 1344,
                              "end": 1345,
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
                          "start": 1358,
                          "end": 1369,
                          "argument": {
                            "type": "Literal",
                            "start": 1365,
                            "end": 1368,
                            "value": 100,
                            "raw": "100"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1398,
                    "end": 1406,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 1398,
                      "end": 1405,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 1404,
                        "end": 1405,
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
            "start": 1422,
            "end": 1429,
            "expression": {
              "type": "CallExpression",
              "start": 1422,
              "end": 1428,
              "callee": {
                "type": "Identifier",
                "start": 1422,
                "end": 1425,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1426,
                  "end": 1427,
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
            "start": 1434,
            "end": 1441,
            "expression": {
              "type": "CallExpression",
              "start": 1434,
              "end": 1440,
              "callee": {
                "type": "Identifier",
                "start": 1434,
                "end": 1437,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1438,
                  "end": 1439,
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
            "start": 1459,
            "end": 1467,
            "expression": {
              "type": "CallExpression",
              "start": 1459,
              "end": 1466,
              "callee": {
                "type": "Identifier",
                "start": 1459,
                "end": 1462,
                "name": "use",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1463,
                  "end": 1465,
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
      "start": 1471,
      "end": 2040,
      "id": {
        "type": "Identifier",
        "start": 1480,
        "end": 1484,
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
        "start": 1487,
        "end": 2040,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1493,
            "end": 2038,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 1498,
              "end": 1503,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1502,
                  "end": 1503,
                  "id": {
                    "type": "Identifier",
                    "start": 1502,
                    "end": 1503,
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
              "start": 1507,
              "end": 1509,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 1511,
              "end": 2038,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1521,
                  "end": 1624,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1525,
                    "end": 1532,
                    "left": {
                      "type": "Identifier",
                      "start": 1525,
                      "end": 1526,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1531,
                      "end": 1532,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1534,
                    "end": 1564,
                    "body": [
                      {
                        "type": "BreakStatement",
                        "start": 1548,
                        "end": 1554,
                        "label": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "start": 1578,
                    "end": 1624,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1582,
                      "end": 1589,
                      "left": {
                        "type": "Identifier",
                        "start": 1582,
                        "end": 1583,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "start": 1588,
                        "end": 1589,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1591,
                      "end": 1624,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 1605,
                          "end": 1614,
                          "label": null
                        }
                      ]
                    },
                    "alternate": null
                  }
                },
                {
                  "type": "WhileStatement",
                  "start": 1642,
                  "end": 1786,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1649,
                    "end": 1656,
                    "left": {
                      "type": "Literal",
                      "start": 1649,
                      "end": 1650,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1655,
                      "end": 1656,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 1658,
                    "end": 1786,
                    "body": [
                      {
                        "type": "IfStatement",
                        "start": 1672,
                        "end": 1776,
                        "test": {
                          "type": "Identifier",
                          "start": 1676,
                          "end": 1677,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "start": 1679,
                          "end": 1717,
                          "body": [
                            {
                              "type": "BreakStatement",
                              "start": 1697,
                              "end": 1703,
                              "label": null
                            }
                          ]
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "start": 1735,
                          "end": 1776,
                          "body": [
                            {
                              "type": "ContinueStatement",
                              "start": 1753,
                              "end": 1762,
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
                  "start": 1804,
                  "end": 1882,
                  "discriminant": {
                    "type": "Identifier",
                    "start": 1811,
                    "end": 1812,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 1828,
                      "end": 1842,
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "start": 1836,
                          "end": 1842,
                          "label": null
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 1833,
                        "end": 1834,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    {
                      "type": "SwitchCase",
                      "start": 1855,
                      "end": 1872,
                      "consequent": [
                        {
                          "type": "ContinueStatement",
                          "start": 1863,
                          "end": 1872,
                          "label": null
                        }
                      ],
                      "test": {
                        "type": "Literal",
                        "start": 1860,
                        "end": 1861,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  ]
                },
                {
                  "type": "ForOfStatement",
                  "start": 1900,
                  "end": 2032,
                  "await": false,
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 1905,
                    "end": 1910,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1909,
                        "end": 1910,
                        "id": {
                          "type": "Identifier",
                          "start": 1909,
                          "end": 1910,
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
                    "start": 1914,
                    "end": 1916,
                    "elements": []
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 1918,
                    "end": 2032,
                    "body": [
                      {
                        "type": "SwitchStatement",
                        "start": 1932,
                        "end": 2022,
                        "discriminant": {
                          "type": "Identifier",
                          "start": 1939,
                          "end": 1940,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "start": 1960,
                            "end": 1974,
                            "consequent": [
                              {
                                "type": "BreakStatement",
                                "start": 1968,
                                "end": 1974,
                                "label": null
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "start": 1965,
                              "end": 1966,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          {
                            "type": "SwitchCase",
                            "start": 1991,
                            "end": 2008,
                            "consequent": [
                              {
                                "type": "ContinueStatement",
                                "start": 1999,
                                "end": 2008,
                                "label": null
                              }
                            ],
                            "test": {
                              "type": "Literal",
                              "start": 1996,
                              "end": 1997,
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
      "start": 2042,
      "end": 2198,
      "id": {
        "type": "Identifier",
        "start": 2048,
        "end": 2049,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 2050,
        "end": 2198,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2056,
            "end": 2090,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2056,
              "end": 2067,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 2067,
              "end": 2090,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 2068,
                  "end": 2085,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 2076,
                    "end": 2085,
                    "name": "N",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2077,
                      "end": 2085,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2079,
                        "end": 2085
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
                "start": 2087,
                "end": 2090,
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
            "start": 2095,
            "end": 2196,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2095,
              "end": 2098,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2098,
              "end": 2196,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2101,
                "end": 2196,
                "body": [
                  {
                    "type": "ForStatement",
                    "start": 2111,
                    "end": 2190,
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 2116,
                      "end": 2125,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 2120,
                          "end": 2125,
                          "id": {
                            "type": "Identifier",
                            "start": 2120,
                            "end": 2121,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 2124,
                            "end": 2125,
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
                      "start": 2127,
                      "end": 2134,
                      "left": {
                        "type": "Identifier",
                        "start": 2127,
                        "end": 2128,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "start": 2131,
                        "end": 2134,
                        "value": 100,
                        "raw": "100"
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 2136,
                      "end": 2139,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 2136,
                        "end": 2137,
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 2141,
                      "end": 2190,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 2155,
                          "end": 2180,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2159,
                              "end": 2179,
                              "id": {
                                "type": "Identifier",
                                "start": 2159,
                                "end": 2160,
                                "name": "f",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "start": 2163,
                                "end": 2179,
                                "id": null,
                                "expression": true,
                                "generator": false,
                                "async": false,
                                "params": [],
                                "body": {
                                  "type": "BinaryExpression",
                                  "start": 2169,
                                  "end": 2179,
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 2169,
                                    "end": 2175,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 2169,
                                      "end": 2173
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 2174,
                                      "end": 2175,
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
                                    "start": 2178,
                                    "end": 2179,
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
      "start": 2200,
      "end": 2373,
      "id": {
        "type": "Identifier",
        "start": 2209,
        "end": 2213,
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
        "start": 2217,
        "end": 2373,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2223,
            "end": 2248,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2227,
                "end": 2247,
                "id": {
                  "type": "Identifier",
                  "start": 2227,
                  "end": 2228,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2231,
                  "end": 2247,
                  "object": {
                    "type": "Identifier",
                    "start": 2231,
                    "end": 2240,
                    "name": "arguments",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2241,
                    "end": 2247,
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
            "start": 2253,
            "end": 2371,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2258,
              "end": 2263,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2262,
                  "end": 2263,
                  "id": {
                    "type": "Identifier",
                    "start": 2262,
                    "end": 2263,
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
              "start": 2267,
              "end": 2269,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 2271,
              "end": 2371,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 2281,
                  "end": 2306,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2285,
                      "end": 2305,
                      "id": {
                        "type": "Identifier",
                        "start": 2285,
                        "end": 2286,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2289,
                        "end": 2305,
                        "object": {
                          "type": "Identifier",
                          "start": 2289,
                          "end": 2298,
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2299,
                          "end": 2305,
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
                  "start": 2315,
                  "end": 2365,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2316,
                    "end": 2363,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 2327,
                      "end": 2363,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2329,
                          "end": 2361,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 2336,
                            "end": 2360,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 2336,
                              "end": 2341,
                              "left": {
                                "type": "Identifier",
                                "start": 2336,
                                "end": 2337,
                                "name": "y",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 2340,
                                "end": 2341,
                                "name": "z",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "start": 2344,
                              "end": 2360,
                              "object": {
                                "type": "Identifier",
                                "start": 2344,
                                "end": 2353,
                                "name": "arguments",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2354,
                                "end": 2360,
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
