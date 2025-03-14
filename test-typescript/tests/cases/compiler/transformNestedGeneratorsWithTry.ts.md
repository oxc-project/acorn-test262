__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    380
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'bluebird'",
        "value": "bluebird",
        "range": [
          82,
          92
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 2
          },
          "start": {
            "column": 26,
            "line": 2
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bluebird",
            "optional": false,
            "range": [
              68,
              76
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 12,
                "line": 2
              }
            }
          },
          "range": [
            63,
            76
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 2
            },
            "start": {
              "column": 7,
              "line": 2
            }
          }
        }
      ],
      "range": [
        56,
        93
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "type": "TryStatement",
            "block": {
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
                        "range": [
                          149,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 5
                          },
                          "start": {
                            "column": 10,
                            "line": 5
                          }
                        }
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "async": true,
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
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "CallExpression",
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Bluebird",
                                            "optional": false,
                                            "range": [
                                              216,
                                              224
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 22,
                                                "line": 7
                                              },
                                              "start": {
                                                "column": 14,
                                                "line": 7
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
                                              225,
                                              232
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 30,
                                                "line": 7
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 7
                                              }
                                            }
                                          },
                                          "range": [
                                            216,
                                            232
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 7
                                            },
                                            "start": {
                                              "column": 14,
                                              "line": 7
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          216,
                                          234
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
                                      },
                                      "range": [
                                        210,
                                        234
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 7
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 7
                                        }
                                      }
                                    },
                                    "range": [
                                      210,
                                      235
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
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
                                  200,
                                  277
                                ],
                                "loc": {
                                  "end": {
                                    "column": 7,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 6
                                  }
                                }
                              },
                              "finalizer": null,
                              "handler": {
                                "type": "CatchClause",
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "range": [
                                    292,
                                    295
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 8
                                    }
                                  }
                                },
                                "param": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "range": [
                                    285,
                                    290
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  278,
                                  295
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                196,
                                295
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 8
                                },
                                "start": {
                                  "column": 6,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "range": [
                            188,
                            301
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 9
                            },
                            "start": {
                              "column": 49,
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
                          "name": "b",
                          "optional": false,
                          "range": [
                            168,
                            169
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
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 5
                            },
                            "start": {
                              "column": 32,
                              "line": 5
                            }
                          },
                          "range": [
                            171,
                            187
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                181,
                                187
                              ],
                              "params": [
                                {
                                  "type": "TSVoidKeyword",
                                  "range": [
                                    182,
                                    186
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 5
                                },
                                "start": {
                                  "column": 42,
                                  "line": 5
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bluebird",
                              "optional": false,
                              "range": [
                                173,
                                181
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 5
                                },
                                "start": {
                                  "column": 34,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              173,
                              187
                            ],
                            "loc": {
                              "end": {
                                "column": 48,
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
                          153,
                          301
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        149,
                        301
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 9
                        },
                        "start": {
                          "column": 10,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    143,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          314,
                          315
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
                      "optional": false,
                      "range": [
                        314,
                        317
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
                    "range": [
                      308,
                      317
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 11
                      },
                      "start": {
                        "column": 4,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    308,
                    318
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
                }
              ],
              "range": [
                137,
                359
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  374,
                  377
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
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "range": [
                  367,
                  372
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 12
                  },
                  "start": {
                    "column": 11,
                    "line": 12
                  }
                }
              },
              "range": [
                360,
                377
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              133,
              377
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "range": [
          129,
          379
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 35,
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
        "name": "a",
        "optional": false,
        "range": [
          109,
          110
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 3
          },
          "start": {
            "column": 18,
            "line": 3
          }
        },
        "range": [
          112,
          128
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              122,
              128
            ],
            "params": [
              {
                "type": "TSVoidKeyword",
                "range": [
                  123,
                  127
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
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 28,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bluebird",
            "optional": false,
            "range": [
              114,
              122
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          },
          "range": [
            114,
            128
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 3
            },
            "start": {
              "column": 20,
              "line": 3
            }
          }
        }
      },
      "range": [
        94,
        379
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    123
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "declare": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bluebird",
              "optional": false,
              "range": [
                37,
                45
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  58,
                  61
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        59,
                        60
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
                    "range": [
                      59,
                      60
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
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 2
                  },
                  "start": {
                    "column": 30,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  51,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                }
              },
              "range": [
                51,
                61
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 2
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              },
              "range": [
                45,
                48
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      46,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    46,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 18,
                      "line": 2
                    }
                  }
                }
              ]
            },
            "range": [
              32,
              62
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
                  "name": "Bluebird",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 3
                      },
                      "start": {
                        "column": 18,
                        "line": 3
                      }
                    },
                    "range": [
                      81,
                      97
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          90,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 3
                          },
                          "start": {
                            "column": 27,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        83,
                        97
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 3
                        },
                        "start": {
                          "column": 20,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    73,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "init": null,
                "range": [
                  73,
                  97
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              67,
              98
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bluebird",
              "optional": false,
              "range": [
                112,
                120
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "range": [
              103,
              121
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          26,
          123
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 26,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "raw": "\"bluebird\"",
        "value": "bluebird",
        "range": [
          15,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "range": [
        0,
        123
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 1,
      "line": 5
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
