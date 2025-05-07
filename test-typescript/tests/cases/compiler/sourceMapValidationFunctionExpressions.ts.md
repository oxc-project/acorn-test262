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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "greetings",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 17,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 28,
            "decorators": [],
            "name": "greet",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 31,
            "end": 103,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 61,
              "end": 103,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 67,
                  "end": 79,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 67,
                    "end": 78,
                    "argument": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 76,
                      "decorators": [],
                      "name": "greetings",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "++",
                    "prefix": false
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 84,
                  "end": 101,
                  "argument": {
                    "type": "Identifier",
                    "start": 91,
                    "end": 100,
                    "decorators": [],
                    "name": "greetings",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 32,
                "end": 48,
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 57,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 119,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 104,
        "end": 118,
        "arguments": [
          {
            "type": "Literal",
            "start": 110,
            "end": 117,
            "raw": "\"Hello\"",
            "value": "Hello",
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 104,
          "end": 109,
          "decorators": [],
          "name": "greet",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 137,
            "decorators": [],
            "name": "incrGreetings",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 140,
            "end": 157,
            "async": false,
            "body": {
              "type": "UpdateExpression",
              "start": 146,
              "end": 157,
              "argument": {
                "type": "Identifier",
                "start": 146,
                "end": 155,
                "decorators": [],
                "name": "greetings",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
