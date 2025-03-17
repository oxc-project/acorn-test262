__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 218,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 33,
            "decorators": [],
            "name": "sinOrCos",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 36,
            "end": 54,
            "operator": "<",
            "left": {
              "type": "CallExpression",
              "start": 36,
              "end": 49,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 36,
                "end": 47,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 40,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 47,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "right": {
              "type": "Literal",
              "start": 52,
              "end": 54,
              "raw": ".5",
              "value": 0.5
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 66,
            "decorators": [],
            "name": "choice",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 69,
            "end": 101,
            "operator": "||",
            "left": {
              "type": "LogicalExpression",
              "start": 69,
              "end": 89,
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "start": 69,
                "end": 77,
                "decorators": [],
                "name": "sinOrCos",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 81,
                "end": 89,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 85,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 89,
                  "decorators": [],
                  "name": "sin",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 93,
              "end": 101,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 93,
                "end": 97,
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 101,
                "decorators": [],
                "name": "cos",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 120,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 119,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 111,
            "end": 118,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "decorators": [],
              "name": "Math",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 116,
              "end": 118,
              "decorators": [],
              "name": "PI",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 104,
          "end": 110,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 210,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 210,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 158,
            "end": 196,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 164,
                "end": 195,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 168,
                  "end": 195,
                  "operator": "||",
                  "left": {
                    "type": "LogicalExpression",
                    "start": 168,
                    "end": 190,
                    "operator": "&&",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 168,
                      "end": 183,
                      "operator": "!==",
                      "left": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 183,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 187,
                      "end": 190,
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 194,
                    "end": 195,
                    "raw": "0",
                    "value": 0
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 199,
            "end": 208,
            "argument": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 133,
        "decorators": [],
        "name": "sq",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 134,
          "end": 144,
          "decorators": [],
          "name": "n",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 144,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 138,
              "end": 144
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 145,
        "end": 153,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 147,
          "end": 153
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 218,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 212,
        "end": 217,
        "arguments": [
          {
            "type": "Literal",
            "start": 215,
            "end": 216,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 212,
          "end": 214,
          "decorators": [],
          "name": "sq",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
