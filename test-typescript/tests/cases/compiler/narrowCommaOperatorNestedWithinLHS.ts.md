__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    552
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
            "name": "otherValue",
            "optional": false,
            "range": [
              6,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 6,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                25,
                29
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              19,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 19,
                "line": 1
              }
            }
          },
          "range": [
            6,
            29
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        30
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              },
              "range": [
                42,
                70
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "range": [
                        46,
                        51
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 2
                        },
                        "start": {
                          "column": 15,
                          "line": 2
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
                          "column": 37,
                          "line": 2
                        },
                        "start": {
                          "column": 20,
                          "line": 2
                        }
                      },
                      "range": [
                        51,
                        68
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              53,
                              59
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 2
                              },
                              "start": {
                                "column": 22,
                                "line": 2
                              }
                            }
                          },
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              62,
                              68
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 2
                              },
                              "start": {
                                "column": 31,
                                "line": 2
                              }
                            }
                          }
                        ],
                        "range": [
                          53,
                          68
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 2
                          },
                          "start": {
                            "column": 22,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      46,
                      68
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  44,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 39,
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
              37,
              70
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
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
                73,
                77
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 2
                },
                "start": {
                  "column": 42,
                  "line": 2
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                81,
                84
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 2
                },
                "start": {
                  "column": 50,
                  "line": 2
                }
              }
            },
            "range": [
              73,
              84
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 2
              },
              "start": {
                "column": 42,
                "line": 2
              }
            }
          },
          "range": [
            37,
            84
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        31,
        85
      ],
      "loc": {
        "end": {
          "column": 54,
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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                143,
                147
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              136,
              148
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          130,
          186
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 43,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumber",
        "optional": false,
        "range": [
          96,
          104
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 4
              },
              "start": {
                "column": 21,
                "line": 4
              }
            },
            "range": [
              108,
              113
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                110,
                113
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 23,
                  "line": 4
                }
              }
            }
          },
          "range": [
            105,
            113
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 4
            },
            "start": {
              "column": 18,
              "line": 4
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 4
          },
          "start": {
            "column": 27,
            "line": 4
          }
        },
        "range": [
          114,
          129
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "range": [
              116,
              119
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 4
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 4
              },
              "start": {
                "column": 36,
                "line": 4
              }
            },
            "range": [
              123,
              129
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                123,
                129
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 4
                },
                "start": {
                  "column": 36,
                  "line": 4
                }
              }
            }
          },
          "range": [
            116,
            129
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 4
            },
            "start": {
              "column": 29,
              "line": 4
            }
          }
        }
      },
      "range": [
        87,
        186
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    253,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 9
                    },
                    "start": {
                      "column": 10,
                      "line": 9
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      257,
                      262
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 14,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "range": [
                      263,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    257,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                },
                "range": [
                  253,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 10,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              247,
              269
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    },
                    "range": [
                      291,
                      299
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        293,
                        299
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 10
                        },
                        "start": {
                          "column": 13,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    290,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 10
                    },
                    "start": {
                      "column": 10,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "otherValue",
                          "optional": false,
                          "range": [
                            303,
                            313
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 10
                            },
                            "start": {
                              "column": 23,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          303,
                          315
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 10
                          },
                          "start": {
                            "column": 23,
                            "line": 10
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          317,
                          322
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 10
                          },
                          "start": {
                            "column": 37,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      303,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "range": [
                      324,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 10
                      },
                      "start": {
                        "column": 44,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    302,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 10
                    },
                    "start": {
                      "column": 22,
                      "line": 10
                    }
                  }
                },
                "range": [
                  290,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              284,
              330
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          241,
          374
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 53,
            "line": 8
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "otherValue",
                    "optional": false,
                    "range": [
                      200,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 12,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    200,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    214,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 8
                    },
                    "start": {
                      "column": 26,
                      "line": 8
                    }
                  }
                }
              ],
              "range": [
                200,
                219
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "range": [
                221,
                226
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 8
                },
                "start": {
                  "column": 33,
                  "line": 8
                }
              }
            },
            "range": [
              199,
              226
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            192,
            226
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "'number'",
          "value": "number",
          "range": [
            231,
            239
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 8
            },
            "start": {
              "column": 43,
              "line": 8
            }
          }
        },
        "range": [
          192,
          239
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 8
          },
          "start": {
            "column": 4,
            "line": 8
          }
        }
      },
      "range": [
        188,
        374
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    431,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      435,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 14,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "range": [
                      441,
                      446
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 20,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    435,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 14
                    },
                    "start": {
                      "column": 14,
                      "line": 14
                    }
                  }
                },
                "range": [
                  431,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              425,
              447
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 11,
                        "line": 15
                      }
                    },
                    "range": [
                      469,
                      477
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        471,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    468,
                    477
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "otherValue",
                          "optional": false,
                          "range": [
                            481,
                            491
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 15
                            },
                            "start": {
                              "column": 23,
                              "line": 15
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          481,
                          493
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 15
                          },
                          "start": {
                            "column": 23,
                            "line": 15
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          495,
                          500
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 15
                          },
                          "start": {
                            "column": 37,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      481,
                      500
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 15
                      },
                      "start": {
                        "column": 23,
                        "line": 15
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "range": [
                      502,
                      507
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 15
                      },
                      "start": {
                        "column": 44,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    480,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 15
                    },
                    "start": {
                      "column": 22,
                      "line": 15
                    }
                  }
                },
                "range": [
                  468,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              462,
              508
            ],
            "loc": {
              "end": {
                "column": 50,
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
          419,
          552
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 43,
            "line": 13
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "otherValue",
                    "optional": false,
                    "range": [
                      390,
                      400
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 13
                      },
                      "start": {
                        "column": 14,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    390,
                    402
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 13
                    },
                    "start": {
                      "column": 14,
                      "line": 13
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    404,
                    409
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 13
                    },
                    "start": {
                      "column": 28,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                390,
                409
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 13
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "range": [
                411,
                416
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 13
                },
                "start": {
                  "column": 35,
                  "line": 13
                }
              }
            },
            "range": [
              389,
              416
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNumber",
          "optional": false,
          "range": [
            380,
            388
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          380,
          417
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 13
          },
          "start": {
            "column": 4,
            "line": 13
          }
        }
      },
      "range": [
        376,
        552
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
