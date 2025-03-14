__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    213
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          10
        ],
        "body": [],
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
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        10
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 1
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
          30,
          32
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 20,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          18,
          19
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          28,
          29
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "range": [
        12,
        32
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          51,
          75
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                64,
                67
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                67,
                73
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  70,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "range": [
              57,
              73
            ],
            "loc": {
              "end": {
                "column": 20,
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          39,
          40
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          49,
          50
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "range": [
        33,
        75
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          85,
          88
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 17,
                "line": 6
              }
            },
            "range": [
              93,
              99
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'hi'",
                "value": "hi",
                "range": [
                  95,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 19,
                    "line": 6
                  }
                }
              },
              "range": [
                95,
                99
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              }
            }
          },
          "range": [
            89,
            99
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 6
            },
            "start": {
              "column": 13,
              "line": 6
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 27,
            "line": 6
          },
          "start": {
            "column": 24,
            "line": 6
          }
        },
        "range": [
          100,
          103
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              102,
              103
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 26,
                "line": 6
              }
            }
          },
          "range": [
            102,
            103
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 6
            },
            "start": {
              "column": 26,
              "line": 6
            }
          }
        }
      },
      "range": [
        76,
        104
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          114,
          117
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 7
              },
              "start": {
                "column": 17,
                "line": 7
              }
            },
            "range": [
              122,
              129
            ],
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'bye'",
                "value": "bye",
                "range": [
                  124,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              },
              "range": [
                124,
                129
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            }
          },
          "range": [
            118,
            129
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 7
            },
            "start": {
              "column": 13,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 28,
            "line": 7
          },
          "start": {
            "column": 25,
            "line": 7
          }
        },
        "range": [
          130,
          133
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              132,
              133
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 27,
                "line": 7
              }
            }
          },
          "range": [
            132,
            133
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 7
            },
            "start": {
              "column": 27,
              "line": 7
            }
          }
        }
      },
      "range": [
        105,
        134
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          144,
          147
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 8
              }
            },
            "range": [
              152,
              160
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                154,
                160
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 8
                },
                "start": {
                  "column": 19,
                  "line": 8
                }
              }
            }
          },
          "range": [
            148,
            160
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 8
          },
          "start": {
            "column": 26,
            "line": 8
          }
        },
        "range": [
          161,
          164
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              163,
              164
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 8
              },
              "start": {
                "column": 28,
                "line": 8
              }
            }
          },
          "range": [
            163,
            164
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 8
            },
            "start": {
              "column": 28,
              "line": 8
            }
          }
        }
      },
      "range": [
        135,
        165
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                206,
                210
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              199,
              211
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          193,
          213
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 27,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          175,
          178
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 17,
                "line": 9
              }
            },
            "range": [
              183,
              188
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                185,
                188
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            }
          },
          "range": [
            179,
            188
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 9
            },
            "start": {
              "column": 13,
              "line": 9
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 26,
            "line": 9
          },
          "start": {
            "column": 23,
            "line": 9
          }
        },
        "range": [
          189,
          192
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              191,
              192
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 25,
                "line": 9
              }
            }
          },
          "range": [
            191,
            192
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 9
            },
            "start": {
              "column": 25,
              "line": 9
            }
          }
        }
      },
      "range": [
        166,
        213
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 11
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
