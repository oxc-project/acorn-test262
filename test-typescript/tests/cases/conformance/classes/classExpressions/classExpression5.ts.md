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
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 59,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 57,
          "object": {
            "type": "NewExpression",
            "start": 0,
            "end": 54,
            "callee": {
              "type": "ClassExpression",
              "start": 4,
              "end": 52,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 10,
                "end": 52,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 16,
                    "end": 50,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 16,
                      "end": 18,
                      "name": "hi",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 18,
                      "end": 50,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
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
                              "value": "Hi!",
                              "raw": "\"Hi!\""
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "arguments": [],
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 57,
            "name": "hi",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
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
