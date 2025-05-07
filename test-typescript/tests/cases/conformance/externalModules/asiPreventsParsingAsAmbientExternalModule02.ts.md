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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 21,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 39,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 42,
      "end": 290,
      "body": {
        "type": "TSModuleBlock",
        "start": 59,
        "end": 290,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 65,
            "end": 72,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 65,
              "end": 72,
              "decorators": [],
              "name": "declare",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 128,
            "end": 134,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 128,
              "end": 134,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 190,
            "end": 210,
            "directive": null,
            "expression": {
              "type": "Literal",
              "start": 190,
              "end": 210,
              "raw": "\"my external module\"",
              "value": "my external module",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "BlockStatement",
            "start": 242,
            "end": 245,
            "body": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 58,
        "decorators": [],
        "name": "container",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
