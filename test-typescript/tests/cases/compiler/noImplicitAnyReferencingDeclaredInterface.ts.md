noImplicitAnyReferencingDeclaredInterface.ts
```json
{
  "type": "Program",
  "start": 25,
  "end": 124,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 25,
      "end": 101,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 101,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 92,
            "end": 99,
            "params": []
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "decorators": [],
        "name": "Entry",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 123,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 118,
                "end": 123,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 123,
                  "decorators": [],
                  "name": "Entry",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
