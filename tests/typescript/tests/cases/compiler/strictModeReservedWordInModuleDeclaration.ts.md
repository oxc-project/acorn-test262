__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "public",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 26
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 27,
        "end": 30
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 13,
      "end": 30
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "private",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 45
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 46,
        "end": 49
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 31,
      "end": 49
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "public",
          "optional": false,
          "typeAnnotation": null,
          "start": 57,
          "end": 63
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "whatever",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 72
        },
        "start": 57,
        "end": 72
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 73,
        "end": 76
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 50,
      "end": 76
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "private",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 91
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 98
          },
          "start": 84,
          "end": 98
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 99,
          "end": 102
        },
        "start": 84,
        "end": 102
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 103,
        "end": 106
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 77,
      "end": 106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 106
}
```
