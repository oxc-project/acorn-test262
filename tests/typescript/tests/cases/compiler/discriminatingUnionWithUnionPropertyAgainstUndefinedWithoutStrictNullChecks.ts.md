__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 591,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 59,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 60,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 71,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 74,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 202,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 201,
            "decorators": [],
            "name": "opts",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 201,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 97,
                "end": 201,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 99,
                    "end": 149,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 101,
                        "end": 123,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 110,
                          "decorators": [],
                          "name": "objectRef",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 111,
                          "end": 122,
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 113,
                            "end": 122
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 124,
                        "end": 147,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 124,
                          "end": 136,
                          "decorators": [],
                          "name": "getObjectRef",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 136,
                          "end": 147,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 138,
                            "end": 147,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 141,
                              "end": 147,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 144,
                                "end": 147
                              }
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 155,
                    "end": 201,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 157,
                        "end": 174,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 157,
                          "end": 166,
                          "decorators": [],
                          "name": "objectRef",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 166,
                          "end": 173,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 168,
                            "end": 173,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 168,
                                "end": 169,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 168,
                                  "end": 169,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 172,
                                "end": 173,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 172,
                                  "end": 173,
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 175,
                        "end": 199,
                        "computed": false,
                        "optional": true,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 187,
                          "decorators": [],
                          "name": "getObjectRef",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 188,
                          "end": 199,
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "start": 190,
                            "end": 199
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 204,
      "end": 242,
      "expression": {
        "type": "LogicalExpression",
        "start": 204,
        "end": 241,
        "left": {
          "type": "MemberExpression",
          "start": 204,
          "end": 218,
          "object": {
            "type": "Identifier",
            "start": 204,
            "end": 208,
            "decorators": [],
            "name": "opts",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 209,
            "end": 218,
            "decorators": [],
            "name": "objectRef",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "start": 222,
          "end": 241,
          "callee": {
            "type": "MemberExpression",
            "start": 222,
            "end": 239,
            "object": {
              "type": "Identifier",
              "start": 222,
              "end": 226,
              "decorators": [],
              "name": "opts",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 227,
              "end": 239,
              "decorators": [],
              "name": "getObjectRef",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 285,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 296,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 297,
        "end": 317,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 303,
            "end": 315,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 306,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 306,
              "end": 314,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 308,
                "end": 314
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 319,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 330,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 331,
        "end": 351,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 337,
            "end": 349,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 337,
              "end": 340,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 348,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 342,
                "end": 348
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 353,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 365,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 366,
        "end": 412,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 372,
            "end": 388,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 372,
              "end": 378,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 378,
              "end": 387,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 380,
                "end": 387
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 393,
            "end": 410,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 393,
              "end": 398,
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 409,
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "start": 400,
                "end": 409
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 414,
      "end": 448,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 426,
        "decorators": [],
        "name": "B2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 427,
        "end": 448,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 433,
            "end": 446,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 433,
              "end": 438,
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 438,
              "end": 445,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 440,
                "end": 445,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 440,
                    "end": 441,
                    "typeName": {
                      "type": "Identifier",
                      "start": 440,
                      "end": 441,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 444,
                    "end": 445,
                    "typeName": {
                      "type": "Identifier",
                      "start": 444,
                      "end": 445,
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 450,
      "end": 590,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 466,
            "decorators": [],
            "name": "testMethod",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 469,
            "end": 590,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 470,
                "end": 480,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 471,
                  "end": 480,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 473,
                    "end": 480,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 473,
                        "end": 475,
                        "typeName": {
                          "type": "Identifier",
                          "start": 473,
                          "end": 475,
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 478,
                        "end": 480,
                        "typeName": {
                          "type": "Identifier",
                          "start": 478,
                          "end": 480,
                          "decorators": [],
                          "name": "B2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 485,
              "end": 590,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 491,
                  "end": 588,
                  "test": {
                    "type": "MemberExpression",
                    "start": 495,
                    "end": 502,
                    "object": {
                      "type": "Identifier",
                      "start": 495,
                      "end": 496,
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 497,
                      "end": 502,
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 504,
                    "end": 543,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 514,
                        "end": 516,
                        "expression": {
                          "type": "Identifier",
                          "start": 514,
                          "end": 515,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 549,
                    "end": 588,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 559,
                        "end": 561,
                        "expression": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 560,
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "id": null,
            "generator": false
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
