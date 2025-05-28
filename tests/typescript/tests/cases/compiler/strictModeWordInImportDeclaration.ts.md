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
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "ImportDeclaration",
      "start": 13,
      "end": 43,
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
      "source": {
        "type": "Literal",
        "start": 38,
        "end": 43,
        "value": "./1",
        "raw": "\"./1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 78,
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
          "local": {
            "type": "Identifier",
            "start": 59,
            "end": 66,
            "decorators": [],
            "name": "private",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 73,
        "end": 78,
        "value": "./1",
        "raw": "\"./1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 79,
      "end": 103,
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
      "source": {
        "type": "Literal",
        "start": 98,
        "end": 103,
        "value": "./1",
        "raw": "\"./1\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
