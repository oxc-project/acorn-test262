__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    550
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LiteralsAndWeakTypes",
        "optional": false,
        "range": [
          5,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'A'",
              "value": "A",
              "range": [
                33,
                36
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              33,
              36
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "raw": "'B'",
              "value": "B",
              "range": [
                41,
                44
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              41,
              44
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "range": [
                    51,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 4
                    },
                    "start": {
                      "column": 6,
                      "line": 4
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  },
                  "range": [
                    60,
                    66
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        62,
                        66
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      62,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 4
                      },
                      "start": {
                        "column": 17,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  51,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              49,
              68
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "range": [
                    75,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 6,
                      "line": 5
                    }
                  }
                },
                "kind": "method",
                "optional": true,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  },
                  "range": [
                    89,
                    97
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      91,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 22,
                        "line": 5
                      }
                    }
                  }
                },
                "static": false,
                "range": [
                  75,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 5
                  },
                  "start": {
                    "column": 6,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              73,
              99
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "range": [
                    106,
                    117
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 6
                    },
                    "start": {
                      "column": 6,
                      "line": 6
                    }
                  }
                },
                "kind": "method",
                "optional": true,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 6
                    },
                    "start": {
                      "column": 20,
                      "line": 6
                    }
                  },
                  "range": [
                    120,
                    128
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      122,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    }
                  }
                },
                "static": false,
                "range": [
                  106,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 6
                  },
                  "start": {
                    "column": 6,
                    "line": 6
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "otherOptionalProp",
                  "optional": false,
                  "range": [
                    130,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 6
                    },
                    "start": {
                      "column": 30,
                      "line": 6
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 6
                    },
                    "start": {
                      "column": 48,
                      "line": 6
                    }
                  },
                  "range": [
                    148,
                    156
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      150,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 6
                      },
                      "start": {
                        "column": 50,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  130,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 56,
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
              104,
              158
            ],
            "loc": {
              "end": {
                "column": 58,
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
          31,
          158
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 6
          },
          "start": {
            "column": 2,
            "line": 2
          }
        }
      },
      "range": [
        0,
        159
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 6
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
              167,
              168
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            257,
                            260
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 12
                            },
                            "start": {
                              "column": 6,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          257,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 12
                          },
                          "start": {
                            "column": 6,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "range": [
                      249,
                      267
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 11
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            233,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 10
                            },
                            "start": {
                              "column": 6,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          233,
                          237
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 10
                          },
                          "start": {
                            "column": 6,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      225,
                      243
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 11
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "range": [
                        212,
                        215
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'A'",
                      "value": "A",
                      "range": [
                        220,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 16,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      212,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    208,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                202,
                269
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 14
                },
                "start": {
                  "column": 41,
                  "line": 8
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
                      "line": 8
                    }
                  },
                  "range": [
                    175,
                    197
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LiteralsAndWeakTypes",
                      "optional": false,
                      "range": [
                        177,
                        197
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      177,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  }
                },
                "range": [
                  172,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              171,
              269
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 10,
                "line": 8
              }
            }
          },
          "range": [
            167,
            269
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        161,
        269
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PrimitivesAndWeakTypes",
        "optional": false,
        "range": [
          276,
          298
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "range": [
              305,
              311
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "TSNumberKeyword",
            "range": [
              316,
              322
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "range": [
                    329,
                    337
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 19
                    },
                    "start": {
                      "column": 6,
                      "line": 19
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  },
                  "range": [
                    338,
                    344
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        340,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 19
                        },
                        "start": {
                          "column": 17,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      340,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 19
                      },
                      "start": {
                        "column": 17,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  329,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 19
                  },
                  "start": {
                    "column": 6,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              327,
              346
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "range": [
                    353,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 20
                    },
                    "start": {
                      "column": 6,
                      "line": 20
                    }
                  }
                },
                "kind": "method",
                "optional": true,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 20
                    },
                    "start": {
                      "column": 20,
                      "line": 20
                    }
                  },
                  "range": [
                    367,
                    375
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      369,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 20
                      },
                      "start": {
                        "column": 22,
                        "line": 20
                      }
                    }
                  }
                },
                "static": false,
                "range": [
                  353,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 20
                  },
                  "start": {
                    "column": 6,
                    "line": 20
                  }
                }
              }
            ],
            "range": [
              351,
              377
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSMethodSignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "range": [
                    384,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 21
                    },
                    "start": {
                      "column": 6,
                      "line": 21
                    }
                  }
                },
                "kind": "method",
                "optional": true,
                "params": [],
                "readonly": false,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 21
                    },
                    "start": {
                      "column": 20,
                      "line": 21
                    }
                  },
                  "range": [
                    398,
                    406
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      400,
                      406
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 21
                      },
                      "start": {
                        "column": 22,
                        "line": 21
                      }
                    }
                  }
                },
                "static": false,
                "range": [
                  384,
                  407
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 21
                  },
                  "start": {
                    "column": 6,
                    "line": 21
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "otherOptionalProp",
                  "optional": false,
                  "range": [
                    408,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 21
                    },
                    "start": {
                      "column": 30,
                      "line": 21
                    }
                  }
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 21
                    },
                    "start": {
                      "column": 48,
                      "line": 21
                    }
                  },
                  "range": [
                    426,
                    434
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      428,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 21
                      },
                      "start": {
                        "column": 50,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  408,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 21
                  },
                  "start": {
                    "column": 30,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              382,
              436
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          303,
          436
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 21
          },
          "start": {
            "column": 2,
            "line": 17
          }
        }
      },
      "range": [
        271,
        437
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "h",
            "optional": false,
            "range": [
              445,
              446
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            537,
                            540
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 27
                            },
                            "start": {
                              "column": 6,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          537,
                          541
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 27
                          },
                          "start": {
                            "column": 6,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "range": [
                      529,
                      547
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 28
                      },
                      "start": {
                        "column": 11,
                        "line": 26
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            513,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 25
                            },
                            "start": {
                              "column": 6,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          513,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 25
                          },
                          "start": {
                            "column": 6,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "range": [
                      505,
                      523
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 26
                      },
                      "start": {
                        "column": 21,
                        "line": 24
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "range": [
                        492,
                        495
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'A'",
                      "value": "A",
                      "range": [
                        500,
                        503
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 24
                        },
                        "start": {
                          "column": 16,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      492,
                      503
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    488,
                    547
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                482,
                549
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 29
                },
                "start": {
                  "column": 43,
                  "line": 23
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 23
                    },
                    "start": {
                      "column": 14,
                      "line": 23
                    }
                  },
                  "range": [
                    453,
                    477
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PrimitivesAndWeakTypes",
                      "optional": false,
                      "range": [
                        455,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 23
                        },
                        "start": {
                          "column": 16,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      455,
                      477
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 23
                      },
                      "start": {
                        "column": 16,
                        "line": 23
                      }
                    }
                  }
                },
                "range": [
                  450,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              }
            ],
            "range": [
              449,
              549
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 29
              },
              "start": {
                "column": 10,
                "line": 23
              }
            }
          },
          "range": [
            445,
            549
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        439,
        549
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
