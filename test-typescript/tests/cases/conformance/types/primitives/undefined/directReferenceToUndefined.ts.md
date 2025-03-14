directReferenceToUndefined.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 16,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 16,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 7,
                "end": 16,
                "typeName": {
                  "type": "Identifier",
                  "start": 7,
                  "end": 16,
                  "decorators": [],
                  "name": "Undefined",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 18,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 22,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 26,
            "end": 35,
            "decorators": [],
            "name": "undefined",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
