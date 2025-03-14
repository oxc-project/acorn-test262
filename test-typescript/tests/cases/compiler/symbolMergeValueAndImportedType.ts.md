__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 68,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "\"./other\"",
        "value": "./other"
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
            "name": "X",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "X",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "X",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 39,
            "end": 41,
            "raw": "42",
            "value": 42
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 43,
      "end": 68,
      "expression": {
        "type": "CallExpression",
        "start": 43,
        "end": 67,
        "arguments": [
          {
            "type": "BinaryExpression",
            "start": 55,
            "end": 66,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 55,
              "end": 62,
              "raw": "'X is '",
              "value": "X is "
            },
            "right": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "X",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 43,
          "end": 54,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 43,
            "end": 50,
            "decorators": [],
            "name": "console",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 54,
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
  "end": 19,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 19,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "X",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 16,
          "end": 18,
          "members": []
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
