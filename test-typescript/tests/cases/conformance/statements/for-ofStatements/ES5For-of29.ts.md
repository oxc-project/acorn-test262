__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 60,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 60,
        "body": [
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
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 56,
            "end": 58,
            "expression": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
        "end": 31,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 31,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 11,
              "end": 31,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 12,
                  "end": 20,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12,
                    "end": 13,
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
                    "start": 15,
                    "end": 20,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 15,
                      "end": 16,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 19,
                      "end": 20,
                      "raw": "0",
                      "value": 0
                    }
                  }
                },
                {
                  "type": "Property",
                  "start": 22,
                  "end": 30,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
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
                    "start": 25,
                    "end": 30,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 26,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 29,
                      "end": 30,
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
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 35,
        "end": 41,
        "elements": [
          {
            "type": "Literal",
            "start": 36,
            "end": 37,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 39,
            "end": 40,
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
