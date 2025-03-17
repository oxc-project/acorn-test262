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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 27,
            "name": "tuple",
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
            },
            "decorators": [],
            "optional": false
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
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 35,
                "end": 36,
                "value": 0,
                "raw": "0"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 39,
      "end": 63,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 49,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 48,
            "end": 49,
            "id": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
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
        "start": 53,
        "end": 58,
        "name": "tuple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 63,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
