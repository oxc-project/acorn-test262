resolveInterfaceNameWithSameLetDeclarationName1.ts
```json
{
  "type": "Program",
  "start": 1,
  "end": 33,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 18,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 14,
        "decorators": [],
        "name": "bar",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 31,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 28,
                "end": 31,
                "typeName": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 31,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
