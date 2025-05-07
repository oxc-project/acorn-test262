__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 357,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 17,
      "end": 83,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 28,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 31,
        "end": 83,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 34,
          "end": 83,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 38,
            "end": 82,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 38,
                "end": 73,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 47,
                  "end": 73,
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
                      "start": 64,
                      "end": 72,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 64,
                        "end": 70
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 47,
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            ]
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 104,
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 96,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 98,
                "end": 104,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 104,
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 107,
            "end": 168,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 120,
              "end": 168,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 126,
                  "end": 147,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 132,
                      "end": 147,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 136,
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "YieldExpression",
                        "start": 139,
                        "end": 147,
                        "argument": {
                          "type": "Literal",
                          "start": 145,
                          "end": 147,
                          "raw": "''",
                          "value": "",
                          "regex": null,
                          "bigint": null
                        },
                        "delegate": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 152,
                  "end": 166,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 159,
                    "end": 166,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 163,
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 164,
                      "end": 165,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 170,
      "end": 242,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 182,
        "decorators": [],
        "name": "Action2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 185,
        "end": 242,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 188,
          "end": 242,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 192,
            "end": 241,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 192,
                "end": 232,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 206,
                  "end": 232,
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
                      "start": 223,
                      "end": 231,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 223,
                        "end": 229
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 206,
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 235,
                "end": 241
              }
            ]
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 357,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 357,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 264,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 257,
                "end": 264,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 264,
                  "decorators": [],
                  "name": "Action2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 267,
            "end": 357,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 286,
              "end": 357,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 292,
                  "end": 336,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 298,
                      "end": 336,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 302,
                        "decorators": [],
                        "name": "next",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "YieldExpression",
                        "start": 305,
                        "end": 336,
                        "argument": {
                          "type": "AwaitExpression",
                          "start": 311,
                          "end": 336,
                          "argument": {
                            "type": "CallExpression",
                            "start": 317,
                            "end": 336,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 333,
                                "end": 335,
                                "raw": "''",
                                "value": "",
                                "regex": null,
                                "bigint": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 317,
                              "end": 332,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 317,
                                "end": 324,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 325,
                                "end": 332,
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "delegate": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 341,
                  "end": 355,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 348,
                    "end": 355,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 348,
                      "end": 352,
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 353,
                      "end": 354,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
