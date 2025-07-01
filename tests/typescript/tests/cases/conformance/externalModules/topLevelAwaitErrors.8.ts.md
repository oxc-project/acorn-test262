__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 50
          },
          "start": 45,
          "end": 50
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 56,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 38,
      "end": 66
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 38,
  "end": 67
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
              },
              "start": 20,
              "end": 25
            },
            "start": 14,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "_await",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 48
      },
      "exportKind": "value",
      "start": 27,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
