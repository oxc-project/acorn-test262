__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 18,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 16,
              "end": 18,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "WhileStatement",
      "start": 29,
      "end": 66,
      "test": {
        "type": "Literal",
        "start": 36,
        "end": 37,
        "value": 1,
        "raw": "1"
      },
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 66,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 45,
            "end": 64,
            "expression": {
              "type": "AssignmentExpression",
              "start": 45,
              "end": 63,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 45,
                "end": 48,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "UnaryExpression",
                "start": 51,
                "end": 63,
                "operator": "~",
                "prefix": true,
                "argument": {
                  "type": "CallExpression",
                  "start": 52,
                  "end": 63,
                  "callee": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 56,
                      "end": 62,
                      "argument": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 62,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                }
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
