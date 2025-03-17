__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 22,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "value": 4,
              "raw": "4"
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
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 22,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 20,
              "end": 21,
              "value": 4,
              "raw": "4"
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
  "start": 0,
  "end": 375,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "item",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "name": "item",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "value": "pkg",
        "raw": "\"pkg\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 130,
      "end": 168,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 139,
          "end": 152,
          "imported": {
            "type": "Identifier",
            "start": 139,
            "end": 143,
            "name": "item",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 147,
            "end": 152,
            "name": "item2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 160,
        "end": 167,
        "value": "./pkg",
        "raw": "\"./pkg\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 278,
      "end": 328,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 287,
          "end": 300,
          "imported": {
            "type": "Identifier",
            "start": 287,
            "end": 291,
            "name": "item",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 295,
            "end": 300,
            "name": "item3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 308,
        "end": 328,
        "value": "./node_modules/pkg",
        "raw": "\"./node_modules/pkg\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
