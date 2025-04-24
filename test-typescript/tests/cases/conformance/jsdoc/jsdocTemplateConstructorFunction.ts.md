__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 91,
  "end": 328,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 157,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 157,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 134,
            "end": 140,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 134,
              "end": 140,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 134,
                "end": 138
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 145,
            "end": 155,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 145,
              "end": 155,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 145,
                "end": 151,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 145,
                  "end": 149
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
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
        "start": 100,
        "end": 103,
        "decorators": [],
        "name": "Zet",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 104,
          "end": 105,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 289,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 203,
        "end": 289,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 203,
          "end": 220,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 203,
            "end": 216,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 203,
              "end": 206,
              "decorators": [],
              "name": "Zet",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 207,
              "end": 216,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 223,
          "end": 289,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 239,
            "end": 289,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 245,
                "end": 265,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 245,
                  "end": 265,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 245,
                    "end": 251,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 245,
                      "end": 249
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 251,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "start": 254,
                    "end": 265,
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 255,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 259,
                      "end": 265,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 259,
                        "end": 263
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 265,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              },
              {
                "type": "ReturnStatement",
                "start": 270,
                "end": 287,
                "argument": {
                  "type": "CallExpression",
                  "start": 277,
                  "end": 287,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 280,
                      "end": 286,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 280,
                        "end": 284
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 286,
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 279,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 235,
              "end": 237,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 308,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 294,
            "end": 295,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 298,
            "end": 308,
            "arguments": [
              {
                "type": "Literal",
                "start": 306,
                "end": 307,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 302,
              "end": 305,
              "decorators": [],
              "name": "Zet",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 316,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 309,
        "end": 316,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 309,
          "end": 312,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 310,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 311,
            "end": 312,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 315,
          "end": 316,
          "raw": "2",
          "value": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 317,
      "end": 328,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 317,
        "end": 328,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 317,
          "end": 320,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 317,
            "end": 318,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 319,
            "end": 320,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 323,
          "end": 328,
          "raw": "false",
          "value": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
