__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 97,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 54,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 39,
          "end": 51,
          "key": {
            "type": "Identifier",
            "start": 39,
            "end": 43,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 45,
            "end": 51,
            "raw": "\"json\"",
            "value": "json",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 31,
        "raw": "\"./example.json\"",
        "value": "./example.json",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 61,
      "end": 91,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 76,
        "end": 90,
        "raw": "\"./styles.css\"",
        "value": "./styles.css",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
