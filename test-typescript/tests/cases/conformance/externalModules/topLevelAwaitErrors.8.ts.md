__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 67,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 38,
      "end": 66,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 65,
        "raw": "\"./other\"",
        "value": "./other",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 45,
          "end": 50,
          "local": {
            "type": "Identifier",
            "start": 45,
            "end": 50,
            "decorators": [],
            "name": "await",
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 25,
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 25,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 27,
      "end": 49,
      "declaration": {
        "type": "Identifier",
        "start": 42,
        "end": 48,
        "decorators": [],
        "name": "_await",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
