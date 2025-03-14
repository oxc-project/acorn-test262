__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 23,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 22,
          "raw": "\"f\"",
          "value": "f"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 48,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 52,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 67,
            "decorators": [],
            "name": "fnumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
  "start": 0,
  "end": 13,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 12,
      "expression": {
        "type": "Literal",
        "start": 9,
        "end": 11,
        "raw": "10",
        "value": 10
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
