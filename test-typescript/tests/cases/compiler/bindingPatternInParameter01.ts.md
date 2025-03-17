__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 17,
            "decorators": [],
            "name": "nestedArray",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 20,
            "end": 40,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 21,
                "end": 29,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 22,
                    "end": 28,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 23,
                        "end": 24,
                        "raw": "1",
                        "value": 1
                      },
                      {
                        "type": "Literal",
                        "start": 26,
                        "end": 27,
                        "raw": "2",
                        "value": 2
                      }
                    ]
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 31,
                "end": 39,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 32,
                    "end": 38,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 33,
                        "end": 34,
                        "raw": "3",
                        "value": 3
                      },
                      {
                        "type": "Literal",
                        "start": 36,
                        "end": 37,
                        "raw": "4",
                        "value": 4
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 103,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 102,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 63,
            "end": 101,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 77,
              "end": 101,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 81,
                  "end": 99,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 81,
                    "end": 98,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 92,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 88,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 92,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 64,
                "end": 72,
                "decorators": [],
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 65,
                    "end": 71,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 43,
          "end": 62,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 54,
            "decorators": [],
            "name": "nestedArray",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
