__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    63,
    241
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
        "name": "filter",
        "optional": false,
        "range": [
          80,
          86
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 3
              },
              "start": {
                "column": 36,
                "line": 3
              }
            },
            "range": [
              99,
              137
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 3
                      },
                      "start": {
                        "column": 44,
                        "line": 3
                      }
                    },
                    "range": [
                      107,
                      110
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          109,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 3
                          },
                          "start": {
                            "column": 46,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        109,
                        110
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 3
                        },
                        "start": {
                          "column": 46,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    102,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 3
                    },
                    "start": {
                      "column": 39,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 3
                      },
                      "start": {
                        "column": 54,
                        "line": 3
                      }
                    },
                    "range": [
                      117,
                      125
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        119,
                        125
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 3
                        },
                        "start": {
                          "column": 56,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    112,
                    125
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 3
                    },
                    "start": {
                      "column": 49,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 3
                  },
                  "start": {
                    "column": 64,
                    "line": 3
                  }
                },
                "range": [
                  127,
                  137
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    130,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 3
                    },
                    "start": {
                      "column": 67,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                101,
                137
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 3
                },
                "start": {
                  "column": 38,
                  "line": 3
                }
              }
            }
          },
          "range": [
            90,
            137
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 78,
            "line": 3
          },
          "start": {
            "column": 75,
            "line": 3
          }
        },
        "range": [
          138,
          141
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              140,
              141
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 3
              },
              "start": {
                "column": 77,
                "line": 3
              }
            }
          },
          "range": [
            140,
            141
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 3
            },
            "start": {
              "column": 77,
              "line": 3
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        },
        "range": [
          86,
          89
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                87,
                88
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              87,
              88
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        63,
        142
      ],
      "loc": {
        "end": {
          "column": 79,
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
            "range": [
              149,
              150
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    179,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 4
                    },
                    "start": {
                      "column": 36,
                      "line": 4
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pose",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 23,
                          "line": 4
                        }
                      },
                      "range": [
                        166,
                        174
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          168,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 4
                          },
                          "start": {
                            "column": 25,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      161,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  160,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "range": [
                153,
                159
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "optional": false,
            "range": [
              153,
              184
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 4
              },
              "start": {
                "column": 10,
                "line": 4
              }
            }
          },
          "range": [
            149,
            184
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        143,
        185
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "b",
            "optional": false,
            "range": [
              192,
              193
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    234,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 5
                    },
                    "start": {
                      "column": 48,
                      "line": 5
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pose",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 5
                        },
                        "start": {
                          "column": 23,
                          "line": 5
                        }
                      },
                      "range": [
                        209,
                        217
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          211,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 5
                          },
                          "start": {
                            "column": 25,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      204,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 5
                        },
                        "start": {
                          "column": 35,
                          "line": 5
                        }
                      },
                      "range": [
                        221,
                        229
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          223,
                          229
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 5
                          },
                          "start": {
                            "column": 37,
                            "line": 5
                          }
                        }
                      }
                    },
                    "range": [
                      219,
                      229
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
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
                  203,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 5
                  },
                  "start": {
                    "column": 17,
                    "line": 5
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "range": [
                196,
                202
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              196,
              239
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 5
              },
              "start": {
                "column": 10,
                "line": 5
              }
            }
          },
          "range": [
            192,
            239
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        186,
        240
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 5
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
      "line": 6
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
