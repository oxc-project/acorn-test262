__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    2823
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          40,
          57
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                46,
                51
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              },
              "range": [
                51,
                54
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    53,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                },
                "range": [
                  53,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              46,
              55
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          32,
          36
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        },
        "range": [
          36,
          39
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                37,
                38
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              37,
              38
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        22,
        57
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          94,
          143
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                100,
                104
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              },
              "range": [
                104,
                115
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"integer\"",
                  "value": "integer",
                  "range": [
                    106,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 10,
                      "line": 8
                    }
                  }
                },
                "range": [
                  106,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              100,
              116
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "multipleOf",
              "optional": false,
              "range": [
                121,
                131
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              },
              "range": [
                132,
                140
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  134,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              121,
              141
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 35,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              81,
              85
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 22,
                "line": 7
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              85,
              93
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  86,
                  92
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 27,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            }
          },
          "range": [
            81,
            93
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 7
            },
            "start": {
              "column": 22,
              "line": 7
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Int",
        "optional": false,
        "range": [
          69,
          72
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        59,
        143
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          182,
          205
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                188,
                192
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              },
              "range": [
                192,
                202
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    194,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 13
                    },
                    "start": {
                      "column": 10,
                      "line": 13
                    }
                  }
                },
                "range": [
                  194,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              188,
              203
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 37,
            "line": 12
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              169,
              173
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 12
              },
              "start": {
                "column": 24,
                "line": 12
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              173,
              181
            ],
            "params": [
              {
                "type": "TSNumberKeyword",
                "range": [
                  174,
                  180
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 12
                  },
                  "start": {
                    "column": 29,
                    "line": 12
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 12
              },
              "start": {
                "column": 28,
                "line": 12
              }
            }
          },
          "range": [
            169,
            181
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 12
            },
            "start": {
              "column": 24,
              "line": 12
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Float",
        "optional": false,
        "range": [
          155,
          160
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "range": [
        145,
        205
      ],
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          242,
          286
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                248,
                252
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              },
              "range": [
                252,
                262
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    254,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                },
                "range": [
                  254,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              248,
              263
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "format",
              "optional": false,
              "range": [
                268,
                274
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              },
              "range": [
                275,
                283
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  277,
                  283
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 18
                  },
                  "start": {
                    "column": 13,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              268,
              284
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 35,
            "line": 16
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              229,
              233
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 16
              },
              "start": {
                "column": 22,
                "line": 16
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              233,
              241
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  234,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 16
                  },
                  "start": {
                    "column": 27,
                    "line": 16
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 16
              },
              "start": {
                "column": 26,
                "line": 16
              }
            }
          },
          "range": [
            229,
            241
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 16
            },
            "start": {
              "column": 22,
              "line": 16
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Str",
        "optional": false,
        "range": [
          217,
          220
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "range": [
        207,
        286
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          325,
          349
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                331,
                335
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
                }
              },
              "range": [
                335,
                346
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"boolean\"",
                  "value": "boolean",
                  "range": [
                    337,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 10,
                      "line": 22
                    }
                  }
                },
                "range": [
                  337,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 10,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              331,
              347
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 37,
            "line": 21
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "range": [
              311,
              315
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 21
              },
              "start": {
                "column": 23,
                "line": 21
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              315,
              324
            ],
            "params": [
              {
                "type": "TSBooleanKeyword",
                "range": [
                  316,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 21
                  },
                  "start": {
                    "column": 28,
                    "line": 21
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 21
              },
              "start": {
                "column": 27,
                "line": 21
              }
            }
          },
          "range": [
            311,
            324
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 21
            },
            "start": {
              "column": 23,
              "line": 21
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bool",
        "optional": false,
        "range": [
          298,
          302
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 10,
            "line": 21
          }
        }
      },
      "range": [
        288,
        349
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Primitive",
        "optional": false,
        "range": [
          356,
          365
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Int",
              "optional": false,
              "range": [
                368,
                371
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 25
                },
                "start": {
                  "column": 17,
                  "line": 25
                }
              }
            },
            "range": [
              368,
              371
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 25
              },
              "start": {
                "column": 17,
                "line": 25
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Float",
              "optional": false,
              "range": [
                374,
                379
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 25
                },
                "start": {
                  "column": 23,
                  "line": 25
                }
              }
            },
            "range": [
              374,
              379
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 25
              },
              "start": {
                "column": 23,
                "line": 25
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Str",
              "optional": false,
              "range": [
                382,
                385
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 25
                },
                "start": {
                  "column": 31,
                  "line": 25
                }
              }
            },
            "range": [
              382,
              385
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 25
              },
              "start": {
                "column": 31,
                "line": 25
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bool",
              "optional": false,
              "range": [
                388,
                392
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 25
                },
                "start": {
                  "column": 37,
                  "line": 25
                }
              }
            },
            "range": [
              388,
              392
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 25
              },
              "start": {
                "column": 37,
                "line": 25
              }
            }
          }
        ],
        "range": [
          368,
          392
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 25
          },
          "start": {
            "column": 17,
            "line": 25
          }
        }
      },
      "range": [
        351,
        393
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              },
              "range": [
                404,
                415
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Primitive",
                  "optional": false,
                  "range": [
                    406,
                    415
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 27
                    },
                    "start": {
                      "column": 11,
                      "line": 27
                    }
                  }
                },
                "range": [
                  406,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 27
                  },
                  "start": {
                    "column": 11,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              401,
              415
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    424,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 28
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"number\"",
                  "value": "number",
                  "range": [
                    430,
                    438
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 28
                    },
                    "start": {
                      "column": 10,
                      "line": 28
                    }
                  }
                },
                "range": [
                  424,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    444,
                    449
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    451,
                    453
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 29
                    },
                    "start": {
                      "column": 11,
                      "line": 29
                    }
                  }
                },
                "range": [
                  444,
                  453
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multipleOf",
                  "optional": false,
                  "range": [
                    459,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 30
                    },
                    "start": {
                      "column": 4,
                      "line": 30
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    471,
                    472
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 30
                    },
                    "start": {
                      "column": 16,
                      "line": 30
                    }
                  }
                },
                "range": [
                  459,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "format",
                  "optional": false,
                  "range": [
                    497,
                    503
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 31
                    },
                    "start": {
                      "column": 4,
                      "line": 31
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"what?\"",
                  "value": "what?",
                  "range": [
                    505,
                    512
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 31
                    },
                    "start": {
                      "column": 12,
                      "line": 31
                    }
                  }
                },
                "range": [
                  497,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              }
            ],
            "range": [
              418,
              514
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 32
              },
              "start": {
                "column": 23,
                "line": 27
              }
            }
          },
          "range": [
            401,
            514
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 32
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        395,
        514
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DisjointDiscriminants",
        "optional": false,
        "range": [
          522,
          543
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 35
          },
          "start": {
            "column": 5,
            "line": 35
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "range": [
                    548,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 35
                    },
                    "start": {
                      "column": 31,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 35
                    },
                    "start": {
                      "column": 33,
                      "line": 35
                    }
                  },
                  "range": [
                    550,
                    558
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'left'",
                      "value": "left",
                      "range": [
                        552,
                        558
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 35
                        },
                        "start": {
                          "column": 35,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      552,
                      558
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 35
                      },
                      "start": {
                        "column": 35,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  548,
                  559
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 35
                  },
                  "start": {
                    "column": 31,
                    "line": 35
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "range": [
                    560,
                    562
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 35
                    },
                    "start": {
                      "column": 43,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 35
                    },
                    "start": {
                      "column": 45,
                      "line": 35
                    }
                  },
                  "range": [
                    562,
                    568
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        564,
                        568
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 35
                        },
                        "start": {
                          "column": 47,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      564,
                      568
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 35
                      },
                      "start": {
                        "column": 47,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  560,
                  569
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 35
                  },
                  "start": {
                    "column": 43,
                    "line": 35
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "range": [
                    570,
                    572
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 35
                    },
                    "start": {
                      "column": 53,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 35
                    },
                    "start": {
                      "column": 55,
                      "line": 35
                    }
                  },
                  "range": [
                    572,
                    580
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      574,
                      580
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 35
                      },
                      "start": {
                        "column": 57,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  570,
                  580
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 35
                  },
                  "start": {
                    "column": 53,
                    "line": 35
                  }
                }
              }
            ],
            "range": [
              546,
              582
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 35
              },
              "start": {
                "column": 29,
                "line": 35
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "range": [
                    587,
                    589
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 35
                    },
                    "start": {
                      "column": 70,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 35
                    },
                    "start": {
                      "column": 72,
                      "line": 35
                    }
                  },
                  "range": [
                    589,
                    598
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'right'",
                      "value": "right",
                      "range": [
                        591,
                        598
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 35
                        },
                        "start": {
                          "column": 74,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      591,
                      598
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 35
                      },
                      "start": {
                        "column": 74,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  587,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 35
                  },
                  "start": {
                    "column": 70,
                    "line": 35
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "range": [
                    600,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 85,
                      "line": 35
                    },
                    "start": {
                      "column": 83,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 35
                    },
                    "start": {
                      "column": 85,
                      "line": 35
                    }
                  },
                  "range": [
                    602,
                    609
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        604,
                        609
                      ],
                      "loc": {
                        "end": {
                          "column": 92,
                          "line": 35
                        },
                        "start": {
                          "column": 87,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      604,
                      609
                    ],
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 35
                      },
                      "start": {
                        "column": 87,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  600,
                  610
                ],
                "loc": {
                  "end": {
                    "column": 93,
                    "line": 35
                  },
                  "start": {
                    "column": 83,
                    "line": 35
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p4",
                  "optional": false,
                  "range": [
                    611,
                    613
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 35
                    },
                    "start": {
                      "column": 94,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 35
                    },
                    "start": {
                      "column": 96,
                      "line": 35
                    }
                  },
                  "range": [
                    613,
                    621
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      615,
                      621
                    ],
                    "loc": {
                      "end": {
                        "column": 104,
                        "line": 35
                      },
                      "start": {
                        "column": 98,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  611,
                  621
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 35
                  },
                  "start": {
                    "column": 94,
                    "line": 35
                  }
                }
              }
            ],
            "range": [
              585,
              623
            ],
            "loc": {
              "end": {
                "column": 106,
                "line": 35
              },
              "start": {
                "column": 68,
                "line": 35
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "range": [
                    628,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 113,
                      "line": 35
                    },
                    "start": {
                      "column": 111,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 121,
                      "line": 35
                    },
                    "start": {
                      "column": 113,
                      "line": 35
                    }
                  },
                  "range": [
                    630,
                    638
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'left'",
                      "value": "left",
                      "range": [
                        632,
                        638
                      ],
                      "loc": {
                        "end": {
                          "column": 121,
                          "line": 35
                        },
                        "start": {
                          "column": 115,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      632,
                      638
                    ],
                    "loc": {
                      "end": {
                        "column": 121,
                        "line": 35
                      },
                      "start": {
                        "column": 115,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  628,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 122,
                    "line": 35
                  },
                  "start": {
                    "column": 111,
                    "line": 35
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "range": [
                    640,
                    642
                  ],
                  "loc": {
                    "end": {
                      "column": 125,
                      "line": 35
                    },
                    "start": {
                      "column": 123,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 134,
                      "line": 35
                    },
                    "start": {
                      "column": 125,
                      "line": 35
                    }
                  },
                  "range": [
                    642,
                    651
                  ],
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "range": [
                      644,
                      651
                    ],
                    "loc": {
                      "end": {
                        "column": 134,
                        "line": 35
                      },
                      "start": {
                        "column": 127,
                        "line": 35
                      }
                    }
                  }
                },
                "range": [
                  640,
                  651
                ],
                "loc": {
                  "end": {
                    "column": 134,
                    "line": 35
                  },
                  "start": {
                    "column": 123,
                    "line": 35
                  }
                }
              }
            ],
            "range": [
              626,
              653
            ],
            "loc": {
              "end": {
                "column": 136,
                "line": 35
              },
              "start": {
                "column": 109,
                "line": 35
              }
            }
          }
        ],
        "range": [
          546,
          653
        ],
        "loc": {
          "end": {
            "column": 136,
            "line": 35
          },
          "start": {
            "column": 29,
            "line": 35
          }
        }
      },
      "range": [
        517,
        654
      ],
      "loc": {
        "end": {
          "column": 137,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 38
                },
                "start": {
                  "column": 7,
                  "line": 38
                }
              },
              "range": [
                739,
                762
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisjointDiscriminants",
                  "optional": false,
                  "range": [
                    741,
                    762
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 38
                    },
                    "start": {
                      "column": 9,
                      "line": 38
                    }
                  }
                },
                "range": [
                  741,
                  762
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 38
                  },
                  "start": {
                    "column": 9,
                    "line": 38
                  }
                }
              }
            },
            "range": [
              738,
              762
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 38
              },
              "start": {
                "column": 6,
                "line": 38
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
                  "name": "p1",
                  "optional": false,
                  "range": [
                    771,
                    773
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 39
                    },
                    "start": {
                      "column": 4,
                      "line": 39
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'left'",
                  "value": "left",
                  "range": [
                    775,
                    781
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                },
                "range": [
                  771,
                  781
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "range": [
                    787,
                    789
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 40
                    },
                    "start": {
                      "column": 4,
                      "line": 40
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    791,
                    796
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                "range": [
                  787,
                  796
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "range": [
                    802,
                    804
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 41
                    },
                    "start": {
                      "column": 4,
                      "line": 41
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    806,
                    808
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                },
                "range": [
                  802,
                  808
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p4",
                  "optional": false,
                  "range": [
                    814,
                    816
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 42
                    },
                    "start": {
                      "column": 4,
                      "line": 42
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    818,
                    825
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                },
                "range": [
                  814,
                  825
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 42
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              }
            ],
            "range": [
              765,
              827
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 43
              },
              "start": {
                "column": 33,
                "line": 38
              }
            }
          },
          "range": [
            738,
            827
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 43
            },
            "start": {
              "column": 6,
              "line": 38
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        732,
        828
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 46
                },
                "start": {
                  "column": 7,
                  "line": 46
                }
              },
              "range": [
                901,
                924
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisjointDiscriminants",
                  "optional": false,
                  "range": [
                    903,
                    924
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 46
                    },
                    "start": {
                      "column": 9,
                      "line": 46
                    }
                  }
                },
                "range": [
                  903,
                  924
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 46
                  },
                  "start": {
                    "column": 9,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              900,
              924
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 46
              },
              "start": {
                "column": 6,
                "line": 46
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
                  "name": "p1",
                  "optional": false,
                  "range": [
                    933,
                    935
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'left'",
                  "value": "left",
                  "range": [
                    937,
                    943
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                "range": [
                  933,
                  943
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "range": [
                    949,
                    951
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 48
                    },
                    "start": {
                      "column": 4,
                      "line": 48
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    953,
                    957
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                },
                "range": [
                  949,
                  957
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "range": [
                    963,
                    965
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 49
                    },
                    "start": {
                      "column": 4,
                      "line": 49
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    967,
                    969
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                "range": [
                  963,
                  969
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p4",
                  "optional": false,
                  "range": [
                    975,
                    977
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 50
                    },
                    "start": {
                      "column": 4,
                      "line": 50
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    979,
                    986
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 50
                    }
                  }
                },
                "range": [
                  975,
                  986
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              }
            ],
            "range": [
              927,
              988
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 51
              },
              "start": {
                "column": 33,
                "line": 46
              }
            }
          },
          "range": [
            900,
            988
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 51
            },
            "start": {
              "column": 6,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        894,
        989
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 54
                },
                "start": {
                  "column": 7,
                  "line": 54
                }
              },
              "range": [
                1071,
                1094
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DisjointDiscriminants",
                  "optional": false,
                  "range": [
                    1073,
                    1094
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 54
                    },
                    "start": {
                      "column": 9,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1073,
                  1094
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 54
                  },
                  "start": {
                    "column": 9,
                    "line": 54
                  }
                }
              }
            },
            "range": [
              1070,
              1094
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 54
              },
              "start": {
                "column": 6,
                "line": 54
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
                  "name": "p1",
                  "optional": false,
                  "range": [
                    1103,
                    1105
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 55
                    },
                    "start": {
                      "column": 4,
                      "line": 55
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'right'",
                  "value": "right",
                  "range": [
                    1107,
                    1114
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1103,
                  1114
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "range": [
                    1120,
                    1122
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 56
                    },
                    "start": {
                      "column": 4,
                      "line": 56
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    1124,
                    1129
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1120,
                  1129
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "range": [
                    1135,
                    1137
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 57
                    },
                    "start": {
                      "column": 4,
                      "line": 57
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "42",
                  "value": 42,
                  "range": [
                    1139,
                    1141
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1135,
                  1141
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p4",
                  "optional": false,
                  "range": [
                    1147,
                    1149
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 58
                    },
                    "start": {
                      "column": 4,
                      "line": 58
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    1151,
                    1158
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1147,
                  1158
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              }
            ],
            "range": [
              1097,
              1160
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 59
              },
              "start": {
                "column": 33,
                "line": 54
              }
            }
          },
          "range": [
            1070,
            1160
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 59
            },
            "start": {
              "column": 6,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1064,
        1161
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1202,
          1253
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                1208,
                1212
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 64
                },
                "start": {
                  "column": 8,
                  "line": 64
                }
              },
              "range": [
                1212,
                1235
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"A\"",
                      "value": "A",
                      "range": [
                        1214,
                        1217
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 64
                        },
                        "start": {
                          "column": 10,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1214,
                      1217
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 64
                      },
                      "start": {
                        "column": 10,
                        "line": 64
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"B\"",
                      "value": "B",
                      "range": [
                        1220,
                        1223
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 64
                        },
                        "start": {
                          "column": 16,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1220,
                      1223
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 64
                      },
                      "start": {
                        "column": 16,
                        "line": 64
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"C\"",
                      "value": "C",
                      "range": [
                        1226,
                        1229
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 64
                        },
                        "start": {
                          "column": 22,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1226,
                      1229
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 64
                      },
                      "start": {
                        "column": 22,
                        "line": 64
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"D\"",
                      "value": "D",
                      "range": [
                        1232,
                        1235
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 64
                        },
                        "start": {
                          "column": 28,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1232,
                      1235
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 64
                      },
                      "start": {
                        "column": 28,
                        "line": 64
                      }
                    }
                  }
                ],
                "range": [
                  1214,
                  1235
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 64
                  },
                  "start": {
                    "column": 10,
                    "line": 64
                  }
                }
              }
            },
            "range": [
              1208,
              1236
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                1241,
                1242
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 65
                },
                "start": {
                  "column": 5,
                  "line": 65
                }
              },
              "range": [
                1242,
                1250
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1244,
                  1250
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 65
                  },
                  "start": {
                    "column": 7,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              1241,
              1251
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 17,
            "line": 63
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Common",
        "optional": false,
        "range": [
          1195,
          1201
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 63
          },
          "start": {
            "column": 10,
            "line": 63
          }
        }
      },
      "range": [
        1185,
        1253
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1266,
          1300
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                1272,
                1276
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 68
                },
                "start": {
                  "column": 8,
                  "line": 68
                }
              },
              "range": [
                1276,
                1281
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"A\"",
                  "value": "A",
                  "range": [
                    1278,
                    1281
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 68
                    },
                    "start": {
                      "column": 10,
                      "line": 68
                    }
                  }
                },
                "range": [
                  1278,
                  1281
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 68
                  },
                  "start": {
                    "column": 10,
                    "line": 68
                  }
                }
              }
            },
            "range": [
              1272,
              1282
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1287,
                1288
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 69
                },
                "start": {
                  "column": 6,
                  "line": 69
                }
              },
              "range": [
                1289,
                1297
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1291,
                  1297
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 69
                  },
                  "start": {
                    "column": 8,
                    "line": 69
                  }
                }
              }
            },
            "range": [
              1287,
              1298
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 12,
            "line": 67
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          1264,
          1265
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 67
          },
          "start": {
            "column": 10,
            "line": 67
          }
        }
      },
      "range": [
        1254,
        1300
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1313,
          1347
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "range": [
                1319,
                1323
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 72
                },
                "start": {
                  "column": 8,
                  "line": 72
                }
              },
              "range": [
                1323,
                1328
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"B\"",
                  "value": "B",
                  "range": [
                    1325,
                    1328
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 72
                    },
                    "start": {
                      "column": 10,
                      "line": 72
                    }
                  }
                },
                "range": [
                  1325,
                  1328
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 72
                  },
                  "start": {
                    "column": 10,
                    "line": 72
                  }
                }
              }
            },
            "range": [
              1319,
              1329
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1334,
                1335
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 73
                },
                "start": {
                  "column": 6,
                  "line": 73
                }
              },
              "range": [
                1336,
                1344
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1338,
                  1344
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 73
                  }
                }
              }
            },
            "range": [
              1334,
              1345
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 12,
            "line": 71
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          1311,
          1312
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 71
          },
          "start": {
            "column": 10,
            "line": 71
          }
        }
      },
      "range": [
        1301,
        1347
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CommonWithOverlappingOptionals",
        "optional": false,
        "range": [
          1354,
          1384
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 76
          },
          "start": {
            "column": 5,
            "line": 76
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Common",
              "optional": false,
              "range": [
                1387,
                1393
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 76
                },
                "start": {
                  "column": 38,
                  "line": 76
                }
              }
            },
            "range": [
              1387,
              1393
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 76
              },
              "start": {
                "column": 38,
                "line": 76
              }
            }
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Common",
                  "optional": false,
                  "range": [
                    1397,
                    1403
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 76
                    },
                    "start": {
                      "column": 48,
                      "line": 76
                    }
                  }
                },
                "range": [
                  1397,
                  1403
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 76
                  },
                  "start": {
                    "column": 48,
                    "line": 76
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    1406,
                    1407
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 76
                    },
                    "start": {
                      "column": 57,
                      "line": 76
                    }
                  }
                },
                "range": [
                  1406,
                  1407
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 76
                  },
                  "start": {
                    "column": 57,
                    "line": 76
                  }
                }
              }
            ],
            "range": [
              1397,
              1407
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 76
              },
              "start": {
                "column": 48,
                "line": 76
              }
            }
          },
          {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Common",
                  "optional": false,
                  "range": [
                    1412,
                    1418
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 76
                    },
                    "start": {
                      "column": 63,
                      "line": 76
                    }
                  }
                },
                "range": [
                  1412,
                  1418
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 76
                  },
                  "start": {
                    "column": 63,
                    "line": 76
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "range": [
                    1421,
                    1422
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 76
                    },
                    "start": {
                      "column": 72,
                      "line": 76
                    }
                  }
                },
                "range": [
                  1421,
                  1422
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 76
                  },
                  "start": {
                    "column": 72,
                    "line": 76
                  }
                }
              }
            ],
            "range": [
              1412,
              1422
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 76
              },
              "start": {
                "column": 63,
                "line": 76
              }
            }
          }
        ],
        "range": [
          1387,
          1423
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 76
          },
          "start": {
            "column": 38,
            "line": 76
          }
        }
      },
      "range": [
        1349,
        1424
      ],
      "loc": {
        "end": {
          "column": 75,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 79
                },
                "start": {
                  "column": 8,
                  "line": 79
                }
              },
              "range": [
                1498,
                1530
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CommonWithOverlappingOptionals",
                  "optional": false,
                  "range": [
                    1500,
                    1530
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 79
                    },
                    "start": {
                      "column": 10,
                      "line": 79
                    }
                  }
                },
                "range": [
                  1500,
                  1530
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 79
                  },
                  "start": {
                    "column": 10,
                    "line": 79
                  }
                }
              }
            },
            "range": [
              1496,
              1530
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 79
              },
              "start": {
                "column": 6,
                "line": 79
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    1539,
                    1543
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 80
                    },
                    "start": {
                      "column": 4,
                      "line": 80
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"A\"",
                  "value": "A",
                  "range": [
                    1545,
                    1548
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 80
                    },
                    "start": {
                      "column": 10,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1539,
                  1548
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 80
                  },
                  "start": {
                    "column": 4,
                    "line": 80
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "range": [
                    1554,
                    1555
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 81
                    },
                    "start": {
                      "column": 4,
                      "line": 81
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1557,
                    1558
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 81
                    },
                    "start": {
                      "column": 7,
                      "line": 81
                    }
                  }
                },
                "range": [
                  1554,
                  1558
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 81
                  },
                  "start": {
                    "column": 4,
                    "line": 81
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    1564,
                    1565
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 82
                    },
                    "start": {
                      "column": 4,
                      "line": 82
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1567,
                    1568
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 82
                    },
                    "start": {
                      "column": 7,
                      "line": 82
                    }
                  }
                },
                "range": [
                  1564,
                  1568
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 82
                  },
                  "start": {
                    "column": 4,
                    "line": 82
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1574,
                    1575
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1577,
                    1578
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 83
                    },
                    "start": {
                      "column": 7,
                      "line": 83
                    }
                  }
                },
                "range": [
                  1574,
                  1578
                ],
                "loc": {
                  "end": {
                    "column": 8,
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
              1533,
              1600
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 84
              },
              "start": {
                "column": 43,
                "line": 79
              }
            }
          },
          "range": [
            1496,
            1600
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 84
            },
            "start": {
              "column": 6,
              "line": 79
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1490,
        1600
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CommonWithDisjointOverlappingOptionals",
        "optional": false,
        "range": [
          1607,
          1645
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 86
          },
          "start": {
            "column": 5,
            "line": 86
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Common",
              "optional": false,
              "range": [
                1648,
                1654
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 86
                },
                "start": {
                  "column": 46,
                  "line": 86
                }
              }
            },
            "range": [
              1648,
              1654
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 86
              },
              "start": {
                "column": 46,
                "line": 86
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1657,
                1658
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 86
                },
                "start": {
                  "column": 55,
                  "line": 86
                }
              }
            },
            "range": [
              1657,
              1658
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 86
              },
              "start": {
                "column": 55,
                "line": 86
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                1661,
                1662
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 86
                },
                "start": {
                  "column": 59,
                  "line": 86
                }
              }
            },
            "range": [
              1661,
              1662
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 86
              },
              "start": {
                "column": 59,
                "line": 86
              }
            }
          }
        ],
        "range": [
          1648,
          1662
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 86
          },
          "start": {
            "column": 46,
            "line": 86
          }
        }
      },
      "range": [
        1602,
        1663
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 89
                },
                "start": {
                  "column": 8,
                  "line": 89
                }
              },
              "range": [
                1768,
                1808
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CommonWithDisjointOverlappingOptionals",
                  "optional": false,
                  "range": [
                    1770,
                    1808
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 89
                    },
                    "start": {
                      "column": 10,
                      "line": 89
                    }
                  }
                },
                "range": [
                  1770,
                  1808
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 89
                  },
                  "start": {
                    "column": 10,
                    "line": 89
                  }
                }
              }
            },
            "range": [
              1766,
              1808
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 89
              },
              "start": {
                "column": 6,
                "line": 89
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    1817,
                    1821
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 90
                    },
                    "start": {
                      "column": 4,
                      "line": 90
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "\"A\"",
                  "value": "A",
                  "range": [
                    1823,
                    1826
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 90
                    },
                    "start": {
                      "column": 10,
                      "line": 90
                    }
                  }
                },
                "range": [
                  1817,
                  1826
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 90
                  },
                  "start": {
                    "column": 4,
                    "line": 90
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "range": [
                    1832,
                    1833
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 91
                    },
                    "start": {
                      "column": 4,
                      "line": 91
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1835,
                    1836
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 91
                    },
                    "start": {
                      "column": 7,
                      "line": 91
                    }
                  }
                },
                "range": [
                  1832,
                  1836
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 91
                  },
                  "start": {
                    "column": 4,
                    "line": 91
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    1842,
                    1843
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1845,
                    1846
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 92
                    },
                    "start": {
                      "column": 7,
                      "line": 92
                    }
                  }
                },
                "range": [
                  1842,
                  1846
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 92
                  },
                  "start": {
                    "column": 4,
                    "line": 92
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1852,
                    1853
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 93
                    },
                    "start": {
                      "column": 4,
                      "line": 93
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1855,
                    1856
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 93
                    },
                    "start": {
                      "column": 7,
                      "line": 93
                    }
                  }
                },
                "range": [
                  1852,
                  1856
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 93
                  },
                  "start": {
                    "column": 4,
                    "line": 93
                  }
                }
              }
            ],
            "range": [
              1811,
              1878
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 94
              },
              "start": {
                "column": 51,
                "line": 89
              }
            }
          },
          "range": [
            1766,
            1878
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 94
            },
            "start": {
              "column": 6,
              "line": 89
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1760,
        1878
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 89
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1970,
        2104
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BaseAttribute",
          "optional": false,
          "range": [
            1982,
            1995
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 98
            },
            "start": {
              "column": 12,
              "line": 98
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "range": [
                  2007,
                  2011
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 99
                  },
                  "start": {
                    "column": 4,
                    "line": 99
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 99
                  },
                  "start": {
                    "column": 9,
                    "line": 99
                  }
                },
                "range": [
                  2012,
                  2032
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        2014,
                        2020
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 99
                        },
                        "start": {
                          "column": 11,
                          "line": 99
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        2023,
                        2032
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 99
                        },
                        "start": {
                          "column": 20,
                          "line": 99
                        }
                      }
                    }
                  ],
                  "range": [
                    2014,
                    2032
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 99
                    },
                    "start": {
                      "column": 11,
                      "line": 99
                    }
                  }
                }
              },
              "range": [
                2007,
                2033
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 99
                },
                "start": {
                  "column": 4,
                  "line": 99
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "required",
                "optional": false,
                "range": [
                  2038,
                  2046
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 100
                  },
                  "start": {
                    "column": 4,
                    "line": 100
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 100
                  },
                  "start": {
                    "column": 13,
                    "line": 100
                  }
                },
                "range": [
                  2047,
                  2068
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSBooleanKeyword",
                      "range": [
                        2049,
                        2056
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 100
                        },
                        "start": {
                          "column": 15,
                          "line": 100
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        2059,
                        2068
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 100
                        },
                        "start": {
                          "column": 25,
                          "line": 100
                        }
                      }
                    }
                  ],
                  "range": [
                    2049,
                    2068
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 100
                    },
                    "start": {
                      "column": 15,
                      "line": 100
                    }
                  }
                }
              },
              "range": [
                2038,
                2069
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 100
                },
                "start": {
                  "column": 4,
                  "line": 100
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "defaultsTo",
                "optional": false,
                "range": [
                  2074,
                  2084
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 101
                  },
                  "start": {
                    "column": 4,
                    "line": 101
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 101
                  },
                  "start": {
                    "column": 15,
                    "line": 101
                  }
                },
                "range": [
                  2085,
                  2100
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2087,
                          2088
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 101
                          },
                          "start": {
                            "column": 17,
                            "line": 101
                          }
                        }
                      },
                      "range": [
                        2087,
                        2088
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 101
                        },
                        "start": {
                          "column": 17,
                          "line": 101
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        2091,
                        2100
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 101
                        },
                        "start": {
                          "column": 21,
                          "line": 101
                        }
                      }
                    }
                  ],
                  "range": [
                    2087,
                    2100
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 101
                    },
                    "start": {
                      "column": 17,
                      "line": 101
                    }
                  }
                }
              },
              "range": [
                2074,
                2101
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 101
                },
                "start": {
                  "column": 4,
                  "line": 101
                }
              }
            }
          ],
          "range": [
            2001,
            2103
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 102
            },
            "start": {
              "column": 31,
              "line": 98
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 28,
              "line": 98
            },
            "start": {
              "column": 25,
              "line": 98
            }
          },
          "range": [
            1995,
            1998
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1996,
                  1997
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 98
                  },
                  "start": {
                    "column": 26,
                    "line": 98
                  }
                }
              },
              "out": false,
              "range": [
                1996,
                1997
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 98
                },
                "start": {
                  "column": 26,
                  "line": 98
                }
              }
            }
          ]
        },
        "range": [
          1977,
          2104
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 102
          },
          "start": {
            "column": 7,
            "line": 98
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2106,
        2210
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Attribute",
          "optional": false,
          "range": [
            2118,
            2127
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 104
            },
            "start": {
              "column": 12,
              "line": 104
            }
          }
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                2136,
                2142
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 105
                },
                "start": {
                  "column": 6,
                  "line": 105
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringAttribute",
                "optional": false,
                "range": [
                  2149,
                  2164
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 106
                  },
                  "start": {
                    "column": 6,
                    "line": 106
                  }
                }
              },
              "range": [
                2149,
                2164
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 106
                },
                "start": {
                  "column": 6,
                  "line": 106
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberAttribute",
                "optional": false,
                "range": [
                  2171,
                  2186
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 107
                  },
                  "start": {
                    "column": 6,
                    "line": 107
                  }
                }
              },
              "range": [
                2171,
                2186
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 107
                },
                "start": {
                  "column": 6,
                  "line": 107
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OneToOneAttribute",
                "optional": false,
                "range": [
                  2193,
                  2210
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 108
                  },
                  "start": {
                    "column": 6,
                    "line": 108
                  }
                }
              },
              "range": [
                2193,
                2210
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 108
                },
                "start": {
                  "column": 6,
                  "line": 108
                }
              }
            }
          ],
          "range": [
            2134,
            2210
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 108
            },
            "start": {
              "column": 4,
              "line": 105
            }
          }
        },
        "range": [
          2113,
          2210
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 108
          },
          "start": {
            "column": 7,
            "line": 104
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 23,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 104
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2212,
        2293
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Attribute2",
          "optional": false,
          "range": [
            2224,
            2234
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 110
            },
            "start": {
              "column": 12,
              "line": 110
            }
          }
        },
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
                  "column": 12,
                  "line": 111
                },
                "start": {
                  "column": 6,
                  "line": 111
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringAttribute",
                "optional": false,
                "range": [
                  2256,
                  2271
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 112
                  },
                  "start": {
                    "column": 6,
                    "line": 112
                  }
                }
              },
              "range": [
                2256,
                2271
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 112
                },
                "start": {
                  "column": 6,
                  "line": 112
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberAttribute",
                "optional": false,
                "range": [
                  2278,
                  2293
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 113
                  },
                  "start": {
                    "column": 6,
                    "line": 113
                  }
                }
              },
              "range": [
                2278,
                2293
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 113
                },
                "start": {
                  "column": 6,
                  "line": 113
                }
              }
            }
          ],
          "range": [
            2241,
            2293
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 113
            },
            "start": {
              "column": 4,
              "line": 111
            }
          }
        },
        "range": [
          2219,
          2293
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 113
          },
          "start": {
            "column": 7,
            "line": 110
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 21,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 110
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2295,
        2373
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StringAttribute",
          "optional": false,
          "range": [
            2307,
            2322
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 115
            },
            "start": {
              "column": 12,
              "line": 115
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2338,
                  2346
                ],
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      2339,
                      2345
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 115
                      },
                      "start": {
                        "column": 44,
                        "line": 115
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 115
                  },
                  "start": {
                    "column": 43,
                    "line": 115
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseAttribute",
                "optional": false,
                "range": [
                  2325,
                  2338
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 115
                  },
                  "start": {
                    "column": 30,
                    "line": 115
                  }
                }
              },
              "range": [
                2325,
                2346
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 115
                },
                "start": {
                  "column": 30,
                  "line": 115
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      2355,
                      2359
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 116
                      },
                      "start": {
                        "column": 4,
                        "line": 116
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 116
                      },
                      "start": {
                        "column": 8,
                        "line": 116
                      }
                    },
                    "range": [
                      2359,
                      2369
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'string'",
                        "value": "string",
                        "range": [
                          2361,
                          2369
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 116
                          },
                          "start": {
                            "column": 10,
                            "line": 116
                          }
                        }
                      },
                      "range": [
                        2361,
                        2369
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 116
                        },
                        "start": {
                          "column": 10,
                          "line": 116
                        }
                      }
                    }
                  },
                  "range": [
                    2355,
                    2370
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 116
                    },
                    "start": {
                      "column": 4,
                      "line": 116
                    }
                  }
                }
              ],
              "range": [
                2349,
                2372
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 117
                },
                "start": {
                  "column": 54,
                  "line": 115
                }
              }
            }
          ],
          "range": [
            2325,
            2372
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 117
            },
            "start": {
              "column": 30,
              "line": 115
            }
          }
        },
        "range": [
          2302,
          2373
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 117
          },
          "start": {
            "column": 7,
            "line": 115
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2375,
        2494
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NumberAttribute",
          "optional": false,
          "range": [
            2387,
            2402
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 119
            },
            "start": {
              "column": 12,
              "line": 119
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2418,
                  2426
                ],
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      2419,
                      2425
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 119
                      },
                      "start": {
                        "column": 44,
                        "line": 119
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 119
                  },
                  "start": {
                    "column": 43,
                    "line": 119
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseAttribute",
                "optional": false,
                "range": [
                  2405,
                  2418
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 119
                  },
                  "start": {
                    "column": 30,
                    "line": 119
                  }
                }
              },
              "range": [
                2405,
                2426
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 119
                },
                "start": {
                  "column": 30,
                  "line": 119
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "range": [
                      2435,
                      2439
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 120
                      },
                      "start": {
                        "column": 4,
                        "line": 120
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 120
                      },
                      "start": {
                        "column": 8,
                        "line": 120
                      }
                    },
                    "range": [
                      2439,
                      2449
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'number'",
                        "value": "number",
                        "range": [
                          2441,
                          2449
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 120
                          },
                          "start": {
                            "column": 10,
                            "line": 120
                          }
                        }
                      },
                      "range": [
                        2441,
                        2449
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 120
                        },
                        "start": {
                          "column": 10,
                          "line": 120
                        }
                      }
                    }
                  },
                  "range": [
                    2435,
                    2450
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 120
                    },
                    "start": {
                      "column": 4,
                      "line": 120
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "autoIncrement",
                    "optional": false,
                    "range": [
                      2455,
                      2468
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 121
                      },
                      "start": {
                        "column": 4,
                        "line": 121
                      }
                    }
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 121
                      },
                      "start": {
                        "column": 18,
                        "line": 121
                      }
                    },
                    "range": [
                      2469,
                      2490
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            2471,
                            2478
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 121
                            },
                            "start": {
                              "column": 20,
                              "line": 121
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            2481,
                            2490
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 121
                            },
                            "start": {
                              "column": 30,
                              "line": 121
                            }
                          }
                        }
                      ],
                      "range": [
                        2471,
                        2490
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 121
                        },
                        "start": {
                          "column": 20,
                          "line": 121
                        }
                      }
                    }
                  },
                  "range": [
                    2455,
                    2491
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 121
                    },
                    "start": {
                      "column": 4,
                      "line": 121
                    }
                  }
                }
              ],
              "range": [
                2429,
                2493
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 122
                },
                "start": {
                  "column": 54,
                  "line": 119
                }
              }
            }
          ],
          "range": [
            2405,
            2493
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 122
            },
            "start": {
              "column": 30,
              "line": 119
            }
          }
        },
        "range": [
          2382,
          2494
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 122
          },
          "start": {
            "column": 7,
            "line": 119
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 119
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2496,
        2572
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OneToOneAttribute",
          "optional": false,
          "range": [
            2508,
            2525
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 124
            },
            "start": {
              "column": 12,
              "line": 124
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2541,
                  2546
                ],
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      2542,
                      2545
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 124
                      },
                      "start": {
                        "column": 46,
                        "line": 124
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 124
                  },
                  "start": {
                    "column": 45,
                    "line": 124
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BaseAttribute",
                "optional": false,
                "range": [
                  2528,
                  2541
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 124
                  },
                  "start": {
                    "column": 32,
                    "line": 124
                  }
                }
              },
              "range": [
                2528,
                2546
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 124
                },
                "start": {
                  "column": 32,
                  "line": 124
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "model",
                    "optional": false,
                    "range": [
                      2555,
                      2560
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 125
                      },
                      "start": {
                        "column": 4,
                        "line": 125
                      }
                    }
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 125
                      },
                      "start": {
                        "column": 9,
                        "line": 125
                      }
                    },
                    "range": [
                      2560,
                      2568
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2562,
                        2568
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 125
                        },
                        "start": {
                          "column": 11,
                          "line": 125
                        }
                      }
                    }
                  },
                  "range": [
                    2555,
                    2569
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 125
                    },
                    "start": {
                      "column": 4,
                      "line": 125
                    }
                  }
                }
              ],
              "range": [
                2549,
                2571
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 126
                },
                "start": {
                  "column": 53,
                  "line": 124
                }
              }
            }
          ],
          "range": [
            2528,
            2571
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 126
            },
            "start": {
              "column": 32,
              "line": 124
            }
          }
        },
        "range": [
          2503,
          2572
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 126
          },
          "start": {
            "column": 7,
            "line": 124
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 126
        },
        "start": {
          "column": 0,
          "line": 124
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "attributes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 129
                },
                "start": {
                  "column": 16,
                  "line": 129
                }
              },
              "range": [
                2636,
                2647
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Attribute",
                  "optional": false,
                  "range": [
                    2638,
                    2647
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 129
                    },
                    "start": {
                      "column": 18,
                      "line": 129
                    }
                  }
                },
                "range": [
                  2638,
                  2647
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 129
                  },
                  "start": {
                    "column": 18,
                    "line": 129
                  }
                }
              }
            },
            "range": [
              2626,
              2647
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 129
              },
              "start": {
                "column": 6,
                "line": 129
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    2656,
                    2660
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 130
                    },
                    "start": {
                      "column": 4,
                      "line": 130
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'string'",
                  "value": "string",
                  "range": [
                    2662,
                    2670
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 130
                    },
                    "start": {
                      "column": 10,
                      "line": 130
                    }
                  }
                },
                "range": [
                  2656,
                  2670
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 130
                  },
                  "start": {
                    "column": 4,
                    "line": 130
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "autoIncrement",
                  "optional": false,
                  "range": [
                    2676,
                    2689
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 131
                    },
                    "start": {
                      "column": 4,
                      "line": 131
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    2691,
                    2695
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 131
                    },
                    "start": {
                      "column": 19,
                      "line": 131
                    }
                  }
                },
                "range": [
                  2676,
                  2695
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 131
                  },
                  "start": {
                    "column": 4,
                    "line": 131
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "range": [
                    2701,
                    2709
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 132
                    },
                    "start": {
                      "column": 4,
                      "line": 132
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    2711,
                    2715
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 132
                    },
                    "start": {
                      "column": 14,
                      "line": 132
                    }
                  }
                },
                "range": [
                  2701,
                  2715
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 132
                  },
                  "start": {
                    "column": 4,
                    "line": 132
                  }
                }
              }
            ],
            "range": [
              2650,
              2718
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 133
              },
              "start": {
                "column": 30,
                "line": 129
              }
            }
          },
          "range": [
            2626,
            2718
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 133
            },
            "start": {
              "column": 6,
              "line": 129
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2620,
        2719
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 133
        },
        "start": {
          "column": 0,
          "line": 129
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "attributes2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 135
                },
                "start": {
                  "column": 17,
                  "line": 135
                }
              },
              "range": [
                2738,
                2750
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Attribute2",
                  "optional": false,
                  "range": [
                    2740,
                    2750
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 135
                    },
                    "start": {
                      "column": 19,
                      "line": 135
                    }
                  }
                },
                "range": [
                  2740,
                  2750
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 135
                  },
                  "start": {
                    "column": 19,
                    "line": 135
                  }
                }
              }
            },
            "range": [
              2727,
              2750
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 135
              },
              "start": {
                "column": 6,
                "line": 135
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
                  "name": "type",
                  "optional": false,
                  "range": [
                    2759,
                    2763
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 136
                    },
                    "start": {
                      "column": 4,
                      "line": 136
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'string'",
                  "value": "string",
                  "range": [
                    2765,
                    2773
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 136
                    },
                    "start": {
                      "column": 10,
                      "line": 136
                    }
                  }
                },
                "range": [
                  2759,
                  2773
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 136
                  },
                  "start": {
                    "column": 4,
                    "line": 136
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "autoIncrement",
                  "optional": false,
                  "range": [
                    2779,
                    2792
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 137
                    },
                    "start": {
                      "column": 4,
                      "line": 137
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    2794,
                    2798
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 137
                    },
                    "start": {
                      "column": 19,
                      "line": 137
                    }
                  }
                },
                "range": [
                  2779,
                  2798
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 137
                  },
                  "start": {
                    "column": 4,
                    "line": 137
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "required",
                  "optional": false,
                  "range": [
                    2804,
                    2812
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 138
                    },
                    "start": {
                      "column": 4,
                      "line": 138
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    2814,
                    2818
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 138
                    },
                    "start": {
                      "column": 14,
                      "line": 138
                    }
                  }
                },
                "range": [
                  2804,
                  2818
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 138
                  },
                  "start": {
                    "column": 4,
                    "line": 138
                  }
                }
              }
            ],
            "range": [
              2753,
              2821
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 139
              },
              "start": {
                "column": 32,
                "line": 135
              }
            }
          },
          "range": [
            2727,
            2821
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 139
            },
            "start": {
              "column": 6,
              "line": 135
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2721,
        2822
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 139
        },
        "start": {
          "column": 0,
          "line": 135
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 140
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
