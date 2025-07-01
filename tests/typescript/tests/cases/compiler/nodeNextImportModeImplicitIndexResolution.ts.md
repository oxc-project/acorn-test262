__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 17
            },
            "init": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 20,
              "end": 21
            },
            "definite": false,
            "start": 13,
            "end": 21
          }
        ],
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 17
            },
            "init": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 20,
              "end": 21
            },
            "definite": false,
            "start": 13,
            "end": 21
          }
        ],
        "declare": false,
        "start": 7,
        "end": 22
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 22
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 22
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "pkg",
        "raw": "\"pkg\"",
        "start": 21,
        "end": 26
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 143
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "item2",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 152
          },
          "importKind": "value",
          "start": 139,
          "end": 152
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./pkg",
        "raw": "\"./pkg\"",
        "start": 160,
        "end": 167
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 130,
      "end": 168
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 291
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "item3",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 300
          },
          "importKind": "value",
          "start": 287,
          "end": 300
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./node_modules/pkg",
        "raw": "\"./node_modules/pkg\"",
        "start": 308,
        "end": 328
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 278,
      "end": 328
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 374
}
```
