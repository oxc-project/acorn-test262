__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    485
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Default",
        "optional": false,
        "range": [
          5,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "range": [
            22,
            37
          ],
          "argument": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                29,
                34
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "range": [
              29,
              34
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 1
              },
              "start": {
                "column": 29,
                "line": 1
              }
            }
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              36,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 36,
                "line": 1
              }
            }
          },
          "typeArguments": null,
          "loc": {
            "end": {
              "column": 37,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        },
        "range": [
          15,
          37
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Import",
        "optional": false,
        "range": [
          44,
          50
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "range": [
            60,
            120
          ],
          "argument": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                67,
                72
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 28,
                  "line": 2
                }
              }
            },
            "range": [
              67,
              72
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 2
              },
              "start": {
                "column": 28,
                "line": 2
              }
            }
          },
          "options": {
            "type": "ObjectExpression",
            "range": [
              74,
              117
            ],
            "properties": [
              {
                "type": "Property",
                "range": [
                  76,
                  115
                ],
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "range": [
                    76,
                    82
                  ],
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 2
                    },
                    "start": {
                      "column": 37,
                      "line": 2
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "raw": "\"resolution-mode\"",
                        "value": "resolution-mode",
                        "range": [
                          86,
                          103
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 2
                          },
                          "start": {
                            "column": 47,
                            "line": 2
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"import\"",
                        "value": "import",
                        "range": [
                          105,
                          113
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 2
                          },
                          "start": {
                            "column": 66,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        86,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 2
                        },
                        "start": {
                          "column": 47,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    84,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 2
                    },
                    "start": {
                      "column": 45,
                      "line": 2
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 2
                  },
                  "start": {
                    "column": 37,
                    "line": 2
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 2
              },
              "start": {
                "column": 35,
                "line": 2
              }
            }
          },
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              119,
              120
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 2
              },
              "start": {
                "column": 80,
                "line": 2
              }
            }
          },
          "typeArguments": null,
          "loc": {
            "end": {
              "column": 81,
              "line": 2
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        },
        "range": [
          53,
          120
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 2
          },
          "start": {
            "column": 14,
            "line": 2
          }
        }
      },
      "range": [
        39,
        121
      ],
      "loc": {
        "end": {
          "column": 82,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Require",
        "optional": false,
        "range": [
          127,
          134
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "range": [
            144,
            205
          ],
          "argument": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                151,
                156
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "range": [
              151,
              156
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 29,
                "line": 3
              }
            }
          },
          "options": {
            "type": "ObjectExpression",
            "range": [
              158,
              202
            ],
            "properties": [
              {
                "type": "Property",
                "range": [
                  160,
                  200
                ],
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "range": [
                    160,
                    166
                  ],
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 38,
                      "line": 3
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "raw": "\"resolution-mode\"",
                        "value": "resolution-mode",
                        "range": [
                          170,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 3
                          },
                          "start": {
                            "column": 48,
                            "line": 3
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"require\"",
                        "value": "require",
                        "range": [
                          189,
                          198
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 3
                          },
                          "start": {
                            "column": 67,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        170,
                        198
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 3
                        },
                        "start": {
                          "column": 48,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    168,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 3
                    },
                    "start": {
                      "column": 46,
                      "line": 3
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 3
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 3
              },
              "start": {
                "column": 36,
                "line": 3
              }
            }
          },
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              204,
              205
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 3
              },
              "start": {
                "column": 82,
                "line": 3
              }
            }
          },
          "typeArguments": null,
          "loc": {
            "end": {
              "column": 83,
              "line": 3
            },
            "start": {
              "column": 22,
              "line": 3
            }
          }
        },
        "range": [
          137,
          205
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "range": [
        122,
        206
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImportRelative",
        "optional": false,
        "range": [
          298,
          312
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "range": [
            322,
            386
          ],
          "argument": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"./other\"",
              "value": "./other",
              "range": [
                329,
                338
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              }
            },
            "range": [
              329,
              338
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 36,
                "line": 5
              }
            }
          },
          "options": {
            "type": "ObjectExpression",
            "range": [
              340,
              383
            ],
            "properties": [
              {
                "type": "Property",
                "range": [
                  342,
                  381
                ],
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "range": [
                    342,
                    348
                  ],
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 5
                    },
                    "start": {
                      "column": 49,
                      "line": 5
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "raw": "\"resolution-mode\"",
                        "value": "resolution-mode",
                        "range": [
                          352,
                          369
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 5
                          },
                          "start": {
                            "column": 59,
                            "line": 5
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"import\"",
                        "value": "import",
                        "range": [
                          371,
                          379
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 5
                          },
                          "start": {
                            "column": 78,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        352,
                        379
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 5
                        },
                        "start": {
                          "column": 59,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    350,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 5
                    },
                    "start": {
                      "column": 57,
                      "line": 5
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 88,
                    "line": 5
                  },
                  "start": {
                    "column": 49,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 5
              },
              "start": {
                "column": 47,
                "line": 5
              }
            }
          },
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              385,
              386
            ],
            "loc": {
              "end": {
                "column": 93,
                "line": 5
              },
              "start": {
                "column": 92,
                "line": 5
              }
            }
          },
          "typeArguments": null,
          "loc": {
            "end": {
              "column": 93,
              "line": 5
            },
            "start": {
              "column": 29,
              "line": 5
            }
          }
        },
        "range": [
          315,
          386
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 5
          },
          "start": {
            "column": 22,
            "line": 5
          }
        }
      },
      "range": [
        293,
        387
      ],
      "loc": {
        "end": {
          "column": 94,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequireRelative",
        "optional": false,
        "range": [
          393,
          408
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "range": [
            418,
            483
          ],
          "argument": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "\"./other\"",
              "value": "./other",
              "range": [
                425,
                434
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 6
                },
                "start": {
                  "column": 37,
                  "line": 6
                }
              }
            },
            "range": [
              425,
              434
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 37,
                "line": 6
              }
            }
          },
          "options": {
            "type": "ObjectExpression",
            "range": [
              436,
              480
            ],
            "properties": [
              {
                "type": "Property",
                "range": [
                  438,
                  478
                ],
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "range": [
                    438,
                    444
                  ],
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 6
                    },
                    "start": {
                      "column": 50,
                      "line": 6
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "raw": "\"resolution-mode\"",
                        "value": "resolution-mode",
                        "range": [
                          448,
                          465
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 6
                          },
                          "start": {
                            "column": 60,
                            "line": 6
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"require\"",
                        "value": "require",
                        "range": [
                          467,
                          476
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 6
                          },
                          "start": {
                            "column": 79,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        448,
                        476
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 6
                        },
                        "start": {
                          "column": 60,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    446,
                    478
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 6
                    },
                    "start": {
                      "column": 58,
                      "line": 6
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 6
                  },
                  "start": {
                    "column": 50,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 6
              },
              "start": {
                "column": 48,
                "line": 6
              }
            }
          },
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              482,
              483
            ],
            "loc": {
              "end": {
                "column": 95,
                "line": 6
              },
              "start": {
                "column": 94,
                "line": 6
              }
            }
          },
          "typeArguments": null,
          "loc": {
            "end": {
              "column": 95,
              "line": 6
            },
            "start": {
              "column": 30,
              "line": 6
            }
          }
        },
        "range": [
          411,
          483
        ],
        "loc": {
          "end": {
            "column": 95,
            "line": 6
          },
          "start": {
            "column": 23,
            "line": 6
          }
        }
      },
      "range": [
        388,
        484
      ],
      "loc": {
        "end": {
          "column": 96,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
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
    26
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        25
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
              "name": "x",
              "optional": false,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "\"other\"",
              "value": "other",
              "range": [
                17,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 25,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
