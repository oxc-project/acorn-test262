__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 12,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 13,
      "end": 43,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 43,
        "raw": "\"./1\"",
        "value": "./1"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 20,
          "end": 32,
          "local": {
            "type": "Identifier",
            "start": 25,
            "end": 32,
            "decorators": [],
            "name": "package",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 78,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 78,
        "raw": "\"./1\"",
        "value": "./1"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 52,
          "end": 66,
          "imported": {
            "type": "Identifier",
            "start": 52,
            "end": 55,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 59,
            "end": 66,
            "decorators": [],
            "name": "private",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ImportDeclaration",
      "start": 79,
      "end": 103,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 98,
        "end": 103,
        "raw": "\"./1\"",
        "value": "./1"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 86,
          "end": 92,
          "local": {
            "type": "Identifier",
            "start": 86,
            "end": 92,
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
