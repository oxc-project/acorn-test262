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
      "expression": {
        "type": "AssignmentExpression",
        "start": 56,
        "end": 155,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 56,
          "end": 86,
          "object": {
            "type": "MemberExpression",
            "start": 56,
            "end": 71,
            "object": {
              "type": "Identifier",
              "start": 56,
              "end": 61,
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 71,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 72,
            "end": 86,
            "decorators": [],
            "name": "removeChildren",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 89,
          "end": 155,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 101,
            "end": 155,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 107,
                "end": 153,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 107,
                  "end": 153,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 107,
                    "end": 123,
                    "object": {
                      "type": "ThisExpression",
                      "start": 107,
                      "end": 111
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 123,
                      "decorators": [],
                      "name": "textContent",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 126,
                    "end": 153,
                    "value": "nope, not going to happen",
                    "raw": "'nope, not going to happen'"
                  }
                },
                "directive": null
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
