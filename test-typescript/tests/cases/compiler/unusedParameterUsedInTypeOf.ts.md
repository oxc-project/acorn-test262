unusedParameterUsedInTypeOf.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 54,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 54,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 43,
            "end": 52,
            "argument": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "b",
              "optional": false
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
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 22,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 16,
              "end": 22
            }
          }
        },
        {
          "type": "Identifier",
          "start": 24,
          "end": 35,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 35,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 27,
              "end": 35,
              "exprName": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
