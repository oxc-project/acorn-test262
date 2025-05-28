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
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 10,
                "end": 52,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 16,
                    "end": 50,
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
                    "value": {
                      "type": "FunctionExpression",
                      "start": 18,
                      "end": 50,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
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
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 55,
            "end": 57,
            "decorators": [],
            "name": "hi",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
