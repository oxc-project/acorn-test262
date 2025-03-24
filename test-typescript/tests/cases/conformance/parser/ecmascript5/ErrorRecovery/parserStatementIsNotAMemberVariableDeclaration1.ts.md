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
            "method": false,
            "shorthand": false,
            "computed": false,
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
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 29,
                  "end": 32,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 34,
                  "end": 39,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "private",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 125,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 134,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "kind": "init",
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
