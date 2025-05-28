__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
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
      "type": "ForOfStatement",
      "start": 15,
      "end": 37,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 25,
        "end": 32,
        "elements": [
          {
            "type": "Literal",
            "start": 26,
            "end": 27,
            "value": 0,
            "raw": "0"
          },
          {
            "type": "Literal",
            "start": 29,
            "end": 31,
            "value": "",
            "raw": "\"\""
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 34,
        "end": 37,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
