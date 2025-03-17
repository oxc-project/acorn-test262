__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "ReturnStatement",
      "start": 0,
      "end": 158,
      "argument": {
        "type": "CallExpression",
        "start": 7,
        "end": 157,
        "callee": {
          "type": "MemberExpression",
          "start": 7,
          "end": 32,
          "object": {
            "type": "CallExpression",
            "start": 7,
            "end": 22,
            "callee": {
              "type": "MemberExpression",
              "start": 7,
              "end": 16,
              "object": {
                "type": "ThisExpression",
                "start": 7,
                "end": 11
              },
              "property": {
                "type": "Identifier",
                "start": 12,
                "end": 16,
                "name": "edit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 17,
                "end": 21,
                "name": "role",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 28,
            "end": 32,
            "name": "then",
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
            "start": 33,
            "end": 156,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 34,
                "end": 44,
                "name": "role",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 40,
                    "end": 44,
                    "typeName": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 44,
                      "name": "Role",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 57,
              "end": 156,
              "callee": {
                "type": "MemberExpression",
                "start": 57,
                "end": 101,
                "object": {
                  "type": "CallExpression",
                  "start": 57,
                  "end": 83,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 57,
                    "end": 77,
                    "object": {
                      "type": "MemberExpression",
                      "start": 57,
                      "end": 73,
                      "object": {
                        "type": "ThisExpression",
                        "start": 57,
                        "end": 61
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 73,
                        "name": "roleService",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 77,
                      "name": "add",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 78,
                      "end": 82,
                      "name": "role",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 101,
                  "name": "then",
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
                  "start": 102,
                  "end": 155,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 103,
                      "end": 141,
                      "name": "data",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 107,
                        "end": 141,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 109,
                          "end": 141,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 109,
                            "end": 135,
                            "left": {
                              "type": "Identifier",
                              "start": 109,
                              "end": 111,
                              "name": "ng",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 112,
                              "end": 135,
                              "name": "IHttpPromiseCallbackArg",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 135,
                            "end": 141,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 136,
                                "end": 140,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 136,
                                  "end": 140,
                                  "name": "Role",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
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
                    "type": "MemberExpression",
                    "start": 146,
                    "end": 155,
                    "object": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 155,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
