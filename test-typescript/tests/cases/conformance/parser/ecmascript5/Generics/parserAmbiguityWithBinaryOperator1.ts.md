__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 69,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 69,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 33,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 26,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 29,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 32,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 38,
            "end": 67,
            "test": {
              "type": "LogicalExpression",
              "start": 42,
              "end": 62,
              "left": {
                "type": "BinaryExpression",
                "start": 42,
                "end": 47,
                "left": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 43,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<",
                "right": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 51,
                "end": 62,
                "left": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": ">",
                "right": {
                  "type": "BinaryExpression",
                  "start": 56,
                  "end": 61,
                  "left": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 60,
                    "end": 61,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 64,
              "end": 67,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
