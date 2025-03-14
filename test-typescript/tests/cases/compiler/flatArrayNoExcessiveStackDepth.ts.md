__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    490
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              },
              "range": [
                39,
                50
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "range": [
                    41,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 19,
                      "line": 3
                    }
                  }
                },
                "range": [
                  41,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              36,
              50
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            36,
            50
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        22,
        51
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "bar",
            "optional": false,
            "range": [
              58,
              61
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 4
              },
              "start": {
                "column": 6,
                "line": 4
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "range": [
                      83,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 4
                      },
                      "start": {
                        "column": 31,
                        "line": 4
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        90,
                        93
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 4
                        },
                        "start": {
                          "column": 38,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      90,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 4
                      },
                      "start": {
                        "column": 38,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    83,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 4
                    },
                    "start": {
                      "column": 31,
                      "line": 4
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
                    "name": "bar",
                    "optional": false,
                    "range": [
                      76,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  76,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
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
                "name": "foo",
                "optional": false,
                "range": [
                  64,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "flatMap",
                "optional": false,
                "range": [
                  68,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              },
              "range": [
                64,
                75
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
            "optional": false,
            "range": [
              64,
              94
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          },
          "range": [
            58,
            94
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 4
            },
            "start": {
              "column": 6,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        52,
        95
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          133,
          135
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 38,
            "line": 6
          },
          "start": {
            "column": 36,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              119,
              124
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 6
              },
              "start": {
                "column": 22,
                "line": 6
              }
            }
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              124,
              132
            ],
            "params": [
              {
                "type": "TSStringKeyword",
                "range": [
                  125,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 28,
                    "line": 6
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 27,
                "line": 6
              }
            }
          },
          "range": [
            119,
            132
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 6
            },
            "start": {
              "column": 22,
              "line": 6
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          107,
          110
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "range": [
        97,
        135
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "repro_43249",
            "optional": false,
            "range": [
              178,
              189
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 6,
                "line": 10
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
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
                              "raw": "\"No\"",
                              "value": "No",
                              "range": [
                                275,
                                279
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
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
                              269,
                              274
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
                            265,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 12
                            },
                            "start": {
                              "column": 14,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          259,
                          281
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
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
                      249,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 13
                      },
                      "start": {
                        "column": 35,
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
                        "name": "value",
                        "optional": false,
                        "range": [
                          229,
                          234
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
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
                        222,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
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
                        239,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 11
                        },
                        "start": {
                          "column": 25,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      222,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    218,
                    287
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
                        "range": [
                          298,
                          303
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 14
                          },
                          "start": {
                            "column": 10,
                            "line": 14
                          }
                        }
                      },
                      "init": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "/anything/",
                              "regex": {
                                "flags": "",
                                "pattern": "anything"
                              },
                              "value": null,
                              "range": [
                                318,
                                328
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 14
                                },
                                "start": {
                                  "column": 30,
                                  "line": 14
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                306,
                                311
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 14
                                },
                                "start": {
                                  "column": 18,
                                  "line": 14
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "match",
                              "optional": false,
                              "range": [
                                312,
                                317
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 14
                                },
                                "start": {
                                  "column": 24,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              306,
                              317
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 14
                              },
                              "start": {
                                "column": 18,
                                "line": 14
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            306,
                            329
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          }
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "range": [
                            333,
                            335
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 14
                            },
                            "start": {
                              "column": 45,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          306,
                          335
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 14
                          },
                          "start": {
                            "column": 18,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        298,
                        335
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
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
                    292,
                    336
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
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
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          null,
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "extracted",
                            "optional": false,
                            "range": [
                              350,
                              359
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 15
                              },
                              "start": {
                                "column": 13,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "optional": false,
                        "range": [
                          347,
                          360
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 15
                          },
                          "start": {
                            "column": 10,
                            "line": 15
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "range": [
                          363,
                          368
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 15
                          },
                          "start": {
                            "column": 26,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        347,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
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
                    341,
                    369
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
                212,
                371
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 16
                },
                "start": {
                  "column": 40,
                  "line": 10
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
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
                      "column": 35,
                      "line": 10
                    },
                    "start": {
                      "column": 26,
                      "line": 10
                    }
                  },
                  "range": [
                    198,
                    207
                  ],
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      200,
                      207
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 10
                      },
                      "start": {
                        "column": 28,
                        "line": 10
                      }
                    }
                  }
                },
                "range": [
                  193,
                  207
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
                  }
                }
              }
            ],
            "range": [
              192,
              371
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          },
          "range": [
            178,
            371
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        172,
        372
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 10
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
                  460,
                  461
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  464,
                  465
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
                460,
                465
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              460,
              466
            ],
            "loc": {
              "end": {
                "column": 10,
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  471,
                  472
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "right": {
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
                    "column": 9,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              },
              "range": [
                471,
                476
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              471,
              477
            ],
            "loc": {
              "end": {
                "column": 10,
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
          454,
          489
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 80,
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
        "name": "f",
        "optional": false,
        "range": [
          383,
          384
        ],
        "loc": {
          "end": {
            "column": 10,
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
                "column": 56,
                "line": 18
              },
              "start": {
                "column": 35,
                "line": 18
              }
            },
            "range": [
              409,
              430
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  420,
                  430
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Arr",
                      "optional": false,
                      "range": [
                        421,
                        424
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 18
                        },
                        "start": {
                          "column": 47,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      421,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 18
                      },
                      "start": {
                        "column": 47,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      426,
                      429
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 18
                      },
                      "start": {
                        "column": 52,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 18
                  },
                  "start": {
                    "column": 46,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FlatArray",
                "optional": false,
                "range": [
                  411,
                  420
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 18
                  },
                  "start": {
                    "column": 37,
                    "line": 18
                  }
                }
              },
              "range": [
                411,
                430
              ],
              "loc": {
                "end": {
                  "column": 56,
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
            408,
            430
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 18
            },
            "start": {
              "column": 34,
              "line": 18
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 18
              },
              "start": {
                "column": 59,
                "line": 18
              }
            },
            "range": [
              433,
              452
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  444,
                  452
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Arr",
                      "optional": false,
                      "range": [
                        445,
                        448
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 18
                        },
                        "start": {
                          "column": 71,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      445,
                      448
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 18
                      },
                      "start": {
                        "column": 71,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "range": [
                        450,
                        451
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 18
                        },
                        "start": {
                          "column": 76,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      450,
                      451
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 18
                      },
                      "start": {
                        "column": 76,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 78,
                    "line": 18
                  },
                  "start": {
                    "column": 70,
                    "line": 18
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FlatArray",
                "optional": false,
                "range": [
                  435,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 18
                  },
                  "start": {
                    "column": 61,
                    "line": 18
                  }
                }
              },
              "range": [
                435,
                452
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 18
                },
                "start": {
                  "column": 61,
                  "line": 18
                }
              }
            }
          },
          "range": [
            432,
            452
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 18
            },
            "start": {
              "column": 58,
              "line": 18
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        },
        "range": [
          384,
          407
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Arr",
              "optional": false,
              "range": [
                385,
                388
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              385,
              388
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 18
              },
              "start": {
                "column": 11,
                "line": 18
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSNumberKeyword",
              "range": [
                400,
                406
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 18
                },
                "start": {
                  "column": 26,
                  "line": 18
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                390,
                391
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 18
                }
              }
            },
            "out": false,
            "range": [
              390,
              406
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 18
              },
              "start": {
                "column": 16,
                "line": 18
              }
            }
          }
        ]
      },
      "range": [
        374,
        489
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
