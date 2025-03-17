__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 96,
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
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 35,
            "name": "freeze",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 45,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 45,
                  "end": 90,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                              "name": "Object",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 72,
                              "end": 78,
                              "name": "freeze",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 79,
                              "end": 82,
                              "value": "a",
                              "raw": "'a'"
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
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
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
