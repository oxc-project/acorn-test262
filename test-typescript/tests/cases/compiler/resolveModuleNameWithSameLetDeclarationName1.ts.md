resolveModuleNameWithSameLetDeclarationName1.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 51,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 27,
            "end": 49,
            "body": {
              "type": "TSInterfaceBody",
              "start": 41,
              "end": 49,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "decorators": [],
              "name": "Bar",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 19,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 69,
            "decorators": [],
            "name": "foo",
            "optional": false,
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
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 69,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false
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
  "sourceType": "script"
}
```
