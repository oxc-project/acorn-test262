__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 601,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 111,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 109,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 109,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 38,
                "end": 109,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 48,
                    "end": 58,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 77,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 86,
                    "end": 103,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 93,
                      "name": "toCarth",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 97,
                        "end": 102,
                        "typeName": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 102,
                          "name": "Point",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 113,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 122,
        "end": 181,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 128,
            "end": 179,
            "id": {
              "type": "Identifier",
              "start": 138,
              "end": 143,
              "name": "Point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 144,
              "end": 179,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 154,
                  "end": 173,
                  "key": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 163,
                    "name": "fromCarth",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 167,
                      "end": 172,
                      "typeName": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 172,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 212,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 264,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 219,
                "end": 264,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 221,
                    "end": 231,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 224,
                        "end": 230
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 232,
                    "end": 242,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 233,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 233,
                      "end": 241,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 235,
                        "end": 241
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 243,
                    "end": 262,
                    "key": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 250,
                      "name": "toCarth",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 252,
                      "end": 261,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 254,
                        "end": 261,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 254,
                          "end": 261,
                          "left": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 255,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 256,
                            "end": 261,
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 280,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 280,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 280,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 280,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 273,
                  "end": 280,
                  "left": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 280,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 283,
      "end": 377,
      "id": {
        "type": "TSQualifiedName",
        "start": 290,
        "end": 295,
        "left": {
          "type": "TSQualifiedName",
          "start": 290,
          "end": 293,
          "left": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "name": "Y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 294,
          "end": 295,
          "name": "Z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 296,
        "end": 377,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 302,
            "end": 375,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 309,
              "end": 375,
              "id": {
                "type": "Identifier",
                "start": 319,
                "end": 323,
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 324,
                "end": 375,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 334,
                    "end": 369,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 339,
                        "end": 353,
                        "name": "start",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 344,
                          "end": 353,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 346,
                            "end": 353,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 346,
                              "end": 353,
                              "left": {
                                "type": "Identifier",
                                "start": 346,
                                "end": 347,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 348,
                                "end": 353,
                                "name": "Point",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 355,
                        "end": 367,
                        "name": "end",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 358,
                          "end": 367,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 360,
                            "end": 367,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 360,
                              "end": 367,
                              "left": {
                                "type": "Identifier",
                                "start": 360,
                                "end": 361,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 362,
                                "end": 367,
                                "name": "Point",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": null
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 379,
      "end": 510,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 387,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 388,
        "end": 510,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 394,
            "end": 508,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 401,
              "end": 508,
              "id": {
                "type": "TSQualifiedName",
                "start": 408,
                "end": 411,
                "left": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 409,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "name": "Z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 412,
                "end": 508,
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "start": 422,
                    "end": 502,
                    "id": {
                      "type": "Identifier",
                      "start": 432,
                      "end": 436,
                      "name": "Line",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 437,
                      "end": 502,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 451,
                          "end": 466,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 451,
                            "end": 456,
                            "name": "start",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 456,
                            "end": 465,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 458,
                              "end": 465,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 458,
                                "end": 465,
                                "left": {
                                  "type": "Identifier",
                                  "start": 458,
                                  "end": 459,
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 460,
                                  "end": 465,
                                  "name": "Point",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 479,
                          "end": 492,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 482,
                            "name": "end",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 482,
                            "end": 491,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 484,
                              "end": 491,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 484,
                                "end": 491,
                                "left": {
                                  "type": "Identifier",
                                  "start": 484,
                                  "end": 485,
                                  "name": "A",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 486,
                                  "end": 491,
                                  "name": "Point",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
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
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
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
    },
    {
      "type": "VariableDeclaration",
      "start": 541,
      "end": 581,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 545,
          "end": 581,
          "id": {
            "type": "Identifier",
            "start": 545,
            "end": 581,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 546,
              "end": 581,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 548,
                "end": 581,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 550,
                    "end": 579,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 555,
                        "end": 565,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 556,
                          "end": 565,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 558,
                            "end": 565,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 558,
                              "end": 565,
                              "left": {
                                "type": "Identifier",
                                "start": 558,
                                "end": 559,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 560,
                                "end": 565,
                                "name": "Point",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 567,
                        "end": 577,
                        "name": "e",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 568,
                          "end": 577,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 570,
                            "end": 577,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 570,
                              "end": 577,
                              "left": {
                                "type": "Identifier",
                                "start": 570,
                                "end": 571,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 572,
                                "end": 577,
                                "name": "Point",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "returnType": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 582,
      "end": 600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 586,
          "end": 599,
          "id": {
            "type": "Identifier",
            "start": 586,
            "end": 599,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 599,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 589,
                "end": 599,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 589,
                  "end": 599,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 589,
                    "end": 594,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 589,
                      "end": 592,
                      "left": {
                        "type": "Identifier",
                        "start": 589,
                        "end": 590,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 592,
                        "name": "Y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 594,
                      "name": "Z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 595,
                    "end": 599,
                    "name": "Line",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
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
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
