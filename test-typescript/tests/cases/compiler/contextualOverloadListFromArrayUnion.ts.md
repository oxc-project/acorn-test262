__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    85
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                35
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNeverKeyword",
                      "range": [
                        17,
                        22
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 1
                        },
                        "start": {
                          "column": 17,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      17,
                      24
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 1
                      },
                      "start": {
                        "column": 17,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        27,
                        33
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 1
                        },
                        "start": {
                          "column": 27,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      27,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 1
                      },
                      "start": {
                        "column": 27,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  17,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              35
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            35
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        36
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        37,
        85
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
              "name": "yThen",
              "optional": false,
              "range": [
                50,
                55
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "range": [
                        72,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 2
                        },
                        "start": {
                          "column": 35,
                          "line": 2
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "range": [
                        77,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 2
                        },
                        "start": {
                          "column": 40,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      72,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 2
                      },
                      "start": {
                        "column": 35,
                        "line": 2
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
                      "name": "item",
                      "optional": false,
                      "range": [
                        64,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 2
                        },
                        "start": {
                          "column": 27,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    64,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 2
                    },
                    "start": {
                      "column": 27,
                      "line": 2
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    58,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    60,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 2
                    },
                    "start": {
                      "column": 23,
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
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                58,
                84
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "range": [
              50,
              84
            ],
            "loc": {
              "end": {
                "column": 47,
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
          44,
          85
        ],
        "loc": {
          "end": {
            "column": 48,
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
          "column": 48,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 48,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    88
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                38
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "range": [
                          17,
                          23
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 1
                          },
                          "start": {
                            "column": 17,
                            "line": 1
                          }
                        }
                      },
                      "range": [
                        17,
                        25
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 1
                        },
                        "start": {
                          "column": 17,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      17,
                      27
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 1
                      },
                      "start": {
                        "column": 17,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        30,
                        36
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 1
                        },
                        "start": {
                          "column": 30,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      30,
                      38
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 1
                      },
                      "start": {
                        "column": 30,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  17,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              38
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        39
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        40,
        88
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
              "name": "yThen",
              "optional": false,
              "range": [
                53,
                58
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "range": [
                        75,
                        79
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 2
                        },
                        "start": {
                          "column": 35,
                          "line": 2
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "range": [
                        80,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 2
                        },
                        "start": {
                          "column": 40,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      75,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 2
                      },
                      "start": {
                        "column": 35,
                        "line": 2
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
                      "name": "item",
                      "optional": false,
                      "range": [
                        67,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 2
                        },
                        "start": {
                          "column": 27,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    67,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 2
                    },
                    "start": {
                      "column": 27,
                      "line": 2
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    61,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 2
                    },
                    "start": {
                      "column": 21,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    63,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 2
                    },
                    "start": {
                      "column": 23,
                      "line": 2
                    }
                  }
                },
                "range": [
                  61,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                61,
                87
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              }
            },
            "range": [
              53,
              87
            ],
            "loc": {
              "end": {
                "column": 47,
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
          47,
          88
        ],
        "loc": {
          "end": {
            "column": 48,
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
          "column": 48,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 48,
      "line": 2
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    10,
    1451
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          43,
          116
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  },
                  "range": [
                    57,
                    80
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ResizeObserverEntry",
                        "optional": false,
                        "range": [
                          59,
                          78
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 3
                          },
                          "start": {
                            "column": 14,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        59,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 3
                        },
                        "start": {
                          "column": 14,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      59,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 3
                      },
                      "start": {
                        "column": 14,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  50,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "observer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 3
                    },
                    "start": {
                      "column": 45,
                      "line": 3
                    }
                  },
                  "range": [
                    90,
                    106
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResizeObserver",
                      "optional": false,
                      "range": [
                        92,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 3
                        },
                        "start": {
                          "column": 47,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      92,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 3
                      },
                      "start": {
                        "column": 47,
                        "line": 3
                      }
                    }
                  }
                },
                "range": [
                  82,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 3
                  },
                  "start": {
                    "column": 37,
                    "line": 3
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 3
                },
                "start": {
                  "column": 62,
                  "line": 3
                }
              },
              "range": [
                107,
                113
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  109,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 3
                  },
                  "start": {
                    "column": 64,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              49,
              114
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 33,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResizeObserverCallback",
        "optional": false,
        "range": [
          20,
          42
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        10,
        116
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          150,
          247
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  },
                  "range": [
                    188,
                    211
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ResizeObserverEntry",
                        "optional": false,
                        "range": [
                          190,
                          209
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 6
                          },
                          "start": {
                            "column": 14,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        190,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 6
                        },
                        "start": {
                          "column": 14,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      190,
                      211
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 6
                      },
                      "start": {
                        "column": 14,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  181,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 6
                  },
                  "start": {
                    "column": 5,
                    "line": 6
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "observer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 6
                    },
                    "start": {
                      "column": 45,
                      "line": 6
                    }
                  },
                  "range": [
                    221,
                    237
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResizeObserver",
                      "optional": false,
                      "range": [
                        223,
                        237
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 6
                        },
                        "start": {
                          "column": 47,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      223,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 6
                      },
                      "start": {
                        "column": 47,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  213,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 6
                  },
                  "start": {
                    "column": 37,
                    "line": 6
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 6
                },
                "start": {
                  "column": 62,
                  "line": 6
                }
              },
              "range": [
                238,
                244
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  240,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 6
                  },
                  "start": {
                    "column": 64,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              180,
              245
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 6
              },
              "start": {
                "column": 4,
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
            "column": 33,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResizeObserverCallback",
        "optional": false,
        "range": [
          127,
          149
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        117,
        247
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
            "name": "resizeObserver",
            "optional": false,
            "range": [
              255,
              269
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entry",
                        "optional": false,
                        "range": [
                          310,
                          315
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 10
                          },
                          "start": {
                            "column": 4,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        310,
                        315
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
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
                    304,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 11
                    },
                    "start": {
                      "column": 55,
                      "line": 9
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entry",
                        "optional": false,
                        "range": [
                          293,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 9
                          },
                          "start": {
                            "column": 44,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      292,
                      299
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 9
                      },
                      "start": {
                        "column": 43,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  291,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 11
                  },
                  "start": {
                    "column": 42,
                    "line": 9
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ResizeObserver",
              "optional": false,
              "range": [
                276,
                290
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 9
                },
                "start": {
                  "column": 27,
                  "line": 9
                }
              }
            },
            "range": [
              272,
              318
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 11
              },
              "start": {
                "column": 23,
                "line": 9
              }
            }
          },
          "range": [
            255,
            318
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 11
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
        249,
        319
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          363,
          446
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  },
                  "range": [
                    375,
                    381
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      377,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 12,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  370,
                  381
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 5,
                    "line": 14
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 14
                    },
                    "start": {
                      "column": 24,
                      "line": 14
                    }
                  },
                  "range": [
                    389,
                    392
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        391,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 14
                        },
                        "start": {
                          "column": 26,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      391,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 26,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  383,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 14
                  },
                  "start": {
                    "column": 18,
                    "line": 14
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 14
                },
                "start": {
                  "column": 28,
                  "line": 14
                }
              },
              "range": [
                393,
                402
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  395,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 14
                  },
                  "start": {
                    "column": 30,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              369,
              402
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  },
                  "range": [
                    413,
                    420
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        415,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 15
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      415,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 15
                      },
                      "start": {
                        "column": 12,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  408,
                  420
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 5,
                    "line": 15
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 15
                    },
                    "start": {
                      "column": 25,
                      "line": 15
                    }
                  },
                  "range": [
                    428,
                    434
                  ],
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "range": [
                      430,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 15
                      },
                      "start": {
                        "column": 27,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  422,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 15
                  },
                  "start": {
                    "column": 19,
                    "line": 15
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 32,
                  "line": 15
                }
              },
              "range": [
                435,
                444
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  437,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 34,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              407,
              444
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 22,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Callback",
        "optional": false,
        "range": [
          351,
          359
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 13
          },
          "start": {
            "column": 18,
            "line": 13
          }
        },
        "range": [
          359,
          362
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
                360,
                361
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              360,
              361
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 13
              },
              "start": {
                "column": 19,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        341,
        446
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          466,
          506
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 13,
                      "line": 19
                    }
                  },
                  "range": [
                    481,
                    494
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        491,
                        494
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              492,
                              493
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 19
                              },
                              "start": {
                                "column": 24,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            492,
                            493
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 19
                            },
                            "start": {
                              "column": 24,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 19
                        },
                        "start": {
                          "column": 23,
                          "line": 19
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Callback",
                      "optional": false,
                      "range": [
                        483,
                        491
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 19
                        },
                        "start": {
                          "column": 15,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      483,
                      494
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  473,
                  494
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 19
                  },
                  "start": {
                    "column": 5,
                    "line": 19
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 19
                },
                "start": {
                  "column": 27,
                  "line": 19
                }
              },
              "range": [
                495,
                504
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  497,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 19
                  },
                  "start": {
                    "column": 29,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              472,
              504
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 18,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Task",
        "optional": false,
        "range": [
          458,
          462
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 18
          },
          "start": {
            "column": 14,
            "line": 18
          }
        },
        "range": [
          462,
          465
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
                463,
                464
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              463,
              464
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 18
              },
              "start": {
                "column": 15,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        448,
        506
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        508,
        1180
      ],
      "attributes": [],
      "declaration": {
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
                    "name": "index",
                    "optional": false,
                    "range": [
                      593,
                      598
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      601,
                      602
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 23
                      },
                      "start": {
                        "column": 16,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    593,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                589,
                602
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
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
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      },
                      "range": [
                        618,
                        623
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
                              620,
                              621
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 24
                              },
                              "start": {
                                "column": 17,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            620,
                            621
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 24
                            },
                            "start": {
                              "column": 17,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          620,
                          623
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 24
                          },
                          "start": {
                            "column": 17,
                            "line": 24
                          }
                        }
                      }
                    },
                    "range": [
                      611,
                      623
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "range": [
                      626,
                      628
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 24
                      },
                      "start": {
                        "column": 23,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    611,
                    628
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                607,
                628
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
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
                          "name": "task",
                          "optional": false,
                          "range": [
                            664,
                            668
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 27
                            },
                            "start": {
                              "column": 12,
                              "line": 27
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tasks",
                            "optional": false,
                            "range": [
                              671,
                              676
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 27
                              },
                              "start": {
                                "column": 19,
                                "line": 27
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "range": [
                              677,
                              682
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 27
                              },
                              "start": {
                                "column": 25,
                                "line": 27
                              }
                            }
                          },
                          "range": [
                            671,
                            683
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 27
                            },
                            "start": {
                              "column": 19,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          664,
                          683
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      660,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "arguments": [
                                                {
                                                  "type": "TSNonNullExpression",
                                                  "expression": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "result",
                                                    "optional": false,
                                                    "range": [
                                                      1083,
                                                      1089
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 39,
                                                        "line": 37
                                                      },
                                                      "start": {
                                                        "column": 33,
                                                        "line": 37
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    1083,
                                                    1090
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 40,
                                                      "line": 37
                                                    },
                                                    "start": {
                                                      "column": 33,
                                                      "line": 37
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
                                                  "name": "results",
                                                  "optional": false,
                                                  "range": [
                                                    1070,
                                                    1077
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 27,
                                                      "line": 37
                                                    },
                                                    "start": {
                                                      "column": 20,
                                                      "line": 37
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
                                                    1078,
                                                    1082
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 32,
                                                      "line": 37
                                                    },
                                                    "start": {
                                                      "column": 28,
                                                      "line": 37
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  1070,
                                                  1082
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 32,
                                                    "line": 37
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 37
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "range": [
                                                1070,
                                                1091
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 41,
                                                  "line": 37
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 37
                                                }
                                              }
                                            },
                                            "range": [
                                              1070,
                                              1091
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 41,
                                                "line": 37
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 37
                                              }
                                            }
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "arguments": [],
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "next",
                                                "optional": false,
                                                "range": [
                                                  1112,
                                                  1116
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 24,
                                                    "line": 38
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 38
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "range": [
                                                1112,
                                                1118
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 26,
                                                  "line": 38
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 38
                                                }
                                              }
                                            },
                                            "range": [
                                              1112,
                                              1118
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 26,
                                                "line": 38
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 38
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          890,
                                          1136
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 39
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 34
                                          }
                                        }
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "error",
                                                  "optional": false,
                                                  "range": [
                                                    854,
                                                    859
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 34,
                                                      "line": 33
                                                    },
                                                    "start": {
                                                      "column": 29,
                                                      "line": 33
                                                    }
                                                  }
                                                },
                                                {
                                                  "type": "Literal",
                                                  "raw": "null",
                                                  "value": null,
                                                  "range": [
                                                    861,
                                                    865
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 40,
                                                      "line": 33
                                                    },
                                                    "start": {
                                                      "column": 36,
                                                      "line": 33
                                                    }
                                                  }
                                                }
                                              ],
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "callback",
                                                "optional": false,
                                                "range": [
                                                  845,
                                                  853
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 28,
                                                    "line": 33
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 33
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "range": [
                                                845,
                                                866
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 41,
                                                  "line": 33
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 33
                                                }
                                              }
                                            },
                                            "range": [
                                              845,
                                              866
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 41,
                                                "line": 33
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 33
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          823,
                                          884
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 34
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 32
                                          }
                                        }
                                      },
                                      "test": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "error",
                                        "optional": false,
                                        "range": [
                                          816,
                                          821
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 32
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 32
                                          }
                                        }
                                      },
                                      "range": [
                                        812,
                                        1136
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 39
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 32
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    794,
                                    1150
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 31
                                    }
                                  }
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "error",
                                    "optional": false,
                                    "range": [
                                      776,
                                      781
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 31
                                      }
                                    }
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "result",
                                    "optional": false,
                                    "range": [
                                      783,
                                      789
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 31,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 31
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  775,
                                  1150
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 31
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "task",
                              "optional": false,
                              "range": [
                                770,
                                774
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 31
                                },
                                "start": {
                                  "column": 12,
                                  "line": 31
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              770,
                              1151
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 40
                              },
                              "start": {
                                "column": 12,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            770,
                            1151
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 40
                            },
                            "start": {
                              "column": 12,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "range": [
                        756,
                        1161
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 41
                        },
                        "start": {
                          "column": 15,
                          "line": 30
                        }
                      }
                    },
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
                                "raw": "null",
                                "value": null,
                                "range": [
                                  726,
                                  730
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 29
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "range": [
                                  732,
                                  739
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 29
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "range": [
                                717,
                                725
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 29
                                },
                                "start": {
                                  "column": 12,
                                  "line": 29
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              717,
                              740
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 29
                              },
                              "start": {
                                "column": 12,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            717,
                            740
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "range": [
                        703,
                        750
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 30
                        },
                        "start": {
                          "column": 19,
                          "line": 28
                        }
                      }
                    },
                    "test": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "task",
                        "optional": false,
                        "range": [
                          697,
                          701
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 28
                          },
                          "start": {
                            "column": 13,
                            "line": 28
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        696,
                        701
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 28
                        },
                        "start": {
                          "column": 12,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      692,
                      1161
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  650,
                  1167
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 20,
                    "line": 26
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "range": [
                  643,
                  647
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              },
              "params": [],
              "range": [
                634,
                1167
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "range": [
                    1172,
                    1176
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 43
                    }
                  }
                },
                "optional": false,
                "range": [
                  1172,
                  1178
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              },
              "range": [
                1172,
                1178
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            }
          ],
          "range": [
            583,
            1180
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 44
            },
            "start": {
              "column": 75,
              "line": 22
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "series",
          "optional": false,
          "range": [
            524,
            530
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 22
            },
            "start": {
              "column": 16,
              "line": 22
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tasks",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 22
                },
                "start": {
                  "column": 31,
                  "line": 22
                }
              },
              "range": [
                539,
                550
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      545,
                      548
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            546,
                            547
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 22
                            },
                            "start": {
                              "column": 38,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          546,
                          547
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 22
                          },
                          "start": {
                            "column": 38,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 22
                      },
                      "start": {
                        "column": 37,
                        "line": 22
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Task",
                    "optional": false,
                    "range": [
                      541,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 22
                      },
                      "start": {
                        "column": 33,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    541,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 22
                    },
                    "start": {
                      "column": 33,
                      "line": 22
                    }
                  }
                },
                "range": [
                  541,
                  550
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 22
                  },
                  "start": {
                    "column": 33,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              534,
              550
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 22
              },
              "start": {
                "column": 26,
                "line": 22
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "callback",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 67,
                  "line": 22
                },
                "start": {
                  "column": 52,
                  "line": 22
                }
              },
              "range": [
                560,
                575
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    570,
                    575
                  ],
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            571,
                            572
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 22
                            },
                            "start": {
                              "column": 63,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          571,
                          572
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 22
                          },
                          "start": {
                            "column": 63,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        571,
                        574
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 22
                        },
                        "start": {
                          "column": 63,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 22
                    },
                    "start": {
                      "column": 62,
                      "line": 22
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Callback",
                  "optional": false,
                  "range": [
                    562,
                    570
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 22
                    },
                    "start": {
                      "column": 54,
                      "line": 22
                    }
                  }
                },
                "range": [
                  562,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 22
                  },
                  "start": {
                    "column": 54,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              552,
              575
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 22
              },
              "start": {
                "column": 44,
                "line": 22
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 74,
              "line": 22
            },
            "start": {
              "column": 68,
              "line": 22
            }
          },
          "range": [
            576,
            582
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              578,
              582
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 22
              },
              "start": {
                "column": 70,
                "line": 22
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 25,
              "line": 22
            },
            "start": {
              "column": 22,
              "line": 22
            }
          },
          "range": [
            530,
            533
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
                  531,
                  532
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 22
                  },
                  "start": {
                    "column": 23,
                    "line": 22
                  }
                }
              },
              "out": false,
              "range": [
                531,
                532
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 22
                },
                "start": {
                  "column": 23,
                  "line": 22
                }
              }
            }
          ]
        },
        "range": [
          515,
          1180
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 7,
            "line": 22
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 22
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
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "null",
                            "value": null,
                            "range": [
                              1221,
                              1225
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 47
                              },
                              "start": {
                                "column": 30,
                                "line": 47
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1227,
                              1228
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 47
                              },
                              "start": {
                                "column": 36,
                                "line": 47
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            1218,
                            1220
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 47
                            },
                            "start": {
                              "column": 27,
                              "line": 47
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1218,
                          1229
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 47
                          },
                          "start": {
                            "column": 27,
                            "line": 47
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        1212,
                        1229
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 47
                        },
                        "start": {
                          "column": 21,
                          "line": 47
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "300",
                      "value": 300,
                      "range": [
                        1231,
                        1234
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 47
                        },
                        "start": {
                          "column": 40,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "range": [
                      1201,
                      1211
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 47
                      },
                      "start": {
                        "column": 10,
                        "line": 47
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1201,
                    1235
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 47
                    },
                    "start": {
                      "column": 10,
                      "line": 47
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
                    "name": "cb",
                    "optional": false,
                    "range": [
                      1195,
                      1197
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 47
                      },
                      "start": {
                        "column": 4,
                        "line": 47
                      }
                    }
                  }
                ],
                "range": [
                  1195,
                  1235
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "null",
                            "value": null,
                            "range": [
                              1267,
                              1271
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 48
                              },
                              "start": {
                                "column": 30,
                                "line": 48
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              1273,
                              1274
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 48
                              },
                              "start": {
                                "column": 36,
                                "line": 48
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            1264,
                            1266
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 48
                            },
                            "start": {
                              "column": 27,
                              "line": 48
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1264,
                          1275
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 48
                          },
                          "start": {
                            "column": 27,
                            "line": 48
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        1258,
                        1275
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 48
                        },
                        "start": {
                          "column": 21,
                          "line": 48
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "200",
                      "value": 200,
                      "range": [
                        1277,
                        1280
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 48
                        },
                        "start": {
                          "column": 40,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "range": [
                      1247,
                      1257
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 48
                      },
                      "start": {
                        "column": 10,
                        "line": 48
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1247,
                    1281
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 48
                    },
                    "start": {
                      "column": 10,
                      "line": 48
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
                    "name": "cb",
                    "optional": false,
                    "range": [
                      1241,
                      1243
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 48
                      },
                      "start": {
                        "column": 4,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  1241,
                  1281
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "null",
                            "value": null,
                            "range": [
                              1313,
                              1317
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 49
                              },
                              "start": {
                                "column": 30,
                                "line": 49
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "raw": "3",
                            "value": 3,
                            "range": [
                              1319,
                              1320
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 49
                              },
                              "start": {
                                "column": 36,
                                "line": 49
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "range": [
                            1310,
                            1312
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 49
                            },
                            "start": {
                              "column": 27,
                              "line": 49
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1310,
                          1321
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 49
                          },
                          "start": {
                            "column": 27,
                            "line": 49
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        1304,
                        1321
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 49
                        },
                        "start": {
                          "column": 21,
                          "line": 49
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "100",
                      "value": 100,
                      "range": [
                        1323,
                        1326
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 49
                        },
                        "start": {
                          "column": 40,
                          "line": 49
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "range": [
                      1293,
                      1303
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 49
                      },
                      "start": {
                        "column": 10,
                        "line": 49
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1293,
                    1327
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 49
                    },
                    "start": {
                      "column": 10,
                      "line": 49
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
                    "name": "cb",
                    "optional": false,
                    "range": [
                      1287,
                      1289
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 49
                      },
                      "start": {
                        "column": 4,
                        "line": 49
                      }
                    }
                  }
                ],
                "range": [
                  1287,
                  1327
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              }
            ],
            "range": [
              1189,
              1330
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 50
              },
              "start": {
                "column": 7,
                "line": 46
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "results",
                              "optional": false,
                              "range": [
                                1433,
                                1440
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 54
                                },
                                "start": {
                                  "column": 20,
                                  "line": 54
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
                              "name": "console",
                              "optional": false,
                              "range": [
                                1421,
                                1428
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 54
                                },
                                "start": {
                                  "column": 8,
                                  "line": 54
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "range": [
                                1429,
                                1432
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 54
                                },
                                "start": {
                                  "column": 16,
                                  "line": 54
                                }
                              }
                            },
                            "range": [
                              1421,
                              1432
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 54
                              },
                              "start": {
                                "column": 8,
                                "line": 54
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1421,
                            1441
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 54
                            },
                            "start": {
                              "column": 8,
                              "line": 54
                            }
                          }
                        },
                        "range": [
                          1421,
                          1441
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 54
                          },
                          "start": {
                            "column": 8,
                            "line": 54
                          }
                        }
                      }
                    ],
                    "range": [
                      1411,
                      1447
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 55
                      },
                      "start": {
                        "column": 11,
                        "line": 53
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "range": [
                                1393,
                                1398
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 52
                                },
                                "start": {
                                  "column": 22,
                                  "line": 52
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
                              "name": "console",
                              "optional": false,
                              "range": [
                                1379,
                                1386
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 52
                                },
                                "start": {
                                  "column": 8,
                                  "line": 52
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "range": [
                                1387,
                                1392
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 52
                                },
                                "start": {
                                  "column": 16,
                                  "line": 52
                                }
                              }
                            },
                            "range": [
                              1379,
                              1392
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 52
                              },
                              "start": {
                                "column": 8,
                                "line": 52
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1379,
                            1399
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 52
                            },
                            "start": {
                              "column": 8,
                              "line": 52
                            }
                          }
                        },
                        "range": [
                          1379,
                          1399
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 52
                          },
                          "start": {
                            "column": 8,
                            "line": 52
                          }
                        }
                      }
                    ],
                    "range": [
                      1369,
                      1405
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 53
                      },
                      "start": {
                        "column": 15,
                        "line": 51
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "range": [
                      1362,
                      1367
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1358,
                    1447
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 55
                    },
                    "start": {
                      "column": 4,
                      "line": 51
                    }
                  }
                }
              ],
              "range": [
                1352,
                1449
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 56
                },
                "start": {
                  "column": 23,
                  "line": 50
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "range": [
                  1333,
                  1338
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "results",
                "optional": false,
                "range": [
                  1340,
                  1347
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 50
                  },
                  "start": {
                    "column": 11,
                    "line": 50
                  }
                }
              }
            ],
            "range": [
              1332,
              1449
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 56
              },
              "start": {
                "column": 3,
                "line": 50
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "series",
          "optional": false,
          "range": [
            1182,
            1188
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 46
            },
            "start": {
              "column": 0,
              "line": 46
            }
          }
        },
        "optional": false,
        "range": [
          1182,
          1450
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 46
          }
        }
      },
      "range": [
        1182,
        1450
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 57
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
