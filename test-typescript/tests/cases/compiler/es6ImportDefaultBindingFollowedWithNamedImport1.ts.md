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
    752
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "range": [
          33,
          84
        ],
        "loc": {
          "end": {
            "column": 84,
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
        85
      ],
      "loc": {
        "end": {
          "column": 85,
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              },
              "range": [
                92,
                100
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  94,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              90,
              100
            ],
            "loc": {
              "end": {
                "column": 14,
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
              103,
              118
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 17,
                "line": 2
              }
            }
          },
          "range": [
            90,
            118
          ],
          "loc": {
            "end": {
              "column": 32,
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
        86,
        119
      ],
      "loc": {
        "end": {
          "column": 33,
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
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "range": [
          155,
          206
        ],
        "loc": {
          "end": {
            "column": 86,
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
            127,
            142
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "range": [
              127,
              142
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
              146,
              147
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
              146,
              147
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
            146,
            147
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
        120,
        207
      ],
      "loc": {
        "end": {
          "column": 87,
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              },
              "range": [
                214,
                222
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  216,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              212,
              222
            ],
            "loc": {
              "end": {
                "column": 14,
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
              225,
              240
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          },
          "range": [
            212,
            240
          ],
          "loc": {
            "end": {
              "column": 32,
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
        208,
        241
      ],
      "loc": {
        "end": {
          "column": 33,
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
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "range": [
          282,
          333
        ],
        "loc": {
          "end": {
            "column": 91,
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
            249,
            264
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "range": [
              249,
              264
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
              268,
              269
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
              273,
              274
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
            268,
            274
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
        242,
        334
      ],
      "loc": {
        "end": {
          "column": 92,
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              },
              "range": [
                341,
                349
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  343,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              339,
              349
            ],
            "loc": {
              "end": {
                "column": 14,
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
              352,
              367
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 6
              },
              "start": {
                "column": 17,
                "line": 6
              }
            }
          },
          "range": [
            339,
            367
          ],
          "loc": {
            "end": {
              "column": 32,
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
        335,
        368
      ],
      "loc": {
        "end": {
          "column": 33,
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
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "range": [
          412,
          463
        ],
        "loc": {
          "end": {
            "column": 94,
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
            376,
            391
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "range": [
              376,
              391
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
              395,
              396
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
              395,
              396
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
            395,
            396
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
              398,
              399
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
              403,
              404
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
            398,
            404
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
        369,
        464
      ],
      "loc": {
        "end": {
          "column": 95,
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              },
              "range": [
                471,
                479
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  473,
                  479
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              469,
              479
            ],
            "loc": {
              "end": {
                "column": 14,
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
              482,
              497
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 8
              }
            }
          },
          "range": [
            469,
            497
          ],
          "loc": {
            "end": {
              "column": 32,
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
        465,
        498
      ],
      "loc": {
        "end": {
          "column": 33,
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
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "range": [
          541,
          592
        ],
        "loc": {
          "end": {
            "column": 93,
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
            506,
            521
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "range": [
              506,
              521
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
              525,
              526
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
              530,
              531
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
            525,
            531
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
        499,
        593
      ],
      "loc": {
        "end": {
          "column": 94,
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              },
              "range": [
                600,
                608
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  602,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              598,
              608
            ],
            "loc": {
              "end": {
                "column": 14,
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
              611,
              626
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 10
              },
              "start": {
                "column": 17,
                "line": 10
              }
            }
          },
          "range": [
            598,
            626
          ],
          "loc": {
            "end": {
              "column": 32,
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
        594,
        627
      ],
      "loc": {
        "end": {
          "column": 33,
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
        "raw": "\"es6ImportDefaultBindingFollowedWithNamedImport1_0\"",
        "value": "es6ImportDefaultBindingFollowedWithNamedImport1_0",
        "range": [
          665,
          716
        ],
        "loc": {
          "end": {
            "column": 88,
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
            635,
            650
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "range": [
              635,
              650
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
              654,
              655
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
              654,
              655
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
            654,
            655
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
        628,
        717
      ],
      "loc": {
        "end": {
          "column": 89,
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              },
              "range": [
                724,
                732
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  726,
                  732
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              722,
              732
            ],
            "loc": {
              "end": {
                "column": 14,
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
              735,
              750
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 12
              },
              "start": {
                "column": 17,
                "line": 12
              }
            }
          },
          "range": [
            722,
            750
          ],
          "loc": {
            "end": {
              "column": 32,
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
        718,
        751
      ],
      "loc": {
        "end": {
          "column": 33,
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
