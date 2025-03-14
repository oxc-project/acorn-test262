importDeclWithExportModifier.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 36,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 36,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 15,
            "end": 34,
            "body": {
              "type": "TSInterfaceBody",
              "start": 27,
              "end": 34,
              "body": []
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 44,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 51,
          "end": 52,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSQualifiedName",
          "start": 55,
          "end": 58,
          "left": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 68,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 68,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
