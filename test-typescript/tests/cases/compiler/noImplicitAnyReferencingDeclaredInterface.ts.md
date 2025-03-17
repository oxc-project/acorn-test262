__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "name": "Entry",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 101,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 92,
            "end": 99,
            "typeParameters": null,
            "params": [],
            "returnType": null
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 123,
            "name": "x",
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
                  "name": "Entry",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
