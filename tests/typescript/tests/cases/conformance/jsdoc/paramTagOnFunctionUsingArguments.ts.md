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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 24,
        "decorators": [],
        "name": "factory",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
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
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 48,
        "decorators": [],
        "name": "concat",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 182,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 79,
            "end": 89,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 83,
                "end": 89,
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
                  "value": "",
                  "raw": "''"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 92,
            "end": 169,
            "init": {
              "type": "VariableDeclaration",
              "start": 97,
              "end": 128,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 101,
                  "end": 106,
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
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                },
                {
                  "type": "VariableDeclarator",
                  "start": 108,
                  "end": 128,
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
                    "object": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 121,
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 128,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 130,
              "end": 135,
              "left": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
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
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 137,
                "end": 138,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 142,
              "end": 169,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 148,
                  "end": 165,
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
                      "object": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 162,
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 163,
                        "end": 164,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    }
                  },
                  "directive": null
                }
              ]
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 222,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 238,
        "decorators": [],
        "name": "correct",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 258,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 247,
            "end": 256,
            "expression": {
              "type": "Identifier",
              "start": 247,
              "end": 256,
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 274,
      "expression": {
        "type": "CallExpression",
        "start": 260,
        "end": 274,
        "callee": {
          "type": "Identifier",
          "start": 260,
          "end": 267,
          "decorators": [],
          "name": "correct",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 268,
            "end": 269,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 270,
            "end": 271,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 272,
            "end": 273,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
