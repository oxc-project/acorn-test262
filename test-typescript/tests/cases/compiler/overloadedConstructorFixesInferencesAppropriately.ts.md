__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 622,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "name": "Box",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 27,
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 32,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 53,
        "name": "ErrorResult",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 82,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 60,
            "end": 80,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 74,
              "name": "error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 80,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 76,
                "end": 80,
                "literal": {
                  "type": "Literal",
                  "start": 76,
                  "end": 80,
                  "value": true,
                  "raw": "true"
                }
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
      "start": 84,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 110,
        "name": "AsyncLoaderProps",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 110,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 129,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "name": "TResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 127,
              "end": 129,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 131,
        "end": 252,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 137,
            "end": 176,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 155,
              "name": "asyncLoad",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 175,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 157,
                "end": 175,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 160,
                  "end": 175,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 163,
                    "end": 175,
                    "typeName": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 166,
                      "name": "Box",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 166,
                      "end": 175,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 167,
                          "end": 174,
                          "typeName": {
                            "type": "Identifier",
                            "start": 167,
                            "end": 174,
                            "name": "TResult",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 181,
            "end": 250,
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 198,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 249,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 200,
                "end": 249,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 201,
                    "end": 238,
                    "name": "result",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 238,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 209,
                        "end": 238,
                        "typeName": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 216,
                          "name": "Exclude",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 216,
                          "end": 238,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 217,
                              "end": 224,
                              "typeName": {
                                "type": "Identifier",
                                "start": 217,
                                "end": 224,
                                "name": "TResult",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 226,
                              "end": 237,
                              "typeName": {
                                "type": "Identifier",
                                "start": 226,
                                "end": 237,
                                "name": "ErrorResult",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 240,
                  "end": 249,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 243,
                    "end": 249
                  }
                }
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
      "type": "ClassDeclaration",
      "start": 254,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 271,
        "name": "AsyncLoader",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 292,
        "end": 427,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 298,
            "end": 339,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 309,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 309,
              "end": 339,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 310,
                  "end": 323,
                  "name": "props",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 315,
                    "end": 323,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 317,
                      "end": 323
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 325,
                  "end": 337,
                  "name": "context",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 332,
                    "end": 337,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 334,
                      "end": 337
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 390,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 355,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 355,
              "end": 390,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 356,
                  "end": 388,
                  "name": "props",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 361,
                    "end": 388,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 363,
                      "end": 388,
                      "typeName": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 379,
                        "name": "AsyncLoaderProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 379,
                        "end": 388,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 380,
                            "end": 387,
                            "typeName": {
                              "type": "Identifier",
                              "start": 380,
                              "end": 387,
                              "name": "TResult",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 395,
            "end": 425,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 406,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 406,
              "end": 425,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 407,
                  "end": 421,
                  "argument": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 414,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 414,
                    "end": 421,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 416,
                      "end": 421,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 416,
                        "end": 419
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 423,
                "end": 425,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 271,
        "end": 291,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 272,
            "end": 290,
            "name": {
              "type": "Identifier",
              "start": 272,
              "end": 279,
              "name": "TResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 288,
              "end": 290,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 429,
      "end": 510,
      "id": {
        "type": "Identifier",
        "start": 438,
        "end": 442,
        "name": "load",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 483,
        "end": 510,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 489,
            "end": 508,
            "argument": {
              "type": "TSAsExpression",
              "start": 496,
              "end": 507,
              "expression": {
                "type": "Literal",
                "start": 496,
                "end": 500,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 504,
                "end": 507
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 444,
        "end": 482,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 446,
          "end": 482,
          "typeName": {
            "type": "Identifier",
            "start": 446,
            "end": 449,
            "name": "Box",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 449,
            "end": 482,
            "params": [
              {
                "type": "TSUnionType",
                "start": 450,
                "end": 481,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 450,
                    "end": 467,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 452,
                        "end": 465,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 452,
                          "end": 459,
                          "name": "success",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 459,
                          "end": 465,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 461,
                            "end": 465,
                            "literal": {
                              "type": "Literal",
                              "start": 461,
                              "end": 465,
                              "value": true,
                              "raw": "true"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 470,
                    "end": 481,
                    "typeName": {
                      "type": "Identifier",
                      "start": 470,
                      "end": 481,
                      "name": "ErrorResult",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 601,
      "expression": {
        "type": "NewExpression",
        "start": 512,
        "end": 600,
        "callee": {
          "type": "Identifier",
          "start": 516,
          "end": 527,
          "name": "AsyncLoader",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 528,
            "end": 599,
            "properties": [
              {
                "type": "Property",
                "start": 534,
                "end": 549,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 543,
                  "name": "asyncLoad",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 545,
                  "end": 549,
                  "name": "load",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 555,
                "end": 596,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 563,
                  "name": "children",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 565,
                  "end": 596,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 565,
                      "end": 571,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "TSAsExpression",
                    "start": 575,
                    "end": 596,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 575,
                      "end": 589,
                      "object": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 581,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 589,
                        "name": "success",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 593,
                      "end": 596
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
