__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    344
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          36
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                24,
                25
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              },
              "range": [
                25,
                33
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  27,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 15,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              16,
              34
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        36
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          48,
          74
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                62,
                63
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              },
              "range": [
                63,
                71
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  65,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                }
              }
            },
            "value": null,
            "range": [
              54,
              72
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          44,
          47
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        38,
        74
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          106,
          118
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 30,
            "line": 9
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
            "name": "Foo",
            "optional": false,
            "range": [
              97,
              100
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 21,
                "line": 9
              }
            }
          },
          "range": [
            97,
            100
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 9
            },
            "start": {
              "column": 21,
              "line": 9
            }
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "range": [
              102,
              105
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 26,
                "line": 9
              }
            }
          },
          "range": [
            102,
            105
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 26,
              "line": 9
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "range": [
          86,
          88
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 10,
            "line": 9
          }
        }
      },
      "range": [
        76,
        118
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          150,
          177
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                165,
                166
              ],
              "loc": {
                "end": {
                  "column": 5,
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
                  "column": 13,
                  "line": 13
                },
                "start": {
                  "column": 5,
                  "line": 13
                }
              },
              "range": [
                166,
                174
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  168,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              165,
              175
            ],
            "loc": {
              "end": {
                "column": 14,
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
            "column": 30,
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
            "name": "Foo",
            "optional": false,
            "range": [
              141,
              144
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 12
              },
              "start": {
                "column": 21,
                "line": 12
              }
            }
          },
          "range": [
            141,
            144
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 12
            },
            "start": {
              "column": 21,
              "line": 12
            }
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bar",
            "optional": false,
            "range": [
              146,
              149
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 12
              },
              "start": {
                "column": 26,
                "line": 12
              }
            }
          },
          "range": [
            146,
            149
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 12
            },
            "start": {
              "column": 26,
              "line": 12
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "range": [
          130,
          132
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 12
          },
          "start": {
            "column": 10,
            "line": 12
          }
        }
      },
      "range": [
        120,
        177
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          189,
          215
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                203,
                204
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 17
                },
                "start": {
                  "column": 13,
                  "line": 17
                }
              },
              "range": [
                204,
                212
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  206,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 17
                  },
                  "start": {
                    "column": 15,
                    "line": 17
                  }
                }
              }
            },
            "value": null,
            "range": [
              195,
              213
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "range": [
          185,
          188
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 16
          },
          "start": {
            "column": 6,
            "line": 16
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        179,
        215
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          247,
          265
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                253,
                254
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                  "line": 21
                },
                "start": {
                  "column": 5,
                  "line": 21
                }
              },
              "range": [
                254,
                262
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  256,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 21
                  },
                  "start": {
                    "column": 7,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              253,
              263
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 30,
            "line": 20
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
            "name": "Foo",
            "optional": false,
            "range": [
              238,
              241
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 20
              },
              "start": {
                "column": 21,
                "line": 20
              }
            }
          },
          "range": [
            238,
            241
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 20
            },
            "start": {
              "column": 21,
              "line": 20
            }
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Baz",
            "optional": false,
            "range": [
              243,
              246
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 20
              },
              "start": {
                "column": 26,
                "line": 20
              }
            }
          },
          "range": [
            243,
            246
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 20
            },
            "start": {
              "column": 26,
              "line": 20
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I5",
        "optional": false,
        "range": [
          227,
          229
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 20
          },
          "start": {
            "column": 10,
            "line": 20
          }
        }
      },
      "range": [
        217,
        265
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 9,
                  "line": 24
                },
                "start": {
                  "column": 5,
                  "line": 24
                }
              },
              "range": [
                272,
                276
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I5",
                  "optional": false,
                  "range": [
                    274,
                    276
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 7,
                      "line": 24
                    }
                  }
                },
                "range": [
                  274,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 24
                  },
                  "start": {
                    "column": 7,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              271,
              276
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            271,
            276
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        267,
        277
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 5,
                  "line": 25
                }
              },
              "range": [
                283,
                291
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  285,
                  291
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 25
                  },
                  "start": {
                    "column": 7,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              282,
              291
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                294,
                295
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 25
                },
                "start": {
                  "column": 16,
                  "line": 25
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                296,
                297
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 25
                },
                "start": {
                  "column": 18,
                  "line": 25
                }
              }
            },
            "range": [
              294,
              297
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 25
              },
              "start": {
                "column": 16,
                "line": 25
              }
            }
          },
          "range": [
            282,
            297
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        278,
        298
      ],
      "loc": {
        "end": {
          "column": 20,
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
            "name": "r2",
            "optional": false,
            "range": [
              303,
              305
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                308,
                309
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                310,
                311
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "range": [
              308,
              311
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 26
              },
              "start": {
                "column": 9,
                "line": 26
              }
            }
          },
          "range": [
            303,
            311
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        299,
        312
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "r3",
            "optional": false,
            "range": [
              326,
              328
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                331,
                332
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "range": [
                333,
                334
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "range": [
              331,
              334
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 27
              },
              "start": {
                "column": 9,
                "line": 27
              }
            }
          },
          "range": [
            326,
            334
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        322,
        335
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 22,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
