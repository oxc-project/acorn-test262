__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 155,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 155,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 56,
        "end": 155,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 56,
          "end": 86,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 56,
            "end": 71,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 56,
              "end": 61,
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 71,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 86,
            "decorators": [],
            "name": "removeChildren",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 89,
          "end": 155,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 101,
            "end": 155,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 107,
                "end": 153,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 107,
                  "end": 153,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 107,
                    "end": 123,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 107,
                      "end": 111
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 123,
                      "decorators": [],
                      "name": "textContent",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 126,
                    "end": 153,
                    "raw": "'nope, not going to happen'",
                    "value": "nope, not going to happen"
                  }
                }
              }
            ]
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
