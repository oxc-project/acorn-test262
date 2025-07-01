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
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 6,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "exportKind": "value",
          "start": 28,
          "end": 29
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 14,
      "end": 32
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AA",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 48
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 51,
              "end": 53
            },
            "definite": false,
            "start": 46,
            "end": 53
          }
        ],
        "declare": false,
        "start": 40,
        "end": 54
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 33,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 55
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "AA",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 16
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "AA",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 16
          },
          "exportKind": "value",
          "start": 14,
          "end": 16
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./a",
        "raw": "'./a'",
        "start": 24,
        "end": 29
      },
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 30
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 30
}
```
