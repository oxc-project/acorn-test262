__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 123,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 44,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 44,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 44,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 44,
                  "decorators": [],
                  "name": "Entry",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 47,
      "end": 123,
      "body": {
        "type": "TSInterfaceBody",
        "start": 63,
        "end": 123,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 114,
            "end": 121,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 62,
        "decorators": [],
        "name": "Entry",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
