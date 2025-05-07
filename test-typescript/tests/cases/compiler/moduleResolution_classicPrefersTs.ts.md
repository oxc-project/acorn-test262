__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 37,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 36,
        "raw": "\"dir1/dir2/dir3/a.js\"",
        "value": "dir1/dir2/dir3/a.js",
        "regex": null,
        "bigint": null
      },
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
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 32,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 31,
        "raw": "\"dir1/dir2/a.ts\"",
        "value": "dir1/dir2/a.ts",
        "regex": null,
        "bigint": null
      },
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
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 17,
        "raw": "\"a\"",
        "value": "a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "a",
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
