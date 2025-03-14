__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "'./types'",
        "value": "./types"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 28,
      "end": 60,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 51,
        "end": 60,
        "raw": "'./types'",
        "value": "./types"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 35,
          "end": 45,
          "local": {
            "type": "Identifier",
            "start": 40,
            "end": 45,
            "decorators": [],
            "name": "types",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 61,
      "end": 75,
      "expression": {
        "type": "CallExpression",
        "start": 61,
        "end": 75,
        "arguments": [
          {
            "type": "Identifier",
            "start": 73,
            "end": 74,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 61,
          "end": 72,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 61,
            "end": 68,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 150,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 150,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 142,
            "end": 149,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 142,
              "end": 147,
              "decorators": [],
              "name": "types",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 130,
          "end": 141,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 130,
            "end": 137,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 138,
            "end": 141,
            "decorators": [],
            "name": "log",
            "optional": false
          }
        },
        "optional": false
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
  "end": 30,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "exported": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 29,
        "raw": "'./values'",
        "value": "./values"
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
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 19,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 19,
              "raw": "10",
              "value": 10
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
