__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 12,
      "end": 23,
      "expression": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "a",
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
  "end": 88,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 79,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 34,
        "end": 78,
        "raw": "\"./es6ImportNameSpaceImportNoNamedExports_0\"",
        "value": "./es6ImportNameSpaceImportNoNamedExports_0",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 28,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 28,
            "decorators": [],
            "name": "nameSpaceBinding",
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
