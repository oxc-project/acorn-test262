__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 21,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 36,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 32,
          "end": 33,
          "local": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 32,
            "end": 33,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
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
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 55,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 34,
          "end": 41,
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 41,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 34,
            "end": 41,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 49,
        "end": 54,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
