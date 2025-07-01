__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 28
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 47
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 48,
                      "end": 54
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 56,
                      "end": 62
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 64,
                        "end": 70
                      },
                      "start": 64,
                      "end": 72
                    }
                  ],
                  "start": 47,
                  "end": 73
                },
                "start": 38,
                "end": 73
              },
              {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            ],
            "start": 38,
            "end": 82
          },
          "start": 34,
          "end": 83
        },
        "start": 31,
        "end": 83
      },
      "declare": false,
      "start": 17,
      "end": 83
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 104
                },
                "typeArguments": null,
                "start": 98,
                "end": 104
              },
              "start": 96,
              "end": 104
            },
            "start": 91,
            "end": 104
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 136
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 145,
                          "end": 147
                        },
                        "start": 139,
                        "end": 147
                      },
                      "definite": false,
                      "start": 132,
                      "end": 147
                    }
                  ],
                  "declare": false,
                  "start": 126,
                  "end": 147
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 163
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 164,
                      "end": 165
                    },
                    "optional": false,
                    "computed": true,
                    "start": 159,
                    "end": 166
                  },
                  "start": 152,
                  "end": 166
                }
              ],
              "start": 120,
              "end": 168
            },
            "expression": false,
            "start": 107,
            "end": 168
          },
          "definite": false,
          "start": 91,
          "end": 168
        }
      ],
      "declare": false,
      "start": 85,
      "end": 168
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action2",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 182
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 206
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 207,
                      "end": 213
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 215,
                      "end": 221
                    },
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 223,
                        "end": 229
                      },
                      "start": 223,
                      "end": 231
                    }
                  ],
                  "start": 206,
                  "end": 232
                },
                "start": 192,
                "end": 232
              },
              {
                "type": "TSStringKeyword",
                "start": 235,
                "end": 241
              }
            ],
            "start": 192,
            "end": 241
          },
          "start": 188,
          "end": 242
        },
        "start": 185,
        "end": 242
      },
      "declare": false,
      "start": 170,
      "end": 242
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Action2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 257,
                  "end": 264
                },
                "typeArguments": null,
                "start": 257,
                "end": 264
              },
              "start": 255,
              "end": 264
            },
            "start": 250,
            "end": 264
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 298,
                        "end": 302
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 317,
                                "end": 324
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 325,
                                "end": 332
                              },
                              "optional": false,
                              "computed": false,
                              "start": 317,
                              "end": 332
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "",
                                "raw": "''",
                                "start": 333,
                                "end": 335
                              }
                            ],
                            "optional": false,
                            "start": 317,
                            "end": 336
                          },
                          "start": 311,
                          "end": 336
                        },
                        "start": 305,
                        "end": 336
                      },
                      "definite": false,
                      "start": 298,
                      "end": 336
                    }
                  ],
                  "declare": false,
                  "start": 292,
                  "end": 336
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 348,
                      "end": 352
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 353,
                      "end": 354
                    },
                    "optional": false,
                    "computed": true,
                    "start": 348,
                    "end": 355
                  },
                  "start": 341,
                  "end": 355
                }
              ],
              "start": 286,
              "end": 357
            },
            "expression": false,
            "start": 267,
            "end": 357
          },
          "definite": false,
          "start": 250,
          "end": 357
        }
      ],
      "declare": false,
      "start": 244,
      "end": 357
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 357
}
```
