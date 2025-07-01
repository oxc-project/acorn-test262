__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 9,
        "end": 11
      },
      "start": 0,
      "end": 12
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 13
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 21,
          "end": 31
        },
        "start": 13,
        "end": 32
      },
      "importKind": "value",
      "start": 0,
      "end": 33
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 59
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./foo.ts",
          "raw": "\"./foo.ts\"",
          "start": 70,
          "end": 80
        },
        "start": 62,
        "end": 81
      },
      "importKind": "type",
      "start": 43,
      "end": 82
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
