__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    212
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
        "name": "pick",
        "optional": false,
        "range": [
          17,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
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
          "name": "keys",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 53,
                "line": 1
              },
              "start": {
                "column": 48,
                "line": 1
              }
            },
            "range": [
              48,
              53
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    50,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 1
                    },
                    "start": {
                      "column": 50,
                      "line": 1
                    }
                  }
                },
                "range": [
                  50,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              },
              "range": [
                50,
                53
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 1
                },
                "start": {
                  "column": 50,
                  "line": 1
                }
              }
            }
          },
          "range": [
            44,
            53
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 1
            },
            "start": {
              "column": 44,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 1
              },
              "start": {
                "column": 59,
                "line": 1
              }
            },
            "range": [
              59,
              62
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "range": [
                  61,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 1
                  },
                  "start": {
                    "column": 61,
                    "line": 1
                  }
                }
              },
              "range": [
                61,
                62
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 1
                },
                "start": {
                  "column": 61,
                  "line": 1
                }
              }
            }
          },
          "range": [
            55,
            62
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 1
            },
            "start": {
              "column": 55,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 75,
            "line": 1
          },
          "start": {
            "column": 63,
            "line": 1
          }
        },
        "range": [
          63,
          75
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              69,
              75
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "range": [
                    70,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 1
                    },
                    "start": {
                      "column": 70,
                      "line": 1
                    }
                  }
                },
                "range": [
                  70,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 1
                  },
                  "start": {
                    "column": 70,
                    "line": 1
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    73,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 1
                    },
                    "start": {
                      "column": 73,
                      "line": 1
                    }
                  }
                },
                "range": [
                  73,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 1
                  },
                  "start": {
                    "column": 73,
                    "line": 1
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 1
              },
              "start": {
                "column": 69,
                "line": 1
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pick",
            "optional": false,
            "range": [
              65,
              69
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 1
              },
              "start": {
                "column": 65,
                "line": 1
              }
            }
          },
          "range": [
            65,
            75
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 1
            },
            "start": {
              "column": 65,
              "line": 1
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 1
          },
          "start": {
            "column": 21,
            "line": 1
          }
        },
        "range": [
          21,
          43
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              22,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 22,
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
                  "name": "O",
                  "optional": false,
                  "range": [
                    41,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 1
                    },
                    "start": {
                      "column": 41,
                      "line": 1
                    }
                  }
                },
                "range": [
                  41,
                  42
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 1
                  },
                  "start": {
                    "column": 41,
                    "line": 1
                  }
                }
              },
              "range": [
                35,
                42
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 35,
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
                25,
                26
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              25,
              42
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 1
              },
              "start": {
                "column": 25,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        76
      ],
      "loc": {
        "end": {
          "column": 76,
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
            "name": "_",
            "optional": false,
            "range": [
              83,
              84
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "'b'",
                    "value": "b",
                    "range": [
                      96,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  95,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        104,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 2
                        },
                        "start": {
                          "column": 27,
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
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        107,
                        110
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 30,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      104,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 27,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        112,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 2
                        },
                        "start": {
                          "column": 35,
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
                      "raw": "'b'",
                      "value": "b",
                      "range": [
                        115,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 2
                        },
                        "start": {
                          "column": 38,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      112,
                      118
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 2
                      },
                      "start": {
                        "column": 35,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  102,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 2
                  },
                  "start": {
                    "column": 25,
                    "line": 2
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pick",
              "optional": false,
              "range": [
                90,
                94
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "optional": false,
            "range": [
              90,
              121
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
          },
          "range": [
            83,
            121
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        77,
        122
      ],
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "optional": false,
            "properties": [],
            "range": [
              139,
              143
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
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "'b'",
                    "value": "b",
                    "range": [
                      152,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 3
                      },
                      "start": {
                        "column": 19,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  151,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 18,
                    "line": 3
                  }
                }
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        160,
                        161
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 3
                        },
                        "start": {
                          "column": 27,
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
                      "raw": "'a'",
                      "value": "a",
                      "range": [
                        163,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 3
                        },
                        "start": {
                          "column": 30,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      160,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 3
                      },
                      "start": {
                        "column": 27,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        168,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 3
                        },
                        "start": {
                          "column": 35,
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
                      "raw": "'b'",
                      "value": "b",
                      "range": [
                        171,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 3
                        },
                        "start": {
                          "column": 38,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      168,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 35,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  158,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pick",
              "optional": false,
              "range": [
                146,
                150
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              146,
              177
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          },
          "range": [
            139,
            177
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        133,
        178
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 4
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
