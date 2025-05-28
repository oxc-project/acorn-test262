__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 206,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 27,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 27,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 28,
        "end": 34,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 30,
          "end": 34
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 206,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 204,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 55,
              "decorators": [],
              "name": "doIt",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 204,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 72,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 59,
                      "end": 72,
                      "typeName": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 64,
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 64,
                        "end": 72,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 65,
                            "end": 71
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 73,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 75,
                  "end": 79
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 80,
                "end": 204,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 90,
                    "end": 198,
                    "expression": {
                      "type": "CallExpression",
                      "start": 90,
                      "end": 197,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 90,
                        "end": 99,
                        "object": {
                          "type": "Identifier",
                          "start": 90,
                          "end": 91,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 99,
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 100,
                          "end": 196,
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 101,
                              "end": 102,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "start": 107,
                            "end": 196,
                            "body": [
                              {
                                "type": "SwitchStatement",
                                "start": 121,
                                "end": 186,
                                "discriminant": {
                                  "type": "Identifier",
                                  "start": 128,
                                  "end": 129,
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "cases": [
                                  {
                                    "type": "SwitchCase",
                                    "start": 149,
                                    "end": 172,
                                    "test": {
                                      "type": "Literal",
                                      "start": 154,
                                      "end": 160,
                                      "value": "test",
                                      "raw": "\"test\""
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 162,
                                        "end": 172,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 162,
                                          "end": 171,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 162,
                                            "end": 165,
                                            "decorators": [],
                                            "name": "use",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 166,
                                              "end": 170
                                            }
                                          ],
                                          "optional": false
                                        },
                                        "directive": null
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          "id": null,
                          "generator": false
                        }
                      ],
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
