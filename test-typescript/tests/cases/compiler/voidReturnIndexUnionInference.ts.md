__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    67,
    597
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        67,
        271
      ],
      "attributes": [],
      "declaration": {
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
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        253,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      246,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  236,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 11,
                    "line": 8
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "range": [
                            218,
                            222
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 7
                            },
                            "start": {
                              "column": 20,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "range": [
                          213,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        213,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      206,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
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
                  196,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 6
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "range": [
                  190,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "range": [
                186,
                269
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            180,
            271
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 17,
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
          "name": "safeInvoke",
          "optional": false,
          "range": [
            83,
            93
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              },
              "range": [
                110,
                148
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 3
                            },
                            "start": {
                              "column": 16,
                              "line": 3
                            }
                          },
                          "range": [
                            118,
                            122
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A1",
                              "optional": false,
                              "range": [
                                120,
                                122
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 3
                                },
                                "start": {
                                  "column": 18,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              120,
                              122
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 3
                              },
                              "start": {
                                "column": 18,
                                "line": 3
                              }
                            }
                          }
                        },
                        "range": [
                          114,
                          122
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 22,
                          "line": 3
                        }
                      },
                      "range": [
                        124,
                        128
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "range": [
                            127,
                            128
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 3
                            },
                            "start": {
                              "column": 25,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          127,
                          128
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 3
                          },
                          "start": {
                            "column": 25,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      113,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      132,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 3
                      },
                      "start": {
                        "column": 30,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      139,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 3
                      },
                      "start": {
                        "column": 37,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  112,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              106,
              148
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              },
              "range": [
                158,
                162
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A1",
                  "optional": false,
                  "range": [
                    160,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "range": [
                  160,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              154,
              162
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 16,
              "line": 5
            },
            "start": {
              "column": 1,
              "line": 5
            }
          },
          "range": [
            164,
            179
          ],
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    166,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 5
                    },
                    "start": {
                      "column": 3,
                      "line": 5
                    }
                  }
                },
                "range": [
                  166,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 5
                  },
                  "start": {
                    "column": 3,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSUndefinedKeyword",
                "range": [
                  170,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 5
                  },
                  "start": {
                    "column": 7,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              166,
              179
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 5
              },
              "start": {
                "column": 3,
                "line": 5
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 33,
              "line": 2
            },
            "start": {
              "column": 26,
              "line": 2
            }
          },
          "range": [
            93,
            100
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1",
                "optional": false,
                "range": [
                  94,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                94,
                96
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
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
                "name": "R",
                "optional": false,
                "range": [
                  98,
                  99
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 2
                  },
                  "start": {
                    "column": 31,
                    "line": 2
                  }
                }
              },
              "out": false,
              "range": [
                98,
                99
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 2
                },
                "start": {
                  "column": 31,
                  "line": 2
                }
              }
            }
          ]
        },
        "range": [
          74,
          271
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          289,
          361
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onFoo",
              "optional": false,
              "range": [
                295,
                300
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 14
                    }
                  },
                  "range": [
                    307,
                    315
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      309,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 14
                      },
                      "start": {
                        "column": 18,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  302,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 14
                },
                "start": {
                  "column": 25,
                  "line": 14
                }
              },
              "range": [
                316,
                325
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  318,
                  325
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 14
                  },
                  "start": {
                    "column": 27,
                    "line": 14
                  }
                }
              }
            },
            "static": false,
            "range": [
              295,
              326
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onBar",
              "optional": false,
              "range": [
                331,
                336
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "kind": "method",
            "optional": true,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 15
                    },
                    "start": {
                      "column": 16,
                      "line": 15
                    }
                  },
                  "range": [
                    343,
                    351
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      345,
                      351
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 15
                      },
                      "start": {
                        "column": 18,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  338,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 15
                },
                "start": {
                  "column": 25,
                  "line": 15
                }
              },
              "range": [
                352,
                358
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  354,
                  358
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 15
                  },
                  "start": {
                    "column": 27,
                    "line": 15
                  }
                }
              }
            },
            "static": false,
            "range": [
              331,
              359
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 16,
            "line": 13
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "range": [
          283,
          288
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 13
          }
        }
      },
      "range": [
        273,
        361
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "range": [
                      430,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onFoo",
                    "optional": false,
                    "range": [
                      436,
                      441
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 21,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    430,
                    441
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 15,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"blah\"",
                  "value": "blah",
                  "range": [
                    443,
                    449
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 19
                    },
                    "start": {
                      "column": 28,
                      "line": 19
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "safeInvoke",
                "optional": false,
                "range": [
                  419,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "range": [
                419,
                450
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              419,
              451
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "range": [
                      573,
                      578
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 22
                      },
                      "start": {
                        "column": 15,
                        "line": 22
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onBar",
                    "optional": false,
                    "range": [
                      579,
                      584
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 22
                      },
                      "start": {
                        "column": 21,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    573,
                    584
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 22
                    },
                    "start": {
                      "column": 15,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"blah\"",
                  "value": "blah",
                  "range": [
                    586,
                    592
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 22
                    },
                    "start": {
                      "column": 28,
                      "line": 22
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "safeInvoke",
                "optional": false,
                "range": [
                  562,
                  572
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
              "optional": false,
              "range": [
                562,
                593
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              562,
              594
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          413,
          596
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 50,
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
        "name": "bad",
        "optional": false,
        "range": [
          372,
          375
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 18
              },
              "start": {
                "column": 35,
                "line": 18
              }
            },
            "range": [
              398,
              411
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  408,
                  411
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "range": [
                        409,
                        410
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 18
                        },
                        "start": {
                          "column": 46,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      409,
                      410
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 18
                      },
                      "start": {
                        "column": 46,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 18
                  },
                  "start": {
                    "column": 45,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "range": [
                  400,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 18
                  },
                  "start": {
                    "column": 37,
                    "line": 18
                  }
                }
              },
              "range": [
                400,
                411
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 18
                },
                "start": {
                  "column": 37,
                  "line": 18
                }
              }
            }
          },
          "range": [
            393,
            411
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 18
            },
            "start": {
              "column": 30,
              "line": 18
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 18
          },
          "start": {
            "column": 12,
            "line": 18
          }
        },
        "range": [
          375,
          392
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
                "name": "Props",
                "optional": false,
                "range": [
                  386,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 18
                  },
                  "start": {
                    "column": 23,
                    "line": 18
                  }
                }
              },
              "range": [
                386,
                391
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 18
                },
                "start": {
                  "column": 23,
                  "line": 18
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "range": [
                376,
                377
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              376,
              391
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 18
              },
              "start": {
                "column": 13,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        363,
        596
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
