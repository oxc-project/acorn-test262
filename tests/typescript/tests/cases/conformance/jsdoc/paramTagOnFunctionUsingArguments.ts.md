__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 43,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "factory",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 25,
          "end": 37,
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 37,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 42,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 40,
          "end": 42,
          "members": []
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 283,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 33,
      "end": 182,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 182,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 79,
            "end": 89,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 83,
                "end": 89,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 87,
                  "end": 89,
                  "raw": "''",
                  "value": ""
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ForStatement",
            "start": 92,
            "end": 169,
            "body": {
              "type": "BlockStatement",
              "start": 142,
              "end": 169,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 148,
                  "end": 165,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 148,
                    "end": 165,
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 149,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 153,
                      "end": 165,
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 162,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 97,
              "end": 128,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 101,
                  "end": 106,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 105,
                    "end": 106,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "start": 108,
                  "end": 128,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 108,
                    "end": 109,
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "MemberExpression",
                    "start": 112,
                    "end": 128,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 121,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 128,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 130,
              "end": 135,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 137,
              "end": 140,
              "argument": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 172,
            "end": 180,
            "argument": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "s",
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
        "start": 42,
        "end": 48,
        "decorators": [],
        "name": "concat",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 222,
      "end": 258,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 258,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 247,
            "end": 256,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 247,
              "end": 256,
              "decorators": [],
              "name": "arguments",
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
        "start": 231,
        "end": 238,
        "decorators": [],
        "name": "correct",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 274,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 260,
        "end": 274,
        "arguments": [
          {
            "type": "Literal",
            "start": 268,
            "end": 269,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 270,
            "end": 271,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 272,
            "end": 273,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 260,
          "end": 267,
          "decorators": [],
          "name": "correct",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
