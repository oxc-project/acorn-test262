__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 649,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 8,
            "name": "let",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 11,
            "end": 13,
            "value": 10,
            "raw": "10"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 16,
      "end": 647,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 28,
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
        "start": 31,
        "end": 647,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 37,
            "end": 49,
            "expression": {
              "type": "Literal",
              "start": 37,
              "end": 49,
              "value": "use strict",
              "raw": "\"use strict\""
            },
            "directive": "use strict"
          },
          {
            "type": "VariableDeclaration",
            "start": 54,
            "end": 70,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 58,
                "end": 69,
                "id": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 64,
                  "name": "public",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 67,
                  "end": 69,
                  "value": 10,
                  "raw": "10"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 75,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 79,
                "end": 92,
                "id": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 85,
                  "name": "static",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 88,
                  "end": 92,
                  "value": "hi",
                  "raw": "\"hi\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 98,
            "end": 115,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 102,
                "end": 114,
                "id": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 105,
                  "name": "let",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 108,
                  "end": 114,
                  "value": "blah",
                  "raw": "\"blah\""
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 120,
            "end": 141,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 124,
                "end": 141,
                "id": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 131,
                  "name": "package",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 134,
                  "end": 141,
                  "value": "hello",
                  "raw": "\"hello\""
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 146,
            "end": 168,
            "id": {
              "type": "Identifier",
              "start": 155,
              "end": 162,
              "name": "package",
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
              "start": 165,
              "end": 168,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 173,
            "end": 215,
            "id": {
              "type": "Identifier",
              "start": 182,
              "end": 185,
              "name": "bar",
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
                "start": 186,
                "end": 193,
                "name": "private",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 195,
                "end": 205,
                "name": "implements",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 207,
                "end": 210,
                "name": "let",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 212,
              "end": 215,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 220,
            "end": 261,
            "id": {
              "type": "Identifier",
              "start": 229,
              "end": 232,
              "name": "baz",
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
              "start": 258,
              "end": 261,
              "body": []
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 232,
              "end": 255,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 233,
                  "end": 243,
                  "name": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 243,
                    "name": "implements",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 245,
                  "end": 254,
                  "name": {
                    "type": "Identifier",
                    "start": 245,
                    "end": 254,
                    "name": "protected",
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
            "start": 266,
            "end": 323,
            "id": {
              "type": "Identifier",
              "start": 275,
              "end": 279,
              "name": "barn",
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
                "start": 280,
                "end": 318,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 282,
                  "end": 318,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 284,
                    "end": 318,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 285,
                        "end": 292,
                        "name": "private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 294,
                        "end": 300,
                        "name": "public",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 302,
                        "end": 309,
                        "name": "package",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 311,
                      "end": 318,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 314,
                        "end": 318
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 320,
              "end": 323,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 368,
            "expression": {
              "type": "CallExpression",
              "start": 328,
              "end": 367,
              "callee": {
                "type": "Identifier",
                "start": 328,
                "end": 332,
                "name": "barn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 333,
                  "end": 366,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 334,
                      "end": 341,
                      "name": "private",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 343,
                      "end": 349,
                      "name": "public",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 351,
                      "end": 358,
                      "name": "package",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 363,
                    "end": 366,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 374,
            "end": 419,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 378,
                "end": 419,
                "id": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 385,
                  "name": "myClass",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ClassExpression",
                  "start": 388,
                  "end": 419,
                  "id": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 401,
                    "name": "package",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 416,
                    "name": "public",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "body": {
                    "type": "ClassBody",
                    "start": 417,
                    "end": 419,
                    "body": []
                  },
                  "decorators": [],
                  "typeParameters": null,
                  "implements": [],
                  "abstract": false,
                  "declare": false,
                  "superTypeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 425,
            "end": 443,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 429,
                "end": 442,
                "id": {
                  "type": "Identifier",
                  "start": 429,
                  "end": 442,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 430,
                    "end": 442,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 432,
                      "end": 442,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 432,
                        "end": 442,
                        "left": {
                          "type": "Identifier",
                          "start": 432,
                          "end": 438,
                          "name": "public",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 439,
                          "end": 442,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 449,
            "end": 479,
            "id": {
              "type": "Identifier",
              "start": 458,
              "end": 461,
              "name": "foo",
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
                "start": 462,
                "end": 474,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 463,
                  "end": 474,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 465,
                    "end": 474,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 465,
                      "end": 474,
                      "left": {
                        "type": "Identifier",
                        "start": 465,
                        "end": 472,
                        "name": "private",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 474,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 476,
              "end": 479,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 484,
            "end": 523,
            "id": {
              "type": "Identifier",
              "start": 493,
              "end": 497,
              "name": "foo1",
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
                "start": 498,
                "end": 518,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 499,
                  "end": 518,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 501,
                    "end": 518,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 501,
                      "end": 518,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 501,
                        "end": 516,
                        "left": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 508,
                          "name": "private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 509,
                          "end": 516,
                          "name": "package",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 518,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 520,
              "end": 523,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 528,
            "end": 575,
            "id": {
              "type": "Identifier",
              "start": 537,
              "end": 541,
              "name": "foo2",
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
                "start": 542,
                "end": 570,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 543,
                  "end": 570,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 545,
                    "end": 570,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 545,
                      "end": 570,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 545,
                        "end": 560,
                        "left": {
                          "type": "Identifier",
                          "start": 545,
                          "end": 552,
                          "name": "private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 560,
                          "name": "package",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 561,
                        "end": 570,
                        "name": "protected",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 572,
              "end": 575,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 580,
            "end": 618,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 584,
                "end": 617,
                "id": {
                  "type": "Identifier",
                  "start": 584,
                  "end": 617,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 585,
                    "end": 617,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 587,
                      "end": 617,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 587,
                        "end": 617,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 587,
                          "end": 615,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 587,
                            "end": 604,
                            "left": {
                              "type": "Identifier",
                              "start": 587,
                              "end": 596,
                              "name": "interface",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 597,
                              "end": 604,
                              "name": "package",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 605,
                            "end": 615,
                            "name": "implements",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 616,
                          "end": 617,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
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
            "start": 623,
            "end": 631,
            "expression": {
              "type": "CallExpression",
              "start": 623,
              "end": 630,
              "callee": {
                "type": "Identifier",
                "start": 623,
                "end": 628,
                "name": "ublic",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 636,
            "end": 645,
            "expression": {
              "type": "CallExpression",
              "start": 636,
              "end": 644,
              "callee": {
                "type": "Identifier",
                "start": 636,
                "end": 642,
                "name": "static",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
