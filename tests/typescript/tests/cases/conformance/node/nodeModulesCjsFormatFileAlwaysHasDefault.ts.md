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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "decorators": [],
        "name": "mod",
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
