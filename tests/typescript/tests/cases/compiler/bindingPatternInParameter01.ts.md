__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 40,
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
                        "value": 1,
                        "raw": "1"
                      },
                      {
                        "type": "Literal",
                        "start": 26,
                        "end": 27,
                        "value": 2,
                        "raw": "2"
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
                        "value": 3,
                        "raw": "3"
                      },
                      {
                        "type": "Literal",
                        "start": 36,
                        "end": 37,
                        "value": 4,
                        "raw": "4"
                      }
                    ]
                  }
                ]
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
      "start": 43,
      "end": 103,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 102,
        "callee": {
          "type": "MemberExpression",
          "start": 43,
          "end": 62,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 54,
            "decorators": [],
            "name": "nestedArray",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 63,
            "end": 101,
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "BlockStatement",
              "start": 77,
              "end": 101,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 81,
                  "end": 99,
                  "expression": {
                    "type": "CallExpression",
                    "start": 81,
                    "end": 98,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 92,
                      "object": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 88,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 92,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
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
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
