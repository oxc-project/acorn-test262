__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 527,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 98,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 98,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 96,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 47,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 96,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 96,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 48,
                  "end": 92,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 92,
                    "decorators": [],
                    "name": "stringOrUndefined",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 72,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 74,
                        "end": 92,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 74,
                            "end": 80
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 83,
                            "end": 92
                          }
                        ]
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "A",
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
      "start": 100,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 108,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 148,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 148,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 126,
                  "end": 144,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 144,
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 136,
                      "end": 144,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 138,
                        "end": 144
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 174,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 162,
            "end": 174,
            "arguments": [
              {
                "type": "Literal",
                "start": 168,
                "end": 173,
                "raw": "\"123\"",
                "value": "123"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 177,
      "end": 254,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 220,
        "end": 254,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 226,
            "end": 252,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 226,
              "end": 252,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 232,
                  "end": 251,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 251,
                    "decorators": [],
                    "name": "stringOrUndefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 181,
        "end": 218,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 181,
          "end": 195,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 199,
          "end": 218,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 201,
            "end": 218,
            "decorators": [],
            "name": "stringOrUndefined",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 256,
      "end": 333,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 299,
        "end": 333,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 305,
            "end": 331,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 305,
              "end": 331,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 311,
                  "end": 330,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 330,
                    "decorators": [],
                    "name": "stringOrUndefined",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 260,
        "end": 297,
        "operator": "&&",
        "left": {
          "type": "MemberExpression",
          "start": 260,
          "end": 279,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 262,
            "end": 279,
            "decorators": [],
            "name": "stringOrUndefined",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 283,
          "end": 297,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 335,
      "end": 430,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 355,
        "end": 430,
        "body": [
          {
            "type": "IfStatement",
            "start": 361,
            "end": 428,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 386,
              "end": 428,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 396,
                  "end": 422,
                  "directive": null,
                  "expression": {
                    "type": "NewExpression",
                    "start": 396,
                    "end": 422,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 402,
                        "end": 421,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 402,
                          "end": 403,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 404,
                          "end": 421,
                          "decorators": [],
                          "name": "stringOrUndefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 401,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 365,
              "end": 384,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 365,
                "end": 366,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 367,
                "end": 384,
                "decorators": [],
                "name": "stringOrUndefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 339,
        "end": 353,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 339,
          "end": 340,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 352,
          "end": 353,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 432,
      "end": 527,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 457,
        "end": 527,
        "body": [
          {
            "type": "IfStatement",
            "start": 463,
            "end": 525,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 483,
              "end": 525,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 493,
                  "end": 519,
                  "directive": null,
                  "expression": {
                    "type": "NewExpression",
                    "start": 493,
                    "end": 519,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 499,
                        "end": 518,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 499,
                          "end": 500,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 518,
                          "decorators": [],
                          "name": "stringOrUndefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 497,
                      "end": 498,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 467,
              "end": 481,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "MemberExpression",
        "start": 436,
        "end": 455,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 436,
          "end": 437,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 438,
          "end": 455,
          "decorators": [],
          "name": "stringOrUndefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
