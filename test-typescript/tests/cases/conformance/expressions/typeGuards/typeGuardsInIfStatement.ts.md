__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    316,
    3999
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        451,
                        452
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
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      451,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    444,
                    455
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                434,
                471
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        399,
                        400
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
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
                        401,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 7
                        },
                        "start": {
                          "column": 17,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      399,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    392,
                    408
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                382,
                424
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 31,
                  "line": 6
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    366,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 15,
                      "line": 6
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  359,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  372,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              },
              "range": [
                359,
                380
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "range": [
              355,
              471
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          349,
          473
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 33,
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
        "name": "foo",
        "optional": false,
        "range": [
          325,
          328
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 14,
                "line": 5
              }
            },
            "range": [
              330,
              347
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    332,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 5
                    },
                    "start": {
                      "column": 16,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    341,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                332,
                347
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            }
          },
          "range": [
            329,
            347
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        }
      ],
      "range": [
        316,
        473
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 5
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
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      619,
                      620
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    612,
                    621
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                602,
                637
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        551,
                        552
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
                    "right": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        555,
                        557
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 15
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      551,
                      557
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    551,
                    558
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      574,
                      575
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 16
                      },
                      "start": {
                        "column": 15,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    567,
                    576
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                541,
                592
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 31,
                  "line": 14
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    525,
                    526
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  518,
                  526
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  531,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 14
                  },
                  "start": {
                    "column": 21,
                    "line": 14
                  }
                }
              },
              "range": [
                518,
                539
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "range": [
              514,
              637
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          508,
          639
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 34,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          483,
          487
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
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
                "column": 32,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
              }
            },
            "range": [
              489,
              506
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    491,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 13
                    },
                    "start": {
                      "column": 17,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    500,
                    506
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 13
                    },
                    "start": {
                      "column": 26,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                491,
                506
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            }
          },
          "range": [
            488,
            506
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 13
            },
            "start": {
              "column": 14,
              "line": 13
            }
          }
        }
      ],
      "range": [
        474,
        639
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 13
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
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      790,
                      791
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 28
                      },
                      "start": {
                        "column": 15,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    783,
                    792
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                773,
                808
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        717,
                        718
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
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
                      "raw": "\"Hello\"",
                      "value": "Hello",
                      "range": [
                        721,
                        728
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 24
                        },
                        "start": {
                          "column": 12,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      717,
                      728
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
                    717,
                    729
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
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      745,
                      746
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 25
                      },
                      "start": {
                        "column": 15,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    738,
                    747
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                707,
                763
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 31,
                  "line": 23
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    691,
                    692
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  684,
                  692
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  697,
                  705
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 23
                  },
                  "start": {
                    "column": 21,
                    "line": 23
                  }
                }
              },
              "range": [
                684,
                705
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "range": [
              680,
              808
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          674,
          810
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 34,
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
        "name": "foo3",
        "optional": false,
        "range": [
          649,
          653
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 22
          },
          "start": {
            "column": 9,
            "line": 22
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
                "column": 32,
                "line": 22
              },
              "start": {
                "column": 15,
                "line": 22
              }
            },
            "range": [
              655,
              672
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    657,
                    663
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 22
                    },
                    "start": {
                      "column": 17,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    666,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 26,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                657,
                672
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 22
                },
                "start": {
                  "column": 17,
                  "line": 22
                }
              }
            }
          },
          "range": [
            654,
            672
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 22
            },
            "start": {
              "column": 14,
              "line": 22
            }
          }
        }
      ],
      "range": [
        640,
        810
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 22
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
            "alternate": {
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
                        933,
                        934
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        937,
                        939
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 36
                        },
                        "start": {
                          "column": 12,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      933,
                      939
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    933,
                    940
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      956,
                      957
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 37
                      },
                      "start": {
                        "column": 15,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    949,
                    958
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                923,
                974
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 9,
                  "line": 35
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      895,
                      896
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 33
                      },
                      "start": {
                        "column": 15,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    888,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                878,
                913
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 31,
                  "line": 32
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    862,
                    863
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 32
                    },
                    "start": {
                      "column": 15,
                      "line": 32
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  855,
                  863
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  868,
                  876
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 32
                  },
                  "start": {
                    "column": 21,
                    "line": 32
                  }
                }
              },
              "range": [
                855,
                876
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 32
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              }
            },
            "range": [
              851,
              974
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "range": [
          845,
          976
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 34,
            "line": 31
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          820,
          824
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
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
                "column": 32,
                "line": 31
              },
              "start": {
                "column": 15,
                "line": 31
              }
            },
            "range": [
              826,
              843
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    828,
                    834
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 31
                    },
                    "start": {
                      "column": 17,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    837,
                    843
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 31
                    },
                    "start": {
                      "column": 26,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                828,
                843
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 31
                },
                "start": {
                  "column": 17,
                  "line": 31
                }
              }
            }
          },
          "range": [
            825,
            843
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 31
            },
            "start": {
              "column": 14,
              "line": 31
            }
          }
        }
      ],
      "range": [
        811,
        976
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 31
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
            "alternate": {
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
                        1099,
                        1100
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1103,
                        1110
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 45
                        },
                        "start": {
                          "column": 12,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1099,
                      1110
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1099,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1127,
                      1128
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 46
                      },
                      "start": {
                        "column": 15,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1120,
                    1129
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                1089,
                1145
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 47
                },
                "start": {
                  "column": 9,
                  "line": 44
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1061,
                      1062
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 42
                      },
                      "start": {
                        "column": 15,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1054,
                    1063
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                1044,
                1079
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 31,
                  "line": 41
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1028,
                    1029
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 41
                    },
                    "start": {
                      "column": 15,
                      "line": 41
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1021,
                  1029
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1034,
                  1042
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 41
                  },
                  "start": {
                    "column": 21,
                    "line": 41
                  }
                }
              },
              "range": [
                1021,
                1042
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 41
                },
                "start": {
                  "column": 8,
                  "line": 41
                }
              }
            },
            "range": [
              1017,
              1145
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "range": [
          1011,
          1147
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 34,
            "line": 40
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          986,
          990
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 40
          },
          "start": {
            "column": 9,
            "line": 40
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
                "column": 32,
                "line": 40
              },
              "start": {
                "column": 15,
                "line": 40
              }
            },
            "range": [
              992,
              1009
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    994,
                    1000
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 40
                    },
                    "start": {
                      "column": 17,
                      "line": 40
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1003,
                    1009
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 40
                    },
                    "start": {
                      "column": 26,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                994,
                1009
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 40
                },
                "start": {
                  "column": 17,
                  "line": 40
                }
              }
            }
          },
          "range": [
            991,
            1009
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 40
            },
            "start": {
              "column": 14,
              "line": 40
            }
          }
        }
      ],
      "range": [
        977,
        1147
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 40
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
            "alternate": {
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
                        1286,
                        1287
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 55
                        },
                        "start": {
                          "column": 8,
                          "line": 55
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1290,
                        1297
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 55
                        },
                        "start": {
                          "column": 12,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1286,
                      1297
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 55
                      },
                      "start": {
                        "column": 8,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1286,
                    1298
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1314,
                      1315
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 56
                      },
                      "start": {
                        "column": 15,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    1307,
                    1316
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                }
              ],
              "range": [
                1276,
                1332
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 57
                },
                "start": {
                  "column": 9,
                  "line": 54
                }
              }
            },
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        1225,
                        1226
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 51
                        },
                        "start": {
                          "column": 8,
                          "line": 51
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        1229,
                        1231
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 51
                        },
                        "start": {
                          "column": 12,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1225,
                      1231
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 51
                      },
                      "start": {
                        "column": 8,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1225,
                    1232
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1248,
                      1249
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 52
                      },
                      "start": {
                        "column": 15,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1241,
                    1250
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
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
                1215,
                1266
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 31,
                  "line": 50
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1199,
                    1200
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 50
                    },
                    "start": {
                      "column": 15,
                      "line": 50
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1192,
                  1200
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 50
                  },
                  "start": {
                    "column": 8,
                    "line": 50
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1205,
                  1213
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 50
                  },
                  "start": {
                    "column": 21,
                    "line": 50
                  }
                }
              },
              "range": [
                1192,
                1213
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 50
                },
                "start": {
                  "column": 8,
                  "line": 50
                }
              }
            },
            "range": [
              1188,
              1332
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "range": [
          1182,
          1334
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 58
          },
          "start": {
            "column": 34,
            "line": 49
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          1157,
          1161
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
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
                "column": 32,
                "line": 49
              },
              "start": {
                "column": 15,
                "line": 49
              }
            },
            "range": [
              1163,
              1180
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1165,
                    1171
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 49
                    },
                    "start": {
                      "column": 17,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1174,
                    1180
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 49
                    },
                    "start": {
                      "column": 26,
                      "line": 49
                    }
                  }
                }
              ],
              "range": [
                1165,
                1180
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 49
                },
                "start": {
                  "column": 17,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1162,
            1180
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 49
            },
            "start": {
              "column": 14,
              "line": 49
            }
          }
        }
      ],
      "range": [
        1148,
        1334
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 49
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
            "alternate": {
              "type": "IfStatement",
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1560,
                          1561
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 67
                          },
                          "start": {
                            "column": 15,
                            "line": 67
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          1565,
                          1567
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 67
                          },
                          "start": {
                            "column": 20,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        1560,
                        1567
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 67
                        },
                        "start": {
                          "column": 15,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1553,
                      1568
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  }
                ],
                "range": [
                  1543,
                  1584
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 9,
                    "line": 66
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1514,
                        1515
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 64
                        },
                        "start": {
                          "column": 15,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1507,
                      1516
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 64
                      },
                      "start": {
                        "column": 8,
                        "line": 64
                      }
                    }
                  }
                ],
                "range": [
                  1497,
                  1533
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 65
                  },
                  "start": {
                    "column": 37,
                    "line": 63
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1480,
                      1481
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 63
                      },
                      "start": {
                        "column": 20,
                        "line": 63
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1473,
                    1481
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 63
                    },
                    "start": {
                      "column": 13,
                      "line": 63
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"boolean\"",
                  "value": "boolean",
                  "range": [
                    1486,
                    1495
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 63
                    },
                    "start": {
                      "column": 26,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1473,
                  1495
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 63
                  },
                  "start": {
                    "column": 13,
                    "line": 63
                  }
                }
              },
              "range": [
                1469,
                1584
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 9,
                  "line": 63
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1429,
                        1430
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 61
                        },
                        "start": {
                          "column": 15,
                          "line": 61
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1435,
                        1442
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 61
                        },
                        "start": {
                          "column": 21,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1429,
                      1442
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 61
                      },
                      "start": {
                        "column": 15,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1422,
                    1443
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
                    }
                  }
                }
              ],
              "range": [
                1412,
                1459
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 62
                },
                "start": {
                  "column": 31,
                  "line": 60
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1396,
                    1397
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 60
                    },
                    "start": {
                      "column": 15,
                      "line": 60
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1389,
                  1397
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 60
                  },
                  "start": {
                    "column": 8,
                    "line": 60
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1402,
                  1410
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 60
                  },
                  "start": {
                    "column": 21,
                    "line": 60
                  }
                }
              },
              "range": [
                1389,
                1410
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 60
                },
                "start": {
                  "column": 8,
                  "line": 60
                }
              }
            },
            "range": [
              1385,
              1584
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "range": [
          1379,
          1586
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 44,
            "line": 59
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "range": [
          1344,
          1348
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 59
          },
          "start": {
            "column": 9,
            "line": 59
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
                "column": 42,
                "line": 59
              },
              "start": {
                "column": 15,
                "line": 59
              }
            },
            "range": [
              1350,
              1377
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1352,
                    1358
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 59
                    },
                    "start": {
                      "column": 17,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1361,
                    1367
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 59
                    },
                    "start": {
                      "column": 26,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1370,
                    1377
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 59
                    },
                    "start": {
                      "column": 35,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                1352,
                1377
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 59
                },
                "start": {
                  "column": 17,
                  "line": 59
                }
              }
            }
          },
          "range": [
            1349,
            1377
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 59
            },
            "start": {
              "column": 14,
              "line": 59
            }
          }
        }
      ],
      "range": [
        1335,
        1586
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 59
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
            "alternate": {
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 75
                            },
                            "start": {
                              "column": 13,
                              "line": 75
                            }
                          },
                          "range": [
                            1736,
                            1754
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1738,
                                  1744
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 75
                                  }
                                }
                              },
                              {
                                "type": "TSBooleanKeyword",
                                "range": [
                                  1747,
                                  1754
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 75
                                  }
                                }
                              }
                            ],
                            "range": [
                              1738,
                              1754
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 75
                              },
                              "start": {
                                "column": 15,
                                "line": 75
                              }
                            }
                          }
                        },
                        "range": [
                          1735,
                          1754
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 75
                          },
                          "start": {
                            "column": 12,
                            "line": 75
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1757,
                          1758
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 75
                          },
                          "start": {
                            "column": 34,
                            "line": 75
                          }
                        }
                      },
                      "range": [
                        1735,
                        1758
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 75
                        },
                        "start": {
                          "column": 12,
                          "line": 75
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1731,
                    1759
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "==",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              1896,
                              1897
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 80
                              },
                              "start": {
                                "column": 19,
                                "line": 80
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "10",
                            "value": 10,
                            "range": [
                              1901,
                              1903
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 80
                              },
                              "start": {
                                "column": 24,
                                "line": 80
                              }
                            }
                          },
                          "range": [
                            1896,
                            1903
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 80
                            },
                            "start": {
                              "column": 19,
                              "line": 80
                            }
                          }
                        },
                        "range": [
                          1889,
                          1904
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 80
                          },
                          "start": {
                            "column": 12,
                            "line": 80
                          }
                        }
                      }
                    ],
                    "range": [
                      1875,
                      1924
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 81
                      },
                      "start": {
                        "column": 13,
                        "line": 79
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1838,
                            1839
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 77
                            },
                            "start": {
                              "column": 19,
                              "line": 77
                            }
                          }
                        },
                        "range": [
                          1831,
                          1840
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 77
                          },
                          "start": {
                            "column": 12,
                            "line": 77
                          }
                        }
                      }
                    ],
                    "range": [
                      1817,
                      1861
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 78
                      },
                      "start": {
                        "column": 36,
                        "line": 76
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1800,
                          1801
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 76
                          },
                          "start": {
                            "column": 19,
                            "line": 76
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        1793,
                        1801
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 76
                        },
                        "start": {
                          "column": 12,
                          "line": 76
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"boolean\"",
                      "value": "boolean",
                      "range": [
                        1806,
                        1815
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 76
                        },
                        "start": {
                          "column": 25,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1793,
                      1815
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 76
                      },
                      "start": {
                        "column": 12,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    1789,
                    1924
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 81
                    },
                    "start": {
                      "column": 8,
                      "line": 76
                    }
                  }
                }
              ],
              "range": [
                1721,
                1930
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 82
                },
                "start": {
                  "column": 9,
                  "line": 74
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1681,
                        1682
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 72
                        },
                        "start": {
                          "column": 15,
                          "line": 72
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        1687,
                        1694
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 72
                        },
                        "start": {
                          "column": 21,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1681,
                      1694
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 72
                      },
                      "start": {
                        "column": 15,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1674,
                    1695
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                }
              ],
              "range": [
                1664,
                1711
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 31,
                  "line": 71
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1648,
                    1649
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 71
                    },
                    "start": {
                      "column": 15,
                      "line": 71
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1641,
                  1649
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  1654,
                  1662
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 71
                  },
                  "start": {
                    "column": 21,
                    "line": 71
                  }
                }
              },
              "range": [
                1641,
                1662
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 71
                },
                "start": {
                  "column": 8,
                  "line": 71
                }
              }
            },
            "range": [
              1637,
              1930
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          }
        ],
        "range": [
          1631,
          1932
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 44,
            "line": 70
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "range": [
          1596,
          1600
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 70
          },
          "start": {
            "column": 9,
            "line": 70
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
                "column": 42,
                "line": 70
              },
              "start": {
                "column": 15,
                "line": 70
              }
            },
            "range": [
              1602,
              1629
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1604,
                    1610
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 70
                    },
                    "start": {
                      "column": 17,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1613,
                    1619
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 70
                    },
                    "start": {
                      "column": 26,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1622,
                    1629
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 70
                    },
                    "start": {
                      "column": 35,
                      "line": 70
                    }
                  }
                }
              ],
              "range": [
                1604,
                1629
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 70
                },
                "start": {
                  "column": 17,
                  "line": 70
                }
              }
            }
          },
          "range": [
            1601,
            1629
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 70
            },
            "start": {
              "column": 14,
              "line": 70
            }
          }
        }
      ],
      "range": [
        1587,
        1932
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 70
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    1977,
                    1978
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 85
                    },
                    "start": {
                      "column": 8,
                      "line": 85
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    1981,
                    1983
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 85
                    },
                    "start": {
                      "column": 12,
                      "line": 85
                    }
                  }
                },
                "range": [
                  1977,
                  1983
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 85
                  },
                  "start": {
                    "column": 8,
                    "line": 85
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1973,
              1984
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2212,
                        2213
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 92
                        },
                        "start": {
                          "column": 15,
                          "line": 92
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        2217,
                        2219
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 92
                        },
                        "start": {
                          "column": 20,
                          "line": 92
                        }
                      }
                    },
                    "range": [
                      2212,
                      2219
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 92
                      },
                      "start": {
                        "column": 15,
                        "line": 92
                      }
                    }
                  },
                  "range": [
                    2205,
                    2220
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 92
                    },
                    "start": {
                      "column": 8,
                      "line": 92
                    }
                  }
                }
              ],
              "range": [
                2195,
                2236
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 93
                },
                "start": {
                  "column": 9,
                  "line": 91
                }
              }
            },
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        2125,
                        2126
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 88
                        },
                        "start": {
                          "column": 8,
                          "line": 88
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2129,
                          2130
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 88
                          },
                          "start": {
                            "column": 12,
                            "line": 88
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
                          2131,
                          2137
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 88
                          },
                          "start": {
                            "column": 14,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        2129,
                        2137
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 88
                        },
                        "start": {
                          "column": 12,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      2125,
                      2137
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 88
                      },
                      "start": {
                        "column": 8,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    2125,
                    2138
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 88
                    },
                    "start": {
                      "column": 8,
                      "line": 88
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2155,
                        2156
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 89
                        },
                        "start": {
                          "column": 15,
                          "line": 89
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        2161,
                        2168
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 89
                        },
                        "start": {
                          "column": 21,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      2155,
                      2168
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 89
                      },
                      "start": {
                        "column": 15,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    2148,
                    2169
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                }
              ],
              "range": [
                2016,
                2185
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 90
                },
                "start": {
                  "column": 31,
                  "line": 86
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2000,
                    2001
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 86
                    },
                    "start": {
                      "column": 15,
                      "line": 86
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  1993,
                  2001
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 86
                  },
                  "start": {
                    "column": 8,
                    "line": 86
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  2006,
                  2014
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 86
                  },
                  "start": {
                    "column": 21,
                    "line": 86
                  }
                }
              },
              "range": [
                1993,
                2014
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 86
                },
                "start": {
                  "column": 8,
                  "line": 86
                }
              }
            },
            "range": [
              1989,
              2236
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          }
        ],
        "range": [
          1967,
          2238
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 94
          },
          "start": {
            "column": 34,
            "line": 84
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "range": [
          1942,
          1946
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 84
          },
          "start": {
            "column": 9,
            "line": 84
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
                "column": 32,
                "line": 84
              },
              "start": {
                "column": 15,
                "line": 84
              }
            },
            "range": [
              1948,
              1965
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1950,
                    1956
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 84
                    },
                    "start": {
                      "column": 17,
                      "line": 84
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1959,
                    1965
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 84
                    },
                    "start": {
                      "column": 26,
                      "line": 84
                    }
                  }
                }
              ],
              "range": [
                1950,
                1965
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 84
                },
                "start": {
                  "column": 17,
                  "line": 84
                }
              }
            }
          },
          "range": [
            1947,
            1965
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 84
            },
            "start": {
              "column": 14,
              "line": 84
            }
          }
        }
      ],
      "range": [
        1933,
        2238
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 84
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
            "alternate": {
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 101
                            },
                            "start": {
                              "column": 13,
                              "line": 101
                            }
                          },
                          "range": [
                            2477,
                            2495
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSBooleanKeyword",
                                "range": [
                                  2479,
                                  2486
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 101
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 101
                                  }
                                }
                              },
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  2489,
                                  2495
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 101
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 101
                                  }
                                }
                              }
                            ],
                            "range": [
                              2479,
                              2495
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 101
                              },
                              "start": {
                                "column": 15,
                                "line": 101
                              }
                            }
                          }
                        },
                        "range": [
                          2476,
                          2495
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 101
                          },
                          "start": {
                            "column": 12,
                            "line": 101
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        2476,
                        2495
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 101
                        },
                        "start": {
                          "column": 12,
                          "line": 101
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2472,
                    2496
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 101
                    },
                    "start": {
                      "column": 8,
                      "line": 101
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          2509,
                          2510
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 102
                          },
                          "start": {
                            "column": 12,
                            "line": 102
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2513,
                          2514
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 102
                          },
                          "start": {
                            "column": 16,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        2509,
                        2514
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 102
                        },
                        "start": {
                          "column": 12,
                          "line": 102
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2505,
                    2515
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 102
                    },
                    "start": {
                      "column": 8,
                      "line": 102
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2620,
                        2621
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 105
                        },
                        "start": {
                          "column": 14,
                          "line": 105
                        }
                      }
                    },
                    "consequent": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2587,
                          2588
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 104
                          },
                          "start": {
                            "column": 14,
                            "line": 104
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          2593,
                          2595
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 104
                          },
                          "start": {
                            "column": 20,
                            "line": 104
                          }
                        }
                      },
                      "range": [
                        2587,
                        2595
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 104
                        },
                        "start": {
                          "column": 14,
                          "line": 104
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2558,
                            2559
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 103
                            },
                            "start": {
                              "column": 22,
                              "line": 103
                            }
                          }
                        },
                        "operator": "typeof",
                        "prefix": true,
                        "range": [
                          2551,
                          2559
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 103
                          },
                          "start": {
                            "column": 15,
                            "line": 103
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"number\"",
                        "value": "number",
                        "range": [
                          2564,
                          2572
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 103
                          },
                          "start": {
                            "column": 28,
                            "line": 103
                          }
                        }
                      },
                      "range": [
                        2551,
                        2572
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 103
                        },
                        "start": {
                          "column": 15,
                          "line": 103
                        }
                      }
                    },
                    "range": [
                      2551,
                      2621
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 105
                      },
                      "start": {
                        "column": 15,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    2544,
                    2622
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 105
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                }
              ],
              "range": [
                2462,
                2651
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 106
                },
                "start": {
                  "column": 9,
                  "line": 100
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2422,
                        2423
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 98
                        },
                        "start": {
                          "column": 15,
                          "line": 98
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"hello\"",
                      "value": "hello",
                      "range": [
                        2428,
                        2435
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 98
                        },
                        "start": {
                          "column": 21,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2422,
                      2435
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 98
                      },
                      "start": {
                        "column": 15,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    2415,
                    2436
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 98
                    },
                    "start": {
                      "column": 8,
                      "line": 98
                    }
                  }
                }
              ],
              "range": [
                2405,
                2452
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 99
                },
                "start": {
                  "column": 31,
                  "line": 97
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2389,
                    2390
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 97
                    },
                    "start": {
                      "column": 15,
                      "line": 97
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  2382,
                  2390
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 97
                  },
                  "start": {
                    "column": 8,
                    "line": 97
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  2395,
                  2403
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 97
                  },
                  "start": {
                    "column": 21,
                    "line": 97
                  }
                }
              },
              "range": [
                2382,
                2403
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 97
                },
                "start": {
                  "column": 8,
                  "line": 97
                }
              }
            },
            "range": [
              2378,
              2651
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 106
              },
              "start": {
                "column": 4,
                "line": 97
              }
            }
          }
        ],
        "range": [
          2284,
          2653
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 107
          },
          "start": {
            "column": 45,
            "line": 95
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "range": [
          2248,
          2253
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 95
          },
          "start": {
            "column": 9,
            "line": 95
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
                "column": 43,
                "line": 95
              },
              "start": {
                "column": 16,
                "line": 95
              }
            },
            "range": [
              2255,
              2282
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2257,
                    2263
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 95
                    },
                    "start": {
                      "column": 18,
                      "line": 95
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2266,
                    2272
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 95
                    },
                    "start": {
                      "column": 27,
                      "line": 95
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    2275,
                    2282
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 95
                    },
                    "start": {
                      "column": 36,
                      "line": 95
                    }
                  }
                }
              ],
              "range": [
                2257,
                2282
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 95
                },
                "start": {
                  "column": 18,
                  "line": 95
                }
              }
            }
          },
          "range": [
            2254,
            2282
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 95
            },
            "start": {
              "column": 15,
              "line": 95
            }
          }
        }
      ],
      "range": [
        2239,
        2653
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 107
        },
        "start": {
          "column": 0,
          "line": 95
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
            "alternate": {
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
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 115
                            },
                            "start": {
                              "column": 13,
                              "line": 115
                            }
                          },
                          "range": [
                            3008,
                            3034
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  3010,
                                  3016
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 115
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 115
                                  }
                                }
                              },
                              {
                                "type": "TSBooleanKeyword",
                                "range": [
                                  3018,
                                  3025
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 115
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 115
                                  }
                                }
                              },
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  3028,
                                  3034
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 115
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 115
                                  }
                                }
                              }
                            ],
                            "range": [
                              3010,
                              3034
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 115
                              },
                              "start": {
                                "column": 15,
                                "line": 115
                              }
                            }
                          }
                        },
                        "range": [
                          3007,
                          3034
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 115
                          },
                          "start": {
                            "column": 12,
                            "line": 115
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        3007,
                        3034
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 115
                        },
                        "start": {
                          "column": 12,
                          "line": 115
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3003,
                    3035
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 115
                    },
                    "start": {
                      "column": 8,
                      "line": 115
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          3048,
                          3049
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 116
                          },
                          "start": {
                            "column": 12,
                            "line": 116
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3052,
                          3053
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 116
                          },
                          "start": {
                            "column": 16,
                            "line": 116
                          }
                        }
                      },
                      "range": [
                        3048,
                        3053
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 116
                        },
                        "start": {
                          "column": 12,
                          "line": 116
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3044,
                    3054
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 116
                    },
                    "start": {
                      "column": 8,
                      "line": 116
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          3370,
                          3371
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 124
                          },
                          "start": {
                            "column": 12,
                            "line": 124
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3374,
                            3375
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 124
                            },
                            "start": {
                              "column": 16,
                              "line": 124
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                3379,
                                3380
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 124
                                },
                                "start": {
                                  "column": 21,
                                  "line": 124
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "range": [
                                3381,
                                3389
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 124
                                },
                                "start": {
                                  "column": 23,
                                  "line": 124
                                }
                              }
                            },
                            "range": [
                              3379,
                              3389
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 124
                              },
                              "start": {
                                "column": 21,
                                "line": 124
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            3379,
                            3391
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 124
                            },
                            "start": {
                              "column": 21,
                              "line": 124
                            }
                          }
                        },
                        "range": [
                          3374,
                          3391
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 124
                          },
                          "start": {
                            "column": 16,
                            "line": 124
                          }
                        }
                      },
                      "range": [
                        3370,
                        3391
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 124
                        },
                        "start": {
                          "column": 12,
                          "line": 124
                        }
                      }
                    },
                    "consequent": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3241,
                          3242
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 120
                          },
                          "start": {
                            "column": 12,
                            "line": 120
                          }
                        }
                      },
                      "right": {
                        "type": "LogicalExpression",
                        "operator": "&&",
                        "left": {
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            3245,
                            3247
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 120
                            },
                            "start": {
                              "column": 16,
                              "line": 120
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                3251,
                                3252
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 120
                                },
                                "start": {
                                  "column": 22,
                                  "line": 120
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "range": [
                                3253,
                                3261
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 120
                                },
                                "start": {
                                  "column": 24,
                                  "line": 120
                                }
                              }
                            },
                            "range": [
                              3251,
                              3261
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 120
                              },
                              "start": {
                                "column": 22,
                                "line": 120
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            3251,
                            3263
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 120
                            },
                            "start": {
                              "column": 22,
                              "line": 120
                            }
                          }
                        },
                        "range": [
                          3245,
                          3263
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 120
                          },
                          "start": {
                            "column": 16,
                            "line": 120
                          }
                        }
                      },
                      "range": [
                        3241,
                        3263
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 120
                        },
                        "start": {
                          "column": 12,
                          "line": 120
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3165,
                            3166
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 117
                            },
                            "start": {
                              "column": 22,
                              "line": 117
                            }
                          }
                        },
                        "operator": "typeof",
                        "prefix": true,
                        "range": [
                          3158,
                          3166
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 117
                          },
                          "start": {
                            "column": 15,
                            "line": 117
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"number\"",
                        "value": "number",
                        "range": [
                          3171,
                          3179
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 117
                          },
                          "start": {
                            "column": 28,
                            "line": 117
                          }
                        }
                      },
                      "range": [
                        3158,
                        3179
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 117
                        },
                        "start": {
                          "column": 15,
                          "line": 117
                        }
                      }
                    },
                    "range": [
                      3158,
                      3434
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 125
                      },
                      "start": {
                        "column": 15,
                        "line": 117
                      }
                    }
                  },
                  "range": [
                    3151,
                    3435
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 125
                    },
                    "start": {
                      "column": 8,
                      "line": 117
                    }
                  }
                }
              ],
              "range": [
                2993,
                3441
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 126
                },
                "start": {
                  "column": 9,
                  "line": 114
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      2919,
                      2920
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 112
                      },
                      "start": {
                        "column": 15,
                        "line": 112
                      }
                    }
                  },
                  "range": [
                    2912,
                    2921
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 112
                    },
                    "start": {
                      "column": 8,
                      "line": 112
                    }
                  }
                }
              ],
              "range": [
                2902,
                2983
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 113
                },
                "start": {
                  "column": 31,
                  "line": 111
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2886,
                    2887
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 111
                    },
                    "start": {
                      "column": 15,
                      "line": 111
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  2879,
                  2887
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 111
                  },
                  "start": {
                    "column": 8,
                    "line": 111
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  2892,
                  2900
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 111
                  },
                  "start": {
                    "column": 21,
                    "line": 111
                  }
                }
              },
              "range": [
                2879,
                2900
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 111
                },
                "start": {
                  "column": 8,
                  "line": 111
                }
              }
            },
            "range": [
              2875,
              3441
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 126
              },
              "start": {
                "column": 4,
                "line": 111
              }
            }
          }
        ],
        "range": [
          2699,
          3443
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 127
          },
          "start": {
            "column": 45,
            "line": 108
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "range": [
          2663,
          2668
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 108
          },
          "start": {
            "column": 9,
            "line": 108
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
                "column": 43,
                "line": 108
              },
              "start": {
                "column": 16,
                "line": 108
              }
            },
            "range": [
              2670,
              2697
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2672,
                    2678
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 108
                    },
                    "start": {
                      "column": 18,
                      "line": 108
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2681,
                    2687
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 108
                    },
                    "start": {
                      "column": 27,
                      "line": 108
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    2690,
                    2697
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 108
                    },
                    "start": {
                      "column": 36,
                      "line": 108
                    }
                  }
                }
              ],
              "range": [
                2672,
                2697
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 108
                },
                "start": {
                  "column": 18,
                  "line": 108
                }
              }
            }
          },
          "range": [
            2669,
            2697
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 108
            },
            "start": {
              "column": 15,
              "line": 108
            }
          }
        }
      ],
      "range": [
        2654,
        3443
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 127
        },
        "start": {
          "column": 0,
          "line": 108
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
            "alternate": {
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
                        3814,
                        3815
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 135
                        },
                        "start": {
                          "column": 8,
                          "line": 135
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        3818,
                        3820
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 135
                        },
                        "start": {
                          "column": 12,
                          "line": 135
                        }
                      }
                    },
                    "range": [
                      3814,
                      3820
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 135
                      },
                      "start": {
                        "column": 8,
                        "line": 135
                      }
                    }
                  },
                  "range": [
                    3814,
                    3821
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 135
                    },
                    "start": {
                      "column": 8,
                      "line": 135
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          3834,
                          3835
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 136
                          },
                          "start": {
                            "column": 12,
                            "line": 136
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3838,
                          3839
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 136
                          },
                          "start": {
                            "column": 16,
                            "line": 136
                          }
                        }
                      },
                      "range": [
                        3834,
                        3839
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 136
                        },
                        "start": {
                          "column": 12,
                          "line": 136
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3830,
                    3840
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 136
                    },
                    "start": {
                      "column": 8,
                      "line": 136
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3958,
                            3959
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 139
                            },
                            "start": {
                              "column": 14,
                              "line": 139
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "range": [
                            3960,
                            3968
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 139
                            },
                            "start": {
                              "column": 16,
                              "line": 139
                            }
                          }
                        },
                        "range": [
                          3958,
                          3968
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 139
                          },
                          "start": {
                            "column": 14,
                            "line": 139
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        3958,
                        3970
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 139
                        },
                        "start": {
                          "column": 14,
                          "line": 139
                        }
                      }
                    },
                    "consequent": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3921,
                            3922
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 138
                            },
                            "start": {
                              "column": 14,
                              "line": 138
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "range": [
                            3923,
                            3931
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 138
                            },
                            "start": {
                              "column": 16,
                              "line": 138
                            }
                          }
                        },
                        "range": [
                          3921,
                          3931
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 138
                          },
                          "start": {
                            "column": 14,
                            "line": 138
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        3921,
                        3933
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 138
                        },
                        "start": {
                          "column": 14,
                          "line": 138
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3892,
                            3893
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 137
                            },
                            "start": {
                              "column": 22,
                              "line": 137
                            }
                          }
                        },
                        "operator": "typeof",
                        "prefix": true,
                        "range": [
                          3885,
                          3893
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 137
                          },
                          "start": {
                            "column": 15,
                            "line": 137
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"number\"",
                        "value": "number",
                        "range": [
                          3898,
                          3906
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 137
                          },
                          "start": {
                            "column": 28,
                            "line": 137
                          }
                        }
                      },
                      "range": [
                        3885,
                        3906
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 137
                        },
                        "start": {
                          "column": 15,
                          "line": 137
                        }
                      }
                    },
                    "range": [
                      3885,
                      3970
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 139
                      },
                      "start": {
                        "column": 15,
                        "line": 137
                      }
                    }
                  },
                  "range": [
                    3878,
                    3971
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 139
                    },
                    "start": {
                      "column": 8,
                      "line": 137
                    }
                  }
                }
              ],
              "range": [
                3804,
                3997
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 140
                },
                "start": {
                  "column": 9,
                  "line": 134
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3719,
                          3720
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 132
                          },
                          "start": {
                            "column": 15,
                            "line": 132
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "range": [
                          3721,
                          3729
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 132
                          },
                          "start": {
                            "column": 17,
                            "line": 132
                          }
                        }
                      },
                      "range": [
                        3719,
                        3729
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 132
                        },
                        "start": {
                          "column": 15,
                          "line": 132
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3719,
                      3731
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 132
                      },
                      "start": {
                        "column": 15,
                        "line": 132
                      }
                    }
                  },
                  "range": [
                    3712,
                    3732
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 132
                    },
                    "start": {
                      "column": 8,
                      "line": 132
                    }
                  }
                }
              ],
              "range": [
                3702,
                3794
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 133
                },
                "start": {
                  "column": 31,
                  "line": 131
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3686,
                    3687
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 131
                    },
                    "start": {
                      "column": 15,
                      "line": 131
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  3679,
                  3687
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 131
                  },
                  "start": {
                    "column": 8,
                    "line": 131
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  3692,
                  3700
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 131
                  },
                  "start": {
                    "column": 21,
                    "line": 131
                  }
                }
              },
              "range": [
                3679,
                3700
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 131
                },
                "start": {
                  "column": 8,
                  "line": 131
                }
              }
            },
            "range": [
              3675,
              3997
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 140
              },
              "start": {
                "column": 4,
                "line": 131
              }
            }
          }
        ],
        "range": [
          3489,
          3999
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 141
          },
          "start": {
            "column": 45,
            "line": 128
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "range": [
          3453,
          3458
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 128
          },
          "start": {
            "column": 9,
            "line": 128
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
                "column": 43,
                "line": 128
              },
              "start": {
                "column": 16,
                "line": 128
              }
            },
            "range": [
              3460,
              3487
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    3462,
                    3468
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 128
                    },
                    "start": {
                      "column": 18,
                      "line": 128
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    3471,
                    3477
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 128
                    },
                    "start": {
                      "column": 27,
                      "line": 128
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    3480,
                    3487
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 128
                    },
                    "start": {
                      "column": 36,
                      "line": 128
                    }
                  }
                }
              ],
              "range": [
                3462,
                3487
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 128
                },
                "start": {
                  "column": 18,
                  "line": 128
                }
              }
            }
          },
          "range": [
            3459,
            3487
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 128
            },
            "start": {
              "column": 15,
              "line": 128
            }
          }
        }
      ],
      "range": [
        3444,
        3999
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 141
        },
        "start": {
          "column": 0,
          "line": 128
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 141
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
