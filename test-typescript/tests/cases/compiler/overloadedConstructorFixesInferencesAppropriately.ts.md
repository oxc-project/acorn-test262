overloadedConstructorFixesInferencesAppropriately.ts
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
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
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
        "end": 13,
        "decorators": [],
        "name": "Box",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 82,
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
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 74,
              "decorators": [],
              "name": "error",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
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
                  "raw": "true",
                  "value": true
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 53,
        "decorators": [],
        "name": "ErrorResult",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 84,
      "end": 252,
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
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 155,
              "decorators": [],
              "name": "asyncLoad",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 175,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 157,
                "end": 175,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 160,
                  "end": 175,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 163,
                    "end": 175,
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
                            "decorators": [],
                            "name": "TResult",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 166,
                      "decorators": [],
                      "name": "Box",
                      "optional": false
                    }
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 181,
            "end": 250,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 198,
              "decorators": [],
              "name": "children",
              "optional": false
            },
            "optional": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 249,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 200,
                "end": 249,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 201,
                    "end": 238,
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 207,
                      "end": 238,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 209,
                        "end": 238,
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
                                "decorators": [],
                                "name": "TResult",
                                "optional": false
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 226,
                              "end": 237,
                              "typeName": {
                                "type": "Identifier",
                                "start": 226,
                                "end": 237,
                                "decorators": [],
                                "name": "ErrorResult",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 216,
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false
                        }
                      }
                    }
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
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 110,
        "decorators": [],
        "name": "AsyncLoaderProps",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 110,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 129,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 127,
              "end": 129,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 118,
              "decorators": [],
              "name": "TResult",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 254,
      "end": 427,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 292,
        "end": 427,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 298,
            "end": 339,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 298,
              "end": 309,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 309,
              "end": 339,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 310,
                  "end": 323,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 315,
                    "end": 323,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 317,
                      "end": 323
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 325,
                  "end": 337,
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 332,
                    "end": 337,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 334,
                      "end": 337
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 344,
            "end": 390,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 344,
              "end": 355,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 355,
              "end": 390,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 356,
                  "end": 388,
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 361,
                    "end": 388,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 363,
                      "end": 388,
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
                              "decorators": [],
                              "name": "TResult",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 379,
                        "decorators": [],
                        "name": "AsyncLoaderProps",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 395,
            "end": 425,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 406,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 406,
              "end": 425,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 423,
                "end": 425,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 407,
                  "end": 421,
                  "argument": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 414,
                    "decorators": [],
                    "name": "args",
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
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 271,
        "decorators": [],
        "name": "AsyncLoader",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 271,
        "end": 291,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 272,
            "end": 290,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 288,
              "end": 290,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 272,
              "end": 279,
              "decorators": [],
              "name": "TResult",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 429,
      "end": 510,
      "async": false,
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
                "raw": "null",
                "value": null
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 438,
        "end": 442,
        "decorators": [],
        "name": "load",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 444,
        "end": 482,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 446,
          "end": 482,
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
                        "key": {
                          "type": "Identifier",
                          "start": 452,
                          "end": 459,
                          "decorators": [],
                          "name": "success",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
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
                              "raw": "true",
                              "value": true
                            }
                          }
                        }
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
                      "decorators": [],
                      "name": "ErrorResult",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 446,
            "end": 449,
            "decorators": [],
            "name": "Box",
            "optional": false
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 543,
                  "decorators": [],
                  "name": "asyncLoad",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 545,
                  "end": 549,
                  "decorators": [],
                  "name": "load",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 555,
                "end": 596,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 563,
                  "decorators": [],
                  "name": "children",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 565,
                  "end": 596,
                  "async": false,
                  "body": {
                    "type": "TSAsExpression",
                    "start": 575,
                    "end": 596,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 575,
                      "end": 589,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 581,
                        "decorators": [],
                        "name": "result",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 589,
                        "decorators": [],
                        "name": "success",
                        "optional": false
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 593,
                      "end": 596
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 565,
                      "end": 571,
                      "decorators": [],
                      "name": "result",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 516,
          "end": 527,
          "decorators": [],
          "name": "AsyncLoader",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
