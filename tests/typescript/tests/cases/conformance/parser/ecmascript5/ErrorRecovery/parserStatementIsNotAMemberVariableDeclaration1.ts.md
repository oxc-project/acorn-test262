__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "ReturnStatement",
      "start": 0,
      "end": 144,
      "argument": {
        "type": "ObjectExpression",
        "start": 7,
        "end": 143,
        "properties": [
          {
            "type": "Property",
            "start": 12,
            "end": 140,
            "kind": "init",
            "key": {
              "type": "Literal",
              "start": 12,
              "end": 17,
              "value": "set",
              "raw": "\"set\""
            },
            "value": {
              "type": "FunctionExpression",
              "start": 19,
              "end": 140,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 29,
                  "end": 32,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 39,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 140,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 114,
                    "end": 135,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 114,
                      "end": 134,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 114,
                        "end": 126,
                        "object": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 121,
                          "decorators": [],
                          "name": "private",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 125,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 134,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
