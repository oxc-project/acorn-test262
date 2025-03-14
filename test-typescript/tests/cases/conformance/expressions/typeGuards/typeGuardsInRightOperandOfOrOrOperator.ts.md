__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    230,
    1875
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      283,
                      284
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
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    276,
                    284
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    289,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                },
                "range": [
                  276,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      301,
                      302
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 5
                      },
                      "start": {
                        "column": 36,
                        "line": 5
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
                      303,
                      309
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 5
                      },
                      "start": {
                        "column": 38,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    301,
                    309
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 5
                    },
                    "start": {
                      "column": 36,
                      "line": 5
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    314,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 5
                    },
                    "start": {
                      "column": 49,
                      "line": 5
                    }
                  }
                },
                "range": [
                  301,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 5
                  },
                  "start": {
                    "column": 36,
                    "line": 5
                  }
                }
              },
              "range": [
                276,
                316
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              269,
              317
            ],
            "loc": {
              "end": {
                "column": 52,
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
          263,
          329
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 33,
            "line": 4
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
          239,
          242
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
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
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            },
            "range": [
              244,
              261
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    246,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    255,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                246,
                261
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 16,
                  "line": 4
                }
              }
            }
          },
          "range": [
            243,
            261
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 4
            },
            "start": {
              "column": 13,
              "line": 4
            }
          }
        }
      ],
      "range": [
        230,
        329
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      422,
                      423
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 18,
                        "line": 9
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    415,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    428,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 9
                    },
                    "start": {
                      "column": 24,
                      "line": 9
                    }
                  }
                },
                "range": [
                  415,
                  436
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      442,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 9
                      },
                      "start": {
                        "column": 38,
                        "line": 9
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      446,
                      448
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 42,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    442,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 9
                    },
                    "start": {
                      "column": 38,
                      "line": 9
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    453,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 9
                    },
                    "start": {
                      "column": 49,
                      "line": 9
                    }
                  }
                },
                "range": [
                  441,
                  454
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 9
                  },
                  "start": {
                    "column": 37,
                    "line": 9
                  }
                }
              },
              "range": [
                415,
                455
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              408,
              456
            ],
            "loc": {
              "end": {
                "column": 52,
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
          364,
          477
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 34,
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
        "name": "foo2",
        "optional": false,
        "range": [
          339,
          343
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
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
                "line": 7
              },
              "start": {
                "column": 15,
                "line": 7
              }
            },
            "range": [
              345,
              362
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    347,
                    353
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
                {
                  "type": "TSStringKeyword",
                  "range": [
                    356,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 7
                    },
                    "start": {
                      "column": 26,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                347,
                362
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            }
          },
          "range": [
            344,
            362
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 7
            },
            "start": {
              "column": 14,
              "line": 7
            }
          }
        }
      ],
      "range": [
        330,
        477
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
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "BinaryExpression",
                "operator": "!==",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      594,
                      595
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
                        "line": 13
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    587,
                    595
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 11,
                      "line": 13
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    600,
                    608
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 13
                    },
                    "start": {
                      "column": 24,
                      "line": 13
                    }
                  }
                },
                "range": [
                  587,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      614,
                      615
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 13
                      },
                      "start": {
                        "column": 38,
                        "line": 13
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      618,
                      625
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 13
                      },
                      "start": {
                        "column": 42,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    614,
                    625
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 13
                    },
                    "start": {
                      "column": 38,
                      "line": 13
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    630,
                    631
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 13
                    },
                    "start": {
                      "column": 54,
                      "line": 13
                    }
                  }
                },
                "range": [
                  613,
                  631
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 13
                  },
                  "start": {
                    "column": 37,
                    "line": 13
                  }
                }
              },
              "range": [
                587,
                632
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "range": [
              580,
              633
            ],
            "loc": {
              "end": {
                "column": 57,
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
          512,
          654
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 34,
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
        "name": "foo3",
        "optional": false,
        "range": [
          487,
          491
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 11
              },
              "start": {
                "column": 15,
                "line": 11
              }
            },
            "range": [
              493,
              510
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    495,
                    501
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 11
                    },
                    "start": {
                      "column": 17,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    504,
                    510
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 11
                    },
                    "start": {
                      "column": 26,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                495,
                510
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 11
                }
              }
            }
          },
          "range": [
            492,
            510
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 11
            },
            "start": {
              "column": 14,
              "line": 11
            }
          }
        }
      ],
      "range": [
        478,
        654
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
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
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
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
                        719,
                        720
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 18,
                          "line": 16
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      712,
                      720
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 16
                      },
                      "start": {
                        "column": 11,
                        "line": 16
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      725,
                      733
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 16
                      },
                      "start": {
                        "column": 24,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    712,
                    733
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 16
                    },
                    "start": {
                      "column": 11,
                      "line": 16
                    }
                  }
                },
                "right": {
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
                        781,
                        782
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 17
                        },
                        "start": {
                          "column": 18,
                          "line": 17
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      774,
                      782
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 17
                      },
                      "start": {
                        "column": 11,
                        "line": 17
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"number\"",
                    "value": "number",
                    "range": [
                      787,
                      795
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 17
                      },
                      "start": {
                        "column": 24,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    774,
                    795
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 17
                    },
                    "start": {
                      "column": 11,
                      "line": 17
                    }
                  }
                },
                "range": [
                  712,
                  795
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 16
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  828,
                  829
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
                  }
                }
              },
              "range": [
                712,
                829
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              705,
              830
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          699,
          845
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 44,
            "line": 15
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
          664,
          668
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
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
                "line": 15
              },
              "start": {
                "column": 15,
                "line": 15
              }
            },
            "range": [
              670,
              697
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    672,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 17,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    681,
                    687
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 26,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    690,
                    697
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 15
                    },
                    "start": {
                      "column": 35,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                672,
                697
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 15
                },
                "start": {
                  "column": 17,
                  "line": 15
                }
              }
            }
          },
          "range": [
            669,
            697
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 15
            },
            "start": {
              "column": 14,
              "line": 15
            }
          }
        }
      ],
      "range": [
        655,
        845
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 15
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    },
                    "range": [
                      996,
                      1014
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            998,
                            1004
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 22
                            },
                            "start": {
                              "column": 11,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1007,
                            1014
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 22
                            },
                            "start": {
                              "column": 20,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        998,
                        1014
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 22
                        },
                        "start": {
                          "column": 11,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    995,
                    1014
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": null,
                "range": [
                  995,
                  1014
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              991,
              1015
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
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
                      1034,
                      1035
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 18,
                        "line": 23
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1027,
                    1035
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 23
                    },
                    "start": {
                      "column": 11,
                      "line": 23
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    1040,
                    1048
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 23
                    },
                    "start": {
                      "column": 24,
                      "line": 23
                    }
                  }
                },
                "range": [
                  1027,
                  1048
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      1091,
                      1092
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 24
                      },
                      "start": {
                        "column": 13,
                        "line": 24
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1095,
                      1096
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
                    1091,
                    1096
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                },
                "right": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
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
                          1109,
                          1110
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 24
                          },
                          "start": {
                            "column": 31,
                            "line": 24
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        1102,
                        1110
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 24
                        },
                        "start": {
                          "column": 24,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"number\"",
                      "value": "number",
                      "range": [
                        1115,
                        1123
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 24
                        },
                        "start": {
                          "column": 37,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      1102,
                      1123
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1156,
                      1157
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
                  "range": [
                    1102,
                    1157
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 25
                    },
                    "start": {
                      "column": 24,
                      "line": 24
                    }
                  }
                },
                "range": [
                  1090,
                  1158
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 25
                  },
                  "start": {
                    "column": 12,
                    "line": 24
                  }
                }
              },
              "range": [
                1027,
                1159
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "range": [
              1020,
              1160
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          890,
          1175
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 44,
            "line": 20
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
          855,
          859
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
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
                "line": 20
              },
              "start": {
                "column": 15,
                "line": 20
              }
            },
            "range": [
              861,
              888
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    863,
                    869
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 20
                    },
                    "start": {
                      "column": 17,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    872,
                    878
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 20
                    },
                    "start": {
                      "column": 26,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    881,
                    888
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 20
                    },
                    "start": {
                      "column": 35,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                863,
                888
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 20
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            }
          },
          "range": [
            860,
            888
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 20
            },
            "start": {
              "column": 14,
              "line": 20
            }
          }
        }
      ],
      "range": [
        846,
        1175
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 20
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
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
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
                      1264,
                      1265
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 29
                      },
                      "start": {
                        "column": 18,
                        "line": 29
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1257,
                    1265
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 29
                    },
                    "start": {
                      "column": 11,
                      "line": 29
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    1270,
                    1278
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 29
                    },
                    "start": {
                      "column": 24,
                      "line": 29
                    }
                  }
                },
                "range": [
                  1257,
                  1278
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 29
                  },
                  "start": {
                    "column": 11,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1395,
                      1396
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 32
                      },
                      "start": {
                        "column": 10,
                        "line": 32
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      1401,
                      1403
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 32
                      },
                      "start": {
                        "column": 16,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    1395,
                    1403
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 32
                    },
                    "start": {
                      "column": 10,
                      "line": 32
                    }
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1372,
                    1373
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 31
                    },
                    "start": {
                      "column": 10,
                      "line": 31
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1327,
                        1328
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 30
                        },
                        "start": {
                          "column": 19,
                          "line": 30
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      1320,
                      1328
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 30
                      },
                      "start": {
                        "column": 12,
                        "line": 30
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"number\"",
                    "value": "number",
                    "range": [
                      1333,
                      1341
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 30
                      },
                      "start": {
                        "column": 25,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    1320,
                    1341
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 30
                    },
                    "start": {
                      "column": 12,
                      "line": 30
                    }
                  }
                },
                "range": [
                  1320,
                  1403
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 32
                  },
                  "start": {
                    "column": 12,
                    "line": 30
                  }
                }
              },
              "range": [
                1257,
                1404
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "range": [
              1250,
              1404
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          1220,
          1417
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 44,
            "line": 27
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
          1185,
          1189
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
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
                "line": 27
              },
              "start": {
                "column": 15,
                "line": 27
              }
            },
            "range": [
              1191,
              1218
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1193,
                    1199
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 27
                    },
                    "start": {
                      "column": 17,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1202,
                    1208
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 27
                    },
                    "start": {
                      "column": 26,
                      "line": 27
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1211,
                    1218
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 27
                    },
                    "start": {
                      "column": 35,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                1193,
                1218
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 27
                },
                "start": {
                  "column": 17,
                  "line": 27
                }
              }
            }
          },
          "range": [
            1190,
            1218
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 27
            },
            "start": {
              "column": 14,
              "line": 27
            }
          }
        }
      ],
      "range": [
        1176,
        1417
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 27
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 35
                      },
                      "start": {
                        "column": 9,
                        "line": 35
                      }
                    },
                    "range": [
                      1473,
                      1499
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1475,
                            1481
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 35
                            },
                            "start": {
                              "column": 11,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1483,
                            1490
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 35
                            },
                            "start": {
                              "column": 19,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1493,
                            1499
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 35
                            },
                            "start": {
                              "column": 29,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        1475,
                        1499
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 35
                        },
                        "start": {
                          "column": 11,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    1472,
                    1499
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "init": null,
                "range": [
                  1472,
                  1499
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1468,
              1500
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
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
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 36
                      },
                      "start": {
                        "column": 9,
                        "line": 36
                      }
                    },
                    "range": [
                      1510,
                      1536
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1512,
                            1518
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 36
                            },
                            "start": {
                              "column": 11,
                              "line": 36
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1520,
                            1527
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 36
                            },
                            "start": {
                              "column": 19,
                              "line": 36
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1530,
                            1536
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 36
                            },
                            "start": {
                              "column": 29,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "range": [
                        1512,
                        1536
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 36
                        },
                        "start": {
                          "column": 11,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    1509,
                    1536
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                "init": null,
                "range": [
                  1509,
                  1536
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1505,
              1537
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
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
                      1590,
                      1591
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 38
                      },
                      "start": {
                        "column": 18,
                        "line": 38
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1583,
                    1591
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 38
                    },
                    "start": {
                      "column": 11,
                      "line": 38
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    1596,
                    1604
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 38
                    },
                    "start": {
                      "column": 24,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1583,
                  1604
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 38
                  },
                  "start": {
                    "column": 11,
                    "line": 38
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      1618,
                      1619
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 39
                      },
                      "start": {
                        "column": 13,
                        "line": 39
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1622,
                      1623
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 39
                      },
                      "start": {
                        "column": 17,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1618,
                    1623
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 39
                    },
                    "start": {
                      "column": 13,
                      "line": 39
                    }
                  }
                },
                "right": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1817,
                          1818
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 44
                          },
                          "start": {
                            "column": 12,
                            "line": 44
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1821,
                          1822
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 44
                          },
                          "start": {
                            "column": 16,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        1817,
                        1822
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 44
                        },
                        "start": {
                          "column": 12,
                          "line": 44
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
                            1827,
                            1828
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 44
                            },
                            "start": {
                              "column": 22,
                              "line": 44
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
                            1829,
                            1837
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 44
                            },
                            "start": {
                              "column": 24,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1827,
                          1837
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 44
                          },
                          "start": {
                            "column": 22,
                            "line": 44
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1827,
                        1839
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 44
                        },
                        "start": {
                          "column": 22,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      1816,
                      1839
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 44
                      },
                      "start": {
                        "column": 11,
                        "line": 44
                      }
                    }
                  },
                  "consequent": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1720,
                          1721
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 42
                          },
                          "start": {
                            "column": 12,
                            "line": 42
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          1724,
                          1726
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 42
                          },
                          "start": {
                            "column": 16,
                            "line": 42
                          }
                        }
                      },
                      "range": [
                        1720,
                        1726
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 42
                        },
                        "start": {
                          "column": 12,
                          "line": 42
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
                            1731,
                            1732
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 42
                            },
                            "start": {
                              "column": 23,
                              "line": 42
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
                            1733,
                            1741
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 42
                            },
                            "start": {
                              "column": 25,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          1731,
                          1741
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 42
                          },
                          "start": {
                            "column": 23,
                            "line": 42
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1731,
                        1743
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 42
                        },
                        "start": {
                          "column": 23,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      1719,
                      1743
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 42
                      },
                      "start": {
                        "column": 11,
                        "line": 42
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
                          1664,
                          1665
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 40
                          },
                          "start": {
                            "column": 19,
                            "line": 40
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        1657,
                        1665
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 40
                        },
                        "start": {
                          "column": 12,
                          "line": 40
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"number\"",
                      "value": "number",
                      "range": [
                        1670,
                        1678
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 40
                        },
                        "start": {
                          "column": 25,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1657,
                      1678
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 40
                      },
                      "start": {
                        "column": 12,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    1657,
                    1840
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 44
                    },
                    "start": {
                      "column": 12,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1617,
                  1841
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 44
                  },
                  "start": {
                    "column": 12,
                    "line": 39
                  }
                }
              },
              "range": [
                1583,
                1842
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 44
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "range": [
              1576,
              1843
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          1462,
          1874
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 44,
            "line": 34
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
          1427,
          1431
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
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
                "line": 34
              },
              "start": {
                "column": 15,
                "line": 34
              }
            },
            "range": [
              1433,
              1460
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1435,
                    1441
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 34
                    },
                    "start": {
                      "column": 17,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1444,
                    1450
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 34
                    },
                    "start": {
                      "column": 26,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1453,
                    1460
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 34
                    },
                    "start": {
                      "column": 35,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                1435,
                1460
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 34
                },
                "start": {
                  "column": 17,
                  "line": 34
                }
              }
            }
          },
          "range": [
            1432,
            1460
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 34
            },
            "start": {
              "column": 14,
              "line": 34
            }
          }
        }
      ],
      "range": [
        1418,
        1874
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 46
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
