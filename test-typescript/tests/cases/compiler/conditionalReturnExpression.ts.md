__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    519
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
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  56,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "consequent": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  51,
                  52
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
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  46,
                  47
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
              "range": [
                46,
                57
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "range": [
              38,
              59
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          32,
          61
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 32,
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
        "name": "return1",
        "optional": false,
        "range": [
          9,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            },
            "range": [
              18,
              27
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                20,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
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
            17,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 28,
            "line": 1
          }
        },
        "range": [
          28,
          31
        ],
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              30,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 30,
                "line": 1
              }
            }
          },
          "range": [
            30,
            31
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 1
            },
            "start": {
              "column": 30,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        61
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
        "name": "getAny",
        "optional": false,
        "range": [
          80,
          86
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 5
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 5
          },
          "start": {
            "column": 25,
            "line": 5
          }
        },
        "range": [
          88,
          93
        ],
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "range": [
            90,
            93
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 27,
              "line": 5
            }
          }
        }
      },
      "range": [
        63,
        94
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 5
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  176,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 8
                  },
                  "start": {
                    "column": 42,
                    "line": 8
                  }
                }
              },
              "consequent": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAny",
                  "optional": false,
                  "range": [
                    165,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 8
                    },
                    "start": {
                      "column": 31,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "range": [
                  165,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
                    "line": 8
                  }
                }
              },
              "test": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      158,
                      161
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 8
                      },
                      "start": {
                        "column": 24,
                        "line": 8
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      145,
                      146
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
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "range": [
                      147,
                      157
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 8
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    145,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "range": [
                  145,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "range": [
                145,
                177
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              138,
              178
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          132,
          180
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 36,
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
        "name": "return2",
        "optional": false,
        "range": [
          105,
          112
        ],
        "loc": {
          "end": {
            "column": 16,
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
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            },
            "range": [
              114,
              122
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                116,
                122
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 7
                },
                "start": {
                  "column": 20,
                  "line": 7
                }
              }
            }
          },
          "range": [
            113,
            122
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 7
            },
            "start": {
              "column": 17,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 7
          },
          "start": {
            "column": 27,
            "line": 7
          }
        },
        "range": [
          123,
          131
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            125,
            131
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 7
            },
            "start": {
              "column": 29,
              "line": 7
            }
          }
        }
      },
      "range": [
        96,
        180
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  257,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 12
                  },
                  "start": {
                    "column": 37,
                    "line": 12
                  }
                }
              },
              "consequent": {
                "type": "Literal",
                "raw": "\"a\"",
                "value": "a",
                "range": [
                  251,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 12
                  },
                  "start": {
                    "column": 31,
                    "line": 12
                  }
                }
              },
              "test": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      244,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 12
                      },
                      "start": {
                        "column": 24,
                        "line": 12
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      231,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "range": [
                      233,
                      243
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    231,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "range": [
                  231,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "range": [
                231,
                258
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              224,
              259
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          218,
          261
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 36,
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
        "name": "return3",
        "optional": false,
        "range": [
          191,
          198
        ],
        "loc": {
          "end": {
            "column": 16,
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
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 18,
                "line": 11
              }
            },
            "range": [
              200,
              208
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                202,
                208
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 20,
                  "line": 11
                }
              }
            }
          },
          "range": [
            199,
            208
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 11
          },
          "start": {
            "column": 27,
            "line": 11
          }
        },
        "range": [
          209,
          217
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            211,
            217
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 11
            },
            "start": {
              "column": 29,
              "line": 11
            }
          }
        }
      },
      "range": [
        182,
        261
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
              "type": "TSAsExpression",
              "expression": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    344,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 16
                    },
                    "start": {
                      "column": 43,
                      "line": 16
                    }
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAny",
                    "optional": false,
                    "range": [
                      333,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 16
                      },
                      "start": {
                        "column": 32,
                        "line": 16
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    333,
                    341
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 16
                    },
                    "start": {
                      "column": 32,
                      "line": 16
                    }
                  }
                },
                "test": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        326,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 16
                        },
                        "start": {
                          "column": 25,
                          "line": 16
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        313,
                        314
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 16
                        },
                        "start": {
                          "column": 12,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "startsWith",
                      "optional": false,
                      "range": [
                        315,
                        325
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 16
                        },
                        "start": {
                          "column": 14,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      313,
                      325
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 16
                      },
                      "start": {
                        "column": 12,
                        "line": 16
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    313,
                    330
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                },
                "range": [
                  313,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 16
                  },
                  "start": {
                    "column": 12,
                    "line": 16
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  350,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 16
                  },
                  "start": {
                    "column": 49,
                    "line": 16
                  }
                }
              },
              "range": [
                312,
                356
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              305,
              357
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          299,
          359
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 36,
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
        "name": "return4",
        "optional": false,
        "range": [
          272,
          279
        ],
        "loc": {
          "end": {
            "column": 16,
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
                "column": 26,
                "line": 15
              },
              "start": {
                "column": 18,
                "line": 15
              }
            },
            "range": [
              281,
              289
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                283,
                289
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 15
                },
                "start": {
                  "column": 20,
                  "line": 15
                }
              }
            }
          },
          "range": [
            280,
            289
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 15
            },
            "start": {
              "column": 17,
              "line": 15
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 35,
            "line": 15
          },
          "start": {
            "column": 27,
            "line": 15
          }
        },
        "range": [
          290,
          298
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            292,
            298
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 15
            },
            "start": {
              "column": 29,
              "line": 15
            }
          }
        }
      },
      "range": [
        263,
        359
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "return5",
            "optional": false,
            "range": [
              367,
              374
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  431,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 19
                  },
                  "start": {
                    "column": 70,
                    "line": 19
                  }
                }
              },
              "consequent": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAny",
                  "optional": false,
                  "range": [
                    420,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 19
                    },
                    "start": {
                      "column": 59,
                      "line": 19
                    }
                  }
                },
                "optional": false,
                "range": [
                  420,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 19
                  },
                  "start": {
                    "column": 59,
                    "line": 19
                  }
                }
              },
              "test": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "\"a\"",
                    "value": "a",
                    "range": [
                      413,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 19
                      },
                      "start": {
                        "column": 52,
                        "line": 19
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      400,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 19
                      },
                      "start": {
                        "column": 39,
                        "line": 19
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "startsWith",
                    "optional": false,
                    "range": [
                      402,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 19
                      },
                      "start": {
                        "column": 41,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    400,
                    412
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 19
                    },
                    "start": {
                      "column": 39,
                      "line": 19
                    }
                  }
                },
                "optional": false,
                "range": [
                  400,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 19
                  },
                  "start": {
                    "column": 39,
                    "line": 19
                  }
                }
              },
              "range": [
                400,
                432
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 19
                },
                "start": {
                  "column": 39,
                  "line": 19
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 18,
                      "line": 19
                    }
                  },
                  "range": [
                    379,
                    387
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      381,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 20,
                        "line": 19
                      }
                    }
                  }
                },
                "range": [
                  378,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 19
                  },
                  "start": {
                    "column": 17,
                    "line": 19
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 19
                },
                "start": {
                  "column": 27,
                  "line": 19
                }
              },
              "range": [
                388,
                396
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  390,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 19
                  },
                  "start": {
                    "column": 29,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              377,
              432
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 19
              },
              "start": {
                "column": 16,
                "line": 19
              }
            }
          },
          "range": [
            367,
            432
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        361,
        433
      ],
      "loc": {
        "end": {
          "column": 72,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "return6",
            "optional": false,
            "range": [
              441,
              448
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    506,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 21
                    },
                    "start": {
                      "column": 71,
                      "line": 21
                    }
                  }
                },
                "consequent": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAny",
                    "optional": false,
                    "range": [
                      495,
                      501
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 21
                      },
                      "start": {
                        "column": 60,
                        "line": 21
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    495,
                    503
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 21
                    },
                    "start": {
                      "column": 60,
                      "line": 21
                    }
                  }
                },
                "test": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        488,
                        491
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 21
                        },
                        "start": {
                          "column": 53,
                          "line": 21
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        475,
                        476
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 21
                        },
                        "start": {
                          "column": 40,
                          "line": 21
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "startsWith",
                      "optional": false,
                      "range": [
                        477,
                        487
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 21
                        },
                        "start": {
                          "column": 42,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      475,
                      487
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 21
                      },
                      "start": {
                        "column": 40,
                        "line": 21
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    475,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 21
                    },
                    "start": {
                      "column": 40,
                      "line": 21
                    }
                  }
                },
                "range": [
                  475,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 21
                  },
                  "start": {
                    "column": 40,
                    "line": 21
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  512,
                  518
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 21
                  },
                  "start": {
                    "column": 77,
                    "line": 21
                  }
                }
              },
              "range": [
                474,
                518
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 21
                },
                "start": {
                  "column": 39,
                  "line": 21
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 21
                    },
                    "start": {
                      "column": 18,
                      "line": 21
                    }
                  },
                  "range": [
                    453,
                    461
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      455,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 21
                      },
                      "start": {
                        "column": 20,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  452,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 21
                  },
                  "start": {
                    "column": 17,
                    "line": 21
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 21
                },
                "start": {
                  "column": 27,
                  "line": 21
                }
              },
              "range": [
                462,
                470
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  464,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 21
                  },
                  "start": {
                    "column": 29,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              451,
              518
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 21
              },
              "start": {
                "column": 16,
                "line": 21
              }
            }
          },
          "range": [
            441,
            518
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        435,
        519
      ],
      "loc": {
        "end": {
          "column": 84,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 84,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
