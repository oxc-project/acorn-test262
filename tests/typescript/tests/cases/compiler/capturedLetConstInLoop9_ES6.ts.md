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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 38,
                "end": 39,
                "id": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
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
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
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
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 90,
                    "end": 91,
                    "id": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 91,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null,
                    "definite": false
                  }
                ],
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
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false
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
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 175,
                        "end": 176,
                        "id": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 176,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
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
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 245,
                "end": 328,
                "test": {
                  "type": "Literal",
                  "start": 250,
                  "end": 251,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 265,
                    "end": 271,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 269,
                        "end": 270,
                        "id": {
                          "type": "Identifier",
                          "start": 269,
                          "end": 270,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
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
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 322,
                    "end": 328,
                    "label": null
                  }
                ]
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 373,
                      "end": 374,
                      "id": {
                        "type": "Identifier",
                        "start": 373,
                        "end": 374,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
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
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 432,
              "end": 433,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 434,
              "end": 491,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 444,
                  "end": 485,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 444,
                    "end": 445,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 445,
                    "end": 485,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
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
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
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
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 516,
          "end": 522,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 517,
            "end": 522,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 519,
              "end": 522
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 526,
      "end": 1456,
      "id": {
        "type": "Identifier",
        "start": 535,
        "end": 538,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 541,
        "end": 1456,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 547,
            "end": 1399,
            "label": {
              "type": "Identifier",
              "start": 547,
              "end": 549,
              "decorators": [],
              "name": "l0",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "ForOfStatement",
              "start": 555,
              "end": 1399,
              "await": false,
              "left": {
                "type": "VariableDeclaration",
                "start": 560,
                "end": 565,
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 564,
                    "end": 565,
                    "id": {
                      "type": "Identifier",
                      "start": 564,
                      "end": 565,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null,
                    "definite": false
                  }
                ],
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
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "l0",
                            "optional": false,
                            "typeAnnotation": null
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
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 726,
                          "end": 727,
                          "id": {
                            "type": "Identifier",
                            "start": 726,
                            "end": 727,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
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
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 753,
                              "end": 778,
                              "id": {
                                "type": "ArrayPattern",
                                "start": 753,
                                "end": 763,
                                "decorators": [],
                                "elements": [
                                  {
                                    "type": "ObjectPattern",
                                    "start": 754,
                                    "end": 762,
                                    "decorators": [],
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 755,
                                        "end": 756,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 755,
                                          "end": 756,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 755,
                                          "end": 756,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": true,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 758,
                                        "end": 761,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 758,
                                          "end": 759,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 760,
                                          "end": 761,
                                          "decorators": [],
                                          "name": "z",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
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
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 768,
                                          "end": 769,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 770,
                                          "end": 771,
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 773,
                                        "end": 776,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 773,
                                          "end": 774,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 775,
                                          "end": 776,
                                          "value": 2,
                                          "raw": "2"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
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
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
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
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "l0",
                                  "optional": false,
                                  "typeAnnotation": null
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
                          "label": {
                            "type": "Identifier",
                            "start": 962,
                            "end": 964,
                            "decorators": [],
                            "name": "l1",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "l1",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "alternate": null
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
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1097,
                          "end": 1098,
                          "id": {
                            "type": "Identifier",
                            "start": 1097,
                            "end": 1098,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null,
                          "definite": false
                        }
                      ],
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
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 1124,
                              "end": 1167,
                              "id": {
                                "type": "ArrayPattern",
                                "start": 1124,
                                "end": 1136,
                                "decorators": [],
                                "elements": [
                                  {
                                    "type": "ObjectPattern",
                                    "start": 1125,
                                    "end": 1135,
                                    "decorators": [],
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 1126,
                                        "end": 1128,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1126,
                                          "end": 1128,
                                          "decorators": [],
                                          "name": "x1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1126,
                                          "end": 1128,
                                          "decorators": [],
                                          "name": "x1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": true,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1130,
                                        "end": 1134,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1130,
                                          "end": 1131,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 1132,
                                          "end": 1134,
                                          "decorators": [],
                                          "name": "z1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ],
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
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1141,
                                          "end": 1143,
                                          "decorators": [],
                                          "name": "x1",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "Literal",
                                          "start": 1144,
                                          "end": 1145,
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 1147,
                                        "end": 1165,
                                        "kind": "init",
                                        "key": {
                                          "type": "Identifier",
                                          "start": 1147,
                                          "end": 1148,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "value": {
                                          "type": "MemberExpression",
                                          "start": 1149,
                                          "end": 1165,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 1149,
                                            "end": 1158,
                                            "decorators": [],
                                            "name": "arguments",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 1159,
                                            "end": 1165,
                                            "decorators": [],
                                            "name": "length",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "definite": false
                            }
                          ],
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
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
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
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "l0",
                                  "optional": false,
                                  "typeAnnotation": null
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
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 1331,
                              "end": 1332,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
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
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1391,
                        "end": 1392,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "directive": null
                  }
                ]
              }
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
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1414,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1425,
                  "end": 1426,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1437,
                  "end": 1439,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1450,
                  "end": 1452,
                  "decorators": [],
                  "name": "z1",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1458,
      "end": 2027,
      "id": {
        "type": "Identifier",
        "start": 1467,
        "end": 1471,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1489,
                  "end": 1490,
                  "id": {
                    "type": "Identifier",
                    "start": 1489,
                    "end": 1490,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 1815,
                      "end": 1829,
                      "test": {
                        "type": "Literal",
                        "start": 1820,
                        "end": 1821,
                        "value": 1,
                        "raw": "1"
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "start": 1823,
                          "end": 1829,
                          "label": null
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 1842,
                      "end": 1859,
                      "test": {
                        "type": "Literal",
                        "start": 1847,
                        "end": 1848,
                        "value": 2,
                        "raw": "2"
                      },
                      "consequent": [
                        {
                          "type": "ContinueStatement",
                          "start": 1850,
                          "end": 1859,
                          "label": null
                        }
                      ]
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1896,
                        "end": 1897,
                        "id": {
                          "type": "Identifier",
                          "start": 1896,
                          "end": 1897,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
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
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "start": 1947,
                            "end": 1961,
                            "test": {
                              "type": "Literal",
                              "start": 1952,
                              "end": 1953,
                              "value": 1,
                              "raw": "1"
                            },
                            "consequent": [
                              {
                                "type": "BreakStatement",
                                "start": 1955,
                                "end": 1961,
                                "label": null
                              }
                            ]
                          },
                          {
                            "type": "SwitchCase",
                            "start": 1978,
                            "end": 1995,
                            "test": {
                              "type": "Literal",
                              "start": 1983,
                              "end": 1984,
                              "value": 2,
                              "raw": "2"
                            },
                            "consequent": [
                              {
                                "type": "ContinueStatement",
                                "start": 1986,
                                "end": 1995,
                                "label": null
                              }
                            ]
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 2029,
      "end": 2185,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2035,
        "end": 2036,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2037,
        "end": 2185,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2043,
            "end": 2077,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2043,
              "end": 2054,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2054,
              "end": 2077,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2064,
                      "end": 2072,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2066,
                        "end": 2072
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 2074,
                "end": 2077,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 2082,
            "end": 2183,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2082,
              "end": 2085,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2085,
              "end": 2183,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 2107,
                          "end": 2112,
                          "id": {
                            "type": "Identifier",
                            "start": 2107,
                            "end": 2108,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
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
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
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
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2146,
                              "end": 2166,
                              "id": {
                                "type": "Identifier",
                                "start": 2146,
                                "end": 2147,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "start": 2150,
                                "end": 2166,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
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
                                      "decorators": [],
                                      "name": "N",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 2165,
                                    "end": 2166,
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "id": null,
                                "generator": false
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2187,
      "end": 2360,
      "id": {
        "type": "Identifier",
        "start": 2196,
        "end": 2200,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2204,
        "end": 2360,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2210,
            "end": 2235,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2214,
                "end": 2234,
                "id": {
                  "type": "Identifier",
                  "start": 2214,
                  "end": 2215,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2218,
                  "end": 2234,
                  "object": {
                    "type": "Identifier",
                    "start": 2218,
                    "end": 2227,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2228,
                    "end": 2234,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2249,
                  "end": 2250,
                  "id": {
                    "type": "Identifier",
                    "start": 2249,
                    "end": 2250,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2272,
                      "end": 2292,
                      "id": {
                        "type": "Identifier",
                        "start": 2272,
                        "end": 2273,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2276,
                        "end": 2292,
                        "object": {
                          "type": "Identifier",
                          "start": 2276,
                          "end": 2285,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2286,
                          "end": 2292,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "definite": false
                    }
                  ],
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
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 2327,
                                "end": 2328,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
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
                                "decorators": [],
                                "name": "arguments",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2341,
                                "end": 2347,
                                "decorators": [],
                                "name": "length",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
