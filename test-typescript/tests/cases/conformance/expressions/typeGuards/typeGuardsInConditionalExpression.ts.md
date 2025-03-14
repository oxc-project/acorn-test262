__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    484,
    2946
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
              "type": "ConditionalExpression",
              "alternate": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    591,
                    592
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
                    }
                  }
                },
                "operator": "++",
                "prefix": false,
                "range": [
                  591,
                  594
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              },
              "consequent": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    562,
                    563
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
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
                    564,
                    570
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                },
                "range": [
                  562,
                  570
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
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
                      537,
                      538
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
                    530,
                    538
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
                    543,
                    551
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
                  530,
                  551
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
              "range": [
                530,
                594
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              523,
              595
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          517,
          607
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 33,
            "line": 8
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
          493,
          496
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
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
                "line": 8
              },
              "start": {
                "column": 14,
                "line": 8
              }
            },
            "range": [
              498,
              515
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    500,
                    506
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    509,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 8
                    },
                    "start": {
                      "column": 25,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                500,
                515
              ],
              "loc": {
                "end": {
                  "column": 31,
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
            497,
            515
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 8
            },
            "start": {
              "column": 13,
              "line": 8
            }
          }
        }
      ],
      "range": [
        484,
        607
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 8
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  728,
                  729
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
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
                      689,
                      690
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 15
                      },
                      "start": {
                        "column": 12,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      693,
                      700
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 16,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    689,
                    700
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 15
                    },
                    "start": {
                      "column": 12,
                      "line": 15
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    705,
                    706
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 15
                    },
                    "start": {
                      "column": 28,
                      "line": 15
                    }
                  }
                },
                "range": [
                  688,
                  706
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
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
                      662,
                      663
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 14
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    655,
                    663
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 14
                    },
                    "start": {
                      "column": 11,
                      "line": 14
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    668,
                    676
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 14
                    },
                    "start": {
                      "column": 24,
                      "line": 14
                    }
                  }
                },
                "range": [
                  655,
                  676
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "range": [
                655,
                729
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              648,
              730
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          642,
          742
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
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
          617,
          621
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
              623,
              640
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    625,
                    631
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
                    634,
                    640
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
                625,
                640
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
            622,
            640
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
        608,
        742
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  858,
                  859
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
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
                      824,
                      825
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 20
                      },
                      "start": {
                        "column": 12,
                        "line": 20
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      828,
                      830
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 16,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    824,
                    830
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    835,
                    836
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 20
                    },
                    "start": {
                      "column": 23,
                      "line": 20
                    }
                  }
                },
                "range": [
                  823,
                  836
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 20
                  },
                  "start": {
                    "column": 11,
                    "line": 20
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
                      797,
                      798
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 19
                      },
                      "start": {
                        "column": 18,
                        "line": 19
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    790,
                    798
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 19
                    },
                    "start": {
                      "column": 11,
                      "line": 19
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    803,
                    811
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 19
                    },
                    "start": {
                      "column": 24,
                      "line": 19
                    }
                  }
                },
                "range": [
                  790,
                  811
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 19
                  },
                  "start": {
                    "column": 11,
                    "line": 19
                  }
                }
              },
              "range": [
                790,
                859
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "range": [
              783,
              860
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          777,
          872
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 34,
            "line": 18
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
          752,
          756
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
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
                "line": 18
              },
              "start": {
                "column": 15,
                "line": 18
              }
            },
            "range": [
              758,
              775
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    760,
                    766
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 18
                    },
                    "start": {
                      "column": 17,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    769,
                    775
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 18
                    },
                    "start": {
                      "column": 26,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                760,
                775
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 18
                }
              }
            }
          },
          "range": [
            757,
            775
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 18
            },
            "start": {
              "column": 14,
              "line": 18
            }
          }
        }
      ],
      "range": [
        743,
        872
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 18
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
                      976,
                      977
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 26
                      },
                      "start": {
                        "column": 12,
                        "line": 26
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      980,
                      982
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 26
                      },
                      "start": {
                        "column": 16,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    976,
                    982
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    987,
                    988
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 26
                    },
                    "start": {
                      "column": 23,
                      "line": 26
                    }
                  }
                },
                "range": [
                  975,
                  988
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  952,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 25
                  },
                  "start": {
                    "column": 10,
                    "line": 25
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
                      927,
                      928
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 18,
                        "line": 24
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    920,
                    928
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 24
                    },
                    "start": {
                      "column": 11,
                      "line": 24
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    933,
                    941
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
                "range": [
                  920,
                  941
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              },
              "range": [
                920,
                989
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "range": [
              913,
              990
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          907,
          1002
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 34,
            "line": 23
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
          882,
          886
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
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
                "line": 23
              },
              "start": {
                "column": 15,
                "line": 23
              }
            },
            "range": [
              888,
              905
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    890,
                    896
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 23
                    },
                    "start": {
                      "column": 17,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    899,
                    905
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 23
                    },
                    "start": {
                      "column": 26,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                890,
                905
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 23
                },
                "start": {
                  "column": 17,
                  "line": 23
                }
              }
            }
          },
          "range": [
            887,
            905
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 23
            },
            "start": {
              "column": 14,
              "line": 23
            }
          }
        }
      ],
      "range": [
        873,
        1002
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 23
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
                      1106,
                      1107
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 31
                      },
                      "start": {
                        "column": 12,
                        "line": 31
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      1110,
                      1117
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 31
                      },
                      "start": {
                        "column": 16,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    1106,
                    1117
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 31
                    },
                    "start": {
                      "column": 12,
                      "line": 31
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1122,
                    1123
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 28,
                      "line": 31
                    }
                  }
                },
                "range": [
                  1105,
                  1123
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
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1082,
                  1083
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 30
                  },
                  "start": {
                    "column": 10,
                    "line": 30
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
                      1057,
                      1058
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
                    1050,
                    1058
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
                    1063,
                    1071
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
                  1050,
                  1071
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
              "range": [
                1050,
                1124
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 29
                }
              }
            },
            "range": [
              1043,
              1125
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          1037,
          1137
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 34,
            "line": 28
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
          1012,
          1016
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 28
          },
          "start": {
            "column": 9,
            "line": 28
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
                "line": 28
              },
              "start": {
                "column": 15,
                "line": 28
              }
            },
            "range": [
              1018,
              1035
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1020,
                    1026
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 28
                    },
                    "start": {
                      "column": 17,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1029,
                    1035
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 28
                    },
                    "start": {
                      "column": 26,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                1020,
                1035
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 28
                },
                "start": {
                  "column": 17,
                  "line": 28
                }
              }
            }
          },
          "range": [
            1017,
            1035
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 28
            },
            "start": {
              "column": 14,
              "line": 28
            }
          }
        }
      ],
      "range": [
        1003,
        1137
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 28
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
                      1286,
                      1287
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 37
                      },
                      "start": {
                        "column": 12,
                        "line": 37
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
                        "column": 23,
                        "line": 37
                      },
                      "start": {
                        "column": 16,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    1286,
                    1297
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 37
                    },
                    "start": {
                      "column": 12,
                      "line": 37
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1302,
                    1303
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 37
                    },
                    "start": {
                      "column": 28,
                      "line": 37
                    }
                  }
                },
                "range": [
                  1285,
                  1303
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 37
                  },
                  "start": {
                    "column": 11,
                    "line": 37
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
                      1250,
                      1251
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 36
                      },
                      "start": {
                        "column": 12,
                        "line": 36
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      1254,
                      1256
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 36
                      },
                      "start": {
                        "column": 16,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1250,
                    1256
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 36
                    },
                    "start": {
                      "column": 12,
                      "line": 36
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1261,
                    1262
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 36
                    },
                    "start": {
                      "column": 23,
                      "line": 36
                    }
                  }
                },
                "range": [
                  1249,
                  1262
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 36
                  },
                  "start": {
                    "column": 11,
                    "line": 36
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
                      1223,
                      1224
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 35
                      },
                      "start": {
                        "column": 18,
                        "line": 35
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1216,
                    1224
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 35
                    },
                    "start": {
                      "column": 11,
                      "line": 35
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    1229,
                    1237
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 35
                    },
                    "start": {
                      "column": 24,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1216,
                  1237
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 35
                  },
                  "start": {
                    "column": 11,
                    "line": 35
                  }
                }
              },
              "range": [
                1216,
                1304
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 37
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              }
            },
            "range": [
              1209,
              1305
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          1172,
          1317
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 34,
            "line": 33
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
          1147,
          1151
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
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
                "line": 33
              },
              "start": {
                "column": 15,
                "line": 33
              }
            },
            "range": [
              1153,
              1170
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1155,
                    1161
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 33
                    },
                    "start": {
                      "column": 17,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1164,
                    1170
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 33
                    },
                    "start": {
                      "column": 26,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                1155,
                1170
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 33
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              }
            }
          },
          "range": [
            1152,
            1170
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 33
            },
            "start": {
              "column": 14,
              "line": 33
            }
          }
        }
      ],
      "range": [
        1138,
        1317
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 33
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
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1498,
                      1499
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 44
                      },
                      "start": {
                        "column": 10,
                        "line": 44
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      1503,
                      1505
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 44
                      },
                      "start": {
                        "column": 15,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1498,
                    1505
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 44
                    },
                    "start": {
                      "column": 10,
                      "line": 44
                    }
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1475,
                    1476
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 43
                    },
                    "start": {
                      "column": 10,
                      "line": 43
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
                        1449,
                        1450
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 42
                        },
                        "start": {
                          "column": 17,
                          "line": 42
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      1442,
                      1450
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 42
                      },
                      "start": {
                        "column": 10,
                        "line": 42
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"boolean\"",
                    "value": "boolean",
                    "range": [
                      1455,
                      1464
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 42
                      },
                      "start": {
                        "column": 23,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1442,
                    1464
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 42
                    },
                    "start": {
                      "column": 10,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1442,
                  1505
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 44
                  },
                  "start": {
                    "column": 10,
                    "line": 42
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
                    1407,
                    1408
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 41
                    },
                    "start": {
                      "column": 10,
                      "line": 41
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    1413,
                    1420
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 41
                    },
                    "start": {
                      "column": 16,
                      "line": 41
                    }
                  }
                },
                "range": [
                  1407,
                  1420
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 41
                  },
                  "start": {
                    "column": 10,
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
                      1382,
                      1383
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 40
                      },
                      "start": {
                        "column": 18,
                        "line": 40
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1375,
                    1383
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 40
                    },
                    "start": {
                      "column": 11,
                      "line": 40
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    1388,
                    1396
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 40
                    },
                    "start": {
                      "column": 24,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1375,
                  1396
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 40
                  },
                  "start": {
                    "column": 11,
                    "line": 40
                  }
                }
              },
              "range": [
                1375,
                1505
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 44
                },
                "start": {
                  "column": 11,
                  "line": 40
                }
              }
            },
            "range": [
              1368,
              1506
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          1362,
          1519
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 44,
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
        "name": "foo7",
        "optional": false,
        "range": [
          1327,
          1331
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 39
              },
              "start": {
                "column": 15,
                "line": 39
              }
            },
            "range": [
              1333,
              1360
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1335,
                    1341
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 39
                    },
                    "start": {
                      "column": 17,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1344,
                    1350
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 39
                    },
                    "start": {
                      "column": 26,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1353,
                    1360
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 39
                    },
                    "start": {
                      "column": 35,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                1335,
                1360
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 39
                },
                "start": {
                  "column": 17,
                  "line": 39
                }
              }
            }
          },
          "range": [
            1332,
            1360
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 39
            },
            "start": {
              "column": 14,
              "line": 39
            }
          }
        }
      ],
      "range": [
        1318,
        1519
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 39
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
                        "line": 47
                      },
                      "start": {
                        "column": 9,
                        "line": 47
                      }
                    },
                    "range": [
                      1575,
                      1593
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1577,
                            1583
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 47
                            },
                            "start": {
                              "column": 11,
                              "line": 47
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1586,
                            1593
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 47
                            },
                            "start": {
                              "column": 20,
                              "line": 47
                            }
                          }
                        }
                      ],
                      "range": [
                        1577,
                        1593
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 47
                        },
                        "start": {
                          "column": 11,
                          "line": 47
                        }
                      }
                    }
                  },
                  "range": [
                    1574,
                    1593
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                "init": null,
                "range": [
                  1574,
                  1593
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1570,
              1594
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      1664,
                      1665
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 50
                      },
                      "start": {
                        "column": 12,
                        "line": 50
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1668,
                      1669
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 50
                      },
                      "start": {
                        "column": 16,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    1664,
                    1669
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 50
                    },
                    "start": {
                      "column": 12,
                      "line": 50
                    }
                  }
                },
                "right": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1760,
                        1761
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 53
                        },
                        "start": {
                          "column": 10,
                          "line": 53
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        1765,
                        1767
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 53
                        },
                        "start": {
                          "column": 15,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      1760,
                      1767
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 53
                      },
                      "start": {
                        "column": 10,
                        "line": 53
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1737,
                      1738
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 52
                      },
                      "start": {
                        "column": 10,
                        "line": 52
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
                          1711,
                          1712
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 51
                          },
                          "start": {
                            "column": 16,
                            "line": 51
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        1704,
                        1712
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 51
                        },
                        "start": {
                          "column": 9,
                          "line": 51
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"boolean\"",
                      "value": "boolean",
                      "range": [
                        1717,
                        1726
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 51
                        },
                        "start": {
                          "column": 22,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1704,
                      1726
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 51
                      },
                      "start": {
                        "column": 9,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1704,
                    1767
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 53
                    },
                    "start": {
                      "column": 9,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1663,
                  1768
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 53
                  },
                  "start": {
                    "column": 11,
                    "line": 50
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
                    1638,
                    1639
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 49
                    },
                    "start": {
                      "column": 10,
                      "line": 49
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"hello\"",
                  "value": "hello",
                  "range": [
                    1644,
                    1651
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 49
                    },
                    "start": {
                      "column": 16,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1638,
                  1651
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 49
                  },
                  "start": {
                    "column": 10,
                    "line": 49
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
                      1613,
                      1614
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 48
                      },
                      "start": {
                        "column": 18,
                        "line": 48
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1606,
                    1614
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 48
                    },
                    "start": {
                      "column": 11,
                      "line": 48
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    1619,
                    1627
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 48
                    },
                    "start": {
                      "column": 24,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1606,
                  1627
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 48
                  },
                  "start": {
                    "column": 11,
                    "line": 48
                  }
                }
              },
              "range": [
                1606,
                1769
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 53
                },
                "start": {
                  "column": 11,
                  "line": 48
                }
              }
            },
            "range": [
              1599,
              1770
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          }
        ],
        "range": [
          1564,
          1783
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 44,
            "line": 46
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
          1529,
          1533
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 46
          },
          "start": {
            "column": 9,
            "line": 46
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
                "line": 46
              },
              "start": {
                "column": 15,
                "line": 46
              }
            },
            "range": [
              1535,
              1562
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1537,
                    1543
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 46
                    },
                    "start": {
                      "column": 17,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1546,
                    1552
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 46
                    },
                    "start": {
                      "column": 26,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    1555,
                    1562
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 46
                    },
                    "start": {
                      "column": 35,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                1537,
                1562
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 46
                },
                "start": {
                  "column": 17,
                  "line": 46
                }
              }
            }
          },
          "range": [
            1534,
            1562
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 46
            },
            "start": {
              "column": 14,
              "line": 46
            }
          }
        }
      ],
      "range": [
        1520,
        1783
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 46
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
                    1828,
                    1829
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 56
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    1832,
                    1834
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 56
                    },
                    "start": {
                      "column": 12,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1828,
                  1834
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 56
                  },
                  "start": {
                    "column": 8,
                    "line": 56
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1824,
              1835
            ],
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
          {
            "type": "ReturnStatement",
            "argument": {
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
                    2029,
                    2030
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 60
                    },
                    "start": {
                      "column": 10,
                      "line": 60
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    2035,
                    2037
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 60
                    },
                    "start": {
                      "column": 16,
                      "line": 60
                    }
                  }
                },
                "range": [
                  2029,
                  2037
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 60
                  },
                  "start": {
                    "column": 10,
                    "line": 60
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
                    "name": "y",
                    "optional": false,
                    "range": [
                      1976,
                      1977
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 59
                      },
                      "start": {
                        "column": 12,
                        "line": 59
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
                        1980,
                        1981
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 59
                        },
                        "start": {
                          "column": 16,
                          "line": 59
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
                        1982,
                        1988
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 59
                        },
                        "start": {
                          "column": 18,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1980,
                      1988
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 59
                      },
                      "start": {
                        "column": 16,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1976,
                    1988
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 59
                    },
                    "start": {
                      "column": 12,
                      "line": 59
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1993,
                      1994
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 59
                      },
                      "start": {
                        "column": 29,
                        "line": 59
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      1999,
                      2006
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
                  },
                  "range": [
                    1993,
                    2006
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 59
                    },
                    "start": {
                      "column": 29,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1975,
                  2006
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 59
                  },
                  "start": {
                    "column": 11,
                    "line": 59
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
                      1949,
                      1950
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 58
                      },
                      "start": {
                        "column": 18,
                        "line": 58
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    1942,
                    1950
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 58
                    },
                    "start": {
                      "column": 11,
                      "line": 58
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    1955,
                    1963
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 58
                    },
                    "start": {
                      "column": 24,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1942,
                  1963
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 58
                  },
                  "start": {
                    "column": 11,
                    "line": 58
                  }
                }
              },
              "range": [
                1942,
                2037
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 60
                },
                "start": {
                  "column": 11,
                  "line": 58
                }
              }
            },
            "range": [
              1935,
              2038
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "range": [
          1818,
          2051
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 34,
            "line": 55
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
          1793,
          1797
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 55
          },
          "start": {
            "column": 9,
            "line": 55
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
                "line": 55
              },
              "start": {
                "column": 15,
                "line": 55
              }
            },
            "range": [
              1799,
              1816
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1801,
                    1807
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 55
                    },
                    "start": {
                      "column": 17,
                      "line": 55
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1810,
                    1816
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 55
                    },
                    "start": {
                      "column": 26,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                1801,
                1816
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 55
                },
                "start": {
                  "column": 17,
                  "line": 55
                }
              }
            }
          },
          "range": [
            1798,
            1816
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 55
            },
            "start": {
              "column": 14,
              "line": 55
            }
          }
        }
      ],
      "range": [
        1784,
        2051
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 55
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
                        "line": 64
                      },
                      "start": {
                        "column": 9,
                        "line": 64
                      }
                    },
                    "range": [
                      2133,
                      2151
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            2135,
                            2142
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 64
                            },
                            "start": {
                              "column": 11,
                              "line": 64
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2145,
                            2151
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 64
                            },
                            "start": {
                              "column": 21,
                              "line": 64
                            }
                          }
                        }
                      ],
                      "range": [
                        2135,
                        2151
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 64
                        },
                        "start": {
                          "column": 11,
                          "line": 64
                        }
                      }
                    }
                  },
                  "range": [
                    2132,
                    2151
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                },
                "init": null,
                "range": [
                  2132,
                  2151
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              2128,
              2152
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        2220,
                        2221
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 67
                        },
                        "start": {
                          "column": 12,
                          "line": 67
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2224,
                        2225
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 67
                        },
                        "start": {
                          "column": 16,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      2220,
                      2225
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 67
                      },
                      "start": {
                        "column": 12,
                        "line": 67
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
                          2270,
                          2271
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 68
                          },
                          "start": {
                            "column": 18,
                            "line": 68
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        2263,
                        2271
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 68
                        },
                        "start": {
                          "column": 11,
                          "line": 68
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"number\"",
                      "value": "number",
                      "range": [
                        2276,
                        2284
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 68
                        },
                        "start": {
                          "column": 24,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      2263,
                      2284
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 68
                      },
                      "start": {
                        "column": 11,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    2219,
                    2284
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 68
                    },
                    "start": {
                      "column": 11,
                      "line": 67
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
                        2296,
                        2297
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 69
                        },
                        "start": {
                          "column": 11,
                          "line": 69
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
                        2298,
                        2306
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 69
                        },
                        "start": {
                          "column": 13,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      2296,
                      2306
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 69
                      },
                      "start": {
                        "column": 11,
                        "line": 69
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2296,
                    2308
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 69
                    },
                    "start": {
                      "column": 11,
                      "line": 69
                    }
                  }
                },
                "range": [
                  2219,
                  2308
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 69
                  },
                  "start": {
                    "column": 11,
                    "line": 67
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2196,
                  2197
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 66
                  },
                  "start": {
                    "column": 10,
                    "line": 66
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
                      2171,
                      2172
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 65
                      },
                      "start": {
                        "column": 18,
                        "line": 65
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    2164,
                    2172
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 65
                    },
                    "start": {
                      "column": 11,
                      "line": 65
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    2177,
                    2185
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 65
                    },
                    "start": {
                      "column": 24,
                      "line": 65
                    }
                  }
                },
                "range": [
                  2164,
                  2185
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 65
                  },
                  "start": {
                    "column": 11,
                    "line": 65
                  }
                }
              },
              "range": [
                2164,
                2309
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 69
                },
                "start": {
                  "column": 11,
                  "line": 65
                }
              }
            },
            "range": [
              2157,
              2310
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          2097,
          2327
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 45,
            "line": 62
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
          2061,
          2066
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 62
          },
          "start": {
            "column": 9,
            "line": 62
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
                "line": 62
              },
              "start": {
                "column": 16,
                "line": 62
              }
            },
            "range": [
              2068,
              2095
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2070,
                    2076
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 62
                    },
                    "start": {
                      "column": 18,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2079,
                    2085
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 62
                    },
                    "start": {
                      "column": 27,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    2088,
                    2095
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 62
                    },
                    "start": {
                      "column": 36,
                      "line": 62
                    }
                  }
                }
              ],
              "range": [
                2070,
                2095
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 62
                },
                "start": {
                  "column": 18,
                  "line": 62
                }
              }
            }
          },
          "range": [
            2067,
            2095
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 62
            },
            "start": {
              "column": 15,
              "line": 62
            }
          }
        }
      ],
      "range": [
        2052,
        2327
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 62
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
                        "column": 36,
                        "line": 73
                      },
                      "start": {
                        "column": 9,
                        "line": 73
                      }
                    },
                    "range": [
                      2409,
                      2436
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2411,
                            2417
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 73
                            },
                            "start": {
                              "column": 11,
                              "line": 73
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            2420,
                            2427
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 73
                            },
                            "start": {
                              "column": 20,
                              "line": 73
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2430,
                            2436
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 73
                            },
                            "start": {
                              "column": 30,
                              "line": 73
                            }
                          }
                        }
                      ],
                      "range": [
                        2411,
                        2436
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 73
                        },
                        "start": {
                          "column": 11,
                          "line": 73
                        }
                      }
                    }
                  },
                  "range": [
                    2408,
                    2436
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                },
                "init": null,
                "range": [
                  2408,
                  2436
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 73
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              2404,
              2437
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "LogicalExpression",
                    "operator": "&&",
                    "left": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          2505,
                          2506
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 76
                          },
                          "start": {
                            "column": 12,
                            "line": 76
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2509,
                          2510
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 76
                          },
                          "start": {
                            "column": 16,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        2505,
                        2510
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 76
                        },
                        "start": {
                          "column": 12,
                          "line": 76
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
                            2555,
                            2556
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 77
                            },
                            "start": {
                              "column": 18,
                              "line": 77
                            }
                          }
                        },
                        "operator": "typeof",
                        "prefix": true,
                        "range": [
                          2548,
                          2556
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 77
                          },
                          "start": {
                            "column": 11,
                            "line": 77
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"number\"",
                        "value": "number",
                        "range": [
                          2561,
                          2569
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 77
                          },
                          "start": {
                            "column": 24,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        2548,
                        2569
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 77
                        },
                        "start": {
                          "column": 11,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      2504,
                      2569
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 77
                      },
                      "start": {
                        "column": 11,
                        "line": 76
                      }
                    }
                  },
                  "right": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2582,
                        2583
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 78
                        },
                        "start": {
                          "column": 12,
                          "line": 78
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        2586,
                        2588
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 78
                        },
                        "start": {
                          "column": 16,
                          "line": 78
                        }
                      }
                    },
                    "range": [
                      2582,
                      2588
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 78
                      },
                      "start": {
                        "column": 12,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    2504,
                    2589
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 78
                    },
                    "start": {
                      "column": 11,
                      "line": 76
                    }
                  }
                },
                "right": {
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
                      "column": 12,
                      "line": 79
                    },
                    "start": {
                      "column": 11,
                      "line": 79
                    }
                  }
                },
                "range": [
                  2504,
                  2621
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 79
                  },
                  "start": {
                    "column": 11,
                    "line": 76
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  2481,
                  2482
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 75
                  },
                  "start": {
                    "column": 10,
                    "line": 75
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
                      2456,
                      2457
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 74
                      },
                      "start": {
                        "column": 18,
                        "line": 74
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    2449,
                    2457
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 74
                    },
                    "start": {
                      "column": 11,
                      "line": 74
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    2462,
                    2470
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 74
                    },
                    "start": {
                      "column": 24,
                      "line": 74
                    }
                  }
                },
                "range": [
                  2449,
                  2470
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 74
                  },
                  "start": {
                    "column": 11,
                    "line": 74
                  }
                }
              },
              "range": [
                2449,
                2622
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 79
                },
                "start": {
                  "column": 11,
                  "line": 74
                }
              }
            },
            "range": [
              2442,
              2623
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          }
        ],
        "range": [
          2373,
          2640
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 45,
            "line": 71
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
          2337,
          2342
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 71
          },
          "start": {
            "column": 9,
            "line": 71
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
                "line": 71
              },
              "start": {
                "column": 16,
                "line": 71
              }
            },
            "range": [
              2344,
              2371
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2346,
                    2352
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 71
                    },
                    "start": {
                      "column": 18,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2355,
                    2361
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 71
                    },
                    "start": {
                      "column": 27,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    2364,
                    2371
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 71
                    },
                    "start": {
                      "column": 36,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                2346,
                2371
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 71
                },
                "start": {
                  "column": 18,
                  "line": 71
                }
              }
            }
          },
          "range": [
            2343,
            2371
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 71
            },
            "start": {
              "column": 15,
              "line": 71
            }
          }
        }
      ],
      "range": [
        2328,
        2640
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 71
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
                        "column": 36,
                        "line": 83
                      },
                      "start": {
                        "column": 9,
                        "line": 83
                      }
                    },
                    "range": [
                      2722,
                      2749
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            2724,
                            2730
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 83
                            },
                            "start": {
                              "column": 11,
                              "line": 83
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            2733,
                            2740
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 83
                            },
                            "start": {
                              "column": 20,
                              "line": 83
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            2743,
                            2749
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 83
                            },
                            "start": {
                              "column": 30,
                              "line": 83
                            }
                          }
                        }
                      ],
                      "range": [
                        2724,
                        2749
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 83
                        },
                        "start": {
                          "column": 11,
                          "line": 83
                        }
                      }
                    }
                  },
                  "range": [
                    2721,
                    2749
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
                    }
                  }
                },
                "init": null,
                "range": [
                  2721,
                  2749
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 83
                  },
                  "start": {
                    "column": 8,
                    "line": 83
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              2717,
              2750
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        2850,
                        2851
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 86
                        },
                        "start": {
                          "column": 12,
                          "line": 86
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2854,
                        2855
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 86
                        },
                        "start": {
                          "column": 16,
                          "line": 86
                        }
                      }
                    },
                    "range": [
                      2850,
                      2855
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 86
                      },
                      "start": {
                        "column": 12,
                        "line": 86
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
                          2900,
                          2901
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 87
                          },
                          "start": {
                            "column": 18,
                            "line": 87
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        2893,
                        2901
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 87
                        },
                        "start": {
                          "column": 11,
                          "line": 87
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"number\"",
                      "value": "number",
                      "range": [
                        2906,
                        2914
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 87
                        },
                        "start": {
                          "column": 24,
                          "line": 87
                        }
                      }
                    },
                    "range": [
                      2893,
                      2914
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 87
                      },
                      "start": {
                        "column": 11,
                        "line": 87
                      }
                    }
                  },
                  "range": [
                    2849,
                    2914
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 87
                    },
                    "start": {
                      "column": 11,
                      "line": 86
                    }
                  }
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2926,
                    2927
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 88
                    },
                    "start": {
                      "column": 11,
                      "line": 88
                    }
                  }
                },
                "range": [
                  2849,
                  2927
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 88
                  },
                  "start": {
                    "column": 11,
                    "line": 86
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
                      2796,
                      2797
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 85
                      },
                      "start": {
                        "column": 12,
                        "line": 85
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "10",
                    "value": 10,
                    "range": [
                      2800,
                      2802
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 85
                      },
                      "start": {
                        "column": 16,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    2796,
                    2802
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 85
                    },
                    "start": {
                      "column": 12,
                      "line": 85
                    }
                  }
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
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
                          2807,
                          2808
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 85
                          },
                          "start": {
                            "column": 23,
                            "line": 85
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
                          2809,
                          2817
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 85
                          },
                          "start": {
                            "column": 25,
                            "line": 85
                          }
                        }
                      },
                      "range": [
                        2807,
                        2817
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 85
                        },
                        "start": {
                          "column": 23,
                          "line": 85
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2807,
                      2819
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 85
                      },
                      "start": {
                        "column": 23,
                        "line": 85
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
                      2820,
                      2826
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 85
                      },
                      "start": {
                        "column": 36,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    2807,
                    2826
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 85
                    },
                    "start": {
                      "column": 23,
                      "line": 85
                    }
                  }
                },
                "range": [
                  2795,
                  2826
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 85
                  },
                  "start": {
                    "column": 11,
                    "line": 85
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
                      2769,
                      2770
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 84
                      },
                      "start": {
                        "column": 18,
                        "line": 84
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    2762,
                    2770
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 84
                    },
                    "start": {
                      "column": 11,
                      "line": 84
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"string\"",
                  "value": "string",
                  "range": [
                    2775,
                    2783
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 84
                    },
                    "start": {
                      "column": 24,
                      "line": 84
                    }
                  }
                },
                "range": [
                  2762,
                  2783
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 84
                  },
                  "start": {
                    "column": 11,
                    "line": 84
                  }
                }
              },
              "range": [
                2762,
                2928
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 88
                },
                "start": {
                  "column": 11,
                  "line": 84
                }
              }
            },
            "range": [
              2755,
              2929
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          }
        ],
        "range": [
          2686,
          2946
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 89
          },
          "start": {
            "column": 45,
            "line": 81
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
          2650,
          2655
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 81
          },
          "start": {
            "column": 9,
            "line": 81
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
                "line": 81
              },
              "start": {
                "column": 16,
                "line": 81
              }
            },
            "range": [
              2657,
              2684
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    2659,
                    2665
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 81
                    },
                    "start": {
                      "column": 18,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    2668,
                    2674
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 81
                    },
                    "start": {
                      "column": 27,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    2677,
                    2684
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 81
                    },
                    "start": {
                      "column": 36,
                      "line": 81
                    }
                  }
                }
              ],
              "range": [
                2659,
                2684
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 81
                },
                "start": {
                  "column": 18,
                  "line": 81
                }
              }
            }
          },
          "range": [
            2656,
            2684
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 81
            },
            "start": {
              "column": 15,
              "line": 81
            }
          }
        }
      ],
      "range": [
        2641,
        2946
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 81
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 89
    },
    "start": {
      "column": 0,
      "line": 8
    }
  },
  "hashbang": null
}
```
