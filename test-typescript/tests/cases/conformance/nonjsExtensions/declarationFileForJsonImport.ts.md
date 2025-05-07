__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 30,
        "raw": "\"./data.json\"",
        "value": "./data.json",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 45,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 39,
                "end": 45
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 48,
            "end": 52,
            "decorators": [],
            "name": "data",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 23,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 25,
      "end": 44,
      "declaration": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "val",
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
