__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 21,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "foo",
        "raw": "\"foo\""
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "start": 97,
  "end": 130,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 97,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 107,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 110,
        "end": 124,
        "expression": {
          "type": "Literal",
          "start": 118,
          "end": 123,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 126,
      "end": 130,
      "expression": {
        "type": "Identifier",
        "start": 126,
        "end": 129,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
