__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 24
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 31,
              "end": 37
            },
            "start": 29,
            "end": 37
          },
          "start": 25,
          "end": 37
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 40,
          "end": 42
        },
        "start": 38,
        "end": 42
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 43
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "concat",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 48
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 84
                },
                "init": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 87,
                  "end": 89
                },
                "definite": false,
                "start": 83,
                "end": 89
              }
            ],
            "declare": false,
            "start": 79,
            "end": 89
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 102
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 105,
                    "end": 106
                  },
                  "definite": false,
                  "start": 101,
                  "end": 106
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 109
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 121
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 128
                    },
                    "optional": false,
                    "computed": false,
                    "start": 112,
                    "end": 128
                  },
                  "definite": false,
                  "start": 108,
                  "end": 128
                }
              ],
              "declare": false,
              "start": 97,
              "end": 128
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 131
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 135
              },
              "start": 130,
              "end": 135
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 138
              },
              "start": 137,
              "end": 140
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 149
                    },
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 153,
                        "end": 162
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 164
                      },
                      "optional": false,
                      "computed": true,
                      "start": 153,
                      "end": 165
                    },
                    "start": 148,
                    "end": 165
                  },
                  "directive": null,
                  "start": 148,
                  "end": 165
                }
              ],
              "start": 142,
              "end": 169
            },
            "start": 92,
            "end": 169
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 180
            },
            "start": 172,
            "end": 180
          }
        ],
        "start": 75,
        "end": 182
      },
      "expression": false,
      "start": 33,
      "end": 182
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "correct",
        "optional": false,
        "typeAnnotation": null,
        "start": 231,
        "end": 238
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 256
            },
            "directive": null,
            "start": 247,
            "end": 256
          }
        ],
        "start": 241,
        "end": 258
      },
      "expression": false,
      "start": 222,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "correct",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 267
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 268,
            "end": 269
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 270,
            "end": 271
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 272,
            "end": 273
          }
        ],
        "optional": false,
        "start": 260,
        "end": 274
      },
      "directive": null,
      "start": 260,
      "end": 274
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 283
}
```
