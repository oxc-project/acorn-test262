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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Elements",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 18
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 36,
                  "end": 43
                },
                "start": 36,
                "end": 45
              },
              "start": 27,
              "end": 45
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 45
          }
        ],
        "start": 9,
        "end": 46
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "elements",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 75
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 81
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Elements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 99
                    },
                    "typeArguments": null,
                    "start": 91,
                    "end": 99
                  },
                  "start": 85,
                  "end": 99
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 104,
                        "end": 107
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Elements",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 109,
                              "end": 117
                            },
                            "typeArguments": null,
                            "start": 109,
                            "end": 117
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 118,
                              "end": 119
                            },
                            "typeArguments": null,
                            "start": 118,
                            "end": 119
                          },
                          "start": 109,
                          "end": 120
                        },
                        "start": 107,
                        "end": 120
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 104,
                      "end": 120
                    }
                  ],
                  "start": 102,
                  "end": 122
                },
                "optional": false,
                "readonly": null,
                "start": 77,
                "end": 124
              },
              "start": 75,
              "end": 124
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public",
            "start": 51,
            "end": 125
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 147
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "elements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 164
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 170
                      },
                      "constraint": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Elements",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 180,
                            "end": 188
                          },
                          "typeArguments": null,
                          "start": 180,
                          "end": 188
                        },
                        "start": 174,
                        "end": 188
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 193,
                              "end": 196
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Elements",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 198,
                                    "end": 206
                                  },
                                  "typeArguments": null,
                                  "start": 198,
                                  "end": 206
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "P",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 207,
                                    "end": 208
                                  },
                                  "typeArguments": null,
                                  "start": 207,
                                  "end": 208
                                },
                                "start": 198,
                                "end": 209
                              },
                              "start": 196,
                              "end": 209
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 193,
                            "end": 209
                          }
                        ],
                        "start": 191,
                        "end": 211
                      },
                      "optional": false,
                      "readonly": null,
                      "start": 166,
                      "end": 213
                    },
                    "start": 164,
                    "end": 213
                  },
                  "value": null,
                  "start": 153,
                  "end": 213
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 224,
                          "end": 228
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "elements",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 237
                        },
                        "optional": false,
                        "computed": false,
                        "start": 224,
                        "end": 237
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "elements",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 248
                      },
                      "start": 224,
                      "end": 248
                    },
                    "directive": null,
                    "start": 224,
                    "end": 249
                  }
                ],
                "start": 218,
                "end": 253
              },
              "expression": false,
              "start": 147,
              "end": 253
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 129,
            "end": 253
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 267
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 271,
                    "end": 274
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSRestType",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Elements",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 279,
                                "end": 287
                              },
                              "typeArguments": null,
                              "start": 279,
                              "end": 287
                            },
                            "start": 276,
                            "end": 287
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "abc",
                              "raw": "\"abc\"",
                              "start": 289,
                              "end": 294
                            },
                            "start": 289,
                            "end": 294
                          }
                        ],
                        "start": 275,
                        "end": 295
                      }
                    ],
                    "start": 274,
                    "end": 296
                  },
                  "start": 271,
                  "end": 296
                },
                "start": 269,
                "end": 296
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 317
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSRestType",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Elements",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 322,
                                    "end": 330
                                  },
                                  "typeArguments": null,
                                  "start": 322,
                                  "end": 330
                                },
                                "start": 319,
                                "end": 330
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "abc",
                                  "raw": "\"abc\"",
                                  "start": 332,
                                  "end": 337
                                },
                                "start": 332,
                                "end": 337
                              }
                            ],
                            "start": 318,
                            "end": 338
                          }
                        ],
                        "start": 317,
                        "end": 339
                      },
                      "arguments": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 343,
                              "end": 347
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "elements",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 348,
                              "end": 356
                            },
                            "optional": false,
                            "computed": false,
                            "start": 343,
                            "end": 356
                          },
                          "start": 340,
                          "end": 356
                        },
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 360,
                                "end": 363
                              },
                              "value": {
                                "type": "Literal",
                                "value": "abc",
                                "raw": "\"abc\"",
                                "start": 365,
                                "end": 370
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 360,
                              "end": 370
                            }
                          ],
                          "start": 358,
                          "end": 372
                        }
                      ],
                      "start": 310,
                      "end": 373
                    },
                    "start": 303,
                    "end": 374
                  }
                ],
                "start": 297,
                "end": 378
              },
              "expression": false,
              "start": 267,
              "end": 378
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 257,
            "end": 378
          }
        ],
        "start": 47,
        "end": 380
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 380
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 380
}
```
