__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 16,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 16,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 13,
              "end": 16
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 42,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 20,
            "end": 40,
            "expression": {
              "type": "UnaryExpression",
              "start": 20,
              "end": 39,
              "operator": "void",
              "argument": {
                "type": "ArrowFunctionExpression",
                "start": 26,
                "end": 38,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 31,
                  "end": 37,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
                },
                "id": null,
                "generator": false
              },
              "prefix": true
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 61,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 60,
        "callee": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 46,
            "end": 58,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 51,
              "end": 57,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 62,
      "end": 81,
      "expression": {
        "type": "UnaryExpression",
        "start": 62,
        "end": 80,
        "operator": "void",
        "argument": {
          "type": "ArrowFunctionExpression",
          "start": 67,
          "end": 79,
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "ArrowFunctionExpression",
            "start": 72,
            "end": 78,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "id": null,
          "generator": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 98,
      "expression": {
        "type": "ArrayExpression",
        "start": 82,
        "end": 98,
        "elements": [
          {
            "type": "ArrowFunctionExpression",
            "start": 84,
            "end": 96,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 89,
              "end": 95,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "id": null,
            "generator": false
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
