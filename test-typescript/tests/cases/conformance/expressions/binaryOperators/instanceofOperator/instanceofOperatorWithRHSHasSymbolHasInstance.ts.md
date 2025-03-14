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
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 38,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
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
        "end": 15,
        "decorators": [],
        "name": "Point",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 41,
      "end": 94,
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
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 82,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 75,
                "end": 81
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 83,
            "end": 92,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 86,
                "end": 92
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 58,
        "decorators": [],
        "name": "Point3D",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 95,
      "end": 141,
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
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 139,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 133,
                "end": 139
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 122,
          "end": 127,
          "expression": {
            "type": "Identifier",
            "start": 122,
            "end": 127,
            "decorators": [],
            "name": "Point",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 113,
        "decorators": [],
        "name": "Point3D2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 185,
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
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 164,
              "decorators": [],
              "name": "start",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "Point",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 173,
            "end": 183,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "end",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "Point",
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
        "start": 152,
        "end": 156,
        "decorators": [],
        "name": "Line",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 199,
            "end": 255,
            "decorators": [],
            "name": "rhs0",
            "optional": false,
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
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 208,
                      "end": 226,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 214,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 215,
                        "end": 226,
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 228,
                        "end": 242,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 233,
                          "end": 242,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 235,
                            "end": 242
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 321,
            "decorators": [],
            "name": "rhs1",
            "optional": false,
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
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 278,
                      "end": 296,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 278,
                        "end": 284,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 285,
                        "end": 296,
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 298,
                        "end": 308,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 303,
                          "end": 308,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 305,
                            "end": 308
                          }
                        }
                      }
                    ],
                    "readonly": false,
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
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 394,
            "decorators": [],
            "name": "rhs2",
            "optional": false,
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
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 344,
                      "end": 362,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 350,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 362,
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 364,
                        "end": 374,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 369,
                          "end": 374,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 371,
                            "end": 374
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 375,
                      "end": 391,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 377,
                        "end": 391,
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 377,
                          "end": 382,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
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
                              "decorators": [],
                              "name": "Point",
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 476,
            "decorators": [],
            "name": "rhs3",
            "optional": false,
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
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 417,
                      "end": 435,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 417,
                        "end": 423,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 424,
                        "end": 435,
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 437,
                        "end": 456,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 452,
                                "end": 456,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 452,
                                  "end": 456,
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 457,
                      "end": 473,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 459,
                        "end": 473,
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 459,
                          "end": 464,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
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
                              "decorators": [],
                              "name": "Point",
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 490,
            "end": 557,
            "decorators": [],
            "name": "rhs4",
            "optional": false,
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
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 499,
                      "end": 517,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 499,
                        "end": 505,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 506,
                        "end": 517,
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 519,
                        "end": 538,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 534,
                                "end": 538,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 534,
                                  "end": 538,
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 539,
                      "end": 554,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 541,
                        "end": 554,
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 541,
                          "end": 546,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
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
                              "decorators": [],
                              "name": "Line",
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 571,
            "end": 651,
            "decorators": [],
            "name": "rhs5",
            "optional": false,
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
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 580,
                      "end": 598,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 586,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 587,
                        "end": 598,
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 600,
                        "end": 629,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 615,
                                "end": 622,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 615,
                                  "end": 622,
                                  "decorators": [],
                                  "name": "Point3D",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 625,
                                "end": 629,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 625,
                                  "end": 629,
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 630,
                      "end": 648,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 632,
                        "end": 648,
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 632,
                          "end": 637,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
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
                              "decorators": [],
                              "name": "Point3D",
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 737,
            "decorators": [],
            "name": "rhs6",
            "optional": false,
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
                    "computed": true,
                    "key": {
                      "type": "MemberExpression",
                      "start": 674,
                      "end": 692,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 674,
                        "end": 680,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 681,
                        "end": 692,
                        "decorators": [],
                        "name": "hasInstance",
                        "optional": false
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 694,
                        "end": 715,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
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
                                  "decorators": [],
                                  "name": "Point3D",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 711,
                                "end": 715,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 711,
                                  "end": 715,
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 716,
                      "end": 734,
                      "typeAnnotation": {
                        "type": "TSTypePredicate",
                        "start": 718,
                        "end": 734,
                        "asserts": false,
                        "parameterName": {
                          "type": "Identifier",
                          "start": 718,
                          "end": 723,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
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
                              "decorators": [],
                              "name": "Point3D",
                              "optional": false
                            }
                          }
                        }
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 740,
      "end": 816,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 759,
        "end": 816,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 761,
            "end": 814,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 769,
              "end": 787,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 769,
                "end": 775,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 776,
                "end": 787,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 788,
              "end": 814,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 789,
                  "end": 803,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 794,
                    "end": 803,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 796,
                      "end": 803
                    }
                  }
                }
              ],
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
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 754,
        "end": 758,
        "decorators": [],
        "name": "Rhs7",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 817,
      "end": 889,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 836,
        "end": 889,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 838,
            "end": 887,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 846,
              "end": 864,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 846,
                "end": 852,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 853,
                "end": 864,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 865,
              "end": 887,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 866,
                  "end": 876,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 871,
                    "end": 876,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 873,
                      "end": 876
                    }
                  }
                }
              ],
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
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 831,
        "end": 835,
        "decorators": [],
        "name": "Rhs8",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 890,
      "end": 969,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 909,
        "end": 969,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 911,
            "end": 967,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 919,
              "end": 937,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 919,
                "end": 925,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 926,
                "end": 937,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 938,
              "end": 967,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 939,
                  "end": 949,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 944,
                    "end": 949,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 946,
                      "end": 949
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 950,
                "end": 966,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 952,
                  "end": 966,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 952,
                    "end": 957,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
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
                        "decorators": [],
                        "name": "Point",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 904,
        "end": 908,
        "decorators": [],
        "name": "Rhs9",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 970,
      "end": 1059,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 990,
        "end": 1059,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 992,
            "end": 1057,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 1000,
              "end": 1018,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1000,
                "end": 1006,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1007,
                "end": 1018,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1019,
              "end": 1057,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1020,
                  "end": 1039,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                            "decorators": [],
                            "name": "Point",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1035,
                          "end": 1039,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1035,
                            "end": 1039,
                            "decorators": [],
                            "name": "Line",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1040,
                "end": 1056,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1042,
                  "end": 1056,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1042,
                    "end": 1047,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
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
                        "decorators": [],
                        "name": "Point",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 984,
        "end": 989,
        "decorators": [],
        "name": "Rhs10",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1060,
      "end": 1148,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1080,
        "end": 1148,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1082,
            "end": 1146,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 1090,
              "end": 1108,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1090,
                "end": 1096,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1097,
                "end": 1108,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1109,
              "end": 1146,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1129,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                            "decorators": [],
                            "name": "Point",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1125,
                          "end": 1129,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1125,
                            "end": 1129,
                            "decorators": [],
                            "name": "Line",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1130,
                "end": 1145,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1132,
                  "end": 1145,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1132,
                    "end": 1137,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
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
                        "decorators": [],
                        "name": "Line",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1074,
        "end": 1079,
        "decorators": [],
        "name": "Rhs11",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1149,
      "end": 1250,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1169,
        "end": 1250,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1171,
            "end": 1248,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 1179,
              "end": 1197,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1179,
                "end": 1185,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1186,
                "end": 1197,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1198,
              "end": 1248,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1199,
                  "end": 1228,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                            "decorators": [],
                            "name": "Point",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1214,
                          "end": 1221,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1214,
                            "end": 1221,
                            "decorators": [],
                            "name": "Point3D",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1224,
                          "end": 1228,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1224,
                            "end": 1228,
                            "decorators": [],
                            "name": "Line",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1229,
                "end": 1247,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1231,
                  "end": 1247,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1231,
                    "end": 1236,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
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
                        "decorators": [],
                        "name": "Point3D",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1163,
        "end": 1168,
        "decorators": [],
        "name": "Rhs12",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1251,
      "end": 1344,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1271,
        "end": 1344,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1273,
            "end": 1342,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 1281,
              "end": 1299,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1281,
                "end": 1287,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1288,
                "end": 1299,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 1300,
              "end": 1342,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1301,
                  "end": 1322,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
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
                            "decorators": [],
                            "name": "Point3D",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1318,
                          "end": 1322,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1318,
                            "end": 1322,
                            "decorators": [],
                            "name": "Line",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1323,
                "end": 1341,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 1325,
                  "end": 1341,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 1325,
                    "end": 1330,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
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
                        "decorators": [],
                        "name": "Point3D",
                        "optional": false
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1265,
        "end": 1270,
        "decorators": [],
        "name": "Rhs13",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1358,
            "end": 1367,
            "decorators": [],
            "name": "lhs0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1362,
              "end": 1367,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1364,
                "end": 1367
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1381,
            "end": 1393,
            "decorators": [],
            "name": "lhs1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1385,
              "end": 1393,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 1387,
                "end": 1393
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1407,
            "end": 1435,
            "decorators": [],
            "name": "lhs2",
            "optional": false,
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
                      "decorators": [],
                      "name": "Point",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1421,
                    "end": 1428,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1421,
                      "end": 1428,
                      "decorators": [],
                      "name": "Point3D",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1431,
                    "end": 1435,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1431,
                      "end": 1435,
                      "decorators": [],
                      "name": "Line",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1449,
            "end": 1469,
            "decorators": [],
            "name": "lhs3",
            "optional": false,
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
                      "decorators": [],
                      "name": "Point3D",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1465,
                    "end": 1469,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1465,
                      "end": 1469,
                      "decorators": [],
                      "name": "Line",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1483,
            "end": 1512,
            "decorators": [],
            "name": "lhs4",
            "optional": false,
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
                      "decorators": [],
                      "name": "Point",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1497,
                    "end": 1505,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1497,
                      "end": 1505,
                      "decorators": [],
                      "name": "Point3D2",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1508,
                    "end": 1512,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1508,
                      "end": 1512,
                      "decorators": [],
                      "name": "Line",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1515,
      "end": 1544,
      "expression": {
        "type": "LogicalExpression",
        "start": 1515,
        "end": 1543,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1515,
          "end": 1535,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1515,
            "end": 1519,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1531,
            "end": 1535,
            "decorators": [],
            "name": "rhs0",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1539,
          "end": 1543,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1545,
      "end": 1574,
      "expression": {
        "type": "LogicalExpression",
        "start": 1545,
        "end": 1573,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1545,
          "end": 1565,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1545,
            "end": 1549,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1561,
            "end": 1565,
            "decorators": [],
            "name": "rhs1",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1569,
          "end": 1573,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1575,
      "end": 1604,
      "expression": {
        "type": "LogicalExpression",
        "start": 1575,
        "end": 1603,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1575,
          "end": 1595,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1575,
            "end": 1579,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1591,
            "end": 1595,
            "decorators": [],
            "name": "rhs2",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1599,
          "end": 1603,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1605,
      "end": 1634,
      "expression": {
        "type": "LogicalExpression",
        "start": 1605,
        "end": 1633,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1605,
          "end": 1625,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1605,
            "end": 1609,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1621,
            "end": 1625,
            "decorators": [],
            "name": "rhs3",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1629,
          "end": 1633,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1635,
      "end": 1664,
      "expression": {
        "type": "LogicalExpression",
        "start": 1635,
        "end": 1663,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1635,
          "end": 1655,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1635,
            "end": 1639,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1651,
            "end": 1655,
            "decorators": [],
            "name": "rhs4",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1659,
          "end": 1663,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1665,
      "end": 1694,
      "expression": {
        "type": "LogicalExpression",
        "start": 1665,
        "end": 1693,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1665,
          "end": 1685,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1665,
            "end": 1669,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1681,
            "end": 1685,
            "decorators": [],
            "name": "rhs5",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1689,
          "end": 1693,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1695,
      "end": 1724,
      "expression": {
        "type": "LogicalExpression",
        "start": 1695,
        "end": 1723,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1695,
          "end": 1715,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1695,
            "end": 1699,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1711,
            "end": 1715,
            "decorators": [],
            "name": "rhs6",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1719,
          "end": 1723,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1725,
      "end": 1754,
      "expression": {
        "type": "LogicalExpression",
        "start": 1725,
        "end": 1753,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1725,
          "end": 1745,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1725,
            "end": 1729,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1741,
            "end": 1745,
            "decorators": [],
            "name": "Rhs7",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1749,
          "end": 1753,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1755,
      "end": 1784,
      "expression": {
        "type": "LogicalExpression",
        "start": 1755,
        "end": 1783,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1755,
          "end": 1775,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1755,
            "end": 1759,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1771,
            "end": 1775,
            "decorators": [],
            "name": "Rhs8",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1779,
          "end": 1783,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1785,
      "end": 1814,
      "expression": {
        "type": "LogicalExpression",
        "start": 1785,
        "end": 1813,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1785,
          "end": 1805,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1785,
            "end": 1789,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1801,
            "end": 1805,
            "decorators": [],
            "name": "Rhs9",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1809,
          "end": 1813,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1815,
      "end": 1845,
      "expression": {
        "type": "LogicalExpression",
        "start": 1815,
        "end": 1844,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1815,
          "end": 1836,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1815,
            "end": 1819,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1831,
            "end": 1836,
            "decorators": [],
            "name": "Rhs10",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1840,
          "end": 1844,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1846,
      "end": 1876,
      "expression": {
        "type": "LogicalExpression",
        "start": 1846,
        "end": 1875,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1846,
          "end": 1867,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1846,
            "end": 1850,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1862,
            "end": 1867,
            "decorators": [],
            "name": "Rhs11",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1871,
          "end": 1875,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1877,
      "end": 1907,
      "expression": {
        "type": "LogicalExpression",
        "start": 1877,
        "end": 1906,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1877,
          "end": 1898,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1877,
            "end": 1881,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1893,
            "end": 1898,
            "decorators": [],
            "name": "Rhs12",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1902,
          "end": 1906,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1908,
      "end": 1938,
      "expression": {
        "type": "LogicalExpression",
        "start": 1908,
        "end": 1937,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1908,
          "end": 1929,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1908,
            "end": 1912,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1924,
            "end": 1929,
            "decorators": [],
            "name": "Rhs13",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1933,
          "end": 1937,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1940,
      "end": 1969,
      "expression": {
        "type": "LogicalExpression",
        "start": 1940,
        "end": 1968,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1940,
          "end": 1960,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1940,
            "end": 1944,
            "decorators": [],
            "name": "lhs1",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1956,
            "end": 1960,
            "decorators": [],
            "name": "rhs0",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1964,
          "end": 1968,
          "decorators": [],
          "name": "lhs1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1970,
      "end": 1999,
      "expression": {
        "type": "LogicalExpression",
        "start": 1970,
        "end": 1998,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 1970,
          "end": 1990,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 1970,
            "end": 1974,
            "decorators": [],
            "name": "lhs1",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 1986,
            "end": 1990,
            "decorators": [],
            "name": "rhs1",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1994,
          "end": 1998,
          "decorators": [],
          "name": "lhs1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2000,
      "end": 2029,
      "expression": {
        "type": "LogicalExpression",
        "start": 2000,
        "end": 2028,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2000,
          "end": 2020,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2000,
            "end": 2004,
            "decorators": [],
            "name": "lhs1",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2016,
            "end": 2020,
            "decorators": [],
            "name": "rhs2",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2024,
          "end": 2028,
          "decorators": [],
          "name": "lhs1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2030,
      "end": 2059,
      "expression": {
        "type": "LogicalExpression",
        "start": 2030,
        "end": 2058,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2030,
          "end": 2050,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2030,
            "end": 2034,
            "decorators": [],
            "name": "lhs1",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2046,
            "end": 2050,
            "decorators": [],
            "name": "Rhs7",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2054,
          "end": 2058,
          "decorators": [],
          "name": "lhs1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2060,
      "end": 2089,
      "expression": {
        "type": "LogicalExpression",
        "start": 2060,
        "end": 2088,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2060,
          "end": 2080,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2060,
            "end": 2064,
            "decorators": [],
            "name": "lhs1",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2076,
            "end": 2080,
            "decorators": [],
            "name": "Rhs8",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2084,
          "end": 2088,
          "decorators": [],
          "name": "lhs1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2090,
      "end": 2119,
      "expression": {
        "type": "LogicalExpression",
        "start": 2090,
        "end": 2118,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2090,
          "end": 2110,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2090,
            "end": 2094,
            "decorators": [],
            "name": "lhs1",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2106,
            "end": 2110,
            "decorators": [],
            "name": "Rhs9",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2114,
          "end": 2118,
          "decorators": [],
          "name": "lhs1",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2121,
      "end": 2150,
      "expression": {
        "type": "LogicalExpression",
        "start": 2121,
        "end": 2149,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2121,
          "end": 2141,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2121,
            "end": 2125,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2137,
            "end": 2141,
            "decorators": [],
            "name": "rhs0",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2145,
          "end": 2149,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2151,
      "end": 2180,
      "expression": {
        "type": "LogicalExpression",
        "start": 2151,
        "end": 2179,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2151,
          "end": 2171,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2151,
            "end": 2155,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2167,
            "end": 2171,
            "decorators": [],
            "name": "rhs1",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2175,
          "end": 2179,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2181,
      "end": 2210,
      "expression": {
        "type": "LogicalExpression",
        "start": 2181,
        "end": 2209,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2181,
          "end": 2201,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2181,
            "end": 2185,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2197,
            "end": 2201,
            "decorators": [],
            "name": "rhs2",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2205,
          "end": 2209,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2211,
      "end": 2240,
      "expression": {
        "type": "LogicalExpression",
        "start": 2211,
        "end": 2239,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2211,
          "end": 2231,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2211,
            "end": 2215,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2227,
            "end": 2231,
            "decorators": [],
            "name": "rhs3",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2235,
          "end": 2239,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2241,
      "end": 2270,
      "expression": {
        "type": "LogicalExpression",
        "start": 2241,
        "end": 2269,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2241,
          "end": 2261,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2241,
            "end": 2245,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2257,
            "end": 2261,
            "decorators": [],
            "name": "rhs4",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2265,
          "end": 2269,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2271,
      "end": 2300,
      "expression": {
        "type": "LogicalExpression",
        "start": 2271,
        "end": 2299,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2271,
          "end": 2291,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2271,
            "end": 2275,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2287,
            "end": 2291,
            "decorators": [],
            "name": "rhs5",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2295,
          "end": 2299,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2301,
      "end": 2330,
      "expression": {
        "type": "LogicalExpression",
        "start": 2301,
        "end": 2329,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2301,
          "end": 2321,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2301,
            "end": 2305,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2317,
            "end": 2321,
            "decorators": [],
            "name": "Rhs7",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2325,
          "end": 2329,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2331,
      "end": 2360,
      "expression": {
        "type": "LogicalExpression",
        "start": 2331,
        "end": 2359,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2331,
          "end": 2351,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2331,
            "end": 2335,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2347,
            "end": 2351,
            "decorators": [],
            "name": "Rhs8",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2355,
          "end": 2359,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2361,
      "end": 2390,
      "expression": {
        "type": "LogicalExpression",
        "start": 2361,
        "end": 2389,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2361,
          "end": 2381,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2361,
            "end": 2365,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2377,
            "end": 2381,
            "decorators": [],
            "name": "Rhs9",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2385,
          "end": 2389,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2391,
      "end": 2421,
      "expression": {
        "type": "LogicalExpression",
        "start": 2391,
        "end": 2420,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2391,
          "end": 2412,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2391,
            "end": 2395,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2407,
            "end": 2412,
            "decorators": [],
            "name": "Rhs10",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2416,
          "end": 2420,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2422,
      "end": 2452,
      "expression": {
        "type": "LogicalExpression",
        "start": 2422,
        "end": 2451,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2422,
          "end": 2443,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2422,
            "end": 2426,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2438,
            "end": 2443,
            "decorators": [],
            "name": "Rhs11",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2447,
          "end": 2451,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2453,
      "end": 2483,
      "expression": {
        "type": "LogicalExpression",
        "start": 2453,
        "end": 2482,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2453,
          "end": 2474,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2453,
            "end": 2457,
            "decorators": [],
            "name": "lhs2",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2469,
            "end": 2474,
            "decorators": [],
            "name": "Rhs12",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2478,
          "end": 2482,
          "decorators": [],
          "name": "lhs2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2485,
      "end": 2514,
      "expression": {
        "type": "LogicalExpression",
        "start": 2485,
        "end": 2513,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2485,
          "end": 2505,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2485,
            "end": 2489,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2501,
            "end": 2505,
            "decorators": [],
            "name": "rhs0",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2509,
          "end": 2513,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2515,
      "end": 2544,
      "expression": {
        "type": "LogicalExpression",
        "start": 2515,
        "end": 2543,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2515,
          "end": 2535,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2515,
            "end": 2519,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2531,
            "end": 2535,
            "decorators": [],
            "name": "rhs1",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2539,
          "end": 2543,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2545,
      "end": 2574,
      "expression": {
        "type": "LogicalExpression",
        "start": 2545,
        "end": 2573,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2545,
          "end": 2565,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2545,
            "end": 2549,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2561,
            "end": 2565,
            "decorators": [],
            "name": "rhs2",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2569,
          "end": 2573,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2575,
      "end": 2604,
      "expression": {
        "type": "LogicalExpression",
        "start": 2575,
        "end": 2603,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2575,
          "end": 2595,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2575,
            "end": 2579,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2591,
            "end": 2595,
            "decorators": [],
            "name": "rhs3",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2599,
          "end": 2603,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2605,
      "end": 2634,
      "expression": {
        "type": "LogicalExpression",
        "start": 2605,
        "end": 2633,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2605,
          "end": 2625,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2605,
            "end": 2609,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2621,
            "end": 2625,
            "decorators": [],
            "name": "rhs4",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2629,
          "end": 2633,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2635,
      "end": 2664,
      "expression": {
        "type": "LogicalExpression",
        "start": 2635,
        "end": 2663,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2635,
          "end": 2655,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2635,
            "end": 2639,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2651,
            "end": 2655,
            "decorators": [],
            "name": "rhs5",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2659,
          "end": 2663,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2665,
      "end": 2694,
      "expression": {
        "type": "LogicalExpression",
        "start": 2665,
        "end": 2693,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2665,
          "end": 2685,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2665,
            "end": 2669,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2681,
            "end": 2685,
            "decorators": [],
            "name": "rhs6",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2689,
          "end": 2693,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2695,
      "end": 2724,
      "expression": {
        "type": "LogicalExpression",
        "start": 2695,
        "end": 2723,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2695,
          "end": 2715,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2695,
            "end": 2699,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2711,
            "end": 2715,
            "decorators": [],
            "name": "Rhs7",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2719,
          "end": 2723,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2725,
      "end": 2754,
      "expression": {
        "type": "LogicalExpression",
        "start": 2725,
        "end": 2753,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2725,
          "end": 2745,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2725,
            "end": 2729,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2741,
            "end": 2745,
            "decorators": [],
            "name": "Rhs8",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2749,
          "end": 2753,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2755,
      "end": 2784,
      "expression": {
        "type": "LogicalExpression",
        "start": 2755,
        "end": 2783,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2755,
          "end": 2775,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2755,
            "end": 2759,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2771,
            "end": 2775,
            "decorators": [],
            "name": "Rhs9",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2779,
          "end": 2783,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2785,
      "end": 2815,
      "expression": {
        "type": "LogicalExpression",
        "start": 2785,
        "end": 2814,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2785,
          "end": 2806,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2785,
            "end": 2789,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2801,
            "end": 2806,
            "decorators": [],
            "name": "Rhs10",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2810,
          "end": 2814,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2816,
      "end": 2846,
      "expression": {
        "type": "LogicalExpression",
        "start": 2816,
        "end": 2845,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2816,
          "end": 2837,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2816,
            "end": 2820,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2832,
            "end": 2837,
            "decorators": [],
            "name": "Rhs11",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2841,
          "end": 2845,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2847,
      "end": 2877,
      "expression": {
        "type": "LogicalExpression",
        "start": 2847,
        "end": 2876,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2847,
          "end": 2868,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2847,
            "end": 2851,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2863,
            "end": 2868,
            "decorators": [],
            "name": "Rhs12",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2872,
          "end": 2876,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2878,
      "end": 2908,
      "expression": {
        "type": "LogicalExpression",
        "start": 2878,
        "end": 2907,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2878,
          "end": 2899,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2878,
            "end": 2882,
            "decorators": [],
            "name": "lhs3",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2894,
            "end": 2899,
            "decorators": [],
            "name": "Rhs13",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2903,
          "end": 2907,
          "decorators": [],
          "name": "lhs3",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2910,
      "end": 2939,
      "expression": {
        "type": "LogicalExpression",
        "start": 2910,
        "end": 2938,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2910,
          "end": 2930,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2910,
            "end": 2914,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2926,
            "end": 2930,
            "decorators": [],
            "name": "rhs0",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2934,
          "end": 2938,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2940,
      "end": 2969,
      "expression": {
        "type": "LogicalExpression",
        "start": 2940,
        "end": 2968,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2940,
          "end": 2960,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2940,
            "end": 2944,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2956,
            "end": 2960,
            "decorators": [],
            "name": "rhs1",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2964,
          "end": 2968,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2970,
      "end": 2999,
      "expression": {
        "type": "LogicalExpression",
        "start": 2970,
        "end": 2998,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 2970,
          "end": 2990,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 2970,
            "end": 2974,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 2986,
            "end": 2990,
            "decorators": [],
            "name": "rhs2",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 2994,
          "end": 2998,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3000,
      "end": 3029,
      "expression": {
        "type": "LogicalExpression",
        "start": 3000,
        "end": 3028,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 3000,
          "end": 3020,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 3000,
            "end": 3004,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 3016,
            "end": 3020,
            "decorators": [],
            "name": "rhs3",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3024,
          "end": 3028,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3030,
      "end": 3059,
      "expression": {
        "type": "LogicalExpression",
        "start": 3030,
        "end": 3058,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 3030,
          "end": 3050,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 3030,
            "end": 3034,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 3046,
            "end": 3050,
            "decorators": [],
            "name": "rhs4",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3054,
          "end": 3058,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3060,
      "end": 3089,
      "expression": {
        "type": "LogicalExpression",
        "start": 3060,
        "end": 3088,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 3060,
          "end": 3080,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 3060,
            "end": 3064,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 3076,
            "end": 3080,
            "decorators": [],
            "name": "rhs5",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3084,
          "end": 3088,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3090,
      "end": 3119,
      "expression": {
        "type": "LogicalExpression",
        "start": 3090,
        "end": 3118,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 3090,
          "end": 3110,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 3090,
            "end": 3094,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 3106,
            "end": 3110,
            "decorators": [],
            "name": "Rhs7",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3114,
          "end": 3118,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3120,
      "end": 3149,
      "expression": {
        "type": "LogicalExpression",
        "start": 3120,
        "end": 3148,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 3120,
          "end": 3140,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 3120,
            "end": 3124,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 3136,
            "end": 3140,
            "decorators": [],
            "name": "Rhs8",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3144,
          "end": 3148,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3150,
      "end": 3179,
      "expression": {
        "type": "LogicalExpression",
        "start": 3150,
        "end": 3178,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 3150,
          "end": 3170,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 3150,
            "end": 3154,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 3166,
            "end": 3170,
            "decorators": [],
            "name": "Rhs9",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3174,
          "end": 3178,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3180,
      "end": 3210,
      "expression": {
        "type": "LogicalExpression",
        "start": 3180,
        "end": 3209,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 3180,
          "end": 3201,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 3180,
            "end": 3184,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 3196,
            "end": 3201,
            "decorators": [],
            "name": "Rhs10",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3205,
          "end": 3209,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3211,
      "end": 3241,
      "expression": {
        "type": "LogicalExpression",
        "start": 3211,
        "end": 3240,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 3211,
          "end": 3232,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 3211,
            "end": 3215,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 3227,
            "end": 3232,
            "decorators": [],
            "name": "Rhs11",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3236,
          "end": 3240,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3242,
      "end": 3272,
      "expression": {
        "type": "LogicalExpression",
        "start": 3242,
        "end": 3271,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 3242,
          "end": 3263,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 3242,
            "end": 3246,
            "decorators": [],
            "name": "lhs4",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 3258,
            "end": 3263,
            "decorators": [],
            "name": "Rhs12",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 3267,
          "end": 3271,
          "decorators": [],
          "name": "lhs4",
          "optional": false
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 3274,
      "end": 3949,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3290,
        "end": 3949,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3296,
            "end": 3307,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 3296,
              "end": 3298,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 3541,
            "end": 3947,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 3549,
              "end": 3567,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3549,
                "end": 3555,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3556,
                "end": 3567,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 3568,
              "end": 3947,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3572,
                  "end": 3579,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3581,
                  "end": 3595,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3586,
                    "end": 3595,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3588,
                      "end": 3595
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3596,
                "end": 3946,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 3598,
                  "end": 3946,
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 3598,
                    "end": 3603,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  },
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
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
                            "decorators": [],
                            "name": "globalThis",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 3638,
                            "end": 3646,
                            "decorators": [],
                            "name": "Function",
                            "optional": false
                          }
                        }
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 3935,
                        "end": 3940
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
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
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
                              "key": {
                                "type": "Identifier",
                                "start": 3682,
                                "end": 3691,
                                "decorators": [],
                                "name": "prototype",
                                "optional": false
                              },
                              "optional": false,
                              "readonly": true,
                              "static": false,
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
                                    "const": false,
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 3699,
                                      "end": 3700,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false
                                    },
                                    "out": false
                                  }
                                }
                              }
                            }
                          ]
                        },
                        "falseType": {
                          "type": "TSNeverKeyword",
                          "start": 3919,
                          "end": 3924
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
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            },
                            "extendsType": {
                              "type": "TSNeverKeyword",
                              "start": 3748,
                              "end": 3753
                            },
                            "falseType": {
                              "type": "TSLiteralType",
                              "start": 3763,
                              "end": 3768,
                              "literal": {
                                "type": "Literal",
                                "start": 3763,
                                "end": 3768,
                                "raw": "false",
                                "value": false
                              }
                            },
                            "trueType": {
                              "type": "TSLiteralType",
                              "start": 3756,
                              "end": 3760,
                              "literal": {
                                "type": "Literal",
                                "start": 3756,
                                "end": 3760,
                                "raw": "true",
                                "value": true
                              }
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
                              "decorators": [],
                              "name": "U",
                              "optional": false
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
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            },
                            "extendsType": {
                              "type": "TSConstructorType",
                              "start": 3836,
                              "end": 3874,
                              "abstract": true,
                              "params": [
                                {
                                  "type": "RestElement",
                                  "start": 3850,
                                  "end": 3862,
                                  "argument": {
                                    "type": "Identifier",
                                    "start": 3853,
                                    "end": 3857,
                                    "decorators": [],
                                    "name": "args",
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
                                  }
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
                                    "const": false,
                                    "in": false,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 3873,
                                      "end": 3874,
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false
                                    },
                                    "out": false
                                  }
                                }
                              }
                            },
                            "falseType": {
                              "type": "TSTypeLiteral",
                              "start": 3882,
                              "end": 3884,
                              "members": []
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "start": 3878,
                              "end": 3879,
                              "typeName": {
                                "type": "Identifier",
                                "start": 3878,
                                "end": 3879,
                                "decorators": [],
                                "name": "V",
                                "optional": false
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 3568,
                "end": 3571,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 3569,
                    "end": 3570,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 3569,
                      "end": 3570,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3288,
        "end": 3289,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 3951,
      "end": 3992,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 3977,
        "end": 3992,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 3979,
            "end": 3990,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 3979,
              "end": 3981,
              "name": "y"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3965,
        "end": 3966,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 3975,
        "end": 3976,
        "decorators": [],
        "name": "A",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4008,
            "end": 4020,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4011,
              "end": 4020,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 4013,
                "end": 4020
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 4022,
      "end": 4061,
      "alternate": null,
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
              "decorators": [],
              "name": "obj",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 4026,
        "end": 4042,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 4026,
          "end": 4029,
          "decorators": [],
          "name": "obj",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4041,
          "end": 4042,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 4062,
      "end": 4101,
      "alternate": null,
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
              "decorators": [],
              "name": "obj",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 4066,
        "end": 4082,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 4066,
          "end": 4069,
          "decorators": [],
          "name": "obj",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 4081,
          "end": 4082,
          "decorators": [],
          "name": "B",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4177,
      "end": 4246,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4201,
        "end": 4246,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 4203,
            "end": 4244,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 4204,
              "end": 4222,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4204,
                "end": 4210,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4211,
                "end": 4222,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4224,
                "end": 4234,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4225,
                  "end": 4234,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 4227,
                    "end": 4234
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 4187,
        "end": 4200,
        "decorators": [],
        "name": "HasInstanceOf",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4247,
      "end": 4283,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4252,
        "end": 4257,
        "decorators": [],
        "name": "Rhs14",
        "optional": false
      },
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
              "decorators": [],
              "name": "HasInstanceOf",
              "optional": false
            }
          },
          {
            "type": "TSObjectKeyword",
            "start": 4276,
            "end": 4282
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4298,
            "end": 4310,
            "decorators": [],
            "name": "rhs14",
            "optional": false,
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
                  "decorators": [],
                  "name": "Rhs14",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 4312,
      "end": 4342,
      "expression": {
        "type": "LogicalExpression",
        "start": 4312,
        "end": 4341,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 4312,
          "end": 4333,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 4312,
            "end": 4316,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 4328,
            "end": 4333,
            "decorators": [],
            "name": "rhs14",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 4337,
          "end": 4341,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4355,
      "end": 4428,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4380,
        "end": 4428,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 4382,
            "end": 4426,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 4383,
              "end": 4401,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4383,
                "end": 4389,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4390,
                "end": 4401,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4403,
                "end": 4413,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4404,
                  "end": 4413,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 4406,
                    "end": 4413
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4414,
              "end": 4426,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 4416,
                "end": 4426,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 4416,
                  "end": 4417,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
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
                      "decorators": [],
                      "name": "Point",
                      "optional": false
                    }
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 4365,
        "end": 4379,
        "decorators": [],
        "name": "HasInstanceOf1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4429,
      "end": 4501,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4454,
        "end": 4501,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 4456,
            "end": 4499,
            "computed": true,
            "key": {
              "type": "MemberExpression",
              "start": 4457,
              "end": 4475,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4457,
                "end": 4463,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4464,
                "end": 4475,
                "decorators": [],
                "name": "hasInstance",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4477,
                "end": 4487,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4478,
                  "end": 4487,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 4480,
                    "end": 4487
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4488,
              "end": 4499,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 4490,
                "end": 4499,
                "asserts": false,
                "parameterName": {
                  "type": "Identifier",
                  "start": 4490,
                  "end": 4491,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
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
                      "decorators": [],
                      "name": "Line",
                      "optional": false
                    }
                  }
                }
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 4439,
        "end": 4453,
        "decorators": [],
        "name": "HasInstanceOf2",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4502,
      "end": 4547,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4507,
        "end": 4512,
        "decorators": [],
        "name": "Rhs15",
        "optional": false
      },
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
              "decorators": [],
              "name": "HasInstanceOf1",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 4532,
            "end": 4546,
            "typeName": {
              "type": "Identifier",
              "start": 4532,
              "end": 4546,
              "decorators": [],
              "name": "HasInstanceOf2",
              "optional": false
            }
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4562,
            "end": 4574,
            "decorators": [],
            "name": "rhs15",
            "optional": false,
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
                  "decorators": [],
                  "name": "Rhs15",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 4576,
      "end": 4606,
      "expression": {
        "type": "LogicalExpression",
        "start": 4576,
        "end": 4605,
        "operator": "&&",
        "left": {
          "type": "BinaryExpression",
          "start": 4576,
          "end": 4597,
          "operator": "instanceof",
          "left": {
            "type": "Identifier",
            "start": 4576,
            "end": 4580,
            "decorators": [],
            "name": "lhs0",
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 4592,
            "end": 4597,
            "decorators": [],
            "name": "rhs15",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 4601,
          "end": 4605,
          "decorators": [],
          "name": "lhs0",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
