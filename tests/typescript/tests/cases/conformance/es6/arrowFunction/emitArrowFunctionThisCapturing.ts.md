__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 21,
                        "end": 25
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "age",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 26,
                        "end": 29
                      },
                      "optional": false,
                      "computed": false,
                      "start": 21,
                      "end": 29
                    },
                    "right": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 32,
                      "end": 34
                    },
                    "start": 21,
                    "end": 34
                  },
                  "directive": null,
                  "start": 21,
                  "end": 34
                }
              ],
              "start": 15,
              "end": 36
            },
            "id": null,
            "generator": false,
            "start": 9,
            "end": 36
          },
          "definite": false,
          "start": 4,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 45
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 52,
                    "end": 58
                  },
                  "start": 50,
                  "end": 58
                },
                "start": 49,
                "end": 58
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 69,
                        "end": 73
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 74,
                        "end": 78
                      },
                      "optional": false,
                      "computed": false,
                      "start": 69,
                      "end": 78
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 82
                    },
                    "start": 69,
                    "end": 82
                  },
                  "directive": null,
                  "start": 69,
                  "end": 82
                }
              ],
              "start": 63,
              "end": 84
            },
            "id": null,
            "generator": false,
            "start": 48,
            "end": 84
          },
          "definite": false,
          "start": 43,
          "end": 84
        }
      ],
      "declare": false,
      "start": 39,
      "end": 84
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 98
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 111,
                  "end": 118
                },
                "start": 108,
                "end": 118
              },
              "start": 105,
              "end": 118
            },
            "start": 103,
            "end": 118
          },
          "start": 99,
          "end": 118
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 120,
        "end": 123
      },
      "expression": false,
      "start": 86,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 127
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 140,
                        "end": 144
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "age",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 148
                      },
                      "optional": false,
                      "computed": false,
                      "start": 140,
                      "end": 148
                    },
                    "right": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 151,
                      "end": 154
                    },
                    "start": 140,
                    "end": 154
                  },
                  "directive": null,
                  "start": 140,
                  "end": 155
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 167,
                    "end": 171
                  },
                  "start": 160,
                  "end": 172
                }
              ],
              "start": 134,
              "end": 174
            },
            "id": null,
            "generator": false,
            "start": 128,
            "end": 174
          }
        ],
        "optional": false,
        "start": 124,
        "end": 175
      },
      "directive": null,
      "start": 124,
      "end": 176
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 176
}
```
