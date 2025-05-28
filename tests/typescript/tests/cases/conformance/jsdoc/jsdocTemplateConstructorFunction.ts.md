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
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 103,
        "decorators": [],
        "name": "Zet",
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
          "start": 104,
          "end": 105,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 107,
        "end": 157,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 134,
            "end": 140,
            "expression": {
              "type": "MemberExpression",
              "start": 134,
              "end": 140,
              "object": {
                "type": "ThisExpression",
                "start": 134,
                "end": 138
              },
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 140,
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 145,
            "end": 155,
            "expression": {
              "type": "AssignmentExpression",
              "start": 145,
              "end": 155,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 145,
                "end": 151,
                "object": {
                  "type": "ThisExpression",
                  "start": 145,
                  "end": 149
                },
                "property": {
                  "type": "Identifier",
                  "start": 150,
                  "end": 151,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
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
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 203,
      "end": 289,
      "expression": {
        "type": "AssignmentExpression",
        "start": 203,
        "end": 289,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 203,
          "end": 220,
          "object": {
            "type": "MemberExpression",
            "start": 203,
            "end": 216,
            "object": {
              "type": "Identifier",
              "start": 203,
              "end": 206,
              "decorators": [],
              "name": "Zet",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 207,
              "end": 216,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 223,
          "end": 289,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
          "body": {
            "type": "BlockStatement",
            "start": 239,
            "end": 289,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 245,
                "end": 265,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 245,
                  "end": 265,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 245,
                    "end": 251,
                    "object": {
                      "type": "ThisExpression",
                      "start": 245,
                      "end": 249
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 251,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "start": 254,
                    "end": 265,
                    "left": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 255,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "||",
                    "right": {
                      "type": "MemberExpression",
                      "start": 259,
                      "end": 265,
                      "object": {
                        "type": "ThisExpression",
                        "start": 259,
                        "end": 263
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 265,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                },
                "directive": null
              },
              {
                "type": "ReturnStatement",
                "start": 270,
                "end": 287,
                "argument": {
                  "type": "CallExpression",
                  "start": 277,
                  "end": 287,
                  "callee": {
                    "type": "Identifier",
                    "start": 277,
                    "end": 279,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 280,
                      "end": 286,
                      "object": {
                        "type": "ThisExpression",
                        "start": 280,
                        "end": 284
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 286,
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ],
                  "optional": false
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 290,
      "end": 308,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 294,
          "end": 308,
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
            "callee": {
              "type": "Identifier",
              "start": 302,
              "end": 305,
              "decorators": [],
              "name": "Zet",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 306,
                "end": 307,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 316,
      "expression": {
        "type": "AssignmentExpression",
        "start": 309,
        "end": 316,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 309,
          "end": 312,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 310,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 311,
            "end": 312,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 315,
          "end": 316,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 317,
      "end": 328,
      "expression": {
        "type": "AssignmentExpression",
        "start": 317,
        "end": 328,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 317,
          "end": 320,
          "object": {
            "type": "Identifier",
            "start": 317,
            "end": 318,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 319,
            "end": 320,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 323,
          "end": 328,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
