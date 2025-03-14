__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    1347
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        23,
        92
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            55,
            92
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "lastStrategyApplied",
                "optional": false,
                "range": [
                  61,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                },
                "range": [
                  81,
                  89
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    83,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 26,
                      "line": 4
                    }
                  }
                }
              },
              "range": [
                61,
                90
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 5
            },
            "start": {
              "column": 32,
              "line": 3
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StrategicState",
          "optional": false,
          "range": [
            40,
            54
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 17,
              "line": 3
            }
          }
        },
        "range": [
          30,
          92
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        94,
        473
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "await": false,
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
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "range": [
                                          380,
                                          384
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 20,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "lastStrategyApplied",
                                        "optional": false,
                                        "range": [
                                          385,
                                          404
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 21,
                                            "line": 11
                                          }
                                        }
                                      },
                                      "range": [
                                        380,
                                        404
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 40,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "stratName",
                                      "optional": false,
                                      "range": [
                                        407,
                                        416
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 52,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 43,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      380,
                                      416
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    380,
                                    417
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 11
                                    }
                                  }
                                }
                              ],
                              "range": [
                                362,
                                431
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 12
                                },
                                "start": {
                                  "column": 22,
                                  "line": 10
                                }
                              }
                            },
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "range": [
                                356,
                                360
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 10
                                },
                                "start": {
                                  "column": 16,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              352,
                              431
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 10
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "YieldExpression",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "range": [
                                  450,
                                  454
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 13
                                  }
                                }
                              },
                              "delegate": false,
                              "range": [
                                444,
                                454
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 13
                                },
                                "start": {
                                  "column": 12,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              444,
                              455
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 13
                              },
                              "start": {
                                "column": 12,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "range": [
                          338,
                          465
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 14
                          },
                          "start": {
                            "column": 39,
                            "line": 9
                          }
                        }
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "next",
                              "optional": false,
                              "range": [
                                318,
                                322
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
                            },
                            "init": null,
                            "range": [
                              318,
                              322
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
                        "declare": false,
                        "kind": "const",
                        "range": [
                          312,
                          322
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
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "range": [
                              330,
                              335
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 9
                              },
                              "start": {
                                "column": 31,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "gen",
                          "optional": false,
                          "range": [
                            326,
                            329
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 9
                            },
                            "start": {
                              "column": 27,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          326,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 9
                          },
                          "start": {
                            "column": 27,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        307,
                        465
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "range": [
                    297,
                    471
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 28,
                      "line": 8
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": true,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      290,
                      295
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 21,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  280,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "range": [
                273,
                471
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            }
          ],
          "range": [
            267,
            473
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 16
            },
            "start": {
              "column": 173,
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
          "name": "strategy",
          "optional": false,
          "range": [
            110,
            118
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 7
            },
            "start": {
              "column": 16,
              "line": 7
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "stratName",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 68,
                  "line": 7
                },
                "start": {
                  "column": 60,
                  "line": 7
                }
              },
              "range": [
                154,
                162
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  156,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 7
                  },
                  "start": {
                    "column": 62,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              145,
              162
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 7
              },
              "start": {
                "column": 51,
                "line": 7
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "gen",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 122,
                  "line": 7
                },
                "start": {
                  "column": 73,
                  "line": 7
                }
              },
              "range": [
                167,
                216
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 7
                        },
                        "start": {
                          "column": 77,
                          "line": 7
                        }
                      },
                      "range": [
                        171,
                        174
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            173,
                            174
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 7
                            },
                            "start": {
                              "column": 79,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          173,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 7
                          },
                          "start": {
                            "column": 79,
                            "line": 7
                          }
                        }
                      }
                    },
                    "range": [
                      170,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 7
                      },
                      "start": {
                        "column": 76,
                        "line": 7
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 122,
                      "line": 7
                    },
                    "start": {
                      "column": 82,
                      "line": 7
                    }
                  },
                  "range": [
                    176,
                    216
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        195,
                        216
                      ],
                      "params": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  196,
                                  197
                                ],
                                "loc": {
                                  "end": {
                                    "column": 103,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 102,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                196,
                                197
                              ],
                              "loc": {
                                "end": {
                                  "column": 103,
                                  "line": 7
                                },
                                "start": {
                                  "column": 102,
                                  "line": 7
                                }
                              }
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "range": [
                                200,
                                209
                              ],
                              "loc": {
                                "end": {
                                  "column": 115,
                                  "line": 7
                                },
                                "start": {
                                  "column": 106,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "range": [
                            196,
                            209
                          ],
                          "loc": {
                            "end": {
                              "column": 115,
                              "line": 7
                            },
                            "start": {
                              "column": 102,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSVoidKeyword",
                          "range": [
                            211,
                            215
                          ],
                          "loc": {
                            "end": {
                              "column": 121,
                              "line": 7
                            },
                            "start": {
                              "column": 117,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 122,
                          "line": 7
                        },
                        "start": {
                          "column": 101,
                          "line": 7
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IterableIterator",
                      "optional": false,
                      "range": [
                        179,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 101,
                          "line": 7
                        },
                        "start": {
                          "column": 85,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      179,
                      216
                    ],
                    "loc": {
                      "end": {
                        "column": 122,
                        "line": 7
                      },
                      "start": {
                        "column": 85,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  169,
                  216
                ],
                "loc": {
                  "end": {
                    "column": 122,
                    "line": 7
                  },
                  "start": {
                    "column": 75,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              164,
              216
            ],
            "loc": {
              "end": {
                "column": 122,
                "line": 7
              },
              "start": {
                "column": 70,
                "line": 7
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 172,
              "line": 7
            },
            "start": {
              "column": 123,
              "line": 7
            }
          },
          "range": [
            217,
            266
          ],
          "typeAnnotation": {
            "type": "TSFunctionType",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 130,
                      "line": 7
                    },
                    "start": {
                      "column": 127,
                      "line": 7
                    }
                  },
                  "range": [
                    221,
                    224
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        223,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 130,
                          "line": 7
                        },
                        "start": {
                          "column": 129,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      223,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 130,
                        "line": 7
                      },
                      "start": {
                        "column": 129,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  220,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 130,
                    "line": 7
                  },
                  "start": {
                    "column": 126,
                    "line": 7
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 172,
                  "line": 7
                },
                "start": {
                  "column": 132,
                  "line": 7
                }
              },
              "range": [
                226,
                266
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    245,
                    266
                  ],
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              246,
                              247
                            ],
                            "loc": {
                              "end": {
                                "column": 153,
                                "line": 7
                              },
                              "start": {
                                "column": 152,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            246,
                            247
                          ],
                          "loc": {
                            "end": {
                              "column": 153,
                              "line": 7
                            },
                            "start": {
                              "column": 152,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            250,
                            259
                          ],
                          "loc": {
                            "end": {
                              "column": 165,
                              "line": 7
                            },
                            "start": {
                              "column": 156,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        246,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 165,
                          "line": 7
                        },
                        "start": {
                          "column": 152,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "TSVoidKeyword",
                      "range": [
                        261,
                        265
                      ],
                      "loc": {
                        "end": {
                          "column": 171,
                          "line": 7
                        },
                        "start": {
                          "column": 167,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 172,
                      "line": 7
                    },
                    "start": {
                      "column": 151,
                      "line": 7
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IterableIterator",
                  "optional": false,
                  "range": [
                    229,
                    245
                  ],
                  "loc": {
                    "end": {
                      "column": 151,
                      "line": 7
                    },
                    "start": {
                      "column": 135,
                      "line": 7
                    }
                  }
                },
                "range": [
                  229,
                  266
                ],
                "loc": {
                  "end": {
                    "column": 172,
                    "line": 7
                  },
                  "start": {
                    "column": 135,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              219,
              266
            ],
            "loc": {
              "end": {
                "column": 172,
                "line": 7
              },
              "start": {
                "column": 125,
                "line": 7
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 50,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          },
          "range": [
            118,
            144
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
                  "name": "StrategicState",
                  "optional": false,
                  "range": [
                    129,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                },
                "range": [
                  129,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 7
                  },
                  "start": {
                    "column": 35,
                    "line": 7
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
                  119,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 7
                  },
                  "start": {
                    "column": 25,
                    "line": 7
                  }
                }
              },
              "out": false,
              "range": [
                119,
                143
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 7
                },
                "start": {
                  "column": 25,
                  "line": 7
                }
              }
            }
          ]
        },
        "range": [
          101,
          473
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        475,
        558
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            504,
            558
          ],
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 6,
                        "line": 19
                      }
                    },
                    "range": [
                      512,
                      515
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          514,
                          515
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
                        514,
                        515
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
                    }
                  },
                  "range": [
                    511,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 19
                    },
                    "start": {
                      "column": 5,
                      "line": 19
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                },
                "range": [
                  516,
                  555
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      534,
                      555
                    ],
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                535,
                                536
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 19
                                },
                                "start": {
                                  "column": 29,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              535,
                              536
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 19
                              },
                              "start": {
                                "column": 29,
                                "line": 19
                              }
                            }
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              539,
                              548
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 19
                              },
                              "start": {
                                "column": 33,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          535,
                          548
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 19
                          },
                          "start": {
                            "column": 29,
                            "line": 19
                          }
                        }
                      },
                      {
                        "type": "TSVoidKeyword",
                        "range": [
                          550,
                          554
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 19
                          },
                          "start": {
                            "column": 44,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 19
                      },
                      "start": {
                        "column": 28,
                        "line": 19
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IterableIterator",
                    "optional": false,
                    "range": [
                      518,
                      534
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 19
                      },
                      "start": {
                        "column": 12,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    518,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 19
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                510,
                556
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 29,
              "line": 18
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strategy",
          "optional": false,
          "range": [
            492,
            500
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 18
            },
            "start": {
              "column": 17,
              "line": 18
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 28,
              "line": 18
            },
            "start": {
              "column": 25,
              "line": 18
            }
          },
          "range": [
            500,
            503
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
                  501,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 18
                  },
                  "start": {
                    "column": 26,
                    "line": 18
                  }
                }
              },
              "out": false,
              "range": [
                501,
                502
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 18
                },
                "start": {
                  "column": 26,
                  "line": 18
                }
              }
            }
          ]
        },
        "range": [
          482,
          558
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        560,
        626
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            606,
            626
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  612,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
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
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 7,
                    "line": 23
                  }
                },
                "range": [
                  615,
                  623
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    617,
                    623
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 23
                    }
                  }
                }
              },
              "range": [
                612,
                624
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 46,
              "line": 22
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
              "name": "StrategicState",
              "optional": false,
              "range": [
                591,
                605
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 22
                },
                "start": {
                  "column": 31,
                  "line": 22
                }
              }
            },
            "range": [
              591,
              605
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 22
              },
              "start": {
                "column": 31,
                "line": 22
              }
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "State",
          "optional": false,
          "range": [
            577,
            582
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 22
            },
            "start": {
              "column": 17,
              "line": 22
            }
          }
        },
        "range": [
          567,
          626
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 22
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        628,
        873
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nothing",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 26
                  },
                  "start": {
                    "column": 20,
                    "line": 26
                  }
                },
                "range": [
                  648,
                  665
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      658,
                      665
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "range": [
                            659,
                            664
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 26
                            },
                            "start": {
                              "column": 31,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          659,
                          664
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 26
                          },
                          "start": {
                            "column": 31,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 26
                      },
                      "start": {
                        "column": 30,
                        "line": 26
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "range": [
                      650,
                      658
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 26
                      },
                      "start": {
                        "column": 22,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    650,
                    665
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 26
                    },
                    "start": {
                      "column": 22,
                      "line": 26
                    }
                  }
                }
              },
              "range": [
                641,
                665
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 26
                },
                "start": {
                  "column": 13,
                  "line": 26
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"Nothing\"",
                  "value": "Nothing",
                  "range": [
                    677,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 26
                    },
                    "start": {
                      "column": 49,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "argument": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              725,
                              726
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 27
                              },
                              "start": {
                                "column": 10,
                                "line": 27
                              }
                            }
                          },
                          "delegate": false,
                          "range": [
                            719,
                            726
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
                          719,
                          727
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "range": [
                            788,
                            793
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 28
                            },
                            "start": {
                              "column": 11,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          781,
                          794
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 28
                          },
                          "start": {
                            "column": 4,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "range": [
                      713,
                      871
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 29
                      },
                      "start": {
                        "column": 85,
                        "line": 26
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 26
                          },
                          "start": {
                            "column": 76,
                            "line": 26
                          }
                        },
                        "range": [
                          704,
                          711
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "range": [
                              706,
                              711
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 26
                              },
                              "start": {
                                "column": 78,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            706,
                            711
                          ],
                          "loc": {
                            "end": {
                              "column": 83,
                              "line": 26
                            },
                            "start": {
                              "column": 78,
                              "line": 26
                            }
                          }
                        }
                      },
                      "range": [
                        699,
                        711
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 26
                        },
                        "start": {
                          "column": 71,
                          "line": 26
                        }
                      }
                    }
                  ],
                  "range": [
                    688,
                    871
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 29
                    },
                    "start": {
                      "column": 60,
                      "line": 26
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "range": [
                  668,
                  676
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 26
                  },
                  "start": {
                    "column": 40,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                668,
                872
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 29
                },
                "start": {
                  "column": 40,
                  "line": 26
                }
              }
            },
            "range": [
              641,
              872
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 29
              },
              "start": {
                "column": 13,
                "line": 26
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          635,
          873
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 29
          },
          "start": {
            "column": 7,
            "line": 26
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 3,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        875,
        966
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nothing1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 31
                  },
                  "start": {
                    "column": 21,
                    "line": 31
                  }
                },
                "range": [
                  896,
                  913
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      906,
                      913
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "range": [
                            907,
                            912
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 31
                            },
                            "start": {
                              "column": 32,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          907,
                          912
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 31
                          },
                          "start": {
                            "column": 32,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 31
                      },
                      "start": {
                        "column": 31,
                        "line": 31
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "range": [
                      898,
                      906
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 31
                      },
                      "start": {
                        "column": 23,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    898,
                    913
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 31
                    },
                    "start": {
                      "column": 23,
                      "line": 31
                    }
                  }
                }
              },
              "range": [
                888,
                913
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 31
                },
                "start": {
                  "column": 13,
                  "line": 31
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"Nothing\"",
                  "value": "Nothing",
                  "range": [
                    925,
                    934
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 31
                    },
                    "start": {
                      "column": 50,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      961,
                      964
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 32
                      },
                      "start": {
                        "column": 86,
                        "line": 31
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 84,
                            "line": 31
                          },
                          "start": {
                            "column": 77,
                            "line": 31
                          }
                        },
                        "range": [
                          952,
                          959
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "range": [
                              954,
                              959
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 31
                              },
                              "start": {
                                "column": 79,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            954,
                            959
                          ],
                          "loc": {
                            "end": {
                              "column": 84,
                              "line": 31
                            },
                            "start": {
                              "column": 79,
                              "line": 31
                            }
                          }
                        }
                      },
                      "range": [
                        947,
                        959
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 31
                        },
                        "start": {
                          "column": 72,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "range": [
                    936,
                    964
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 32
                    },
                    "start": {
                      "column": 61,
                      "line": 31
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "range": [
                  916,
                  924
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 31
                  },
                  "start": {
                    "column": 41,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "range": [
                916,
                965
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 32
                },
                "start": {
                  "column": 41,
                  "line": 31
                }
              }
            },
            "range": [
              888,
              965
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 32
              },
              "start": {
                "column": 13,
                "line": 31
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          882,
          966
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 32
          },
          "start": {
            "column": 7,
            "line": 31
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 3,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        968,
        1148
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nothing2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 34
                  },
                  "start": {
                    "column": 21,
                    "line": 34
                  }
                },
                "range": [
                  989,
                  1006
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      999,
                      1006
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "range": [
                            1000,
                            1005
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 34
                            },
                            "start": {
                              "column": 32,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1000,
                          1005
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 34
                          },
                          "start": {
                            "column": 32,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 34
                      },
                      "start": {
                        "column": 31,
                        "line": 34
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "range": [
                      991,
                      999
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 34
                      },
                      "start": {
                        "column": 23,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    991,
                    1006
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 34
                    },
                    "start": {
                      "column": 23,
                      "line": 34
                    }
                  }
                }
              },
              "range": [
                981,
                1006
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 34
                },
                "start": {
                  "column": 13,
                  "line": 34
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"Nothing\"",
                  "value": "Nothing",
                  "range": [
                    1018,
                    1027
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 34
                    },
                    "start": {
                      "column": 50,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1067,
                            1068
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 35
                            },
                            "start": {
                              "column": 11,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          1060,
                          1069
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 35
                          },
                          "start": {
                            "column": 4,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "range": [
                      1054,
                      1146
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 36
                      },
                      "start": {
                        "column": 86,
                        "line": 34
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 84,
                            "line": 34
                          },
                          "start": {
                            "column": 77,
                            "line": 34
                          }
                        },
                        "range": [
                          1045,
                          1052
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "range": [
                              1047,
                              1052
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 34
                              },
                              "start": {
                                "column": 79,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1047,
                            1052
                          ],
                          "loc": {
                            "end": {
                              "column": 84,
                              "line": 34
                            },
                            "start": {
                              "column": 79,
                              "line": 34
                            }
                          }
                        }
                      },
                      "range": [
                        1040,
                        1052
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 34
                        },
                        "start": {
                          "column": 72,
                          "line": 34
                        }
                      }
                    }
                  ],
                  "range": [
                    1029,
                    1146
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 36
                    },
                    "start": {
                      "column": 61,
                      "line": 34
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "range": [
                  1009,
                  1017
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 34
                  },
                  "start": {
                    "column": 41,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "range": [
                1009,
                1147
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 36
                },
                "start": {
                  "column": 41,
                  "line": 34
                }
              }
            },
            "range": [
              981,
              1147
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 36
              },
              "start": {
                "column": 13,
                "line": 34
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          975,
          1148
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 36
          },
          "start": {
            "column": 7,
            "line": 34
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 3,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1150,
        1347
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nothing3",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 38
                  },
                  "start": {
                    "column": 21,
                    "line": 38
                  }
                },
                "range": [
                  1171,
                  1188
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      1181,
                      1188
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "State",
                          "optional": false,
                          "range": [
                            1182,
                            1187
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 38
                            },
                            "start": {
                              "column": 32,
                              "line": 38
                            }
                          }
                        },
                        "range": [
                          1182,
                          1187
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 38
                          },
                          "start": {
                            "column": 32,
                            "line": 38
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 38
                      },
                      "start": {
                        "column": 31,
                        "line": 38
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Strategy",
                    "optional": false,
                    "range": [
                      1173,
                      1181
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 38
                      },
                      "start": {
                        "column": 23,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    1173,
                    1188
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 38
                    },
                    "start": {
                      "column": 23,
                      "line": 38
                    }
                  }
                }
              },
              "range": [
                1163,
                1188
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 38
                },
                "start": {
                  "column": 13,
                  "line": 38
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"Nothing\"",
                  "value": "Nothing",
                  "range": [
                    1200,
                    1209
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 38
                    },
                    "start": {
                      "column": 50,
                      "line": 38
                    }
                  }
                },
                {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "YieldExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "range": [
                              1248,
                              1253
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 39
                              },
                              "start": {
                                "column": 10,
                                "line": 39
                              }
                            }
                          },
                          "delegate": false,
                          "range": [
                            1242,
                            1253
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 39
                            },
                            "start": {
                              "column": 4,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          1242,
                          1254
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 39
                          },
                          "start": {
                            "column": 4,
                            "line": 39
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1266,
                            1267
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 40
                            },
                            "start": {
                              "column": 11,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          1259,
                          1268
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 40
                          },
                          "start": {
                            "column": 4,
                            "line": 40
                          }
                        }
                      }
                    ],
                    "range": [
                      1236,
                      1345
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 41
                      },
                      "start": {
                        "column": 86,
                        "line": 38
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 84,
                            "line": 38
                          },
                          "start": {
                            "column": 77,
                            "line": 38
                          }
                        },
                        "range": [
                          1227,
                          1234
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "State",
                            "optional": false,
                            "range": [
                              1229,
                              1234
                            ],
                            "loc": {
                              "end": {
                                "column": 84,
                                "line": 38
                              },
                              "start": {
                                "column": 79,
                                "line": 38
                              }
                            }
                          },
                          "range": [
                            1229,
                            1234
                          ],
                          "loc": {
                            "end": {
                              "column": 84,
                              "line": 38
                            },
                            "start": {
                              "column": 79,
                              "line": 38
                            }
                          }
                        }
                      },
                      "range": [
                        1222,
                        1234
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 38
                        },
                        "start": {
                          "column": 72,
                          "line": 38
                        }
                      }
                    }
                  ],
                  "range": [
                    1211,
                    1345
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 41
                    },
                    "start": {
                      "column": 61,
                      "line": 38
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "strategy",
                "optional": false,
                "range": [
                  1191,
                  1199
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 38
                  },
                  "start": {
                    "column": 41,
                    "line": 38
                  }
                }
              },
              "optional": false,
              "range": [
                1191,
                1346
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 41
                },
                "start": {
                  "column": 41,
                  "line": 38
                }
              }
            },
            "range": [
              1163,
              1346
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 41
              },
              "start": {
                "column": 13,
                "line": 38
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1157,
          1347
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 41
          },
          "start": {
            "column": 7,
            "line": 38
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 3,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 3,
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
