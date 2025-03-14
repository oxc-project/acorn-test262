__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    30
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
            "name": "a",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              8,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          27,
          28
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "range": [
        12,
        29
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 3
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    788
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "range": [
          33,
          91
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 1
          },
          "start": {
            "column": 33,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            7,
            22
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "range": [
              7,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 7,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        92
      ],
      "loc": {
        "end": {
          "column": 92,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                98,
                106
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  100,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              97,
              106
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "range": [
              109,
              124
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          },
          "range": [
            97,
            124
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        93,
        125
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "range": [
          161,
          219
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 3
          },
          "start": {
            "column": 35,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            133,
            148
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "range": [
              133,
              148
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 7,
                "line": 3
              }
            }
          },
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 7,
              "line": 3
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          },
          "range": [
            152,
            153
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 26,
              "line": 3
            }
          }
        }
      ],
      "range": [
        126,
        220
      ],
      "loc": {
        "end": {
          "column": 94,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                226,
                234
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  228,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              225,
              234
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
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "range": [
              237,
              252
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 16,
                "line": 4
              }
            }
          },
          "range": [
            225,
            252
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        221,
        253
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "range": [
          294,
          352
        ],
        "loc": {
          "end": {
            "column": 98,
            "line": 5
          },
          "start": {
            "column": 40,
            "line": 5
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            261,
            276
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "range": [
              261,
              276
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 7,
                "line": 5
              }
            }
          },
          "loc": {
            "end": {
              "column": 22,
              "line": 5
            },
            "start": {
              "column": 7,
              "line": 5
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              280,
              281
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 5
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              285,
              286
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
            280,
            286
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 5
            },
            "start": {
              "column": 26,
              "line": 5
            }
          }
        }
      ],
      "range": [
        254,
        353
      ],
      "loc": {
        "end": {
          "column": 99,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              },
              "range": [
                359,
                367
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  361,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              358,
              367
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "range": [
              370,
              385
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 6
              },
              "start": {
                "column": 16,
                "line": 6
              }
            }
          },
          "range": [
            358,
            385
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        354,
        386
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "range": [
          430,
          488
        ],
        "loc": {
          "end": {
            "column": 101,
            "line": 7
          },
          "start": {
            "column": 43,
            "line": 7
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            394,
            409
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "range": [
              394,
              409
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 7,
                "line": 7
              }
            }
          },
          "loc": {
            "end": {
              "column": 22,
              "line": 7
            },
            "start": {
              "column": 7,
              "line": 7
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              413,
              414
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              413,
              414
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 7
              },
              "start": {
                "column": 26,
                "line": 7
              }
            }
          },
          "range": [
            413,
            414
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 7
            },
            "start": {
              "column": 26,
              "line": 7
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              416,
              417
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 29,
                "line": 7
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              421,
              422
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 7
              },
              "start": {
                "column": 34,
                "line": 7
              }
            }
          },
          "range": [
            416,
            422
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 7
            },
            "start": {
              "column": 29,
              "line": 7
            }
          }
        }
      ],
      "range": [
        387,
        489
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              },
              "range": [
                495,
                503
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  497,
                  503
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 8
                  },
                  "start": {
                    "column": 7,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              494,
              503
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "range": [
              506,
              521
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 8
              },
              "start": {
                "column": 16,
                "line": 8
              }
            }
          },
          "range": [
            494,
            521
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        490,
        522
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "range": [
          565,
          623
        ],
        "loc": {
          "end": {
            "column": 100,
            "line": 9
          },
          "start": {
            "column": 42,
            "line": 9
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            530,
            545
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "range": [
              530,
              545
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 7,
                "line": 9
              }
            }
          },
          "loc": {
            "end": {
              "column": 22,
              "line": 9
            },
            "start": {
              "column": 7,
              "line": 9
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              549,
              550
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 26,
                "line": 9
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              554,
              555
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 9
              },
              "start": {
                "column": 31,
                "line": 9
              }
            }
          },
          "range": [
            549,
            555
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 9
            },
            "start": {
              "column": 26,
              "line": 9
            }
          }
        }
      ],
      "range": [
        523,
        624
      ],
      "loc": {
        "end": {
          "column": 101,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              },
              "range": [
                630,
                638
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  632,
                  638
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 10
                  },
                  "start": {
                    "column": 7,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              629,
              638
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "range": [
              641,
              656
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 10
              },
              "start": {
                "column": 16,
                "line": 10
              }
            }
          },
          "range": [
            629,
            656
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        625,
        657
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0\"",
        "value": "./es6ImportDefaultBindingFollowedWithNamedImport1InEs5_0",
        "range": [
          695,
          753
        ],
        "loc": {
          "end": {
            "column": 95,
            "line": 11
          },
          "start": {
            "column": 37,
            "line": 11
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            665,
            680
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "range": [
              665,
              680
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 7,
                "line": 11
              }
            }
          },
          "loc": {
            "end": {
              "column": 22,
              "line": 11
            },
            "start": {
              "column": 7,
              "line": 11
            }
          }
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              684,
              685
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 26,
                "line": 11
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              684,
              685
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 26,
                "line": 11
              }
            }
          },
          "range": [
            684,
            685
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 11
            },
            "start": {
              "column": 26,
              "line": 11
            }
          }
        }
      ],
      "range": [
        658,
        754
      ],
      "loc": {
        "end": {
          "column": 96,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 12
                },
                "start": {
                  "column": 5,
                  "line": 12
                }
              },
              "range": [
                760,
                768
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  762,
                  768
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 7,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              759,
              768
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "range": [
              771,
              786
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 16,
                "line": 12
              }
            }
          },
          "range": [
            759,
            786
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        755,
        787
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
