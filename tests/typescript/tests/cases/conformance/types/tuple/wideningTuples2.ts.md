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
            "name": "foo",
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
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 16,
                        "end": 19
                      }
                    ],
                    "start": 15,
                    "end": 20
                  },
                  "start": 12,
                  "end": 20
                },
                "start": 9,
                "end": 20
              },
              "start": 7,
              "end": 20
            },
            "start": 4,
            "end": 20
          },
          "init": {
            "type": "FunctionExpression",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "intermediate",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 60
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 66
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 63,
                        "end": 68
                      },
                      "definite": false,
                      "start": 48,
                      "end": 68
                    }
                  ],
                  "declare": false,
                  "start": 44,
                  "end": 69
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "intermediate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 74,
                      "end": 86
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 90,
                          "end": 92
                        }
                      ],
                      "start": 89,
                      "end": 93
                    },
                    "start": 74,
                    "end": 93
                  },
                  "directive": null,
                  "start": 74,
                  "end": 94
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 107,
                        "end": 116
                      }
                    ],
                    "start": 106,
                    "end": 117
                  },
                  "start": 99,
                  "end": 118
                }
              ],
              "start": 38,
              "end": 120
            },
            "expression": false,
            "start": 23,
            "end": 120
          },
          "definite": false,
          "start": 4,
          "end": 120
        }
      ],
      "declare": false,
      "start": 0,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 121
}
```
