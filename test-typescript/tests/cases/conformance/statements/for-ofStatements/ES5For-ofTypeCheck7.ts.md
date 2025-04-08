__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "name": "union",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 26,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 11,
                "end": 26,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 11,
                    "end": 17
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 28,
      "end": 52,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 42,
        "end": 47,
        "name": "union",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 52,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
