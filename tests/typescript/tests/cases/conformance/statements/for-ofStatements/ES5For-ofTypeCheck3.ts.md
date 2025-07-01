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
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 12,
                    "end": 18
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 20,
                    "end": 26
                  }
                ],
                "start": 11,
                "end": 27
              },
              "start": 9,
              "end": 27
            },
            "start": 4,
            "end": 27
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 31,
                "end": 33
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 35,
                "end": 36
              }
            ],
            "start": 30,
            "end": 37
          },
          "definite": false,
          "start": 4,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
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
              "start": 48,
              "end": 49
            },
            "init": null,
            "definite": false,
            "start": 48,
            "end": 49
          }
        ],
        "declare": false,
        "start": 44,
        "end": 49
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "tuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 58
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 60,
        "end": 63
      },
      "start": 39,
      "end": 63
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```
