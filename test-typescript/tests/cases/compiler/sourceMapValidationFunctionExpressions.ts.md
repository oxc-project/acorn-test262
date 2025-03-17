__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 158,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "greetings",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 17,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 103,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 103,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 28,
            "name": "greet",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 31,
            "end": 103,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 32,
                "end": 48,
                "name": "greeting",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 61,
              "end": 103,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 67,
                  "end": 79,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 67,
                    "end": 78,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 76,
                      "name": "greetings",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 84,
                  "end": 101,
                  "argument": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 100,
                    "name": "greetings",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 119,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 118,
        "callee": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "name": "greet",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 110,
            "end": 117,
            "value": "Hello",
            "raw": "\"Hello\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 120,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 137,
            "name": "incrGreetings",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 140,
            "end": 157,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "UpdateExpression",
              "start": 146,
              "end": 157,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 146,
                "end": 155,
                "name": "greetings",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
