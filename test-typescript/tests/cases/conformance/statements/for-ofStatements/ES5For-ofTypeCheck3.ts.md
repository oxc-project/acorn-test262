__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 27,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 11,
                "end": 27,
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
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 30,
            "end": 37,
            "elements": [
              {
                "type": "Literal",
                "start": 31,
                "end": 33,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 35,
                "end": 36,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 39,
      "end": 63,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 63,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 49,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 49,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 53,
        "end": 58,
        "decorators": [],
        "name": "tuple",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
