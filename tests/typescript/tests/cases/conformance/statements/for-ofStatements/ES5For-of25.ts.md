__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 17,
            "elements": [
              {
                "type": "Literal",
                "start": 9,
                "end": 10,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 12,
                "end": 13,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 15,
                "end": 16,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 19,
      "end": 53,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 24,
        "end": 29,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 28,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 53,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 42,
            "end": 44,
            "expression": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 51,
            "expression": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
