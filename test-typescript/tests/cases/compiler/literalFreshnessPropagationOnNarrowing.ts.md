__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1302,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
        "start": 14,
        "end": 175,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 33,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 32,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 28,
                  "end": 32,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 38,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 42,
                "end": 53,
                "id": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 48,
                  "end": 53,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 50,
                      "end": 51,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 159,
            "end": 173,
            "expression": {
              "type": "AssignmentExpression",
              "start": 159,
              "end": 172,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 159,
                "end": 164,
                "object": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 162,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 167,
                "end": 172,
                "value": false,
                "raw": "false"
              }
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
      "start": 177,
      "end": 726,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 188,
        "name": "f2",
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
        "start": 191,
        "end": 726,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 197,
            "end": 229,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 209,
              "name": "Element",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 213,
              "end": 227,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 213,
                  "end": 219
                },
                {
                  "type": "TSLiteralType",
                  "start": 222,
                  "end": 227,
                  "literal": {
                    "type": "Literal",
                    "start": 222,
                    "end": 227,
                    "value": false,
                    "raw": "false"
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 234,
            "end": 276,
            "id": {
              "type": "Identifier",
              "start": 239,
              "end": 253,
              "name": "ElementOrArray",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 256,
              "end": 275,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 256,
                  "end": 263,
                  "typeName": {
                    "type": "Identifier",
                    "start": 256,
                    "end": 263,
                    "name": "Element",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSArrayType",
                  "start": 266,
                  "end": 275,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 266,
                    "end": 273,
                    "typeName": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 273,
                      "name": "Element",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 282,
            "end": 312,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 286,
                "end": 311,
                "id": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 297,
                  "name": "el",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 288,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 290,
                      "end": 297,
                      "typeName": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 297,
                        "name": "Element",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 300,
                  "end": 311,
                  "expression": {
                    "type": "Literal",
                    "start": 300,
                    "end": 304,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 308,
                    "end": 311
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 317,
            "end": 350,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 321,
                "end": 349,
                "id": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 335,
                  "name": "arr",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 324,
                    "end": 335,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 326,
                      "end": 335,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 326,
                        "end": 333,
                        "typeName": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 333,
                          "name": "Element",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 338,
                  "end": 349,
                  "expression": {
                    "type": "Literal",
                    "start": 338,
                    "end": 342,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 346,
                    "end": 349
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 355,
            "end": 395,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 359,
                "end": 394,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 380,
                  "name": "elOrA",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 364,
                    "end": 380,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 366,
                      "end": 380,
                      "typeName": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 380,
                        "name": "ElementOrArray",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 383,
                  "end": 394,
                  "expression": {
                    "type": "Literal",
                    "start": 383,
                    "end": 387,
                    "value": null,
                    "raw": "null"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 391,
                    "end": 394
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 431,
            "end": 459,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 435,
                "end": 458,
                "id": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 453,
                  "name": "a1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 453,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 439,
                      "end": 453,
                      "typeName": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 453,
                        "name": "ElementOrArray",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 458,
                  "name": "el",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 464,
            "end": 493,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 468,
                "end": 492,
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 486,
                  "name": "a2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 470,
                    "end": 486,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 472,
                      "end": 486,
                      "typeName": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 486,
                        "name": "ElementOrArray",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 492,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 498,
            "end": 528,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 502,
                "end": 527,
                "id": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 520,
                  "name": "a3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 504,
                    "end": 520,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 506,
                      "end": 520,
                      "typeName": {
                        "type": "Identifier",
                        "start": 506,
                        "end": 520,
                        "name": "ElementOrArray",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 523,
                  "end": 527,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 524,
                      "end": 526,
                      "name": "el",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 533,
            "end": 597,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 537,
                "end": 596,
                "id": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 555,
                  "name": "a4",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 539,
                    "end": 555,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 541,
                      "end": 555,
                      "typeName": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 555,
                        "name": "ElementOrArray",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 558,
                  "end": 596,
                  "test": {
                    "type": "CallExpression",
                    "start": 558,
                    "end": 578,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 558,
                      "end": 571,
                      "object": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 563,
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 564,
                        "end": 571,
                        "name": "isArray",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 572,
                        "end": 577,
                        "name": "elOrA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 586,
                    "name": "elOrA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "alternate": {
                    "type": "ArrayExpression",
                    "start": 589,
                    "end": 596,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 590,
                        "end": 595,
                        "name": "elOrA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 655,
            "end": 724,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 659,
                "end": 723,
                "id": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 677,
                  "name": "a5",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 661,
                    "end": 677,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 663,
                      "end": 677,
                      "typeName": {
                        "type": "Identifier",
                        "start": 663,
                        "end": 677,
                        "name": "ElementOrArray",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 680,
                  "end": 723,
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "start": 681,
                      "end": 722,
                      "argument": {
                        "type": "ConditionalExpression",
                        "start": 684,
                        "end": 722,
                        "test": {
                          "type": "CallExpression",
                          "start": 684,
                          "end": 704,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 684,
                            "end": 697,
                            "object": {
                              "type": "Identifier",
                              "start": 684,
                              "end": 689,
                              "name": "Array",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 690,
                              "end": 697,
                              "name": "isArray",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 698,
                              "end": 703,
                              "name": "elOrA",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 707,
                          "end": 712,
                          "name": "elOrA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "alternate": {
                          "type": "ArrayExpression",
                          "start": 715,
                          "end": 722,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 716,
                              "end": 721,
                              "name": "elOrA",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 728,
      "end": 963,
      "id": {
        "type": "Identifier",
        "start": 737,
        "end": 739,
        "name": "f3",
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
        "start": 742,
        "end": 963,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 748,
            "end": 768,
            "id": {
              "type": "Identifier",
              "start": 753,
              "end": 755,
              "name": "XY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 758,
              "end": 767,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 758,
                  "end": 761,
                  "literal": {
                    "type": "Literal",
                    "start": 758,
                    "end": 761,
                    "value": "x",
                    "raw": "'x'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 764,
                  "end": 767,
                  "literal": {
                    "type": "Literal",
                    "start": 764,
                    "end": 767,
                    "value": "y",
                    "raw": "'y'"
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 773,
            "end": 791,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 779,
                "end": 790,
                "id": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 784,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 780,
                    "end": 784,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 782,
                      "end": 784,
                      "typeName": {
                        "type": "Identifier",
                        "start": 782,
                        "end": 784,
                        "name": "XY",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 787,
                  "end": 790,
                  "value": "x",
                  "raw": "'x'"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 796,
            "end": 807,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 800,
                "end": 806,
                "id": {
                  "type": "Identifier",
                  "start": 800,
                  "end": 802,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 806,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
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
            "start": 887,
            "end": 896,
            "expression": {
              "type": "AssignmentExpression",
              "start": 887,
              "end": 895,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 887,
                "end": 889,
                "name": "x2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 892,
                "end": 895,
                "value": "y",
                "raw": "'y'"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 932,
            "end": 947,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 936,
                "end": 946,
                "id": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 942,
                  "name": "x3",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 938,
                    "end": 942,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 940,
                      "end": 942,
                      "typeName": {
                        "type": "Identifier",
                        "start": 940,
                        "end": 942,
                        "name": "XY",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 946,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
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
            "start": 952,
            "end": 961,
            "expression": {
              "type": "AssignmentExpression",
              "start": 952,
              "end": 960,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 952,
                "end": 954,
                "name": "x3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 957,
                "end": 960,
                "value": "y",
                "raw": "'y'"
              }
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
      "start": 965,
      "end": 1137,
      "id": {
        "type": "Identifier",
        "start": 974,
        "end": 976,
        "name": "f4",
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
        "start": 979,
        "end": 1137,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 985,
            "end": 1009,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 991,
                "end": 1008,
                "id": {
                  "type": "Identifier",
                  "start": 991,
                  "end": 1001,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 992,
                    "end": 1001,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 994,
                      "end": 1001
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1004,
                  "end": 1008,
                  "value": true,
                  "raw": "true"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1014,
            "end": 1025,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1018,
                "end": 1024,
                "id": {
                  "type": "Identifier",
                  "start": 1018,
                  "end": 1020,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1023,
                  "end": 1024,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
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
            "start": 1124,
            "end": 1135,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1124,
              "end": 1134,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1124,
                "end": 1126,
                "name": "x1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1129,
                "end": 1134,
                "value": false,
                "raw": "false"
              }
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
      "start": 1139,
      "end": 1302,
      "id": {
        "type": "Identifier",
        "start": 1148,
        "end": 1150,
        "name": "f5",
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
        "start": 1153,
        "end": 1302,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1159,
            "end": 1179,
            "id": {
              "type": "Identifier",
              "start": 1164,
              "end": 1166,
              "name": "XY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1169,
              "end": 1178,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1169,
                  "end": 1172,
                  "literal": {
                    "type": "Literal",
                    "start": 1169,
                    "end": 1172,
                    "value": "x",
                    "raw": "'x'"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1175,
                  "end": 1178,
                  "literal": {
                    "type": "Literal",
                    "start": 1175,
                    "end": 1178,
                    "value": "y",
                    "raw": "'y'"
                  }
                }
              ]
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1184,
            "end": 1206,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1188,
                "end": 1205,
                "id": {
                  "type": "Identifier",
                  "start": 1188,
                  "end": 1197,
                  "name": "arr",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1191,
                    "end": 1197,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1193,
                      "end": 1197,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1193,
                        "end": 1195,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1193,
                          "end": 1195,
                          "name": "XY",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 1200,
                  "end": 1205,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1201,
                      "end": 1204,
                      "value": "x",
                      "raw": "'x'"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1211,
            "end": 1223,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1211,
              "end": 1222,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1211,
                "end": 1214,
                "name": "arr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1217,
                "end": 1222,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 1218,
                    "end": 1221,
                    "value": "y",
                    "raw": "'y'"
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1283,
            "end": 1300,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1283,
              "end": 1299,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1283,
                "end": 1286,
                "name": "arr",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 1289,
                "end": 1299,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 1290,
                    "end": 1298,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 1293,
                      "end": 1298,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 1294,
                          "end": 1297,
                          "value": "y",
                          "raw": "'y'"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "directive": null
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
