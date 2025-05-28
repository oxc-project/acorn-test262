__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 131,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 131,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 131,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 129,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 129,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 129,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 51,
                    "end": 123,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 60,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 61,
                      "end": 123,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 75,
                          "end": 113,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 82,
                            "end": 85,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "start": 85,
                            "end": 113,
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "start": 88,
                              "end": 113,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 90,
                                  "end": 111,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 90,
                                    "end": 110,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 90,
                                      "end": 108,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 90,
                                        "end": 104,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 90,
                                          "end": 94
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "start": 95,
                                          "end": 104,
                                          "decorators": [],
                                          "name": "prototype",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "computed": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 105,
                                        "end": 108,
                                        "decorators": [],
                                        "name": "foo",
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
                              ]
                            },
                            "expression": false
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null
                        }
                      ]
                    },
                    "abstract": false,
                    "declare": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
