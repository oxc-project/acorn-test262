__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 107,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 1,
      "end": 13,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 1,
        "end": 13,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 14,
      "end": 31,
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 31,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 27,
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 32,
      "end": 50,
      "body": {
        "type": "TSModuleBlock",
        "start": 47,
        "end": 50,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 46,
        "decorators": [],
        "name": "private",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 77,
      "body": {
        "type": "TSModuleBlock",
        "start": 74,
        "end": 77,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 58,
        "end": 73,
        "left": {
          "type": "Identifier",
          "start": 58,
          "end": 64,
          "decorators": [],
          "name": "public",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 65,
          "end": 73,
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
      "start": 78,
      "end": 107,
      "body": {
        "type": "TSModuleBlock",
        "start": 104,
        "end": 107,
        "body": []
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "start": 85,
        "end": 103,
        "left": {
          "type": "TSQualifiedName",
          "start": 85,
          "end": 99,
          "left": {
            "type": "Identifier",
            "start": 85,
            "end": 92,
            "decorators": [],
            "name": "private",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 93,
            "end": 99,
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 100,
          "end": 103,
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
