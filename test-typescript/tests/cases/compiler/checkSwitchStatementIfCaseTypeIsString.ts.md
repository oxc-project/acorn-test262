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
        "name": "use",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 27,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 27,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 28,
        "end": 34,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 30,
          "end": 34
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 204,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 55,
              "name": "doIt",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 204,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 72,
                  "name": "x",
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
                        "name": "Array",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 99,
                          "name": "forEach",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 100,
                          "end": 196,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 101,
                              "end": 102,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                                  "name": "v",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "cases": [
                                  {
                                    "type": "SwitchCase",
                                    "start": 149,
                                    "end": 172,
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
                                            "name": "use",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 166,
                                              "end": 170
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        },
                                        "directive": null
                                      }
                                    ],
                                    "test": {
                                      "type": "Literal",
                                      "start": 154,
                                      "end": 160,
                                      "value": "test",
                                      "raw": "\"test\""
                                    }
                                  }
                                ]
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 73,
                "end": 79,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 75,
                  "end": 79
                }
              }
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
