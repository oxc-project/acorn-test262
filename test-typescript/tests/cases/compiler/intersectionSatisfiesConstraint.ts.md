__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 456,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 55,
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 55,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 31,
            "end": 53,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 45,
              "decorators": [],
              "name": "commonProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "FirstInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 113,
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 113,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 111,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 103,
              "decorators": [],
              "name": "commonProperty",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 111,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 105,
                "end": 111
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 82,
        "decorators": [],
        "name": "SecondInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 115,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 136,
            "decorators": [],
            "name": "myFirstFunction",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 139,
            "end": 328,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 198,
              "end": 328,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 204,
                  "end": 295,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 210,
                      "end": 295,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 249,
                        "decorators": [],
                        "name": "newParam",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 218,
                          "end": 249,
                          "typeAnnotation": {
                            "type": "TSIntersectionType",
                            "start": 220,
                            "end": 249,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 220,
                                "end": 221,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 220,
                                  "end": 221,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "TSTypeLiteral",
                                "start": 224,
                                "end": 249,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 226,
                                    "end": 247,
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 226,
                                      "end": 239,
                                      "decorators": [],
                                      "name": "otherProperty",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 239,
                                      "end": 247,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 241,
                                        "end": 247
                                      }
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 252,
                        "end": 295,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 266,
                            "end": 272,
                            "decorators": [],
                            "name": "param1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "ObjectExpression",
                            "start": 274,
                            "end": 294,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 276,
                                "end": 292,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 276,
                                  "end": 289,
                                  "decorators": [],
                                  "name": "otherProperty",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 291,
                                  "end": 292,
                                  "raw": "3",
                                  "value": 3,
                                  "regex": null,
                                  "bigint": null
                                }
                              }
                            ]
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 252,
                          "end": 265,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 252,
                            "end": 258,
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 259,
                            "end": 265,
                            "decorators": [],
                            "name": "assign",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 300,
                  "end": 326,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 300,
                    "end": 326,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 317,
                        "end": 325,
                        "decorators": [],
                        "name": "newParam",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 316,
                      "decorators": [],
                      "name": "mySecondFunction",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
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
                "start": 184,
                "end": 193,
                "decorators": [],
                "name": "param1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 192,
                    "end": 193,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 139,
              "end": 183,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 140,
                  "end": 182,
                  "const": false,
                  "constraint": {
                    "type": "TSUnionType",
                    "start": 150,
                    "end": 182,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 150,
                        "end": 164,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 164,
                          "decorators": [],
                          "name": "FirstInterface",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 167,
                        "end": 182,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 167,
                          "end": 182,
                          "decorators": [],
                          "name": "SecondInterface",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 330,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 456,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 352,
            "decorators": [],
            "name": "mySecondFunction",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 355,
            "end": 456,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 433,
              "end": 456,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 439,
                  "end": 454,
                  "argument": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 454,
                    "decorators": [],
                    "name": "newParam",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 417,
                "end": 428,
                "decorators": [],
                "name": "newParam",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 425,
                  "end": 428,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 427,
                    "end": 428,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 428,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 355,
              "end": 416,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 356,
                  "end": 415,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeLiteral",
                    "start": 366,
                    "end": 415,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 368,
                        "end": 391,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 368,
                          "end": 382,
                          "decorators": [],
                          "name": "commonProperty",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 382,
                          "end": 390,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 384,
                            "end": 390
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 392,
                        "end": 413,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 392,
                          "end": 405,
                          "decorators": [],
                          "name": "otherProperty",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 405,
                          "end": 413,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 407,
                            "end": 413
                          }
                        }
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 356,
                    "end": 357,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
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
