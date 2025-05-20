__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 38,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 37,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 7,
            "end": 36,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 13,
              "end": 36,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 20,
                  "end": 35,
                  "async": false,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 26,
                    "end": 34,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 28,
                        "end": 32,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 28,
                          "end": 29,
                          "decorators": [],
                          "name": "X",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Identifier",
                          "start": 31,
                          "end": 32,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 13,
                "end": 19,
                "computed": false,
                "object": {
                  "type": "ArrayExpression",
                  "start": 13,
                  "end": 15,
                  "elements": []
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 19,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 6,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 0,
            "end": 2,
            "elements": []
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3,
            "end": 6,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
