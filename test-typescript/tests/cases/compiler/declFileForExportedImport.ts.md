__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 20,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 12,
                "end": 20,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 14,
                  "end": 20
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 61,
        "end": 113,
        "id": {
          "type": "Identifier",
          "start": 68,
          "end": 69,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 72,
          "end": 112,
          "expression": {
            "type": "Literal",
            "start": 80,
            "end": 111,
            "value": "./declFileForExportedImport_0",
            "raw": "'./declFileForExportedImport_0'"
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
      "type": "VariableDeclaration",
      "start": 114,
      "end": 126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 125,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 119,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 122,
            "end": 125,
            "object": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 128,
      "end": 148,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 135,
        "end": 148,
        "id": {
          "type": "Identifier",
          "start": 142,
          "end": 143,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 157,
            "end": 160,
            "object": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
