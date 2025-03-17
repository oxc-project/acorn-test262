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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 17,
            "name": "nestedArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
            "name": "nestedArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 62,
            "name": "forEach",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 63,
            "end": 101,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ArrayPattern",
                "start": 64,
                "end": 72,
                "elements": [
                  {
                    "type": "ArrayPattern",
                    "start": 65,
                    "end": 71,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 66,
                        "end": 67,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 92,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
