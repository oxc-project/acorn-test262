__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumVal",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 38
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 46,
                "end": 52
              },
              "start": 44,
              "end": 52
            },
            "accessibility": null,
            "static": false,
            "start": 41,
            "end": 53
          }
        ],
        "start": 39,
        "end": 55
      },
      "declare": false,
      "start": 22,
      "end": 55
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrVal",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 72
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 78
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 80,
                "end": 86
              },
              "start": 78,
              "end": 86
            },
            "accessibility": null,
            "static": false,
            "start": 75,
            "end": 87
          }
        ],
        "start": 73,
        "end": 89
      },
      "declare": false,
      "start": 56,
      "end": 89
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Val",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 98
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 107
            },
            "typeArguments": null,
            "start": 101,
            "end": 107
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StrVal",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 116
            },
            "typeArguments": null,
            "start": 110,
            "end": 116
          }
        ],
        "start": 101,
        "end": 116
      },
      "declare": false,
      "start": 90,
      "end": 117
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumVal",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 136
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Val",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 143
              },
              "typeArguments": null,
              "start": 140,
              "end": 143
            },
            "start": 138,
            "end": 143
          },
          "start": 137,
          "end": 143
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 147
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumVal",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 157
              },
              "typeArguments": null,
              "start": 151,
              "end": 157
            },
            "start": 151,
            "end": 157
          },
          "start": 146,
          "end": 157
        },
        "start": 144,
        "end": 157
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 179
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 183
                  },
                  "optional": false,
                  "computed": false,
                  "start": 178,
                  "end": 183
                },
                "prefix": true,
                "start": 171,
                "end": 183
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 188,
                "end": 196
              },
              "start": 171,
              "end": 196
            },
            "start": 164,
            "end": 197
          }
        ],
        "start": 158,
        "end": 199
      },
      "expression": false,
      "start": 119,
      "end": 199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 213
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "things",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 225
                },
                "typeArguments": null,
                "start": 222,
                "end": 225
              },
              "start": 222,
              "end": 227
            },
            "start": 220,
            "end": 227
          },
          "start": 214,
          "end": 227
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 230,
          "end": 234
        },
        "start": 228,
        "end": 234
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 252,
                    "end": 257
                  },
                  "init": null,
                  "definite": false,
                  "start": 252,
                  "end": 257
                }
              ],
              "declare": false,
              "start": 246,
              "end": 257
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "things",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 267
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNumVal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 283,
                      "end": 291
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 297
                      }
                    ],
                    "optional": false,
                    "start": 283,
                    "end": 298
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 322,
                                    "end": 325
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 322,
                                    "end": 325
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 322,
                                  "end": 325
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 320,
                              "end": 327
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 330,
                              "end": 335
                            },
                            "definite": false,
                            "start": 320,
                            "end": 335
                          }
                        ],
                        "declare": false,
                        "start": 314,
                        "end": 336
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 349,
                              "end": 352
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 353,
                              "end": 360
                            },
                            "optional": false,
                            "computed": false,
                            "start": 349,
                            "end": 360
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 361,
                              "end": 362
                            }
                          ],
                          "optional": false,
                          "start": 349,
                          "end": 363
                        },
                        "directive": null,
                        "start": 349,
                        "end": 364
                      }
                    ],
                    "start": 300,
                    "end": 374
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 410,
                                    "end": 413
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 410,
                                    "end": 413
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 410,
                                  "end": 413
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 408,
                              "end": 415
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 418,
                              "end": 423
                            },
                            "definite": false,
                            "start": 408,
                            "end": 423
                          }
                        ],
                        "declare": false,
                        "start": 402,
                        "end": 424
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 437,
                            "end": 440
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 441,
                            "end": 447
                          },
                          "optional": false,
                          "computed": false,
                          "start": 437,
                          "end": 447
                        },
                        "directive": null,
                        "start": 437,
                        "end": 448
                      }
                    ],
                    "start": 388,
                    "end": 458
                  },
                  "start": 279,
                  "end": 458
                }
              ],
              "start": 269,
              "end": 464
            },
            "start": 241,
            "end": 464
          }
        ],
        "start": 235,
        "end": 466
      },
      "expression": false,
      "start": 201,
      "end": 466
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 466
}
```
