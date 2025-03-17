__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 528,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 22,
      "end": 98,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 98,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 96,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 47,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 47,
              "end": 96,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "stringOrUndefined",
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
                "start": 94,
                "end": 96,
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
      "type": "ClassDeclaration",
      "start": 100,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 107,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 108,
        "end": 150,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 114,
            "end": 148,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 125,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 125,
              "end": 148,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "str",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 136,
                      "end": 144,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 138,
                        "end": 144
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
                "start": 146,
                "end": 148,
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
      "type": "VariableDeclaration",
      "start": 152,
      "end": 175,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 174,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 162,
            "end": 174,
            "callee": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 168,
                "end": 173,
                "value": "123",
                "raw": "\"123\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 177,
      "end": 254,
      "test": {
        "type": "LogicalExpression",
        "start": 181,
        "end": 218,
        "left": {
          "type": "BinaryExpression",
          "start": 181,
          "end": 195,
          "left": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "start": 199,
          "end": 218,
          "object": {
            "type": "Identifier",
            "start": 199,
            "end": 200,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 201,
            "end": 218,
            "name": "stringOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 220,
        "end": 254,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 226,
            "end": 252,
            "expression": {
              "type": "NewExpression",
              "start": 226,
              "end": 252,
              "callee": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 232,
                  "end": 251,
                  "object": {
                    "type": "Identifier",
                    "start": 232,
                    "end": 233,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 251,
                    "name": "stringOrUndefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 256,
      "end": 333,
      "test": {
        "type": "LogicalExpression",
        "start": 260,
        "end": 297,
        "left": {
          "type": "MemberExpression",
          "start": 260,
          "end": 279,
          "object": {
            "type": "Identifier",
            "start": 260,
            "end": 261,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 262,
            "end": 279,
            "name": "stringOrUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "start": 283,
          "end": 297,
          "left": {
            "type": "Identifier",
            "start": 283,
            "end": 284,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 296,
            "end": 297,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 299,
        "end": 333,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 305,
            "end": 331,
            "expression": {
              "type": "NewExpression",
              "start": 305,
              "end": 331,
              "callee": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 311,
                  "end": 330,
                  "object": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 330,
                    "name": "stringOrUndefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 335,
      "end": 430,
      "test": {
        "type": "BinaryExpression",
        "start": 339,
        "end": 353,
        "left": {
          "type": "Identifier",
          "start": 339,
          "end": 340,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 352,
          "end": 353,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 355,
        "end": 430,
        "body": [
          {
            "type": "IfStatement",
            "start": 361,
            "end": 428,
            "test": {
              "type": "MemberExpression",
              "start": 365,
              "end": 384,
              "object": {
                "type": "Identifier",
                "start": 365,
                "end": 366,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 367,
                "end": 384,
                "name": "stringOrUndefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 386,
              "end": 428,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 396,
                  "end": 422,
                  "expression": {
                    "type": "NewExpression",
                    "start": 396,
                    "end": 422,
                    "callee": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 401,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 402,
                        "end": 421,
                        "object": {
                          "type": "Identifier",
                          "start": 402,
                          "end": 403,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 404,
                          "end": 421,
                          "name": "stringOrUndefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 432,
      "end": 527,
      "test": {
        "type": "MemberExpression",
        "start": 436,
        "end": 455,
        "object": {
          "type": "Identifier",
          "start": 436,
          "end": 437,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 438,
          "end": 455,
          "name": "stringOrUndefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 457,
        "end": 527,
        "body": [
          {
            "type": "IfStatement",
            "start": 463,
            "end": 525,
            "test": {
              "type": "BinaryExpression",
              "start": 467,
              "end": 481,
              "left": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 483,
              "end": 525,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 493,
                  "end": 519,
                  "expression": {
                    "type": "NewExpression",
                    "start": 493,
                    "end": 519,
                    "callee": {
                      "type": "Identifier",
                      "start": 497,
                      "end": 498,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 499,
                        "end": 518,
                        "object": {
                          "type": "Identifier",
                          "start": 499,
                          "end": 500,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 501,
                          "end": 518,
                          "name": "stringOrUndefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    ],
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
