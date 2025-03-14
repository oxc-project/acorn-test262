A.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 18,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 18,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
B.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
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
        "name": "a",
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
          "raw": "'A'",
          "value": "A"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 26,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 37,
        "end": 40,
        "left": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 39,
          "end": 40,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 43,
      "end": 54,
      "expression": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
