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
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 11
          },
          "start": 7,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./data.json",
        "raw": "\"./data.json\"",
        "start": 17,
        "end": 30
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              },
              "start": 37,
              "end": 45
            },
            "start": 36,
            "end": 45
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 52
          },
          "definite": false,
          "start": 36,
          "end": 52
        }
      ],
      "declare": false,
      "start": 32,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "start": 12,
            "end": 23
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 23
        }
      ],
      "declare": true,
      "start": 0,
      "end": 24
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "val",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 43
      },
      "exportKind": "value",
      "start": 25,
      "end": 44
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 44
}
```
