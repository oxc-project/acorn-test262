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
            "name": "nestedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 23,
                        "end": 24
                      },
                      {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 26,
                        "end": 27
                      }
                    ],
                    "start": 22,
                    "end": 28
                  }
                ],
                "start": 21,
                "end": 29
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 33,
                        "end": 34
                      },
                      {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 36,
                        "end": 37
                      }
                    ],
                    "start": 32,
                    "end": 38
                  }
                ],
                "start": 31,
                "end": 39
              }
            ],
            "start": 20,
            "end": 40
          },
          "definite": false,
          "start": 6,
          "end": 40
        }
      ],
      "declare": false,
      "start": 0,
      "end": 41
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
            "name": "nestedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 54
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 62
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 62
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 67
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 70
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 71
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 72
              }
            ],
            "returnType": null,
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 88
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 92
                      },
                      "optional": false,
                      "computed": false,
                      "start": 81,
                      "end": 92
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 94
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 96,
                        "end": 97
                      }
                    ],
                    "optional": false,
                    "start": 81,
                    "end": 98
                  },
                  "directive": null,
                  "start": 81,
                  "end": 99
                }
              ],
              "start": 77,
              "end": 101
            },
            "id": null,
            "generator": false,
            "start": 63,
            "end": 101
          }
        ],
        "optional": false,
        "start": 43,
        "end": 102
      },
      "directive": null,
      "start": 43,
      "end": 103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
