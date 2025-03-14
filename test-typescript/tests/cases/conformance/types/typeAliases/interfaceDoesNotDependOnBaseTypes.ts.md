__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    184
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 5,
                  "line": 1
                }
              },
              "range": [
                5,
                17
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
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
              }
            },
            "range": [
              4,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
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
        18
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    59,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 3
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    52,
                    53
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    54,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 3
                    },
                    "start": {
                      "column": 6,
                      "line": 3
                    }
                  }
                },
                "range": [
                  52,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                52,
                62
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              52,
              63
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        76,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    75,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    68,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    70,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 4
                    },
                    "start": {
                      "column": 6,
                      "line": 4
                    }
                  }
                },
                "range": [
                  68,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                68,
                80
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              68,
              81
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          46,
          83
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 27,
            "line": 2
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              30,
              31
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            23,
            31
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"string\"",
          "value": "string",
          "range": [
            36,
            44
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 2
            },
            "start": {
              "column": 17,
              "line": 2
            }
          }
        },
        "range": [
          23,
          44
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 2
          },
          "start": {
            "column": 4,
            "line": 2
          }
        }
      },
      "range": [
        19,
        83
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
        "name": "StringTree",
        "optional": false,
        "range": [
          90,
          100
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              103,
              109
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringTreeArray",
              "optional": false,
              "range": [
                112,
                127
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 27,
                  "line": 7
                }
              }
            },
            "range": [
              112,
              127
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 27,
                "line": 7
              }
            }
          }
        ],
        "range": [
          103,
          127
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 7
          },
          "start": {
            "column": 18,
            "line": 7
          }
        }
      },
      "range": [
        85,
        128
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 7
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
          181,
          184
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 55,
            "line": 8
          },
          "start": {
            "column": 52,
            "line": 8
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
            "name": "Array",
            "optional": false,
            "range": [
              163,
              168
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 8
              },
              "start": {
                "column": 34,
                "line": 8
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              168,
              180
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringTree",
                  "optional": false,
                  "range": [
                    169,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 8
                    },
                    "start": {
                      "column": 40,
                      "line": 8
                    }
                  }
                },
                "range": [
                  169,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 8
                  },
                  "start": {
                    "column": 40,
                    "line": 8
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 8
              },
              "start": {
                "column": 39,
                "line": 8
              }
            }
          },
          "range": [
            163,
            180
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 8
            },
            "start": {
              "column": 34,
              "line": 8
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringTreeArray",
        "optional": false,
        "range": [
          139,
          154
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 8
          },
          "start": {
            "column": 10,
            "line": 8
          }
        }
      },
      "range": [
        129,
        184
      ],
      "loc": {
        "end": {
          "column": 55,
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
      "column": 55,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
