__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    614
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                49
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        27,
                        30
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 2
                        },
                        "start": {
                          "column": 4,
                          "line": 2
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 2
                            },
                            "start": {
                              "column": 11,
                              "line": 2
                            }
                          },
                          "range": [
                            34,
                            39
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              36,
                              39
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 2
                              },
                              "start": {
                                "column": 13,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          31,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 2
                          },
                          "start": {
                            "column": 8,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 2
                        },
                        "start": {
                          "column": 17,
                          "line": 2
                        }
                      },
                      "range": [
                        40,
                        46
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          42,
                          46
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 2
                          },
                          "start": {
                            "column": 19,
                            "line": 2
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      27,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
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
                  21,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              49
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
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
            49
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
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
        49
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "range": [
          55,
          60
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "range": [
              64,
              70
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              72,
              78
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              80,
              86
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 30,
                "line": 4
              }
            }
          }
        ],
        "range": [
          63,
          87
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 4
          }
        }
      },
      "range": [
        50,
        88
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              },
              "range": [
                99,
                106
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    101,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 5
                    },
                    "start": {
                      "column": 12,
                      "line": 5
                    }
                  }
                },
                "range": [
                  101,
                  106
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              93,
              106
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  110,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mower\"",
                "value": "mower",
                "range": [
                  113,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 5
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mowing\"",
                "value": "mowing",
                "range": [
                  122,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 33,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              109,
              131
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            93,
            131
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        89,
        132
      ],
      "loc": {
        "end": {
          "column": 43,
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    184,
                    189
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    172,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 8
                    },
                    "start": {
                      "column": 4,
                      "line": 8
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
                    180,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "range": [
                  172,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "range": [
                172,
                190
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              172,
              191
            ],
            "loc": {
              "end": {
                "column": 23,
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
          166,
          193
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 32,
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
        "name": "foo1",
        "optional": false,
        "range": [
          143,
          147
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
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            null,
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA",
              "optional": false,
              "range": [
                151,
                156
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 23,
                "line": 7
              }
            },
            "range": [
              157,
              164
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "range": [
                  159,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              },
              "range": [
                159,
                164
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            }
          },
          "range": [
            148,
            164
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
        }
      ],
      "range": [
        134,
        193
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    245,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    233,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
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
                    241,
                    244
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "range": [
                  233,
                  244
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
              "optional": false,
              "range": [
                233,
                253
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              233,
              254
            ],
            "loc": {
              "end": {
                "column": 25,
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
          227,
          256
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 32,
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
        "name": "foo2",
        "optional": false,
        "range": [
          204,
          208
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
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "numberB",
              "optional": false,
              "range": [
                210,
                217
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 11
              },
              "start": {
                "column": 23,
                "line": 11
              }
            },
            "range": [
              218,
              225
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "range": [
                  220,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 25,
                    "line": 11
                  }
                }
              },
              "range": [
                220,
                225
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 11
                },
                "start": {
                  "column": 25,
                  "line": 11
                }
              }
            }
          },
          "range": [
            209,
            225
          ],
          "loc": {
            "end": {
              "column": 30,
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
        195,
        256
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    326,
                    332
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 16
                    },
                    "start": {
                      "column": 16,
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    314,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 16
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
                    322,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 16
                    },
                    "start": {
                      "column": 12,
                      "line": 16
                    }
                  }
                },
                "range": [
                  314,
                  325
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
              "optional": false,
              "range": [
                314,
                333
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              314,
              334
            ],
            "loc": {
              "end": {
                "column": 24,
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
          308,
          336
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 50,
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
        "name": "foo3",
        "optional": false,
        "range": [
          267,
          271
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
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "numberA2",
              "optional": false,
              "range": [
                273,
                281
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "nameA2",
              "optional": false,
              "range": [
                283,
                289
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 15
                },
                "start": {
                  "column": 25,
                  "line": 15
                }
              }
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "skillA2",
              "optional": false,
              "range": [
                291,
                298
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 15
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 15
              },
              "start": {
                "column": 41,
                "line": 15
              }
            },
            "range": [
              299,
              306
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "range": [
                  301,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 15
                  },
                  "start": {
                    "column": 43,
                    "line": 15
                  }
                }
              },
              "range": [
                301,
                306
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 15
                },
                "start": {
                  "column": 43,
                  "line": 15
                }
              }
            }
          },
          "range": [
            272,
            306
          ],
          "loc": {
            "end": {
              "column": 48,
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
        258,
        336
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false,
                  "range": [
                    404,
                    414
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
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
                    392,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 20
                    },
                    "start": {
                      "column": 4,
                      "line": 20
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
                    400,
                    403
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                },
                "range": [
                  392,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "range": [
                392,
                415
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              392,
              416
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          386,
          418
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 48,
            "line": 19
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
          347,
          351
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "numberA3",
              "optional": false,
              "range": [
                353,
                361
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            },
            {
              "type": "RestElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "robotAInfo",
                "optional": false,
                "range": [
                  366,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 19
                  },
                  "start": {
                    "column": 28,
                    "line": 19
                  }
                }
              },
              "decorators": [],
              "optional": false,
              "range": [
                363,
                376
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 19
                },
                "start": {
                  "column": 25,
                  "line": 19
                }
              }
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 19
              },
              "start": {
                "column": 39,
                "line": 19
              }
            },
            "range": [
              377,
              384
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "range": [
                  379,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 19
                  },
                  "start": {
                    "column": 41,
                    "line": 19
                  }
                }
              },
              "range": [
                379,
                384
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 19
                },
                "start": {
                  "column": 41,
                  "line": 19
                }
              }
            }
          },
          "range": [
            352,
            384
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 19
            },
            "start": {
              "column": 14,
              "line": 19
            }
          }
        }
      ],
      "range": [
        338,
        418
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              425,
              431
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 23
              },
              "start": {
                "column": 5,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "range": [
            420,
            424
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          420,
          432
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        420,
        433
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  440,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 24
                  },
                  "start": {
                    "column": 6,
                    "line": 24
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  443,
                  452
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 9,
                    "line": 24
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  454,
                  464
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              439,
              465
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 24
              },
              "start": {
                "column": 5,
                "line": 24
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "range": [
            434,
            438
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          434,
          466
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        434,
        467
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              474,
              480
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 26
              },
              "start": {
                "column": 5,
                "line": 26
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "range": [
            469,
            473
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          469,
          481
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        469,
        482
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  489,
                  490
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 27
                  },
                  "start": {
                    "column": 6,
                    "line": 27
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  492,
                  501
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 27
                  },
                  "start": {
                    "column": 9,
                    "line": 27
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  503,
                  513
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 27
                  },
                  "start": {
                    "column": 20,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              488,
              514
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 27
              },
              "start": {
                "column": 5,
                "line": 27
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "range": [
            483,
            487
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          483,
          515
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        483,
        516
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              523,
              529
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 29
              },
              "start": {
                "column": 5,
                "line": 29
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "range": [
            518,
            522
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          518,
          530
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        518,
        531
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  538,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 30
                  },
                  "start": {
                    "column": 6,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  541,
                  550
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 30
                  },
                  "start": {
                    "column": 9,
                    "line": 30
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  552,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 30
                  },
                  "start": {
                    "column": 20,
                    "line": 30
                  }
                }
              }
            ],
            "range": [
              537,
              563
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 30
              },
              "start": {
                "column": 5,
                "line": 30
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "range": [
            532,
            536
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "range": [
          532,
          564
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        532,
        565
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "range": [
              572,
              578
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 32
              },
              "start": {
                "column": 5,
                "line": 32
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "range": [
            567,
            571
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "optional": false,
        "range": [
          567,
          579
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        567,
        580
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  587,
                  588
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 33
                  },
                  "start": {
                    "column": 6,
                    "line": 33
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  590,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"trimming\"",
                "value": "trimming",
                "range": [
                  601,
                  611
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 33
                  }
                }
              }
            ],
            "range": [
              586,
              612
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 33
              },
              "start": {
                "column": 5,
                "line": 33
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "range": [
            581,
            585
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "optional": false,
        "range": [
          581,
          613
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        581,
        614
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 33,
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
