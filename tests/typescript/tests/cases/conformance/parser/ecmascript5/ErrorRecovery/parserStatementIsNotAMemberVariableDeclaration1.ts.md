__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ReturnStatement",
      "argument": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "set",
              "raw": "\"set\"",
              "start": 12,
              "end": 17
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 29,
                  "end": 32
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 39
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 114,
                          "end": 121
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 125
                        },
                        "optional": false,
                        "computed": true,
                        "start": 114,
                        "end": 126
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 134
                      },
                      "start": 114,
                      "end": 134
                    },
                    "directive": null,
                    "start": 114,
                    "end": 135
                  }
                ],
                "start": 41,
                "end": 140
              },
              "expression": false,
              "start": 19,
              "end": 140
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 12,
            "end": 140
          }
        ],
        "start": 7,
        "end": 143
      },
      "start": 0,
      "end": 144
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 144
}
```
