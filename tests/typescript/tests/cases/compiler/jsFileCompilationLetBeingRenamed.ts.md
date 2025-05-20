__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 84,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 16,
        "end": 84,
        "body": [
          {
            "type": "ForStatement",
            "start": 22,
            "end": 82,
            "body": {
              "type": "BlockStatement",
              "start": 51,
              "end": 82,
              "body": []
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 27,
              "end": 36,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 31,
                  "end": 36,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 35,
                    "end": 36,
                    "raw": "0",
                    "value": 0
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 38,
              "end": 44,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 42,
                "end": 44,
                "raw": "10",
                "value": 10
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 46,
              "end": 49,
              "argument": {
                "type": "Identifier",
                "start": 46,
                "end": 47,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
