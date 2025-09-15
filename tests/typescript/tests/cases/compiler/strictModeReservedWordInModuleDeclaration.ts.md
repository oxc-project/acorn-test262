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
        "start": 23,
        "end": 29
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 30,
        "end": 33
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 13,
      "end": 33
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "private",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 52,
        "end": 55
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 34,
      "end": 55
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
          "start": 66,
          "end": 72
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "whatever",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 81
        },
        "start": 66,
        "end": 81
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 82,
        "end": 85
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 56,
      "end": 85
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
            "start": 96,
            "end": 103
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 110
          },
          "start": 96,
          "end": 110
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 114
        },
        "start": 96,
        "end": 114
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 115,
        "end": 118
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 86,
      "end": 118
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 118
}
```
