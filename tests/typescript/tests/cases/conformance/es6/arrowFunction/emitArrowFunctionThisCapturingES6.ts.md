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
        "start": 119,
        "end": 122
      },
      "expression": false,
      "start": 86,
      "end": 122
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
          "start": 123,
          "end": 126
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
                        "start": 139,
                        "end": 143
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "age",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 147
                      },
                      "optional": false,
                      "computed": false,
                      "start": 139,
                      "end": 147
                    },
                    "right": {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 150,
                      "end": 153
                    },
                    "start": 139,
                    "end": 153
                  },
                  "directive": null,
                  "start": 139,
                  "end": 154
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 166,
                    "end": 170
                  },
                  "start": 159,
                  "end": 171
                }
              ],
              "start": 133,
              "end": 173
            },
            "id": null,
            "generator": false,
            "start": 127,
            "end": 173
          }
        ],
        "optional": false,
        "start": 123,
        "end": 174
      },
      "directive": null,
      "start": 123,
      "end": 175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 175
}
```
