__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 85,
  "end": 758,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 160,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
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
        "start": 93,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 99,
            "end": 158,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 99,
              "end": 110,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 158,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 111,
                  "end": 129,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 129,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 121,
                      "end": 129,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 123,
                        "end": 129
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 131,
                "end": 158,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 141,
                    "end": 152,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 141,
                      "end": 151,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 141,
                        "end": 147,
                        "object": {
                          "type": "ThisExpression",
                          "start": 141,
                          "end": 145
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 147,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 150,
                        "end": 151,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ClassDeclaration",
      "start": 162,
      "end": 288,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 169,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 180,
        "end": 288,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 286,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 197,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 286,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 198,
                  "end": 207,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 199,
                    "end": 207,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 201,
                      "end": 207
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 286,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 219,
                    "end": 228,
                    "expression": {
                      "type": "CallExpression",
                      "start": 219,
                      "end": 227,
                      "callee": {
                        "type": "Super",
                        "start": 219,
                        "end": 224
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 225,
                          "end": 226,
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
                    "start": 269,
                    "end": 280,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 269,
                      "end": 279,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 269,
                        "end": 275,
                        "object": {
                          "type": "ThisExpression",
                          "start": 269,
                          "end": 273
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 274,
                          "end": 275,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 278,
                        "end": 279,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ClassDeclaration",
      "start": 290,
      "end": 524,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 297,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 306,
        "end": 307,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 308,
        "end": 524,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 445,
            "end": 522,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 445,
              "end": 456,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 456,
              "end": 522,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 457,
                  "end": 475,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 466,
                    "end": 475,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 467,
                      "end": 475,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 469,
                        "end": 475
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 477,
                "end": 522,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 487,
                    "end": 496,
                    "expression": {
                      "type": "CallExpression",
                      "start": 487,
                      "end": 495,
                      "callee": {
                        "type": "Super",
                        "start": 487,
                        "end": 492
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 493,
                          "end": 494,
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
                    "start": 505,
                    "end": 516,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 505,
                      "end": 515,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 505,
                        "end": 511,
                        "object": {
                          "type": "ThisExpression",
                          "start": 505,
                          "end": 509
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 510,
                          "end": 511,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 514,
                        "end": 515,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ClassDeclaration",
      "start": 526,
      "end": 609,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 532,
        "end": 533,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 534,
        "end": 609,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 540,
            "end": 607,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 540,
              "end": 551,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 551,
              "end": 607,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 552,
                  "end": 578,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 569,
                    "end": 578,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 570,
                      "end": 578,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 572,
                        "end": 578
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 580,
                "end": 607,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 590,
                    "end": 601,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 590,
                      "end": 600,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 590,
                        "end": 596,
                        "object": {
                          "type": "ThisExpression",
                          "start": 590,
                          "end": 594
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 595,
                          "end": 596,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 599,
                        "end": 600,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ClassDeclaration",
      "start": 655,
      "end": 758,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 661,
        "end": 662,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 671,
        "end": 672,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 673,
        "end": 758,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 679,
            "end": 756,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 679,
              "end": 690,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 690,
              "end": 756,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 691,
                  "end": 709,
                  "accessibility": null,
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 700,
                    "end": 709,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 701,
                      "end": 709,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 703,
                        "end": 709
                      }
                    }
                  },
                  "readonly": true,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 711,
                "end": 756,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 721,
                    "end": 730,
                    "expression": {
                      "type": "CallExpression",
                      "start": 721,
                      "end": 729,
                      "callee": {
                        "type": "Super",
                        "start": 721,
                        "end": 726
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 727,
                          "end": 728,
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
                    "start": 739,
                    "end": 750,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 739,
                      "end": 749,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 739,
                        "end": 745,
                        "object": {
                          "type": "ThisExpression",
                          "start": 739,
                          "end": 743
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 744,
                          "end": 745,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 748,
                        "end": 749,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
