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
      "expression": {
        "type": "CallExpression",
        "start": 22,
        "end": 94,
        "callee": {
          "type": "MemberExpression",
          "start": 22,
          "end": 35,
          "object": {
            "type": "Identifier",
            "start": 22,
            "end": 28,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "decorators": [],
            "name": "freeze",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 45,
                  "end": 90,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 65,
                            "end": 78,
                            "object": {
                              "type": "Identifier",
                              "start": 65,
                              "end": 71,
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 78,
                              "decorators": [],
                              "name": "freeze",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 79,
                              "end": 82,
                              "value": "a",
                              "raw": "'a'"
                            }
                          ],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
