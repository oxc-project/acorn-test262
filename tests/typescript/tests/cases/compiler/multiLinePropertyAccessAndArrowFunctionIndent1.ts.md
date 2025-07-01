__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ReturnStatement",
      "argument": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 7,
                "end": 11
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "edit",
                "optional": false,
                "typeAnnotation": null,
                "start": 12,
                "end": 16
              },
              "optional": false,
              "computed": false,
              "start": 7,
              "end": 16
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "role",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 21
              }
            ],
            "optional": false,
            "start": 7,
            "end": 22
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 32
          },
          "optional": false,
          "computed": false,
          "start": 7,
          "end": 32
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "role",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Role",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 40,
                      "end": 44
                    },
                    "typeArguments": null,
                    "start": 40,
                    "end": 44
                  },
                  "start": 38,
                  "end": 44
                },
                "start": 34,
                "end": 44
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 57,
                        "end": 61
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "roleService",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 73
                      },
                      "optional": false,
                      "computed": false,
                      "start": 57,
                      "end": 73
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "add",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 74,
                      "end": 77
                    },
                    "optional": false,
                    "computed": false,
                    "start": 57,
                    "end": 77
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "role",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 82
                    }
                  ],
                  "optional": false,
                  "start": 57,
                  "end": 83
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 101
                },
                "optional": false,
                "computed": false,
                "start": 57,
                "end": 101
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ng",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 109,
                              "end": 111
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IHttpPromiseCallbackArg",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 112,
                              "end": 135
                            },
                            "start": 109,
                            "end": 135
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Role",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 136,
                                  "end": 140
                                },
                                "typeArguments": null,
                                "start": 136,
                                "end": 140
                              }
                            ],
                            "start": 135,
                            "end": 141
                          },
                          "start": 109,
                          "end": 141
                        },
                        "start": 107,
                        "end": 141
                      },
                      "start": 103,
                      "end": 141
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 150
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 155
                    },
                    "optional": false,
                    "computed": false,
                    "start": 146,
                    "end": 155
                  },
                  "id": null,
                  "generator": false,
                  "start": 102,
                  "end": 155
                }
              ],
              "optional": false,
              "start": 57,
              "end": 156
            },
            "id": null,
            "generator": false,
            "start": 33,
            "end": 156
          }
        ],
        "optional": false,
        "start": 7,
        "end": 157
      },
      "start": 0,
      "end": 158
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 158
}
```
