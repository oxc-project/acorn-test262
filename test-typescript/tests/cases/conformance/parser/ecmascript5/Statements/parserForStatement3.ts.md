parserForStatement3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "ForInStatement",
      "start": 0,
      "end": 32,
      "body": {
        "type": "EmptyStatement",
        "start": 31,
        "end": 32
      },
      "left": {
        "type": "Identifier",
        "start": 4,
        "end": 5,
        "decorators": [],
        "name": "d",
        "optional": false
      },
      "right": {
        "type": "SequenceExpression",
        "start": 9,
        "end": 30,
        "expressions": [
          {
            "type": "AssignmentExpression",
            "start": 9,
            "end": 28,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 9,
              "end": 16,
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "start": 9,
                "end": 13,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 9,
                  "end": 10,
                  "decorators": [],
                  "name": "_",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 13,
                  "decorators": [],
                  "name": "jh",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 14,
                "end": 15,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "right": {
              "type": "LogicalExpression",
              "start": 17,
              "end": 28,
              "operator": "||",
              "left": {
                "type": "MemberExpression",
                "start": 17,
                "end": 24,
                "computed": true,
                "object": {
                  "type": "MemberExpression",
                  "start": 17,
                  "end": 21,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 18,
                    "decorators": [],
                    "name": "_",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 21,
                    "decorators": [],
                    "name": "jh",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "ArrayExpression",
                "start": 26,
                "end": 28,
                "elements": []
              }
            }
          },
          {
            "type": "Identifier",
            "start": 29,
            "end": 30,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
