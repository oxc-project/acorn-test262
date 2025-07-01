__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10,
                    "end": 11
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 14,
                    "end": 15
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 15
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17,
                    "end": 18
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 21,
                    "end": 22
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 22
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 23
            },
            "init": null,
            "definite": false,
            "start": 9,
            "end": 23
          }
        ],
        "declare": false,
        "start": 5,
        "end": 23
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 28,
            "end": 29
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 31,
            "end": 32
          }
        ],
        "start": 27,
        "end": 33
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 42
            },
            "directive": null,
            "start": 41,
            "end": 43
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "directive": null,
            "start": 48,
            "end": 50
          }
        ],
        "start": 35,
        "end": 52
      },
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
