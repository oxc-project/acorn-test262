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
        "name": "FirstInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 24
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
              "name": "commonProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 31,
            "end": 53
          }
        ],
        "start": 25,
        "end": 55
      },
      "declare": false,
      "start": 0,
      "end": 55
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SecondInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 82
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
              "name": "commonProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 103
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 105,
                "end": 111
              },
              "start": 103,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 111
          }
        ],
        "start": 83,
        "end": 113
      },
      "declare": false,
      "start": 57,
      "end": 113
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
            "name": "myFirstFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 136
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 140,
                    "end": 141
                  },
                  "constraint": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "FirstInterface",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 164
                        },
                        "typeArguments": null,
                        "start": 150,
                        "end": 164
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SecondInterface",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 167,
                          "end": 182
                        },
                        "typeArguments": null,
                        "start": 167,
                        "end": 182
                      }
                    ],
                    "start": 150,
                    "end": 182
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 140,
                  "end": 182
                }
              ],
              "start": 139,
              "end": 183
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "param1",
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
                      "start": 192,
                      "end": 193
                    },
                    "typeArguments": null,
                    "start": 192,
                    "end": 193
                  },
                  "start": 190,
                  "end": 193
                },
                "start": 184,
                "end": 193
              }
            ],
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
                        "name": "newParam",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 220,
                                  "end": 221
                                },
                                "typeArguments": null,
                                "start": 220,
                                "end": 221
                              },
                              {
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
                                      "name": "otherProperty",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 226,
                                      "end": 239
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 241,
                                        "end": 247
                                      },
                                      "start": 239,
                                      "end": 247
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 226,
                                    "end": 247
                                  }
                                ],
                                "start": 224,
                                "end": 249
                              }
                            ],
                            "start": 220,
                            "end": 249
                          },
                          "start": 218,
                          "end": 249
                        },
                        "start": 210,
                        "end": 249
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 252,
                            "end": 258
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "assign",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 259,
                            "end": 265
                          },
                          "optional": false,
                          "computed": false,
                          "start": 252,
                          "end": 265
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 266,
                            "end": 272
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
                                  "name": "otherProperty",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 276,
                                  "end": 289
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 291,
                                  "end": 292
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 276,
                                "end": 292
                              }
                            ],
                            "start": 274,
                            "end": 294
                          }
                        ],
                        "optional": false,
                        "start": 252,
                        "end": 295
                      },
                      "definite": false,
                      "start": 210,
                      "end": 295
                    }
                  ],
                  "declare": false,
                  "start": 204,
                  "end": 295
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mySecondFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 316
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "newParam",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 317,
                        "end": 325
                      }
                    ],
                    "optional": false,
                    "start": 300,
                    "end": 326
                  },
                  "directive": null,
                  "start": 300,
                  "end": 326
                }
              ],
              "start": 198,
              "end": 328
            },
            "id": null,
            "generator": false,
            "start": 139,
            "end": 328
          },
          "definite": false,
          "start": 121,
          "end": 328
        }
      ],
      "declare": false,
      "start": 115,
      "end": 328
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
            "name": "mySecondFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 336,
            "end": 352
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 356,
                    "end": 357
                  },
                  "constraint": {
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
                          "name": "commonProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 368,
                          "end": 382
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 384,
                            "end": 390
                          },
                          "start": 382,
                          "end": 390
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 368,
                        "end": 391
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "otherProperty",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 392,
                          "end": 405
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 407,
                            "end": 413
                          },
                          "start": 405,
                          "end": 413
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 392,
                        "end": 413
                      }
                    ],
                    "start": 366,
                    "end": 415
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 356,
                  "end": 415
                }
              ],
              "start": 355,
              "end": 416
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "newParam",
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
                      "start": 427,
                      "end": 428
                    },
                    "typeArguments": null,
                    "start": 427,
                    "end": 428
                  },
                  "start": 425,
                  "end": 428
                },
                "start": 417,
                "end": 428
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "newParam",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 446,
                    "end": 454
                  },
                  "start": 439,
                  "end": 454
                }
              ],
              "start": 433,
              "end": 456
            },
            "id": null,
            "generator": false,
            "start": 355,
            "end": 456
          },
          "definite": false,
          "start": 336,
          "end": 456
        }
      ],
      "declare": false,
      "start": 330,
      "end": 456
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 456
}
```
