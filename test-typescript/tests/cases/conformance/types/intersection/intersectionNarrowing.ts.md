__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 807,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 34,
        "name": "f1",
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
          "start": 38,
          "end": 67,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 67,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 41,
              "end": 67,
              "types": [
                {
                  "type": "TSIntersectionType",
                  "start": 41,
                  "end": 51,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 41,
                      "end": 42,
                      "typeName": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 42,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 45,
                      "end": 51
                    }
                  ]
                },
                {
                  "type": "TSIntersectionType",
                  "start": 54,
                  "end": 67,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 54,
                      "end": 55,
                      "typeName": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 58,
                      "end": 67
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 69,
        "end": 134,
        "body": [
          {
            "type": "IfStatement",
            "start": 75,
            "end": 132,
            "test": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 82,
              "end": 132,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 92,
                  "end": 94,
                  "expression": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 34,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 35,
            "end": 36,
            "name": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 136,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 147,
        "name": "f2",
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
          "start": 151,
          "end": 180,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 180,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 154,
              "end": 180,
              "types": [
                {
                  "type": "TSIntersectionType",
                  "start": 154,
                  "end": 164,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 154,
                      "end": 155,
                      "typeName": {
                        "type": "Identifier",
                        "start": 154,
                        "end": 155,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 158,
                      "end": 164
                    }
                  ]
                },
                {
                  "type": "TSIntersectionType",
                  "start": 167,
                  "end": 180,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 167,
                      "end": 168,
                      "typeName": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 171,
                      "end": 180
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 182,
        "end": 324,
        "body": [
          {
            "type": "IfStatement",
            "start": 188,
            "end": 322,
            "test": {
              "type": "BinaryExpression",
              "start": 192,
              "end": 207,
              "left": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 198,
                "end": 207,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 209,
              "end": 259,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 219,
                  "end": 221,
                  "expression": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 220,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 269,
              "end": 322,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 279,
                  "end": 281,
                  "expression": {
                    "type": "Identifier",
                    "start": 279,
                    "end": 280,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 149,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 326,
      "end": 514,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 337,
        "name": "f3",
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
          "start": 341,
          "end": 367,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 342,
            "end": 367,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 344,
              "end": 367,
              "types": [
                {
                  "type": "TSIntersectionType",
                  "start": 344,
                  "end": 354,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 344,
                      "end": 345,
                      "typeName": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 345,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 348,
                      "end": 354
                    }
                  ]
                },
                {
                  "type": "TSIntersectionType",
                  "start": 357,
                  "end": 367,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 357,
                      "end": 358,
                      "typeName": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 358,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 361,
                      "end": 367
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 369,
        "end": 514,
        "body": [
          {
            "type": "IfStatement",
            "start": 375,
            "end": 512,
            "test": {
              "type": "BinaryExpression",
              "start": 379,
              "end": 400,
              "left": {
                "type": "UnaryExpression",
                "start": 379,
                "end": 387,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 386,
                  "end": 387,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 392,
                "end": 400,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 402,
              "end": 452,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 412,
                  "end": 414,
                  "expression": {
                    "type": "Identifier",
                    "start": 412,
                    "end": 413,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 462,
              "end": 512,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 472,
                  "end": 474,
                  "expression": {
                    "type": "Identifier",
                    "start": 472,
                    "end": 473,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 337,
        "end": 340,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 338,
            "end": 339,
            "name": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 516,
      "end": 694,
      "id": {
        "type": "Identifier",
        "start": 525,
        "end": 527,
        "name": "f4",
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
          "start": 531,
          "end": 547,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 532,
            "end": 547,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 534,
              "end": 547,
              "types": [
                {
                  "type": "TSIntersectionType",
                  "start": 534,
                  "end": 539,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 534,
                      "end": 535,
                      "typeName": {
                        "type": "Identifier",
                        "start": 534,
                        "end": 535,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 538,
                      "end": 539,
                      "literal": {
                        "type": "Literal",
                        "start": 538,
                        "end": 539,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                },
                {
                  "type": "TSIntersectionType",
                  "start": 542,
                  "end": 547,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 542,
                      "end": 543,
                      "typeName": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 543,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 546,
                      "end": 547,
                      "literal": {
                        "type": "Literal",
                        "start": 546,
                        "end": 547,
                        "value": 2,
                        "raw": "2"
                      }
                    }
                  ]
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 549,
        "end": 694,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 555,
            "end": 692,
            "discriminant": {
              "type": "Identifier",
              "start": 563,
              "end": 564,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 576,
                "end": 593,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 584,
                    "end": 586,
                    "expression": {
                      "type": "Identifier",
                      "start": 584,
                      "end": 585,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 587,
                    "end": 593,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 581,
                  "end": 582,
                  "value": 1,
                  "raw": "1"
                }
              },
              {
                "type": "SwitchCase",
                "start": 612,
                "end": 629,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 620,
                    "end": 622,
                    "expression": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 621,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 623,
                    "end": 629,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 617,
                  "end": 618,
                  "value": 2,
                  "raw": "2"
                }
              },
              {
                "type": "SwitchCase",
                "start": 648,
                "end": 659,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 657,
                    "end": 659,
                    "expression": {
                      "type": "Identifier",
                      "start": 657,
                      "end": 658,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ],
                "test": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 527,
        "end": 530,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 528,
            "end": 529,
            "name": {
              "type": "Identifier",
              "start": 528,
              "end": 529,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 696,
      "end": 806,
      "id": {
        "type": "Identifier",
        "start": 705,
        "end": 707,
        "name": "f5",
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
          "start": 735,
          "end": 748,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 736,
            "end": 748,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 738,
              "end": 748,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 738,
                  "end": 739,
                  "typeName": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 739,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 742,
                  "end": 748
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 750,
        "end": 806,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 756,
            "end": 781,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 762,
                "end": 780,
                "id": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 764,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 767,
                  "end": 780,
                  "left": {
                    "type": "Identifier",
                    "start": 767,
                    "end": 768,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 773,
                    "end": 780,
                    "value": "hello",
                    "raw": "\"hello\""
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 707,
        "end": 734,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 708,
            "end": 733,
            "name": {
              "type": "Identifier",
              "start": 708,
              "end": 709,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 718,
              "end": 733,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 718,
                  "end": 724
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 727,
                  "end": 733
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
