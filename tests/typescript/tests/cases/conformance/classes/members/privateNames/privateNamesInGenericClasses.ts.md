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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
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
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 17,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 24
                },
                "typeArguments": null,
                "start": 23,
                "end": 24
              },
              "start": 21,
              "end": 24
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 25
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method",
              "start": 30,
              "end": 37
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 41,
                    "end": 42
                  },
                  "typeArguments": null,
                  "start": 41,
                  "end": 42
                },
                "start": 39,
                "end": 42
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 52,
                        "end": 56
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 57,
                        "end": 61
                      },
                      "optional": false,
                      "computed": false,
                      "start": 52,
                      "end": 61
                    },
                    "start": 45,
                    "end": 62
                  }
                ],
                "start": 43,
                "end": 64
              },
              "expression": false,
              "start": 37,
              "end": 64
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 30,
            "end": 64
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 73,
              "end": 78
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 83
                  },
                  "typeArguments": null,
                  "start": 82,
                  "end": 83
                },
                "start": 80,
                "end": 83
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 93,
                        "end": 97
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 98,
                        "end": 102
                      },
                      "optional": false,
                      "computed": false,
                      "start": 93,
                      "end": 102
                    },
                    "start": 86,
                    "end": 103
                  }
                ],
                "start": 84,
                "end": 105
              },
              "expression": false,
              "start": 78,
              "end": 105
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 69,
            "end": 105
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 114,
              "end": 119
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 129
                      },
                      "typeArguments": null,
                      "start": 128,
                      "end": 129
                    },
                    "start": 126,
                    "end": 129
                  },
                  "start": 120,
                  "end": 129
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
                          "start": 133,
                          "end": 137
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "start": 138,
                          "end": 142
                        },
                        "optional": false,
                        "computed": false,
                        "start": 133,
                        "end": 142
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 150
                      },
                      "start": 133,
                      "end": 150
                    },
                    "directive": null,
                    "start": 133,
                    "end": 151
                  }
                ],
                "start": 131,
                "end": 153
              },
              "expression": false,
              "start": 119,
              "end": 153
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 110,
            "end": 153
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 166
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 171
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 172,
                              "end": 173
                            },
                            "typeArguments": null,
                            "start": 172,
                            "end": 173
                          }
                        ],
                        "start": 171,
                        "end": 174
                      },
                      "start": 170,
                      "end": 174
                    },
                    "start": 168,
                    "end": 174
                  },
                  "start": 167,
                  "end": 174
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 186
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 187,
                        "end": 191
                      },
                      "optional": false,
                      "computed": false,
                      "start": 185,
                      "end": 191
                    },
                    "start": 178,
                    "end": 192
                  }
                ],
                "start": 176,
                "end": 194
              },
              "expression": false,
              "start": 166,
              "end": 194
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 163,
            "end": 194
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 218
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 223
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 224,
                              "end": 225
                            },
                            "typeArguments": null,
                            "start": 224,
                            "end": 225
                          }
                        ],
                        "start": 223,
                        "end": 226
                      },
                      "start": 222,
                      "end": 226
                    },
                    "start": 220,
                    "end": 226
                  },
                  "start": 219,
                  "end": 226
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 237,
                          "end": 238
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 239,
                          "end": 246
                        },
                        "optional": false,
                        "computed": false,
                        "start": 237,
                        "end": 246
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 237,
                      "end": 248
                    },
                    "start": 230,
                    "end": 249
                  }
                ],
                "start": 228,
                "end": 251
              },
              "expression": false,
              "start": 218,
              "end": 251
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 214,
            "end": 251
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar3",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 269
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 273,
                        "end": 274
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 275,
                              "end": 276
                            },
                            "typeArguments": null,
                            "start": 275,
                            "end": 276
                          }
                        ],
                        "start": 274,
                        "end": 277
                      },
                      "start": 273,
                      "end": 277
                    },
                    "start": 271,
                    "end": 277
                  },
                  "start": 270,
                  "end": 277
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 288,
                        "end": 289
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 290,
                        "end": 295
                      },
                      "optional": false,
                      "computed": false,
                      "start": 288,
                      "end": 295
                    },
                    "start": 281,
                    "end": 296
                  }
                ],
                "start": 279,
                "end": 298
              },
              "expression": false,
              "start": 269,
              "end": 298
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 265,
            "end": 298
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 320
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 325
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 326,
                            "end": 332
                          }
                        ],
                        "start": 325,
                        "end": 333
                      },
                      "start": 324,
                      "end": 333
                    },
                    "start": 322,
                    "end": 333
                  },
                  "start": 321,
                  "end": 333
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 345
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 346,
                        "end": 350
                      },
                      "optional": false,
                      "computed": false,
                      "start": 344,
                      "end": 350
                    },
                    "start": 337,
                    "end": 351
                  }
                ],
                "start": 335,
                "end": 353
              },
              "expression": false,
              "start": 320,
              "end": 353
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 317,
            "end": 353
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz2",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 372
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 377
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 378,
                            "end": 384
                          }
                        ],
                        "start": 377,
                        "end": 385
                      },
                      "start": 376,
                      "end": 385
                    },
                    "start": 374,
                    "end": 385
                  },
                  "start": 373,
                  "end": 385
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 396,
                        "end": 397
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "method",
                        "start": 398,
                        "end": 405
                      },
                      "optional": false,
                      "computed": false,
                      "start": 396,
                      "end": 405
                    },
                    "start": 389,
                    "end": 406
                  }
                ],
                "start": 387,
                "end": 408
              },
              "expression": false,
              "start": 372,
              "end": 408
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 368,
            "end": 408
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz3",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 423
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 427,
                        "end": 428
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 429,
                            "end": 435
                          }
                        ],
                        "start": 428,
                        "end": 436
                      },
                      "start": 427,
                      "end": 436
                    },
                    "start": 425,
                    "end": 436
                  },
                  "start": 424,
                  "end": 436
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 447,
                        "end": 448
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 449,
                        "end": 454
                      },
                      "optional": false,
                      "computed": false,
                      "start": 447,
                      "end": 454
                    },
                    "start": 440,
                    "end": 455
                  }
                ],
                "start": 438,
                "end": 457
              },
              "expression": false,
              "start": 423,
              "end": 457
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 419,
            "end": 457
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "quux",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 475
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 479,
                        "end": 480
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 481,
                            "end": 487
                          }
                        ],
                        "start": 480,
                        "end": 488
                      },
                      "start": 479,
                      "end": 488
                    },
                    "start": 477,
                    "end": 488
                  },
                  "start": 476,
                  "end": 488
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 499,
                        "end": 500
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "start": 501,
                        "end": 505
                      },
                      "optional": false,
                      "computed": false,
                      "start": 499,
                      "end": 505
                    },
                    "start": 492,
                    "end": 506
                  }
                ],
                "start": 490,
                "end": 508
              },
              "expression": false,
              "start": 475,
              "end": 508
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 471,
            "end": 508
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "quux2",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 527
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 532
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 533,
                            "end": 539
                          }
                        ],
                        "start": 532,
                        "end": 540
                      },
                      "start": 531,
                      "end": 540
                    },
                    "start": 529,
                    "end": 540
                  },
                  "start": 528,
                  "end": 540
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 551,
                        "end": 552
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "method",
                        "start": 553,
                        "end": 560
                      },
                      "optional": false,
                      "computed": false,
                      "start": 551,
                      "end": 560
                    },
                    "start": 544,
                    "end": 561
                  }
                ],
                "start": 542,
                "end": 563
              },
              "expression": false,
              "start": 527,
              "end": 563
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 522,
            "end": 563
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "quux3",
              "optional": false,
              "typeAnnotation": null,
              "start": 573,
              "end": 578
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
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 582,
                        "end": 583
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 584,
                            "end": 590
                          }
                        ],
                        "start": 583,
                        "end": 591
                      },
                      "start": 582,
                      "end": 591
                    },
                    "start": 580,
                    "end": 591
                  },
                  "start": 579,
                  "end": 591
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 602,
                        "end": 603
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "start": 604,
                        "end": 609
                      },
                      "optional": false,
                      "computed": false,
                      "start": 602,
                      "end": 609
                    },
                    "start": 595,
                    "end": 610
                  }
                ],
                "start": 593,
                "end": 612
              },
              "expression": false,
              "start": 578,
              "end": 612
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 573,
            "end": 612
          }
        ],
        "start": 11,
        "end": 621
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 621
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 638,
                  "end": 639
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 640,
                      "end": 646
                    }
                  ],
                  "start": 639,
                  "end": 647
                },
                "start": 638,
                "end": 647
              },
              "start": 636,
              "end": 647
            },
            "start": 635,
            "end": 647
          },
          "init": null,
          "definite": false,
          "start": 635,
          "end": 647
        }
      ],
      "declare": true,
      "start": 623,
      "end": 648
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 665
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 666,
                      "end": 672
                    }
                  ],
                  "start": 665,
                  "end": 673
                },
                "start": 664,
                "end": 673
              },
              "start": 662,
              "end": 673
            },
            "start": 661,
            "end": 673
          },
          "init": null,
          "definite": false,
          "start": 661,
          "end": 673
        }
      ],
      "declare": true,
      "start": 649,
      "end": 674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 675,
          "end": 676
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "foo",
          "start": 677,
          "end": 681
        },
        "optional": false,
        "computed": false,
        "start": 675,
        "end": 681
      },
      "directive": null,
      "start": 675,
      "end": 682
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 726,
          "end": 727
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "method",
          "start": 728,
          "end": 735
        },
        "optional": false,
        "computed": false,
        "start": 726,
        "end": 735
      },
      "directive": null,
      "start": 726,
      "end": 736
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 777,
          "end": 778
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "prop",
          "start": 779,
          "end": 784
        },
        "optional": false,
        "computed": false,
        "start": 777,
        "end": 784
      },
      "directive": null,
      "start": 777,
      "end": 785
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 828,
          "end": 829
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 832,
          "end": 833
        },
        "start": 828,
        "end": 833
      },
      "directive": null,
      "start": 828,
      "end": 834
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 879,
          "end": 880
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 883,
          "end": 884
        },
        "start": 879,
        "end": 884
      },
      "directive": null,
      "start": 879,
      "end": 885
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 929
}
```
