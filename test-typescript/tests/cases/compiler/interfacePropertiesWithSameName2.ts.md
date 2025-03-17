__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 758,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 74,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 74,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 35,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "move",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 34,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 30,
                "end": 34
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 40,
            "end": 72,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 49,
              "decorators": [],
              "name": "getStatus",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 53,
                "end": 71,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 55,
                    "end": 69,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 60,
                      "decorators": [],
                      "name": "speed",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 68,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 62,
                        "end": 68
                      }
                    }
                  }
                ]
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Mover",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 75,
      "end": 155,
      "body": {
        "type": "TSInterfaceBody",
        "start": 92,
        "end": 155,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 98,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 103,
              "decorators": [],
              "name": "shake",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 111,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 107,
                "end": 111
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 117,
            "end": 153,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 126,
              "decorators": [],
              "name": "getStatus",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 130,
                "end": 152,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 132,
                    "end": 150,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 141,
                      "decorators": [],
                      "name": "frequency",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 141,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 143,
                        "end": 149
                      }
                    }
                  }
                ]
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 91,
        "decorators": [],
        "name": "Shaker",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 157,
      "end": 205,
      "body": {
        "type": "TSInterfaceBody",
        "start": 201,
        "end": 205,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 187,
          "end": 192,
          "expression": {
            "type": "Identifier",
            "start": 187,
            "end": 192,
            "decorators": [],
            "name": "Mover",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 194,
          "end": 200,
          "expression": {
            "type": "Identifier",
            "start": 194,
            "end": 200,
            "decorators": [],
            "name": "Shaker",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 178,
        "decorators": [],
        "name": "MoverShaker",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 226,
      "end": 459,
      "body": {
        "type": "TSModuleBlock",
        "start": 258,
        "end": 459,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 264,
            "end": 353,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 271,
              "end": 353,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 283,
                "end": 353,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 293,
                    "end": 306,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 293,
                      "end": 297,
                      "decorators": [],
                      "name": "move",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 297,
                      "end": 306,
                      "async": false,
                      "body": null,
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 299,
                        "end": 305,
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 301,
                          "end": 305
                        }
                      },
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 315,
                    "end": 347,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 324,
                      "decorators": [],
                      "name": "getStatus",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 324,
                      "end": 347,
                      "async": false,
                      "body": null,
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 326,
                        "end": 346,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 328,
                          "end": 346,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 330,
                              "end": 344,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 330,
                                "end": 335,
                                "decorators": [],
                                "name": "speed",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 335,
                                "end": 343,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 337,
                                  "end": 343
                                }
                              }
                            }
                          ]
                        }
                      },
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 277,
                "end": 282,
                "decorators": [],
                "name": "Mover",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 358,
            "end": 457,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 365,
              "end": 457,
              "body": {
                "type": "TSInterfaceBody",
                "start": 382,
                "end": 457,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 392,
                    "end": 406,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 392,
                      "end": 397,
                      "decorators": [],
                      "name": "shake",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 399,
                      "end": 405,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 401,
                        "end": 405
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 415,
                    "end": 451,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 424,
                      "decorators": [],
                      "name": "getStatus",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 426,
                      "end": 450,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 428,
                        "end": 450,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 430,
                            "end": 448,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 430,
                              "end": 439,
                              "decorators": [],
                              "name": "frequency",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 439,
                              "end": 447,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 441,
                                "end": 447
                              }
                            }
                          }
                        ]
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 375,
                "end": 381,
                "decorators": [],
                "name": "Shaker",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 257,
        "decorators": [],
        "name": "MoversAndShakers",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 461,
      "end": 543,
      "body": {
        "type": "TSInterfaceBody",
        "start": 540,
        "end": 543,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 492,
          "end": 514,
          "expression": {
            "type": "MemberExpression",
            "start": 492,
            "end": 514,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 492,
              "end": 508,
              "decorators": [],
              "name": "MoversAndShakers",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 509,
              "end": 514,
              "decorators": [],
              "name": "Mover",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 516,
          "end": 539,
          "expression": {
            "type": "MemberExpression",
            "start": 516,
            "end": 539,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 516,
              "end": 532,
              "decorators": [],
              "name": "MoversAndShakers",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 533,
              "end": 539,
              "decorators": [],
              "name": "Shaker",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 483,
        "decorators": [],
        "name": "MoverShaker2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 554,
      "end": 758,
      "body": {
        "type": "TSInterfaceBody",
        "start": 633,
        "end": 758,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 639,
            "end": 690,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 639,
              "end": 648,
              "decorators": [],
              "name": "getStatus",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 650,
              "end": 689,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 652,
                "end": 689,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 654,
                    "end": 668,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 654,
                      "end": 659,
                      "decorators": [],
                      "name": "speed",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 659,
                      "end": 667,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 661,
                        "end": 667
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 669,
                    "end": 687,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 669,
                      "end": 678,
                      "decorators": [],
                      "name": "frequency",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 678,
                      "end": 686,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 680,
                        "end": 686
                      }
                    }
                  }
                ]
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 585,
          "end": 607,
          "expression": {
            "type": "MemberExpression",
            "start": 585,
            "end": 607,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 585,
              "end": 601,
              "decorators": [],
              "name": "MoversAndShakers",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 602,
              "end": 607,
              "decorators": [],
              "name": "Mover",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 609,
          "end": 632,
          "expression": {
            "type": "MemberExpression",
            "start": 609,
            "end": 632,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 609,
              "end": 625,
              "decorators": [],
              "name": "MoversAndShakers",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 626,
              "end": 632,
              "decorators": [],
              "name": "Shaker",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 564,
        "end": 576,
        "decorators": [],
        "name": "MoverShaker3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
