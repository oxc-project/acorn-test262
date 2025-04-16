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
      "expression": {
        "type": "Literal",
        "start": 1,
        "end": 13,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 14,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 27,
        "name": "public",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 28,
        "end": 31,
        "body": []
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 32,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 46,
        "name": "private",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 47,
        "end": 50,
        "body": []
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 77,
      "id": {
        "type": "TSQualifiedName",
        "start": 58,
        "end": 73,
        "left": {
          "type": "Identifier",
          "start": 58,
          "end": 64,
          "name": "public",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 65,
          "end": 73,
          "name": "whatever",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 74,
        "end": 77,
        "body": []
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 78,
      "end": 107,
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
            "name": "private",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 93,
            "end": 99,
            "name": "public",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 100,
          "end": 103,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 104,
        "end": 107,
        "body": []
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
