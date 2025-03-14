__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 20,
  "end": 39,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 38,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 27,
        "end": 38,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 35,
          "end": 38,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "decorators": [],
          "name": "C",
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
'as' expected.
```
