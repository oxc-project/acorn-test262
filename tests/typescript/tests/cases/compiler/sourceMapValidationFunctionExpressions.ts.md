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
            "name": "greetings",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 16,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
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
            "name": "greet",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 28
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
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 40,
                  "end": 48
                },
                "start": 32,
                "end": 48
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
              },
              "start": 49,
              "end": 57
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greetings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 76
                    },
                    "start": 67,
                    "end": 78
                  },
                  "directive": null,
                  "start": 67,
                  "end": 79
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greetings",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 100
                  },
                  "start": 84,
                  "end": 101
                }
              ],
              "start": 61,
              "end": 103
            },
            "id": null,
            "generator": false,
            "start": 31,
            "end": 103
          },
          "definite": false,
          "start": 23,
          "end": 103
        }
      ],
      "declare": false,
      "start": 19,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "greet",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 109
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Hello",
            "raw": "\"Hello\"",
            "start": 110,
            "end": 117
          }
        ],
        "optional": false,
        "start": 104,
        "end": 118
      },
      "directive": null,
      "start": 104,
      "end": 119
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
            "name": "incrGreetings",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 137
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "greetings",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 155
              },
              "start": 146,
              "end": 157
            },
            "id": null,
            "generator": false,
            "start": 140,
            "end": 157
          },
          "definite": false,
          "start": 124,
          "end": 157
        }
      ],
      "declare": false,
      "start": 120,
      "end": 158
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
