__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 68,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 32,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 25,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
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
                  "decorators": [],
                  "name": "c",
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "<",
                "right": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 50,
                "end": 61,
                "left": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
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
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
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
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
