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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 28,
                  "end": 32,
                  "raw": "true",
                  "value": true
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "decorators": [],
                  "name": "obj",
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
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "start": 50,
                        "end": 51,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 162,
                  "decorators": [],
                  "name": "obj",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 167,
                "end": 172,
                "raw": "false",
                "value": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 177,
      "end": 726,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 726,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 197,
            "end": 229,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 209,
              "decorators": [],
              "name": "Element",
              "optional": false
            },
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
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 234,
            "end": 276,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 239,
              "end": 253,
              "decorators": [],
              "name": "ElementOrArray",
              "optional": false
            },
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
                    "decorators": [],
                    "name": "Element",
                    "optional": false
                  }
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
                      "decorators": [],
                      "name": "Element",
                      "optional": false
                    }
                  }
                }
              ]
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 297,
                  "decorators": [],
                  "name": "el",
                  "optional": false,
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
                        "decorators": [],
                        "name": "Element",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 300,
                  "end": 311,
                  "expression": {
                    "type": "Literal",
                    "start": 300,
                    "end": 304,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 308,
                    "end": 311
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 335,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
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
                          "decorators": [],
                          "name": "Element",
                          "optional": false
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 338,
                  "end": 349,
                  "expression": {
                    "type": "Literal",
                    "start": 338,
                    "end": 342,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 346,
                    "end": 349
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 380,
                  "decorators": [],
                  "name": "elOrA",
                  "optional": false,
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
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 383,
                  "end": 394,
                  "expression": {
                    "type": "Literal",
                    "start": 383,
                    "end": 387,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 391,
                    "end": 394
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 453,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
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
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 456,
                  "end": 458,
                  "decorators": [],
                  "name": "el",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 486,
                  "decorators": [],
                  "name": "a2",
                  "optional": false,
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
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 492,
                  "decorators": [],
                  "name": "arr",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 520,
                  "decorators": [],
                  "name": "a3",
                  "optional": false,
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
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false
                      }
                    }
                  }
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
                      "decorators": [],
                      "name": "el",
                      "optional": false
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 555,
                  "decorators": [],
                  "name": "a4",
                  "optional": false,
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
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 558,
                  "end": 596,
                  "alternate": {
                    "type": "ArrayExpression",
                    "start": 589,
                    "end": 596,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 590,
                        "end": 595,
                        "decorators": [],
                        "name": "elOrA",
                        "optional": false
                      }
                    ]
                  },
                  "consequent": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 586,
                    "decorators": [],
                    "name": "elOrA",
                    "optional": false
                  },
                  "test": {
                    "type": "CallExpression",
                    "start": 558,
                    "end": 578,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 572,
                        "end": 577,
                        "decorators": [],
                        "name": "elOrA",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 558,
                      "end": 571,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 563,
                        "decorators": [],
                        "name": "Array",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 564,
                        "end": 571,
                        "decorators": [],
                        "name": "isArray",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 659,
                  "end": 677,
                  "decorators": [],
                  "name": "a5",
                  "optional": false,
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
                        "decorators": [],
                        "name": "ElementOrArray",
                        "optional": false
                      }
                    }
                  }
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
                        "alternate": {
                          "type": "ArrayExpression",
                          "start": 715,
                          "end": 722,
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 716,
                              "end": 721,
                              "decorators": [],
                              "name": "elOrA",
                              "optional": false
                            }
                          ]
                        },
                        "consequent": {
                          "type": "Identifier",
                          "start": 707,
                          "end": 712,
                          "decorators": [],
                          "name": "elOrA",
                          "optional": false
                        },
                        "test": {
                          "type": "CallExpression",
                          "start": 684,
                          "end": 704,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 698,
                              "end": 703,
                              "decorators": [],
                              "name": "elOrA",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 684,
                            "end": 697,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 684,
                              "end": 689,
                              "decorators": [],
                              "name": "Array",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 690,
                              "end": 697,
                              "decorators": [],
                              "name": "isArray",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 188,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 728,
      "end": 963,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 742,
        "end": 963,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 748,
            "end": 768,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 753,
              "end": 755,
              "decorators": [],
              "name": "XY",
              "optional": false
            },
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
                    "raw": "'x'",
                    "value": "x"
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
                    "raw": "'y'",
                    "value": "y"
                  }
                }
              ]
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 784,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "XY",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 787,
                  "end": 790,
                  "raw": "'x'",
                  "value": "x"
                }
              }
            ],
            "declare": false,
            "kind": "const"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 800,
                  "end": 802,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 806,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "decorators": [],
                "name": "x2",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 892,
                "end": 895,
                "raw": "'y'",
                "value": "y"
              }
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 942,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
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
                        "decorators": [],
                        "name": "XY",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 945,
                  "end": 946,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "decorators": [],
                "name": "x3",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 957,
                "end": 960,
                "raw": "'y'",
                "value": "y"
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 737,
        "end": 739,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 965,
      "end": 1137,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 991,
                  "end": 1001,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 992,
                    "end": 1001,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 994,
                      "end": 1001
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 1004,
                  "end": 1008,
                  "raw": "true",
                  "value": true
                }
              }
            ],
            "declare": false,
            "kind": "const"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1018,
                  "end": 1020,
                  "decorators": [],
                  "name": "x1",
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1023,
                  "end": 1024,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "decorators": [],
                "name": "x1",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1129,
                "end": 1134,
                "raw": "false",
                "value": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 974,
        "end": 976,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1139,
      "end": 1302,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1153,
        "end": 1302,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 1159,
            "end": 1179,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1164,
              "end": 1166,
              "decorators": [],
              "name": "XY",
              "optional": false
            },
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
                    "raw": "'x'",
                    "value": "x"
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
                    "raw": "'y'",
                    "value": "y"
                  }
                }
              ]
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1188,
                  "end": 1197,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
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
                          "decorators": [],
                          "name": "XY",
                          "optional": false
                        }
                      }
                    }
                  }
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
                      "raw": "'x'",
                      "value": "x"
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "decorators": [],
                "name": "arr",
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
                    "raw": "'y'",
                    "value": "y"
                  }
                ]
              }
            }
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
                "decorators": [],
                "name": "arr",
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
                          "raw": "'y'",
                          "value": "y"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1148,
        "end": 1150,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
