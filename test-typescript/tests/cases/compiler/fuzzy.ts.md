__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 507,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 505,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 113,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 113,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 34,
                "end": 113,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 44,
                    "end": 56,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 49,
                      "name": "works",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 55,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 50,
                        "end": 55,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 52,
                          "end": 55,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 54,
                            "end": 55,
                            "typeName": {
                              "type": "Identifier",
                              "start": 54,
                              "end": 55,
                              "name": "R",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 65,
                    "end": 81,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 74,
                      "name": "alsoWorks",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 74,
                      "end": 80,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 75,
                        "end": 80,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 77,
                          "end": 80,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 79,
                            "end": 80,
                            "typeName": {
                              "type": "Identifier",
                              "start": 79,
                              "end": 80,
                              "name": "R",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 90,
                    "end": 107,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 100,
                      "name": "doesntWork",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "start": 101,
                        "end": 106,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 103,
                          "end": 106,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 105,
                            "end": 106,
                            "typeName": {
                              "type": "Identifier",
                              "start": 105,
                              "end": 106,
                              "name": "R",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 119,
            "end": 186,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 126,
              "end": 186,
              "id": {
                "type": "Identifier",
                "start": 136,
                "end": 137,
                "name": "R",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 138,
                "end": 186,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 164,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 148,
                      "end": 156,
                      "name": "anything",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 156,
                      "end": 163,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 157,
                        "end": 163
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 173,
                    "end": 180,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 177,
                      "name": "oneI",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 177,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 178,
                        "end": 179,
                        "typeName": {
                          "type": "Identifier",
                          "start": 178,
                          "end": 179,
                          "name": "I",
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 192,
            "end": 503,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 199,
              "end": 503,
              "id": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 220,
                "end": 503,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 230,
                    "end": 270,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 241,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 241,
                      "end": 270,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 242,
                          "end": 257,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 249,
                            "end": 257,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 250,
                              "end": 257,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 251,
                                "end": 257
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 259,
                        "end": 270,
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
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 279,
                    "end": 341,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 284,
                      "name": "works",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 284,
                      "end": 341,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 289,
                        "end": 341,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 303,
                            "end": 331,
                            "argument": {
                              "type": "TSTypeAssertion",
                              "start": 310,
                              "end": 330,
                              "expression": {
                                "type": "ObjectExpression",
                                "start": 314,
                                "end": 329,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 316,
                                    "end": 327,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 316,
                                      "end": 324,
                                      "name": "anything",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 326,
                                      "end": 327,
                                      "value": 1,
                                      "raw": "1"
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ]
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 311,
                                "end": 312,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 311,
                                  "end": 312,
                                  "name": "R",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 286,
                        "end": 288,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 287,
                          "end": 288,
                          "typeName": {
                            "type": "Identifier",
                            "start": 287,
                            "end": 288,
                            "name": "R",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 351,
                    "end": 423,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 351,
                      "end": 361,
                      "name": "doesntWork",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 361,
                      "end": 423,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 366,
                        "end": 423,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 380,
                            "end": 413,
                            "argument": {
                              "type": "ObjectExpression",
                              "start": 387,
                              "end": 412,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 389,
                                  "end": 399,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 389,
                                    "end": 397,
                                    "name": "anything",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 398,
                                    "end": 399,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 401,
                                  "end": 410,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 401,
                                    "end": 405,
                                    "name": "oneI",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "ThisExpression",
                                    "start": 406,
                                    "end": 410
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 363,
                        "end": 365,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 364,
                          "end": 365,
                          "typeName": {
                            "type": "Identifier",
                            "start": 364,
                            "end": 365,
                            "name": "R",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 433,
                    "end": 497,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 441,
                      "name": "worksToo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 441,
                      "end": 497,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 446,
                        "end": 497,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 460,
                            "end": 487,
                            "argument": {
                              "type": "TSTypeAssertion",
                              "start": 467,
                              "end": 486,
                              "expression": {
                                "type": "ObjectExpression",
                                "start": 471,
                                "end": 485,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 473,
                                    "end": 483,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 473,
                                      "end": 477,
                                      "name": "oneI",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "ThisExpression",
                                      "start": 479,
                                      "end": 483
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ]
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 468,
                                "end": 469,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 468,
                                  "end": 469,
                                  "name": "R",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 443,
                        "end": 445,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 444,
                          "end": 445,
                          "typeName": {
                            "type": "Identifier",
                            "start": 444,
                            "end": 445,
                            "name": "R",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 218,
                  "end": 219,
                  "expression": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 219,
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
