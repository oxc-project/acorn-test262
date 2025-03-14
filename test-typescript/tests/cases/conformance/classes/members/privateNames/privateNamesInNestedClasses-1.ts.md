__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    547
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          527
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                13,
                17
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 2
                },
                "start": {
                  "column": 3,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "\"A's #foo\"",
              "value": "A's #foo",
              "range": [
                20,
                30
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "range": [
              13,
              31
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 3,
                "line": 2
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "range": [
                35,
                39
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 3,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "\"A's #bar\"",
              "value": "A's #bar",
              "range": [
                42,
                52
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "range": [
              35,
              53
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 3,
                "line": 3
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                57,
                63
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 3,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                64,
                525
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        84,
                        398
                      ],
                      "body": [
                        {
                          "type": "PropertyDefinition",
                          "computed": false,
                          "declare": false,
                          "decorators": [],
                          "definite": false,
                          "key": {
                            "type": "PrivateIdentifier",
                            "name": "foo",
                            "range": [
                              97,
                              101
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 6
                              },
                              "start": {
                                "column": 11,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "override": false,
                          "readonly": false,
                          "static": false,
                          "value": {
                            "type": "Literal",
                            "raw": "\"B's #foo\"",
                            "value": "B's #foo",
                            "range": [
                              104,
                              114
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 6
                              },
                              "start": {
                                "column": 18,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            97,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 6
                            },
                            "start": {
                              "column": 11,
                              "line": 6
                            }
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              127,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 7
                              },
                              "start": {
                                "column": 11,
                                "line": 7
                              }
                            }
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              131,
                              230
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "range": [
                                        157,
                                        158
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 16,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 15,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "foo",
                                      "range": [
                                        159,
                                        163
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 8
                                        }
                                      }
                                    },
                                    "range": [
                                      157,
                                      163
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    157,
                                    164
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 8
                                    }
                                  }
                                }
                              ],
                              "range": [
                                140,
                                230
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 9
                                },
                                "start": {
                                  "column": 24,
                                  "line": 7
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 7
                                    }
                                  },
                                  "range": [
                                    133,
                                    138
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "range": [
                                      135,
                                      138
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 7
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  132,
                                  138
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 9
                              },
                              "start": {
                                "column": 15,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            127,
                            230
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 9
                            },
                            "start": {
                              "column": 11,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "range": [
                              242,
                              245
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 10
                              },
                              "start": {
                                "column": 11,
                                "line": 10
                              }
                            }
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              246,
                              322
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "range": [
                                        270,
                                        271
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 16,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 15,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "foo",
                                      "range": [
                                        272,
                                        276
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      270,
                                      276
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
                                  "range": [
                                    270,
                                    277
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
                              "range": [
                                253,
                                322
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 12
                                },
                                "start": {
                                  "column": 22,
                                  "line": 10
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
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 10
                                    }
                                  },
                                  "range": [
                                    248,
                                    251
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "range": [
                                        250,
                                        251
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "range": [
                                      250,
                                      251
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 10
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  247,
                                  251
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
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 12
                              },
                              "start": {
                                "column": 15,
                                "line": 10
                              }
                            }
                          },
                          "range": [
                            242,
                            322
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 12
                            },
                            "start": {
                              "column": 11,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "MethodDefinition",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "quux",
                            "optional": false,
                            "range": [
                              334,
                              338
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 13
                              },
                              "start": {
                                "column": 11,
                                "line": 13
                              }
                            }
                          },
                          "kind": "method",
                          "optional": false,
                          "override": false,
                          "static": false,
                          "value": {
                            "type": "FunctionExpression",
                            "range": [
                              339,
                              389
                            ],
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "range": [
                                        363,
                                        364
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 16,
                                          "line": 14
                                        },
                                        "start": {
                                          "column": 15,
                                          "line": 14
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "foo",
                                      "range": [
                                        365,
                                        369
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 14
                                        },
                                        "start": {
                                          "column": 17,
                                          "line": 14
                                        }
                                      }
                                    },
                                    "range": [
                                      363,
                                      369
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    363,
                                    370
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 14
                                    }
                                  }
                                }
                              ],
                              "range": [
                                346,
                                389
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 15
                                },
                                "start": {
                                  "column": 23,
                                  "line": 13
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 13
                                    }
                                  },
                                  "range": [
                                    341,
                                    344
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "range": [
                                        343,
                                        344
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "range": [
                                      343,
                                      344
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 13
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  340,
                                  344
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 15
                              },
                              "start": {
                                "column": 16,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            334,
                            389
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 15
                            },
                            "start": {
                              "column": 11,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        82,
                        83
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      76,
                      398
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 16
                      },
                      "start": {
                        "column": 7,
                        "line": 5
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            412,
                            413
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 17
                            },
                            "start": {
                              "column": 13,
                              "line": 17
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              420,
                              421
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 17
                              },
                              "start": {
                                "column": 21,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            416,
                            423
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 17
                            },
                            "start": {
                              "column": 17,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          412,
                          423
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 17
                          },
                          "start": {
                            "column": 13,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      406,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 17
                      },
                      "start": {
                        "column": 7,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            444,
                            445
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 18
                            },
                            "start": {
                              "column": 19,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "range": [
                              436,
                              437
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 18
                              },
                              "start": {
                                "column": 11,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            432,
                            439
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 18
                            },
                            "start": {
                              "column": 7,
                              "line": 18
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "range": [
                            440,
                            443
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 18
                            },
                            "start": {
                              "column": 15,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          432,
                          443
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 18
                          },
                          "start": {
                            "column": 7,
                            "line": 18
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        432,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 18
                        },
                        "start": {
                          "column": 7,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      432,
                      447
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 18
                      },
                      "start": {
                        "column": 7,
                        "line": 18
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            467,
                            468
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 19
                            },
                            "start": {
                              "column": 19,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "range": [
                              459,
                              460
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 19
                              },
                              "start": {
                                "column": 11,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            455,
                            462
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 19
                            },
                            "start": {
                              "column": 7,
                              "line": 19
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "baz",
                          "optional": false,
                          "range": [
                            463,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 19
                            },
                            "start": {
                              "column": 15,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          455,
                          466
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 19
                          },
                          "start": {
                            "column": 7,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        455,
                        469
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 19
                        },
                        "start": {
                          "column": 7,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      455,
                      470
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 19
                      },
                      "start": {
                        "column": 7,
                        "line": 19
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
                          "range": [
                            484,
                            485
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 20
                            },
                            "start": {
                              "column": 13,
                              "line": 20
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "range": [
                              492,
                              493
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 20
                              },
                              "start": {
                                "column": 21,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            488,
                            495
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 20
                            },
                            "start": {
                              "column": 17,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          484,
                          495
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 20
                          },
                          "start": {
                            "column": 13,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      478,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 20
                      },
                      "start": {
                        "column": 7,
                        "line": 20
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
                          "name": "b",
                          "optional": false,
                          "range": [
                            517,
                            518
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 21
                            },
                            "start": {
                              "column": 20,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "range": [
                              508,
                              509
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 21
                              },
                              "start": {
                                "column": 11,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            504,
                            511
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 21
                            },
                            "start": {
                              "column": 7,
                              "line": 21
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "quux",
                          "optional": false,
                          "range": [
                            512,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 21
                            },
                            "start": {
                              "column": 15,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          504,
                          516
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 21
                          },
                          "start": {
                            "column": 7,
                            "line": 21
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        504,
                        519
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 21
                        },
                        "start": {
                          "column": 7,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      504,
                      520
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 21
                      },
                      "start": {
                        "column": 7,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  67,
                  525
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 22
                  },
                  "start": {
                    "column": 13,
                    "line": 4
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
                  "column": 4,
                  "line": 22
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "range": [
              57,
              525
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 22
              },
              "start": {
                "column": 3,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        527
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                533,
                534
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              529,
              536
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "method",
            "optional": false,
            "range": [
              537,
              543
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 25
              },
              "start": {
                "column": 8,
                "line": 25
              }
            }
          },
          "range": [
            529,
            543
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          529,
          545
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        529,
        546
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 26
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
