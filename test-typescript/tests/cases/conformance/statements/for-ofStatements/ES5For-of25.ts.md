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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 28,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
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
        "start": 33,
        "end": 34,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
