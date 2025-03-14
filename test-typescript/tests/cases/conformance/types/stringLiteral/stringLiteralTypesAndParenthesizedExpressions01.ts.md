__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    24,
    223
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myRandBool",
        "optional": false,
        "range": [
          41,
          51
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 3
          },
          "start": {
            "column": 29,
            "line": 3
          }
        },
        "range": [
          53,
          62
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            55,
            62
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 3
            },
            "start": {
              "column": 31,
              "line": 3
            }
          }
        }
      },
      "range": [
        24,
        63
      ],
      "loc": {
        "end": {
          "column": 39,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 5,
                  "line": 5
                }
              },
              "range": [
                70,
                77
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    72,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 5
                    },
                    "start": {
                      "column": 7,
                      "line": 5
                    }
                  }
                },
                "range": [
                  72,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              69,
              77
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              81,
              86
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 16,
                "line": 5
              }
            }
          },
          "range": [
            69,
            87
          ],
          "loc": {
            "end": {
              "column": 22,
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
        65,
        88
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              },
              "range": [
                94,
                109
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        96,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 6
                        },
                        "start": {
                          "column": 7,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      96,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 6
                      },
                      "start": {
                        "column": 7,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        104,
                        109
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
                    "range": [
                      104,
                      109
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
                  }
                ],
                "range": [
                  96,
                  109
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              93,
              109
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
            "type": "Literal",
            "raw": "\"foo\"",
            "value": "foo",
            "range": [
              113,
              118
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 24,
                "line": 6
              }
            }
          },
          "range": [
            93,
            119
          ],
          "loc": {
            "end": {
              "column": 30,
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
        89,
        120
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
                  "column": 12,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                126,
                133
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    128,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  128,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              125,
              133
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                159,
                164
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 38,
                  "line": 7
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                150,
                155
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 29,
                  "line": 7
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "myRandBool",
              "optional": false,
              "range": [
                137,
                147
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              }
            },
            "range": [
              137,
              165
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 7
              },
              "start": {
                "column": 16,
                "line": 7
              }
            }
          },
          "range": [
            125,
            166
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        121,
        167
      ],
      "loc": {
        "end": {
          "column": 46,
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              },
              "range": [
                173,
                188
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        175,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 8
                        },
                        "start": {
                          "column": 7,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      175,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 8
                      },
                      "start": {
                        "column": 7,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        183,
                        188
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      183,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 15,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  175,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
              172,
              188
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
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "\"bar\"",
              "value": "bar",
              "range": [
                214,
                219
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 8
                },
                "start": {
                  "column": 46,
                  "line": 8
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                205,
                210
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 8
                },
                "start": {
                  "column": 37,
                  "line": 8
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "myRandBool",
              "optional": false,
              "range": [
                192,
                202
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              }
            },
            "range": [
              192,
              220
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 8
              },
              "start": {
                "column": 24,
                "line": 8
              }
            }
          },
          "range": [
            172,
            221
          ],
          "loc": {
            "end": {
              "column": 53,
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
      "kind": "let",
      "range": [
        168,
        222
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
