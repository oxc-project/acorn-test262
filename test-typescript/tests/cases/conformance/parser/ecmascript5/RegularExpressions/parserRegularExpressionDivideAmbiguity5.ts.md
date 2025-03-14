parserRegularExpressionDivideAmbiguity5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 66,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 65,
        "arguments": [
          {
            "type": "Literal",
            "start": 13,
            "end": 14,
            "raw": "0",
            "value": 0
          },
          {
            "type": "BinaryExpression",
            "start": 16,
            "end": 39,
            "operator": "/",
            "left": {
              "type": "BinaryExpression",
              "start": 16,
              "end": 33,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 16,
                "end": 23,
                "decorators": [],
                "name": "rotateY",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 26,
                "end": 33,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 30,
                  "decorators": [],
                  "name": "Math",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 33,
                  "decorators": [],
                  "name": "PI",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Literal",
              "start": 36,
              "end": 39,
              "raw": "180",
              "value": 180
            }
          },
          {
            "type": "BinaryExpression",
            "start": 41,
            "end": 64,
            "operator": "/",
            "left": {
              "type": "BinaryExpression",
              "start": 41,
              "end": 58,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 41,
                "end": 48,
                "decorators": [],
                "name": "rotateZ",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 51,
                "end": 58,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 55,
                  "decorators": [],
                  "name": "Math",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 58,
                  "decorators": [],
                  "name": "PI",
                  "optional": false
                }
              }
            },
            "right": {
              "type": "Literal",
              "start": 61,
              "end": 64,
              "raw": "180",
              "value": 180
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 12,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 5,
            "decorators": [],
            "name": "model",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 6,
            "end": 12,
            "decorators": [],
            "name": "rotate",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
