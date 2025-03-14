declFileImportChainInExportAssignment.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 117,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 75,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 75,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 73,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 73,
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 73,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 67,
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 48,
                      "end": 67,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 56,
                        "end": 67,
                        "body": []
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
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
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "kind": "module"
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 76,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 87,
        "end": 90,
        "left": {
          "type": "Identifier",
          "start": 87,
          "end": 88,
          "decorators": [],
          "name": "m",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 89,
          "end": 90,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 92,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 103,
        "end": 104,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 106,
      "end": 117,
      "expression": {
        "type": "Identifier",
        "start": 115,
        "end": 116,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
