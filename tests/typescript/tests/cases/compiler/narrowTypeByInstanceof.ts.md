__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 4,
  "end": 579,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 4,
      "end": 93,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 93,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 26,
            "end": 87,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 38,
              "decorators": [],
              "name": "range",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 87,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 87,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 60,
                    "end": 77,
                    "argument": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 76,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 40,
                "end": 45,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 42,
                  "end": 45
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Match",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 195,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 115,
        "end": 195,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 125,
            "end": 189,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 140,
              "decorators": [],
              "name": "resource",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 189,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 148,
                "end": 189,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 162,
                    "end": 179,
                    "argument": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 178,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 142,
                "end": 147,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 144,
                  "end": 147
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 114,
        "decorators": [],
        "name": "FileMatch",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 197,
      "end": 239,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 218,
        "decorators": [],
        "name": "FileMatchOrMatch",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 221,
        "end": 238,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 221,
            "end": 230,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 221,
              "end": 230,
              "decorators": [],
              "name": "FileMatch",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 233,
            "end": 238,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 233,
              "end": 238,
              "decorators": [],
              "name": "Match",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 242,
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 246,
          "end": 272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 246,
            "end": 272,
            "decorators": [],
            "name": "elementA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 272,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 272,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 272,
                  "decorators": [],
                  "name": "FileMatchOrMatch",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 274,
          "end": 300,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 274,
            "end": 300,
            "decorators": [],
            "name": "elementB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 300,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 300,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 300,
                  "decorators": [],
                  "name": "FileMatchOrMatch",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 303,
      "end": 579,
      "alternate": {
        "type": "IfStatement",
        "start": 456,
        "end": 579,
        "alternate": null,
        "consequent": {
          "type": "BlockStatement",
          "start": 516,
          "end": 579,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 522,
              "end": 547,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 526,
                  "end": 546,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 526,
                    "end": 527,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 530,
                    "end": 546,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 530,
                      "end": 544,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 530,
                        "end": 538,
                        "decorators": [],
                        "name": "elementA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 539,
                        "end": 544,
                        "decorators": [],
                        "name": "range",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "VariableDeclaration",
              "start": 552,
              "end": 577,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 556,
                  "end": 576,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 556,
                    "end": 557,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 560,
                    "end": 576,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 560,
                      "end": 574,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 560,
                        "end": 568,
                        "decorators": [],
                        "name": "elementB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 569,
                        "end": 574,
                        "decorators": [],
                        "name": "range",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            }
          ]
        },
        "test": {
          "type": "LogicalExpression",
          "start": 460,
          "end": 514,
          "operator": "&&",
          "left": {
            "type": "BinaryExpression",
            "start": 460,
            "end": 485,
            "operator": "instanceof",
            "left": {
              "type": "Identifier",
              "start": 460,
              "end": 468,
              "decorators": [],
              "name": "elementA",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 480,
              "end": 485,
              "decorators": [],
              "name": "Match",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "BinaryExpression",
            "start": 489,
            "end": 514,
            "operator": "instanceof",
            "left": {
              "type": "Identifier",
              "start": 489,
              "end": 497,
              "decorators": [],
              "name": "elementB",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 509,
              "end": 514,
              "decorators": [],
              "name": "Match",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 371,
        "end": 450,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 377,
            "end": 410,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 381,
                "end": 409,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 382,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 385,
                  "end": 409,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 385,
                    "end": 404,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 385,
                      "end": 402,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 385,
                        "end": 393,
                        "decorators": [],
                        "name": "elementA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 394,
                        "end": 402,
                        "decorators": [],
                        "name": "resource",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 409,
                    "decorators": [],
                    "name": "path",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 415,
            "end": 448,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 419,
                "end": 447,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 420,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 423,
                  "end": 447,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 423,
                    "end": 442,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 423,
                      "end": 440,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 423,
                        "end": 431,
                        "decorators": [],
                        "name": "elementB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 432,
                        "end": 440,
                        "decorators": [],
                        "name": "resource",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 447,
                    "decorators": [],
                    "name": "path",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 307,
        "end": 369,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 307,
          "end": 336,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 307,
            "end": 315,
            "decorators": [],
            "name": "elementA",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 327,
            "end": 336,
            "decorators": [],
            "name": "FileMatch",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 340,
          "end": 369,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 340,
            "end": 348,
            "decorators": [],
            "name": "elementB",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 360,
            "end": 369,
            "decorators": [],
            "name": "FileMatch",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
