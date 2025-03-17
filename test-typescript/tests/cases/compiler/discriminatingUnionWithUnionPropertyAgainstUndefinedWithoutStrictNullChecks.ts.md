__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 592,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 45,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 201,
            "name": "opts",
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
                          "name": "objectRef",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "getObjectRef",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "objectRef",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                  "name": "B",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                          "name": "getObjectRef",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
            "name": "opts",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 209,
            "end": 218,
            "name": "objectRef",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
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
              "name": "opts",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 227,
              "end": 239,
              "name": "getObjectRef",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
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
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "A2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "B2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "Y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 590,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 466,
            "name": "testMethod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 469,
            "end": 590,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 470,
                "end": 480,
                "name": "m",
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
                          "name": "A2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "B2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "name": "m",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 497,
                      "end": 502,
                      "name": "error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
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
                          "name": "m",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "m",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
