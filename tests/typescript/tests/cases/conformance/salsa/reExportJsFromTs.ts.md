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
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 32,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 6,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 7,
            "end": 14,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
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
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 21,
                "end": 24,
                "decorators": [],
                "name": "str",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 26,
                "end": 29,
                "value": "x",
                "raw": "'x'"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
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
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 47,
        "value": "../lib/constants",
        "raw": "\"../lib/constants\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 72,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 58,
          "end": 69,
          "local": {
            "type": "Identifier",
            "start": 58,
            "end": 69,
            "decorators": [],
            "name": "tsConstants",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 58,
            "end": 69,
            "decorators": [],
            "name": "tsConstants",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
