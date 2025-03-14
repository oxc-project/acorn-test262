__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    553
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          37,
          553
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
              "name": "_commandBased",
              "optional": false,
              "range": [
                43,
                56
              ],
              "loc": {
                "end": {
                  "column": 17,
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
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              },
              "range": [
                56,
                65
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  58,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 19,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              43,
              66
            ],
            "loc": {
              "end": {
                "column": 27,
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
              "name": "_commandElement",
              "optional": false,
              "range": [
                71,
                86
              ],
              "loc": {
                "end": {
                  "column": 19,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              },
              "range": [
                86,
                95
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  88,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              71,
              96
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
              "name": "commandElement",
              "optional": false,
              "range": [
                101,
                115
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 27,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              },
              "range": [
                115,
                124
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  117,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 4
                  },
                  "start": {
                    "column": 20,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              101,
              125
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
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
              "range": [
                131,
                142
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                142,
                551
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
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  352,
                                  356
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 11
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandBased",
                                "optional": false,
                                "range": [
                                  357,
                                  370
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                352,
                                370
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 11
                                },
                                "start": {
                                  "column": 12,
                                  "line": 11
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "false",
                              "value": false,
                              "range": [
                                373,
                                378
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 11
                                },
                                "start": {
                                  "column": 33,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              352,
                              378
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 11
                              },
                              "start": {
                                "column": 12,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            352,
                            379
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        338,
                        389
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
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
                                "type": "ThisExpression",
                                "range": [
                                  238,
                                  242
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
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
                                "name": "_commandBased",
                                "optional": false,
                                "range": [
                                  243,
                                  256
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 8
                                  }
                                }
                              },
                              "range": [
                                238,
                                256
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 8
                                },
                                "start": {
                                  "column": 12,
                                  "line": 8
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "true",
                              "value": true,
                              "range": [
                                259,
                                263
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 8
                                },
                                "start": {
                                  "column": 33,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              238,
                              263
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            238,
                            264
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
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
                                  277,
                                  281
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 9
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandElement",
                                "optional": false,
                                "range": [
                                  282,
                                  297
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                277,
                                297
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 9
                                },
                                "start": {
                                  "column": 12,
                                  "line": 9
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "target",
                                "optional": false,
                                "range": [
                                  300,
                                  306
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 9
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "commandElement",
                                "optional": false,
                                "range": [
                                  307,
                                  321
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                300,
                                321
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 9
                                },
                                "start": {
                                  "column": 35,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              277,
                              321
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 9
                              },
                              "start": {
                                "column": 12,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            277,
                            322
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        224,
                        332
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 10
                        },
                        "start": {
                          "column": 62,
                          "line": 7
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "instanceof",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "target",
                        "optional": false,
                        "range": [
                          174,
                          180
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DatasourceCommandWidgetElement",
                        "optional": false,
                        "range": [
                          192,
                          222
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 7
                          },
                          "start": {
                            "column": 30,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        174,
                        222
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      170,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  490,
                                  494
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 15
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_commandElement",
                                "optional": false,
                                "range": [
                                  495,
                                  510
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                490,
                                510
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 15
                                },
                                "start": {
                                  "column": 12,
                                  "line": 15
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "target",
                                "optional": false,
                                "range": [
                                  513,
                                  519
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 15
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "commandElement",
                                "optional": false,
                                "range": [
                                  520,
                                  534
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                513,
                                534
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 15
                                },
                                "start": {
                                  "column": 35,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              490,
                              534
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 15
                              },
                              "start": {
                                "column": 12,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            490,
                            535
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
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
                        476,
                        545
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 85,
                          "line": 14
                        }
                      }
                    },
                    "test": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            403,
                            407
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_commandBased",
                          "optional": false,
                          "range": [
                            408,
                            421
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 14
                            },
                            "start": {
                              "column": 17,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          403,
                          421
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 14
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "instanceof",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "target",
                          "optional": false,
                          "range": [
                            425,
                            431
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 14
                            },
                            "start": {
                              "column": 34,
                              "line": 14
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "DatasourceCommandWidgetElement",
                          "optional": false,
                          "range": [
                            443,
                            473
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 14
                            },
                            "start": {
                              "column": 52,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          425,
                          473
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 14
                          },
                          "start": {
                            "column": 34,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        403,
                        474
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 14
                        },
                        "start": {
                          "column": 12,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      399,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  160,
                  551
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 33,
                    "line": 6
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
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 6
                      },
                      "start": {
                        "column": 22,
                        "line": 6
                      }
                    },
                    "range": [
                      149,
                      158
                    ],
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "range": [
                        151,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 6
                        },
                        "start": {
                          "column": 24,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    143,
                    158
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              131,
              551
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 37,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DatasourceCommandWidgetElement",
        "optional": false,
        "range": [
          6,
          36
        ],
        "loc": {
          "end": {
            "column": 36,
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
        553
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
