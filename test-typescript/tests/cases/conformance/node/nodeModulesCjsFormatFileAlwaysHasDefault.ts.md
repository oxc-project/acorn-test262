__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 38,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 36,
              "end": 37,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "start": 19,
  "end": 63,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 58,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 26,
          "end": 29,
          "local": {
            "type": "Identifier",
            "start": 26,
            "end": 29,
            "name": "mod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 57,
        "value": "./subfolder/index.js",
        "raw": "\"./subfolder/index.js\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 59,
      "end": 63,
      "expression": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "name": "mod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
