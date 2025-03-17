__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 68,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 1,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "f",
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
        "start": 14,
        "end": 68,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 32,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 25,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
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
                "start": 27,
                "end": 28,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
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
                "start": 30,
                "end": 31,
                "id": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
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
            "start": 37,
            "end": 66,
            "test": {
              "type": "LogicalExpression",
              "start": 41,
              "end": 61,
              "left": {
                "type": "BinaryExpression",
                "start": 41,
                "end": 46,
                "left": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "<",
                "right": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "start": 50,
                "end": 61,
                "left": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": ">",
                "right": {
                  "type": "BinaryExpression",
                  "start": 55,
                  "end": 60,
                  "left": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 59,
                    "end": 60,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 63,
              "end": 66,
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
