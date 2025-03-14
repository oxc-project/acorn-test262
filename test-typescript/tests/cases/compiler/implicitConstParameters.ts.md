__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    941
  ],
  "body": [
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
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "range": [
                  43,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                43,
                47
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              43,
              48
            ],
            "loc": {
              "end": {
                "column": 9,
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
          37,
          50
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 37,
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
        "name": "doSomething",
        "optional": false,
        "range": [
          9,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            },
            "range": [
              23,
              35
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 28,
                    "line": 1
                  }
                },
                "range": [
                  28,
                  35
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
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
                25,
                35
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            }
          },
          "range": [
            21,
            35
          ],
          "loc": {
            "end": {
              "column": 35,
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
        0,
        50
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
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
                                141,
                                142
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 7
                                },
                                "start": {
                                  "column": 24,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "range": [
                                143,
                                150
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 7
                                },
                                "start": {
                                  "column": 26,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              141,
                              150
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 7
                              },
                              "start": {
                                "column": 24,
                                "line": 7
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            141,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 7
                            },
                            "start": {
                              "column": 24,
                              "line": 7
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          135,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 7
                          },
                          "start": {
                            "column": 18,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "range": [
                        123,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 7
                        },
                        "start": {
                          "column": 6,
                          "line": 7
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      123,
                      153
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 7
                      },
                      "start": {
                        "column": 6,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    123,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 7
                    },
                    "start": {
                      "column": 6,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                115,
                158
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 8
                },
                "start": {
                  "column": 29,
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
                    99,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  92,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 6
                  },
                  "start": {
                    "column": 6,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'number'",
                "value": "number",
                "range": [
                  105,
                  113
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 6
                  },
                  "start": {
                    "column": 19,
                    "line": 6
                  }
                }
              },
              "range": [
                92,
                113
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              }
            },
            "range": [
              88,
              158
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          84,
          160
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 32,
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
        "name": "fn",
        "optional": false,
        "range": [
          61,
          63
        ],
        "loc": {
          "end": {
            "column": 11,
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
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 13,
                "line": 5
              }
            },
            "range": [
              65,
              82
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    67,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "range": [
                    76,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 5
                    },
                    "start": {
                      "column": 24,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                67,
                82
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            }
          },
          "range": [
            64,
            82
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        }
      ],
      "range": [
        52,
        160
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "range": [
                    221,
                    228
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                211,
                234
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 12,
                  "line": 12
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  208,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                207,
                209
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              203,
              234
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
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
                          "column": 23,
                          "line": 15
                        },
                        "start": {
                          "column": 22,
                          "line": 15
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
                        259,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 15
                        },
                        "start": {
                          "column": 24,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      257,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 15
                      },
                      "start": {
                        "column": 22,
                        "line": 15
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    251,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 15
                    },
                    "start": {
                      "column": 16,
                      "line": 15
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething",
                "optional": false,
                "range": [
                  239,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "range": [
                239,
                266
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              239,
              267
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
        "range": [
          197,
          269
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 35,
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
        "name": "f1",
        "optional": false,
        "range": [
          171,
          173
        ],
        "loc": {
          "end": {
            "column": 11,
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
                "column": 33,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            },
            "range": [
              175,
              195
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    177,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    186,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 24,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                177,
                195
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            }
          },
          "range": [
            174,
            195
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 11
            },
            "start": {
              "column": 12,
              "line": 11
            }
          }
        }
      ],
      "range": [
        162,
        269
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
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
                                    "type": "ArrowFunctionExpression",
                                    "async": false,
                                    "body": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          379,
                                          380
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 30,
                                            "line": 21
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
                                          381,
                                          387
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 21
                                          }
                                        }
                                      },
                                      "range": [
                                        379,
                                        387
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 30,
                                          "line": 21
                                        }
                                      }
                                    },
                                    "expression": true,
                                    "generator": false,
                                    "id": null,
                                    "params": [],
                                    "range": [
                                      373,
                                      387
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 21
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "doSomething",
                                  "optional": false,
                                  "range": [
                                    361,
                                    372
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 21
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  361,
                                  388
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 21
                                  }
                                }
                              },
                              "range": [
                                361,
                                389
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 21
                                },
                                "start": {
                                  "column": 12,
                                  "line": 21
                                }
                              }
                            }
                          ],
                          "range": [
                            347,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 22
                            },
                            "start": {
                              "column": 26,
                              "line": 20
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          341,
                          399
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 22
                          },
                          "start": {
                            "column": 20,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "range": [
                        329,
                        340
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      329,
                      400
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    329,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                319,
                407
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                316,
                317
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              }
            },
            "range": [
              312,
              407
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          306,
          409
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 35,
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
        "name": "f2",
        "optional": false,
        "range": [
          280,
          282
        ],
        "loc": {
          "end": {
            "column": 11,
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
                "column": 33,
                "line": 18
              },
              "start": {
                "column": 13,
                "line": 18
              }
            },
            "range": [
              284,
              304
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    286,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 18
                    },
                    "start": {
                      "column": 15,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    295,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 18
                    },
                    "start": {
                      "column": 24,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                286,
                304
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            }
          },
          "range": [
            283,
            304
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 18
            },
            "start": {
              "column": 12,
              "line": 18
            }
          }
        }
      ],
      "range": [
        271,
        409
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "range": [
                  452,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                452,
                459
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              452,
              460
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 27
              },
              "start": {
                "column": 4,
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
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    531,
                                    532
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 30
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
                                    533,
                                    539
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 30
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 30
                                    }
                                  }
                                },
                                "range": [
                                  531,
                                  539
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 30
                                  }
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                525,
                                539
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 30
                                },
                                "start": {
                                  "column": 24,
                                  "line": 30
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "doSomething",
                            "optional": false,
                            "range": [
                              513,
                              524
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 30
                              },
                              "start": {
                                "column": 12,
                                "line": 30
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            513,
                            540
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 30
                            },
                            "start": {
                              "column": 12,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          513,
                          541
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "range": [
                      499,
                      551
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 31
                      },
                      "start": {
                        "column": 15,
                        "line": 29
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      496,
                      497
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
                  "range": [
                    492,
                    551
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                482,
                557
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 21,
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
              "name": "inner",
              "optional": false,
              "range": [
                474,
                479
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 28
                },
                "start": {
                  "column": 13,
                  "line": 28
                }
              }
            },
            "params": [],
            "range": [
              465,
              557
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          446,
          559
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 35,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          420,
          422
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
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
                "column": 33,
                "line": 26
              },
              "start": {
                "column": 13,
                "line": 26
              }
            },
            "range": [
              424,
              444
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    426,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 26
                    },
                    "start": {
                      "column": 15,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    435,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 26
                    },
                    "start": {
                      "column": 24,
                      "line": 26
                    }
                  }
                }
              ],
              "range": [
                426,
                444
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 26
                },
                "start": {
                  "column": 15,
                  "line": 26
                }
              }
            }
          },
          "range": [
            423,
            444
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 26
            },
            "start": {
              "column": 12,
              "line": 26
            }
          }
        }
      ],
      "range": [
        411,
        559
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 26
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  602,
                  603
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 4,
                    "line": 36
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"abc\"",
                "value": "abc",
                "range": [
                  606,
                  611
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              },
              "range": [
                602,
                611
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
                }
              }
            },
            "range": [
              602,
              612
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              652,
                              653
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 38
                              },
                              "start": {
                                "column": 26,
                                "line": 38
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
                              654,
                              660
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 38
                              },
                              "start": {
                                "column": 28,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            652,
                            660
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 38
                            },
                            "start": {
                              "column": 26,
                              "line": 38
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          646,
                          660
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 38
                          },
                          "start": {
                            "column": 20,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "range": [
                        634,
                        645
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 38
                        },
                        "start": {
                          "column": 8,
                          "line": 38
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      634,
                      661
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    634,
                    662
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                624,
                668
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 11,
                  "line": 37
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                621,
                622
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 37
                },
                "start": {
                  "column": 8,
                  "line": 37
                }
              }
            },
            "range": [
              617,
              668
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          }
        ],
        "range": [
          596,
          670
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 35,
            "line": 35
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          570,
          572
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 35
          },
          "start": {
            "column": 9,
            "line": 35
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
                "column": 33,
                "line": 35
              },
              "start": {
                "column": 13,
                "line": 35
              }
            },
            "range": [
              574,
              594
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    576,
                    582
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 35
                    },
                    "start": {
                      "column": 15,
                      "line": 35
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
                      "column": 33,
                      "line": 35
                    },
                    "start": {
                      "column": 24,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                576,
                594
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 35
                },
                "start": {
                  "column": 15,
                  "line": 35
                }
              }
            }
          },
          "range": [
            573,
            594
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 35
            },
            "start": {
              "column": 12,
              "line": 35
            }
          }
        }
      ],
      "range": [
        561,
        670
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 35
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              748,
                              749
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 44
                              },
                              "start": {
                                "column": 26,
                                "line": 44
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
                              750,
                              756
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 44
                              },
                              "start": {
                                "column": 28,
                                "line": 44
                              }
                            }
                          },
                          "range": [
                            748,
                            756
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 44
                            },
                            "start": {
                              "column": 26,
                              "line": 44
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          742,
                          756
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 44
                          },
                          "start": {
                            "column": 20,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "range": [
                        730,
                        741
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 44
                        },
                        "start": {
                          "column": 8,
                          "line": 44
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      730,
                      757
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    730,
                    758
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                }
              ],
              "range": [
                720,
                764
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 43
                }
              }
            },
            "test": {
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
                  "line": 43
                },
                "start": {
                  "column": 8,
                  "line": 43
                }
              }
            },
            "range": [
              713,
              764
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
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
                  769,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"abc\"",
                "value": "abc",
                "range": [
                  773,
                  778
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              },
              "range": [
                769,
                778
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "range": [
              769,
              779
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "range": [
          707,
          821
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 35,
            "line": 42
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          681,
          683
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 42
          },
          "start": {
            "column": 9,
            "line": 42
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
                "column": 33,
                "line": 42
              },
              "start": {
                "column": 13,
                "line": 42
              }
            },
            "range": [
              685,
              705
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    687,
                    693
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 42
                    },
                    "start": {
                      "column": 15,
                      "line": 42
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    696,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 42
                    },
                    "start": {
                      "column": 24,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                687,
                705
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 42
                },
                "start": {
                  "column": 15,
                  "line": 42
                }
              }
            }
          },
          "range": [
            684,
            705
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 42
            },
            "start": {
              "column": 12,
              "line": 42
            }
          }
        }
      ],
      "range": [
        672,
        821
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 42
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
                    871,
                    872
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 51
                    },
                    "start": {
                      "column": 10,
                      "line": 51
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      875,
                      876
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 51
                      },
                      "start": {
                        "column": 14,
                        "line": 51
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      880,
                      882
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 51
                      },
                      "start": {
                        "column": 19,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    875,
                    882
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 51
                    },
                    "start": {
                      "column": 14,
                      "line": 51
                    }
                  }
                },
                "range": [
                  871,
                  882
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 51
                  },
                  "start": {
                    "column": 10,
                    "line": 51
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              865,
              883
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
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
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "range": [
                              923,
                              924
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 53
                              },
                              "start": {
                                "column": 26,
                                "line": 53
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
                              925,
                              931
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 53
                              },
                              "start": {
                                "column": 28,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            923,
                            931
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 53
                            },
                            "start": {
                              "column": 26,
                              "line": 53
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          917,
                          931
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 53
                          },
                          "start": {
                            "column": 20,
                            "line": 53
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doSomething",
                      "optional": false,
                      "range": [
                        905,
                        916
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 53
                        },
                        "start": {
                          "column": 8,
                          "line": 53
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      905,
                      932
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 53
                      },
                      "start": {
                        "column": 8,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    905,
                    933
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                895,
                939
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 54
                },
                "start": {
                  "column": 11,
                  "line": 52
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                892,
                893
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 52
                },
                "start": {
                  "column": 8,
                  "line": 52
                }
              }
            },
            "range": [
              888,
              939
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "range": [
          859,
          941
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 35,
            "line": 50
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          833,
          835
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 50
          },
          "start": {
            "column": 9,
            "line": 50
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
                "column": 33,
                "line": 50
              },
              "start": {
                "column": 13,
                "line": 50
              }
            },
            "range": [
              837,
              857
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    839,
                    845
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 50
                    },
                    "start": {
                      "column": 15,
                      "line": 50
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    848,
                    857
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 50
                    },
                    "start": {
                      "column": 24,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                839,
                857
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 50
                },
                "start": {
                  "column": 15,
                  "line": 50
                }
              }
            }
          },
          "range": [
            836,
            857
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 50
            },
            "start": {
              "column": 12,
              "line": 50
            }
          }
        }
      ],
      "range": [
        824,
        941
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 55
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
