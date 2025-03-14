__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    257
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              },
              "range": [
                12,
                17
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"a\"",
                  "value": "a",
                  "range": [
                    14,
                    17
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 1
                    },
                    "start": {
                      "column": 14,
                      "line": 1
                    }
                  }
                },
                "range": [
                  14,
                  17
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 1
                  },
                  "start": {
                    "column": 14,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              11,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "range": [
          9,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "range": [
        0,
        20
      ],
      "loc": {
        "end": {
          "column": 20,
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c0",
                  "optional": false,
                  "range": [
                    27,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "right": {
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
                          33,
                          34
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 2
                          },
                          "start": {
                            "column": 12,
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
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          36,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 2
                          },
                          "start": {
                            "column": 15,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        33,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 2
                        },
                        "start": {
                          "column": 12,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    32,
                    40
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  27,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 6,
                    "line": 2
                  }
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 21,
                  "line": 2
                }
              },
              "range": [
                42,
                48
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "range": [
                          45,
                          46
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 2
                          },
                          "start": {
                            "column": 24,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        45,
                        46
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 24,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      45,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  44,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              25,
              48
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              51,
              53
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 2
              },
              "start": {
                "column": 30,
                "line": 2
              }
            }
          },
          "range": [
            25,
            53
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        21,
        54
      ],
      "loc": {
        "end": {
          "column": 33,
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "range": [
                  61,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "range": [
                    65,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "right": {
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
                          71,
                          72
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
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          74,
                          77
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
                      },
                      "range": [
                        71,
                        77
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 3
                        },
                        "start": {
                          "column": 16,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    70,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 3
                    },
                    "start": {
                      "column": 15,
                      "line": 3
                    }
                  }
                },
                "range": [
                  65,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              },
              "range": [
                80,
                94
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      83,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 3
                      },
                      "start": {
                        "column": 28,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "range": [
                          91,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 3
                          },
                          "start": {
                            "column": 36,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        91,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 3
                        },
                        "start": {
                          "column": 36,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      91,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 3
                      },
                      "start": {
                        "column": 36,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  82,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              59,
              94
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  98,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 43,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              97,
              100
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 3
              },
              "start": {
                "column": 42,
                "line": 3
              }
            }
          },
          "range": [
            59,
            100
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        55,
        101
      ],
      "loc": {
        "end": {
          "column": 46,
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
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c_",
                  "optional": false,
                  "range": [
                    108,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 4
                    },
                    "start": {
                      "column": 6,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "right": {
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
                          114,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"a\"",
                        "value": "a",
                        "range": [
                          117,
                          120
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 4
                          },
                          "start": {
                            "column": 15,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        114,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    113,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 11,
                      "line": 4
                    }
                  }
                },
                "range": [
                  108,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
                }
              },
              "range": [
                123,
                128
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "range": [
                      125,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 4
                      },
                      "start": {
                        "column": 23,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    125,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                },
                "range": [
                  125,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              106,
              128
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              131,
              133
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 4
              }
            }
          },
          "range": [
            106,
            133
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        102,
        134
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          202,
                          208
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 8
                          },
                          "start": {
                            "column": 9,
                            "line": 8
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "AssignmentPattern",
                        "range": [
                          202,
                          217
                        ],
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "range": [
                            202,
                            208
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 8
                            },
                            "start": {
                              "column": 9,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "right": {
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
                                  212,
                                  213
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 8
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  215,
                                  216
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                212,
                                216
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 8
                                },
                                "start": {
                                  "column": 19,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "range": [
                            211,
                            217
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 8
                            },
                            "start": {
                              "column": 18,
                              "line": 8
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 8
                          },
                          "start": {
                            "column": 9,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        202,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 8
                        },
                        "start": {
                          "column": 9,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 8
                      },
                      "start": {
                        "column": 25,
                        "line": 8
                      }
                    },
                    "range": [
                      218,
                      228
                    ],
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            221,
                            227
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 8
                            },
                            "start": {
                              "column": 28,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        220,
                        228
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 8
                        },
                        "start": {
                          "column": 27,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    201,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        232,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 8
                        },
                        "start": {
                          "column": 39,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    231,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 8
                    },
                    "start": {
                      "column": 38,
                      "line": 8
                    }
                  }
                },
                "range": [
                  201,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              197,
              235
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "range": [
                247,
                253
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              240,
              254
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          191,
          256
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 7
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
          185,
          188
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
      "params": [],
      "range": [
        176,
        256
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
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
