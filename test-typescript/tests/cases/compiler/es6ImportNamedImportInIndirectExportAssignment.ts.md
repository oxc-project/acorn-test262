es6ImportNamedImportInIndirectExportAssignment_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 46,
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 46,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 44,
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 44,
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 44,
                  "body": []
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                },
                "implements": [],
                "superClass": null
              },
              "exportKind": "value",
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
          "optional": false
        },
        "kind": "module"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
es6ImportNamedImportInIndirectExportAssignment_1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 71,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 70,
        "raw": "\"./es6ImportNamedImportInIndirectExportAssignment_0\"",
        "value": "./es6ImportNamedImportInIndirectExportAssignment_0"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 72,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 80,
        "decorators": [],
        "name": "x",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 86,
      "end": 97,
      "expression": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "x",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
