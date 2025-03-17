__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 18,
              "decorators": [],
              "name": "rootA",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 27,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 26,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 25,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 21,
              "decorators": [],
              "name": "indexInA",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 24,
              "end": 25,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 37,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 32,
        "end": 35,
        "raw": "\".\"",
        "value": "."
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "indexInA",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "indexInA",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 19,
          "end": 24,
          "imported": {
            "type": "Identifier",
            "start": 19,
            "end": 24,
            "decorators": [],
            "name": "rootA",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 19,
            "end": 24,
            "decorators": [],
            "name": "rootA",
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
