__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    861
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          28
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                16,
                17
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                17,
                25
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  19,
                  25
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              16,
              26
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 1
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
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        28
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
        "name": "getFooOrNull",
        "optional": false,
        "range": [
          47,
          59
        ],
        "loc": {
          "end": {
            "column": 29,
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
            "column": 43,
            "line": 5
          },
          "start": {
            "column": 31,
            "line": 5
          }
        },
        "range": [
          61,
          73
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  63,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 5
                  },
                  "start": {
                    "column": 33,
                    "line": 5
                  }
                }
              },
              "range": [
                63,
                66
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 5
                },
                "start": {
                  "column": 33,
                  "line": 5
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                69,
                73
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 5
                },
                "start": {
                  "column": 39,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            63,
            73
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 5
            },
            "start": {
              "column": 33,
              "line": 5
            }
          }
        }
      },
      "range": [
        30,
        74
      ],
      "loc": {
        "end": {
          "column": 44,
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
        "name": "getStringOrNumberOrNull",
        "optional": false,
        "range": [
          92,
          115
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 6
          },
          "start": {
            "column": 17,
            "line": 6
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 66,
            "line": 6
          },
          "start": {
            "column": 42,
            "line": 6
          }
        },
        "range": [
          117,
          141
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                119,
                125
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 6
                },
                "start": {
                  "column": 44,
                  "line": 6
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                128,
                134
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 6
                },
                "start": {
                  "column": 53,
                  "line": 6
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                137,
                141
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 6
                },
                "start": {
                  "column": 62,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            119,
            141
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 6
            },
            "start": {
              "column": 44,
              "line": 6
            }
          }
        }
      },
      "range": [
        75,
        142
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    },
                    "range": [
                      171,
                      183
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              173,
                              176
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 9
                              },
                              "start": {
                                "column": 13,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            173,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 9
                            },
                            "start": {
                              "column": 13,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            179,
                            183
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 9
                            },
                            "start": {
                              "column": 19,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        173,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    168,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": null,
                "range": [
                  168,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              164,
              184
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 4,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      236,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    236,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                226,
                254
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 41,
                  "line": 10
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    194,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 10
                    },
                    "start": {
                      "column": 9,
                      "line": 10
                    }
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFooOrNull",
                    "optional": false,
                    "range": [
                      200,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 10
                      },
                      "start": {
                        "column": 15,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    200,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 10
                    },
                    "start": {
                      "column": 15,
                      "line": 10
                    }
                  }
                },
                "range": [
                  194,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  220,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
                    "line": 10
                  }
                }
              },
              "range": [
                193,
                224
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "range": [
              189,
              254
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          158,
          256
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 8
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
          153,
          155
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [],
      "range": [
        144,
        256
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
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
                  "name": "foo1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 16
                      },
                      "start": {
                        "column": 12,
                        "line": 16
                      }
                    },
                    "range": [
                      286,
                      298
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              288,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 16
                              },
                              "start": {
                                "column": 14,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            288,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 16
                            },
                            "start": {
                              "column": 14,
                              "line": 16
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            294,
                            298
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 16
                            },
                            "start": {
                              "column": 20,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        288,
                        298
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
                    }
                  },
                  "range": [
                    282,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": null,
                "range": [
                  282,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              278,
              299
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    },
                    "range": [
                      312,
                      324
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              314,
                              317
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 17
                              },
                              "start": {
                                "column": 14,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            314,
                            317
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 17
                            },
                            "start": {
                              "column": 14,
                              "line": 17
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            320,
                            324
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 17
                            },
                            "start": {
                              "column": 20,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "range": [
                        314,
                        324
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 17
                        },
                        "start": {
                          "column": 14,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    308,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": null,
                "range": [
                  308,
                  324
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              304,
              325
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "range": [
                      391,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    391,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "range": [
                      420,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    420,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                381,
                439
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 55,
                  "line": 18
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "SequenceExpression",
                "expressions": [
                  {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo1",
                      "optional": false,
                      "range": [
                        335,
                        339
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 18
                        },
                        "start": {
                          "column": 9,
                          "line": 18
                        }
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getFooOrNull",
                        "optional": false,
                        "range": [
                          342,
                          354
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 18
                          },
                          "start": {
                            "column": 16,
                            "line": 18
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        342,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      335,
                      356
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 18
                      },
                      "start": {
                        "column": 9,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "range": [
                        358,
                        362
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 18
                        },
                        "start": {
                          "column": 32,
                          "line": 18
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo1",
                      "optional": false,
                      "range": [
                        365,
                        369
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 18
                        },
                        "start": {
                          "column": 39,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      358,
                      369
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 18
                      },
                      "start": {
                        "column": 32,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  335,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  375,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 18
                  },
                  "start": {
                    "column": 49,
                    "line": 18
                  }
                }
              },
              "range": [
                334,
                379
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              }
            },
            "range": [
              330,
              439
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          272,
          441
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 14,
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
        "name": "f2",
        "optional": false,
        "range": [
          267,
          269
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [],
      "range": [
        258,
        441
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 25
                      }
                    },
                    "range": [
                      470,
                      485
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "range": [
                              472,
                              478
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 25
                              },
                              "start": {
                                "column": 13,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            472,
                            478
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 25
                            },
                            "start": {
                              "column": 13,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            481,
                            485
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 25
                            },
                            "start": {
                              "column": 22,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        472,
                        485
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 25
                        },
                        "start": {
                          "column": 13,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    467,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": null,
                "range": [
                  467,
                  485
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              463,
              486
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      544,
                      547
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    544,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                534,
                554
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 47,
                  "line": 26
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "instanceof",
              "left": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    496,
                    499
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 26
                    },
                    "start": {
                      "column": 9,
                      "line": 26
                    }
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getFooOrNull",
                    "optional": false,
                    "range": [
                      502,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 26
                      },
                      "start": {
                        "column": 15,
                        "line": 26
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    502,
                    516
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 26
                    },
                    "start": {
                      "column": 15,
                      "line": 26
                    }
                  }
                },
                "range": [
                  496,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 26
                  },
                  "start": {
                    "column": 9,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  529,
                  532
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 26
                  },
                  "start": {
                    "column": 42,
                    "line": 26
                  }
                }
              },
              "range": [
                495,
                532
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "range": [
              491,
              554
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          457,
          556
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 14,
            "line": 24
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
          452,
          454
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "params": [],
      "range": [
        443,
        556
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 24
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 32
                      },
                      "start": {
                        "column": 9,
                        "line": 32
                      }
                    },
                    "range": [
                      583,
                      607
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            585,
                            591
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 32
                            },
                            "start": {
                              "column": 11,
                              "line": 32
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            594,
                            600
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 32
                            },
                            "start": {
                              "column": 20,
                              "line": 32
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            603,
                            607
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 32
                            },
                            "start": {
                              "column": 29,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "range": [
                        585,
                        607
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 32
                        },
                        "start": {
                          "column": 11,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    582,
                    607
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "init": null,
                "range": [
                  582,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              578,
              608
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      680,
                      681
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    680,
                    682
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                670,
                688
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 61,
                  "line": 33
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      625,
                      626
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 33
                      },
                      "start": {
                        "column": 16,
                        "line": 33
                      }
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getStringOrNumberOrNull",
                      "optional": false,
                      "range": [
                        629,
                        652
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 33
                        },
                        "start": {
                          "column": 20,
                          "line": 33
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      629,
                      654
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 33
                      },
                      "start": {
                        "column": 20,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    625,
                    654
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 33
                    },
                    "start": {
                      "column": 16,
                      "line": 33
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  617,
                  655
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"number\"",
                "value": "number",
                "range": [
                  660,
                  668
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 33
                  },
                  "start": {
                    "column": 51,
                    "line": 33
                  }
                }
              },
              "range": [
                617,
                668
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 33
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "range": [
              613,
              688
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "range": [
          572,
          690
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 14,
            "line": 31
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
          567,
          569
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "params": [],
      "range": [
        558,
        690
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "re",
            "optional": false,
            "range": [
              719,
              721
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "/./g",
            "regex": {
              "flags": "g",
              "pattern": "."
            },
            "value": null,
            "range": [
              724,
              728
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 40
              },
              "start": {
                "column": 11,
                "line": 40
              }
            }
          },
          "range": [
            719,
            728
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        713,
        728
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "match",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 41
                },
                "start": {
                  "column": 9,
                  "line": 41
                }
              },
              "range": [
                738,
                762
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExpExecArray",
                      "optional": false,
                      "range": [
                        740,
                        755
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 41
                        },
                        "start": {
                          "column": 11,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      740,
                      755
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 41
                      },
                      "start": {
                        "column": 11,
                        "line": 41
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      758,
                      762
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 41
                      },
                      "start": {
                        "column": 29,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  740,
                  762
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 41
                  },
                  "start": {
                    "column": 11,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              733,
              762
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          "init": null,
          "range": [
            733,
            762
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 41
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        729,
        762
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "WhileStatement",
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
                  "name": "length",
                  "optional": false,
                  "range": [
                    817,
                    823
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 44
                    },
                    "start": {
                      "column": 10,
                      "line": 44
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "range": [
                          826,
                          831
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 44
                          },
                          "start": {
                            "column": 19,
                            "line": 44
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          832,
                          833
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 44
                          },
                          "start": {
                            "column": 25,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        826,
                        834
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 44
                        },
                        "start": {
                          "column": 19,
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
                        835,
                        841
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
                      826,
                      841
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 44
                      },
                      "start": {
                        "column": 19,
                        "line": 44
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "range": [
                          844,
                          849
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 44
                          },
                          "start": {
                            "column": 37,
                            "line": 44
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          850,
                          851
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 44
                          },
                          "start": {
                            "column": 43,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        844,
                        852
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 44
                        },
                        "start": {
                          "column": 37,
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
                        853,
                        859
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 44
                        },
                        "start": {
                          "column": 46,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      844,
                      859
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 44
                      },
                      "start": {
                        "column": 37,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    826,
                    859
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 44
                    },
                    "start": {
                      "column": 19,
                      "line": 44
                    }
                  }
                },
                "range": [
                  817,
                  859
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 44
                  },
                  "start": {
                    "column": 10,
                    "line": 44
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              811,
              859
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "range": [
          805,
          861
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 41,
            "line": 43
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!=",
        "left": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "match",
            "optional": false,
            "range": [
              772,
              777
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 43
              },
              "start": {
                "column": 8,
                "line": 43
              }
            }
          },
          "right": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"xxx\"",
                "value": "xxx",
                "range": [
                  788,
                  793
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 43
                  },
                  "start": {
                    "column": 24,
                    "line": 43
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
                "name": "re",
                "optional": false,
                "range": [
                  780,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 43
                  },
                  "start": {
                    "column": 16,
                    "line": 43
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exec",
                "optional": false,
                "range": [
                  783,
                  787
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 43
                  },
                  "start": {
                    "column": 19,
                    "line": 43
                  }
                }
              },
              "range": [
                780,
                787
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 43
                },
                "start": {
                  "column": 16,
                  "line": 43
                }
              }
            },
            "optional": false,
            "range": [
              780,
              794
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 43
              },
              "start": {
                "column": 16,
                "line": 43
              }
            }
          },
          "range": [
            772,
            794
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 43
            },
            "start": {
              "column": 8,
              "line": 43
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            799,
            803
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 43
            },
            "start": {
              "column": 35,
              "line": 43
            }
          }
        },
        "range": [
          771,
          803
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 43
          },
          "start": {
            "column": 7,
            "line": 43
          }
        }
      },
      "range": [
        764,
        861
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
