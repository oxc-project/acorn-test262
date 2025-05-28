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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 54,
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
            "left": {
              "type": "CallExpression",
              "start": 36,
              "end": 49,
              "callee": {
                "type": "MemberExpression",
                "start": 36,
                "end": 47,
                "object": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 40,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 47,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "start": 52,
              "end": 54,
              "value": 0.5,
              "raw": ".5"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 102,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 101,
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
            "left": {
              "type": "LogicalExpression",
              "start": 69,
              "end": 89,
              "left": {
                "type": "Identifier",
                "start": 69,
                "end": 77,
                "decorators": [],
                "name": "sinOrCos",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 81,
                "end": 89,
                "object": {
                  "type": "Identifier",
                  "start": 81,
                  "end": 85,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 89,
                  "decorators": [],
                  "name": "sin",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "operator": "||",
            "right": {
              "type": "MemberExpression",
              "start": 93,
              "end": 101,
              "object": {
                "type": "Identifier",
                "start": 93,
                "end": 97,
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 101,
                "decorators": [],
                "name": "cos",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 120,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 119,
        "callee": {
          "type": "Identifier",
          "start": 104,
          "end": 110,
          "decorators": [],
          "name": "choice",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 111,
            "end": 118,
            "object": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "decorators": [],
              "name": "Math",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 116,
              "end": 118,
              "decorators": [],
              "name": "PI",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 133,
        "decorators": [],
        "name": "sq",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 154,
        "end": 210,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 158,
            "end": 196,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 164,
                "end": 195,
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
                  "left": {
                    "type": "LogicalExpression",
                    "start": 168,
                    "end": 190,
                    "left": {
                      "type": "BinaryExpression",
                      "start": 168,
                      "end": 183,
                      "left": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "!==",
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
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "start": 187,
                      "end": 190,
                      "left": {
                        "type": "Identifier",
                        "start": 187,
                        "end": 188,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "*",
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
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "start": 194,
                    "end": 195,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "definite": false
              }
            ],
            "declare": false
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
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 218,
      "expression": {
        "type": "CallExpression",
        "start": 212,
        "end": 217,
        "callee": {
          "type": "Identifier",
          "start": 212,
          "end": 214,
          "decorators": [],
          "name": "sq",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 215,
            "end": 216,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
