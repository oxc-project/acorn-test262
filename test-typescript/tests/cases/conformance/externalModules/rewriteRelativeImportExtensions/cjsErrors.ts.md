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
        "type": "ObjectExpression",
        "start": 9,
        "end": 11,
        "properties": []
      }
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
  "end": 89,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 32,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 31,
          "raw": "\"./foo.ts\"",
          "value": "./foo.ts"
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 43,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 59,
        "decorators": [],
        "name": "_foo",
        "optional": false
      },
      "importKind": "type",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 62,
        "end": 81,
        "expression": {
          "type": "Literal",
          "start": 70,
          "end": 80,
          "raw": "\"./foo.ts\"",
          "value": "./foo.ts"
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
