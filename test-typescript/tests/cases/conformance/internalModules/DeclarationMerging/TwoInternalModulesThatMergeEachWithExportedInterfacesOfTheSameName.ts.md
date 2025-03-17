__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 667,
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
      "end": 188,
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
        "end": 188,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 128,
            "end": 186,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 135,
              "end": 186,
              "id": {
                "type": "Identifier",
                "start": 145,
                "end": 150,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 151,
                "end": 186,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 161,
                    "end": 180,
                    "key": {
                      "type": "Identifier",
                      "start": 161,
                      "end": 170,
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
                      "start": 172,
                      "end": 179,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 174,
                        "end": 179,
                        "typeName": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 179,
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
      "type": "VariableDeclaration",
      "start": 219,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 293,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 293,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 293,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 226,
                "end": 293,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 228,
                    "end": 238,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 229,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 229,
                      "end": 237,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 231,
                        "end": 237
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 239,
                    "end": 249,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 240,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 240,
                      "end": 248,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 242,
                        "end": 248
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 250,
                    "end": 269,
                    "key": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 257,
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
                      "start": 259,
                      "end": 268,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 261,
                        "end": 268,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 261,
                          "end": 268,
                          "left": {
                            "type": "Identifier",
                            "start": 261,
                            "end": 262,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 263,
                            "end": 268,
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
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 270,
                    "end": 291,
                    "key": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 279,
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
                      "start": 281,
                      "end": 290,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 283,
                        "end": 290,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 283,
                          "end": 290,
                          "left": {
                            "type": "Identifier",
                            "start": 283,
                            "end": 284,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 285,
                            "end": 290,
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
      "start": 295,
      "end": 310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 309,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 309,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 300,
              "end": 309,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 302,
                "end": 309,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 302,
                  "end": 309,
                  "left": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 309,
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
      "start": 312,
      "end": 406,
      "id": {
        "type": "TSQualifiedName",
        "start": 319,
        "end": 324,
        "left": {
          "type": "TSQualifiedName",
          "start": 319,
          "end": 322,
          "left": {
            "type": "Identifier",
            "start": 319,
            "end": 320,
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 321,
            "end": 322,
            "name": "Y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 323,
          "end": 324,
          "name": "Z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 325,
        "end": 406,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 331,
            "end": 404,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 338,
              "end": 404,
              "id": {
                "type": "Identifier",
                "start": 348,
                "end": 352,
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 353,
                "end": 404,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 363,
                    "end": 398,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 368,
                        "end": 382,
                        "name": "start",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 373,
                          "end": 382,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 375,
                            "end": 382,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 375,
                              "end": 382,
                              "left": {
                                "type": "Identifier",
                                "start": 375,
                                "end": 376,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 377,
                                "end": 382,
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
                        "start": 384,
                        "end": 396,
                        "name": "end",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 387,
                          "end": 396,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 389,
                            "end": 396,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 389,
                              "end": 396,
                              "left": {
                                "type": "Identifier",
                                "start": 389,
                                "end": 390,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 391,
                                "end": 396,
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
      "start": 408,
      "end": 546,
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 416,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 417,
        "end": 546,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 423,
            "end": 544,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 430,
              "end": 544,
              "id": {
                "type": "TSQualifiedName",
                "start": 437,
                "end": 440,
                "left": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 438,
                  "name": "Y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 440,
                  "name": "Z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 441,
                "end": 544,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 451,
                    "end": 538,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 458,
                      "end": 538,
                      "id": {
                        "type": "Identifier",
                        "start": 468,
                        "end": 472,
                        "name": "Line",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [],
                      "typeParameters": null,
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 473,
                        "end": 538,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 487,
                            "end": 502,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 487,
                              "end": 492,
                              "name": "start",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 492,
                              "end": 501,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 494,
                                "end": 501,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 494,
                                  "end": 501,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 494,
                                    "end": 495,
                                    "name": "A",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 496,
                                    "end": 501,
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
                            "start": 515,
                            "end": 528,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 515,
                              "end": 518,
                              "name": "end",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 518,
                              "end": 527,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 520,
                                "end": 527,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 520,
                                  "end": 527,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 520,
                                    "end": 521,
                                    "name": "A",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 522,
                                    "end": 527,
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
      "start": 577,
      "end": 647,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 647,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 647,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 582,
              "end": 647,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 584,
                "end": 647,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 586,
                    "end": 601,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 591,
                      "name": "start",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 591,
                      "end": 600,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 593,
                        "end": 600,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 593,
                          "end": 600,
                          "left": {
                            "type": "Identifier",
                            "start": 593,
                            "end": 594,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 595,
                            "end": 600,
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
                    "start": 602,
                    "end": 615,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 602,
                      "end": 605,
                      "name": "end",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 605,
                      "end": 614,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 607,
                        "end": 614,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 607,
                          "end": 614,
                          "left": {
                            "type": "Identifier",
                            "start": 607,
                            "end": 608,
                            "name": "A",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 609,
                            "end": 614,
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
                    "type": "TSConstructSignatureDeclaration",
                    "start": 616,
                    "end": 645,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 621,
                        "end": 631,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 622,
                          "end": 631,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 624,
                            "end": 631,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 624,
                              "end": 631,
                              "left": {
                                "type": "Identifier",
                                "start": 624,
                                "end": 625,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 626,
                                "end": 631,
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
                        "start": 633,
                        "end": 643,
                        "name": "e",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 634,
                          "end": 643,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 636,
                            "end": 643,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 636,
                              "end": 643,
                              "left": {
                                "type": "Identifier",
                                "start": 636,
                                "end": 637,
                                "name": "A",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 638,
                                "end": 643,
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
      "start": 648,
      "end": 666,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 652,
          "end": 665,
          "id": {
            "type": "Identifier",
            "start": 652,
            "end": 665,
            "name": "l",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 653,
              "end": 665,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 655,
                "end": 665,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 655,
                  "end": 665,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 655,
                    "end": 660,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 655,
                      "end": 658,
                      "left": {
                        "type": "Identifier",
                        "start": 655,
                        "end": 656,
                        "name": "X",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 657,
                        "end": 658,
                        "name": "Y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 659,
                      "end": 660,
                      "name": "Z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 665,
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
