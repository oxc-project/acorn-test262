asyncAwaitNestedClasses_es5.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 348,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 333,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 64,
        "end": 333,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 331,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ClassExpression",
              "start": 81,
              "end": 331,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 89,
                "end": 331,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 99,
                    "end": 205,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 106,
                      "end": 111,
                      "decorators": [],
                      "name": "func2",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 111,
                      "end": 205,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 129,
                        "end": 205,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 143,
                            "end": 195,
                            "argument": {
                              "type": "NewExpression",
                              "start": 150,
                              "end": 194,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 162,
                                  "end": 193,
                                  "async": false,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 175,
                                    "end": 193,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 177,
                                        "end": 191,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 177,
                                          "end": 190,
                                          "arguments": [
                                            {
                                              "type": "Literal",
                                              "start": 185,
                                              "end": 189,
                                              "raw": "null",
                                              "value": null
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 177,
                                            "end": 184,
                                            "decorators": [],
                                            "name": "resolve",
                                            "optional": false
                                          },
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 163,
                                      "end": 170,
                                      "decorators": [],
                                      "name": "resolve",
                                      "optional": false
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 154,
                                "end": 161,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 113,
                        "end": 128,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 115,
                          "end": 128,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 122,
                            "end": 128,
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 123,
                                "end": 127
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 115,
                            "end": 122,
                            "decorators": [],
                            "name": "Promise",
                            "optional": false
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 214,
                    "end": 325,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "ClassExpression",
                      "start": 225,
                      "end": 325,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 233,
                        "end": 325,
                        "body": [
                          {
                            "type": "MethodDefinition",
                            "start": 247,
                            "end": 315,
                            "computed": false,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 260,
                              "end": 264,
                              "decorators": [],
                              "name": "func",
                              "optional": false
                            },
                            "kind": "method",
                            "optional": false,
                            "override": false,
                            "static": true,
                            "value": {
                              "type": "FunctionExpression",
                              "start": 264,
                              "end": 315,
                              "async": true,
                              "body": {
                                "type": "BlockStatement",
                                "start": 267,
                                "end": 315,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 285,
                                    "end": 301,
                                    "expression": {
                                      "type": "AwaitExpression",
                                      "start": 285,
                                      "end": 300,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 291,
                                        "end": 300,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 291,
                                          "end": 298,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 291,
                                            "end": 292,
                                            "decorators": [],
                                            "name": "B",
                                            "optional": false
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 293,
                                            "end": 298,
                                            "decorators": [],
                                            "name": "func2",
                                            "optional": false
                                          }
                                        },
                                        "optional": false
                                      }
                                    }
                                  }
                                ]
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": []
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 232,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "implements": [],
                      "superClass": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 87,
                "end": 88,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "implements": [],
              "superClass": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExpressionStatement",
      "start": 335,
      "end": 348,
      "expression": {
        "type": "CallExpression",
        "start": 335,
        "end": 347,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 335,
          "end": 345,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 335,
            "end": 340,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 335,
              "end": 338,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 335,
                "end": 336,
                "decorators": [],
                "name": "A",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 337,
                "end": 338,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 345,
            "decorators": [],
            "name": "func",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
