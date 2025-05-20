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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 31,
        "end": 131,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 129,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 38,
              "end": 129,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 129,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 51,
                    "end": 123,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 61,
                      "end": 123,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 75,
                          "end": 113,
                          "accessibility": null,
                          "computed": false,
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
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": true,
                          "value": {
                            "type": "FunctionExpression",
                            "start": 85,
                            "end": 113,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 88,
                              "end": 113,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 90,
                                  "end": 111,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 90,
                                    "end": 110,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 90,
                                      "end": 108,
                                      "computed": false,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 90,
                                        "end": 104,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 90,
                                          "end": 94
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 95,
                                          "end": 104,
                                          "decorators": [],
                                          "name": "prototype",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 105,
                                        "end": 108,
                                        "decorators": [],
                                        "name": "foo",
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
                    },
                    "declare": false,
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
                    "implements": [],
                    "superClass": null,
                    "superTypeArguments": null,
                    "typeParameters": null
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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
