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
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 28,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 31,
        "end": 83,
        "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 47,
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 76,
                "end": 82
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 168,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 168,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 104,
                  "decorators": [],
                  "name": "Action",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 107,
            "end": 168,
            "id": null,
            "generator": true,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 120,
              "end": 168,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 126,
                  "end": 147,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 132,
                      "end": 147,
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
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "start": 145,
                          "end": 147,
                          "value": "",
                          "raw": "''"
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 152,
                  "end": 166,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 159,
                    "end": 166,
                    "object": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 163,
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 164,
                      "end": 165,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "computed": true
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 170,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 182,
        "decorators": [],
        "name": "Action2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 185,
        "end": 242,
        "typeParameters": null,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 206,
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 235,
                "end": 241
              }
            ]
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 244,
      "end": 357,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 250,
          "end": 357,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 264,
                  "decorators": [],
                  "name": "Action2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 267,
            "end": 357,
            "id": null,
            "generator": true,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 286,
              "end": 357,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 292,
                  "end": 336,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 298,
                      "end": 336,
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
                        "delegate": false,
                        "argument": {
                          "type": "AwaitExpression",
                          "start": 311,
                          "end": 336,
                          "argument": {
                            "type": "CallExpression",
                            "start": 317,
                            "end": 336,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 317,
                              "end": 332,
                              "object": {
                                "type": "Identifier",
                                "start": 317,
                                "end": 324,
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 325,
                                "end": 332,
                                "decorators": [],
                                "name": "resolve",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 333,
                                "end": 335,
                                "value": "",
                                "raw": "''"
                              }
                            ],
                            "optional": false
                          }
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 341,
                  "end": 355,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 348,
                    "end": 355,
                    "object": {
                      "type": "Identifier",
                      "start": 348,
                      "end": 352,
                      "decorators": [],
                      "name": "next",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 353,
                      "end": 354,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "computed": true
                  }
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
