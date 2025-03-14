__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 109,
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
      "type": "VariableDeclaration",
      "start": 30,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 38,
            "end": 39,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 41,
      "end": 60,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 50,
          "end": 58,
          "exported": {
            "type": "Identifier",
            "start": 55,
            "end": 58,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 87,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 70,
          "end": 85,
          "exported": {
            "type": "Identifier",
            "start": 75,
            "end": 85,
            "decorators": [],
            "name": "implements",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 70,
            "end": 71,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 88,
      "end": 109,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 97,
          "end": 107,
          "exported": {
            "type": "Identifier",
            "start": 102,
            "end": 107,
            "decorators": [],
            "name": "while",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 97,
            "end": 98,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
