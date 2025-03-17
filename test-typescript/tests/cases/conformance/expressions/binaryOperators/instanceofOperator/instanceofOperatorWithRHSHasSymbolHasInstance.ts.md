__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4607,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 38,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
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
      "start": 41,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 58,
        "name": "Point3D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 59,
        "end": 94,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 61,
            "end": 71,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 82,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 83,
            "end": 92,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
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
      "start": 95,
      "end": 141,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 113,
        "name": "Point3D2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 122,
          "end": 127,
          "expression": {
            "type": "Identifier",
            "start": 122,
            "end": 127,
            "name": "Point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 128,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 130,
            "end": 139,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
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
      "start": 142,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "name": "Line",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 157,
        "end": 185,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 159,
            "end": 172,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 164,
              "name": "start",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 171,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 166,
                "end": 171,
                "typeName": {
                  "type": "Identifier",
                  "start": 166,
                  "end": 171,
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 173,
            "end": 183,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "name": "end",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 178,
                "end": 183,
                "typeName": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 183,
                  "name": "Point",
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
      "type": "VariableDeclaration",
      "start": 187,
      "end": 256,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 199,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 255,
            "name": "rhs0",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 255,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 205,
                "end": 255,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 207,
                    "end": 253,
                    "key": {
                      "type": "MemberExpression",
                      "start": 208,
                      "end": 226,
                      "object": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 214,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 215,
                        "end": 226,
                        "name": "hasInstance",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 228,
                        "end": 242,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 233,
                          "end": 242,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 235,
                            "end": 242
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 243,
                      "end": 252,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 245,
                        "end": 252
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 321,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 321,
            "name": "rhs1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 321,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 275,
                "end": 321,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 277,
                    "end": 319,
                    "key": {
                      "type": "MemberExpression",
                      "start": 278,
                      "end": 296,
                      "object": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 284,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 296,
                        "name": "hasInstance",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 298,
                        "end": 308,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 303,
                          "end": 308,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 305,
                            "end": 308
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 309,
                      "end": 318,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 311,
                        "end": 318
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 395,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 394,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 394,
            "name": "rhs2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 394,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 341,
                "end": 394,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 343,
                    "end": 392,
                    "key": {
                      "type": "MemberExpression",
                      "start": 344,
                      "end": 362,
                      "object": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 350,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 362,
                        "name": "hasInstance",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 364,
                        "end": 374,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 369,
                          "end": 374,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 371,
                            "end": 374
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 375,
                      "end": 391,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 377,
                        "end": 391,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 382,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 386,
                          "end": 391,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 386,
                            "end": 391,
                            "typeName": {
                              "type": "Identifier",
                              "start": 386,
                              "end": 391,
                              "name": "Point",
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
                    "readonly": false,
                    "static": false
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 396,
      "end": 477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 476,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 476,
            "name": "rhs3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 412,
              "end": 476,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 414,
                "end": 476,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 416,
                    "end": 474,
                    "key": {
                      "type": "MemberExpression",
                      "start": 417,
                      "end": 435,
                      "object": {
                        "type": "Identifier",
                        "start": 417,
                        "end": 423,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 424,
                        "end": 435,
                        "name": "hasInstance",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 437,
                        "end": 456,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 442,
                          "end": 456,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 444,
                            "end": 456,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 444,
                                "end": 449,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 444,
                                  "end": 449,
                                  "name": "Point",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 452,
                                "end": 456,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 452,
                                  "end": 456,
                                  "name": "Line",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 457,
                      "end": 473,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 459,
                        "end": 473,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 459,
                          "end": 464,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 468,
                          "end": 473,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 468,
                            "end": 473,
                            "typeName": {
                              "type": "Identifier",
                              "start": 468,
                              "end": 473,
                              "name": "Point",
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
                    "readonly": false,
                    "static": false
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 478,
      "end": 558,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 490,
          "end": 557,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 557,
            "name": "rhs4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 494,
              "end": 557,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 496,
                "end": 557,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 498,
                    "end": 555,
                    "key": {
                      "type": "MemberExpression",
                      "start": 499,
                      "end": 517,
                      "object": {
                        "type": "Identifier",
                        "start": 499,
                        "end": 505,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 506,
                        "end": 517,
                        "name": "hasInstance",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 519,
                        "end": 538,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 524,
                          "end": 538,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 526,
                            "end": 538,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 526,
                                "end": 531,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 526,
                                  "end": 531,
                                  "name": "Point",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 534,
                                "end": 538,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 534,
                                  "end": 538,
                                  "name": "Line",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 539,
                      "end": 554,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 541,
                        "end": 554,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 541,
                          "end": 546,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 550,
                          "end": 554,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 550,
                            "end": 554,
                            "typeName": {
                              "type": "Identifier",
                              "start": 550,
                              "end": 554,
                              "name": "Line",
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
                    "readonly": false,
                    "static": false
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 559,
      "end": 652,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 571,
          "end": 651,
          "id": {
            "type": "Identifier",
            "start": 571,
            "end": 651,
            "name": "rhs5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 575,
              "end": 651,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 577,
                "end": 651,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 579,
                    "end": 649,
                    "key": {
                      "type": "MemberExpression",
                      "start": 580,
                      "end": 598,
                      "object": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 586,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 587,
                        "end": 598,
                        "name": "hasInstance",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 600,
                        "end": 629,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 605,
                          "end": 629,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 607,
                            "end": 629,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 607,
                                "end": 612,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 607,
                                  "end": 612,
                                  "name": "Point",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 615,
                                "end": 622,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 615,
                                  "end": 622,
                                  "name": "Point3D",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 625,
                                "end": 629,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 625,
                                  "end": 629,
                                  "name": "Line",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 630,
                      "end": 648,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 632,
                        "end": 648,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 632,
                          "end": 637,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 641,
                          "end": 648,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 641,
                            "end": 648,
                            "typeName": {
                              "type": "Identifier",
                              "start": 641,
                              "end": 648,
                              "name": "Point3D",
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
                    "readonly": false,
                    "static": false
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 653,
      "end": 738,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 665,
          "end": 737,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 737,
            "name": "rhs6",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 669,
              "end": 737,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 671,
                "end": 737,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 673,
                    "end": 735,
                    "key": {
                      "type": "MemberExpression",
                      "start": 674,
                      "end": 692,
                      "object": {
                        "type": "Identifier",
                        "start": 674,
                        "end": 680,
                        "name": "Symbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 681,
                        "end": 692,
                        "name": "hasInstance",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "computed": true,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 694,
                        "end": 715,
                        "name": "value",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 699,
                          "end": 715,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 701,
                            "end": 715,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 701,
                                "end": 708,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 701,
                                  "end": 708,
                                  "name": "Point3D",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 711,
                                "end": 715,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 711,
                                  "end": 715,
                                  "name": "Line",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 716,
                      "end": 734,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 718,
                        "end": 734,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 718,
                          "end": 723,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "asserts": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 727,
                          "end": 734,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 727,
                            "end": 734,
                            "typeName": {
                              "type": "Identifier",
                              "start": 727,
                              "end": 734,
                              "name": "Point3D",
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
                    "readonly": false,
                    "static": false
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 740,
      "end": 816,
      "id": {
        "type": "Identifier",
        "start": 754,
        "end": 758,
        "name": "Rhs7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 759,
        "end": 816,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 761,
            "end": 814,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 769,
              "end": 787,
              "object": {
                "type": "Identifier",
                "start": 769,
                "end": 775,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 776,
                "end": 787,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 788,
              "end": 814,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 789,
                  "end": 803,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 794,
                    "end": 803,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 796,
                      "end": 803
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 804,
                "end": 813,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 806,
                  "end": 813
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 817,
      "end": 889,
      "id": {
        "type": "Identifier",
        "start": 831,
        "end": 835,
        "name": "Rhs8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 836,
        "end": 889,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 838,
            "end": 887,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 846,
              "end": 864,
              "object": {
                "type": "Identifier",
                "start": 846,
                "end": 852,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 853,
                "end": 864,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 865,
              "end": 887,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 866,
                  "end": 876,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 871,
                    "end": 876,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 873,
                      "end": 876
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 877,
                "end": 886,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 879,
                  "end": 886
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 890,
      "end": 969,
      "id": {
        "type": "Identifier",
        "start": 904,
        "end": 908,
        "name": "Rhs9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 909,
        "end": 969,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 911,
            "end": 967,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 919,
              "end": 937,
              "object": {
                "type": "Identifier",
                "start": 919,
                "end": 925,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 926,
                "end": 937,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 938,
              "end": 967,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 939,
                  "end": 949,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 944,
                    "end": 949,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 946,
                      "end": 949
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 950,
                "end": 966,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 952,
                  "end": 966,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 952,
                    "end": 957,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 961,
                    "end": 966,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 961,
                      "end": 966,
                      "typeName": {
                        "type": "Identifier",
                        "start": 961,
                        "end": 966,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 970,
      "end": 1059,
      "id": {
        "type": "Identifier",
        "start": 984,
        "end": 989,
        "name": "Rhs10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 990,
        "end": 1059,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 992,
            "end": 1057,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 1000,
              "end": 1018,
              "object": {
                "type": "Identifier",
                "start": 1000,
                "end": 1006,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1007,
                "end": 1018,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1019,
              "end": 1057,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1020,
                  "end": 1039,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1025,
                    "end": 1039,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1027,
                      "end": 1039,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1027,
                          "end": 1032,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1027,
                            "end": 1032,
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1035,
                          "end": 1039,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1035,
                            "end": 1039,
                            "name": "Line",
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
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1040,
                "end": 1056,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1042,
                  "end": 1056,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1042,
                    "end": 1047,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1051,
                    "end": 1056,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1051,
                      "end": 1056,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1051,
                        "end": 1056,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1060,
      "end": 1148,
      "id": {
        "type": "Identifier",
        "start": 1074,
        "end": 1079,
        "name": "Rhs11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1080,
        "end": 1148,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1082,
            "end": 1146,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 1090,
              "end": 1108,
              "object": {
                "type": "Identifier",
                "start": 1090,
                "end": 1096,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1097,
                "end": 1108,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1109,
              "end": 1146,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1129,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1115,
                    "end": 1129,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1117,
                      "end": 1129,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1117,
                          "end": 1122,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1117,
                            "end": 1122,
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1125,
                          "end": 1129,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1125,
                            "end": 1129,
                            "name": "Line",
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
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1130,
                "end": 1145,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1132,
                  "end": 1145,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1132,
                    "end": 1137,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1141,
                    "end": 1145,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1141,
                      "end": 1145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1141,
                        "end": 1145,
                        "name": "Line",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1149,
      "end": 1250,
      "id": {
        "type": "Identifier",
        "start": 1163,
        "end": 1168,
        "name": "Rhs12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1169,
        "end": 1250,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1171,
            "end": 1248,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 1179,
              "end": 1197,
              "object": {
                "type": "Identifier",
                "start": 1179,
                "end": 1185,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1186,
                "end": 1197,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1198,
              "end": 1248,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1199,
                  "end": 1228,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1204,
                    "end": 1228,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1206,
                      "end": 1228,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1206,
                          "end": 1211,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1206,
                            "end": 1211,
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1214,
                          "end": 1221,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1214,
                            "end": 1221,
                            "name": "Point3D",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1224,
                          "end": 1228,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1224,
                            "end": 1228,
                            "name": "Line",
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
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1229,
                "end": 1247,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1231,
                  "end": 1247,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1231,
                    "end": 1236,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1240,
                    "end": 1247,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1240,
                      "end": 1247,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1240,
                        "end": 1247,
                        "name": "Point3D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1251,
      "end": 1344,
      "id": {
        "type": "Identifier",
        "start": 1265,
        "end": 1270,
        "name": "Rhs13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1271,
        "end": 1344,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1273,
            "end": 1342,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 1281,
              "end": 1299,
              "object": {
                "type": "Identifier",
                "start": 1281,
                "end": 1287,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1288,
                "end": 1299,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1300,
              "end": 1342,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1301,
                  "end": 1322,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1306,
                    "end": 1322,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1308,
                      "end": 1322,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1308,
                          "end": 1315,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1308,
                            "end": 1315,
                            "name": "Point3D",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1318,
                          "end": 1322,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1318,
                            "end": 1322,
                            "name": "Line",
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
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1323,
                "end": 1341,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1325,
                  "end": 1341,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1325,
                    "end": 1330,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1334,
                    "end": 1341,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1334,
                      "end": 1341,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1334,
                        "end": 1341,
                        "name": "Point3D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1346,
      "end": 1368,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1358,
          "end": 1367,
          "id": {
            "type": "Identifier",
            "start": 1358,
            "end": 1367,
            "name": "lhs0",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1362,
              "end": 1367,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1364,
                "end": 1367
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1369,
      "end": 1394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1381,
          "end": 1393,
          "id": {
            "type": "Identifier",
            "start": 1381,
            "end": 1393,
            "name": "lhs1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1385,
              "end": 1393,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 1387,
                "end": 1393
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1395,
      "end": 1436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1407,
          "end": 1435,
          "id": {
            "type": "Identifier",
            "start": 1407,
            "end": 1435,
            "name": "lhs2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1411,
              "end": 1435,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1413,
                "end": 1435,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1413,
                    "end": 1418,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1413,
                      "end": 1418,
                      "name": "Point",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1421,
                    "end": 1428,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1421,
                      "end": 1428,
                      "name": "Point3D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1431,
                    "end": 1435,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1431,
                      "end": 1435,
                      "name": "Line",
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1437,
      "end": 1470,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1449,
          "end": 1469,
          "id": {
            "type": "Identifier",
            "start": 1449,
            "end": 1469,
            "name": "lhs3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1453,
              "end": 1469,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1455,
                "end": 1469,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1455,
                    "end": 1462,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1455,
                      "end": 1462,
                      "name": "Point3D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1465,
                    "end": 1469,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1465,
                      "end": 1469,
                      "name": "Line",
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1471,
      "end": 1513,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1483,
          "end": 1512,
          "id": {
            "type": "Identifier",
            "start": 1483,
            "end": 1512,
            "name": "lhs4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1487,
              "end": 1512,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1489,
                "end": 1512,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1489,
                    "end": 1494,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1489,
                      "end": 1494,
                      "name": "Point",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1497,
                    "end": 1505,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1497,
                      "end": 1505,
                      "name": "Point3D2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1508,
                    "end": 1512,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1508,
                      "end": 1512,
                      "name": "Line",
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
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1515,
      "end": 1544,
      "expression": {
        "type": "LogicalExpression",
        "start": 1515,
        "end": 1543,
        "left": {
          "type": "BinaryExpression",
          "start": 1515,
          "end": 1535,
          "left": {
            "type": "Identifier",
            "start": 1515,
            "end": 1519,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1531,
            "end": 1535,
            "name": "rhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1539,
          "end": 1543,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1545,
      "end": 1574,
      "expression": {
        "type": "LogicalExpression",
        "start": 1545,
        "end": 1573,
        "left": {
          "type": "BinaryExpression",
          "start": 1545,
          "end": 1565,
          "left": {
            "type": "Identifier",
            "start": 1545,
            "end": 1549,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1561,
            "end": 1565,
            "name": "rhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1569,
          "end": 1573,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1575,
      "end": 1604,
      "expression": {
        "type": "LogicalExpression",
        "start": 1575,
        "end": 1603,
        "left": {
          "type": "BinaryExpression",
          "start": 1575,
          "end": 1595,
          "left": {
            "type": "Identifier",
            "start": 1575,
            "end": 1579,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1591,
            "end": 1595,
            "name": "rhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1599,
          "end": 1603,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1605,
      "end": 1634,
      "expression": {
        "type": "LogicalExpression",
        "start": 1605,
        "end": 1633,
        "left": {
          "type": "BinaryExpression",
          "start": 1605,
          "end": 1625,
          "left": {
            "type": "Identifier",
            "start": 1605,
            "end": 1609,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1621,
            "end": 1625,
            "name": "rhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1629,
          "end": 1633,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1635,
      "end": 1664,
      "expression": {
        "type": "LogicalExpression",
        "start": 1635,
        "end": 1663,
        "left": {
          "type": "BinaryExpression",
          "start": 1635,
          "end": 1655,
          "left": {
            "type": "Identifier",
            "start": 1635,
            "end": 1639,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1651,
            "end": 1655,
            "name": "rhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1659,
          "end": 1663,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1665,
      "end": 1694,
      "expression": {
        "type": "LogicalExpression",
        "start": 1665,
        "end": 1693,
        "left": {
          "type": "BinaryExpression",
          "start": 1665,
          "end": 1685,
          "left": {
            "type": "Identifier",
            "start": 1665,
            "end": 1669,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1681,
            "end": 1685,
            "name": "rhs5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1689,
          "end": 1693,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1695,
      "end": 1724,
      "expression": {
        "type": "LogicalExpression",
        "start": 1695,
        "end": 1723,
        "left": {
          "type": "BinaryExpression",
          "start": 1695,
          "end": 1715,
          "left": {
            "type": "Identifier",
            "start": 1695,
            "end": 1699,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1711,
            "end": 1715,
            "name": "rhs6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1719,
          "end": 1723,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1725,
      "end": 1754,
      "expression": {
        "type": "LogicalExpression",
        "start": 1725,
        "end": 1753,
        "left": {
          "type": "BinaryExpression",
          "start": 1725,
          "end": 1745,
          "left": {
            "type": "Identifier",
            "start": 1725,
            "end": 1729,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1741,
            "end": 1745,
            "name": "Rhs7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1749,
          "end": 1753,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1755,
      "end": 1784,
      "expression": {
        "type": "LogicalExpression",
        "start": 1755,
        "end": 1783,
        "left": {
          "type": "BinaryExpression",
          "start": 1755,
          "end": 1775,
          "left": {
            "type": "Identifier",
            "start": 1755,
            "end": 1759,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1771,
            "end": 1775,
            "name": "Rhs8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1779,
          "end": 1783,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1785,
      "end": 1814,
      "expression": {
        "type": "LogicalExpression",
        "start": 1785,
        "end": 1813,
        "left": {
          "type": "BinaryExpression",
          "start": 1785,
          "end": 1805,
          "left": {
            "type": "Identifier",
            "start": 1785,
            "end": 1789,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1801,
            "end": 1805,
            "name": "Rhs9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1809,
          "end": 1813,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1815,
      "end": 1845,
      "expression": {
        "type": "LogicalExpression",
        "start": 1815,
        "end": 1844,
        "left": {
          "type": "BinaryExpression",
          "start": 1815,
          "end": 1836,
          "left": {
            "type": "Identifier",
            "start": 1815,
            "end": 1819,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1831,
            "end": 1836,
            "name": "Rhs10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1840,
          "end": 1844,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1846,
      "end": 1876,
      "expression": {
        "type": "LogicalExpression",
        "start": 1846,
        "end": 1875,
        "left": {
          "type": "BinaryExpression",
          "start": 1846,
          "end": 1867,
          "left": {
            "type": "Identifier",
            "start": 1846,
            "end": 1850,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1862,
            "end": 1867,
            "name": "Rhs11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1871,
          "end": 1875,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1877,
      "end": 1907,
      "expression": {
        "type": "LogicalExpression",
        "start": 1877,
        "end": 1906,
        "left": {
          "type": "BinaryExpression",
          "start": 1877,
          "end": 1898,
          "left": {
            "type": "Identifier",
            "start": 1877,
            "end": 1881,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1893,
            "end": 1898,
            "name": "Rhs12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1902,
          "end": 1906,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1908,
      "end": 1938,
      "expression": {
        "type": "LogicalExpression",
        "start": 1908,
        "end": 1937,
        "left": {
          "type": "BinaryExpression",
          "start": 1908,
          "end": 1929,
          "left": {
            "type": "Identifier",
            "start": 1908,
            "end": 1912,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1924,
            "end": 1929,
            "name": "Rhs13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1933,
          "end": 1937,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1940,
      "end": 1969,
      "expression": {
        "type": "LogicalExpression",
        "start": 1940,
        "end": 1968,
        "left": {
          "type": "BinaryExpression",
          "start": 1940,
          "end": 1960,
          "left": {
            "type": "Identifier",
            "start": 1940,
            "end": 1944,
            "name": "lhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1956,
            "end": 1960,
            "name": "rhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1964,
          "end": 1968,
          "name": "lhs1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1970,
      "end": 1999,
      "expression": {
        "type": "LogicalExpression",
        "start": 1970,
        "end": 1998,
        "left": {
          "type": "BinaryExpression",
          "start": 1970,
          "end": 1990,
          "left": {
            "type": "Identifier",
            "start": 1970,
            "end": 1974,
            "name": "lhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 1986,
            "end": 1990,
            "name": "rhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 1994,
          "end": 1998,
          "name": "lhs1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2000,
      "end": 2029,
      "expression": {
        "type": "LogicalExpression",
        "start": 2000,
        "end": 2028,
        "left": {
          "type": "BinaryExpression",
          "start": 2000,
          "end": 2020,
          "left": {
            "type": "Identifier",
            "start": 2000,
            "end": 2004,
            "name": "lhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2016,
            "end": 2020,
            "name": "rhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2024,
          "end": 2028,
          "name": "lhs1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2030,
      "end": 2059,
      "expression": {
        "type": "LogicalExpression",
        "start": 2030,
        "end": 2058,
        "left": {
          "type": "BinaryExpression",
          "start": 2030,
          "end": 2050,
          "left": {
            "type": "Identifier",
            "start": 2030,
            "end": 2034,
            "name": "lhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2046,
            "end": 2050,
            "name": "Rhs7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2054,
          "end": 2058,
          "name": "lhs1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2060,
      "end": 2089,
      "expression": {
        "type": "LogicalExpression",
        "start": 2060,
        "end": 2088,
        "left": {
          "type": "BinaryExpression",
          "start": 2060,
          "end": 2080,
          "left": {
            "type": "Identifier",
            "start": 2060,
            "end": 2064,
            "name": "lhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2076,
            "end": 2080,
            "name": "Rhs8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2084,
          "end": 2088,
          "name": "lhs1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2090,
      "end": 2119,
      "expression": {
        "type": "LogicalExpression",
        "start": 2090,
        "end": 2118,
        "left": {
          "type": "BinaryExpression",
          "start": 2090,
          "end": 2110,
          "left": {
            "type": "Identifier",
            "start": 2090,
            "end": 2094,
            "name": "lhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2106,
            "end": 2110,
            "name": "Rhs9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2114,
          "end": 2118,
          "name": "lhs1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2121,
      "end": 2150,
      "expression": {
        "type": "LogicalExpression",
        "start": 2121,
        "end": 2149,
        "left": {
          "type": "BinaryExpression",
          "start": 2121,
          "end": 2141,
          "left": {
            "type": "Identifier",
            "start": 2121,
            "end": 2125,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2137,
            "end": 2141,
            "name": "rhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2145,
          "end": 2149,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2151,
      "end": 2180,
      "expression": {
        "type": "LogicalExpression",
        "start": 2151,
        "end": 2179,
        "left": {
          "type": "BinaryExpression",
          "start": 2151,
          "end": 2171,
          "left": {
            "type": "Identifier",
            "start": 2151,
            "end": 2155,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2167,
            "end": 2171,
            "name": "rhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2175,
          "end": 2179,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2181,
      "end": 2210,
      "expression": {
        "type": "LogicalExpression",
        "start": 2181,
        "end": 2209,
        "left": {
          "type": "BinaryExpression",
          "start": 2181,
          "end": 2201,
          "left": {
            "type": "Identifier",
            "start": 2181,
            "end": 2185,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2197,
            "end": 2201,
            "name": "rhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2205,
          "end": 2209,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2211,
      "end": 2240,
      "expression": {
        "type": "LogicalExpression",
        "start": 2211,
        "end": 2239,
        "left": {
          "type": "BinaryExpression",
          "start": 2211,
          "end": 2231,
          "left": {
            "type": "Identifier",
            "start": 2211,
            "end": 2215,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2227,
            "end": 2231,
            "name": "rhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2235,
          "end": 2239,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2241,
      "end": 2270,
      "expression": {
        "type": "LogicalExpression",
        "start": 2241,
        "end": 2269,
        "left": {
          "type": "BinaryExpression",
          "start": 2241,
          "end": 2261,
          "left": {
            "type": "Identifier",
            "start": 2241,
            "end": 2245,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2257,
            "end": 2261,
            "name": "rhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2265,
          "end": 2269,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2271,
      "end": 2300,
      "expression": {
        "type": "LogicalExpression",
        "start": 2271,
        "end": 2299,
        "left": {
          "type": "BinaryExpression",
          "start": 2271,
          "end": 2291,
          "left": {
            "type": "Identifier",
            "start": 2271,
            "end": 2275,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2287,
            "end": 2291,
            "name": "rhs5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2295,
          "end": 2299,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2301,
      "end": 2330,
      "expression": {
        "type": "LogicalExpression",
        "start": 2301,
        "end": 2329,
        "left": {
          "type": "BinaryExpression",
          "start": 2301,
          "end": 2321,
          "left": {
            "type": "Identifier",
            "start": 2301,
            "end": 2305,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2317,
            "end": 2321,
            "name": "Rhs7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2325,
          "end": 2329,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2331,
      "end": 2360,
      "expression": {
        "type": "LogicalExpression",
        "start": 2331,
        "end": 2359,
        "left": {
          "type": "BinaryExpression",
          "start": 2331,
          "end": 2351,
          "left": {
            "type": "Identifier",
            "start": 2331,
            "end": 2335,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2347,
            "end": 2351,
            "name": "Rhs8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2355,
          "end": 2359,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2361,
      "end": 2390,
      "expression": {
        "type": "LogicalExpression",
        "start": 2361,
        "end": 2389,
        "left": {
          "type": "BinaryExpression",
          "start": 2361,
          "end": 2381,
          "left": {
            "type": "Identifier",
            "start": 2361,
            "end": 2365,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2377,
            "end": 2381,
            "name": "Rhs9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2385,
          "end": 2389,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2391,
      "end": 2421,
      "expression": {
        "type": "LogicalExpression",
        "start": 2391,
        "end": 2420,
        "left": {
          "type": "BinaryExpression",
          "start": 2391,
          "end": 2412,
          "left": {
            "type": "Identifier",
            "start": 2391,
            "end": 2395,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2407,
            "end": 2412,
            "name": "Rhs10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2416,
          "end": 2420,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2422,
      "end": 2452,
      "expression": {
        "type": "LogicalExpression",
        "start": 2422,
        "end": 2451,
        "left": {
          "type": "BinaryExpression",
          "start": 2422,
          "end": 2443,
          "left": {
            "type": "Identifier",
            "start": 2422,
            "end": 2426,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2438,
            "end": 2443,
            "name": "Rhs11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2447,
          "end": 2451,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2453,
      "end": 2483,
      "expression": {
        "type": "LogicalExpression",
        "start": 2453,
        "end": 2482,
        "left": {
          "type": "BinaryExpression",
          "start": 2453,
          "end": 2474,
          "left": {
            "type": "Identifier",
            "start": 2453,
            "end": 2457,
            "name": "lhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2469,
            "end": 2474,
            "name": "Rhs12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2478,
          "end": 2482,
          "name": "lhs2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2485,
      "end": 2514,
      "expression": {
        "type": "LogicalExpression",
        "start": 2485,
        "end": 2513,
        "left": {
          "type": "BinaryExpression",
          "start": 2485,
          "end": 2505,
          "left": {
            "type": "Identifier",
            "start": 2485,
            "end": 2489,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2501,
            "end": 2505,
            "name": "rhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2509,
          "end": 2513,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2515,
      "end": 2544,
      "expression": {
        "type": "LogicalExpression",
        "start": 2515,
        "end": 2543,
        "left": {
          "type": "BinaryExpression",
          "start": 2515,
          "end": 2535,
          "left": {
            "type": "Identifier",
            "start": 2515,
            "end": 2519,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2531,
            "end": 2535,
            "name": "rhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2539,
          "end": 2543,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2545,
      "end": 2574,
      "expression": {
        "type": "LogicalExpression",
        "start": 2545,
        "end": 2573,
        "left": {
          "type": "BinaryExpression",
          "start": 2545,
          "end": 2565,
          "left": {
            "type": "Identifier",
            "start": 2545,
            "end": 2549,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2561,
            "end": 2565,
            "name": "rhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2569,
          "end": 2573,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2575,
      "end": 2604,
      "expression": {
        "type": "LogicalExpression",
        "start": 2575,
        "end": 2603,
        "left": {
          "type": "BinaryExpression",
          "start": 2575,
          "end": 2595,
          "left": {
            "type": "Identifier",
            "start": 2575,
            "end": 2579,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2591,
            "end": 2595,
            "name": "rhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2599,
          "end": 2603,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2605,
      "end": 2634,
      "expression": {
        "type": "LogicalExpression",
        "start": 2605,
        "end": 2633,
        "left": {
          "type": "BinaryExpression",
          "start": 2605,
          "end": 2625,
          "left": {
            "type": "Identifier",
            "start": 2605,
            "end": 2609,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2621,
            "end": 2625,
            "name": "rhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2629,
          "end": 2633,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2635,
      "end": 2664,
      "expression": {
        "type": "LogicalExpression",
        "start": 2635,
        "end": 2663,
        "left": {
          "type": "BinaryExpression",
          "start": 2635,
          "end": 2655,
          "left": {
            "type": "Identifier",
            "start": 2635,
            "end": 2639,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2651,
            "end": 2655,
            "name": "rhs5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2659,
          "end": 2663,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2665,
      "end": 2694,
      "expression": {
        "type": "LogicalExpression",
        "start": 2665,
        "end": 2693,
        "left": {
          "type": "BinaryExpression",
          "start": 2665,
          "end": 2685,
          "left": {
            "type": "Identifier",
            "start": 2665,
            "end": 2669,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2681,
            "end": 2685,
            "name": "rhs6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2689,
          "end": 2693,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2695,
      "end": 2724,
      "expression": {
        "type": "LogicalExpression",
        "start": 2695,
        "end": 2723,
        "left": {
          "type": "BinaryExpression",
          "start": 2695,
          "end": 2715,
          "left": {
            "type": "Identifier",
            "start": 2695,
            "end": 2699,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2711,
            "end": 2715,
            "name": "Rhs7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2719,
          "end": 2723,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2725,
      "end": 2754,
      "expression": {
        "type": "LogicalExpression",
        "start": 2725,
        "end": 2753,
        "left": {
          "type": "BinaryExpression",
          "start": 2725,
          "end": 2745,
          "left": {
            "type": "Identifier",
            "start": 2725,
            "end": 2729,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2741,
            "end": 2745,
            "name": "Rhs8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2749,
          "end": 2753,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2755,
      "end": 2784,
      "expression": {
        "type": "LogicalExpression",
        "start": 2755,
        "end": 2783,
        "left": {
          "type": "BinaryExpression",
          "start": 2755,
          "end": 2775,
          "left": {
            "type": "Identifier",
            "start": 2755,
            "end": 2759,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2771,
            "end": 2775,
            "name": "Rhs9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2779,
          "end": 2783,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2785,
      "end": 2815,
      "expression": {
        "type": "LogicalExpression",
        "start": 2785,
        "end": 2814,
        "left": {
          "type": "BinaryExpression",
          "start": 2785,
          "end": 2806,
          "left": {
            "type": "Identifier",
            "start": 2785,
            "end": 2789,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2801,
            "end": 2806,
            "name": "Rhs10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2810,
          "end": 2814,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2816,
      "end": 2846,
      "expression": {
        "type": "LogicalExpression",
        "start": 2816,
        "end": 2845,
        "left": {
          "type": "BinaryExpression",
          "start": 2816,
          "end": 2837,
          "left": {
            "type": "Identifier",
            "start": 2816,
            "end": 2820,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2832,
            "end": 2837,
            "name": "Rhs11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2841,
          "end": 2845,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2847,
      "end": 2877,
      "expression": {
        "type": "LogicalExpression",
        "start": 2847,
        "end": 2876,
        "left": {
          "type": "BinaryExpression",
          "start": 2847,
          "end": 2868,
          "left": {
            "type": "Identifier",
            "start": 2847,
            "end": 2851,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2863,
            "end": 2868,
            "name": "Rhs12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2872,
          "end": 2876,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2878,
      "end": 2908,
      "expression": {
        "type": "LogicalExpression",
        "start": 2878,
        "end": 2907,
        "left": {
          "type": "BinaryExpression",
          "start": 2878,
          "end": 2899,
          "left": {
            "type": "Identifier",
            "start": 2878,
            "end": 2882,
            "name": "lhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2894,
            "end": 2899,
            "name": "Rhs13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2903,
          "end": 2907,
          "name": "lhs3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2910,
      "end": 2939,
      "expression": {
        "type": "LogicalExpression",
        "start": 2910,
        "end": 2938,
        "left": {
          "type": "BinaryExpression",
          "start": 2910,
          "end": 2930,
          "left": {
            "type": "Identifier",
            "start": 2910,
            "end": 2914,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2926,
            "end": 2930,
            "name": "rhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2934,
          "end": 2938,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2940,
      "end": 2969,
      "expression": {
        "type": "LogicalExpression",
        "start": 2940,
        "end": 2968,
        "left": {
          "type": "BinaryExpression",
          "start": 2940,
          "end": 2960,
          "left": {
            "type": "Identifier",
            "start": 2940,
            "end": 2944,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2956,
            "end": 2960,
            "name": "rhs1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2964,
          "end": 2968,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 2970,
      "end": 2999,
      "expression": {
        "type": "LogicalExpression",
        "start": 2970,
        "end": 2998,
        "left": {
          "type": "BinaryExpression",
          "start": 2970,
          "end": 2990,
          "left": {
            "type": "Identifier",
            "start": 2970,
            "end": 2974,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 2986,
            "end": 2990,
            "name": "rhs2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 2994,
          "end": 2998,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3000,
      "end": 3029,
      "expression": {
        "type": "LogicalExpression",
        "start": 3000,
        "end": 3028,
        "left": {
          "type": "BinaryExpression",
          "start": 3000,
          "end": 3020,
          "left": {
            "type": "Identifier",
            "start": 3000,
            "end": 3004,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 3016,
            "end": 3020,
            "name": "rhs3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 3024,
          "end": 3028,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3030,
      "end": 3059,
      "expression": {
        "type": "LogicalExpression",
        "start": 3030,
        "end": 3058,
        "left": {
          "type": "BinaryExpression",
          "start": 3030,
          "end": 3050,
          "left": {
            "type": "Identifier",
            "start": 3030,
            "end": 3034,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 3046,
            "end": 3050,
            "name": "rhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 3054,
          "end": 3058,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3060,
      "end": 3089,
      "expression": {
        "type": "LogicalExpression",
        "start": 3060,
        "end": 3088,
        "left": {
          "type": "BinaryExpression",
          "start": 3060,
          "end": 3080,
          "left": {
            "type": "Identifier",
            "start": 3060,
            "end": 3064,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 3076,
            "end": 3080,
            "name": "rhs5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 3084,
          "end": 3088,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3090,
      "end": 3119,
      "expression": {
        "type": "LogicalExpression",
        "start": 3090,
        "end": 3118,
        "left": {
          "type": "BinaryExpression",
          "start": 3090,
          "end": 3110,
          "left": {
            "type": "Identifier",
            "start": 3090,
            "end": 3094,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 3106,
            "end": 3110,
            "name": "Rhs7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 3114,
          "end": 3118,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3120,
      "end": 3149,
      "expression": {
        "type": "LogicalExpression",
        "start": 3120,
        "end": 3148,
        "left": {
          "type": "BinaryExpression",
          "start": 3120,
          "end": 3140,
          "left": {
            "type": "Identifier",
            "start": 3120,
            "end": 3124,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 3136,
            "end": 3140,
            "name": "Rhs8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 3144,
          "end": 3148,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3150,
      "end": 3179,
      "expression": {
        "type": "LogicalExpression",
        "start": 3150,
        "end": 3178,
        "left": {
          "type": "BinaryExpression",
          "start": 3150,
          "end": 3170,
          "left": {
            "type": "Identifier",
            "start": 3150,
            "end": 3154,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 3166,
            "end": 3170,
            "name": "Rhs9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 3174,
          "end": 3178,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3180,
      "end": 3210,
      "expression": {
        "type": "LogicalExpression",
        "start": 3180,
        "end": 3209,
        "left": {
          "type": "BinaryExpression",
          "start": 3180,
          "end": 3201,
          "left": {
            "type": "Identifier",
            "start": 3180,
            "end": 3184,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 3196,
            "end": 3201,
            "name": "Rhs10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 3205,
          "end": 3209,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3211,
      "end": 3241,
      "expression": {
        "type": "LogicalExpression",
        "start": 3211,
        "end": 3240,
        "left": {
          "type": "BinaryExpression",
          "start": 3211,
          "end": 3232,
          "left": {
            "type": "Identifier",
            "start": 3211,
            "end": 3215,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 3227,
            "end": 3232,
            "name": "Rhs11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 3236,
          "end": 3240,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3242,
      "end": 3272,
      "expression": {
        "type": "LogicalExpression",
        "start": 3242,
        "end": 3271,
        "left": {
          "type": "BinaryExpression",
          "start": 3242,
          "end": 3263,
          "left": {
            "type": "Identifier",
            "start": 3242,
            "end": 3246,
            "name": "lhs4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 3258,
            "end": 3263,
            "name": "Rhs12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 3267,
          "end": 3271,
          "name": "lhs4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 3274,
      "end": 3949,
      "id": {
        "type": "Identifier",
        "start": 3288,
        "end": 3289,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 3290,
        "end": 3949,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3296,
            "end": 3307,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 3296,
              "end": 3298,
              "name": "x"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3298,
              "end": 3306,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3300,
                "end": 3306
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 3541,
            "end": 3947,
            "static": true,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 3549,
              "end": 3567,
              "object": {
                "type": "Identifier",
                "start": 3549,
                "end": 3555,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 3556,
                "end": 3567,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3568,
              "end": 3947,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3572,
                  "end": 3579,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3576,
                    "end": 3579,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3578,
                      "end": 3579,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3578,
                        "end": 3579,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 3581,
                  "end": 3595,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3586,
                    "end": 3595,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3588,
                      "end": 3595
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3568,
                "end": 3571,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3569,
                    "end": 3570,
                    "name": {
                      "type": "Identifier",
                      "start": 3569,
                      "end": 3570,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3596,
                "end": 3946,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 3598,
                  "end": 3946,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 3598,
                    "end": 3603,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3617,
                    "end": 3940,
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "start": 3617,
                      "end": 3940,
                      "checkType": {
                        "type": "TSTypeReference",
                        "start": 3617,
                        "end": 3618,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3617,
                          "end": 3618,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "start": 3627,
                        "end": 3646,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 3627,
                          "end": 3646,
                          "left": {
                            "type": "Identifier",
                            "start": 3627,
                            "end": 3637,
                            "name": "globalThis",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3638,
                            "end": 3646,
                            "name": "Function",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      },
                      "trueType": {
                        "type": "TSConditionalType",
                        "start": 3661,
                        "end": 3924,
                        "checkType": {
                          "type": "TSTypeReference",
                          "start": 3661,
                          "end": 3662,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3661,
                            "end": 3662,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "extendsType": {
                          "type": "TSTypeLiteral",
                          "start": 3671,
                          "end": 3702,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 3673,
                              "end": 3700,
                              "computed": false,
                              "optional": false,
                              "readonly": true,
                              "key": {
                                "type": "Identifier",
                                "start": 3682,
                                "end": 3691,
                                "name": "prototype",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 3691,
                                "end": 3700,
                                "typeAnnotation": {
                                  "type": "TSInferType",
                                  "start": 3693,
                                  "end": 3700,
                                  "typeParameter": {
                                    "type": "TSTypeParameter",
                                    "start": 3699,
                                    "end": 3700,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 3699,
                                      "end": 3700,
                                      "name": "U",
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
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        },
                        "trueType": {
                          "type": "TSConditionalType",
                          "start": 3721,
                          "end": 3904,
                          "checkType": {
                            "type": "TSBooleanKeyword",
                            "start": 3721,
                            "end": 3728
                          },
                          "extendsType": {
                            "type": "TSConditionalType",
                            "start": 3738,
                            "end": 3768,
                            "checkType": {
                              "type": "TSTypeReference",
                              "start": 3738,
                              "end": 3739,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3738,
                                "end": 3739,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "extendsType": {
                              "type": "TSNeverKeyword",
                              "start": 3748,
                              "end": 3753
                            },
                            "trueType": {
                              "type": "TSLiteralType",
                              "start": 3756,
                              "end": 3760,
                              "literal": {
                                "type": "Literal",
                                "start": 3756,
                                "end": 3760,
                                "value": true,
                                "raw": "true"
                              }
                            },
                            "falseType": {
                              "type": "TSLiteralType",
                              "start": 3763,
                              "end": 3768,
                              "literal": {
                                "type": "Literal",
                                "start": 3763,
                                "end": 3768,
                                "value": false,
                                "raw": "false"
                              }
                            }
                          },
                          "trueType": {
                            "type": "TSConditionalType",
                            "start": 3825,
                            "end": 3884,
                            "checkType": {
                              "type": "TSTypeReference",
                              "start": 3825,
                              "end": 3826,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3825,
                                "end": 3826,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "extendsType": {
                              "type": "TSConstructorType",
                              "start": 3836,
                              "end": 3874,
                              "abstract": true,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "start": 3850,
                                  "end": 3862,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 3853,
                                    "end": 3857,
                                    "name": "args",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "decorators": [],
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 3857,
                                    "end": 3862,
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 3859,
                                      "end": 3862
                                    }
                                  },
                                  "value": null
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 3864,
                                "end": 3874,
                                "typeAnnotation": {
                                  "type": "TSInferType",
                                  "start": 3867,
                                  "end": 3874,
                                  "typeParameter": {
                                    "type": "TSTypeParameter",
                                    "start": 3873,
                                    "end": 3874,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 3873,
                                      "end": 3874,
                                      "name": "V",
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
                                }
                              }
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "start": 3878,
                              "end": 3879,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3878,
                                "end": 3879,
                                "name": "V",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "falseType": {
                              "type": "TSTypeLiteral",
                              "start": 3882,
                              "end": 3884,
                              "members": []
                            }
                          },
                          "falseType": {
                            "type": "TSTypeReference",
                            "start": 3903,
                            "end": 3904,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3903,
                              "end": 3904,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "falseType": {
                          "type": "TSNeverKeyword",
                          "start": 3919,
                          "end": 3924
                        }
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 3935,
                        "end": 3940
                      }
                    }
                  }
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 3951,
      "end": 3992,
      "id": {
        "type": "Identifier",
        "start": 3965,
        "end": 3966,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 3975,
        "end": 3976,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 3977,
        "end": 3992,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3979,
            "end": 3990,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 3979,
              "end": 3981,
              "name": "y"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3981,
              "end": 3989,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3983,
                "end": 3989
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3994,
      "end": 4021,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4008,
          "end": 4020,
          "id": {
            "type": "Identifier",
            "start": 4008,
            "end": 4020,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4011,
              "end": 4020,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 4013,
                "end": 4020
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 4022,
      "end": 4061,
      "test": {
        "type": "BinaryExpression",
        "start": 4026,
        "end": 4042,
        "left": {
          "type": "Identifier",
          "start": 4026,
          "end": 4029,
          "name": "obj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 4041,
          "end": 4042,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 4044,
        "end": 4061,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4050,
            "end": 4054,
            "expression": {
              "type": "Identifier",
              "start": 4050,
              "end": 4053,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 4062,
      "end": 4101,
      "test": {
        "type": "BinaryExpression",
        "start": 4066,
        "end": 4082,
        "left": {
          "type": "Identifier",
          "start": 4066,
          "end": 4069,
          "name": "obj",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 4081,
          "end": 4082,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 4084,
        "end": 4101,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 4090,
            "end": 4094,
            "expression": {
              "type": "Identifier",
              "start": 4090,
              "end": 4093,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4177,
      "end": 4246,
      "id": {
        "type": "Identifier",
        "start": 4187,
        "end": 4200,
        "name": "HasInstanceOf",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4201,
        "end": 4246,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 4203,
            "end": 4244,
            "key": {
              "type": "MemberExpression",
              "start": 4204,
              "end": 4222,
              "object": {
                "type": "Identifier",
                "start": 4204,
                "end": 4210,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4211,
                "end": 4222,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4224,
                "end": 4234,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4225,
                  "end": 4234,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 4227,
                    "end": 4234
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4235,
              "end": 4244,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4237,
                "end": 4244
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4247,
      "end": 4283,
      "id": {
        "type": "Identifier",
        "start": 4252,
        "end": 4257,
        "name": "Rhs14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 4260,
        "end": 4282,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 4260,
            "end": 4273,
            "typeName": {
              "type": "Identifier",
              "start": 4260,
              "end": 4273,
              "name": "HasInstanceOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSObjectKeyword",
            "start": 4276,
            "end": 4282
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4284,
      "end": 4311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4298,
          "end": 4310,
          "id": {
            "type": "Identifier",
            "start": 4298,
            "end": 4310,
            "name": "rhs14",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4303,
              "end": 4310,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4305,
                "end": 4310,
                "typeName": {
                  "type": "Identifier",
                  "start": 4305,
                  "end": 4310,
                  "name": "Rhs14",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 4312,
      "end": 4342,
      "expression": {
        "type": "LogicalExpression",
        "start": 4312,
        "end": 4341,
        "left": {
          "type": "BinaryExpression",
          "start": 4312,
          "end": 4333,
          "left": {
            "type": "Identifier",
            "start": 4312,
            "end": 4316,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 4328,
            "end": 4333,
            "name": "rhs14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 4337,
          "end": 4341,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4355,
      "end": 4428,
      "id": {
        "type": "Identifier",
        "start": 4365,
        "end": 4379,
        "name": "HasInstanceOf1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4380,
        "end": 4428,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 4382,
            "end": 4426,
            "key": {
              "type": "MemberExpression",
              "start": 4383,
              "end": 4401,
              "object": {
                "type": "Identifier",
                "start": 4383,
                "end": 4389,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4390,
                "end": 4401,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4403,
                "end": 4413,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4404,
                  "end": 4413,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 4406,
                    "end": 4413
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4414,
              "end": 4426,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 4416,
                "end": 4426,
                "parameterName": {
                  "type": "Identifier",
                  "start": 4416,
                  "end": 4417,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4421,
                  "end": 4426,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4421,
                    "end": 4426,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4421,
                      "end": 4426,
                      "name": "Point",
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
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4429,
      "end": 4501,
      "id": {
        "type": "Identifier",
        "start": 4439,
        "end": 4453,
        "name": "HasInstanceOf2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4454,
        "end": 4501,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 4456,
            "end": 4499,
            "key": {
              "type": "MemberExpression",
              "start": 4457,
              "end": 4475,
              "object": {
                "type": "Identifier",
                "start": 4457,
                "end": 4463,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 4464,
                "end": 4475,
                "name": "hasInstance",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4477,
                "end": 4487,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4478,
                  "end": 4487,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 4480,
                    "end": 4487
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4488,
              "end": 4499,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 4490,
                "end": 4499,
                "parameterName": {
                  "type": "Identifier",
                  "start": 4490,
                  "end": 4491,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4495,
                  "end": 4499,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4495,
                    "end": 4499,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4495,
                      "end": 4499,
                      "name": "Line",
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
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4502,
      "end": 4547,
      "id": {
        "type": "Identifier",
        "start": 4507,
        "end": 4512,
        "name": "Rhs15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 4515,
        "end": 4546,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 4515,
            "end": 4529,
            "typeName": {
              "type": "Identifier",
              "start": 4515,
              "end": 4529,
              "name": "HasInstanceOf1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 4532,
            "end": 4546,
            "typeName": {
              "type": "Identifier",
              "start": 4532,
              "end": 4546,
              "name": "HasInstanceOf2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 4548,
      "end": 4575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4562,
          "end": 4574,
          "id": {
            "type": "Identifier",
            "start": 4562,
            "end": 4574,
            "name": "rhs15",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4567,
              "end": 4574,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4569,
                "end": 4574,
                "typeName": {
                  "type": "Identifier",
                  "start": 4569,
                  "end": 4574,
                  "name": "Rhs15",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 4576,
      "end": 4606,
      "expression": {
        "type": "LogicalExpression",
        "start": 4576,
        "end": 4605,
        "left": {
          "type": "BinaryExpression",
          "start": 4576,
          "end": 4597,
          "left": {
            "type": "Identifier",
            "start": 4576,
            "end": 4580,
            "name": "lhs0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "operator": "instanceof",
          "right": {
            "type": "Identifier",
            "start": 4592,
            "end": 4597,
            "name": "rhs15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 4601,
          "end": 4605,
          "name": "lhs0",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
