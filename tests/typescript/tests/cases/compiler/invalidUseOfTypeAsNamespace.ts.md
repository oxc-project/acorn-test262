__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "OhNo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 46,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 45,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 45,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 35,
                  "end": 45,
                  "left": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 39,
                    "decorators": [],
                    "name": "OhNo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 45,
                    "decorators": [],
                    "name": "hello",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
