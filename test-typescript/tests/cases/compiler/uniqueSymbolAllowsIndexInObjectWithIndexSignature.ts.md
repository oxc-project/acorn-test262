__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    248
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        56,
        101
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
              "name": "SYM",
              "optional": false,
              "range": [
                69,
                72
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "'a unique symbol'",
                  "value": "a unique symbol",
                  "range": [
                    82,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 2
                    },
                    "start": {
                      "column": 26,
                      "line": 2
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  75,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                75,
                100
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "range": [
              69,
              100
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 2
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          63,
          101
        ],
        "loc": {
          "end": {
            "column": 45,
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
          "column": 45,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        103,
        163
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            122,
            163
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "SYM",
                "optional": false,
                "range": [
                  127,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 5
                  },
                  "start": {
                    "column": 3,
                    "line": 5
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
                    "column": 14,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                },
                "range": [
                  131,
                  138
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'sym'",
                    "value": "sym",
                    "range": [
                      133,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    133,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 9,
                      "line": 5
                    }
                  }
                }
              },
              "range": [
                126,
                139
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
                }
              }
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    },
                    "range": [
                      144,
                      152
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        146,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 6
                        },
                        "start": {
                          "column": 6,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    143,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 6
                    },
                    "start": {
                      "column": 3,
                      "line": 6
                    }
                  }
                }
              ],
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 6
                  },
                  "start": {
                    "column": 13,
                    "line": 6
                  }
                },
                "range": [
                  153,
                  160
                ],
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'str'",
                    "value": "str",
                    "range": [
                      155,
                      160
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
                    155,
                    160
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
              },
              "range": [
                142,
                161
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 2,
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
              "column": 19,
              "line": 4
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "range": [
            120,
            121
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 4
            },
            "start": {
              "column": 17,
              "line": 4
            }
          }
        },
        "range": [
          110,
          163
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 4
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              },
              "range": [
                170,
                173
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    172,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 9
                    }
                  }
                },
                "range": [
                  172,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 9
                  },
                  "start": {
                    "column": 7,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              169,
              173
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SYM",
                  "optional": false,
                  "range": [
                    178,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "'sym'",
                  "value": "sym",
                  "range": [
                    184,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 9
                    },
                    "start": {
                      "column": 19,
                      "line": 9
                    }
                  }
                },
                "range": [
                  177,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              176,
              190
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 9
              },
              "start": {
                "column": 11,
                "line": 9
              }
            }
          },
          "range": [
            169,
            190
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        165,
        191
      ],
      "loc": {
        "end": {
          "column": 26,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 10
                }
              },
              "range": [
                210,
                213
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    212,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 10
                    },
                    "start": {
                      "column": 7,
                      "line": 10
                    }
                  }
                },
                "range": [
                  212,
                  213
                ],
                "loc": {
                  "end": {
                    "column": 8,
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
              209,
              213
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SYM",
                  "optional": false,
                  "range": [
                    218,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
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
                  "raw": "'str'",
                  "value": "str",
                  "range": [
                    224,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 10
                    },
                    "start": {
                      "column": 19,
                      "line": 10
                    }
                  }
                },
                "range": [
                  217,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 10
                  },
                  "start": {
                    "column": 12,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              216,
              230
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 10
              },
              "start": {
                "column": 11,
                "line": 10
              }
            }
          },
          "range": [
            209,
            230
          ],
          "loc": {
            "end": {
              "column": 25,
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
      "kind": "let",
      "range": [
        205,
        231
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
