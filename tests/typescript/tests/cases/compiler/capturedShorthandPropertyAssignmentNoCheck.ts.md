__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fns",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 12,
            "end": 14
          },
          "definite": false,
          "start": 6,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "init": null,
            "definite": false,
            "start": 27,
            "end": 32
          }
        ],
        "declare": false,
        "start": 21,
        "end": 32
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 37,
            "end": 38
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 40,
            "end": 41
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 43,
            "end": 44
          }
        ],
        "start": 36,
        "end": 45
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 56
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 61
                },
                "optional": false,
                "computed": false,
                "start": 53,
                "end": 61
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 76
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 76
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 71,
                        "end": 76
                      }
                    ],
                    "start": 69,
                    "end": 78
                  },
                  "id": null,
                  "generator": false,
                  "start": 62,
                  "end": 79
                }
              ],
              "optional": false,
              "start": 53,
              "end": 80
            },
            "directive": null,
            "start": 53,
            "end": 81
          }
        ],
        "start": 47,
        "end": 83
      },
      "start": 16,
      "end": 83
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 96
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "fns",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 102
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 106
              },
              "optional": false,
              "computed": false,
              "start": 99,
              "end": 106
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 109
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 115
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 113,
                  "end": 117
                },
                "id": null,
                "generator": false,
                "start": 107,
                "end": 117
              }
            ],
            "optional": false,
            "start": 99,
            "end": 118
          },
          "definite": false,
          "start": 90,
          "end": 118
        }
      ],
      "declare": false,
      "start": 84,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 127
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "optional": false,
          "computed": false,
          "start": 120,
          "end": 131
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 138
          }
        ],
        "optional": false,
        "start": 120,
        "end": 139
      },
      "directive": null,
      "start": 120,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 139
}
```
