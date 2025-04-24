__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 175,
  "end": 249,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 175,
      "end": 203,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 195,
        "end": 202,
        "raw": "\"./foo\"",
        "value": "./foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 184,
          "end": 187,
          "imported": {
            "type": "Identifier",
            "start": 184,
            "end": 187,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 184,
            "end": 187,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
