__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 59,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 57,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 0,
            "end": 54,
            "arguments": [],
            "callee": {
              "type": "ClassExpression",
              "start": 4,
              "end": 52,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 10,
                "end": 52,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 16,
                    "end": 50,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 16,
                      "end": 18,
                      "decorators": [],
                      "name": "hi",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 18,
                      "end": 50,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 21,
                        "end": 50,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 31,
                            "end": 44,
                            "argument": {
                              "type": "Literal",
                              "start": 38,
                              "end": 43,
                              "raw": "\"Hi!\"",
                              "value": "Hi!"
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
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 57,
            "decorators": [],
            "name": "hi",
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
