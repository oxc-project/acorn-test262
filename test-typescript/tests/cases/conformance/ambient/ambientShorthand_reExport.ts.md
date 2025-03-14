__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 24,
      "kind": "module",
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 23,
        "raw": "\"jquery\"",
        "value": "jquery"
      }
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
  "end": 26,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 24,
        "raw": "\"jquery\"",
        "value": "jquery"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 9,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
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
  "end": 24,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 22,
        "raw": "\"jquery\"",
        "value": "jquery"
      }
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
  "end": 114,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 30,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 29,
        "raw": "\"./reExportX\"",
        "value": "./reExportX"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 31,
      "end": 66,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 65,
        "raw": "\"./reExportAll\"",
        "value": "./reExportAll"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 38,
          "end": 44,
          "local": {
            "type": "Identifier",
            "start": 43,
            "end": 44,
            "decorators": [],
            "name": "$",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 113,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 112,
        "arguments": [
          {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "$",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
