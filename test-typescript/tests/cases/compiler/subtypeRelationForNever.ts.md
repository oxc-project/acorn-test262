__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    370
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "range": [
                    57,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 1
                    },
                    "start": {
                      "column": 57,
                      "line": 1
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "range": [
                  51,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 1
                  },
                  "start": {
                    "column": 51,
                    "line": 1
                  }
                }
              },
              "range": [
                47,
                65
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 1
                },
                "start": {
                  "column": 47,
                  "line": 1
                }
              }
            },
            "range": [
              41,
              66
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 1
              },
              "start": {
                "column": 41,
                "line": 1
              }
            }
          }
        ],
        "range": [
          39,
          68
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 1
          },
          "start": {
            "column": 39,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fail",
        "optional": false,
        "range": [
          9,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            },
            "range": [
              21,
              29
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                23,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 23,
                  "line": 1
                }
              }
            }
          },
          "range": [
            14,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 31,
            "line": 1
          }
        },
        "range": [
          31,
          38
        ],
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "range": [
            33,
            38
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 1
            },
            "start": {
              "column": 33,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        68
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
              "type": "ConditionalExpression",
              "alternate": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "'No values.'",
                    "value": "No values.",
                    "range": [
                      230,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 3
                      },
                      "start": {
                        "column": 58,
                        "line": 3
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "haveNone",
                  "optional": false,
                  "range": [
                    221,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 3
                    },
                    "start": {
                      "column": 49,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "range": [
                  221,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 3
                  },
                  "start": {
                    "column": 49,
                    "line": 3
                  }
                }
              },
              "consequent": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "range": [
                      211,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 3
                      },
                      "start": {
                        "column": 39,
                        "line": 3
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "haveFew",
                  "optional": false,
                  "range": [
                    203,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 31,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "range": [
                  203,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 3
                  },
                  "start": {
                    "column": 31,
                    "line": 3
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "range": [
                      183,
                      189
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
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
                      190,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 3
                      },
                      "start": {
                        "column": 18,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    183,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 3
                    },
                    "start": {
                      "column": 11,
                      "line": 3
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    199,
                    200
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
                "range": [
                  183,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              },
              "range": [
                183,
                243
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              176,
              244
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          170,
          246
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 101,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withFew",
        "optional": false,
        "range": [
          78,
          85
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 2
              },
              "start": {
                "column": 29,
                "line": 2
              }
            },
            "range": [
              98,
              103
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    100,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 2
                    },
                    "start": {
                      "column": 31,
                      "line": 2
                    }
                  }
                },
                "range": [
                  100,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 2
                  },
                  "start": {
                    "column": 31,
                    "line": 2
                  }
                }
              },
              "range": [
                100,
                103
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 2
                },
                "start": {
                  "column": 31,
                  "line": 2
                }
              }
            }
          },
          "range": [
            92,
            103
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 2
            },
            "start": {
              "column": 23,
              "line": 2
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haveFew",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 2
              },
              "start": {
                "column": 43,
                "line": 2
              }
            },
            "range": [
              112,
              132
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 2
                      },
                      "start": {
                        "column": 52,
                        "line": 2
                      }
                    },
                    "range": [
                      121,
                      126
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            123,
                            124
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 2
                            },
                            "start": {
                              "column": 54,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          123,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 2
                          },
                          "start": {
                            "column": 54,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        123,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 2
                        },
                        "start": {
                          "column": 54,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    115,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 2
                    },
                    "start": {
                      "column": 46,
                      "line": 2
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 2
                  },
                  "start": {
                    "column": 59,
                    "line": 2
                  }
                },
                "range": [
                  128,
                  132
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "range": [
                      131,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 2
                      },
                      "start": {
                        "column": 62,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    131,
                    132
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 2
                    },
                    "start": {
                      "column": 62,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                114,
                132
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 2
                },
                "start": {
                  "column": 45,
                  "line": 2
                }
              }
            }
          },
          "range": [
            105,
            132
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 2
            },
            "start": {
              "column": 36,
              "line": 2
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haveNone",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 96,
                "line": 2
              },
              "start": {
                "column": 73,
                "line": 2
              }
            },
            "range": [
              142,
              165
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "reason",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 90,
                        "line": 2
                      },
                      "start": {
                        "column": 82,
                        "line": 2
                      }
                    },
                    "range": [
                      151,
                      159
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        153,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 90,
                          "line": 2
                        },
                        "start": {
                          "column": 84,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    145,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 2
                    },
                    "start": {
                      "column": 76,
                      "line": 2
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 96,
                    "line": 2
                  },
                  "start": {
                    "column": 92,
                    "line": 2
                  }
                },
                "range": [
                  161,
                  165
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "range": [
                      164,
                      165
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 2
                      },
                      "start": {
                        "column": 95,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    164,
                    165
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 2
                    },
                    "start": {
                      "column": 95,
                      "line": 2
                    }
                  }
                }
              },
              "range": [
                144,
                165
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 2
                },
                "start": {
                  "column": 75,
                  "line": 2
                }
              }
            }
          },
          "range": [
            134,
            165
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 2
            },
            "start": {
              "column": 65,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 100,
            "line": 2
          },
          "start": {
            "column": 97,
            "line": 2
          }
        },
        "range": [
          166,
          169
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "range": [
              168,
              169
            ],
            "loc": {
              "end": {
                "column": 100,
                "line": 2
              },
              "start": {
                "column": 99,
                "line": 2
              }
            }
          },
          "range": [
            168,
            169
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 2
            },
            "start": {
              "column": 99,
              "line": 2
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        },
        "range": [
          85,
          91
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                86,
                87
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              86,
              87
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 17,
                "line": 2
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
              "name": "r",
              "optional": false,
              "range": [
                89,
                90
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 20,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              89,
              90
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 20,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        69,
        246
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                285,
                290
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 5
                },
                "start": {
                  "column": 38,
                  "line": 5
                }
              }
            },
            "range": [
              278,
              291
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 5
              },
              "start": {
                "column": 31,
                "line": 5
              }
            }
          }
        ],
        "range": [
          276,
          293
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 5
          },
          "start": {
            "column": 29,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "id",
        "optional": false,
        "range": [
          256,
          258
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
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
                "column": 23,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            },
            "range": [
              267,
              270
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  269,
                  270
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 5
                  }
                }
              },
              "range": [
                269,
                270
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              }
            }
          },
          "range": [
            262,
            270
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 5
            },
            "start": {
              "column": 15,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
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
          272,
          275
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              274,
              275
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
            274,
            275
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        },
        "range": [
          258,
          261
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                259,
                260
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              259,
              260
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        247,
        293
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 5
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
            "name": "result",
            "optional": false,
            "range": [
              300,
              306
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
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      318,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 24,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      321,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 6
                      },
                      "start": {
                        "column": 27,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      324,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 6
                      },
                      "start": {
                        "column": 30,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  317,
                  326
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 6
                  },
                  "start": {
                    "column": 23,
                    "line": 6
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "range": [
                  328,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 6
                  },
                  "start": {
                    "column": 34,
                    "line": 6
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "range": [
                  332,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 6
                  },
                  "start": {
                    "column": 38,
                    "line": 6
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withFew",
              "optional": false,
              "range": [
                309,
                316
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "optional": false,
            "range": [
              309,
              337
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 6
              },
              "start": {
                "column": 15,
                "line": 6
              }
            }
          },
          "range": [
            300,
            337
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        294,
        338
      ],
      "loc": {
        "end": {
          "column": 44,
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
