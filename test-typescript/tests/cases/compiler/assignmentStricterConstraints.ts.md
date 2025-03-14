__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    129
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
            "name": "f",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        58,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 2
                        },
                        "start": {
                          "column": 4,
                          "line": 2
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        62,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 2
                        },
                        "start": {
                          "column": 8,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      58,
                      63
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    58,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 2
                    },
                    "start": {
                      "column": 4,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                52,
                65
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 52,
                  "line": 1
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 35,
                      "line": 1
                    }
                  },
                  "range": [
                    35,
                    38
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
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
                  }
                },
                "range": [
                  34,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 34,
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
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 41,
                      "line": 1
                    }
                  },
                  "range": [
                    41,
                    44
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        43,
                        44
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 1
                        },
                        "start": {
                          "column": 43,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      43,
                      44
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 1
                      },
                      "start": {
                        "column": 43,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  40,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 40,
                    "line": 1
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 1
                },
                "start": {
                  "column": 45,
                  "line": 1
                }
              },
              "range": [
                45,
                51
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  47,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 47,
                    "line": 1
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              },
              "range": [
                17,
                33
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
                      18,
                      19
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 1
                      },
                      "start": {
                        "column": 18,
                        "line": 1
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    18,
                    19
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 1
                    },
                    "start": {
                      "column": 18,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        31,
                        32
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 1
                        },
                        "start": {
                          "column": 31,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      31,
                      32
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 1
                      },
                      "start": {
                        "column": 31,
                        "line": 1
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
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
                    32
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
                      "line": 1
                    }
                  }
                }
              ]
            },
            "range": [
              8,
              65
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            65
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
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
        65
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
            "name": "g",
            "optional": false,
            "range": [
              71,
              72
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
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                109,
                112
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 42,
                  "line": 5
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
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
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  },
                  "range": [
                    92,
                    95
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        94,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 5
                        },
                        "start": {
                          "column": 27,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      94,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 27,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  91,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
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
                      "column": 34,
                      "line": 5
                    },
                    "start": {
                      "column": 31,
                      "line": 5
                    }
                  },
                  "range": [
                    98,
                    101
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "range": [
                        100,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 5
                        },
                        "start": {
                          "column": 33,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      100,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 5
                      },
                      "start": {
                        "column": 33,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  97,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 5
                  },
                  "start": {
                    "column": 30,
                    "line": 5
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 5
                },
                "start": {
                  "column": 35,
                  "line": 5
                }
              },
              "range": [
                102,
                108
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  104,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 37,
                    "line": 5
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 17,
                  "line": 5
                }
              },
              "range": [
                84,
                90
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
                      85,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    85,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 18,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "range": [
                      88,
                      89
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
                  "out": false,
                  "range": [
                    88,
                    89
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
                }
              ]
            },
            "range": [
              75,
              112
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 8,
                "line": 5
              }
            }
          },
          "range": [
            71,
            112
          ],
          "loc": {
            "end": {
              "column": 45,
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
      "kind": "var",
      "range": [
        67,
        112
      ],
      "loc": {
        "end": {
          "column": 45,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "range": [
            114,
            115
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            118,
            119
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "range": [
          114,
          119
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        114,
        119
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              122,
              123
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              125,
              127
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 8
              },
              "start": {
                "column": 5,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "range": [
            120,
            121
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          120,
          128
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        120,
        128
      ],
      "loc": {
        "end": {
          "column": 8,
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
      "line": 1
    }
  },
  "hashbang": null
}
```
