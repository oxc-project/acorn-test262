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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 26,
            "decorators": [],
            "name": "union",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 28,
      "end": 52,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 49,
        "end": 52,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 37,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 42,
        "end": 47,
        "decorators": [],
        "name": "union",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
