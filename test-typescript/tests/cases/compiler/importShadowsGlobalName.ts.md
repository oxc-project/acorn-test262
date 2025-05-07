__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 12,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 13,
      "end": 26,
      "expression": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
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
  "end": 71,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "Error",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 29,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 28,
          "raw": "'Foo'",
          "value": "Foo",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 31,
      "end": 57,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 57,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 40,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 49,
        "end": 54,
        "decorators": [],
        "name": "Error",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSExportAssignment",
      "start": 58,
      "end": 71,
      "expression": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
