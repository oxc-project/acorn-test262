__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "OhNo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 45,
            "name": "y",
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
                    "name": "OhNo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 45,
                    "name": "hello",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "kind": "let",
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
