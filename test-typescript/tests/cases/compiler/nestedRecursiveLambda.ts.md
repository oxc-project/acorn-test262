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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 16,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 16,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 13,
              "end": 16
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "prefix": true,
              "argument": {
                "type": "ArrowFunctionExpression",
                "start": 26,
                "end": 38,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 26,
                    "end": 27,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "ArrowFunctionExpression",
                  "start": 31,
                  "end": 37,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "name": "r",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "name": "r",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "typeParameters": null,
                "returnType": null
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 46,
            "end": 58,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 51,
              "end": 57,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "prefix": true,
        "argument": {
          "type": "ArrowFunctionExpression",
          "start": 67,
          "end": 79,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "body": {
            "type": "ArrowFunctionExpression",
            "start": 72,
            "end": 78,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "typeParameters": null,
          "returnType": null
        }
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
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "ArrowFunctionExpression",
              "start": 89,
              "end": 95,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "r",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "typeParameters": null,
            "returnType": null
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
