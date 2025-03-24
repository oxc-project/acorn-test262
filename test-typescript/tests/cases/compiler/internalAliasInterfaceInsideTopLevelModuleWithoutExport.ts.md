__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 50,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 50,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 48,
              "attributes": [],
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 29,
                "end": 48,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 41,
                  "end": 48,
                  "body": []
                },
                "declare": false,
                "extends": [],
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null
              },
              "exportKind": "type",
              "source": null,
              "specifiers": []
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 52,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 63,
        "end": 66,
        "left": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 68,
      "end": 84,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 75,
        "end": 84,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 79,
            "end": 83,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 83,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 80,
                "end": 83,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 82,
                  "end": 83,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
