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
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 20,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 16,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "raw": "1",
              "value": 1
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
  "end": 80,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "'use strict'",
        "value": "use strict"
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 32,
      "end": 61,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 52,
        "end": 60,
        "raw": "'./a.js'",
        "value": "./a.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 41,
          "end": 44,
          "imported": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 80,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 63,
        "end": 79,
        "arguments": [
          {
            "type": "Identifier",
            "start": 75,
            "end": 78,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 63,
          "end": 74,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 63,
            "end": 70,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 71,
            "end": 74,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
