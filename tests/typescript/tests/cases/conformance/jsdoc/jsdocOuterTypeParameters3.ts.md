__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 30
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
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
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 60
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 82,
                            "end": 85
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
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 90,
                                          "end": 94
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "prototype",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 95,
                                          "end": 104
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 90,
                                        "end": 104
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "foo",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 105,
                                        "end": 108
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 90,
                                      "end": 108
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 90,
                                    "end": 110
                                  },
                                  "directive": null,
                                  "start": 90,
                                  "end": 111
                                }
                              ],
                              "start": 88,
                              "end": 113
                            },
                            "expression": false,
                            "start": 85,
                            "end": 113
                          },
                          "kind": "method",
                          "computed": false,
                          "static": true,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 75,
                          "end": 113
                        }
                      ],
                      "start": 61,
                      "end": 123
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 51,
                    "end": 123
                  }
                ],
                "start": 41,
                "end": 129
              },
              "expression": false,
              "start": 38,
              "end": 129
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 37,
            "end": 129
          }
        ],
        "start": 31,
        "end": 131
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 131
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 131
}
```
