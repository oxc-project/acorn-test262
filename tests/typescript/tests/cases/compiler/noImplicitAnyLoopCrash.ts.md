__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 10,
            "end": 18,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 16,
              "end": 18,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 28,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 27,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 27,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "UnaryExpression",
                "start": 51,
                "end": 63,
                "operator": "~",
                "argument": {
                  "type": "CallExpression",
                  "start": 52,
                  "end": 63,
                  "callee": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 55,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 56,
                      "end": 62,
                      "argument": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 62,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "optional": false
                },
                "prefix": true
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
