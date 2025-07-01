__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 28
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "freeze",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 35
          },
          "optional": false,
          "computed": false,
          "start": 22,
          "end": 35
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 45
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 65,
                              "end": 71
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "freeze",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 72,
                              "end": 78
                            },
                            "optional": false,
                            "computed": false,
                            "start": 65,
                            "end": 78
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "a",
                              "raw": "'a'",
                              "start": 79,
                              "end": 82
                            }
                          ],
                          "optional": false,
                          "start": 65,
                          "end": 83
                        },
                        "start": 58,
                        "end": 84
                      }
                    ],
                    "start": 48,
                    "end": 90
                  },
                  "expression": false,
                  "start": 45,
                  "end": 90
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 42,
                "end": 90
              }
            ],
            "start": 36,
            "end": 93
          }
        ],
        "optional": false,
        "start": 22,
        "end": 94
      },
      "directive": null,
      "start": 22,
      "end": 95
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 95
}
```
