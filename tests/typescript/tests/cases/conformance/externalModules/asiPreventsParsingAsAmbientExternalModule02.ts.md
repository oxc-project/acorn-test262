__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 290,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 19,
            "decorators": [],
            "name": "declare",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 19,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 13,
                "end": 19
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 40,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 39,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 33,
                "end": 39
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 290,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 58,
        "decorators": [],
        "name": "container",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 59,
        "end": 290,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 65,
            "end": 72,
            "expression": {
              "type": "Identifier",
              "start": 65,
              "end": 72,
              "decorators": [],
              "name": "declare",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 128,
            "end": 134,
            "expression": {
              "type": "Identifier",
              "start": 128,
              "end": 134,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 190,
            "end": 210,
            "expression": {
              "type": "Literal",
              "start": 190,
              "end": 210,
              "value": "my external module",
              "raw": "\"my external module\""
            },
            "directive": null
          },
          {
            "type": "BlockStatement",
            "start": 242,
            "end": 245,
            "body": []
          }
        ]
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
