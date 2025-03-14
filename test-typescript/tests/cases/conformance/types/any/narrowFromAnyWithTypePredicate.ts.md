__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    698
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              },
              "range": [
                13,
                18
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  15,
                  18
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 1
                  },
                  "start": {
                    "column": 15,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        19
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFunction",
        "optional": false,
        "range": [
          37,
          47
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            48,
            49
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 2
            },
            "start": {
              "column": 28,
              "line": 2
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 2
          },
          "start": {
            "column": 30,
            "line": 2
          }
        },
        "range": [
          50,
          65
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              52,
              53
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 2
              },
              "start": {
                "column": 32,
                "line": 2
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 2
              },
              "start": {
                "column": 37,
                "line": 2
              }
            },
            "range": [
              57,
              65
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "range": [
                  57,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 2
                  },
                  "start": {
                    "column": 37,
                    "line": 2
                  }
                }
              },
              "range": [
                57,
                65
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 2
                },
                "start": {
                  "column": 37,
                  "line": 2
                }
              }
            }
          },
          "range": [
            52,
            65
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 2
            },
            "start": {
              "column": 32,
              "line": 2
            }
          }
        }
      },
      "range": [
        20,
        66
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isObject",
        "optional": false,
        "range": [
          84,
          92
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            93,
            94
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 3
            },
            "start": {
              "column": 26,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 41,
            "line": 3
          },
          "start": {
            "column": 28,
            "line": 3
          }
        },
        "range": [
          95,
          108
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              97,
              98
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 30,
                "line": 3
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 41,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            },
            "range": [
              102,
              108
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "range": [
                  102,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 3
                  },
                  "start": {
                    "column": 35,
                    "line": 3
                  }
                }
              },
              "range": [
                102,
                108
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 3
                },
                "start": {
                  "column": 35,
                  "line": 3
                }
              }
            }
          },
          "range": [
            97,
            108
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        }
      },
      "range": [
        67,
        109
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isAnything",
        "optional": false,
        "range": [
          127,
          137
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 4
          },
          "start": {
            "column": 17,
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
          "range": [
            138,
            139
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 4
            },
            "start": {
              "column": 28,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 4
          },
          "start": {
            "column": 30,
            "line": 4
          }
        },
        "range": [
          140,
          149
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              142,
              143
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 4
              },
              "start": {
                "column": 32,
                "line": 4
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 4
              },
              "start": {
                "column": 37,
                "line": 4
              }
            },
            "range": [
              147,
              149
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                147,
                149
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 4
                },
                "start": {
                  "column": 37,
                  "line": 4
                }
              }
            }
          },
          "range": [
            142,
            149
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 4
            },
            "start": {
              "column": 32,
              "line": 4
            }
          }
        }
      },
      "range": [
        110,
        150
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isError",
        "optional": false,
        "range": [
          168,
          175
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 5
          },
          "start": {
            "column": 17,
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
          "range": [
            176,
            177
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 5
            },
            "start": {
              "column": 25,
              "line": 5
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 5
          },
          "start": {
            "column": 27,
            "line": 5
          }
        },
        "range": [
          178,
          190
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              180,
              181
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 29,
                "line": 5
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            },
            "range": [
              185,
              190
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "range": [
                  185,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "range": [
                185,
                190
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            }
          },
          "range": [
            180,
            190
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 5
            },
            "start": {
              "column": 29,
              "line": 5
            }
          }
        }
      },
      "range": [
        151,
        191
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDate",
        "optional": false,
        "range": [
          209,
          215
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            216,
            217
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
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 37,
            "line": 6
          },
          "start": {
            "column": 26,
            "line": 6
          }
        },
        "range": [
          218,
          229
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              220,
              221
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 28,
                "line": 6
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 6
              },
              "start": {
                "column": 33,
                "line": 6
              }
            },
            "range": [
              225,
              229
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  225,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 6
                  },
                  "start": {
                    "column": 33,
                    "line": 6
                  }
                }
              },
              "range": [
                225,
                229
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 6
                },
                "start": {
                  "column": 33,
                  "line": 6
                }
              }
            }
          },
          "range": [
            220,
            229
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 6
            },
            "start": {
              "column": 28,
              "line": 6
            }
          }
        }
      },
      "range": [
        192,
        230
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  314,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                314,
                317
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              314,
              318
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    325,
                    326
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 11
                    },
                    "start": {
                      "column": 6,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    328,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 11
                    },
                    "start": {
                      "column": 9,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    331,
                    332
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  323,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "range": [
                323,
                333
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              323,
              334
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"hello!\"",
                  "value": "hello!",
                  "range": [
                    341,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 12
                    },
                    "start": {
                      "column": 6,
                      "line": 12
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  339,
                  340
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                339,
                350
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              339,
              351
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  356,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "range": [
                  358,
                  362
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 13
                  },
                  "start": {
                    "column": 6,
                    "line": 13
                  }
                }
              },
              "range": [
                356,
                362
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              356,
              363
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
          252,
          365
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 19,
            "line": 9
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              248,
              249
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
              },
              "start": {
                "column": 15,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isFunction",
          "optional": false,
          "range": [
            237,
            247
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          237,
          250
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 9
          },
          "start": {
            "column": 4,
            "line": 9
          }
        }
      },
      "range": [
        233,
        365
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 9
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
            "type": "ExpressionStatement",
            "expression": {
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
                    444,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "range": [
                    446,
                    452
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 17
                    },
                    "start": {
                      "column": 6,
                      "line": 17
                    }
                  }
                },
                "range": [
                  444,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "range": [
                444,
                454
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              444,
              455
            ],
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  460,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                460,
                463
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            "range": [
              460,
              464
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          384,
          466
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 17,
            "line": 16
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              380,
              381
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 13,
                "line": 16
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isObject",
          "optional": false,
          "range": [
            371,
            379
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        },
        "optional": false,
        "range": [
          371,
          382
        ],
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
      "range": [
        367,
        466
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 16
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
            "type": "ExpressionStatement",
            "expression": {
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
                    569,
                    570
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "range": [
                    571,
                    577
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 22
                    },
                    "start": {
                      "column": 6,
                      "line": 22
                    }
                  }
                },
                "range": [
                  569,
                  577
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "range": [
                569,
                579
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              569,
              580
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                "name": "x",
                "optional": false,
                "range": [
                  585,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "range": [
                585,
                588
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "range": [
              585,
              589
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          487,
          591
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 19,
            "line": 21
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              483,
              484
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 21
              },
              "start": {
                "column": 15,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isAnything",
          "optional": false,
          "range": [
            472,
            482
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          472,
          485
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 21
          },
          "start": {
            "column": 4,
            "line": 21
          }
        }
      },
      "range": [
        468,
        591
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 21
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  616,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "range": [
                  618,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 27
                  },
                  "start": {
                    "column": 6,
                    "line": 27
                  }
                }
              },
              "range": [
                616,
                625
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              616,
              626
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  631,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "mesage",
                "optional": false,
                "range": [
                  633,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 28
                  },
                  "start": {
                    "column": 6,
                    "line": 28
                  }
                }
              },
              "range": [
                631,
                639
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              631,
              640
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          609,
          642
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 16,
            "line": 26
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              605,
              606
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
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isError",
          "optional": false,
          "range": [
            597,
            604
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          597,
          607
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 26
          },
          "start": {
            "column": 4,
            "line": 26
          }
        }
      },
      "range": [
        593,
        642
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 26
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
            "type": "ExpressionStatement",
            "expression": {
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
                    665,
                    666
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 32
                    },
                    "start": {
                      "column": 4,
                      "line": 32
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getDate",
                  "optional": false,
                  "range": [
                    667,
                    674
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 32
                    },
                    "start": {
                      "column": 6,
                      "line": 32
                    }
                  }
                },
                "range": [
                  665,
                  674
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
                  }
                }
              },
              "optional": false,
              "range": [
                665,
                676
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              665,
              677
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                    682,
                    683
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 33
                    },
                    "start": {
                      "column": 4,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getHuors",
                  "optional": false,
                  "range": [
                    684,
                    692
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 33
                    },
                    "start": {
                      "column": 6,
                      "line": 33
                    }
                  }
                },
                "range": [
                  682,
                  692
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                682,
                694
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "range": [
              682,
              695
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          659,
          697
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 15,
            "line": 31
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              655,
              656
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 31
              },
              "start": {
                "column": 11,
                "line": 31
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isDate",
          "optional": false,
          "range": [
            648,
            654
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        },
        "optional": false,
        "range": [
          648,
          657
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 31
          },
          "start": {
            "column": 4,
            "line": 31
          }
        }
      },
      "range": [
        644,
        697
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
