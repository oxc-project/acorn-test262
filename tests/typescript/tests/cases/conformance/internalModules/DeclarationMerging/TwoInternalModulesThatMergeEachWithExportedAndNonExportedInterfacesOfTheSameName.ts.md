__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 600,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 111,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 111,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 109,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 109,
              "body": {
                "type": "TSInterfaceBody",
                "start": 38,
                "end": 109,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 48,
                    "end": 58,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 77,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 86,
                    "end": 103,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 93,
                      "decorators": [],
                      "name": "toCarth",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 95,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 97,
                        "end": 102,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 102,
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
                "start": 32,
                "end": 37,
                "decorators": [],
                "name": "Point",
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
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 113,
      "end": 181,
      "body": {
        "type": "TSModuleBlock",
        "start": 122,
        "end": 181,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 128,
            "end": 179,
            "body": {
              "type": "TSInterfaceBody",
              "start": 144,
              "end": 179,
              "body": [
                {
                  "type": "TSMethodSignature",
                  "start": 154,
                  "end": 173,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 163,
                    "decorators": [],
                    "name": "fromCarth",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 172,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 167,
                      "end": 172,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 172,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
              "start": 138,
              "end": 143,
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 121,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 264,
            "decorators": [],
            "name": "p",
            "optional": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 224,
                        "end": 230
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 232,
                    "end": 242,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 233,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 233,
                      "end": 241,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 235,
                        "end": 241
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 243,
                    "end": 262,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 250,
                      "decorators": [],
                      "name": "toCarth",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 252,
                      "end": 261,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 254,
                        "end": 261,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 254,
                          "end": 261,
                          "left": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 255,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 256,
                            "end": 261,
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 280,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 280,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 280,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 273,
                  "end": 280,
                  "left": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 274,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 275,
                    "end": 280,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 283,
      "end": 377,
      "body": {
        "type": "TSModuleBlock",
        "start": 296,
        "end": 377,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 302,
            "end": 375,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 309,
              "end": 375,
              "body": {
                "type": "TSInterfaceBody",
                "start": 324,
                "end": 375,
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 334,
                    "end": 369,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 339,
                        "end": 353,
                        "decorators": [],
                        "name": "start",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 344,
                          "end": 353,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 346,
                            "end": 353,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 346,
                              "end": 353,
                              "left": {
                                "type": "Identifier",
                                "start": 346,
                                "end": 347,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 348,
                                "end": 353,
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 355,
                        "end": 367,
                        "decorators": [],
                        "name": "end",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 358,
                          "end": 367,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 360,
                            "end": 367,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 360,
                              "end": 367,
                              "left": {
                                "type": "Identifier",
                                "start": 360,
                                "end": 361,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 362,
                                "end": 367,
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 319,
                "end": 323,
                "decorators": [],
                "name": "Line",
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
      "declare": false,
      "global": false,
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
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 294,
          "end": 295,
          "decorators": [],
          "name": "Z",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 379,
      "end": 510,
      "body": {
        "type": "TSModuleBlock",
        "start": 388,
        "end": 510,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 394,
            "end": 508,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 401,
              "end": 508,
              "body": {
                "type": "TSModuleBlock",
                "start": 412,
                "end": 508,
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "start": 422,
                    "end": 502,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 437,
                      "end": 502,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 451,
                          "end": 466,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 451,
                            "end": 456,
                            "decorators": [],
                            "name": "start",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 456,
                            "end": 465,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 458,
                              "end": 465,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 458,
                                "end": 465,
                                "left": {
                                  "type": "Identifier",
                                  "start": 458,
                                  "end": 459,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 460,
                                  "end": 465,
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 479,
                          "end": 492,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 482,
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 482,
                            "end": 491,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 484,
                              "end": 491,
                              "typeArguments": null,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 484,
                                "end": 491,
                                "left": {
                                  "type": "Identifier",
                                  "start": 484,
                                  "end": 485,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 486,
                                  "end": 491,
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null
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
                      "start": 432,
                      "end": 436,
                      "decorators": [],
                      "name": "Line",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "TSQualifiedName",
                "start": 408,
                "end": 411,
                "left": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 409,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "decorators": [],
                  "name": "Z",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 387,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 545,
            "end": 581,
            "decorators": [],
            "name": "l",
            "optional": false,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 555,
                        "end": 565,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 556,
                          "end": 565,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 558,
                            "end": 565,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 558,
                              "end": 565,
                              "left": {
                                "type": "Identifier",
                                "start": 558,
                                "end": 559,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 560,
                                "end": 565,
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 567,
                        "end": 577,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 568,
                          "end": 577,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 570,
                            "end": 577,
                            "typeArguments": null,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 570,
                              "end": 577,
                              "left": {
                                "type": "Identifier",
                                "start": 570,
                                "end": 571,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 572,
                                "end": 577,
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 586,
            "end": 599,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 599,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 589,
                "end": 599,
                "typeArguments": null,
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
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 591,
                        "end": 592,
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 594,
                      "decorators": [],
                      "name": "Z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 595,
                    "end": 599,
                    "decorators": [],
                    "name": "Line",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
