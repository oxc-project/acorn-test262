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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
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
  "start": 0,
  "end": 374,
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
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 147,
            "end": 152,
            "decorators": [],
            "name": "item2",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 295,
            "end": 300,
            "decorators": [],
            "name": "item3",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
