__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
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
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 59,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 70,
          "end": 73,
          "left": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 75,
      "end": 91,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 82,
        "end": 91,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 86,
            "end": 90,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 90,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 87,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 89,
                  "end": 90,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
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
