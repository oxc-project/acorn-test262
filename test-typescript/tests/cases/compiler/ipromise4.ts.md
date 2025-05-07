__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 998,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 798,
      "body": {
        "type": "TSModuleBlock",
        "start": 34,
        "end": 798,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 40,
            "end": 796,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 47,
              "end": 796,
              "body": {
                "type": "TSInterfaceBody",
                "start": 69,
                "end": 796,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 79,
                    "end": 230,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 83,
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 87,
                        "end": 122,
                        "decorators": [],
                        "name": "success",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 95,
                          "end": 122,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 97,
                            "end": 122,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 98,
                                "end": 106,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 103,
                                  "end": 106,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 105,
                                    "end": 106,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 105,
                                      "end": 106,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 108,
                              "end": 122,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 111,
                                "end": 122,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 119,
                                  "end": 122,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 120,
                                      "end": 121,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 120,
                                        "end": 121,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 111,
                                  "end": 119,
                                  "decorators": [],
                                  "name": "IPromise",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 124,
                        "end": 159,
                        "decorators": [],
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 130,
                          "end": 159,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 132,
                            "end": 159,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 133,
                                "end": 143,
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 138,
                                  "end": 143,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 140,
                                    "end": 143
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 145,
                              "end": 159,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 148,
                                "end": 159,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 156,
                                  "end": 159,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 157,
                                      "end": 158,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 157,
                                        "end": 158,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 148,
                                  "end": 156,
                                  "decorators": [],
                                  "name": "IPromise",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 161,
                        "end": 195,
                        "decorators": [],
                        "name": "progress",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 170,
                          "end": 195,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 172,
                            "end": 195,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 173,
                                "end": 186,
                                "decorators": [],
                                "name": "progress",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 181,
                                  "end": 186,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 183,
                                    "end": 186
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 188,
                              "end": 195,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 191,
                                "end": 195
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 197,
                      "end": 229,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 199,
                        "end": 229,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 226,
                          "end": 229,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 227,
                              "end": 228,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 227,
                                "end": 228,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 199,
                          "end": 226,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 199,
                            "end": 217,
                            "left": {
                              "type": "Identifier",
                              "start": 199,
                              "end": 206,
                              "decorators": [],
                              "name": "Windows",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 207,
                              "end": 217,
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 218,
                            "end": 226,
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 83,
                      "end": 86,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 84,
                          "end": 85,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 84,
                            "end": 85,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 239,
                    "end": 380,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 243,
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 247,
                        "end": 282,
                        "decorators": [],
                        "name": "success",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 255,
                          "end": 282,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 257,
                            "end": 282,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 258,
                                "end": 266,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 263,
                                  "end": 266,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 265,
                                    "end": 266,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 265,
                                      "end": 266,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 268,
                              "end": 282,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 271,
                                "end": 282,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 279,
                                  "end": 282,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 280,
                                      "end": 281,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 280,
                                        "end": 281,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 271,
                                  "end": 279,
                                  "decorators": [],
                                  "name": "IPromise",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 284,
                        "end": 309,
                        "decorators": [],
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 290,
                          "end": 309,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 292,
                            "end": 309,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 293,
                                "end": 303,
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 298,
                                  "end": 303,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 300,
                                    "end": 303
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 305,
                              "end": 309,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 308,
                                "end": 309,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 308,
                                  "end": 309,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 311,
                        "end": 345,
                        "decorators": [],
                        "name": "progress",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 320,
                          "end": 345,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 322,
                            "end": 345,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 323,
                                "end": 336,
                                "decorators": [],
                                "name": "progress",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 331,
                                  "end": 336,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 333,
                                    "end": 336
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 338,
                              "end": 345,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 341,
                                "end": 345
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 347,
                      "end": 379,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 349,
                        "end": 379,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 376,
                          "end": 379,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 377,
                              "end": 378,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 377,
                                "end": 378,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 349,
                          "end": 376,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 349,
                            "end": 367,
                            "left": {
                              "type": "Identifier",
                              "start": 349,
                              "end": 356,
                              "decorators": [],
                              "name": "Windows",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 357,
                              "end": 367,
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 368,
                            "end": 376,
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 243,
                      "end": 246,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 244,
                          "end": 245,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 245,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 389,
                    "end": 530,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 393,
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 397,
                        "end": 422,
                        "decorators": [],
                        "name": "success",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 405,
                          "end": 422,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 407,
                            "end": 422,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 408,
                                "end": 416,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 413,
                                  "end": 416,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 415,
                                    "end": 416,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 415,
                                      "end": 416,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 418,
                              "end": 422,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 421,
                                "end": 422,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 421,
                                  "end": 422,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 424,
                        "end": 459,
                        "decorators": [],
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 430,
                          "end": 459,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 432,
                            "end": 459,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 433,
                                "end": 443,
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 438,
                                  "end": 443,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 440,
                                    "end": 443
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 445,
                              "end": 459,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 448,
                                "end": 459,
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "start": 456,
                                  "end": 459,
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "start": 457,
                                      "end": 458,
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 457,
                                        "end": 458,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 448,
                                  "end": 456,
                                  "decorators": [],
                                  "name": "IPromise",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 461,
                        "end": 495,
                        "decorators": [],
                        "name": "progress",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 470,
                          "end": 495,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 472,
                            "end": 495,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 473,
                                "end": 486,
                                "decorators": [],
                                "name": "progress",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 481,
                                  "end": 486,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 483,
                                    "end": 486
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 488,
                              "end": 495,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 491,
                                "end": 495
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 497,
                      "end": 529,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 499,
                        "end": 529,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 526,
                          "end": 529,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 527,
                              "end": 528,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 527,
                                "end": 528,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 499,
                          "end": 526,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 499,
                            "end": 517,
                            "left": {
                              "type": "Identifier",
                              "start": 499,
                              "end": 506,
                              "decorators": [],
                              "name": "Windows",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 507,
                              "end": 517,
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 518,
                            "end": 526,
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 393,
                      "end": 396,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 394,
                          "end": 395,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 394,
                            "end": 395,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 539,
                    "end": 670,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 539,
                      "end": 543,
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 547,
                        "end": 572,
                        "decorators": [],
                        "name": "success",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 555,
                          "end": 572,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 557,
                            "end": 572,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 558,
                                "end": 566,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 563,
                                  "end": 566,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 565,
                                    "end": 566,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 565,
                                      "end": 566,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 568,
                              "end": 572,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 571,
                                "end": 572,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 571,
                                  "end": 572,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 574,
                        "end": 599,
                        "decorators": [],
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 580,
                          "end": 599,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 582,
                            "end": 599,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 583,
                                "end": 593,
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 588,
                                  "end": 593,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 590,
                                    "end": 593
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 595,
                              "end": 599,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 598,
                                "end": 599,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 598,
                                  "end": 599,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 601,
                        "end": 635,
                        "decorators": [],
                        "name": "progress",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 610,
                          "end": 635,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 612,
                            "end": 635,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 613,
                                "end": 626,
                                "decorators": [],
                                "name": "progress",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 621,
                                  "end": 626,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 623,
                                    "end": 626
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 628,
                              "end": 635,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 631,
                                "end": 635
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 637,
                      "end": 669,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 639,
                        "end": 669,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 666,
                          "end": 669,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 667,
                              "end": 668,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 667,
                                "end": 668,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 639,
                          "end": 666,
                          "left": {
                            "type": "TSQualifiedName",
                            "start": 639,
                            "end": 657,
                            "left": {
                              "type": "Identifier",
                              "start": 639,
                              "end": 646,
                              "decorators": [],
                              "name": "Windows",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 647,
                              "end": 657,
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 658,
                            "end": 666,
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 543,
                      "end": 546,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 544,
                          "end": 545,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 544,
                            "end": 545,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 679,
                    "end": 790,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 679,
                      "end": 683,
                      "decorators": [],
                      "name": "done",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": true,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 689,
                        "end": 716,
                        "decorators": [],
                        "name": "success",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 697,
                          "end": 716,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 699,
                            "end": 716,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 700,
                                "end": 708,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 705,
                                  "end": 708,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 707,
                                    "end": 708,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 707,
                                      "end": 708,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 710,
                              "end": 716,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 713,
                                "end": 716
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 718,
                        "end": 745,
                        "decorators": [],
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 724,
                          "end": 745,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 726,
                            "end": 745,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 727,
                                "end": 737,
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 732,
                                  "end": 737,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 734,
                                    "end": 737
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 739,
                              "end": 745,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 742,
                                "end": 745
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 747,
                        "end": 781,
                        "decorators": [],
                        "name": "progress",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 756,
                          "end": 781,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 758,
                            "end": 781,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 759,
                                "end": 772,
                                "decorators": [],
                                "name": "progress",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 767,
                                  "end": 772,
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 769,
                                    "end": 772
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 774,
                              "end": 781,
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 777,
                                "end": 781
                              }
                            },
                            "typeParameters": null
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 783,
                      "end": 789,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 785,
                        "end": 789
                      }
                    },
                    "static": false,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 685,
                      "end": 688,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 686,
                          "end": 687,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 686,
                            "end": 687,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 65,
                "decorators": [],
                "name": "IPromise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 65,
                "end": 68,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 66,
                    "end": 67,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
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
        "type": "TSQualifiedName",
        "start": 15,
        "end": 33,
        "left": {
          "type": "Identifier",
          "start": 15,
          "end": 22,
          "decorators": [],
          "name": "Windows",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 23,
          "end": 33,
          "decorators": [],
          "name": "Foundation",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 801,
      "end": 851,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 805,
          "end": 850,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 805,
            "end": 843,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 806,
              "end": 843,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 808,
                "end": 843,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 835,
                  "end": 843,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 836,
                      "end": 842
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 808,
                  "end": 835,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 808,
                    "end": 826,
                    "left": {
                      "type": "Identifier",
                      "start": 808,
                      "end": 815,
                      "decorators": [],
                      "name": "Windows",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 816,
                      "end": 826,
                      "decorators": [],
                      "name": "Foundation",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 827,
                    "end": 835,
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 846,
            "end": 850,
            "raw": "null",
            "value": null,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 854,
      "end": 880,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 854,
        "end": 879,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 861,
            "end": 877,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 874,
              "end": 877,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 871,
                "end": 872,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 854,
          "end": 860,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 854,
            "end": 855,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 856,
            "end": 860,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 901,
      "end": 976,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 901,
        "end": 975,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 948,
            "end": 973,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 961,
              "end": 973,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 963,
                  "end": 971,
                  "argument": {
                    "type": "Identifier",
                    "start": 970,
                    "end": 971,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 958,
                "end": 959,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 901,
          "end": 947,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 901,
            "end": 942,
            "arguments": [
              {
                "type": "FunctionExpression",
                "start": 908,
                "end": 940,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 921,
                  "end": 940,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 923,
                      "end": 938,
                      "argument": {
                        "type": "Literal",
                        "start": 930,
                        "end": 937,
                        "raw": "\"hello\"",
                        "value": "hello",
                        "regex": null,
                        "bigint": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 918,
                    "end": 919,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 901,
              "end": 907,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 901,
                "end": 902,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 903,
                "end": 907,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 943,
            "end": 947,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
