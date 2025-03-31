__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 8,
            "end": 24,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 8,
              "end": 17,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 20,
              "end": 24,
              "value": null,
              "raw": "null"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 66,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 58,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 58,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 42,
                "end": 58,
                "exprName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 58,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 61,
            "end": 65,
            "value": null,
            "raw": "null"
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
