__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 95,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 22,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 94,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 36,
            "end": 93,
            "properties": [
              {
                "type": "Property",
                "start": 42,
                "end": 90,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 45,
                  "end": 90,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 48,
                    "end": 90,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 58,
                        "end": 84,
                        "argument": {
                          "type": "CallExpression",
                          "start": 65,
                          "end": 83,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 79,
                              "end": 82,
                              "raw": "'a'",
                              "value": "a"
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 65,
                            "end": 78,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 65,
                              "end": 71,
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 78,
                              "decorators": [],
                              "name": "freeze",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
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
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 35,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 22,
            "end": 28,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "freeze",
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
