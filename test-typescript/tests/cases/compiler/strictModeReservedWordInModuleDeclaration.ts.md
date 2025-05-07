__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
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
        "value": "use strict",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 13,
      "end": 30,
      "body": {
        "type": "TSModuleBlock",
        "start": 27,
        "end": 30,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 26,
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 31,
      "end": 49,
      "body": {
        "type": "TSModuleBlock",
        "start": 46,
        "end": 49,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 45,
        "decorators": [],
        "name": "private",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 50,
      "end": 76,
      "body": {
        "type": "TSModuleBlock",
        "start": 73,
        "end": 76,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 57,
        "end": 72,
        "left": {
          "type": "Identifier",
          "start": 57,
          "end": 63,
          "decorators": [],
          "name": "public",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 64,
          "end": 72,
          "decorators": [],
          "name": "whatever",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 77,
      "end": 106,
      "body": {
        "type": "TSModuleBlock",
        "start": 103,
        "end": 106,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 84,
        "end": 102,
        "left": {
          "type": "TSQualifiedName",
          "start": 84,
          "end": 98,
          "left": {
            "type": "Identifier",
            "start": 84,
            "end": 91,
            "decorators": [],
            "name": "private",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 92,
            "end": 98,
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 99,
          "end": 102,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
