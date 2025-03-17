__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 120,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 17,
      "end": 29,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 17,
        "end": 29,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 60,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 55,
        "end": 60,
        "raw": "\"./1\"",
        "value": "./1"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 37,
          "end": 49,
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 49,
            "decorators": [],
            "name": "package",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 61,
      "end": 95,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 90,
        "end": 95,
        "raw": "\"./1\"",
        "value": "./1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 69,
          "end": 83,
          "imported": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 83,
            "decorators": [],
            "name": "private",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 96,
      "end": 120,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 115,
        "end": 120,
        "raw": "\"./1\"",
        "value": "./1"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 103,
          "end": 109,
          "local": {
            "type": "Identifier",
            "start": 103,
            "end": 109,
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
