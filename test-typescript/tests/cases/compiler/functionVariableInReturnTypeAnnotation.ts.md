__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "bar",
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
        "start": 25,
        "end": 65,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 31,
            "end": 41,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 35,
                "end": 40,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 39,
                  "end": 40,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 46,
            "end": 63,
            "argument": {
              "type": "Identifier",
              "start": 53,
              "end": 62,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 24,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 16,
          "end": 24,
          "exprName": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
