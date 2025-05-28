__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 52,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 23,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 23,
            "id": {
              "type": "ArrayPattern",
              "start": 9,
              "end": 23,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 10,
                  "end": 15,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 10,
                    "end": 11,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 14,
                    "end": 15,
                    "value": 0,
                    "raw": "0"
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AssignmentPattern",
                  "start": 17,
                  "end": 22,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 18,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 21,
                    "end": 22,
                    "value": 1,
                    "raw": "1"
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
        "type": "ArrayExpression",
        "start": 27,
        "end": 33,
        "elements": [
          {
            "type": "Literal",
            "start": 28,
            "end": 29,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 31,
            "end": 32,
            "value": 3,
            "raw": "3"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 52,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 41,
            "end": 43,
            "expression": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 48,
            "end": 50,
            "expression": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "b",
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
