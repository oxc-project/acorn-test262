__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    870
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          428
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
              "name": "self",
              "optional": false,
              "range": [
                14,
                18
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ThisExpression",
              "range": [
                21,
                25
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              26
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 2
              },
              "start": {
                "column": 4,
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
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                31,
                32
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  39,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 12,
                    "line": 3
                  }
                }
              },
              "range": [
                35,
                42
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              31,
              43
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 4,
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
              "name": "foo",
              "optional": false,
              "range": [
                48,
                51
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 4,
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
                51,
                82
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        71,
                        75
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      64,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  54,
                  82
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 10,
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
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              }
            },
            "range": [
              48,
              82
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
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
              "name": "f1",
              "optional": false,
              "range": [
                87,
                89
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 4,
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
                89,
                165
              ],
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            102,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            107,
                            108
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 8
                            },
                            "start": {
                              "column": 13,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          102,
                          108
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            111,
                            115
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
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            116,
                            120
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 8
                            },
                            "start": {
                              "column": 22,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          111,
                          120
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        102,
                        120
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      102,
                      121
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            130,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            135,
                            139
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 9
                            },
                            "start": {
                              "column": 13,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          130,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            142,
                            146
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 9
                            },
                            "start": {
                              "column": 20,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            147,
                            148
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 9
                            },
                            "start": {
                              "column": 25,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          142,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 9
                          },
                          "start": {
                            "column": 20,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        130,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      130,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  92,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 7
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
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              }
            },
            "range": [
              87,
              165
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
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
              "name": "f2",
              "optional": false,
              "range": [
                170,
                172
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                172,
                344
              ],
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 12
                              },
                              "start": {
                                "column": 13,
                                "line": 12
                              }
                            },
                            "range": [
                              190,
                              195
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false,
                                  "range": [
                                    192,
                                    193
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 12
                                    }
                                  }
                                },
                                "range": [
                                  192,
                                  193
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                192,
                                195
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 12
                                },
                                "start": {
                                  "column": 15,
                                  "line": 12
                                }
                              }
                            }
                          },
                          "range": [
                            189,
                            195
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          189,
                          195
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      185,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
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
                            209,
                            210
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ThisExpression",
                              "range": [
                                214,
                                218
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
                            },
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  220,
                                  224
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 13
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "range": [
                                  225,
                                  226
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                220,
                                226
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 13
                                },
                                "start": {
                                  "column": 23,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "range": [
                            213,
                            227
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 13
                            },
                            "start": {
                              "column": 16,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          209,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 13
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      205,
                      228
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
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
                                "column": 21,
                                "line": 14
                              },
                              "start": {
                                "column": 13,
                                "line": 14
                              }
                            },
                            "range": [
                              277,
                              285
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSThisType",
                                "range": [
                                  279,
                                  283
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                279,
                                285
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
                            }
                          },
                          "range": [
                            276,
                            285
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          276,
                          285
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      272,
                      286
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
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
                          "range": [
                            299,
                            300
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ThisExpression",
                              "range": [
                                304,
                                308
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 15
                                },
                                "start": {
                                  "column": 17,
                                  "line": 15
                                }
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  310,
                                  314
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
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
                                "name": "self",
                                "optional": false,
                                "range": [
                                  315,
                                  319
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                310,
                                319
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 15
                                },
                                "start": {
                                  "column": 23,
                                  "line": 15
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "null",
                              "value": null,
                              "range": [
                                321,
                                325
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 15
                                },
                                "start": {
                                  "column": 34,
                                  "line": 15
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "range": [
                                327,
                                336
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 15
                                },
                                "start": {
                                  "column": 40,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "range": [
                            303,
                            337
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 15
                            },
                            "start": {
                              "column": 16,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          299,
                          337
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      295,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  175,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 9,
                    "line": 11
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
                  "line": 16
                },
                "start": {
                  "column": 6,
                  "line": 11
                }
              }
            },
            "range": [
              170,
              344
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 11
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
              "name": "f3",
              "optional": false,
              "range": [
                349,
                351
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                351,
                426
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            394,
                            398
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 18
                            },
                            "start": {
                              "column": 28,
                              "line": 18
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            399,
                            403
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 18
                            },
                            "start": {
                              "column": 33,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          394,
                          403
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 18
                          },
                          "start": {
                            "column": 28,
                            "line": 18
                          }
                        }
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            385,
                            389
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 18
                            },
                            "start": {
                              "column": 19,
                              "line": 18
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            390,
                            391
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 18
                            },
                            "start": {
                              "column": 24,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          385,
                          391
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 18
                          },
                          "start": {
                            "column": 19,
                            "line": 18
                          }
                        }
                      },
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          381,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 18
                          },
                          "start": {
                            "column": 15,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        381,
                        403
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 18
                        },
                        "start": {
                          "column": 15,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      374,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  364,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 19,
                    "line": 17
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
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    },
                    "range": [
                      353,
                      362
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        355,
                        362
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 17
                        },
                        "start": {
                          "column": 10,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    352,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 17
                    },
                    "start": {
                      "column": 7,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 17
                }
              }
            },
            "range": [
              349,
              426
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 17
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
        "name": "C",
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
        428
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          448,
          869
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
              "name": "self1",
              "optional": false,
              "range": [
                454,
                459
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ThisExpression",
              "range": [
                462,
                466
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 23
                }
              }
            },
            "range": [
              454,
              467
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
              "type": "Identifier",
              "decorators": [],
              "name": "self2",
              "optional": false,
              "range": [
                472,
                477
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "range": [
                  480,
                  484
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 24
                  },
                  "start": {
                    "column": 12,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "self",
                "optional": false,
                "range": [
                  485,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 24
                  },
                  "start": {
                    "column": 17,
                    "line": 24
                  }
                }
              },
              "range": [
                480,
                489
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 24
                }
              }
            },
            "range": [
              472,
              490
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
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
              "type": "Identifier",
              "decorators": [],
              "name": "self3",
              "optional": false,
              "range": [
                495,
                500
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    503,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 25
                    },
                    "start": {
                      "column": 12,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    508,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 25
                    },
                    "start": {
                      "column": 17,
                      "line": 25
                    }
                  }
                },
                "range": [
                  503,
                  511
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 25
                  },
                  "start": {
                    "column": 12,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "range": [
                503,
                513
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              }
            },
            "range": [
              495,
              514
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                519,
                520
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  527,
                  528
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 26
                  }
                }
              },
              "range": [
                523,
                530
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "range": [
              519,
              531
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                536,
                539
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
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
                539,
                867
              ],
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            552,
                            556
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 28
                            },
                            "start": {
                              "column": 8,
                              "line": 28
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            557,
                            561
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 28
                            },
                            "start": {
                              "column": 13,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          552,
                          561
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 28
                          },
                          "start": {
                            "column": 8,
                            "line": 28
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            564,
                            568
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 28
                            },
                            "start": {
                              "column": 20,
                              "line": 28
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self1",
                          "optional": false,
                          "range": [
                            569,
                            574
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 28
                            },
                            "start": {
                              "column": 25,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          564,
                          574
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 28
                          },
                          "start": {
                            "column": 20,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        552,
                        574
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      552,
                      575
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            584,
                            588
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 29
                            },
                            "start": {
                              "column": 8,
                              "line": 29
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            589,
                            593
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 29
                            },
                            "start": {
                              "column": 13,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          584,
                          593
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 29
                          },
                          "start": {
                            "column": 8,
                            "line": 29
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            596,
                            600
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 29
                            },
                            "start": {
                              "column": 20,
                              "line": 29
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self2",
                          "optional": false,
                          "range": [
                            601,
                            606
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 29
                            },
                            "start": {
                              "column": 25,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          596,
                          606
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        584,
                        606
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      584,
                      607
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            616,
                            620
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 30
                            },
                            "start": {
                              "column": 8,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            621,
                            625
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 30
                            },
                            "start": {
                              "column": 13,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          616,
                          625
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 30
                          },
                          "start": {
                            "column": 8,
                            "line": 30
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            628,
                            632
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 30
                            },
                            "start": {
                              "column": 20,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self3",
                          "optional": false,
                          "range": [
                            633,
                            638
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 30
                            },
                            "start": {
                              "column": 25,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          628,
                          638
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
                      },
                      "range": [
                        616,
                        638
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      616,
                      639
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            648,
                            652
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 31
                            },
                            "start": {
                              "column": 8,
                              "line": 31
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self1",
                          "optional": false,
                          "range": [
                            653,
                            658
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 31
                            },
                            "start": {
                              "column": 13,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          648,
                          658
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 31
                          },
                          "start": {
                            "column": 8,
                            "line": 31
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            661,
                            665
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 31
                            },
                            "start": {
                              "column": 21,
                              "line": 31
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            666,
                            670
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 31
                            },
                            "start": {
                              "column": 26,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          661,
                          670
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 31
                          },
                          "start": {
                            "column": 21,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        648,
                        670
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      648,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            680,
                            684
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 32
                            },
                            "start": {
                              "column": 8,
                              "line": 32
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self2",
                          "optional": false,
                          "range": [
                            685,
                            690
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 32
                            },
                            "start": {
                              "column": 13,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          680,
                          690
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 32
                          },
                          "start": {
                            "column": 8,
                            "line": 32
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            693,
                            697
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 32
                            },
                            "start": {
                              "column": 21,
                              "line": 32
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            698,
                            702
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 32
                            },
                            "start": {
                              "column": 26,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          693,
                          702
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 32
                          },
                          "start": {
                            "column": 21,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        680,
                        702
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      680,
                      703
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            712,
                            716
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 33
                            },
                            "start": {
                              "column": 8,
                              "line": 33
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self3",
                          "optional": false,
                          "range": [
                            717,
                            722
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 33
                            },
                            "start": {
                              "column": 13,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          712,
                          722
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 33
                          },
                          "start": {
                            "column": 8,
                            "line": 33
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            725,
                            729
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 33
                            },
                            "start": {
                              "column": 21,
                              "line": 33
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            730,
                            734
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 33
                            },
                            "start": {
                              "column": 26,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          725,
                          734
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 33
                          },
                          "start": {
                            "column": 21,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        712,
                        734
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      712,
                      735
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            744,
                            748
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 34
                            },
                            "start": {
                              "column": 8,
                              "line": 34
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            749,
                            750
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 34
                            },
                            "start": {
                              "column": 13,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          744,
                          750
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 34
                          },
                          "start": {
                            "column": 8,
                            "line": 34
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            753,
                            757
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 34
                            },
                            "start": {
                              "column": 17,
                              "line": 34
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            758,
                            762
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 34
                            },
                            "start": {
                              "column": 22,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          753,
                          762
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 34
                          },
                          "start": {
                            "column": 17,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        744,
                        762
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      744,
                      763
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            772,
                            776
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 35
                            },
                            "start": {
                              "column": 8,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            777,
                            778
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 35
                            },
                            "start": {
                              "column": 13,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          772,
                          778
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 35
                          },
                          "start": {
                            "column": 8,
                            "line": 35
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            781,
                            785
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 35
                            },
                            "start": {
                              "column": 17,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            786,
                            787
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 35
                            },
                            "start": {
                              "column": 22,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          781,
                          787
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 35
                          },
                          "start": {
                            "column": 17,
                            "line": 35
                          }
                        }
                      },
                      "range": [
                        772,
                        787
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      772,
                      788
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            807,
                            811
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 36
                            },
                            "start": {
                              "column": 8,
                              "line": 36
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "self",
                          "optional": false,
                          "range": [
                            812,
                            816
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 36
                            },
                            "start": {
                              "column": 13,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          807,
                          816
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 36
                          },
                          "start": {
                            "column": 8,
                            "line": 36
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            819,
                            823
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 36
                            },
                            "start": {
                              "column": 20,
                              "line": 36
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            824,
                            825
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 36
                            },
                            "start": {
                              "column": 25,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          819,
                          825
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 36
                          },
                          "start": {
                            "column": 20,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        807,
                        825
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      807,
                      826
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            845,
                            849
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 37
                            },
                            "start": {
                              "column": 8,
                              "line": 37
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "range": [
                            850,
                            851
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 37
                            },
                            "start": {
                              "column": 13,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          845,
                          851
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 37
                          },
                          "start": {
                            "column": 8,
                            "line": 37
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            854,
                            858
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 37
                            },
                            "start": {
                              "column": 17,
                              "line": 37
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            859,
                            860
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 37
                            },
                            "start": {
                              "column": 22,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          854,
                          860
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 37
                          },
                          "start": {
                            "column": 17,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        845,
                        860
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 37
                        },
                        "start": {
                          "column": 8,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      845,
                      861
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
                      }
                    }
                  }
                ],
                "range": [
                  542,
                  867
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 10,
                    "line": 27
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
                  "line": 38
                },
                "start": {
                  "column": 7,
                  "line": 27
                }
              }
            },
            "range": [
              536,
              867
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 18,
            "line": 22
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          436,
          437
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 22
          },
          "start": {
            "column": 6,
            "line": 22
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          446,
          447
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 22
          },
          "start": {
            "column": 16,
            "line": 22
          }
        }
      },
      "range": [
        430,
        869
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
