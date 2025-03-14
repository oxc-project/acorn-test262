__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    17
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        16
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            14,
            16
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 16,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
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
        "implements": [],
        "superClass": null,
        "range": [
          7,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
          "column": 16,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    18
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        17
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            15,
            17
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
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
        "implements": [],
        "superClass": null,
        "range": [
          7,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
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
          "column": 17,
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    279
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./defaultPath\"",
        "value": "./defaultPath",
        "range": [
          31,
          46
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 1
          },
          "start": {
            "column": 31,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "defaultModule",
            "optional": false,
            "range": [
              12,
              25
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
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
        }
      ],
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "\"./anotherModule\"",
        "value": "./anotherModule",
        "range": [
          79,
          96
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 2
          },
          "start": {
            "column": 31,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "anotherModule",
            "optional": false,
            "range": [
              60,
              73
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            55,
            73
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        48,
        97
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              },
              "range": [
                105,
                136
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    114,
                    136
                  ],
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "anotherModule",
                        "optional": false,
                        "range": [
                          122,
                          135
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 4
                          },
                          "start": {
                            "column": 23,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        115,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    107,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "range": [
                  107,
                  136
                ],
                "loc": {
                  "end": {
                    "column": 37,
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
              103,
              136
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "Literal",
              "raw": "\"./defaultPath\"",
              "value": "./defaultPath",
              "range": [
                146,
                161
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 4
                },
                "start": {
                  "column": 47,
                  "line": 4
                }
              }
            },
            "range": [
              139,
              162
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 4
              },
              "start": {
                "column": 40,
                "line": 4
              }
            }
          },
          "range": [
            103,
            162
          ],
          "loc": {
            "end": {
              "column": 63,
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
      "kind": "let",
      "range": [
        99,
        163
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "p2",
            "optional": false,
            "range": [
              168,
              170
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ImportExpression",
              "options": null,
              "source": {
                "type": "Literal",
                "raw": "\"./defaultPath\"",
                "value": "./defaultPath",
                "range": [
                  180,
                  195
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              },
              "range": [
                173,
                196
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  207,
                  229
                ],
                "params": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "anotherModule",
                      "optional": false,
                      "range": [
                        215,
                        228
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 5
                        },
                        "start": {
                          "column": 51,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      208,
                      228
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 5
                      },
                      "start": {
                        "column": 44,
                        "line": 5
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 5
                  },
                  "start": {
                    "column": 43,
                    "line": 5
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  200,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 5
                  },
                  "start": {
                    "column": 36,
                    "line": 5
                  }
                }
              },
              "range": [
                200,
                229
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 5
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              }
            },
            "range": [
              173,
              229
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
              }
            }
          },
          "range": [
            168,
            229
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        164,
        230
      ],
      "loc": {
        "end": {
          "column": 66,
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              },
              "range": [
                237,
                251
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    246,
                    251
                  ],
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "range": [
                        247,
                        250
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 6
                        },
                        "start": {
                          "column": 16,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    239,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "range": [
                  239,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              235,
              251
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          "init": {
            "type": "ImportExpression",
            "options": null,
            "source": {
              "type": "Literal",
              "raw": "\"./defaultPath\"",
              "value": "./defaultPath",
              "range": [
                261,
                276
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 6
                },
                "start": {
                  "column": 30,
                  "line": 6
                }
              }
            },
            "range": [
              254,
              277
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 6
              },
              "start": {
                "column": 23,
                "line": 6
              }
            }
          },
          "range": [
            235,
            277
          ],
          "loc": {
            "end": {
              "column": 46,
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
      "kind": "let",
      "range": [
        231,
        278
      ],
      "loc": {
        "end": {
          "column": 47,
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
