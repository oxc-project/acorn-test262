__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 18,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 18,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 17,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 15,
              "end": 17,
              "raw": "10",
              "value": 10
            }
          }
        ],
        "declare": false,
        "kind": "var"
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "raw": "\"server\"",
        "value": "server"
      },
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
