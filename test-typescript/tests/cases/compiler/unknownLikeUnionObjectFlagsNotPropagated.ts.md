__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    46,
    315
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyType",
        "optional": false,
        "range": [
          51,
          57
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [],
            "range": [
              60,
              62
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          {
            "type": "TSNullKeyword",
            "range": [
              65,
              69
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "range": [
              72,
              81
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 26,
                "line": 3
              }
            }
          }
        ],
        "range": [
          60,
          81
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "range": [
        46,
        82
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
            "name": "myVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              },
              "range": [
                95,
                103
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyType",
                  "optional": false,
                  "range": [
                    97,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                },
                "range": [
                  97,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 5
                  },
                  "start": {
                    "column": 13,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              90,
              103
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                106,
                110
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 22,
                  "line": 5
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyType",
                "optional": false,
                "range": [
                  114,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 5
                  },
                  "start": {
                    "column": 30,
                    "line": 5
                  }
                }
              },
              "range": [
                114,
                120
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 30,
                  "line": 5
                }
              }
            },
            "range": [
              106,
              120
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 5
              },
              "start": {
                "column": 22,
                "line": 5
              }
            }
          },
          "range": [
            90,
            120
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        84,
        121
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "myVar",
            "optional": false,
            "range": [
              123,
              128
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": true,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toLocaleString",
            "optional": false,
            "range": [
              130,
              144
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 7,
                "line": 7
              }
            }
          },
          "range": [
            123,
            144
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "range": [
          123,
          144
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        123,
        145
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "myVar",
        "optional": false,
        "range": [
          146,
          151
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        146,
        152
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fetch1",
                  "optional": false,
                  "range": [
                    200,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "'hello'",
                          "value": "hello",
                          "range": [
                            226,
                            233
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 11
                            },
                            "start": {
                              "column": 36,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "'world'",
                          "value": "world",
                          "range": [
                            235,
                            242
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 11
                            },
                            "start": {
                              "column": 45,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        225,
                        243
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 11
                        },
                        "start": {
                          "column": 35,
                          "line": 11
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
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        209,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 11
                        },
                        "start": {
                          "column": 19,
                          "line": 11
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
                        217,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 11
                        },
                        "start": {
                          "column": 27,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      209,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 11
                      },
                      "start": {
                        "column": 19,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    209,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
                    }
                  }
                },
                "range": [
                  200,
                  244
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              194,
              245
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data1",
                      "optional": false,
                      "range": [
                        257,
                        262
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
                    }
                  ],
                  "optional": false,
                  "range": [
                    256,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fetch1",
                            "optional": false,
                            "range": [
                              285,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 12
                              },
                              "start": {
                                "column": 39,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "range": [
                          284,
                          292
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 12
                          },
                          "start": {
                            "column": 38,
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
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          272,
                          279
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 12
                          },
                          "start": {
                            "column": 26,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "range": [
                          280,
                          283
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 12
                          },
                          "start": {
                            "column": 34,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        272,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 12
                        },
                        "start": {
                          "column": 26,
                          "line": 12
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      272,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 12
                      },
                      "start": {
                        "column": 26,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    266,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 12
                    },
                    "start": {
                      "column": 20,
                      "line": 12
                    }
                  }
                },
                "range": [
                  256,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              250,
              294
            ],
            "loc": {
              "end": {
                "column": 48,
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
                "name": "data1",
                "optional": false,
                "range": [
                  299,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 9,
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
                "name": "length",
                "optional": false,
                "range": [
                  305,
                  311
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              },
              "range": [
                299,
                311
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "range": [
              299,
              312
            ],
            "loc": {
              "end": {
                "column": 17,
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
          188,
          314
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 34,
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
        "name": "myUnusedFunction",
        "optional": false,
        "range": [
          169,
          185
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 10
          },
          "start": {
            "column": 15,
            "line": 10
          }
        }
      },
      "params": [],
      "range": [
        154,
        314
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
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
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
