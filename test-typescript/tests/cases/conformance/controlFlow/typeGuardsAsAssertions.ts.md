__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    21,
    2579
  ],
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              },
              "range": [
                29,
                38
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  31,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              25,
              38
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            25,
            38
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        21,
        39
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        41,
        82
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Optional",
          "optional": false,
          "range": [
            53,
            61
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  71,
                  74
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        72,
                        73
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 5
                        },
                        "start": {
                          "column": 31,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      72,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 5
                      },
                      "start": {
                        "column": 31,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 5
                  },
                  "start": {
                    "column": 30,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Some",
                "optional": false,
                "range": [
                  67,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 5
                  },
                  "start": {
                    "column": 26,
                    "line": 5
                  }
                }
              },
              "range": [
                67,
                74
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "None",
                "optional": false,
                "range": [
                  77,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 5
                  },
                  "start": {
                    "column": 36,
                    "line": 5
                  }
                }
              },
              "range": [
                77,
                81
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            67,
            81
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 5
            },
            "start": {
              "column": 26,
              "line": 5
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 23,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          },
          "range": [
            61,
            64
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  62,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "out": false,
              "range": [
                62,
                63
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            }
          ]
        },
        "range": [
          48,
          82
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 41,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        84,
        132
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            106,
            132
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "none",
                "optional": false,
                "range": [
                  117,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 7
                  },
                  "start": {
                    "column": 37,
                    "line": 7
                  }
                },
                "range": [
                  121,
                  129
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    123,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 7
                    },
                    "start": {
                      "column": 39,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                108,
                130
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 7
            },
            "start": {
              "column": 22,
              "line": 7
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "None",
          "optional": false,
          "range": [
            101,
            105
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        },
        "range": [
          91,
          132
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 48,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        133,
        179
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            158,
            179
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "range": [
                  169,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 8
                  },
                  "start": {
                    "column": 36,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 8
                  },
                  "start": {
                    "column": 40,
                    "line": 8
                  }
                },
                "range": [
                  173,
                  176
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      175,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 8
                      },
                      "start": {
                        "column": 42,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    175,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 8
                    },
                    "start": {
                      "column": 42,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                160,
                177
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 8
                },
                "start": {
                  "column": 27,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 8
            },
            "start": {
              "column": 25,
              "line": 8
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Some",
          "optional": false,
          "range": [
            150,
            154
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 8
            },
            "start": {
              "column": 17,
              "line": 8
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 24,
              "line": 8
            },
            "start": {
              "column": 21,
              "line": 8
            }
          },
          "range": [
            154,
            157
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  155,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 22,
                    "line": 8
                  }
                }
              },
              "out": false,
              "range": [
                155,
                156
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 8
                }
              }
            }
          ]
        },
        "range": [
          140,
          179
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 46,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        181,
        221
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "none",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                },
                "range": [
                  199,
                  205
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "None",
                    "optional": false,
                    "range": [
                      201,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 10
                      },
                      "start": {
                        "column": 20,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    201,
                    205
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 10
                    },
                    "start": {
                      "column": 20,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                194,
                205
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "none",
                    "optional": false,
                    "range": [
                      210,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 29,
                        "line": 10
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "''",
                    "value": "",
                    "range": [
                      216,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 10
                      },
                      "start": {
                        "column": 35,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    210,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 10
                    },
                    "start": {
                      "column": 29,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                208,
                220
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 27,
                  "line": 10
                }
              }
            },
            "range": [
              194,
              220
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 10
              },
              "start": {
                "column": 13,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          188,
          221
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        223,
        318
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "in",
                "left": {
                  "type": "Literal",
                  "raw": "'some'",
                  "value": "some",
                  "range": [
                    300,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    310,
                    315
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 13
                    },
                    "start": {
                      "column": 21,
                      "line": 13
                    }
                  }
                },
                "range": [
                  300,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              },
              "range": [
                293,
                316
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            287,
            318
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 64,
              "line": 12
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "isSome",
          "optional": false,
          "range": [
            239,
            245
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 12
            },
            "start": {
              "column": 16,
              "line": 12
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 12
                },
                "start": {
                  "column": 31,
                  "line": 12
                }
              },
              "range": [
                254,
                267
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    264,
                    267
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          265,
                          266
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 12
                          },
                          "start": {
                            "column": 42,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        265,
                        266
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 12
                        },
                        "start": {
                          "column": 42,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 12
                    },
                    "start": {
                      "column": 41,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Optional",
                  "optional": false,
                  "range": [
                    256,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 12
                    },
                    "start": {
                      "column": 33,
                      "line": 12
                    }
                  }
                },
                "range": [
                  256,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 12
                  },
                  "start": {
                    "column": 33,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              249,
              267
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 12
              },
              "start": {
                "column": 26,
                "line": 12
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 63,
              "line": 12
            },
            "start": {
              "column": 45,
              "line": 12
            }
          },
          "range": [
            268,
            286
          ],
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "asserts": false,
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                270,
                275
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 12
                },
                "start": {
                  "column": 47,
                  "line": 12
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 63,
                  "line": 12
                },
                "start": {
                  "column": 56,
                  "line": 12
                }
              },
              "range": [
                279,
                286
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    283,
                    286
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          284,
                          285
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 12
                          },
                          "start": {
                            "column": 61,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        284,
                        285
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 12
                        },
                        "start": {
                          "column": 61,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 12
                    },
                    "start": {
                      "column": 60,
                      "line": 12
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Some",
                  "optional": false,
                  "range": [
                    279,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 12
                    },
                    "start": {
                      "column": 56,
                      "line": 12
                    }
                  }
                },
                "range": [
                  279,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 12
                  },
                  "start": {
                    "column": 56,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              270,
              286
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 12
              },
              "start": {
                "column": 47,
                "line": 12
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 25,
              "line": 12
            },
            "start": {
              "column": 22,
              "line": 12
            }
          },
          "range": [
            245,
            248
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  246,
                  247
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 12
                  },
                  "start": {
                    "column": 23,
                    "line": 12
                  }
                }
              },
              "out": false,
              "range": [
                246,
                247
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            }
          ]
        },
        "range": [
          230,
          318
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 7,
            "line": 12
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "range": [
                      365,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "range": [
                      365,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    365,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                363,
                371
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "range": [
              356,
              372
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          350,
          374
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 30,
            "line": 16
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someFrom",
        "optional": false,
        "range": [
          329,
          337
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 16
          },
          "start": {
            "column": 9,
            "line": 16
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "some",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 25,
                "line": 16
              }
            },
            "range": [
              345,
              348
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  347,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 16
                  },
                  "start": {
                    "column": 27,
                    "line": 16
                  }
                }
              },
              "range": [
                347,
                348
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 16
                },
                "start": {
                  "column": 27,
                  "line": 16
                }
              }
            }
          },
          "range": [
            341,
            348
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 16
            },
            "start": {
              "column": 21,
              "line": 16
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 20,
            "line": 16
          },
          "start": {
            "column": 17,
            "line": 16
          }
        },
        "range": [
          337,
          340
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                338,
                339
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 18,
                  "line": 16
                }
              }
            },
            "out": false,
            "range": [
              338,
              339
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 16
              },
              "start": {
                "column": 18,
                "line": 16
              }
            }
          }
        ]
      },
      "range": [
        320,
        374
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        376,
        641
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      },
                      "range": [
                        439,
                        452
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            449,
                            452
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "r",
                                "optional": false,
                                "range": [
                                  450,
                                  451
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                450,
                                451
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 21
                                },
                                "start": {
                                  "column": 25,
                                  "line": 21
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 21
                            },
                            "start": {
                              "column": 24,
                              "line": 21
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Optional",
                          "optional": false,
                          "range": [
                            441,
                            449
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 21
                            },
                            "start": {
                              "column": 16,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          441,
                          452
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 21
                          },
                          "start": {
                            "column": 16,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      433,
                      452
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "none",
                    "optional": false,
                    "range": [
                      455,
                      459
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 21
                      },
                      "start": {
                        "column": 30,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    433,
                    459
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                429,
                460
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "range": [
                  465,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "range": [
                465,
                472
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            {
              "type": "WhileStatement",
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "range": [
                        509,
                        515
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      509,
                      516
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          544,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "ConditionalExpression",
                            "alternate": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "makeSome",
                                "optional": false,
                                "range": [
                                  593,
                                  601
                                ],
                                "loc": {
                                  "end": {
                                    "column": 65,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 25
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                593,
                                603
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 25
                                },
                                "start": {
                                  "column": 57,
                                  "line": 25
                                }
                              }
                            },
                            "consequent": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "range": [
                                  579,
                                  585
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 25
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "some",
                                "optional": false,
                                "range": [
                                  586,
                                  590
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                579,
                                590
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 25
                                },
                                "start": {
                                  "column": 43,
                                  "line": 25
                                }
                              }
                            },
                            "test": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "result",
                                  "optional": false,
                                  "range": [
                                    569,
                                    575
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 25
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "isSome",
                                "optional": false,
                                "range": [
                                  562,
                                  568
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 25
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                562,
                                576
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 25
                                },
                                "start": {
                                  "column": 26,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              562,
                              603
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 25
                              },
                              "start": {
                                "column": 26,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someFrom",
                          "optional": false,
                          "range": [
                            553,
                            561
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 25
                            },
                            "start": {
                              "column": 17,
                              "line": 25
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          553,
                          604
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 25
                          },
                          "start": {
                            "column": 17,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        544,
                        604
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 25
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      544,
                      605
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "range": [
                        614,
                        620
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      614,
                      621
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  499,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 17,
                    "line": 23
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "range": [
                  493,
                  497
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              },
              "range": [
                486,
                639
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            423,
            641
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 28
            },
            "start": {
              "column": 47,
              "line": 20
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            392,
            394
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 20
            },
            "start": {
              "column": 16,
              "line": 20
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "makeSome",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 20
                },
                "start": {
                  "column": 30,
                  "line": 20
                }
              },
              "range": [
                406,
                415
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 20
                    },
                    "start": {
                      "column": 35,
                      "line": 20
                    }
                  },
                  "range": [
                    411,
                    415
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "r",
                      "optional": false,
                      "range": [
                        414,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 20
                        },
                        "start": {
                          "column": 38,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      414,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 20
                      },
                      "start": {
                        "column": 38,
                        "line": 20
                      }
                    }
                  }
                },
                "range": [
                  408,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 20
                  },
                  "start": {
                    "column": 32,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              398,
              415
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 20
              },
              "start": {
                "column": 22,
                "line": 20
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 46,
              "line": 20
            },
            "start": {
              "column": 40,
              "line": 20
            }
          },
          "range": [
            416,
            422
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              418,
              422
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 20
              },
              "start": {
                "column": 42,
                "line": 20
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 21,
              "line": 20
            },
            "start": {
              "column": 18,
              "line": 20
            }
          },
          "range": [
            394,
            397
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "range": [
                  395,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 20
                  },
                  "start": {
                    "column": 19,
                    "line": 20
                  }
                }
              },
              "out": false,
              "range": [
                395,
                396
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 20
                },
                "start": {
                  "column": 19,
                  "line": 20
                }
              }
            }
          ]
        },
        "range": [
          383,
          641
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 20
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 31
                      },
                      "start": {
                        "column": 9,
                        "line": 31
                      }
                    },
                    "range": [
                      670,
                      697
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            672,
                            678
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 31
                            },
                            "start": {
                              "column": 11,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            681,
                            687
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 31
                            },
                            "start": {
                              "column": 20,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            690,
                            697
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 31
                            },
                            "start": {
                              "column": 29,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "range": [
                        672,
                        697
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 31
                        },
                        "start": {
                          "column": 11,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    669,
                    697
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    700,
                    701
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 31
                    },
                    "start": {
                      "column": 39,
                      "line": 31
                    }
                  }
                },
                "range": [
                  669,
                  701
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              665,
              702
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                707,
                708
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              707,
              709
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      748,
                      749
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    748,
                    750
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        792,
                        793
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "right": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "Literal",
                        "raw": "\"abc\"",
                        "value": "abc",
                        "range": [
                          832,
                          837
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 35
                          },
                          "start": {
                            "column": 48,
                            "line": 35
                          }
                        }
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              820,
                              821
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 35
                              },
                              "start": {
                                "column": 36,
                                "line": 35
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "slice",
                            "optional": false,
                            "range": [
                              822,
                              827
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 35
                              },
                              "start": {
                                "column": 38,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            820,
                            827
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 35
                            },
                            "start": {
                              "column": 36,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          820,
                          829
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 35
                          },
                          "start": {
                            "column": 36,
                            "line": 35
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "UnaryExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              803,
                              804
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 35
                              },
                              "start": {
                                "column": 19,
                                "line": 35
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            796,
                            804
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 35
                            },
                            "start": {
                              "column": 12,
                              "line": 35
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\"string\"",
                          "value": "string",
                          "range": [
                            809,
                            817
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 35
                            },
                            "start": {
                              "column": 25,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          796,
                          817
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 35
                          },
                          "start": {
                            "column": 12,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        796,
                        837
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 35
                        },
                        "start": {
                          "column": 12,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      792,
                      837
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    792,
                    838
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      847,
                      848
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    847,
                    849
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                }
              ],
              "range": [
                738,
                866
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                732,
                736
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "range": [
              725,
              866
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                871,
                872
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              871,
              873
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          659,
          875
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 16,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          652,
          656
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
      "params": [],
      "range": [
        643,
        875
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 42
                      },
                      "start": {
                        "column": 9,
                        "line": 42
                      }
                    },
                    "range": [
                      904,
                      931
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            906,
                            912
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 42
                            },
                            "start": {
                              "column": 11,
                              "line": 42
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            915,
                            921
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 42
                            },
                            "start": {
                              "column": 20,
                              "line": 42
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            924,
                            931
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 42
                            },
                            "start": {
                              "column": 29,
                              "line": 42
                            }
                          }
                        }
                      ],
                      "range": [
                        906,
                        931
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 42
                        },
                        "start": {
                          "column": 11,
                          "line": 42
                        }
                      }
                    }
                  },
                  "range": [
                    903,
                    931
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    934,
                    935
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 42
                    },
                    "start": {
                      "column": 39,
                      "line": 42
                    }
                  }
                },
                "range": [
                  903,
                  935
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              899,
              936
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                941,
                942
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              941,
              943
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          {
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      982,
                      983
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    982,
                    984
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              1119,
                              1120
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 50
                              },
                              "start": {
                                "column": 12,
                                "line": 50
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "\"abc\"",
                            "value": "abc",
                            "range": [
                              1123,
                              1128
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 50
                              },
                              "start": {
                                "column": 16,
                                "line": 50
                              }
                            }
                          },
                          "range": [
                            1119,
                            1128
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 50
                            },
                            "start": {
                              "column": 12,
                              "line": 50
                            }
                          }
                        },
                        "range": [
                          1119,
                          1129
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 50
                          },
                          "start": {
                            "column": 12,
                            "line": 50
                          }
                        }
                      }
                    ],
                    "range": [
                      1105,
                      1139
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 51
                      },
                      "start": {
                        "column": 13,
                        "line": 49
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              1067,
                              1068
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 47
                              },
                              "start": {
                                "column": 12,
                                "line": 47
                              }
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1071,
                                  1072
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 47
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "slice",
                                "optional": false,
                                "range": [
                                  1073,
                                  1078
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 47
                                  }
                                }
                              },
                              "range": [
                                1071,
                                1078
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 47
                                },
                                "start": {
                                  "column": 16,
                                  "line": 47
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1071,
                              1080
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 47
                              },
                              "start": {
                                "column": 16,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            1067,
                            1080
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 47
                            },
                            "start": {
                              "column": 12,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1067,
                          1081
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 47
                          },
                          "start": {
                            "column": 12,
                            "line": 47
                          }
                        }
                      }
                    ],
                    "range": [
                      1053,
                      1091
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 48
                      },
                      "start": {
                        "column": 35,
                        "line": 46
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1037,
                          1038
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 46
                          },
                          "start": {
                            "column": 19,
                            "line": 46
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        1030,
                        1038
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 46
                        },
                        "start": {
                          "column": 12,
                          "line": 46
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"string\"",
                      "value": "string",
                      "range": [
                        1043,
                        1051
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 46
                        },
                        "start": {
                          "column": 25,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1030,
                      1051
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 46
                      },
                      "start": {
                        "column": 12,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1026,
                    1139
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1148,
                      1149
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1148,
                    1150
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                972,
                1167
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 17,
                  "line": 44
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                966,
                970
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 44
                },
                "start": {
                  "column": 11,
                  "line": 44
                }
              }
            },
            "range": [
              959,
              1167
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1172,
                1173
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            "range": [
              1172,
              1174
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "range": [
          893,
          1176
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 16,
            "line": 41
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          886,
          890
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 41
          },
          "start": {
            "column": 9,
            "line": 41
          }
        }
      },
      "params": [],
      "range": [
        877,
        1176
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 60
                      },
                      "start": {
                        "column": 9,
                        "line": 60
                      }
                    },
                    "range": [
                      1233,
                      1262
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1235,
                            1241
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 60
                            },
                            "start": {
                              "column": 11,
                              "line": 60
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1244,
                            1250
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 60
                            },
                            "start": {
                              "column": 20,
                              "line": 60
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            1253,
                            1262
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 60
                            },
                            "start": {
                              "column": 29,
                              "line": 60
                            }
                          }
                        }
                      ],
                      "range": [
                        1235,
                        1262
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 60
                        },
                        "start": {
                          "column": 11,
                          "line": 60
                        }
                      }
                    }
                  },
                  "range": [
                    1232,
                    1262
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1265,
                    1274
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 60
                    },
                    "start": {
                      "column": 41,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1232,
                  1274
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 60
                  },
                  "start": {
                    "column": 8,
                    "line": 60
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1228,
              1275
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1280,
                1281
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "range": [
              1280,
              1282
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1318,
                      1319
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 63
                      },
                      "start": {
                        "column": 8,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    1318,
                    1320
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                }
              ],
              "range": [
                1308,
                1367
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 11,
                  "line": 62
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1305,
                1306
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 62
                },
                "start": {
                  "column": 8,
                  "line": 62
                }
              }
            },
            "range": [
              1301,
              1367
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1372,
                1373
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "range": [
              1372,
              1374
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          1222,
          1408
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 14,
            "line": 59
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          1217,
          1219
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 59
          },
          "start": {
            "column": 9,
            "line": 59
          }
        }
      },
      "params": [],
      "range": [
        1208,
        1408
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 69
                      },
                      "start": {
                        "column": 9,
                        "line": 69
                      }
                    },
                    "range": [
                      1435,
                      1464
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1437,
                            1443
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 69
                            },
                            "start": {
                              "column": 11,
                              "line": 69
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1446,
                            1452
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 69
                            },
                            "start": {
                              "column": 20,
                              "line": 69
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            1455,
                            1464
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 69
                            },
                            "start": {
                              "column": 29,
                              "line": 69
                            }
                          }
                        }
                      ],
                      "range": [
                        1437,
                        1464
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 69
                        },
                        "start": {
                          "column": 11,
                          "line": 69
                        }
                      }
                    }
                  },
                  "range": [
                    1434,
                    1464
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1467,
                    1476
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 69
                    },
                    "start": {
                      "column": 41,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1434,
                  1476
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1430,
              1477
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1482,
                1483
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 70
                },
                "start": {
                  "column": 4,
                  "line": 70
                }
              }
            },
            "range": [
              1482,
              1484
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 70
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1540,
                      1541
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1540,
                    1542
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                }
              ],
              "range": [
                1530,
                1580
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 31,
                  "line": 71
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1514,
                    1515
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 71
                    },
                    "start": {
                      "column": 15,
                      "line": 71
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1507,
                  1515
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1520,
                  1528
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 71
                  },
                  "start": {
                    "column": 21,
                    "line": 71
                  }
                }
              },
              "range": [
                1507,
                1528
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 71
                },
                "start": {
                  "column": 8,
                  "line": 71
                }
              }
            },
            "range": [
              1503,
              1580
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1585,
                1586
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "range": [
              1585,
              1587
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          }
        ],
        "range": [
          1424,
          1612
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 14,
            "line": 68
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          1419,
          1421
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 68
          },
          "start": {
            "column": 9,
            "line": 68
          }
        }
      },
      "params": [],
      "range": [
        1410,
        1612
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 78
                      },
                      "start": {
                        "column": 9,
                        "line": 78
                      }
                    },
                    "range": [
                      1639,
                      1668
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1641,
                            1647
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 78
                            },
                            "start": {
                              "column": 11,
                              "line": 78
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1650,
                            1656
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 78
                            },
                            "start": {
                              "column": 20,
                              "line": 78
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            1659,
                            1668
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 78
                            },
                            "start": {
                              "column": 29,
                              "line": 78
                            }
                          }
                        }
                      ],
                      "range": [
                        1641,
                        1668
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 78
                        },
                        "start": {
                          "column": 11,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    1638,
                    1668
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 78
                    },
                    "start": {
                      "column": 8,
                      "line": 78
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1671,
                    1680
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 78
                    },
                    "start": {
                      "column": 41,
                      "line": 78
                    }
                  }
                },
                "range": [
                  1638,
                  1680
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 78
                  },
                  "start": {
                    "column": 8,
                    "line": 78
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1634,
              1681
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1686,
                1687
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
                }
              }
            },
            "range": [
              1686,
              1688
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    1725,
                    1732
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 81
                    },
                    "start": {
                      "column": 8,
                      "line": 81
                    }
                  }
                }
              ],
              "range": [
                1715,
                1738
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 82
                },
                "start": {
                  "column": 12,
                  "line": 80
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1712,
                  1713
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 80
                  },
                  "start": {
                    "column": 9,
                    "line": 80
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                1711,
                1713
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 80
                },
                "start": {
                  "column": 8,
                  "line": 80
                }
              }
            },
            "range": [
              1707,
              1738
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1743,
                1744
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 83
                },
                "start": {
                  "column": 4,
                  "line": 83
                }
              }
            },
            "range": [
              1743,
              1745
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          }
        ],
        "range": [
          1628,
          1788
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 84
          },
          "start": {
            "column": 14,
            "line": 77
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          1623,
          1625
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 77
          },
          "start": {
            "column": 9,
            "line": 77
          }
        }
      },
      "params": [],
      "range": [
        1614,
        1788
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 77
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 87
                      },
                      "start": {
                        "column": 9,
                        "line": 87
                      }
                    },
                    "range": [
                      1815,
                      1844
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1817,
                            1823
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 87
                            },
                            "start": {
                              "column": 11,
                              "line": 87
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1826,
                            1832
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 87
                            },
                            "start": {
                              "column": 20,
                              "line": 87
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            1835,
                            1844
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 87
                            },
                            "start": {
                              "column": 29,
                              "line": 87
                            }
                          }
                        }
                      ],
                      "range": [
                        1817,
                        1844
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 87
                        },
                        "start": {
                          "column": 11,
                          "line": 87
                        }
                      }
                    }
                  },
                  "range": [
                    1814,
                    1844
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 87
                    },
                    "start": {
                      "column": 8,
                      "line": 87
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    1847,
                    1856
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 87
                    },
                    "start": {
                      "column": 41,
                      "line": 87
                    }
                  }
                },
                "range": [
                  1814,
                  1856
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 87
                  },
                  "start": {
                    "column": 8,
                    "line": 87
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1810,
              1857
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1862,
                1863
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            "range": [
              1862,
              1864
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1921,
                      1922
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 90
                      },
                      "start": {
                        "column": 8,
                        "line": 90
                      }
                    }
                  },
                  "range": [
                    1921,
                    1923
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                }
              ],
              "range": [
                1911,
                1972
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 91
                },
                "start": {
                  "column": 32,
                  "line": 89
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1894,
                    1895
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 89
                    },
                    "start": {
                      "column": 15,
                      "line": 89
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1887,
                  1895
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 89
                  },
                  "start": {
                    "column": 8,
                    "line": 89
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"boolean\"",
                "value": "boolean",
                "range": [
                  1900,
                  1909
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 89
                  },
                  "start": {
                    "column": 21,
                    "line": 89
                  }
                }
              },
              "range": [
                1887,
                1909
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 89
                },
                "start": {
                  "column": 8,
                  "line": 89
                }
              }
            },
            "range": [
              1883,
              1972
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1977,
                1978
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 92
                },
                "start": {
                  "column": 4,
                  "line": 92
                }
              }
            },
            "range": [
              1977,
              1979
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 92
              }
            }
          }
        ],
        "range": [
          1804,
          1995
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 14,
            "line": 86
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          1799,
          1801
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 86
          },
          "start": {
            "column": 9,
            "line": 86
          }
        }
      },
      "params": [],
      "range": [
        1790,
        1995
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2157,
                      2158
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 100
                      },
                      "start": {
                        "column": 8,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    2157,
                    2159
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 100
                    },
                    "start": {
                      "column": 8,
                      "line": 100
                    }
                  }
                }
              ],
              "range": [
                2147,
                2185
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 101
                },
                "start": {
                  "column": 9,
                  "line": 99
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2097,
                      2098
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 97
                      },
                      "start": {
                        "column": 8,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    2097,
                    2099
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 97
                    },
                    "start": {
                      "column": 8,
                      "line": 97
                    }
                  }
                }
              ],
              "range": [
                2087,
                2137
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 98
                },
                "start": {
                  "column": 56,
                  "line": 96
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2046,
                      2047
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 96
                      },
                      "start": {
                        "column": 15,
                        "line": 96
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    2039,
                    2047
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 96
                    },
                    "start": {
                      "column": 8,
                      "line": 96
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    2052,
                    2060
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 96
                    },
                    "start": {
                      "column": 21,
                      "line": 96
                    }
                  }
                },
                "range": [
                  2039,
                  2060
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 96
                  },
                  "start": {
                    "column": 8,
                    "line": 96
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2071,
                      2072
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 96
                      },
                      "start": {
                        "column": 40,
                        "line": 96
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    2064,
                    2072
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 96
                    },
                    "start": {
                      "column": 33,
                      "line": 96
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    2077,
                    2085
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 96
                    },
                    "start": {
                      "column": 46,
                      "line": 96
                    }
                  }
                },
                "range": [
                  2064,
                  2085
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 96
                  },
                  "start": {
                    "column": 33,
                    "line": 96
                  }
                }
              },
              "range": [
                2039,
                2085
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 96
                },
                "start": {
                  "column": 8,
                  "line": 96
                }
              }
            },
            "range": [
              2035,
              2185
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                2190,
                2191
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 102
                }
              }
            },
            "range": [
              2190,
              2192
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          }
        ],
        "range": [
          2029,
          2214
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 103
          },
          "start": {
            "column": 32,
            "line": 95
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          2006,
          2008
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 95
          },
          "start": {
            "column": 9,
            "line": 95
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 95
              },
              "start": {
                "column": 13,
                "line": 95
              }
            },
            "range": [
              2010,
              2027
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2012,
                    2018
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 95
                    },
                    "start": {
                      "column": 15,
                      "line": 95
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2021,
                    2027
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 95
                    },
                    "start": {
                      "column": 24,
                      "line": 95
                    }
                  }
                }
              ],
              "range": [
                2012,
                2027
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 95
                },
                "start": {
                  "column": 15,
                  "line": 95
                }
              }
            }
          },
          "range": [
            2009,
            2027
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 95
            },
            "start": {
              "column": 12,
              "line": 95
            }
          }
        }
      ],
      "range": [
        1997,
        2214
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 103
        },
        "start": {
          "column": 0,
          "line": 95
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 106
                      },
                      "start": {
                        "column": 9,
                        "line": 106
                      }
                    },
                    "range": [
                      2241,
                      2268
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2243,
                            2249
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 106
                            },
                            "start": {
                              "column": 11,
                              "line": 106
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            2252,
                            2261
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 106
                            },
                            "start": {
                              "column": 20,
                              "line": 106
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            2264,
                            2268
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 106
                            },
                            "start": {
                              "column": 32,
                              "line": 106
                            }
                          }
                        }
                      ],
                      "range": [
                        2243,
                        2268
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 106
                        },
                        "start": {
                          "column": 11,
                          "line": 106
                        }
                      }
                    }
                  },
                  "range": [
                    2240,
                    2268
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 106
                    },
                    "start": {
                      "column": 8,
                      "line": 106
                    }
                  }
                },
                "init": null,
                "range": [
                  2240,
                  2268
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 106
                  },
                  "start": {
                    "column": 8,
                    "line": 106
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2236,
              2269
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 106
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2274,
                      2275
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 107
                      },
                      "start": {
                        "column": 4,
                        "line": 107
                      }
                    }
                  },
                  "range": [
                    2274,
                    2276
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 107
                    },
                    "start": {
                      "column": 4,
                      "line": 107
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "range": [
                    2277,
                    2282
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 107
                    },
                    "start": {
                      "column": 7,
                      "line": 107
                    }
                  }
                },
                "range": [
                  2274,
                  2282
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 107
                  },
                  "start": {
                    "column": 4,
                    "line": 107
                  }
                }
              },
              "optional": false,
              "range": [
                2274,
                2284
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 107
                },
                "start": {
                  "column": 4,
                  "line": 107
                }
              }
            },
            "range": [
              2274,
              2285
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 107
              },
              "start": {
                "column": 4,
                "line": 107
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2290,
                  2291
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 108
                  },
                  "start": {
                    "column": 4,
                    "line": 108
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  2294,
                  2296
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 108
                  },
                  "start": {
                    "column": 8,
                    "line": 108
                  }
                }
              },
              "range": [
                2290,
                2296
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 108
                },
                "start": {
                  "column": 4,
                  "line": 108
                }
              }
            },
            "range": [
              2290,
              2297
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 108
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2302,
                      2303
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 109
                      },
                      "start": {
                        "column": 4,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    2302,
                    2304
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 109
                    },
                    "start": {
                      "column": 4,
                      "line": 109
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "range": [
                    2305,
                    2310
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 109
                    },
                    "start": {
                      "column": 7,
                      "line": 109
                    }
                  }
                },
                "range": [
                  2302,
                  2310
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 109
                  },
                  "start": {
                    "column": 4,
                    "line": 109
                  }
                }
              },
              "optional": false,
              "range": [
                2302,
                2312
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 109
                },
                "start": {
                  "column": 4,
                  "line": 109
                }
              }
            },
            "range": [
              2302,
              2313
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2318,
                  2319
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 110
                  },
                  "start": {
                    "column": 4,
                    "line": 110
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "range": [
                  2322,
                  2331
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 110
                  },
                  "start": {
                    "column": 8,
                    "line": 110
                  }
                }
              },
              "range": [
                2318,
                2331
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 110
                },
                "start": {
                  "column": 4,
                  "line": 110
                }
              }
            },
            "range": [
              2318,
              2332
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 110
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2337,
                      2338
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 111
                      },
                      "start": {
                        "column": 4,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    2337,
                    2339
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 111
                    },
                    "start": {
                      "column": 4,
                      "line": 111
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "range": [
                    2340,
                    2345
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 111
                    },
                    "start": {
                      "column": 7,
                      "line": 111
                    }
                  }
                },
                "range": [
                  2337,
                  2345
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 111
                  },
                  "start": {
                    "column": 4,
                    "line": 111
                  }
                }
              },
              "optional": false,
              "range": [
                2337,
                2347
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 111
                },
                "start": {
                  "column": 4,
                  "line": 111
                }
              }
            },
            "range": [
              2337,
              2348
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 111
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2353,
                  2354
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 112
                  },
                  "start": {
                    "column": 4,
                    "line": 112
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  2357,
                  2361
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 112
                  },
                  "start": {
                    "column": 8,
                    "line": 112
                  }
                }
              },
              "range": [
                2353,
                2361
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 112
                },
                "start": {
                  "column": 4,
                  "line": 112
                }
              }
            },
            "range": [
              2353,
              2362
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 112
              },
              "start": {
                "column": 4,
                "line": 112
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2367,
                      2368
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 113
                      },
                      "start": {
                        "column": 4,
                        "line": 113
                      }
                    }
                  },
                  "range": [
                    2367,
                    2369
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 113
                    },
                    "start": {
                      "column": 4,
                      "line": 113
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "range": [
                    2370,
                    2375
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 113
                    },
                    "start": {
                      "column": 7,
                      "line": 113
                    }
                  }
                },
                "range": [
                  2367,
                  2375
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 113
                  },
                  "start": {
                    "column": 4,
                    "line": 113
                  }
                }
              },
              "optional": false,
              "range": [
                2367,
                2377
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 113
                },
                "start": {
                  "column": 4,
                  "line": 113
                }
              }
            },
            "range": [
              2367,
              2378
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 113
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2383,
                  2384
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 114
                  },
                  "start": {
                    "column": 4,
                    "line": 114
                  }
                }
              },
              "right": {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    2405,
                    2414
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 114
                    },
                    "start": {
                      "column": 26,
                      "line": 114
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        2388,
                        2397
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 114
                        },
                        "start": {
                          "column": 9,
                          "line": 114
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        2400,
                        2404
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 114
                        },
                        "start": {
                          "column": 21,
                          "line": 114
                        }
                      }
                    }
                  ],
                  "range": [
                    2388,
                    2404
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 114
                    },
                    "start": {
                      "column": 9,
                      "line": 114
                    }
                  }
                },
                "range": [
                  2387,
                  2414
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 114
                  },
                  "start": {
                    "column": 8,
                    "line": 114
                  }
                }
              },
              "range": [
                2383,
                2414
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 114
                },
                "start": {
                  "column": 4,
                  "line": 114
                }
              }
            },
            "range": [
              2383,
              2415
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 114
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2420,
                      2421
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 115
                      },
                      "start": {
                        "column": 4,
                        "line": 115
                      }
                    }
                  },
                  "range": [
                    2420,
                    2422
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 115
                    },
                    "start": {
                      "column": 4,
                      "line": 115
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "range": [
                    2423,
                    2428
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 115
                    },
                    "start": {
                      "column": 7,
                      "line": 115
                    }
                  }
                },
                "range": [
                  2420,
                  2428
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 115
                  },
                  "start": {
                    "column": 4,
                    "line": 115
                  }
                }
              },
              "optional": false,
              "range": [
                2420,
                2430
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 115
                },
                "start": {
                  "column": 4,
                  "line": 115
                }
              }
            },
            "range": [
              2420,
              2431
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 115
              },
              "start": {
                "column": 4,
                "line": 115
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2436,
                  2437
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 116
                  },
                  "start": {
                    "column": 4,
                    "line": 116
                  }
                }
              },
              "right": {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    2460,
                    2462
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 116
                    },
                    "start": {
                      "column": 28,
                      "line": 116
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        2441,
                        2447
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 116
                        },
                        "start": {
                          "column": 9,
                          "line": 116
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        2450,
                        2459
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 116
                        },
                        "start": {
                          "column": 18,
                          "line": 116
                        }
                      }
                    }
                  ],
                  "range": [
                    2441,
                    2459
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 116
                    },
                    "start": {
                      "column": 9,
                      "line": 116
                    }
                  }
                },
                "range": [
                  2440,
                  2462
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 116
                  },
                  "start": {
                    "column": 8,
                    "line": 116
                  }
                }
              },
              "range": [
                2436,
                2462
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 116
                },
                "start": {
                  "column": 4,
                  "line": 116
                }
              }
            },
            "range": [
              2436,
              2463
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 116
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2468,
                      2469
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 117
                      },
                      "start": {
                        "column": 4,
                        "line": 117
                      }
                    }
                  },
                  "range": [
                    2468,
                    2470
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 117
                    },
                    "start": {
                      "column": 4,
                      "line": 117
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "range": [
                    2471,
                    2476
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 117
                    },
                    "start": {
                      "column": 7,
                      "line": 117
                    }
                  }
                },
                "range": [
                  2468,
                  2476
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 117
                  },
                  "start": {
                    "column": 4,
                    "line": 117
                  }
                }
              },
              "optional": false,
              "range": [
                2468,
                2478
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 117
                },
                "start": {
                  "column": 4,
                  "line": 117
                }
              }
            },
            "range": [
              2468,
              2479
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 117
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2484,
                  2485
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 118
                  },
                  "start": {
                    "column": 4,
                    "line": 118
                  }
                }
              },
              "right": {
                "type": "TSTypeAssertion",
                "expression": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    2503,
                    2505
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 118
                    },
                    "start": {
                      "column": 23,
                      "line": 118
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        2489,
                        2495
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 118
                        },
                        "start": {
                          "column": 9,
                          "line": 118
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        2498,
                        2502
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 118
                        },
                        "start": {
                          "column": 18,
                          "line": 118
                        }
                      }
                    }
                  ],
                  "range": [
                    2489,
                    2502
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 118
                    },
                    "start": {
                      "column": 9,
                      "line": 118
                    }
                  }
                },
                "range": [
                  2488,
                  2505
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 118
                  },
                  "start": {
                    "column": 8,
                    "line": 118
                  }
                }
              },
              "range": [
                2484,
                2505
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 118
                },
                "start": {
                  "column": 4,
                  "line": 118
                }
              }
            },
            "range": [
              2484,
              2506
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 118
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2511,
                      2512
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 119
                      },
                      "start": {
                        "column": 4,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    2511,
                    2513
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 119
                    },
                    "start": {
                      "column": 4,
                      "line": 119
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "range": [
                    2514,
                    2519
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 119
                    },
                    "start": {
                      "column": 7,
                      "line": 119
                    }
                  }
                },
                "range": [
                  2511,
                  2519
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 119
                  },
                  "start": {
                    "column": 4,
                    "line": 119
                  }
                }
              },
              "optional": false,
              "range": [
                2511,
                2521
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 119
                },
                "start": {
                  "column": 4,
                  "line": 119
                }
              }
            },
            "range": [
              2511,
              2522
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 119
              }
            }
          }
        ],
        "range": [
          2230,
          2524
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 120
          },
          "start": {
            "column": 14,
            "line": 105
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          2225,
          2227
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 105
          },
          "start": {
            "column": 9,
            "line": 105
          }
        }
      },
      "params": [],
      "range": [
        2216,
        2524
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 105
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 123
                      },
                      "start": {
                        "column": 9,
                        "line": 123
                      }
                    },
                    "range": [
                      2551,
                      2559
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2553,
                        2559
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 123
                        },
                        "start": {
                          "column": 11,
                          "line": 123
                        }
                      }
                    }
                  },
                  "range": [
                    2550,
                    2559
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 123
                    },
                    "start": {
                      "column": 8,
                      "line": 123
                    }
                  }
                },
                "init": null,
                "range": [
                  2550,
                  2559
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 123
                  },
                  "start": {
                    "column": 8,
                    "line": 123
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2546,
              2560
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "TSNonNullExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2565,
                      2566
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 124
                      },
                      "start": {
                        "column": 4,
                        "line": 124
                      }
                    }
                  },
                  "range": [
                    2565,
                    2567
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 124
                    },
                    "start": {
                      "column": 4,
                      "line": 124
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "slice",
                  "optional": false,
                  "range": [
                    2568,
                    2573
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 124
                    },
                    "start": {
                      "column": 7,
                      "line": 124
                    }
                  }
                },
                "range": [
                  2565,
                  2573
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 124
                  },
                  "start": {
                    "column": 4,
                    "line": 124
                  }
                }
              },
              "optional": false,
              "range": [
                2565,
                2575
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 124
                },
                "start": {
                  "column": 4,
                  "line": 124
                }
              }
            },
            "range": [
              2565,
              2576
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 124
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          }
        ],
        "range": [
          2540,
          2578
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 125
          },
          "start": {
            "column": 14,
            "line": 122
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          2535,
          2537
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 122
          },
          "start": {
            "column": 9,
            "line": 122
          }
        }
      },
      "params": [],
      "range": [
        2526,
        2578
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 122
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 126
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
