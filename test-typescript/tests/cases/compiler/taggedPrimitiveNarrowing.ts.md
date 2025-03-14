__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    421
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hash",
        "optional": false,
        "range": [
          5,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
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
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "__hash",
                  "optional": false,
                  "range": [
                    23,
                    29
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 1
                    },
                    "start": {
                      "column": 23,
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
                      "column": 35,
                      "line": 1
                    },
                    "start": {
                      "column": 29,
                      "line": 1
                    }
                  },
                  "range": [
                    29,
                    35
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        31,
                        35
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 1
                        },
                        "start": {
                          "column": 31,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      31,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 1
                      },
                      "start": {
                        "column": 31,
                        "line": 1
                      }
                    }
                  }
                },
                "range": [
                  23,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 23,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              21,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
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
          12,
          37
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 1
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 1
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
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "\"This doesn't look like a hash\"",
                        "value": "This doesn't look like a hash",
                        "range": [
                          145,
                          176
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 5
                          },
                          "start": {
                            "column": 24,
                            "line": 5
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
                        139,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 18,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      135,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 5
                      },
                      "start": {
                        "column": 14,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    129,
                    178
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                119,
                184
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 34,
                  "line": 4
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
                  "name": "hash",
                  "optional": false,
                  "range": [
                    100,
                    104
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  93,
                  104
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  109,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              },
              "range": [
                93,
                117
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              89,
              184
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "hash",
                "optional": false,
                "range": [
                  196,
                  200
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 7
                  },
                  "start": {
                    "column": 11,
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
                  201,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 16,
                    "line": 7
                  }
                }
              },
              "range": [
                196,
                207
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              189,
              208
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          83,
          210
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 43,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getHashLength",
        "optional": false,
        "range": [
          49,
          62
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "hash",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 27,
                "line": 3
              }
            },
            "range": [
              67,
              73
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Hash",
                "optional": false,
                "range": [
                  69,
                  73
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              },
              "range": [
                69,
                73
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            }
          },
          "range": [
            63,
            73
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 3
          },
          "start": {
            "column": 34,
            "line": 3
          }
        },
        "range": [
          74,
          82
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            76,
            82
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 3
            },
            "start": {
              "column": 36,
              "line": 3
            }
          }
        }
      },
      "range": [
        40,
        210
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "\"This doesn't look like a hash\"",
                        "value": "This doesn't look like a hash",
                        "range": [
                          355,
                          386
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        349,
                        354
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 12
                        },
                        "start": {
                          "column": 18,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      345,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 12
                      },
                      "start": {
                        "column": 14,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    339,
                    388
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                329,
                394
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 34,
                  "line": 11
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
                  "name": "hash",
                  "optional": false,
                  "range": [
                    310,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  303,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  319,
                  327
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 11
                  },
                  "start": {
                    "column": 24,
                    "line": 11
                  }
                }
              },
              "range": [
                303,
                327
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "range": [
              299,
              394
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "hash",
                "optional": false,
                "range": [
                  406,
                  410
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
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
                  411,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 14
                  },
                  "start": {
                    "column": 16,
                    "line": 14
                  }
                }
              },
              "range": [
                406,
                417
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              399,
              418
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          293,
          420
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 81,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getHashLength2",
        "optional": false,
        "range": [
          221,
          235
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "hash",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 10
              },
              "start": {
                "column": 59,
                "line": 10
              }
            },
            "range": [
              271,
              283
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    273,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 10
                    },
                    "start": {
                      "column": 61,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      282,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 10
                      },
                      "start": {
                        "column": 70,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    282,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 10
                    },
                    "start": {
                      "column": 70,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                273,
                283
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 10
                },
                "start": {
                  "column": 61,
                  "line": 10
                }
              }
            }
          },
          "range": [
            267,
            283
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 10
            },
            "start": {
              "column": 55,
              "line": 10
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 80,
            "line": 10
          },
          "start": {
            "column": 72,
            "line": 10
          }
        },
        "range": [
          284,
          292
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            286,
            292
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 10
            },
            "start": {
              "column": 74,
              "line": 10
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 54,
            "line": 10
          },
          "start": {
            "column": 23,
            "line": 10
          }
        },
        "range": [
          235,
          266
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__tag__",
                    "optional": false,
                    "range": [
                      248,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 10
                      },
                      "start": {
                        "column": 36,
                        "line": 10
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
                        "column": 52,
                        "line": 10
                      },
                      "start": {
                        "column": 43,
                        "line": 10
                      }
                    },
                    "range": [
                      255,
                      264
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        257,
                        264
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 10
                        },
                        "start": {
                          "column": 45,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    248,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 10
                    },
                    "start": {
                      "column": 36,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                246,
                265
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 10
                },
                "start": {
                  "column": 34,
                  "line": 10
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
                236,
                237
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 24,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              236,
              265
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 10
              },
              "start": {
                "column": 24,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        212,
        420
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
