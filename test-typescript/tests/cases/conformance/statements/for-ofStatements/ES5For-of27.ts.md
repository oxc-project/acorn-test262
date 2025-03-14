__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 58,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 58,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 47,
            "end": 49,
            "expression": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 54,
            "end": 56,
            "expression": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 29,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 9,
              "end": 29,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 10,
                  "end": 18,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 10,
                    "end": 11,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 13,
                    "end": 18,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 14,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 17,
                      "end": 18,
                      "raw": "0",
                      "value": 0
                    }
                  }
                },
                {
                  "type": "Property",
                  "start": 20,
                  "end": 28,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 21,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 23,
                    "end": 28,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 24,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 27,
                      "end": 28,
                      "raw": "1",
                      "value": 1
                    }
                  }
                }
              ]
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 33,
        "end": 39,
        "elements": [
          {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 37,
            "end": 38,
            "raw": "3",
            "value": 3
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
