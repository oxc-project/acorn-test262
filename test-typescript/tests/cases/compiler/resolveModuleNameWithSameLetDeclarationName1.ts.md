__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 71,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 1,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 19,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 51,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 27,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 41,
              "end": 49,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 69,
            "name": "foo",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 69,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 62,
                  "end": 69,
                  "left": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 65,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 69,
                    "name": "Bar",
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
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
