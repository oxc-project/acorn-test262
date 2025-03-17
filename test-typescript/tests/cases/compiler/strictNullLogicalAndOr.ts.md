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
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 33,
            "name": "sinOrCos",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 47,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
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
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 66,
            "name": "choice",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "sinOrCos",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 89,
                  "name": "sin",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 98,
                "end": 101,
                "name": "cos",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
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
          "name": "choice",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 111,
            "end": 118,
            "object": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "name": "Math",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 116,
              "end": 118,
              "name": "PI",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "sq",
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
          "start": 134,
          "end": 144,
          "name": "n",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 144,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 138,
              "end": 144
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 165,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Identifier",
                        "start": 174,
                        "end": 183,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "*",
                      "right": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "name": "n",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
            "kind": "const",
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
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 145,
        "end": 153,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 147,
          "end": 153
        }
      }
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
          "name": "sq",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 215,
            "end": 216,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
