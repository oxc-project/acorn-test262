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
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 11,
                "end": 26
              },
              "start": 9,
              "end": 26
            },
            "start": 4,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "init": null,
            "definite": false,
            "start": 37,
            "end": 38
          }
        ],
        "declare": false,
        "start": 33,
        "end": 38
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "union",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 47
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 49,
        "end": 52
      },
      "start": 28,
      "end": 52
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
