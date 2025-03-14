__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    903
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          11
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
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
        "name": "A",
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
        11
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
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
          34,
          144
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                47,
                48
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              },
              "range": [
                48,
                56
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  50,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 14,
                    "line": 7
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "9",
              "value": 9,
              "range": [
                59,
                60
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            },
            "range": [
              40,
              61
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                67,
                78
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
              "type": "FunctionExpression",
              "range": [
                79,
                142
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "directive": "use strict",
                    "expression": {
                      "type": "Literal",
                      "raw": "\"use strict\"",
                      "value": "use strict",
                      "range": [
                        92,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      92,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          128,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 11
                          },
                          "start": {
                            "column": 8,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        128,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 11
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      128,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
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
                  82,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 19,
                    "line": 9
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "range": [
              67,
              142
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 9
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
            "column": 18,
            "line": 6
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          22,
          23
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
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          32,
          33
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 6
          },
          "start": {
            "column": 16,
            "line": 6
          }
        }
      },
      "range": [
        16,
        144
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          164,
          283
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                177,
                178
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 16
                },
                "start": {
                  "column": 12,
                  "line": 16
                }
              },
              "range": [
                178,
                186
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  180,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 16
                  },
                  "start": {
                    "column": 14,
                    "line": 16
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "9",
              "value": 9,
              "range": [
                189,
                190
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 16
                },
                "start": {
                  "column": 23,
                  "line": 16
                }
              }
            },
            "range": [
              170,
              191
            ],
            "loc": {
              "end": {
                "column": 25,
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
                197,
                208
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                209,
                281
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          222,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        222,
                        229
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      222,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "raw": "\"use strict\"",
                      "value": "use strict",
                      "range": [
                        262,
                        274
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      262,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  212,
                  281
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 19,
                    "line": 18
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              }
            },
            "range": [
              197,
              281
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 18,
            "line": 15
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
          152,
          153
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
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          162,
          163
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 15
          },
          "start": {
            "column": 16,
            "line": 15
          }
        }
      },
      "range": [
        146,
        283
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          303,
          463
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                316,
                317
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 25
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              },
              "range": [
                317,
                325
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  319,
                  325
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 25
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "9",
              "value": 9,
              "range": [
                328,
                329
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 25
                },
                "start": {
                  "column": 23,
                  "line": 25
                }
              }
            },
            "range": [
              309,
              330
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
                336,
                347
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
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
                348,
                461
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            365,
                            366
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 28
                            },
                            "start": {
                              "column": 12,
                              "line": 28
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            369,
                            370
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 28
                            },
                            "start": {
                              "column": 16,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          365,
                          370
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
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      361,
                      371
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
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
                          "name": "y",
                          "optional": false,
                          "range": [
                            396,
                            397
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              400,
                              404
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 29
                              },
                              "start": {
                                "column": 16,
                                "line": 29
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              405,
                              406
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 29
                              },
                              "start": {
                                "column": 21,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            400,
                            406
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 29
                            },
                            "start": {
                              "column": 16,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          396,
                          406
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 29
                          },
                          "start": {
                            "column": 12,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      392,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          425,
                          430
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 30
                          },
                          "start": {
                            "column": 8,
                            "line": 30
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        425,
                        432
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      425,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "raw": "\"use strict\"",
                      "value": "use strict",
                      "range": [
                        442,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      442,
                      455
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  351,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 19,
                    "line": 27
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 16,
                  "line": 27
                }
              }
            },
            "range": [
              336,
              461
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 18,
            "line": 24
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
          291,
          292
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 24
          },
          "start": {
            "column": 6,
            "line": 24
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          301,
          302
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 24
          },
          "start": {
            "column": 16,
            "line": 24
          }
        }
      },
      "range": [
        285,
        463
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          484,
          601
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                504,
                505
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 36
                },
                "start": {
                  "column": 18,
                  "line": 36
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 36
                },
                "start": {
                  "column": 19,
                  "line": 36
                }
              },
              "range": [
                505,
                513
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  507,
                  513
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 36
                  },
                  "start": {
                    "column": 21,
                    "line": 36
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "9",
              "value": 9,
              "range": [
                516,
                517
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 36
                },
                "start": {
                  "column": 30,
                  "line": 36
                }
              }
            },
            "range": [
              490,
              518
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                524,
                535
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
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
                536,
                599
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "directive": "use strict",
                    "expression": {
                      "type": "Literal",
                      "raw": "\"use strict\"",
                      "value": "use strict",
                      "range": [
                        549,
                        561
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      549,
                      562
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          585,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 40
                          },
                          "start": {
                            "column": 8,
                            "line": 40
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        585,
                        592
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      585,
                      593
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  539,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 19,
                    "line": 38
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 16,
                  "line": 38
                }
              }
            },
            "range": [
              524,
              599
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 19,
            "line": 35
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bs",
        "optional": false,
        "range": [
          471,
          473
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 35
          },
          "start": {
            "column": 6,
            "line": 35
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          482,
          483
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 35
          },
          "start": {
            "column": 17,
            "line": 35
          }
        }
      },
      "range": [
        465,
        601
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          622,
          748
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                642,
                643
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 45
                },
                "start": {
                  "column": 18,
                  "line": 45
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 45
                },
                "start": {
                  "column": 19,
                  "line": 45
                }
              },
              "range": [
                643,
                651
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  645,
                  651
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 45
                  },
                  "start": {
                    "column": 21,
                    "line": 45
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "9",
              "value": 9,
              "range": [
                654,
                655
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 45
                },
                "start": {
                  "column": 30,
                  "line": 45
                }
              }
            },
            "range": [
              628,
              656
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
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
                662,
                673
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
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
                674,
                746
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          687,
                          692
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 48
                          },
                          "start": {
                            "column": 8,
                            "line": 48
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        687,
                        694
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 48
                        },
                        "start": {
                          "column": 8,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      687,
                      695
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "raw": "\"use strict\"",
                      "value": "use strict",
                      "range": [
                        727,
                        739
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 49
                        },
                        "start": {
                          "column": 8,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      727,
                      740
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
                      }
                    }
                  }
                ],
                "range": [
                  677,
                  746
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 50
                  },
                  "start": {
                    "column": 19,
                    "line": 47
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 50
                },
                "start": {
                  "column": 16,
                  "line": 47
                }
              }
            },
            "range": [
              662,
              746
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 19,
            "line": 44
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cs",
        "optional": false,
        "range": [
          609,
          611
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 44
          },
          "start": {
            "column": 6,
            "line": 44
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          620,
          621
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 44
          },
          "start": {
            "column": 17,
            "line": 44
          }
        }
      },
      "range": [
        603,
        748
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          769,
          903
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                789,
                790
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 54
                },
                "start": {
                  "column": 18,
                  "line": 54
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 27,
                  "line": 54
                },
                "start": {
                  "column": 19,
                  "line": 54
                }
              },
              "range": [
                790,
                798
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  792,
                  798
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 54
                  },
                  "start": {
                    "column": 21,
                    "line": 54
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "9",
              "value": 9,
              "range": [
                801,
                802
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 54
                },
                "start": {
                  "column": 30,
                  "line": 54
                }
              }
            },
            "range": [
              775,
              803
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
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
                809,
                820
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
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
                821,
                901
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            838,
                            839
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 57
                            },
                            "start": {
                              "column": 12,
                              "line": 57
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            842,
                            843
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 57
                            },
                            "start": {
                              "column": 16,
                              "line": 57
                            }
                          }
                        },
                        "range": [
                          838,
                          843
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 57
                          },
                          "start": {
                            "column": 12,
                            "line": 57
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      834,
                      844
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          865,
                          870
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 58
                          },
                          "start": {
                            "column": 8,
                            "line": 58
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        865,
                        872
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      865,
                      873
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "raw": "\"use strict\"",
                      "value": "use strict",
                      "range": [
                        882,
                        894
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 59
                        },
                        "start": {
                          "column": 8,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      882,
                      895
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  }
                ],
                "range": [
                  824,
                  901
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 60
                  },
                  "start": {
                    "column": 19,
                    "line": 56
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 16,
                  "line": 56
                }
              }
            },
            "range": [
              809,
              901
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 19,
            "line": 53
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ds",
        "optional": false,
        "range": [
          756,
          758
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 53
          },
          "start": {
            "column": 6,
            "line": 53
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          767,
          768
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 53
          },
          "start": {
            "column": 17,
            "line": 53
          }
        }
      },
      "range": [
        750,
        903
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 61
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
