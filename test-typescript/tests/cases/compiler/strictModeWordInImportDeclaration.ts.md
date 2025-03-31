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
      "expression": {
        "type": "Literal",
        "start": 17,
        "end": 29,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 60,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 37,
          "end": 49,
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 49,
            "name": "package",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 55,
        "end": 60,
        "value": "./1",
        "raw": "\"./1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 61,
      "end": 95,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 69,
          "end": 83,
          "imported": {
            "type": "Identifier",
            "start": 69,
            "end": 72,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 76,
            "end": 83,
            "name": "private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 90,
        "end": 95,
        "value": "./1",
        "raw": "\"./1\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 96,
      "end": 120,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 103,
          "end": 109,
          "local": {
            "type": "Identifier",
            "start": 103,
            "end": 109,
            "name": "public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 115,
        "end": 120,
        "value": "./1",
        "raw": "\"./1\""
      },
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
