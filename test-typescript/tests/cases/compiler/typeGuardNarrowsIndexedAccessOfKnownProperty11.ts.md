__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    122
  ],
  "body": [
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          7,
          15
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                9,
                10
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 1
                },
                "start": {
                  "column": 9,
                  "line": 1
                }
              }
            },
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          5,
          6
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "range": [
        0,
        15
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                32,
                61
              ],
              "typeAnnotation": {
                "type": "TSMappedType",
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "range": [
                      42,
                      43
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 25,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    42,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
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
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        46,
                        52
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 29,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "TSNullKeyword",
                      "range": [
                        55,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 38,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    46,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
                    }
                  }
                },
                "range": [
                  34,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              31,
              61
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            31,
            61
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        17,
        62
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      91,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 6
                      },
                      "start": {
                        "column": 4,
                        "line": 6
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        93,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 6
                        },
                        "start": {
                          "column": 6,
                          "line": 6
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        95,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      93,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 6,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    91,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "range": [
                    98,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 6
                    },
                    "start": {
                      "column": 11,
                      "line": 6
                    }
                  }
                },
                "range": [
                  91,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                91,
                108
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              91,
              109
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          85,
          121
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 21,
            "line": 5
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "range": [
              68,
              69
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "range": [
                70,
                71
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 5
                },
                "start": {
                  "column": 6,
                  "line": 5
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              70,
              73
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
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
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            79,
            83
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 5
            },
            "start": {
              "column": 15,
              "line": 5
            }
          }
        },
        "range": [
          68,
          83
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 5
          }
        }
      },
      "range": [
        64,
        121
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
