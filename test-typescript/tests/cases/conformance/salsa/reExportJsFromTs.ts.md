__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 33,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 32,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 17,
          "end": 32,
          "properties": [
            {
              "type": "Property",
              "start": 21,
              "end": 29,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 24,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 26,
                "end": 29,
                "raw": "'x'",
                "value": "x",
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
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
  "end": 72,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 48,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 47,
        "raw": "\"../lib/constants\"",
        "value": "../lib/constants",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 23,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 23,
            "decorators": [],
            "name": "tsConstants",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 72,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 58,
          "end": 69,
          "exported": {
            "type": "Identifier",
            "start": 58,
            "end": 69,
            "decorators": [],
            "name": "tsConstants",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 69,
            "decorators": [],
            "name": "tsConstants",
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
