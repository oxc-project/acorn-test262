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
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 50,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 50,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 48,
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "start": 29,
                "end": 48,
                "id": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "extends": [],
                "typeParameters": null,
                "body": {
                  "type": "TSInterfaceBody",
                  "start": 41,
                  "end": 48,
                  "body": []
                },
                "declare": false
              },
              "specifiers": [],
              "source": null,
              "attributes": [],
              "exportKind": "type"
            }
          ]
        },
        "kind": "module",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 74,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 59,
        "end": 74,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 67,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 70,
          "end": 73,
          "left": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 72,
            "end": 73,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 75,
      "end": 91,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 82,
        "end": 91,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 86,
            "end": 90,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 90,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 87,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 89,
                  "end": 90,
                  "typeName": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 90,
                    "name": "b",
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
