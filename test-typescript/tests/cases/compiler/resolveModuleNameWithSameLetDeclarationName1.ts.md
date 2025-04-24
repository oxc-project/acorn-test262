__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 50,
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 50,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 26,
            "end": 48,
            "body": {
              "type": "TSInterfaceBody",
              "start": 40,
              "end": 48,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 68,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 68,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 61,
                  "end": 68,
                  "left": {
                    "type": "Identifier",
                    "start": 61,
                    "end": 64,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 68,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
  "sourceType": "script",
  "hashbang": null
}
```
