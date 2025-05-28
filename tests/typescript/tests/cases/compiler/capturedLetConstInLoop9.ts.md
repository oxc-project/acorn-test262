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
      "end": 1469,
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
        "end": 1469,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 547,
            "end": 1412,
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
              "end": 1412,
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
                    "end": 1379,
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
                      "end": 1379,
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
                          "start": 1338,
                          "end": 1345,
                          "expression": {
                            "type": "ArrowFunctionExpression",
                            "start": 1338,
                            "end": 1345,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 1344,
                              "end": 1345,
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
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 1404,
                        "end": 1405,
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
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1426,
                  "end": 1427,
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
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1438,
                  "end": 1439,
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
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1463,
                  "end": 1465,
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
      "start": 1471,
      "end": 2040,
      "id": {
        "type": "Identifier",
        "start": 1480,
        "end": 1484,
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
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1502,
                  "end": 1503,
                  "id": {
                    "type": "Identifier",
                    "start": 1502,
                    "end": 1503,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "start": 1828,
                      "end": 1842,
                      "test": {
                        "type": "Literal",
                        "start": 1833,
                        "end": 1834,
                        "value": 1,
                        "raw": "1"
                      },
                      "consequent": [
                        {
                          "type": "BreakStatement",
                          "start": 1836,
                          "end": 1842,
                          "label": null
                        }
                      ]
                    },
                    {
                      "type": "SwitchCase",
                      "start": 1855,
                      "end": 1872,
                      "test": {
                        "type": "Literal",
                        "start": 1860,
                        "end": 1861,
                        "value": 2,
                        "raw": "2"
                      },
                      "consequent": [
                        {
                          "type": "ContinueStatement",
                          "start": 1863,
                          "end": 1872,
                          "label": null
                        }
                      ]
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
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1909,
                        "end": 1910,
                        "id": {
                          "type": "Identifier",
                          "start": 1909,
                          "end": 1910,
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
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "cases": [
                          {
                            "type": "SwitchCase",
                            "start": 1960,
                            "end": 1974,
                            "test": {
                              "type": "Literal",
                              "start": 1965,
                              "end": 1966,
                              "value": 1,
                              "raw": "1"
                            },
                            "consequent": [
                              {
                                "type": "BreakStatement",
                                "start": 1968,
                                "end": 1974,
                                "label": null
                              }
                            ]
                          },
                          {
                            "type": "SwitchCase",
                            "start": 1991,
                            "end": 2008,
                            "test": {
                              "type": "Literal",
                              "start": 1996,
                              "end": 1997,
                              "value": 2,
                              "raw": "2"
                            },
                            "consequent": [
                              {
                                "type": "ContinueStatement",
                                "start": 1999,
                                "end": 2008,
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
      "start": 2042,
      "end": 2198,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2048,
        "end": 2049,
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
        "start": 2050,
        "end": 2198,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2056,
            "end": 2090,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2056,
              "end": 2067,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2067,
              "end": 2090,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2077,
                      "end": 2085,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2079,
                        "end": 2085
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
                "start": 2087,
                "end": 2090,
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
            "start": 2095,
            "end": 2196,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2095,
              "end": 2098,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2098,
              "end": 2196,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "kind": "let",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 2120,
                          "end": 2125,
                          "id": {
                            "type": "Identifier",
                            "start": 2120,
                            "end": 2121,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
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
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
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
                          "kind": "let",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 2159,
                              "end": 2179,
                              "id": {
                                "type": "Identifier",
                                "start": 2159,
                                "end": 2160,
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "ArrowFunctionExpression",
                                "start": 2163,
                                "end": 2179,
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [],
                                "returnType": null,
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
                                    "start": 2178,
                                    "end": 2179,
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
      "start": 2200,
      "end": 2373,
      "id": {
        "type": "Identifier",
        "start": 2209,
        "end": 2213,
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
        "start": 2217,
        "end": 2373,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2223,
            "end": 2248,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2227,
                "end": 2247,
                "id": {
                  "type": "Identifier",
                  "start": 2227,
                  "end": 2228,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2231,
                  "end": 2247,
                  "object": {
                    "type": "Identifier",
                    "start": 2231,
                    "end": 2240,
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2241,
                    "end": 2247,
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
            "start": 2253,
            "end": 2371,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 2258,
              "end": 2263,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2262,
                  "end": 2263,
                  "id": {
                    "type": "Identifier",
                    "start": 2262,
                    "end": 2263,
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 2285,
                      "end": 2305,
                      "id": {
                        "type": "Identifier",
                        "start": 2285,
                        "end": 2286,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 2289,
                        "end": 2305,
                        "object": {
                          "type": "Identifier",
                          "start": 2289,
                          "end": 2298,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2299,
                          "end": 2305,
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
                  "start": 2315,
                  "end": 2365,
                  "expression": {
                    "type": "FunctionExpression",
                    "start": 2316,
                    "end": 2363,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "start": 2340,
                                "end": 2341,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
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
                                "decorators": [],
                                "name": "arguments",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2354,
                                "end": 2360,
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
