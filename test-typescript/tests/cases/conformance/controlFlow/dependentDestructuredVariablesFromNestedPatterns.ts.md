__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    963
  ],
  "body": [
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "range": [
                            76,
                            78
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 2
                            },
                            "start": {
                              "column": 10,
                              "line": 2
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1Error",
                          "optional": false,
                          "range": [
                            80,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 2
                            },
                            "start": {
                              "column": 14,
                              "line": 2
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        75,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 2
                        },
                        "start": {
                          "column": 9,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    74,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 8,
                      "line": 2
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    92,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 2
                    },
                    "start": {
                      "column": 26,
                      "line": 2
                    }
                  }
                },
                "range": [
                  74,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              68,
              96
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    119,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                113,
                130
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "range": [
                104,
                111
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            "range": [
              100,
              130
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                134,
                136
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "range": [
              134,
              137
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "range": [
          64,
          139
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 64,
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
        "name": "test1",
        "optional": false,
        "range": [
          9,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
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
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            },
            "range": [
              18,
              62
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            22,
                            31
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 1
                            },
                            "start": {
                              "column": 22,
                              "line": 1
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
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
                          },
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
                      ],
                      "range": [
                        21,
                        39
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 1
                        },
                        "start": {
                          "column": 21,
                          "line": 1
                        }
                      }
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            43,
                            49
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 1
                            },
                            "start": {
                              "column": 43,
                              "line": 1
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            51,
                            60
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 1
                            },
                            "start": {
                              "column": 51,
                              "line": 1
                            }
                          }
                        }
                      ],
                      "range": [
                        42,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 1
                        },
                        "start": {
                          "column": 42,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "range": [
                    21,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                20,
                62
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 1
                },
                "start": {
                  "column": 20,
                  "line": 1
                }
              }
            }
          },
          "range": [
            15,
            62
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        139
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    240,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                234,
                251
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "range": [
                225,
                232
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              }
            },
            "range": [
              221,
              251
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                255,
                257
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 16
                },
                "start": {
                  "column": 2,
                  "line": 16
                }
              }
            },
            "range": [
              255,
              258
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          }
        ],
        "range": [
          217,
          260
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 76,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "range": [
          150,
          155
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "range": [
                    158,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 11
                    },
                    "start": {
                      "column": 17,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1Error",
                  "optional": false,
                  "range": [
                    162,
                    169
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 11
                    },
                    "start": {
                      "column": 21,
                      "line": 11
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                157,
                170
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 11
              },
              "start": {
                "column": 30,
                "line": 11
              }
            },
            "range": [
              171,
              215
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            175,
                            184
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 11
                            },
                            "start": {
                              "column": 34,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "range": [
                              186,
                              191
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 11
                              },
                              "start": {
                                "column": 45,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            186,
                            191
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 11
                            },
                            "start": {
                              "column": 45,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        174,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 11
                        },
                        "start": {
                          "column": 33,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            196,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 11
                            },
                            "start": {
                              "column": 55,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            204,
                            213
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 11
                            },
                            "start": {
                              "column": 63,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        195,
                        214
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 11
                        },
                        "start": {
                          "column": 54,
                          "line": 11
                        }
                      }
                    }
                  ],
                  "range": [
                    174,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 11
                    },
                    "start": {
                      "column": 33,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                173,
                215
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 11
                },
                "start": {
                  "column": 32,
                  "line": 11
                }
              }
            }
          },
          "range": [
            156,
            215
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 11
            },
            "start": {
              "column": 15,
              "line": 11
            }
          }
        }
      ],
      "range": [
        141,
        260
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                  "name": "promises",
                  "optional": false,
                  "range": [
                    343,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "range": [
                            379,
                            381
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 20
                            },
                            "start": {
                              "column": 44,
                              "line": 20
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          379,
                          383
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 20
                          },
                          "start": {
                            "column": 44,
                            "line": 20
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
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          360,
                          367
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 20
                          },
                          "start": {
                            "column": 25,
                            "line": 20
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "allSettled",
                        "optional": false,
                        "range": [
                          368,
                          378
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 20
                          },
                          "start": {
                            "column": 33,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        360,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 20
                        },
                        "start": {
                          "column": 25,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      360,
                      384
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 20
                      },
                      "start": {
                        "column": 25,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    354,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 20
                    },
                    "start": {
                      "column": 19,
                      "line": 20
                    }
                  }
                },
                "range": [
                  343,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              337,
              385
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              498,
                              507
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 25
                              },
                              "start": {
                                "column": 9,
                                "line": 25
                              }
                            }
                          },
                          {
                            "type": "NewExpression",
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "range": [
                                        526,
                                        532
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 25
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "reason",
                                      "optional": false,
                                      "range": [
                                        533,
                                        539
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 50,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 25
                                        }
                                      }
                                    },
                                    "range": [
                                      526,
                                      539
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 50,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 25
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "String",
                                  "optional": false,
                                  "range": [
                                    519,
                                    525
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 25
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  519,
                                  540
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 25
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
                                513,
                                518
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 25
                                },
                                "start": {
                                  "column": 24,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              509,
                              541
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 25
                              },
                              "start": {
                                "column": 20,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "range": [
                          497,
                          542
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      },
                      "consequent": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "range": [
                                464,
                                470
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 24
                                },
                                "start": {
                                  "column": 9,
                                  "line": 24
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "range": [
                                471,
                                476
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 24
                                },
                                "start": {
                                  "column": 16,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              464,
                              476
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 24
                              },
                              "start": {
                                "column": 9,
                                "line": 24
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "range": [
                              478,
                              487
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 24
                              },
                              "start": {
                                "column": 23,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "range": [
                          463,
                          488
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "===",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "range": [
                              425,
                              431
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 23
                              },
                              "start": {
                                "column": 4,
                                "line": 23
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "status",
                            "optional": false,
                            "range": [
                              432,
                              438
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 23
                              },
                              "start": {
                                "column": 11,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            425,
                            438
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
                        "right": {
                          "type": "Literal",
                          "raw": "\"fulfilled\"",
                          "value": "fulfilled",
                          "range": [
                            443,
                            454
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 23
                            },
                            "start": {
                              "column": 22,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          425,
                          454
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 23
                          },
                          "start": {
                            "column": 4,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        425,
                        542
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 25
                        },
                        "start": {
                          "column": 4,
                          "line": 23
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
                        "name": "result",
                        "optional": false,
                        "range": [
                          410,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 22
                          },
                          "start": {
                            "column": 23,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "range": [
                      409,
                      542
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 25
                      },
                      "start": {
                        "column": 22,
                        "line": 22
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
                    "name": "promises",
                    "optional": false,
                    "range": [
                      396,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
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
                      405,
                      408
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 22
                      },
                      "start": {
                        "column": 18,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    396,
                    408
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 9,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "range": [
                  396,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 26
                  },
                  "start": {
                    "column": 9,
                    "line": 22
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSMappedType",
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
                        565,
                        566
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 26
                        },
                        "start": {
                          "column": 21,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      565,
                      566
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 26
                      },
                      "start": {
                        "column": 21,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    559,
                    566
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 26
                    },
                    "start": {
                      "column": 15,
                      "line": 26
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "range": [
                    554,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 26
                    },
                    "start": {
                      "column": 10,
                      "line": 26
                    }
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              577,
                              583
                            ],
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "range": [
                                      580,
                                      581
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    580,
                                    581
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 26
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
                                      578,
                                      579
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 26
                                      }
                                    }
                                  },
                                  "range": [
                                    578,
                                    579
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  578,
                                  582
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 26
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 26
                              },
                              "start": {
                                "column": 33,
                                "line": 26
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Awaited",
                            "optional": false,
                            "range": [
                              570,
                              577
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 26
                              },
                              "start": {
                                "column": 26,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            570,
                            583
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 26
                            },
                            "start": {
                              "column": 26,
                              "line": 26
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            585,
                            594
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 26
                            },
                            "start": {
                              "column": 41,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        569,
                        595
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 26
                        },
                        "start": {
                          "column": 25,
                          "line": 26
                        }
                      }
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            599,
                            608
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 26
                            },
                            "start": {
                              "column": 55,
                              "line": 26
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "range": [
                              610,
                              615
                            ],
                            "loc": {
                              "end": {
                                "column": 71,
                                "line": 26
                              },
                              "start": {
                                "column": 66,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            610,
                            615
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 26
                            },
                            "start": {
                              "column": 66,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        598,
                        616
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 26
                        },
                        "start": {
                          "column": 54,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    569,
                    616
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 26
                    },
                    "start": {
                      "column": 25,
                      "line": 26
                    }
                  }
                },
                "range": [
                  551,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 74,
                    "line": 26
                  },
                  "start": {
                    "column": 7,
                    "line": 26
                  }
                }
              },
              "range": [
                396,
                618
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "range": [
              389,
              619
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "range": [
          333,
          621
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 71,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "myAllSettled",
        "optional": false,
        "range": [
          277,
          289
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 19
          },
          "start": {
            "column": 15,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 69,
                "line": 19
              },
              "start": {
                "column": 60,
                "line": 19
              }
            },
            "range": [
              322,
              331
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 19
                  },
                  "start": {
                    "column": 65,
                    "line": 19
                  }
                },
                "range": [
                  327,
                  331
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      330,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 19
                      },
                      "start": {
                        "column": 68,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    330,
                    331
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 19
                    },
                    "start": {
                      "column": 68,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                324,
                331
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 19
                },
                "start": {
                  "column": 62,
                  "line": 19
                }
              }
            }
          },
          "range": [
            320,
            331
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 19
            },
            "start": {
              "column": 58,
              "line": 19
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 57,
            "line": 19
          },
          "start": {
            "column": 27,
            "line": 19
          }
        },
        "range": [
          289,
          319
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    309,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 19
                    },
                    "start": {
                      "column": 47,
                      "line": 19
                    }
                  }
                },
                "range": [
                  309,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 19
                  },
                  "start": {
                    "column": 47,
                    "line": 19
                  }
                }
              },
              "range": [
                300,
                318
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 19
                },
                "start": {
                  "column": 38,
                  "line": 19
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
                290,
                291
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 19
                },
                "start": {
                  "column": 28,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              290,
              318
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 19
              },
              "start": {
                "column": 28,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        262,
        621
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "range": [
                            658,
                            660
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 30
                            },
                            "start": {
                              "column": 10,
                              "line": 30
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1Error",
                          "optional": false,
                          "range": [
                            662,
                            669
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 30
                            },
                            "start": {
                              "column": 14,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "optional": false,
                      "range": [
                        657,
                        670
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 30
                        },
                        "start": {
                          "column": 9,
                          "line": 30
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "range": [
                        672,
                        673
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 30
                        },
                        "start": {
                          "column": 24,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    656,
                    674
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "raw": "0",
                                    "value": 0,
                                    "range": [
                                      724,
                                      725
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 31
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
                                    "name": "Promise",
                                    "optional": false,
                                    "range": [
                                      708,
                                      715
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 31
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "resolve",
                                    "optional": false,
                                    "range": [
                                      716,
                                      723
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 31
                                      }
                                    }
                                  },
                                  "range": [
                                    708,
                                    723
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 31
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  708,
                                  726
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 31
                                  }
                                }
                              },
                              {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      743,
                                      744
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 46,
                                        "line": 31
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
                                    "name": "Promise",
                                    "optional": false,
                                    "range": [
                                      728,
                                      735
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 31
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "reject",
                                    "optional": false,
                                    "range": [
                                      736,
                                      742
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 31
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 31
                                      }
                                    }
                                  },
                                  "range": [
                                    728,
                                    742
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 31
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  728,
                                  745
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 31
                                  }
                                }
                              }
                            ],
                            "range": [
                              707,
                              746
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 31
                              },
                              "start": {
                                "column": 10,
                                "line": 31
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "range": [
                                750,
                                755
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 31
                                },
                                "start": {
                                  "column": 53,
                                  "line": 31
                                }
                              }
                            },
                            "range": [
                              750,
                              755
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 31
                              },
                              "start": {
                                "column": 53,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            707,
                            755
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 31
                            },
                            "start": {
                              "column": 10,
                              "line": 31
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          701,
                          755
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 31
                          },
                          "start": {
                            "column": 4,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myAllSettled",
                      "optional": false,
                      "range": [
                        683,
                        695
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 30
                        },
                        "start": {
                          "column": 35,
                          "line": 30
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      683,
                      760
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 32
                      },
                      "start": {
                        "column": 35,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    677,
                    760
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 32
                    },
                    "start": {
                      "column": 29,
                      "line": 30
                    }
                  }
                },
                "range": [
                  656,
                  760
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              650,
              761
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 30
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "range": [
                778,
                785
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 34
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "range": [
                769,
                776
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 34
                },
                "start": {
                  "column": 6,
                  "line": 34
                }
              }
            },
            "range": [
              765,
              785
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 34
              },
              "start": {
                "column": 2,
                "line": 34
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                789,
                791
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 36
                },
                "start": {
                  "column": 2,
                  "line": 36
                }
              }
            },
            "range": [
              789,
              792
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 36
              }
            }
          }
        ],
        "range": [
          646,
          794
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 23,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "range": [
          638,
          643
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 29
          },
          "start": {
            "column": 15,
            "line": 29
          }
        }
      },
      "params": [],
      "range": [
        623,
        794
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 29
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                      "name": "p1",
                      "optional": false,
                      "range": [
                        901,
                        903
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 41
                        },
                        "start": {
                          "column": 4,
                          "line": 41
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        906,
                        915
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 41
                        },
                        "start": {
                          "column": 9,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      901,
                      915
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 41
                      },
                      "start": {
                        "column": 4,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    901,
                    916
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 41
                    },
                    "start": {
                      "column": 4,
                      "line": 41
                    }
                  }
                }
              ],
              "range": [
                895,
                920
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 42
                },
                "start": {
                  "column": 21,
                  "line": 40
                }
              }
            },
            "test": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "range": [
                    880,
                    884
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 40
                    },
                    "start": {
                      "column": 6,
                      "line": 40
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "range": [
                    885,
                    891
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 40
                    },
                    "start": {
                      "column": 11,
                      "line": 40
                    }
                  }
                },
                "range": [
                  880,
                  891
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 40
                  },
                  "start": {
                    "column": 6,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "range": [
                880,
                893
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 40
                },
                "start": {
                  "column": 6,
                  "line": 40
                }
              }
            },
            "range": [
              876,
              920
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 42
              },
              "start": {
                "column": 2,
                "line": 40
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    942,
                    949
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 44
                    },
                    "start": {
                      "column": 4,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                936,
                953
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 45
                },
                "start": {
                  "column": 15,
                  "line": 43
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "range": [
                927,
                934
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 43
                },
                "start": {
                  "column": 6,
                  "line": 43
                }
              }
            },
            "range": [
              923,
              953
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 45
              },
              "start": {
                "column": 2,
                "line": 43
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                957,
                959
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 47
                },
                "start": {
                  "column": 2,
                  "line": 47
                }
              }
            },
            "range": [
              957,
              960
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 47
              },
              "start": {
                "column": 2,
                "line": 47
              }
            }
          }
        ],
        "range": [
          872,
          962
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 76,
            "line": 39
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test4",
        "optional": false,
        "range": [
          805,
          810
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "range": [
                    813,
                    815
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 39
                    },
                    "start": {
                      "column": 17,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p1Error",
                  "optional": false,
                  "range": [
                    817,
                    824
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 39
                    },
                    "start": {
                      "column": 21,
                      "line": 39
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                812,
                825
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 39
                },
                "start": {
                  "column": 16,
                  "line": 39
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 39
              },
              "start": {
                "column": 30,
                "line": 39
              }
            },
            "range": [
              826,
              870
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            830,
                            839
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 39
                            },
                            "start": {
                              "column": 34,
                              "line": 39
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "range": [
                              841,
                              846
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 39
                              },
                              "start": {
                                "column": 45,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            841,
                            846
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 39
                            },
                            "start": {
                              "column": 45,
                              "line": 39
                            }
                          }
                        }
                      ],
                      "range": [
                        829,
                        847
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 39
                        },
                        "start": {
                          "column": 33,
                          "line": 39
                        }
                      }
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            851,
                            857
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 39
                            },
                            "start": {
                              "column": 55,
                              "line": 39
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            859,
                            868
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 39
                            },
                            "start": {
                              "column": 63,
                              "line": 39
                            }
                          }
                        }
                      ],
                      "range": [
                        850,
                        869
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 39
                        },
                        "start": {
                          "column": 54,
                          "line": 39
                        }
                      }
                    }
                  ],
                  "range": [
                    829,
                    869
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 39
                    },
                    "start": {
                      "column": 33,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                828,
                870
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 39
                },
                "start": {
                  "column": 32,
                  "line": 39
                }
              }
            }
          },
          "range": [
            811,
            870
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 39
            },
            "start": {
              "column": 15,
              "line": 39
            }
          }
        }
      ],
      "range": [
        796,
        962
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 49
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
