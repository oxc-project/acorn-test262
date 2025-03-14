declFileForExportedImport_0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
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
  "sourceType": "module"
}
```
declFileForExportedImport_1.ts
```json
{
  "type": "Program",
  "start": 54,
  "end": 161,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 113,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 61,
        "end": 113,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 72,
          "end": 112,
          "expression": {
            "type": "Literal",
            "start": 80,
            "end": 111,
            "raw": "'./declFileForExportedImport_0'",
            "value": "./declFileForExportedImport_0"
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 125,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 122,
            "end": 125,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 128,
      "end": 148,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 135,
        "end": 148,
        "id": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 157,
            "end": 160,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```
