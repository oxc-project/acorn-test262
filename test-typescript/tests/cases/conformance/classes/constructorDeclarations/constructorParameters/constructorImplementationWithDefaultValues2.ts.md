__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    352
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          105
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                14,
                25
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                25,
                29
              ],
              "async": false,
              "body": null,
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
                  "range": [
                    26,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              29
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                34,
                45
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                45,
                103
              ],
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
                          "name": "y",
                          "optional": false,
                          "range": [
                            91,
                            92
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
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            95,
                            96
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          91,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      87,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  68,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 3
                          },
                          "start": {
                            "column": 24,
                            "line": 3
                          }
                        },
                        "range": [
                          54,
                          62
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            56,
                            62
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 3
                            },
                            "start": {
                              "column": 26,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        53,
                        62
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 23,
                          "line": 3
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        65,
                        66
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
                    "range": [
                      53,
                      66
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    46,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              34,
              103
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
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
            "line": 6
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        105
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          121,
          232
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                127,
                138
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                138,
                151
              ],
              "async": false,
              "body": null,
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
                        "column": 20,
                        "line": 9
                      },
                      "start": {
                        "column": 17,
                        "line": 9
                      }
                    },
                    "range": [
                      140,
                      143
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          142,
                          143
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 9
                          },
                          "start": {
                            "column": 19,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        142,
                        143
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 9
                        },
                        "start": {
                          "column": 19,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    139,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 9
                    },
                    "start": {
                      "column": 16,
                      "line": 9
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
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 23,
                        "line": 9
                      }
                    },
                    "range": [
                      146,
                      149
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          148,
                          149
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 9
                          },
                          "start": {
                            "column": 25,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        148,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 25,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    145,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 9
                    },
                    "start": {
                      "column": 22,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            },
            "range": [
              127,
              151
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                156,
                167
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                167,
                230
              ],
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
                          "name": "z",
                          "optional": false,
                          "range": [
                            218,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            222,
                            223
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 11
                            },
                            "start": {
                              "column": 16,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          218,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      214,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  195,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 43,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 10
                        },
                        "start": {
                          "column": 17,
                          "line": 10
                        }
                      },
                      "range": [
                        169,
                        172
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            171,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 10
                            },
                            "start": {
                              "column": 19,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          171,
                          172
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 10
                          },
                          "start": {
                            "column": 19,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      168,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 10
                      },
                      "start": {
                        "column": 16,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      175,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    168,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 10
                    },
                    "start": {
                      "column": 16,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 10
                          },
                          "start": {
                            "column": 34,
                            "line": 10
                          }
                        },
                        "range": [
                          186,
                          189
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              188,
                              189
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 10
                              },
                              "start": {
                                "column": 36,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            188,
                            189
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 10
                            },
                            "start": {
                              "column": 36,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        185,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 10
                        },
                        "start": {
                          "column": 33,
                          "line": 10
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        192,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 10
                        },
                        "start": {
                          "column": 40,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      185,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 10
                      },
                      "start": {
                        "column": 33,
                        "line": 10
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    178,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 10
                    },
                    "start": {
                      "column": 26,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "range": [
              156,
              230
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          113,
          114
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
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 13,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        },
        "range": [
          114,
          120
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
                115,
                116
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              115,
              116
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
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
              "name": "U",
              "optional": false,
              "range": [
                118,
                119
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "out": false,
            "range": [
              118,
              119
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          }
        ]
      },
      "range": [
        107,
        232
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          258,
          352
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                264,
                275
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                275,
                279
              ],
              "async": false,
              "body": null,
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
                  "range": [
                    276,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 16,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "range": [
              264,
              279
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                284,
                295
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                295,
                350
              ],
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
                          "name": "y",
                          "optional": false,
                          "range": [
                            338,
                            339
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 18
                            },
                            "start": {
                              "column": 12,
                              "line": 18
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            342,
                            343
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 18
                            },
                            "start": {
                              "column": 16,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          338,
                          343
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 18
                          },
                          "start": {
                            "column": 12,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      334,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  315,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 35,
                    "line": 17
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 17
                        }
                      },
                      "range": [
                        297,
                        300
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            299,
                            300
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 17
                            },
                            "start": {
                              "column": 19,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          299,
                          300
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 17
                          },
                          "start": {
                            "column": 19,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      296,
                      300
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 17
                      },
                      "start": {
                        "column": 16,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "range": [
                        307,
                        311
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 17
                        },
                        "start": {
                          "column": 27,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      303,
                      313
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 17
                      },
                      "start": {
                        "column": 23,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    296,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 17
                    },
                    "start": {
                      "column": 16,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 17
                }
              }
            },
            "range": [
              284,
              350
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 17
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
            "column": 24,
            "line": 15
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          240,
          241
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 15
          },
          "start": {
            "column": 6,
            "line": 15
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 15
          }
        },
        "range": [
          241,
          257
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  252,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 15
                  },
                  "start": {
                    "column": 18,
                    "line": 15
                  }
                }
              },
              "range": [
                252,
                256
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 18,
                  "line": 15
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
                242,
                243
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              242,
              256
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 8,
                "line": 15
              }
            }
          }
        ]
      },
      "range": [
        234,
        352
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
