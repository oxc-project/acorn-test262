__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    194
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mappy",
        "optional": false,
        "range": [
          5,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                48,
                49
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 1
                },
                "start": {
                  "column": 48,
                  "line": 1
                }
              }
            },
            "range": [
              48,
              49
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 1
              },
              "start": {
                "column": 48,
                "line": 1
              }
            }
          },
          "range": [
            42,
            49
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 1
            },
            "start": {
              "column": 42,
              "line": 1
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            37,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 37,
              "line": 1
            }
          }
        },
        "nameType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "range": [
              53,
              54
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 1
              },
              "start": {
                "column": 53,
                "line": 1
              }
            }
          },
          "range": [
            53,
            54
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 1
            },
            "start": {
              "column": 53,
              "line": 1
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 1
                },
                "start": {
                  "column": 59,
                  "line": 1
                }
              }
            },
            "range": [
              59,
              60
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 1
              },
              "start": {
                "column": 59,
                "line": 1
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                57,
                58
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 1
                },
                "start": {
                  "column": 57,
                  "line": 1
                }
              }
            },
            "range": [
              57,
              58
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 57,
                "line": 1
              }
            }
          },
          "range": [
            57,
            61
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 1
            },
            "start": {
              "column": 57,
              "line": 1
            }
          }
        },
        "range": [
          34,
          63
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 1
          },
          "start": {
            "column": 34,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        },
        "range": [
          10,
          31
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  21,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              },
              "range": [
                21,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              11,
              30
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        64
      ],
      "loc": {
        "end": {
          "column": 64,
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
        "name": "NotArray",
        "optional": false,
        "range": [
          70,
          78
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            86,
            96
          ],
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  87,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                87,
                95
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 21,
              "line": 2
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mappy",
          "optional": false,
          "range": [
            81,
            86
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "range": [
          81,
          96
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
        65,
        97
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
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doArrayStuff",
        "optional": false,
        "range": [
          116,
          128
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 4
              },
              "start": {
                "column": 31,
                "line": 4
              }
            },
            "range": [
              130,
              141
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "range": [
                  132,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              },
              "range": [
                132,
                141
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              }
            }
          },
          "range": [
            129,
            141
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 4
            },
            "start": {
              "column": 30,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 49,
            "line": 4
          },
          "start": {
            "column": 43,
            "line": 4
          }
        },
        "range": [
          142,
          148
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            144,
            148
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 4
            },
            "start": {
              "column": 45,
              "line": 4
            }
          }
        }
      },
      "range": [
        99,
        149
      ],
      "loc": {
        "end": {
          "column": 50,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              },
              "range": [
                165,
                175
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NotArray",
                  "optional": false,
                  "range": [
                    167,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                },
                "range": [
                  167,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              164,
              175
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            }
          },
          "init": null,
          "range": [
            164,
            175
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 5
            },
            "start": {
              "column": 14,
              "line": 5
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        150,
        176
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              190,
              191
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 6
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "doArrayStuff",
          "optional": false,
          "range": [
            177,
            189
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          177,
          192
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        177,
        193
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    }
  ],
  "sourceType": "script",
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
