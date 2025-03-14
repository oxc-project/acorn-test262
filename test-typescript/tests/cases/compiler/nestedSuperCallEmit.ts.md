__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    506
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "range": [
          75,
          254
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                81,
                92
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                92,
                252
              ],
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
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "'OK'",
                                "value": "OK",
                                "range": [
                                  230,
                                  234
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 7
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
                                "name": "console",
                                "optional": false,
                                "range": [
                                  218,
                                  225
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 7
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "range": [
                                  226,
                                  229
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                218,
                                229
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 7
                                },
                                "start": {
                                  "column": 12,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              218,
                              235
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            218,
                            236
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        204,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 6
                        }
                      }
                    },
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
                                "raw": "'Please retry'",
                                "value": "Please retry",
                                "range": [
                                  172,
                                  186
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 28,
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
                                166,
                                171
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 5
                                },
                                "start": {
                                  "column": 22,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              162,
                              187
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 5
                              },
                              "start": {
                                "column": 18,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            156,
                            188
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
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
                        142,
                        198
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 25,
                          "line": 4
                        }
                      }
                    },
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shouldThrow",
                      "optional": false,
                      "range": [
                        129,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      125,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  115,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shouldThrow",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 27,
                        "line": 3
                      }
                    },
                    "range": [
                      104,
                      113
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        106,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
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
                    93,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              81,
              252
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 19,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          71,
          74
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        56,
        254
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          278,
          493
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                284,
                295
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                295,
                491
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "TryStatement",
                    "block": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "true",
                                "value": true,
                                "range": [
                                  332,
                                  336
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "range": [
                                326,
                                331
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 15
                                },
                                "start": {
                                  "column": 12,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              326,
                              337
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
                          "range": [
                            326,
                            338
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        312,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 12,
                          "line": 14
                        }
                      }
                    },
                    "finalizer": null,
                    "handler": {
                      "type": "CatchClause",
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "Literal",
                                    "raw": "'Error: '",
                                    "value": "Error: ",
                                    "range": [
                                      394,
                                      403
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "TSAsExpression",
                                      "expression": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "range": [
                                          407,
                                          408
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 37,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "range": [
                                            412,
                                            417
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 47,
                                              "line": 17
                                            },
                                            "start": {
                                              "column": 42,
                                              "line": 17
                                            }
                                          }
                                        },
                                        "range": [
                                          412,
                                          417
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 17
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 17
                                          }
                                        }
                                      },
                                      "range": [
                                        407,
                                        417
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 47,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 17
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
                                        419,
                                        426
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 56,
                                          "line": 17
                                        },
                                        "start": {
                                          "column": 49,
                                          "line": 17
                                        }
                                      }
                                    },
                                    "range": [
                                      406,
                                      426
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 56,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "range": [
                                    394,
                                    426
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 56,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 17
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
                                  "name": "console",
                                  "optional": false,
                                  "range": [
                                    382,
                                    389
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 17
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "range": [
                                    390,
                                    393
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 17
                                    }
                                  }
                                },
                                "range": [
                                  382,
                                  393
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 17
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                382,
                                427
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 17
                                },
                                "start": {
                                  "column": 12,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              382,
                              428
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 17
                              },
                              "start": {
                                "column": 12,
                                "line": 17
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
                                  "raw": "false",
                                  "value": false,
                                  "range": [
                                    468,
                                    473
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 19
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "range": [
                                  462,
                                  467
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 19
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                462,
                                474
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 19
                                },
                                "start": {
                                  "column": 12,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              462,
                              475
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 19
                              },
                              "start": {
                                "column": 12,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          368,
                          485
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 20
                          },
                          "start": {
                            "column": 29,
                            "line": 16
                          }
                        }
                      },
                      "param": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 16
                            },
                            "start": {
                              "column": 18,
                              "line": 16
                            }
                          },
                          "range": [
                            357,
                            366
                          ],
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "range": [
                              359,
                              366
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 16
                              },
                              "start": {
                                "column": 20,
                                "line": 16
                              }
                            }
                          }
                        },
                        "range": [
                          356,
                          366
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 16
                          },
                          "start": {
                            "column": 17,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        349,
                        485
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 20
                        },
                        "start": {
                          "column": 10,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      308,
                      485
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  298,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 18,
                    "line": 13
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
                  "column": 15,
                  "line": 13
                }
              }
            },
            "range": [
              284,
              491
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 13
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
            "column": 22,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "range": [
          262,
          265
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          274,
          277
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 12
          },
          "start": {
            "column": 18,
            "line": 12
          }
        }
      },
      "range": [
        256,
        493
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "range": [
            499,
            502
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        },
        "range": [
          495,
          504
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        495,
        505
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
