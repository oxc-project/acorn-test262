__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 14,
            "bigint": "0",
            "raw": "0n",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 16,
      "end": 39,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 25,
          "end": 36,
          "exported": {
            "type": "Literal",
            "start": 32,
            "end": 36,
            "raw": "\"0n\"",
            "value": "0n"
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "foo",
            "optional": false
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
  "end": 61,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 35,
        "raw": "\"./foo\"",
        "value": "./foo"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 20,
          "imported": {
            "type": "Literal",
            "start": 9,
            "end": 13,
            "raw": "\"0n\"",
            "value": "0n"
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 20,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 60,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 46,
          "end": 57,
          "exported": {
            "type": "Literal",
            "start": 53,
            "end": 57,
            "raw": "\"0n\"",
            "value": "0n"
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 49,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
__ESTREE_TEST__:FAIL:
```json
Identifier expected.
```
