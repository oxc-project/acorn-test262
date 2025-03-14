__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    293
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
        "name": "get",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
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
                "column": 47,
                "line": 1
              },
              "start": {
                "column": 44,
                "line": 1
              }
            },
            "range": [
              44,
              47
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  46,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 1
                  },
                  "start": {
                    "column": 46,
                    "line": 1
                  }
                }
              },
              "range": [
                46,
                47
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 1
                },
                "start": {
                  "column": 46,
                  "line": 1
                }
              }
            }
          },
          "range": [
            43,
            47
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 1
            },
            "start": {
              "column": 43,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 1
              },
              "start": {
                "column": 50,
                "line": 1
              }
            },
            "range": [
              50,
              53
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "range": [
                  52,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 1
                  },
                  "start": {
                    "column": 52,
                    "line": 1
                  }
                }
              },
              "range": [
                52,
                53
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 1
                },
                "start": {
                  "column": 52,
                  "line": 1
                }
              }
            }
          },
          "range": [
            49,
            53
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 1
            },
            "start": {
              "column": 49,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 60,
            "line": 1
          },
          "start": {
            "column": 54,
            "line": 1
          }
        },
        "range": [
          54,
          60
        ],
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "range": [
                58,
                59
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 1
                },
                "start": {
                  "column": 58,
                  "line": 1
                }
              }
            },
            "range": [
              58,
              59
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 1
              },
              "start": {
                "column": 58,
                "line": 1
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                56,
                57
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 1
                },
                "start": {
                  "column": 56,
                  "line": 1
                }
              }
            },
            "range": [
              56,
              57
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 56,
                "line": 1
              }
            }
          },
          "range": [
            56,
            60
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 1
            },
            "start": {
              "column": 56,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        },
        "range": [
          20,
          42
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                21,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 21,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    40,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 1
                    },
                    "start": {
                      "column": 40,
                      "line": 1
                    }
                  }
                },
                "range": [
                  40,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 1
                  },
                  "start": {
                    "column": 40,
                    "line": 1
                  }
                }
              },
              "range": [
                34,
                41
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "range": [
                24,
                25
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              24,
              41
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 1
              },
              "start": {
                "column": 24,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        61
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
        "name": "find",
        "optional": false,
        "range": [
          79,
          83
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 51,
                "line": 2
              },
              "start": {
                "column": 45,
                "line": 2
              }
            },
            "range": [
              107,
              113
            ],
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
                    111,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 2
                    },
                    "start": {
                      "column": 49,
                      "line": 2
                    }
                  }
                },
                "range": [
                  111,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 49,
                    "line": 2
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
                    109,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 2
                    },
                    "start": {
                      "column": 47,
                      "line": 2
                    }
                  }
                },
                "range": [
                  109,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 2
                  },
                  "start": {
                    "column": 47,
                    "line": 2
                  }
                }
              },
              "range": [
                109,
                113
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 2
                },
                "start": {
                  "column": 47,
                  "line": 2
                }
              }
            }
          },
          "range": [
            106,
            113
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 2
            },
            "start": {
              "column": 44,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 60,
            "line": 2
          },
          "start": {
            "column": 52,
            "line": 2
          }
        },
        "range": [
          114,
          122
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  117,
                  118
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 2
                  },
                  "start": {
                    "column": 55,
                    "line": 2
                  }
                }
              },
              "range": [
                117,
                118
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 2
                },
                "start": {
                  "column": 55,
                  "line": 2
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  120,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 2
                  },
                  "start": {
                    "column": 58,
                    "line": 2
                  }
                }
              },
              "range": [
                120,
                121
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 2
                },
                "start": {
                  "column": 58,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            116,
            122
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 2
            },
            "start": {
              "column": 54,
              "line": 2
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 2
          },
          "start": {
            "column": 21,
            "line": 2
          }
        },
        "range": [
          83,
          105
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
                84,
                85
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 22,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              84,
              85
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 2
              },
              "start": {
                "column": 22,
                "line": 2
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
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
                    103,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 2
                    },
                    "start": {
                      "column": 41,
                      "line": 2
                    }
                  }
                },
                "range": [
                  103,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 2
                  },
                  "start": {
                    "column": 41,
                    "line": 2
                  }
                }
              },
              "range": [
                97,
                104
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 2
                },
                "start": {
                  "column": 35,
                  "line": 2
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                87,
                88
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 25,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              87,
              104
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 2
              },
              "start": {
                "column": 25,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        62,
        123
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "range": [
                    185,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 5
                    },
                    "start": {
                      "column": 10,
                      "line": 5
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        196,
                        197
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 5
                        },
                        "start": {
                          "column": 21,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        199,
                        200
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 5
                        },
                        "start": {
                          "column": 24,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "range": [
                      192,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 5
                      },
                      "start": {
                        "column": 17,
                        "line": 5
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    192,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                },
                "range": [
                  185,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              179,
              202
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "range": [
                    219,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "find",
                "optional": false,
                "range": [
                  214,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                214,
                224
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
            "range": [
              207,
              225
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
          173,
          227
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 48,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "impl",
        "optional": false,
        "range": [
          134,
          138
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 4
              },
              "start": {
                "column": 37,
                "line": 4
              }
            },
            "range": [
              162,
              165
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  164,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 39,
                    "line": 4
                  }
                }
              },
              "range": [
                164,
                165
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 39,
                  "line": 4
                }
              }
            }
          },
          "range": [
            161,
            165
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
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 4
              },
              "start": {
                "column": 43,
                "line": 4
              }
            },
            "range": [
              168,
              171
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  170,
                  171
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 4
                  },
                  "start": {
                    "column": 45,
                    "line": 4
                  }
                }
              },
              "range": [
                170,
                171
              ],
              "loc": {
                "end": {
                  "column": 46,
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
            167,
            171
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 4
            },
            "start": {
              "column": 42,
              "line": 4
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 4
          }
        },
        "range": [
          138,
          160
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                139,
                140
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              139,
              140
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    158,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 4
                    },
                    "start": {
                      "column": 33,
                      "line": 4
                    }
                  }
                },
                "range": [
                  158,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 33,
                    "line": 4
                  }
                }
              },
              "range": [
                152,
                159
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                142,
                143
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
            "out": false,
            "range": [
              142,
              159
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 4
              },
              "start": {
                "column": 17,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        125,
        227
      ],
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
            "name": "o",
            "optional": false,
            "range": [
              235,
              236
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    240,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
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
                  "raw": "42",
                  "value": 42,
                  "range": [
                    243,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                },
                "range": [
                  240,
                  245
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              239,
              246
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 10,
                "line": 9
              }
            }
          },
          "range": [
            235,
            246
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        229,
        247
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "name": "r",
            "optional": false,
            "range": [
              254,
              255
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "range": [
                  263,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 15,
                    "line": 10
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"x\"",
                "value": "x",
                "range": [
                  266,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "impl",
              "optional": false,
              "range": [
                258,
                262
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 10,
                  "line": 10
                }
              }
            },
            "optional": false,
            "range": [
              258,
              270
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 10
              },
              "start": {
                "column": 10,
                "line": 10
              }
            }
          },
          "range": [
            254,
            270
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        248,
        271
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "range": [
                272,
                273
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 0,
                  "line": 11
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                274,
                275
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "range": [
              272,
              276
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 11
              },
              "start": {
                "column": 0,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "range": [
                277,
                278
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 11
                },
                "start": {
                  "column": 5,
                  "line": 11
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                279,
                280
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 11
                }
              }
            },
            "range": [
              277,
              281
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 11
              },
              "start": {
                "column": 5,
                "line": 11
              }
            }
          },
          "range": [
            272,
            282
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "range": [
              285,
              286
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "range": [
                287,
                288
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                289,
                290
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 11
                }
              }
            },
            "range": [
              287,
              291
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 11
              },
              "start": {
                "column": 15,
                "line": 11
              }
            }
          },
          "range": [
            285,
            292
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        },
        "range": [
          272,
          292
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        272,
        293
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 21,
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
