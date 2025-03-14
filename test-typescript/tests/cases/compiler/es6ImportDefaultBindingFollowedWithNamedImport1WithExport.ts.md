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
    590
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./server\"",
        "value": "./server",
        "range": [
          40,
          50
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 1
          },
          "start": {
            "column": 40,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            14,
            29
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding1",
            "optional": false,
            "range": [
              14,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        51
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        52,
        92
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
              "name": "x1",
              "optional": false,
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
                  65,
                  73
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    67,
                    73
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
              "range": [
                63,
                73
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 11,
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
                76,
                91
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "range": [
              63,
              91
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          59,
          92
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 2
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
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
        "raw": "\"./server\"",
        "value": "./server",
        "range": [
          135,
          145
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 3
          },
          "start": {
            "column": 42,
            "line": 3
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            107,
            122
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding2",
            "optional": false,
            "range": [
              107,
              122
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 14,
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
              126,
              127
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 33,
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
              126,
              127
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 33,
                "line": 3
              }
            }
          },
          "range": [
            126,
            127
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 3
            },
            "start": {
              "column": 33,
              "line": 3
            }
          }
        }
      ],
      "range": [
        93,
        146
      ],
      "loc": {
        "end": {
          "column": 53,
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
        147,
        187
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
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                },
                "range": [
                  160,
                  168
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    162,
                    168
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                158,
                168
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 11,
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
                171,
                186
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            },
            "range": [
              158,
              186
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          154,
          187
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 4
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
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
        "raw": "\"./server\"",
        "value": "./server",
        "range": [
          235,
          245
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 5
          },
          "start": {
            "column": 47,
            "line": 5
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            202,
            217
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding3",
            "optional": false,
            "range": [
              202,
              217
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "loc": {
            "end": {
              "column": 29,
              "line": 5
            },
            "start": {
              "column": 14,
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
              221,
              222
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 33,
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
              226,
              227
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 5
              },
              "start": {
                "column": 38,
                "line": 5
              }
            }
          },
          "range": [
            221,
            227
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 5
            },
            "start": {
              "column": 33,
              "line": 5
            }
          }
        }
      ],
      "range": [
        188,
        246
      ],
      "loc": {
        "end": {
          "column": 58,
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
        247,
        287
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
              "name": "x1",
              "optional": false,
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
                  260,
                  268
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    262,
                    268
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
              "range": [
                258,
                268
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 11,
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
                271,
                286
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              }
            },
            "range": [
              258,
              286
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 6
              },
              "start": {
                "column": 11,
                "line": 6
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          254,
          287
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
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
        "raw": "\"./server\"",
        "value": "./server",
        "range": [
          338,
          348
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 7
          },
          "start": {
            "column": 50,
            "line": 7
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            302,
            317
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding4",
            "optional": false,
            "range": [
              302,
              317
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 14,
                "line": 7
              }
            }
          },
          "loc": {
            "end": {
              "column": 29,
              "line": 7
            },
            "start": {
              "column": 14,
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
              321,
              322
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 33,
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
              321,
              322
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 33,
                "line": 7
              }
            }
          },
          "range": [
            321,
            322
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 7
            },
            "start": {
              "column": 33,
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
              324,
              325
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 7
              },
              "start": {
                "column": 36,
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
              329,
              330
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 41,
                "line": 7
              }
            }
          },
          "range": [
            324,
            330
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 7
            },
            "start": {
              "column": 36,
              "line": 7
            }
          }
        }
      ],
      "range": [
        288,
        349
      ],
      "loc": {
        "end": {
          "column": 61,
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
        350,
        390
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
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                },
                "range": [
                  363,
                  371
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    365,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 8
                    },
                    "start": {
                      "column": 15,
                      "line": 8
                    }
                  }
                }
              },
              "range": [
                361,
                371
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 11,
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
                374,
                389
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              }
            },
            "range": [
              361,
              389
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          357,
          390
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
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
        "raw": "\"./server\"",
        "value": "./server",
        "range": [
          440,
          450
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 9
          },
          "start": {
            "column": 49,
            "line": 9
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            405,
            420
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding5",
            "optional": false,
            "range": [
              405,
              420
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "loc": {
            "end": {
              "column": 29,
              "line": 9
            },
            "start": {
              "column": 14,
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
              424,
              425
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 9
              },
              "start": {
                "column": 33,
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
              429,
              430
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 9
              },
              "start": {
                "column": 38,
                "line": 9
              }
            }
          },
          "range": [
            424,
            430
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 9
            },
            "start": {
              "column": 33,
              "line": 9
            }
          }
        }
      ],
      "range": [
        391,
        451
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        452,
        492
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
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 10
                  }
                },
                "range": [
                  465,
                  473
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    467,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 10
                    }
                  }
                }
              },
              "range": [
                463,
                473
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 10
                },
                "start": {
                  "column": 11,
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
                476,
                491
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 10
                }
              }
            },
            "range": [
              463,
              491
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 10
              },
              "start": {
                "column": 11,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          459,
          492
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
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./server\"",
        "value": "./server",
        "range": [
          537,
          547
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 11
          },
          "start": {
            "column": 44,
            "line": 11
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "range": [
            507,
            522
          ],
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultBinding6",
            "optional": false,
            "range": [
              507,
              522
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 11
              },
              "start": {
                "column": 14,
                "line": 11
              }
            }
          },
          "loc": {
            "end": {
              "column": 29,
              "line": 11
            },
            "start": {
              "column": 14,
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
              526,
              527
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 33,
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
              526,
              527
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 11
              },
              "start": {
                "column": 33,
                "line": 11
              }
            }
          },
          "range": [
            526,
            527
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 11
            },
            "start": {
              "column": 33,
              "line": 11
            }
          }
        }
      ],
      "range": [
        493,
        548
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        549,
        589
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
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 12
                  },
                  "start": {
                    "column": 13,
                    "line": 12
                  }
                },
                "range": [
                  562,
                  570
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    564,
                    570
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                560,
                570
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 11,
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
                573,
                588
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 12
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            },
            "range": [
              560,
              588
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 12
              },
              "start": {
                "column": 11,
                "line": 12
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          556,
          589
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 12
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
          "column": 40,
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
