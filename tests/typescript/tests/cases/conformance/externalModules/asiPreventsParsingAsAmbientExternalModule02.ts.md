__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "declare",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 13,
                "end": 19
              },
              "start": 11,
              "end": 19
            },
            "start": 4,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 33,
                "end": 39
              },
              "start": 31,
              "end": 39
            },
            "start": 25,
            "end": 39
          },
          "init": null,
          "definite": false,
          "start": 25,
          "end": 39
        }
      ],
      "declare": false,
      "start": 21,
      "end": 40
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "container",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 61
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "declare",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 75
            },
            "directive": null,
            "start": 68,
            "end": 75
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 137
            },
            "directive": null,
            "start": 131,
            "end": 137
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "my external module",
              "raw": "\"my external module\"",
              "start": 193,
              "end": 213
            },
            "directive": null,
            "start": 193,
            "end": 213
          },
          {
            "type": "BlockStatement",
            "body": [],
            "start": 245,
            "end": 248
          }
        ],
        "start": 62,
        "end": 293
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 42,
      "end": 293
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 293
}
```
